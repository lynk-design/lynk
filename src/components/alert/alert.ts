import '../icon-button/icon-button';
import { animateTo, stopAnimations } from '../../internal/animate';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './alert.styles';
import type { CSSResultGroup } from 'lit';

const toastStack = Object.assign(document.createElement('div'), { className: 'lynk-toast-stack' });

/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 *
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon-button
 *
 * @slot - The alert's content.
 * @slot icon - An icon to show in the alert.
 * @slot action - Append custom actions to alert.
 *
 * @event on:show - Emitted when the alert opens.
 * @event after:show - Emitted after the alert opens and all animations are complete.
 * @event on:hide - Emitted when the alert closes.
 * @event after:hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's internal block wrapper.
 * @csspart icon - The container that wraps the alert icon.
 * @csspart message - The alert message.
 * @csspart close-button - The close button.
 * @csspart close-button__base - The close button's `base` part.
 *
 * @cssproperty --box-shadow - The alert's box shadow.
 * @cssproperty --padding - The top and bottom padding of the message. Use any spacing token (--lynk-spacing-large) or a custom value.
 *
 * @animation alert.show - The animation to use when showing the alert.
 * @animation alert.hide - The animation to use when hiding the alert.
 */

@customElement('lynk-alert')
export default class LynkAlert extends LynkElement {
  static styles: CSSResultGroup = styles;

  private autoHideTimeout: number;
  private readonly hasSlotController = new HasSlotController(this, 'icon', 'action');
  private readonly localize = new LocalizeController(this);

  @query('[part="base"]') base: HTMLElement;

  /** Indicates whether or not the alert is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Makes the alert closable. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** The alert's type (color). */
  @property({ reflect: true }) type: 'primary' | 'info' | 'success' | 'neutral' | 'warning' | 'danger' = 'primary';

  /**
   * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
   * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`.
   */
  @property({ type: Number }) duration = Infinity;

  firstUpdated() {
    this.base.hidden = !this.open;
  }

  /** Shows the alert. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'after:show');
  }

  /** Hides the alert */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'after:hide');
  }

  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise<void>(resolve => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }

      toastStack.appendChild(this);

      // Wait for the toast stack to render
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- force a reflow for the initial transition
        this.clientWidth;
        this.show();
      });

      this.addEventListener(
        'after:hide',
        () => {
          toastStack.removeChild(this);
          resolve();

          // Remove the toast stack from the DOM when there are no more alerts
          if (toastStack.querySelector('lynk-alert') === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }

  restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  handleCloseClick() {
    this.hide();
  }

  handleMouseMove() {
    this.restartAutoHide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('on:show');

      if (this.duration < Infinity) {
        this.restartAutoHide();
      }

      await stopAnimations(this.base);
      this.base.hidden = false;
      const { keyframes, options } = getAnimation(this, 'alert.show', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);

      this.emit('after:show');
    } else {
      // Hide
      this.emit('on:hide');

      clearTimeout(this.autoHideTimeout);

      await stopAnimations(this.base);
      const { keyframes, options } = getAnimation(this, 'alert.hide', { dir: this.localize.dir() });
      await animateTo(this.base, keyframes, options);
      this.base.hidden = true;

      this.emit('after:hide');
    }
  }

  @watch('duration')
  handleDurationChange() {
    this.restartAutoHide();
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-alert': true,
          'lynk-alert--open': this.open,
          'lynk-alert--closable': this.closable,
          'lynk-alert--has-icon':
            this.hasSlotController.test('icon') ||
            this.type === 'info' ||
            this.type === 'neutral' ||
            this.type === 'success' ||
            this.type === 'warning' ||
            this.type === 'danger',
          'lynk-alert--primary': this.type === 'primary' || this.type === 'info',
          'lynk-alert--success': this.type === 'success',
          'lynk-alert--neutral': this.type === 'neutral',
          'lynk-alert--warning': this.type === 'warning',
          'lynk-alert--danger': this.type === 'danger'
        })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? 'false' : 'true'}
        @mousemove=${this.handleMouseMove}
      >
        <slot name="icon" part="icon" class="lynk-alert__icon">
          ${this.type
            ? html`
                <lynk-icon
                  library="system"
                  name="${this.type === 'info'
                    ? 'info-circle'
                    : this.type === 'neutral'
                    ? 'question-square'
                    : this.type === 'success'
                    ? 'check-circle'
                    : this.type === 'warning'
                    ? 'exclamation-triangle'
                    : this.type === 'danger'
                    ? 'exclamation-octagon'
                    : ''}"
                ></lynk-icon>
              `
            : ''}
        </slot>

        <slot part="message" class="lynk-alert__message" aria-live="polite"></slot>

        ${this.hasSlotController.test('action')
          ? html`
              <span part="action" class="lynk-alert__action">
                <slot name="action"></slot>
              </span>
            `
          : ''}
        ${this.closable
          ? html`
              <lynk-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="lynk-alert__close-button"
                name="x"
                library="system"
                label=${this.localize.term('close')}
                @click=${this.handleCloseClick}
              ></lynk-icon-button>
            `
          : ''}
      </div>
    `;
  }
}

setDefaultAnimation('alert.show', {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: 'ease' }
});

setDefaultAnimation('alert.hide', {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: 'ease' }
});

declare global {
  interface HTMLElementTagNameMap {
    'lynk-alert': LynkAlert;
  }
}
