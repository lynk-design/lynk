import '../button/button';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import { waitForEvent } from '../../internal/event';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import LynkPageLayout from '../../components/page-layout/page-layout';
import styles from './page-sidebar.styles';
import type { CSSResultGroup } from 'lit';
import type LynkTooltip from '../tooltip/tooltip';

/**
 * @summary The Page Sidebar is used inside a [Page Layout](/components/page-layout) to render navigation and selection menus, or other related content that would normally be placed in a native `<aside>` element.
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-button
 * @dependency lynk-tooltip
 *
 * @slot - The sidebar's content.
 * @slot label - The sidebar's label. Alternatively, you can use the label prop.
 * @slot footer - The sidebar's footer, usually one or more buttons representing various options.
 *
 * @event on:show - Emitted when the sidebar opens.
 * @event after:show - Emitted after the sidebar opens and all animations are complete.
 * @event on:hide - Emitted when the sidebar closes.
 * @event after:hide - Emitted after the sidebar closes and all animations are complete.
 * 
 * @csspart base - The component's internal wrapper.
 * @csspart panel - The sidebar panel (where the sidebar and its content is rendered).
 * @csspart header - The sidebar header.
 * @csspart header-actions - Optional actions to add to the header. Works best with `<lynk-icon-button>`.
 * @csspart title - The sidebar title.
 * @csspart close-button - The close button.
 * @csspart close-button__base - The close button's `base` part.
 * @csspart body - The sidebar body.
 * @csspart footer - The sidebar footer.
 *
 * @cssproperty --width - The preferred width of the sidebar.
 * @cssproperty --header-spacing - The amount of padding to use for the header.
 * @cssproperty --body-spacing - The amount of padding to use for the body.
 * @cssproperty --footer-spacing - The amount of padding to use for the footer.
 */
@customElement('lynk-page-sidebar')
export default class LynkPageSidebar extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('.lynk-page-sidebar') sidebar: HTMLElement;
  @query('.lynk-page-sidebar__container') container: HTMLElement;
  @query('.lynk-page-sidebar__body') body: HTMLElement;
  @query('.lynk-page-sidebar__header') header: HTMLElement;
  @query('.lynk-page-sidebar__footer') footer: HTMLElement;
  @query('.lynk-page-sidebar__trigger-tooltip') tooltip: LynkTooltip;

  private readonly hasSlotController = new HasSlotController(this, 'footer', 'header', 'heading', 'header-actions');
  private readonly localize = new LocalizeController(this);

  /** Indicates whether or not the sidebar is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The sidebar optional heading as displayed in the header. If you need to display HTML, you can use the `header` slot instead.
   */
  @property({ reflect: true }) heading?: string;

  /** The placement of the sidebar in the page layout */
  @property({ reflect: true }) placement: 'left' | 'right' | 'left-inset' | 'right-inset' = 'left';

  /** Choose if the toggle functionality collapses the contents, hides the sidebar entirely, or is disabled  */
  @property({ reflect: true }) toggle: 'contents' | 'visibility' | 'none' = 'none';

  /** Choose placement of toggle button when toggling contents  */
  @property({ attribute: 'toggle-placement', reflect: true }) togglePlacement: 'top' | 'bottom' = 'top';


  connectedCallback() {
    super.connectedCallback();

    if (!this.slot && this.hasParentLayout()) {
      this.slot = `${this.placement}-sidebar`;
    }

    if (this.toggle === 'none') {
      this.open = true;
    }
  }

  firstUpdated() {
    this.updateVisibility();
  }

  /** Shows the sidebar */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'after:show');
  }

  /** Hides the sidebar */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'after:hide');
  }

  // Checks whether the item is nested into an item
  private hasParentLayout(): boolean {
    const parent = this.parentElement;
    return parent instanceof LynkPageLayout;
  }

  private handleToggleClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
    }
  }

  private updateVisibility() {
    if (this.toggle === 'visibility') {
      this.sidebar.hidden = !this.open;
    }

    if (this.toggle === 'contents') {
      this.tooltip.hide();
      this.body.hidden = !this.open;
      this.header.hidden = !this.open;
      this.footer.hidden = !this.open;
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('on:show');

      this.updateVisibility();

      this.emit('after:show');
    } else {
      // Hide
      this.emit('on:hide');

      // const { keyframes, options } = getAnimation(this, 'sidebar.hide', { dir: this.localize.dir() });
      // console.log(keyframes, options);

      this.updateVisibility();

      this.emit('after:hide');
    }
  }

  render() {
    const hasHeading = this.heading ? true : false;
    return html`
      <aside
        part="base"
        class=${classMap({
          'lynk-page-sidebar': true,
          'lynk-page-sidebar--open': this.open,
          'lynk-page-sidebar--left': this.placement === 'left',
          'lynk-page-sidebar--right': this.placement === 'right',
          'lynk-page-sidebar--left-inset': this.placement === 'left-inset',
          'lynk-page-sidebar--right-inset': this.placement === 'right-inset',
          'lynk-page-sidebar--rtl': this.localize.dir() === 'rtl',
          'lynk-page-sidebar--has-header':
            this.hasSlotController.test('header') ||
            this.hasSlotController.test('heading') ||
            this.hasSlotController.test('header-actions') ||
            hasHeading,
          'lynk-page-sidebar--has-footer': this.hasSlotController.test('footer')
        })}
      >
        <div
          part="container"
          class="lynk-page-sidebar__container"
        >
          <header part="header" class="lynk-page-sidebar__header">
            <slot name="header">
              <h2 part="title" class="lynk-page-sidebar__title" id="title">
                <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                <slot name="heading">
                  ${this.heading && this.heading.length > 0 ? this.heading : String.fromCharCode(65279)}
                </slot>
              </h2>
              <div part="header-actions" class="lynk-page-sidebar__header-actions">
                <slot name="header-actions">
                  ${this.toggle === 'visibility'
                    ? html`
                        <lynk-button
                          part="close-button"
                          size="tiny"
                          circle
                          label=${this.localize.term('close')}
                          @click=${this.handleToggleClick}
                        >
                          <lynk-icon library="system" name="x-lg"></lynk-icon>
                        </lynk-button>
                      `
                    : ''}
                </slot>
              </div>
            </slot>
          </header>

          <slot part="body" class="lynk-page-sidebar__body"></slot>

          <footer part="footer" class="lynk-page-sidebar__footer">
            <slot name="footer"></slot>
          </footer>
        </div>

        ${this.toggle === 'contents'
          ? html`
            <lynk-tooltip
              hoist
              placement="bottom"
              class="lynk-page-sidebar__trigger-tooltip"
              content="${this.open ? 'Hide Sidebar' : 'Show Sidebar'}"
            >
              <lynk-button
                part="close-button"
                size="tiny"
                circle
                exportparts="base:close-button__base"
                class=${classMap({
                  'lynk-page-sidebar__toggle': true,
                  'lynk-page-sidebar__toggle--bottom': this.togglePlacement === 'bottom'
                })}
                label=${this.localize.term('close')}
                @click=${this.handleToggleClick}
              >
                <lynk-icon library="system" name="${this.open ? 'chevron-left' : 'chevron-right'}"></lynk-icon>
              </lynk-button>
            </lynk-tooltip>
          `
        : ''}
      </aside>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-sidebar': LynkPageSidebar;
  }
}
