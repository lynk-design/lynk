import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import styles from './box.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The default slot.
 *
 * @csspart base - The component's internal wrapper.
 *
 * @cssproperty [--align=left] - Custom text align (left, center, right).
 * @cssproperty [--background=transparent] - Any color token (--lynk-color-neutral-100) or a custom value.
 * @cssproperty --border - <border-style> <border-width> <border-color>.
 * @cssproperty --border-radius - Any Border Radius token (--lynk-border-radius-medium) or a custom value.
 * @cssproperty [--color=inherit] - Any color token (--lynk-color-neutral-100) or a custom value.
 * @cssproperty [--margin=0] - Any spacing token (--lynk-spacing-large) or a custom value.
 * @cssproperty [--padding=0] - Any spacing token (--lynk-spacing-large) or a custom value.
 * @cssproperty --shadow - Any elevation shadow token (--lynk-shadow-large);
 */
@customElement('lynk-box')
export default class LynkBox extends LitElement {
  static styles = styles;

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-box': true,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-box': LynkBox;
  }
}
