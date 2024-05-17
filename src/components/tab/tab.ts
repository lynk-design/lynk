import '../icon-button/icon-button';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { html, literal } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LocalizeController } from '../../utilities/localize';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './tab.styles';
import type { CSSResultGroup } from 'lit';

let id = 0;

/**
 * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).
 * @documentation https://lynk.design/components/tab
 * @status experimental
 * @since 1.0
 *
 * @dependency lynk-icon-button
 *
 * @slot - The tab's label.
 *
 * @event on:close - Emitted when the tab is closable and the close button is activated.
 *
 * @csspart base - The component's base wrapper.
 * @csspart close-button - The close button, an `<lynk-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 */
@customElement('lynk-tab')
export default class LynkTab extends LynkElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  private readonly attrId = ++id;
  private readonly componentId = `lynk-tab-${this.attrId}`;

  @query('.lynk-tab') tab: HTMLElement;

  /** The name of the tab panel this tab is associated with. The panel must be located in the same tab group. */
  @property({ reflect: true }) panel = '';

  /** Draws the tab in an active state. */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Makes the tab closable and shows a close button. */
  @property({ type: Boolean }) closable = false;

  /** Disables the tab and prevents selection. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property() href = '';

  /**
   * When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the
   * default is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a
   * specific tab/window, this will prevent that from working correctly. You can remove or change the default value by
   * setting the attribute to an empty string or a value of your choice, respectively.
   */
  @property() rel = 'noreferrer noopener';

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  private handleCloseClick() {
    this.emit('on:close');
  }

  private isLink() {
    return this.href ? true : false;
  }

  @watch('active')
  handleActiveChange() {
    this.setAttribute('aria-selected', this.active ? 'true' : 'false');
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  /** Sets focus to the tab. */
  focus(options?: FocusOptions) {
    this.tab.focus(options);
  }

  /** Removes focus from the tab. */
  blur() {
    this.tab.blur();
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`div`;

    // If the user didn't provide an ID, we'll set one so we can link tabs and tab panels with aria labels
    this.id = this.id.length > 0 ? this.id : this.componentId;

    return html`
      <${tag}
        part="base"
        href=${ifDefined(isLink ? this.href : undefined)}
        rel=${ifDefined(isLink ? this.rel : undefined)}
        class=${classMap({
          'lynk-tab': true,
          'lynk-tab--active': this.active,
          'lynk-tab--closable': this.closable,
          'lynk-tab--disabled': this.disabled
        })}
        tabindex=${this.disabled ? '-1' : '0'}
      >
        <slot></slot>
        ${
          this.closable
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
            : ''
        }
      </${tag}>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tab': LynkTab;
  }
}
