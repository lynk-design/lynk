import { LocalizeController } from '@shoelace-style/localize';
import { LitElement, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { drag } from 'src/internal/drag';
import { clamp } from 'src/internal/math';
import { LynkTableSortEvent, LynkTableSortDirection, LynkTableResizeEvent } from '../table/models';
import styles from './table-header.styles';

/**
 * @since 1.0
 * @status experimental
 *
 * @event lynk-table-header-event-resize - Emitted when a resizable table header is moved.
 * @event lynk-table-header-event-sort - Emitted when a sortable table header is clicked on.
 */
@customElement('lynk-th')
export default class LynkTableHeader extends LitElement {
  static styles = styles;
  private readonly localize = new LocalizeController(this);

  /** The column key associated with this table header */
  @property() key: string;

  /** The sorting direction currently applied to the rows with the corresponding column key */
  @property({ attribute: 'sort-direction', reflect: true}) sortDirection = LynkTableSortDirection.NONE;

  /** Toggles sort events and the display of sorting related icons with the corresponding column key */
  @property({ attribute: 'sort-enabled', type: Boolean, reflect: true }) sortEnabled = false;

  /** Toggles resize events for the corresponding column key */
  @property({ attribute: 'resize-enabled', type: Boolean, reflect: true }) resizeEnabled = false;

  @query('.resizeHandle') resizeHandle: HTMLElement; 
  @property({attribute: 'max-width', reflect: true}) maxWidth: number;
  @property({attribute: 'min-width', reflect: true}) minWidth: number;
  @property({reflect: true}) width: number;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this.handleClick);
  }
  
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    if(this.sortEnabled) {
      const event = new LynkTableSortEvent();
      event.key = this.key;
      this.dispatchEvent(event);
    }
  }

  handleResize(event: PointerEvent) {
    // Prevent text selection when dragging
    if (event.cancelable) {
      event.preventDefault();
    }
    let startX: number;
    drag(this.resizeHandle, {
      onMove: (x: number) => {
        const resizeEvent = new LynkTableResizeEvent();
        resizeEvent.key = this.key;
        if(!startX) startX = x;
        resizeEvent.requestedWidth = this.clientWidth + (x - startX);
        // this.dispatchEvent(resizeEvent);
        const width = clamp(resizeEvent.requestedWidth, this.minWidth, this.maxWidth);
        this.style.width = `${width}px`;
      }
    });
  }

  render() {
    return html`
      <slot></slot>
      ${this.sortEnabled
      ? html`
        <lynk-icon
          name="${this.sortDirection === LynkTableSortDirection.ASC
            ? 'sort-up' : this.sortDirection === LynkTableSortDirection.DESC
            ? 'sort-down' 
            : ''}"
        ></lynk-icon>`
      : ``}
      ${this.resizeEnabled
      ? html `
        <lynk-icon
          @mousedown=${this.handleResize}
          @touchstart=${this.handleResize}
          aria-label=${this.localize.term('resize')}
          class="resizeHandle"
          name="grip-vertical"
          part="resizeHandle"
          role="separator"
        ></lynk-icon>`
      : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-th': LynkTableHeader;
  }
}
