import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './tab-panel.styles';
import type { CSSResultGroup } from 'lit';

let id = 0;

/**
 * @summary Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.
 * @documentation https://lynk.design/components/tab-panel
 * @status experimental
 * @since 1.0
 *
 * @slot - The tab panel's content.
 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --padding - The tab panel's padding.
 */
@customElement('lynk-tab-panel')
export default class LynkTabPanel extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly attrId = ++id;
  private readonly componentId = `lynk-tab-panel-${this.attrId}`;

  /** The tab panel's name. */
  @property({ reflect: true }) name = '';

  /** When true, the tab panel will be shown. */
  @property({ type: Boolean, reflect: true }) active = false;

  connectedCallback() {
    super.connectedCallback();
    this.id = this.id.length > 0 ? this.id : this.componentId;
    this.setAttribute('role', 'tabpanel');
  }

  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-hidden', this.active ? 'false' : 'true');
  }

  render() {
    return html`
      <slot
        part="base"
        class=${classMap({
          'lynk-tab-panel': true,
          'lynk-tab-panel--active': this.active
        })}
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tab-panel': LynkTabPanel;
  }
}
