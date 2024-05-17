import '../icon/icon';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import LynkAccordion from '../../components/accordion/accordion';
import styles from './panel.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Panels are lightweight content containers that may either stand alone or be grouped together to form an [Accordion](/components/accordion).
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 *
 * @slot - The panels' content.
 * @slot heading - The panels' heading. Alternatively, you can use the `heading` attribute.
 * @slot prefix - The panels' summary prefix `<slot>`.
 * @slot suffix - The panels' summary suffix `<slot>`.
 * @slot expand-icon - The expand icon's `<slot>`.
 * @slot collapse-icon - The collapse icon's `<slot>`.
 * @slot footer - The panels' footer `<slot>`.
 *
 * @event on:expand - Emitted when the panel expands.
 * @event after:expand - Emitted after the panel expands and all animations are complete.
 * @event on:collapse - Emitted when the panel closes.
 * @event after:collapse - Emitted after the panel closes and all animations are complete.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart header - The panel header area.
 * @csspart heading - The panel heading.
 * @csspart prefix - The panel header prefix area.
 * @csspart suffix - The panel header suffix area.
 * @csspart toggle-icon - The expand/collapse toggle icon in the header.
 * @csspart content - The panel content.
 * @csspart footer - The panel footer.
 *
 * @cssproperty --background-color - The panels background color
 * @cssproperty --spacing - The amount of padding to use for the header, body, and footer.
 * @cssproperty --border-color - Apply a panel border of your choosing.
 * @cssproperty --border-radius - The panels border radius.
 *
 * @animation panel.expand - The animation to use when expanding the panel. You can use `height: auto` with this animation.
 * @animation panel.collapse - The animation to use when collapsing the panel. You can use `height: auto` with this animation.
 */
