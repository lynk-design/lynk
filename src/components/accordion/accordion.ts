import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate';
import { waitForEvent } from '../../internal/event';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { LocalizeController } from '../../utilities/localize';
import '../icon/icon';
import styles from './accordion.styles';
import type { CSSResultGroup } from 'lit';


/**
 * @summary Accordions show a brief summary and expand to show additional content.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 *
 * @slot - The accordions' content.
 * @slot summary - The accordions' summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - The expand icon's `<slot>`.
 * @slot collapse-icon - The collapse icon's `<slot>`.
 *
 * @event on:show - Emitted when the accordion opens.
 * @event after:show - Emitted after the accordion opens and all animations are complete.
 * @event on:hide - Emitted when the accordion closes.
 * @event after:hide - Emitted after the accordion closes and all animations are complete.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart header - The summary header.
 * @csspart summary - The accordion summary.
 * @csspart summary-icon - The expand/collapse summary icon.
 * @csspart content - The accordion content.
 *
 * @animation accordion.show - The animation to use when showing accordion. You can use `height: auto` with this animation.
 * @animation accordion.hide - The animation to use when hiding accordion. You can use `height: auto` with this animation.
 */
@customElement('lynk-accordion')
export default class LynkAccordion extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('.lynk-accordion') accordion: HTMLElement;
  @query('.lynk-accordion__header') header: HTMLElement;
  @query('.lynk-accordion__body') body: HTMLElement;
  @query('.lynk-accordion__expand-icon-slot') expandIconSlot: HTMLSlotElement;

  private readonly localize = new LocalizeController(this);

  /** Indicates whether or not the accordion is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /** The summary to show in the accordion header. If you need to display HTML, use the `summary` slot instead. */
  @property() summary: string;

  /** Disables the accordion so it can't be toggled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  firstUpdated() {
    this.body.hidden = !this.open;
    this.body.style.height = this.open ? 'auto' : '0';
  }

  /** Shows the accordion. */
  async show() {
    if (this.open || this.disabled) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'after:show');
  }

  /** Hides the accordion */
  async hide() {
    if (!this.open || this.disabled) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'after:hide');
  }

  handleSummaryClick() {
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }

      this.header.focus();
    }
  }

  handleSummaryKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      const lShow = this.emit('on:show', { cancelable: true });
      if (lShow.defaultPrevented) {
        this.open = false;
        return;
      }

      await stopAnimations(this.body);
      this.body.hidden = false;

      const { keyframes, options } = getAnimation(this, 'accordion.show', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      this.emit('after:show');
    } else {
      // Hide
      const lHide = this.emit('on:hide', { cancelable: true });
      if (lHide.defaultPrevented) {
        this.open = true;
        return;
      }

      await stopAnimations(this.body);

      const { keyframes, options } = getAnimation(this, 'accordion.hide', { dir: this.localize.dir() });
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = 'auto';

      this.emit('after:hide');
    }
  }

  render() {
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-accordion': true,
          'lynk-accordion--open': this.open,
          'lynk-accordion--disabled': this.disabled,
          'lynk-accordion--rtl': isRtl
        })}
      >
        <header
          part="header"
          id="header"
          class="lynk-accordion__header"
          role="button"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="content"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="lynk-accordion__summary">${this.summary}</slot>

          <span part="summary-icon" class="lynk-accordion__summary-icon">
            <slot name="expand-icon">
              <lynk-icon library="system" name=${isRtl ? 'chevron-left' : 'chevron-right'}></lynk-icon>
            </slot>
            <slot name="collapse-icon">
              <lynk-icon library="system" name=${isRtl ? 'chevron-left' : 'chevron-right'}></lynk-icon>
            </slot>
          </span>
        </header>

        <div class="lynk-accordion__body">
          <slot part="content" id="content" class="lynk-accordion__content" role="region" aria-labelledby="header"></slot>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('details.show', {
  keyframes: [
    { height: '0', opacity: '0' },
    { height: 'auto', opacity: '1' }
  ],
  options: { duration: 250, easing: 'linear' }
});

setDefaultAnimation('details.hide', {
  keyframes: [
    { height: 'auto', opacity: '1' },
    { height: '0', opacity: '0' }
  ],
  options: { duration: 250, easing: 'linear' }
});

declare global {
  interface HTMLElementTagNameMap {
    'lynk-accordion': LynkAccordion;
  }
}
