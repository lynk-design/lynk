import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import '../../components/icon-button/icon-button';
import { autoIncrement } from '../../internal/auto-increment';
import { emit } from '../../internal/event';
import { LocalizeController } from '../../utilities/localize';
import styles from './tab.styles';

/**
 * @since 2.0
 * @status stable
 *
 * @dependency l-icon-button
 *
 * @slot - The tab's label.
 *
 * @event l-close - Emitted when the tab is closable and the close button is activated.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart close-button - The close button.
 * @csspart close-button__base - The close button's `base` part.
 */
@customElement('l-tab')
export default class SlTab extends LitElement {
  static styles = styles;
  private readonly localize = new LocalizeController(this);

  @query('.tab') tab: HTMLElement;

  private readonly attrId = autoIncrement();
  private readonly componentId = `l-tab-${this.attrId}`;

  /** The name of the tab panel the tab will control. The panel must be located in the same tab group. */
  @property({ reflect: true }) panel = '';

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Makes the tab closable and shows a close icon. */
  @property({ type: Boolean }) closable = false;

  /** Draws the tab in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** The locale to render the component in. */
  @property() lang: string;

  /** Sets focus to the tab. */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }

  handleCloseClick() {
    emit(this, 'l-close');
  }

  render() {
    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    this.id = this.id.length > 0 ? this.id : this.componentId;

    return html`
      <div
        part="base"
        class=${classMap({
          tab: true,
          'tab--active': this.active,
          'tab--closable': this.closable,
          'tab--disabled': this.disabled
        })}
        role="tab"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-selected=${this.active ? 'true' : 'false'}
        tabindex=${this.disabled || !this.active ? '-1' : '0'}
      >
        <slot></slot>
        ${this.closable
          ? html`
              <l-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x"
                library="system"
                label=${this.localize.term('close')}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></l-icon-button>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-tab': SlTab;
  }
}
