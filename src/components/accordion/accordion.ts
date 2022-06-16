import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../components/icon/icon';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate';
import { emit, waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import styles from './accordion.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 *
 * @slot - The accordions content.
 * @slot summary - The accordions summary. Alternatively, you can use the summary prop.
 *
 * @event lynk-show - Emitted when the accordion opens.
 * @event lynk-after-show - Emitted after the accordion opens and all animations are complete.
 * @event lynk-hide - Emitted when the accordion closes.
 * @event lynk-after-hide - Emitted after the accordion closes and all animations are complete.
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
export default class LynkAccordion extends LitElement {
  static styles = styles;

  @query('.lynk-accordion') accordion: HTMLElement;
  @query('.lynk-accordion__header') header: HTMLElement;
  @query('.lynk-accordion__body') body: HTMLElement;

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
    return waitForEvent(this, 'lynk-after-show');
  }

  /** Hides the accordion */
  async hide() {
    if (!this.open || this.disabled) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'lynk-after-hide');
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
      emit(this, 'lynk-show');

      await stopAnimations(this.body);
      this.body.hidden = false;

      const { keyframes, options } = getAnimation(this, 'accordion.show');
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.style.height = 'auto';

      emit(this, 'lynk-after-show');
    } else {
      // Hide
      emit(this, 'lynk-hide');

      await stopAnimations(this.body);

      const { keyframes, options } = getAnimation(this, 'accordion.hide');
      await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
      this.body.hidden = true;
      this.body.style.height = 'auto';

      emit(this, 'lynk-after-hide');
    }
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-accordion': true,
          'lynk-accordion--open': this.open,
          'lynk-accordion--disabled': this.disabled
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
          <div part="summary" class="lynk-accordion__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="lynk-accordion__summary-icon">
            <lynk-icon name="chevron-right" library="system"></lynk-icon>
          </span>
        </header>

        <div class="lynk-accordion__body">
          <div part="content" id="content" class="lynk-accordion__content" role="region" aria-labelledby="header">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('accordion.show', {
  keyframes: [
    { height: '0', opacity: '0' },
    { height: 'auto', opacity: '1' }
  ],
  options: { duration: 250, easing: 'linear' }
});

setDefaultAnimation('accordion.hide', {
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
