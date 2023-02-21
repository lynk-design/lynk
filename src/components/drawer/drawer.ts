import '../icon-button/icon-button';
import { animateTo, stopAnimations } from '../../internal/animate';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { lockBodyScrolling, unlockBodyScrolling } from '../../internal/scroll';
import { uppercaseFirstLetter } from '../../internal/string';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import Modal from '../../internal/modal';
import styles from './drawer.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Drawers slide in from a container to expose additional options and information.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon-button
 *
 * @slot - The drawer's content.
 * @slot label - The drawer's label. Alternatively, you can use the label prop.
 * @slot footer - The drawer's footer, usually one or more buttons representing various options.
 *
 * @event on:show - Emitted when the drawer opens.
 * @event after:show - Emitted after the drawer opens and all animations are complete.
 * @event on:hide - Emitted when the drawer closes.
 * @event after:hide - Emitted after the drawer closes and all animations are complete.
 * @event on:initial-focus - Emitted when the drawer opens and is ready to receive focus. Calling
 *   `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.
 * @event {{ source: 'close-button' | 'keyboard' | 'overlay' }} on:request-close - Emitted when the user attempts to
 *   close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling
 *   `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in
 *   destructive behavior such as data loss.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart overlay - The overlay.
 * @csspart panel - The drawer panel (where the drawer and its content is rendered).
 * @csspart header - The drawer header.
 * @csspart header-actions - Optional actions to add to the header. Works best with `<sl-icon-button>`.
 * @csspart title - The drawer title.
 * @csspart close-button - The close button.
 * @csspart close-button__base - The close button's `base` part.
 * @csspart body - The drawer body.
 * @csspart footer - The drawer footer.
 *
 * @cssproperty --size - The preferred size of the drawer. This will be applied to the drawer's width or height
 *   depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.
 * @cssproperty --header-spacing - The amount of padding to use for the header.
 * @cssproperty --body-spacing - The amount of padding to use for the body.
 * @cssproperty --footer-spacing - The amount of padding to use for the footer.
 *
 * @animation drawer.showTop - The animation to use when showing a drawer with `top` placement.
 * @animation drawer.showEnd - The animation to use when showing a drawer with `end` placement.
 * @animation drawer.showBottom - The animation to use when showing a drawer with `bottom` placement.
 * @animation drawer.showStart - The animation to use when showing a drawer with `start` placement.
 * @animation drawer.hideTop - The animation to use when hiding a drawer with `top` placement.
 * @animation drawer.hideEnd - The animation to use when hiding a drawer with `end` placement.
 * @animation drawer.hideBottom - The animation to use when hiding a drawer with `bottom` placement.
 * @animation drawer.hideStart - The animation to use when hiding a drawer with `start` placement.
 * @animation drawer.denyClose - The animation to use when a request to close the drawer is denied.
 * @animation drawer.overlay.show - The animation to use when showing the drawer's overlay.
 * @animation drawer.overlay.hide - The animation to use when hiding the drawer's overlay.
 */
