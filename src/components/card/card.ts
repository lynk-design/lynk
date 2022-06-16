import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { HasSlotController } from '../../internal/slot';
import styles from './card.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @slot - The card's body.
 * @slot header - The card's header.
 * @slot footer - The card's footer.
 * @slot image - The card's image.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart image - The card's image, if present.
 * @csspart header - The card's header, if present.
 * @csspart body - The card's body.
 * @csspart footer - The card's footer, if present.
 *
 * @cssproperty --border-color - The card's border color, including borders that occur inside the card.
 * @cssproperty --border-radius - The border radius for card edges.
 * @cssproperty --border-width - The width of card borders.
 * @cssproperty --padding - The padding to use for card sections.*
 */
@customElement('lynk-card')
export default class LynkCard extends LitElement {
  static styles = styles;

  private readonly hasSlotController = new HasSlotController(this, 'footer', 'header', 'image');

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          'lynk-card': true,
          'lynk-card--has-footer': this.hasSlotController.test('footer'),
          'lynk-card--has-image': this.hasSlotController.test('image'),
          'lynk-card--has-header': this.hasSlotController.test('header')
        })}
      >
        <div part="image" class="lynk-card__image">
          <slot name="image"></slot>
        </div>

        <div part="header" class="lynk-card__header">
          <slot name="header"></slot>
        </div>

        <div part="body" class="lynk-card__body">
          <slot></slot>
        </div>

        <div part="footer" class="lynk-card__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-card': LynkCard;
  }
}
