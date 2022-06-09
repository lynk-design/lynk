import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../components/icon/icon';
import { watch } from '../../internal/watch';
import styles from './avatar.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @dependency l-icon
 *
 * @slot icon - The default icon to use when no image or initials are present.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart icon - The container that wraps the avatar icon.
 * @csspart initials - The container that wraps the avatar initials.
 * @csspart image - The avatar image.
 *
 * @cssproperty --size - The size of the avatar.
 */
@customElement('l-avatar')
export default class LynkAvatar extends LitElement {
  static styles = styles;

  @state() private hasError = false;

  /** The image source to use for the avatar. */
  @property() image = '';

  /** A label to use to describe the avatar to assistive devices. */
  @property() label = '';

  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  @property() initials = '';

  /** The shape of the avatar. */
  @property({ reflect: true }) shape: 'circle' | 'square' | 'rounded' = 'circle';

  @watch('image')
  handleImageChange() {
    // Reset the error when a new image is provided
    this.hasError = false;
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'l-avatar': true,
          'l-avatar--circle': this.shape === 'circle',
          'l-avatar--rounded': this.shape === 'rounded',
          'l-avatar--square': this.shape === 'square'
        })}
        role="img"
        aria-label=${this.label}
      >
        ${this.initials
          ? html` <div part="initials" class="l-avatar__initials">${this.initials}</div> `
          : html`
              <div part="icon" class="l-avatar__icon" aria-hidden="true">
                <slot name="icon">
                  <l-icon name="person-fill" library="system"></l-icon>
                </slot>
              </div>
            `}
        ${this.image && !this.hasError
          ? html`
              <img
                part="image"
                class="l-avatar__image"
                src="${this.image}"
                alt=""
                @error="${() => (this.hasError = true)}"
              />
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-avatar': LynkAvatar;
  }
}
