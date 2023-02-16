import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import { LocalizeController } from '../../utilities/localize';
import LynkPageLayout from '../../components/page-layout/page-layout';
import '../../components/page-content/page-content';
import styles from './page-header.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The Page Header is used inside a [Page Layout](/components/page-layout) to standardized header content and controls.
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-page-layout
 * @dependency lynk-page-content
 *
 * @slot - The default slot for the title, description, and other relevant metadata. 
 * @slot breadcrumb - Designated top-left area for breadcrumb navigation.
 * @slot controls - Designated area to right of default slot for standard header actions.
 * @slot aux - Designated top-right area for auxiliary header actions.
 * @slot tabs - Designated bottom area for tab navigation.
 *
 * @csspart base - The component's base wrapper.
 * @csspart breadcrumb - The component's breadcrumb area wrapper.
 * @csspart controls - The component's controls area wrapper.
 * @csspart main - The component's main area wrapper.
 * @csspart aux - The component's auxiliary controls area wrapper.
 * @csspart tabs - The component's tab area wrapper.
 *
 * @cssproperty --gap - The gutter spacing between slots.
 */
@customElement('lynk-page-header')
export default class LynkPageHeader extends LynkElement {
  static styles: CSSResultGroup = styles;

  /** Set an optional maximum width for page header  */
  @property({ reflect: true }) width :
    | 'auto'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | '2x-large'
    | 'fluid' = 'fluid';

  connectedCallback() {
    super.connectedCallback();

    if (!this.slot && this.hasParentLayout()) {
      this.slot = 'header';
    }
  }

  // Checks whether the heading is nested into a lynk-page-layout
  private hasParentLayout(): boolean {
    const parent = this.parentElement;
    return parent instanceof LynkPageLayout;
  }

  render() {
    return html`
      <lynk-page-content
        width="${this.width}"
        style="--padding-top: 0; --padding-bottom: 0;"
      >
        <header
          part="base"
          class="lynk-page-header"
        >
          <slot name="breadcrumb" part="breadcrumb" class="lynk-page-header__breadcrumb"></slot>
          <slot name="controls" part="controls" class="lynk-page-header__controls"></slot>
          <slot name="aux" part="aux" class="lynk-page-header__aux"></slot>
          <slot class="lynk-page-header__main"></slot>
          <slot name="tabs" part="tabs" class="lynk-page-header__tabs"></slot>
        </header>
      </lynk-page-content>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-page-header': LynkPageHeader;
  }
}
