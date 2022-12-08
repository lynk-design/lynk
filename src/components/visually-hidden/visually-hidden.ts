import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './visually-hidden.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.
 *
 * @since 1.0
 * @status stable
 *
 * @slot - The content you'd like to be visually hidden.
 */
@customElement('lynk-visually-hidden')
export default class LynkVisuallyHidden extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-visually-hidden': LynkVisuallyHidden;
  }
}
