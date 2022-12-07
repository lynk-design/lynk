import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { autoIncrement } from '../../internal/auto-increment';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import '../icon-button/icon-button';
import styles from './tab.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 *
 * @since 2.0
 * @status stable
 *
 * @dependency lynk-icon-button
 *
 * @slot - The tab's label.
 *
 * @event on:close - Emitted when the tab is closable and the close button is activated.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart close-button - The close button.
 * @csspart close-button__base - The close button's `base` part.
 */
@customElement('lynk-tab')
export default class LynkTab extends LynkElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  @query('.lynk-tab') tab: HTMLElement;

  private readonly attrId = autoIncrement();
  private readonly componentId = `lynk-tab-${this.attrId}`;

  /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
  @property({ reflect: true }) panel = '';

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Makes the tab closable and shows a close icon. */
  @property({ type: Boolean }) closable = false;

  /** Draws the tab in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  /** Sets focus to the tab. */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }

  handleCloseClick() {
    this.emit('on:close');
  }

  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-selected', this.active ? 'true' : 'false');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  render() {
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    this.id = this.id.length > 0 ? this.id : this.componentId;

    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-tab': true,
          'lynk-tab--active': this.active,
          'lynk-tab--closable': this.closable,
          'lynk-tab--disabled': this.disabled
        })}
        tabindex=${this.disabled ? '-1' : '0'}
      >
        <slot></slot>
        ${this.closable
          ? html`
              <lynk-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term('close')}
                class="lynk-tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></lynk-icon-button>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tab': LynkTab;
  }
}
