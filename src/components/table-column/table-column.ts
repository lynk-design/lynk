import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { clamp } from 'src/internal/math';
import styles from './table-column.styles';

/**
 * @since 1.0
 * @status experimental
 */
@customElement('lynk-col')
export default class LynkTableColumn extends LitElement {
  static styles = styles;

  /** The key associated with this table column */
  @property({reflect: true}) key: string;

  @property({attribute: 'max-width', reflect: true}) maxWidth: number;
  @property({attribute: 'min-width', reflect: true}) minWidth: number;
  @property({reflect: true}) width: number;

  firstUpdated() {
    if(this.width) {
      this.requestWidth(this.width);
    }
  }

  render() {
    return html``;
  }

  public requestWidth(value: number) {
    const width = clamp(value, this.minWidth, this.maxWidth);
    this.style.width = `${width}px`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-col': LynkTableColumn;
  }
}
