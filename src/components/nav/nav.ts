import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import styles from './nav.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Navs let users navigate the entire content of a product or a section. These can be used for a single level or a multi-level navigation.
 *
 * @since 1.0
 * @status experimental
 *
 * @slot - The default slot.
 * @slot example - An example slot.
 *
 * @csspart base - The component's base wrapper.
 *
 */
@customElement('lynk-nav')
export default class LynkNav extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html`
      <nav
        part="base"
        class=${classMap({
          'lynk-nav': true
        })}
      >
        <slot part="list"></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-nav': LynkNav;
  }
}
