import { arrow, autoUpdate, computePosition, flip, offset, shift, size } from '@floating-ui/dom';
import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { animateTo, stopAnimations } from '../../internal/animate';
import { emit, waitForEvent } from '../../internal/event';
import { getTabbableBoundary } from '../../internal/tabbable';
import { HasSlotController } from '../../internal/slot';
import { watch } from '../../internal/watch';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { LocalizeController } from '../../utilities/localize';
import styles from './popover.styles';
import type LynkButton from '../../components/button/button';
import type LynkIconButton from '../../components/icon-button/icon-button';

/**
 * @since 1.0
 * @status experimental
 *
 * @slot - The popover's content.
 * @slot label - The dialog's label. Alternatively, you can use the label prop.
 * @slot trigger - The popover's trigger, usually a `<lynk-button>` element.
 * @slot footer - The dialog's footer, usually one or more buttons representing various options.
 *
 * @event on:show - Emitted when the popover opens.
 * @event after:show - Emitted after the popover opens and all animations are complete.
 * @event on:hide - Emitted when the popover closes.
 * @event after:hide - Emitted after the popover closes and all animations are complete.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart trigger - The container that wraps the trigger.
 * @csspart panel - The panel that gets shown when the popover is open.
 *
 * @animation popover.show - The animation to use when showing the popover.
 * @animation popover.hide - The animation to use when hiding the popover.
 */
@customElement('lynk-popover')
export default class LynkPopover extends LitElement {
  static styles = styles;

  @query('.lynk-popover__trigger') trigger: HTMLElement;
  @query('.lynk-popover__panel') panel: HTMLElement;
  @query('.lynk-popover__positioner') positioner: HTMLElement;
  @query('.lynk-popover__arrow') arrow: HTMLElement;

  private positionerCleanup: ReturnType<typeof autoUpdate> | undefined;
  private readonly hasSlotController = new HasSlotController(this, 'footer');
  private readonly localize = new LocalizeController(this);

  /** Indicates whether or not the popover is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The popover's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility.
   */
  @property({ reflect: true }) label = '';

  /**
   * Disables the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the popover.
   */
  @property({ attribute: 'no-header', type: Boolean, reflect: true }) noHeader = false;

  /**
   * Hides the arrow.
   */
  @property({ attribute: 'no-arrow', type: Boolean, reflect: true }) noArrow = false;


  /**
   * Hide the popover by clicking outside the panel.
   */
  @property({ attribute: 'click-to-hide', type: Boolean, reflect: true }) clickToHide = false;

  /**
   * The preferred placement of the popover panel. Note that the actual placement may vary as needed to keep the panel
   * inside of the viewport.
   */
  @property({ reflect: true }) placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end' = 'right';

  /** Disables the popover so the panel will not open. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The popover will close when the user interacts outside of this element (e.g. clicking). */
  @property({ attribute: false }) containingElement?: HTMLElement;

  /** The distance in pixels from which to offset the panel away from its trigger. */
  @property({ type: Number }) distance = 10;

  /** The distance in pixels from which to offset the panel along its trigger. */
  @property({ type: Number }) skidding = 0;

  /** Display the popover component as a block instead of inline-block. */
  @property({ type: Boolean, reflect: true }) block = false;

