import { html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import '../../components/icon/icon';
import { drag } from '../../internal/drag';
import { emit } from '../../internal/event';
import { clamp } from '../../internal/math';
import { watch } from '../../internal/watch';
import styles from './image-comparer.styles';

/**
 * @since 1.0
 * @status stable
 *
 * @dependency lynk-icon
 *
 * @slot before - The before image, an `<img>` or `<svg>` element.
 * @slot after - The after image, an `<img>` or `<svg>` element.
 * @slot handle-icon - The icon used inside the handle.
 *
 * @event lynk-change - Emitted when the position changes.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart before - The container that holds the "before" image.
 * @csspart after - The container that holds the "after" image.
 * @csspart divider - The divider that separates the images.
 * @csspart handle - The handle that the user drags to expose the after image.
 *
 * @cssproperty --divider-width - The width of the dividing line.
 * @cssproperty --handle-size - The size of the compare handle.
 */
@customElement('lynk-image-comparer')
export default class LynkImageComparer extends LitElement {
  static styles = styles;

  @query('.lynk-image-comparer') base: HTMLElement;
  @query('.lynk-image-comparer__handle') handle: HTMLElement;

  /** The position of the divider as a percentage. */
  @property({ type: Number, reflect: true }) position = 50;

  handleDrag(event: PointerEvent) {
    const { width } = this.base.getBoundingClientRect();

    event.preventDefault();

    drag(this.base, {
      onMove: x => {
        this.position = parseFloat(clamp((x / width) * 100, 0, 100).toFixed(2));
      },
      initialEvent: event
    });
  }

  handleKeyDown(event: KeyboardEvent) {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      const incr = event.shiftKey ? 10 : 1;
      let newPosition = this.position;

      event.preventDefault();

      if (event.key === 'ArrowLeft') {
        newPosition -= incr;
      }
      if (event.key === 'ArrowRight') {
        newPosition += incr;
      }
      if (event.key === 'Home') {
        newPosition = 0;
      }
      if (event.key === 'End') {
        newPosition = 100;
      }
      newPosition = clamp(newPosition, 0, 100);

      this.position = newPosition;
    }
  }

  @watch('position', { waitUntilFirstUpdate: true })
  handlePositionChange() {
    emit(this, 'lynk-change');
  }

  render() {
    return html`
      <div part="base" id="image-comparer" class="lynk-image-comparer" @keydown=${this.handleKeyDown}>
        <div class="lynk-image-comparer__image">
          <div part="before" class="lynk-image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="lynk-image-comparer__after"
            style=${styleMap({ clipPath: `inset(0 ${100 - this.position}% 0 0)` })}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="lynk-image-comparer__divider"
          style=${styleMap({ left: `${this.position}%` })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="lynk-image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="currentColor" fill-rule="nonzero">
                  <path
                    d="m21.14 12.55-5.482 4.796c-.646.566-1.658.106-1.658-.753V7a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506h.001ZM2.341 12.55l5.482 4.796c.646.566 1.658.106 1.658-.753V7a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506h-.001Z"
                  />
                </g>
              </svg>
            </slot>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-image-comparer': LynkImageComparer;
  }
}
