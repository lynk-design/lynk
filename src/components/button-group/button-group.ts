import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import LynkElement from '../../internal/lynk-element';
import styles from './button-group.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Button groups can be used to group related buttons into sections.
 *
 * @since 1.0
 * @status stable
 *
 * @slot - One or more `<lynk-button>` elements to display in the button group.
 *
 * @csspart base - The component's internal wrapper.
 */
@customElement('lynk-button-group')
export default class LynkButtonGroup extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('slot') defaultSlot: HTMLSlotElement;

  @state() disableRole = false;

  /** A label to use for the button group's `aria-label` attribute. */
  @property() label = '';

  handleFocus(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.add('lynk-button-group__button--focus');
  }

  handleBlur(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.remove('lynk-button-group__button--focus');
  }

  handleMouseOver(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.add('lynk-button-group__button--hover');
  }

  handleMouseOut(event: Event) {
    const button = findButton(event.target as HTMLElement);
    button?.classList.remove('lynk-button-group__button--hover');
  }

  handleSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })] as HTMLElement[];

    slottedElements.forEach(el => {
      const index = slottedElements.indexOf(el);
      const button = findButton(el);

      if (button !== null) {
        button.classList.add('lynk-button-group__button');
        button.classList.toggle('lynk-button-group__button--first', index === 0);
        button.classList.toggle('lynk-button-group__button--inner', index > 0 && index < slottedElements.length - 1);
        button.classList.toggle('lynk-button-group__button--last', index === slottedElements.length - 1);
        button.classList.toggle('lynk-button-group__button--radio', button.tagName.toLowerCase() === 'sl-radio-button');
      }
    });
  }

  render() {
    // eslint-disable-next-line lit-a11y/mouse-events-have-key-events
    return html`
      <slot
        part="base"
        class="lynk-button-group"
        role="${this.disableRole ? 'presentation' : 'group'}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `;
  }
}

function findButton(el: HTMLElement) {
  const selector = 'lynk-button, lynk-radio-button';

  // The button could be the target element or a child of it (e.g. a dropdown or tooltip anchor)
  return el.closest(selector) ?? el.querySelector(selector);
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-button-group': LynkButtonGroup;
  }
}
