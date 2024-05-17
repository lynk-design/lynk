import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import styles from './truncate.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Truncate is a tool used to shorten numeric and non-numeric character strings, typically when the string overflows its container.
 *
 * @since 1.0
 * @status experimental
 *
 * @slot - The default slot.
 * @slot end - Used when adding ellipsis at start or middle of truncated string.
 */
@customElement('lynk-truncate')
export default class LynkTruncate extends LynkElement {
  static styles: CSSResultGroup = styles;

  @query('slot') defaultSlot: HTMLSlotElement;
  @query('slot[name="end"]') endSlot: HTMLSlotElement;

  @state() private hasDefaultSlot = false;
  @state() private hasEndSlot = false;

  @property() title = ''; // make reactive to pass through

  /** Optionally clamp string at specified number of lines. */
  @property({ type: Number }) clamp?: '2' | '3' | '4' | '5';

  private handleDefaultSlotChange() {
    const slottedElements = [...this.defaultSlot.assignedNodes({ flatten: true })] as HTMLElement[];

    if (slottedElements.length) {
      this.hasDefaultSlot = true;
    } else {
      this.hasDefaultSlot = false;
    }
  }

  private handleEndSlotChange() {
    const slottedElements = [...this.endSlot.assignedNodes({ flatten: true })] as HTMLElement[];

    if (slottedElements.length) {
      this.hasEndSlot = true;
    } else {
      this.hasEndSlot = false;
    }
  }

  /** Returns a plain text label based on the option's content. */
  getTextLabel() {
    return (this.textContent ?? '').trim();
  }

  render() {
    return html`
      <span
        part="base"
        title=${this.title || this.getTextLabel()}
        class=${classMap({
          truncate: true,
          'truncate--end': this.hasDefaultSlot && !this.hasEndSlot,
          'truncate--middle': this.hasDefaultSlot && this.hasEndSlot,
          'truncate--start': !this.hasDefaultSlot && this.hasEndSlot
        })}
      >
        <slot class="truncate__start" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot name="end" class="truncate__end" @slotchange=${this.handleEndSlotChange}></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-truncate': LynkTruncate;
  }
}
