import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate';
import { waitForEvent } from '../../internal/event';
import LynkElement from '../../internal/lynk-element';
import { HasSlotController } from '../../internal/slot';
import { watch } from '../../internal/watch';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { LocalizeController } from '../../utilities/localize';
import '../button/button';
import styles from './page-sidebar.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 *
 * @since 2.0
 * @status experimental
 *
 * @dependency lynk-button
 *
 * @slot - The sidebar's content.
 * @slot label - The sidebar's label. Alternatively, you can use the label prop.
 * @slot footer - The sidebar's footer, usually one or more buttons representing various options.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart overlay - The overlay.
 * @csspart panel - The sidebar panel (where the sidebar and its content is rendered).
 * @csspart header - The sidebar header.
 * @csspart header-actions - Optional actions to add to the header. Works best with `<sl-icon-button>`.
 * @csspart title - The sidebar title.
 * @csspart close-button - The close button.
 * @csspart close-button__base - The close button's `base` part.
 * @csspart body - The sidebar body.
 * @csspart footer - The sidebar footer.
 *
 * @cssproperty --size - The preferred size of the sidebar. This will be applied to the sidebar's width or height
 *   depending on its `placement`. Note that the sidebar will shrink to accommodate smaller screens.
 * @cssproperty --header-spacing - The amount of padding to use for the header.
 * @cssproperty --body-spacing - The amount of padding to use for the body.
 * @cssproperty --footer-spacing - The amount of padding to use for the footer.
 */
@customElement('lynk-page-sidebar')
export default class LynkPageSidebar extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('.lynk-page-sidebar') sidebar: HTMLElement;
  @query('.lynk-page-sidebar__body') body: HTMLElement;
  @query('.lynk-page-sidebar__header') header: HTMLElement;
  @query('.lynk-page-sidebar__footer') footer: HTMLElement;

  private readonly hasSlotController = new HasSlotController(this, 'footer');
  private readonly localize = new LocalizeController(this);

  /** Indicates whether or not the sidebar is open. You can use this in lieu of the show/hide methods. */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The sidebar's label as displayed in the header. You should always include a relevant label even when using
   * `no-header`, as it is required for proper accessibility. If you need to display HTML, you can use the `label` slot
   * instead.
   */
  @property({ reflect: true }) label = '';

  /** The placement of the sidebar in the page layout */
  @property({ reflect: true }) placement: 'left' | 'right' | 'left-inset' | 'right-inset' = 'left';

  /** Choose if the toggle functionality hides the sidebar entirely, or collapses the contents */
  @property({ reflect: true }) toggle: 'contents' | 'visibility' = 'contents';

  /**
   * Removes the header.
   */
  @property({ attribute: 'no-header', type: Boolean, reflect: true }) noHeader = false;

  firstUpdated() {
    this.body.hidden = !this.open;
    this.header.hidden = !this.open;
    this.footer.hidden = !this.open;
  }

  /** Shows the accordion. */
  async show() {
    if (this.open || this.disabled) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'after:show');
  }

  /** Hides the accordion */
  async hide() {
    if (!this.open || this.disabled) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'after:hide');
  }

  handleToggleClick() {
    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('on:show');

      // DO SOME STUFF HERE
      this.body.hidden = !this.open;
      this.header.hidden = !this.open;
      this.footer.hidden = !this.open;

      this.emit('after:show');
    } else {
      // Hide
      this.emit('on:hide');

      this.body.hidden = !this.open;
      this.header.hidden = !this.open;
      this.footer.hidden = !this.open;

      // DO SOME STUFF HERE

      this.emit('after:hide');
    }
  }

  render() {
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
            'lynk-page-sidebar--has-footer': this.hasSlotController.test('footer')
          })}
        >
          ${!this.noHeader
            ? html`
                <header part="header" class="lynk-page-sidebar__header">
                  <h2 part="title" class="lynk-page-sidebar__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="lynk-page-sidebar__header-actions">
                    <slot name="header-actions"></slot>
                   </div>
                </header>
              `
            : ''}

            <lynk-button
              part="close-button"
              size="tiny"
              circle
              exportparts="base:close-button__base"
              class="lynk-page-sidebar__toggle"
              label=${this.localize.term('close')}
              @click=${this.handleToggleClick}
            >
                <lynk-icon library="system" name="${this.open ? 'chevron-left' : 'chevron-right'}"></lynk-icon>
            </lynk-button>
          <slot part="body" class="lynk-page-sidebar__body"></slot>

          <footer part="footer" class="lynk-page-sidebar__footer">
            <slot name="footer"></slot>
          </footer>
        </aside>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-sidebar': LynkPageSidebar;
  }
}
