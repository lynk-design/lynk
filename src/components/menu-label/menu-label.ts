import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './menu-label.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Menu labels are used to describe a group of menu items.
 *
 * @since 1.0
 * @status stable
 *
 * @slot - The menu label's content.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('lynk-menu-label')
export default class LynkMenuLabel extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html` <slot part="base" class="lynk-menu-label"></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-menu-label': LynkMenuLabel;
  }
}
