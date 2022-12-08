import { customElement, property } from 'lit/decorators.js';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './divider.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Dividers are used to visually separate or group elements.
 *
 * @since 1.0
 * @status stable
 *
 * @cssproperty --color - The color of the divider.
 * @cssproperty --width - The width of the divider.
 * @cssproperty --spacing - The spacing of the divider.
 */
@customElement('lynk-divider')
export default class LynkDivider extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** Draws the divider in a vertical orientation. */
  @property({ type: Boolean, reflect: true }) vertical = false;

  firstUpdated() {
    super.connectedCallback();
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
