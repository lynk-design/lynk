import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './page-layout.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 *
 * @since 1.0
 * @status experimental
 *
 */
@customElement('lynk-page-layout')
export default class LynkPageLayout extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html`
        <div part="base" class="lynk-page-layout">
            <slot name="header" class="lynk-page-layout__header"></slot>
            <slot name="left-sidebar" class="lynk-page-layout__left-sidebar"></slot>
            <slot name="left-inset-sidebar" class="lynk-page-layout__left-inset-sidebar"></slot>
            <div part="main" class="lynk-page-layout__main">
                <slot></slot>
            </div>
            <slot name="right-sidebar" class="lynk-page-layout__right-sidebar"></slot>
            <slot name="right-inset-sidebar" class="lynk-page-layout__right-inset-sidebar"></slot>
            <slot name="footer" class="lynk-page-layout__footer"></slot>
         </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-layout': LynkPageLayout;
  }
}
