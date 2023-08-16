import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './card.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Cards can be used to group media with related subjects into a container.
 * @documentation https://lynk.design/components/card
 * @status stable
 * @since 1.0
 *
 * @slot - The card's main content.
 * @slot header - An optional header for the card.
 * @slot footer - An optional footer for the card.
 * @slot image - An optional image to render at the start of the card.
 *
 * @csspart base - The component's base wrapper.
 * @csspart image - The container that wraps the card's image.
 * @csspart header - The container that wraps the card's header.
 * @csspart body - The container that wraps the card's main content.
 * @csspart footer - The container that wraps the card's footer.
 *
 * @cssproperty --border-color - The card's border color, including borders that occur inside the card.
 * @cssproperty --border-radius - The border radius for the card's edges.
 * @cssproperty --border-width - The width of the card's borders.
 * @cssproperty --state-color - A custom color for the interactive state.
 * @cssproperty --padding - The padding to use for the card's sections.
 */
@customElement('lynk-card')
export default class LynkCard extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, 'footer', 'header', 'image');

  /** Draws the table row using status colors */
  @property({ reflect: true }) state: 'primary' | 'danger' | 'success' | 'warning' | 'neutral';

  /** Determines whether to highlight the card on hover */
  @property({ type: Boolean, reflect: true }) interactive = false;

  /** Draws the card in a highlighted state  */
  @property({ type: Boolean, reflect: true }) active = false;

  /** Pulse the status colors for increased visibility */
  @property({ type: Boolean, reflect: true }) pulse = false;

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          card: true,
          'card--interactive': this.interactive,
          'card--active': this.active,
          'card--pulse': this.pulse,
          'card--primary': this.state === 'primary',
          'card--danger': this.state === 'danger',
          'card--success': this.state === 'success',
          'card--neutral': this.state === 'neutral',
          'card--warning': this.state === 'warning',
          'card--has-footer': this.hasSlotController.test('footer'),
          'card--has-image': this.hasSlotController.test('image'),
          'card--has-header': this.hasSlotController.test('header')
        })}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-card': LynkCard;
  }
}