@customElement('lynk-panel')
export default class LynkPanel extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('.panel') panel: HTMLElement;
  @query('.panel__header') header: HTMLElement;
  @query('.panel__body') body: HTMLElement;
  @query('.panel__toggle-icon-slot') toggleIconSlot: HTMLSlotElement;

  private readonly hasSlotController = new HasSlotController(this, 'prefix', 'suffix', 'footer');
  private readonly localize = new LocalizeController(this);

  /** Indicates whether or not the panel contents are visible. You can use this in lieu of the expand/collapse methods. */
  @property({ type: Boolean, reflect: true }) expanded = false;

  /** Allow the panel contents to be toggled and enable supporting toggle controls */
  @property({ type: Boolean, reflect: true }) accordion = false;

  /** Disables an accordion panel so it can't be toggled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The heading to show in the panel header. If you need to display HTML, use the `heading` slot instead. */
  @property() heading: string;

  /** The trigger that will expand/collapse an accordion panel. */
  @property({ attribute: 'toggle-trigger', reflect: true }) toggleTrigger: 'header' | 'heading' | 'icon' | 'none' =
    'header';

  /** Hide suffix when accordion is collapsed. */
  @property({ attribute: 'toggle-suffix', type: Boolean, reflect: true }) toggleSuffix = false;

  /** The placement of the toggle icon in the header. */
  @property({ attribute: 'toggle-icon-placement', reflect: true }) toggleIconPlacement: 'start' | 'end' | 'hidden' =
    'end';

  /**
   * Disables the header. This will also remove the default toggle-icon, so please ensure you provide an easy,
   * accessible way for users to toggle the panel if using as part of an accordion.
   */
  @property({ attribute: 'no-header', type: Boolean, reflect: true }) noHeader = false;

  connectedCallback() {
    super.connectedCallback();

    if (this.hasParentAccordion()) {
      this.accordion = true;
    }

    if (!this.accordion) {
      this.expanded = true;
    }
  }

  firstUpdated() {
    this.body.hidden = !this.expanded;
    this.body.style.height = this.expanded ? 'auto' : '0';
  }

  // Checks whether the item is nested into an item
  private hasParentAccordion(): boolean {
    const parent = this.parentElement;
    return parent instanceof LynkAccordion;
  }

  private handleToggleTriggerClick() {
    if (!this.disabled && this.accordion) {
      if (this.expanded) {
        this.collapse();
      } else {
        this.expand();
      }

      this.header.focus();
    }
  }

  private handlePrefixSuffixClick(event: MouseEvent) {
    event.stopPropagation();
  }

  private handlePrefixSuffixKeyDown(event: KeyboardEvent) {
    event.stopPropagation();
  }

  private handleHeaderKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (this.expanded) {
        this.collapse();
      } else {
        this.expand();
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.collapse();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.expand();
    }
  }

  @watch('expanded', { waitUntilFirstUpdate: true })
  async handleExpandedChange() {
    if (this.expanded) {
      // Expand
      const lExpand = this.emit('on:expand', { cancelable: true });
      if (lExpand.defaultPrevented) {
        this.expanded = false;
        return;
      }

      await stopAnimations(this.body);
      this.body.hidden = false;

      const { keyframes, options } = getAnimation(this, 'panel.expand', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      this.emit('after:expand');
    } else {
      // Collapse
      const lCollapse = this.emit('on:collapse', { cancelable: true });
      if (lCollapse.defaultPrevented) {
        this.expanded = true;
        return;
      }

      await stopAnimations(this.body);

      const { keyframes, options } = getAnimation(this, 'panel.collapse', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = 'auto';

      this.emit('after:collapse');
    }
  }

  /** Shows the panel. */
  async expand() {
    if (this.expanded || this.disabled) {
      return undefined;
    }

    this.expanded = true;
    return waitForEvent(this, 'after:expand');
  }

  /** Hides the panel */
  async collapse() {
    if (!this.expanded || this.disabled) {
      return undefined;
    }

    this.expanded = false;
    return waitForEvent(this, 'after:collapse');
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <div
        part="base"
        class=${classMap({
          panel: true,
          'panel--disabled': this.disabled,
          'panel--expanded': this.expanded,
          'panel--accordion': this.accordion,
          'panel--rtl': isRtl,
          'panel--toggle-suffix': this.toggleSuffix,
          'panel--no-header': this.noHeader,
          'panel--has-prefix': this.hasSlotController.test('prefix'),
          'panel--has-suffix': this.hasSlotController.test('suffix'),
          'panel--has-footer': this.hasSlotController.test('footer')
        })}
      >
        ${!this.noHeader
          ? html`
              <header
                part="header"
                id="header"
                class=${classMap({
                  panel__header: true,
                  'panel__header--trigger': this.toggleTrigger === 'header'
                })}
                role="button"
                aria-expanded=${this.expanded ? 'true' : 'false'}
                aria-controls="content"
                aria-disabled=${this.disabled ? 'true' : 'false'}
                tabindex=${this.disabled ? '-1' : '0'}
                @click=${this.toggleTrigger === 'header' ? this.handleToggleTriggerClick : null}
                @keydown=${this.handleHeaderKeyDown}
              >
                <slot
                  name="prefix"
                  part="prefix"
                  class="panel__prefix"
                  @click=${this.handlePrefixSuffixClick}
                  @keydown=${this.handlePrefixSuffixKeyDown}
                ></slot>
                <slot
                  name="heading"
                  part="heading"
                  class=${classMap({
                    panel__heading: true,
                    'panel__heading--trigger': this.toggleTrigger === 'heading'
                  })}
                  @click=${this.toggleTrigger === 'heading' ? this.handleToggleTriggerClick : null}
                >
                  ${this.heading}
                </slot>
                <slot
                  name="suffix"
                  part="suffix"
                  class="panel__suffix"
                  @click=${this.handlePrefixSuffixClick}
                  @keydown=${this.handlePrefixSuffixKeyDown}
                ></slot>

                ${this.accordion
                  ? html`
                      <span
                        part="toggle-icon"
                        class=${classMap({
                          'panel__toggle-icon': true,
                          'panel__toggle-icon--start': this.toggleIconPlacement === 'start',
                          'panel__toggle-icon--end': this.toggleIconPlacement === 'end',
                          'panel__toggle-icon--hidden': this.toggleIconPlacement === 'hidden',
                          'panel__toggle-icon--trigger':
                            this.toggleTrigger === 'heading' || this.toggleTrigger === 'icon'
                        })}
                        @click=${this.toggleTrigger === 'heading' || this.toggleTrigger === 'icon'
                          ? this.handleToggleTriggerClick
                          : null}
                      >
                        <slot name="expand-icon">
                          <lynk-icon library="system" name=${isRtl ? 'chevron-left' : 'chevron-right'}></lynk-icon>
                        </slot>
                        <slot name="collapse-icon">
                          <lynk-icon library="system" name=${isRtl ? 'chevron-left' : 'chevron-right'}></lynk-icon>
                        </slot>
                      </span>
                    `
                  : ''}
              </header>
            `
          : ''}

        <div class="panel__body">
          <slot part="content" id="content" class="panel__content" role="region" aria-labelledby="header"></slot>
          <slot name="footer" part="footer" class="panel__footer"></slot>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('panel.expand', {
  keyframes: [
    { height: '0', opacity: '0' },
    { height: 'auto', opacity: '1' }
  ],
  options: { duration: 250, easing: 'linear' }
});

setDefaultAnimation('panel.collapse', {
  keyframes: [
    { height: 'auto', opacity: '1' },
    { height: '0', opacity: '0' }
  ],
  options: { duration: 250, easing: 'linear' }
});

declare global {
  interface HTMLElementTagNameMap {
    'lynk-panel': LynkPanel;
  }
}
