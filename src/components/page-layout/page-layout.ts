import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './page-layout.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A standardized page layout container using css grid based layout areas.
 *
 * @since 1.0
 * @status experimental
 *
 * @slot - The page's main content area. Works best with `<lynk-page-content>`.
 * @slot header - The page's header area. Breadcrump, title, tabs and other page level controls go in here. Works best with `<lynk-page-header>`
 * @slot left-sidebar - The page's left sidebar with a primary navigation menu. Works best with `<lynk-page-sidebar>`.
 * @slot right-sidebar - The page's right sidebar with a secondary navigation menu. Works best with `<lynk-page-sidebar>`.
 * @slot left-inset-sidebar - A visually nested left sidebar for displaying content specific menus or aside details. Works best with `<lynk-page-sidebar>`
 * @slot right-inset-sidebar - A visually nested right sidebar for displaying content specific menus or aside details. Works best with `<lynk-page-sidebar>`
 * @slot footer - The pages footer, usually one or more buttons representing various primary or secondary options like save or table pagination. Works best with `<lynk-page-footer>`
 *
 * @csspart base - The page layout internal wrapper.
 * @csspart header - The page header area's internal wrapper.
 * @csspart left-sidebar - The page left sidebar area's internal wrapper.
 * @csspart left-inset-sidebar - The page left inset sidebar area's internal wrapper.
 * @csspart main - The main content area's internal wrapper.
 * @csspart right-inset-sidebar - The page right inset sidebar area's internal wrapper.
 * @csspart right-sidebar - The page right sidebar area's internal wrapper.
 * @csspart footer - The page footer areas internal wrapper.
 */

@customElement('lynk-page-layout')
export default class LynkPageLayout extends LynkElement {
  static styles: CSSResultGroup = styles;

  render() {
    return html`
      <div part="base" class="lynk-page-layout">
        <slot name="header" part="header" class="lynk-page-layout__header"></slot>
        <slot name="left-sidebar" part="left-sidebar" class="lynk-page-layout__left-sidebar"></slot>
        <slot name="left-inset-sidebar" part="left-inset-sidebar" class="lynk-page-layout__left-inset-sidebar"></slot>
        <div part="main" class="lynk-page-layout__main">
          <slot></slot>
        </div>
        <slot name="right-sidebar" part="right-sidebar" class="lynk-page-layout__right-sidebar"></slot>
        <slot name="right-inset-sidebar" part="right-inset-sidebar" class="lynk-page-layout__right-inset-sidebar"></slot>
        <slot name="footer" part="footer" class="lynk-page-layout__footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-layout': LynkPageLayout;
  }
}
