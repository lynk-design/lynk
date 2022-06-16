import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import styles from './divider.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @cssproperty --color - The color of the divider.
 * @cssproperty --width - The width of the divider.
 * @cssproperty --spacing - The spacing of the divider.
 */
@customElement('lynk-divider')
export default class LynkDivider extends LitElement {
  static styles = styles;

  /** Draws the divider in a vertical orientation. */
  @property({ type: Boolean, reflect: true }) vertical = false;

  firstUpdated() {
    this.setAttribute('role', 'separator');
  }

  @watch('vertical')
  handleVerticalChange() {
    this.setAttribute('aria-orientation', this.vertical ? 'vertical' : 'horizontal');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-divider': LynkDivider;
  }
}
