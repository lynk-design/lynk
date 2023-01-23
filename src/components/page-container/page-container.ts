import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import styles from './page-container.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 *
 * @since 1.0
 * @status experimental
 *
 */
@customElement('lynk-page-container')
export default class LynkPageContainer extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html`
        <div
          part="base"
          class="lynk-page-container">
            <slot></slot>
        </div>
     `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-container': LynkPageContainer;
  }
}
