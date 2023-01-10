import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { HasSlotController } from '../../internal/slot';
import styles from './nav-group.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Group navigation items into categories with a header.
 *
 * @since 1.0
 * @status experimental
 *
 * @slot - the Nav Items to display in association with the heading
 * @slot heading - The nav groups heading. Alternatively, you can use the heading prop.
 *
 * @csspart base - The nav groups heading wrapper.
 * @csspart children - The nav groups children wrapper.
 *
 */
@customElement('lynk-nav-group')
export default class LynkNavGroup extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, 'heading');

  /** The nav groups heading label. Alternatively, you can use the label slot. */
  @property({ reflect: true })
  public heading= '';

  async connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
  }

  render() {
    const hasHeadingSlot = this.hasSlotController.test('heading');
    const hasHeading = this.heading ? true : !!hasHeadingSlot;

    return html`
      <h2
        id="heading"
        part="base"
        class=${classMap({
          'lynk-nav__heading': true,
        })}
        aria-hidden=${hasHeading ? 'false' : 'true'}
      >
        <slot name="heading">${this.heading}</slot>
      </h2>
      <slot part="children" class="lynk-nav-group"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-nav-group': LynkNavGroup;
  }
}
