import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
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