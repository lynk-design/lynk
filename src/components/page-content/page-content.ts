import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { getScrollParent } from '../../internal/scroll';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import LynkPageLayout from '../../components/page-layout/page-layout';
import styles from './page-content.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The page-content component is a fundamental layout bulding block to standardize how content is contained, padded, and aligned within a given device or viewport.
 *
 * @since 1.0
 * @status experimental
 *
 */
@customElement('lynk-page-content')
export default class LynkPageContent extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** Set an optional maximum width for page content  */
  @property({ reflect: true }) width: 'auto' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large' | 'fluid' =
    'fluid';

  @query('.lynk-page-content') pageContent: HTMLElement;

  /** Scrolls the nearest scrollable parent element to the top. */
  scrollToTop() {
    const parent: HTMLElement | null = this.hasParentLayout()
      ? (this.parentElement as LynkPageLayout).renderRoot.querySelector('.lynk-page-layout__main')
      : getScrollParent(this.pageContent);

    if (parent) {
      parent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Checks whether the page content is nested into a lynk-page-layout
  private hasParentLayout(): boolean {
    const parent = this.parentElement;
    return parent instanceof LynkPageLayout;
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-page-content': true,
          'lynk-page-content--auto': this.width === 'auto',
          'lynk-page-content--sm': this.width === 'small',
          'lynk-page-content--md': this.width === 'medium',
          'lynk-page-content--lg': this.width === 'large',
          'lynk-page-content--xl': this.width === 'x-large',
          'lynk-page-content--xxl': this.width === '2x-large',
          'lynk-page-content--fluid': this.width === 'fluid'
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-content': LynkPageContent;
  }
}
