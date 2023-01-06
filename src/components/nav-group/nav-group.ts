import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { HasSlotController } from '../../internal/slot';
import { LocalizeController } from '../../utilities/localize';
import styles from './nav-group.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Short summary of the component's intended use.
 *
 * @since 2.0
 * @status experimental
 *
 * @dependency lynk-example
 *
 * @event on:event-name - Emitted as an example.
 *
 * @slot - The default slot.
 * @slot label - The nav groups heading label. Alternatively, you can use the label prop.

 *
 * @csspart base - The component's base wrapper.
 *
 * @cssproperty --example - An example CSS custom property.
 */
@customElement('lynk-nav-group')
export default class LynkNavGroup extends LynkElement {
  static styles: CSSResultGroup = styles;

  private readonly hasSlotController = new HasSlotController(this, 'label');

  /** The nav groups heading label. Alternatively, you can use the label slot. */
  @property() label = '';

  render() {
    const hasLabelSlot = this.hasSlotController.test('label');
    const hasLabel = this.label ? true : !!hasLabelSlot;

    return html`
      <label
        part="nav-label"
        class=${classMap({
          'lynk-nav__heading': true,
        })}
        aria-hidden=${hasLabel ? 'false' : 'true'}
      >
        <slot name="label">${this.label}</slot>
      </label>
      <slot class="lynk-nav-group"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-nav-group': LynkNavGroup;
  }
}
