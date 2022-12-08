import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import LynkElement from '../../internal/lynk-element';
import { LocalizeController } from '../../utilities/localize';
import '../icon-button/icon-button';
import styles from './tag.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-icon-button
 *
 * @slot - The tag's content.
 *
 * @event on:remove - Emitted when the remove button is activated.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart content - The tag content.
 * @csspart remove-button - The remove button.
 * @csspart remove-button__base - The remove button's `base` part.
 */
@customElement('lynk-tag')
export default class LynkTag extends LynkElement {
  static styles: CSSResultGroup = styles;
  private readonly localize = new LocalizeController(this);

  /** The tag's variant. */
  @property({ reflect: true }) type: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text' = 'neutral';

  /** The tag's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style tag with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the tag removable. */
  @property({ type: Boolean }) removable = false;

  handleRemoveClick() {
    this.emit('on:remove');
  }

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          'lynk-tag': true,

          // Types
          'lynk-tag--primary': this.type === 'primary',
          'lynk-tag--success': this.type === 'success',
          'lynk-tag--neutral': this.type === 'neutral',
          'lynk-tag--warning': this.type === 'warning',
          'lynk-tag--danger': this.type === 'danger',
          'lynk-tag--text': this.type === 'text',

          // Sizes
          'lynk-tag--small': this.size === 'small',
          'lynk-tag--medium': this.size === 'medium',
          'lynk-tag--large': this.size === 'large',

          // Modifiers
          'lynk-tag--pill': this.pill,
          'lynk-tag--removable': this.removable
        })}
      >
        <slot part="content" class="lynk-tag__content"></slot>

        ${this.removable
          ? html`
              <lynk-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term('remove')}
                class="lynk-tag__remove"
                @click=${this.handleRemoveClick}
              ></lynk-icon-button>
            `
          : ''}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-tag': LynkTag;
  }
}
