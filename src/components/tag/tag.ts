import '../icon-button/icon-button';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize';
import LynkElement from '../../internal/lynk-element';
import styles from './tag.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Tags are used as labels to organize things or to indicate a selection.
 *
 * @since 1.0
 * @status stable
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
  @property({ reflect: true }) type: 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text';

  /** The tag's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Draws a pill-style tag with rounded edges. */
  @property({ type: Boolean, reflect: true }) pill = false;

  /** Makes the tag removable. */
  @property({ type: Boolean }) removable = false;

  /** Makes the tag pulsate to draw attention. */
  @property({ type: Boolean, reflect: true }) pulse = false;

  /** Drwas a solid filled badge-styled tag . */
  @property({ type: Boolean, reflect: true }) badge = false;

  handleRemoveClick() {
    this.emit('on:remove');
  }

  render() {
    return html`
      <span
        part="base"
        class=${classMap({
          'tag': true,

          // Types
          'tag--primary': this.type === 'primary',
          'tag--success': this.type === 'success',
          'tag--neutral': this.type === 'neutral',
          'tag--warning': this.type === 'warning',
          'tag--danger': this.type === 'danger',
          'tag--text': this.type === 'text',

          // Sizes
          'tag--small': this.size === 'small',
          'tag--medium': this.size === 'medium',
          'tag--large': this.size === 'large',

          // Modifiers
          'tag--pill': this.pill,
          'tag--pulse': this.pulse,
          'tag--badge': this.badge,
          'tag--removable': this.removable
        })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable
          ? html`
              <lynk-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term('remove')}
                class="tag__remove"
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
