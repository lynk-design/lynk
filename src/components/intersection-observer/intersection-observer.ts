import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { watch } from '../../internal/watch';
import LynkElement from '../../internal/lynk-element';
import styles from './intersection-observer.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary The Intersection Observer component offers a thin, declarative interface to the [`IntersectionObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).
 *
 * @since 1.0
 * @status experimental
 *
 * @slot - One or more elements to watch for intersection.
 *
 * @event {{ entry: IntersectionObserverEntry[] }} on:enter - Emitted when a slotted element enters the view.
 * @event {{ entry: IntersectionObserverEntry[] }} on:exit - Emitted when a slotted element exits the view.

 */
@customElement('lynk-intersection-observer')
export default class LynkIntersectionObserver extends LynkElement {
  static styles: CSSResultGroup = styles;

  private intersectionObserver: IntersectionObserver;
  private observedElements: HTMLElement[] = [];

  /** Disables the observer. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.intersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        console.log(entry);
        if (entry.intersectionRatio > 0) {
          this.emit('on:enter-view', { detail: { entry } });
        } else {
          this.emit('on:exit-view', { detail: { entry } });
        }
      });
    });

    if (!this.disabled) {
      this.startObserver();
    }
  }

  handleSlotChange() {
    if (!this.disabled) {
      this.startObserver();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }

  startObserver() {
    const slot = this.shadowRoot!.querySelector('slot');

    if (slot !== null) {
      const elements = slot.assignedElements({ flatten: true }) as HTMLElement[];

      // Unwatch previous elements
      this.observedElements.forEach(el => this.intersectionObserver.unobserve(el));
      this.observedElements = [];

      // Watch new elements
      elements.forEach(el => {
        this.intersectionObserver.observe(el);
        this.observedElements.push(el);
      });
    }
  }

  stopObserver() {
    this.intersectionObserver.disconnect();
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
    return html`<slot @slotchange=${this.handleSlotChange}></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-intersection-observer': LynkIntersectionObserver;
  }
}