  /**
   * Enable this option to prevent the panel from being clipped when the component is placed inside a container with
   * `overflow: auto|scroll`.
   */
  @property({ type: Boolean }) hoist = true;

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);

    if (!this.containingElement) {
      this.containingElement = this;
    }
  }

  async firstUpdated() {
    this.panel.hidden = !this.open;

    // If the popover is visible on init, update its position
    if (this.open) {
      await this.updateComplete;
      this.addOpenListeners();
      this.startPositioner();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
    this.stopPositioner();
  }

  focusOnTrigger() {
    const slot = this.trigger.querySelector('slot')!;
    const trigger = slot.assignedElements({ flatten: true })[0] as HTMLElement | undefined;
    if (typeof trigger?.focus === 'function') {
      trigger.focus();
    }
  }

  handleDocumentKeyDown(event: KeyboardEvent) {
    // Close when escape is pressed
    if (event.key === 'Escape') {
      this.hide();
      this.focusOnTrigger();
      return;
    }
  }

  handleDocumentMouseDown(event: MouseEvent) {
    // Close when clicking outside of the containing element
    const path = event.composedPath();
    if (this.clickToHide && this.containingElement && !path.includes(this.containingElement)) {
      this.hide();
    }
  }

  @watch('distance')
  @watch('hoist')
  @watch('placement')
  @watch('skidding')
  handlePopoverOptionsChange() {
    this.updatePositioner();
  }

  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  handleTriggerKeyDown(event: KeyboardEvent) {
    // Close when escape or tab is pressed
    if (event.key === 'Escape') {
      this.focusOnTrigger();
      this.hide();
      return;
    }
  }

  handleTriggerKeyUp(event: KeyboardEvent) {
    // Prevent space from triggering a click event in Firefox
    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }

  //
  // Slotted triggers can be arbitrary content, but we need to link them to the popover panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <lynk-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const slot = this.trigger.querySelector('slot')!;
    const assignedElements = slot.assignedElements({ flatten: true }) as HTMLElement[];
    const accessibleTrigger = assignedElements.find(el => getTabbableBoundary(el).start);
    let target: HTMLElement;

    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        // Lynk buttons have to update the internal button so it's announced correctly by screen readers
        case 'lynk-button':
        case 'lynk-icon-button':
          target = (accessibleTrigger as LynkButton | LynkIconButton).button;
          break;

        default:
          target = accessibleTrigger;
      }

      target.setAttribute('aria-haspopup', 'true');
      target.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    }
  }

  /** Shows the popover panel. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'after:show');
  }

  /** Hides the popover panel */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'after:hide');
  }

  /**
   * Instructs the popover menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.updatePositioner();
  }

  addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
    document.addEventListener('mousedown', this.handleDocumentMouseDown);
  }

  removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
    document.removeEventListener('mousedown', this.handleDocumentMouseDown);
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }

    this.updateAccessibleTrigger();

    if (this.open) {
      // Show
      emit(this, 'on:show');
      this.addOpenListeners();

      // When the dialog is shown, Safari will attempt to set focus on whatever element has autofocus. This can cause
      // the dialogs's animation to jitter (if it starts offscreen), so we'll temporarily remove the attribute, call
      // `focus({ preventScroll: true })` ourselves, and add the attribute back afterwards.
      //
      const autoFocusTarget = this.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }

      await stopAnimations(this);
      this.startPositioner();
      this.panel.hidden = false;
      const { keyframes, options } = getAnimation(this, 'popover.show');
      await animateTo(this.panel, keyframes, options);

      // Set focus to the autofocus target and restore the attribute
      if (autoFocusTarget) {
        (autoFocusTarget as HTMLInputElement).focus({ preventScroll: true });
        autoFocusTarget.setAttribute('autofocus', '');
      }

      emit(this, 'after:show');
    } else {
      // Hide
      emit(this, 'on:hide');
      this.removeOpenListeners();

      await stopAnimations(this);
      const { keyframes, options } = getAnimation(this, 'popover.hide');
      await animateTo(this.panel, keyframes, options);
      this.panel.hidden = true;
      this.stopPositioner();

      emit(this, 'after:hide');
    }
  }

  private startPositioner() {
    this.stopPositioner();
    this.updatePositioner();
    this.positionerCleanup = autoUpdate(this.trigger, this.positioner, this.updatePositioner.bind(this));
  }

  private updatePositioner() {
    if (!this.open || !this.trigger || !this.positioner) {
      return;
    }

    computePosition(this.trigger, this.positioner, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.skidding }),
        flip(),
        shift(),
        size({
          apply: ({ availableWidth, availableHeight }) => {
            // Ensure the panel stays within the viewport when we have lots of menu items
            Object.assign(this.panel.style, {
              maxWidth: `${availableWidth}px`,
              maxHeight: `${availableHeight}px`
            });
          }
        }),
        arrow({
          element: this.arrow,
          padding: 10 // min distance from the edge
        })
      ],
      strategy: this.hoist ? 'fixed' : 'absolute'
    }).then(({ x, y, middlewareData, placement }) => {
      const arrowX = middlewareData.arrow!.x;
      const arrowY = middlewareData.arrow!.y;
      const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[placement.split('-')[0]]!;

      this.positioner.setAttribute('data-placement', placement);

      Object.assign(this.positioner.style, {
        position: this.hoist ? 'fixed' : 'absolute',
        left: `${x}px`,
        top: `${y}px`
      });

      Object.assign(this.arrow.style, {
        left: typeof arrowX === 'number' ? `${arrowX}px` : '',
        top: typeof arrowY === 'number' ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide]: 'calc(var(--lynk-tooltip-arrow-size) * -1)'
      });
    });
  }

  private stopPositioner() {
    if (this.positionerCleanup) {
      this.positionerCleanup();
      this.positionerCleanup = undefined;
      this.positioner.removeAttribute('data-placement');
    }
  }

  render() {
    return html`
      <div
        part="base"
        id="popover"
        class=${classMap({
          'lynk-popover': true,
          'lynk-popover--open': this.open,
          'lynk-popover--has-footer': this.hasSlotController.test('footer')
        })}
      >
        <span
          part="trigger"
          class="lynk-popover__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="lynk-popover__positioner">
          <div
            part="panel"
            class="lynk-popover__panel"
            role="popover"
            aria-popover="true"
            aria-hidden=${this.open ? 'false' : 'true'}
            aria-label=${ifDefined(this.noHeader ? this.label : undefined)}
            aria-labelledby=${ifDefined(!this.noHeader ? 'title' : undefined)}
            tabindex="0"
          >

            <div class="lynk-popover__arrow"></div>

            ${!this.noHeader
              ? html`
                  <header part="header" class="lynk-popover__header">
                    <h2 part="title" class="lynk-popover__title" id="title">
                      <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                    </h2>
                    <lynk-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="lynk-popover__close"
                      style="--padding: 0;"
                      name="x"
                      label=${this.localize.term('close')}
                      library="system"
                      @click="${() => this.hide()}"
                    ></lynk-icon-button>
                  </header>
                `
              : ''}

            <div part="body" class="lynk-popover__body">
              <slot></slot>
            </div>

            ${this.hasSlotController.test('footer')
              ? html`
                <footer part="footer" class="lynk-popover__footer">
                  <slot name="footer"></slot>
                </footer>
              `
            : ''}
          </div>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('popover.show', {
  keyframes: [
    { opacity: 0, transform: 'scale(0.9)' },
    { opacity: 1, transform: 'scale(1)' }
  ],
  options: { duration: 100, easing: 'ease' }
});

setDefaultAnimation('popover.hide', {
  keyframes: [
    { opacity: 1, transform: 'scale(1)' },
    { opacity: 0, transform: 'scale(0.9)' }
  ],
  options: { duration: 100, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'lynk-popover': LynkPopover;
  }
}