@customElement('lynk-drawer')
export default class LynkDrawer extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('.lynk-drawer') drawer: HTMLElement;
  @query('.lynk-drawer__panel') panel: HTMLElement;
  @query('.lynk-drawer__overlay') overlay: HTMLElement;

  private readonly hasSlotController = new HasSlotController(this, 'footer');
  private readonly localize = new LocalizeController(this);
  private modal: Modal;
  private originalTrigger: HTMLElement | null;

  /** Indicates whether or not the drawer is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The drawer's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility. If you need to display HTML, you can use the `label` slot
   * instead.
   */
  @property({ reflect: true }) label = '';

  /** The direction from which the drawer will open. */
  @property({ reflect: true }) placement: 'top' | 'end' | 'bottom' | 'start' = 'end';

  /**
   * By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of
   * its parent element, set this prop and add `position: relative` to the parent.
   */
  @property({ type: Boolean, reflect: true }) contained = false;

  /**
   * Removes the header. This will also remove the default close button, so please ensure you provide an easy,
   * accessible way for users to dismiss the drawer.
   */
  @property({ attribute: 'no-header', type: Boolean, reflect: true }) noHeader = false;

  connectedCallback() {
    super.connectedCallback();
    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.modal = new Modal(this);
  }

  firstUpdated() {
    this.drawer.hidden = !this.open;

    if (this.open && !this.contained) {
      this.addOpenListeners();
      this.modal.activate();
      lockBodyScrolling(this);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
  }

  /** Shows the drawer. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'after:show');
  }

  /** Hides the drawer */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'after:hide');
  }

  private requestClose(source: 'close-button' | 'keyboard' | 'overlay') {
    const onRequestClose = this.emit('on:request-close', {
      cancelable: true,
      detail: { source }
    });

    if (onRequestClose.defaultPrevented) {
      const animation = getAnimation(this, 'drawer.denyClose', { dir: this.localize.dir() });
      animateTo(this.panel, animation.keyframes, animation.options);
      return;
    }

    this.hide();
  }

  addOpenListeners() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
  }

  removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  handleDocumentKeyDown(event: KeyboardEvent) {
    if (this.open && event.key === 'Escape') {
      event.stopPropagation();
      this.requestClose('keyboard');
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('on:show');
      this.addOpenListeners();
      this.originalTrigger = document.activeElement as HTMLElement;

      // Lock body scrolling only if the drawer isn't contained
      if (!this.contained) {
        this.modal.activate();
        lockBodyScrolling(this);
      }

      // When the drawer is shown, Safari will attempt to set focus on whatever element has autofocus. This causes the
      // drawer's animation to jitter, so we'll temporarily remove the attribute, call `focus({ preventScroll: true })`
      // ourselves, and add the attribute back afterwards.
      //
      // Related: https://github.com/shoelace-style/shoelace/issues/693
      //
      const autoFocusTarget = this.querySelector('[autofocus]');
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute('autofocus');
      }

      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      this.drawer.hidden = false;

      // Set initial focus
      requestAnimationFrame(() => {
        const onInitialFocus = this.emit('on:initial-focus', { cancelable: true });

        if (!onInitialFocus.defaultPrevented) {
          // Set focus to the autofocus target and restore the attribute
          if (autoFocusTarget) {
            (autoFocusTarget as HTMLInputElement).focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }

        // Restore the autofocus attribute
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute('autofocus', '');
        }
      });

      const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, 'drawer.overlay.show', { dir: this.localize.dir() });
      await Promise.all([
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);

      this.emit('after:show');
    } else {
      // Hide
      this.emit('on:hide');
      this.removeOpenListeners();
      this.modal.deactivate();
      unlockBodyScrolling(this);

      await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
      const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = getAnimation(this, 'drawer.overlay.hide', { dir: this.localize.dir() });

      // Animate the overlay and the panel at the same time. Because animation durations might be different, we need to
      // hide each one individually when the animation finishes, otherwise the first one that finishes will reappear
      // unexpectedly. We'll unhide them after all animations have completed.
      await Promise.all([
        animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);

      this.drawer.hidden = true;

      // Now that the dialog is hidden, restore the overlay and panel for next time
      this.overlay.hidden = false;
      this.panel.hidden = false;

      // Restore focus to the original trigger
      const trigger = this.originalTrigger;
      if (typeof trigger?.focus === 'function') {
        setTimeout(() => trigger.focus());
      }

      this.emit('after:hide');
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-drawer': true,
          'lynk-drawer--open': this.open,
          'lynk-drawer--top': this.placement === 'top',
          'lynk-drawer--end': this.placement === 'end',
          'lynk-drawer--bottom': this.placement === 'bottom',
          'lynk-drawer--start': this.placement === 'start',
          'lynk-drawer--contained': this.contained,
          'lynk-drawer--fixed': !this.contained,
          'lynk-drawer--rtl': this.localize.dir() === 'rtl',
          'lynk-drawer--has-footer': this.hasSlotController.test('footer')
        })}
      >
        <div
          part="overlay"
          class="lynk-drawer__overlay"
          @click=${() => this.requestClose('overlay')}
          tabindex="-1"
        ></div>

        <div
          part="panel"
          class="lynk-drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? 'false' : 'true'}
          aria-label=${ifDefined(this.noHeader ? this.label : undefined)}
          aria-labelledby=${ifDefined(!this.noHeader ? 'title' : undefined)}
          tabindex="0"
        >
          ${!this.noHeader
            ? html`
                <header part="header" class="lynk-drawer__header">
                  <h2 part="title" class="lynk-drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="lynk-drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <lynk-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="lynk-drawer__close"
                      name="x-lg"
                      label=${this.localize.term('close')}
                      library="system"
                      @click=${() => this.requestClose('close-button')}
                    ></lynk-icon-button>
                  </div>
                </header>
              `
            : ''}

          <slot part="body" class="lynk-drawer__body"></slot>

          <footer part="footer" class="lynk-drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}

// Top
setDefaultAnimation('drawer.showTop', {
  keyframes: [
    { opacity: 0, translate: '0 -100%' },
    { opacity: 1, translate: '0 0' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideTop', {
  keyframes: [
    { opacity: 1, translate: '0 0' },
    { opacity: 0, translate: '0 -100%' }
  ],
  options: { duration: 250, easing: 'ease' }
});

// End
setDefaultAnimation('drawer.showEnd', {
  keyframes: [
    { opacity: 0, translate: '100%' },
    { opacity: 1, translate: '0' }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: '-100%' },
    { opacity: 1, translate: '0' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideEnd', {
  keyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '100%' }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '-100%' }
  ],
  options: { duration: 250, easing: 'ease' }
});

// Bottom
setDefaultAnimation('drawer.showBottom', {
  keyframes: [
    { opacity: 0, translate: '0 100%' },
    { opacity: 1, translate: '0 0' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideBottom', {
  keyframes: [
    { opacity: 1, translate: '0 0' },
    { opacity: 0, translate: '0 100%' }
  ],
  options: { duration: 250, easing: 'ease' }
});

// Start
setDefaultAnimation('drawer.showStart', {
  keyframes: [
    { opacity: 0, translate: '-100%' },
    { opacity: 1, translate: '0' }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: '100%' },
    { opacity: 1, translate: '0' }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('drawer.hideStart', {
  keyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '-100%' }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: '0' },
    { opacity: 0, translate: '100%' }
  ],
  options: { duration: 250, easing: 'ease' }
});

// Deny close
setDefaultAnimation('drawer.denyClose', {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});

// Overlay
setDefaultAnimation('drawer.overlay.show', {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});

setDefaultAnimation('drawer.overlay.hide', {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});

declare global {
  interface HTMLElementTagNameMap {
    'lynk-drawer': LynkDrawer;
  }
}
