import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './resize-observer.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).
 *
 * @since 1.0
 * @status stable
 *
 * @slot - One or more elements to watch for resizing.
 *
 * @event {{ entries: ResizeObserverEntry[] }} on:resize - Emitted when the element is resized.
 */
@customElement('lynk-resize-observer')
export default class LynkResizeObserver extends LynkElement {
  static styles: CSSResultGroup = styles;

  private resizeObserver: ResizeObserver;
  private observedElements: HTMLElement[] = [];

  /** Disables the observer. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      this.emit('on:resize', { detail: { entries } });
    });

    if (!this.disabled) {
      this.startObserver();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }

  handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }

  startObserver() {
    const slot = this.shadowRoot!.querySelector('slot');

    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true }) as HTMLElement[];

      // Unwatch previous elements
      this.observedElements.forEach(el => this.resizeObserver.unobserve(el));
      this.observedElements = [];

      // Watch new elements
      elements.forEach(el => {
        this.resizeObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }

  stopObserver() {
    this.resizeObserver.disconnect();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }

  render() {
    return html` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-resize-observer': LynkResizeObserver;
  }
}
