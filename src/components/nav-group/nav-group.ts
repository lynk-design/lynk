import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
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
 * @cssproperty [--color=var(--lynk-color-neutral-600)] - Customize the header color.
 *
 */
@customElement('lynk-nav-group')
export default class LynkNavGroup extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, 'heading');

  @state() squished = false;

  /** The nav groups heading label. Alternatively, you can use the label slot. */
  @property({ reflect: true })
  public heading = '';

  async connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
  }

  firstUpdated() {
    this.handleSquished();
  }

  @watch('squished', { waitUntilFirstUpdate: true })
  handleSquished() {
    if (this.squished) {
      this.setAttribute('squished', this.squished ? 'true' : 'false');
    } else {
      this.removeAttribute('squished');
    }
  }

  render() {
    const hasHeadingSlot = this.hasSlotController.test('heading');
    const hasHeading = this.heading ? true : !!hasHeadingSlot;

    return html`
      <div
        id="heading"
        part="base"
        class=${classMap({
          'lynk-nav-group__heading': true
        })}
        aria-hidden=${hasHeading ? 'false' : 'true'}
      >
        <slot name="heading">${this.heading}</slot>
      </div>

      <slot
        part="children"
        class=${classMap({
          'lynk-nav-group': true,
          'lynk-nav-group--squished': this.squished
        })}
      ></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-nav-group': LynkNavGroup;
  }
}
