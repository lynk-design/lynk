import { html, literal } from 'lit/static-html.js';
import { customElement, property, query, state} from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { animateTo, shimKeyframesHeightAuto, stopAnimations } from '../../internal/animate';
import LynkElement from '../../internal/lynk-element';
import { getTextContent } from '../../internal/slot';
import { watch } from '../../internal/watch';
import { getAnimation, setDefaultAnimation } from '../../utilities/animation-registry';
import { LocalizeController } from '../../utilities/localize';
import '../icon/icon';
import '../tooltip/tooltip';
import styles from './nav-item.styles';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Nav items allow the user to navigate or trigger actions from within a navigation menu.
 *
 * @since 1.0
 * @status experimental
 *
 * @dependency lynk-icon
 *
 * @event on:expand - Emitted when the nav item expands.
 * @event after:expand - Emitted after the nav item expands and all animations are complete.
 * @event on:collapse - Emitted when the nav item collapses.
 * @event after:collapse - Emitted after the nav item collapses and all animations are complete.
 * @event on:click - Emitted when a nav item is clicked
 * @event on:label-change - Emitted when the nav item's text label changes. For performance reasons, this event is only emitted if the default slot's `slotchange` event is triggered. It will not fire when the label is first set.
 *
 * @slot - The nav item's label.
 * @slot prefix - Used to prepend an icon or similar element to the nav item.
 * @slot suffix - Used to append an icon or similar element to the nav item.
 * @slot children - Used to nest nav items under a nav item.
 *
 * @csspart base - The component's internal wrapper.
 * @csspart prefix - The prefix container.
 * @csspart label - The nav item label.
 * @csspart suffix - The suffix container.
 *
 * @cssproperty [--hover-bg-color=var(--lynk-color-gray-a25)] - Customize the hover styles.
 * @cssproperty [--selected-bg-color=var(--lynk-color-primary-700)] - Customize the selected styles.
 * @cssproperty [--selected-color=var(--lynk-color-gray-a25)] - Customize the selected styles.
 * @cssproperty [--border-radius=var(--lynk-border-radius-medium)] - Customize the border radius.
 */
@customElement('lynk-nav-item')
export default class LynkNavItem extends LynkElement {
  static styles: CSSResultGroup = styles;

  static isNavItem(node: Node) {
    return node instanceof Element && node.getAttribute('role') === 'menuitem';
  }

  private readonly localize = new LocalizeController(this);
  private cachedTextLabel: string;

  @state() isParent = false;
  @state() isChild = false;
  @state() depth = 0;
  @state() squished = false;

  @property()
  public title = ''; // make reactive to pass through

  /** An optional name for the button. Ignored when `href` is set. */
  @property()
  public name = '';

  /** A unique value to store in the nav item. This can be used as a way to identify nav items when selected. */
  @property()
  public value = '';

  /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
  @property()
  public href = '';

  /** Tells the browser where to open the link. Only used when `href` is set. */
  @property()
  public target?: '_blank' | '_parent' | '_self' | '_top';

  /** Tells the browser to download the linked file as this filename. Only used when `href` is set. */
  @property()
  public download?: string;

  /** Draws the nav item in a highlighted or active state. */
  @property({ type: Boolean, reflect: true })
  public selected = false;

  /** Displays nested child nav-items if slotted  */
  @property({ type: Boolean, reflect: true })
  public expanded = false;

  /** Draws the nav item in a disabled state. */
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  /**
   * Disables the label and replaces with a tooltip.
   */
  @property({ attribute: 'no-label', type: Boolean, reflect: true }) noLabel = false;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('slot[name=children]') childrenSlot: HTMLSlotElement;
  @query('.lynk-nav-item') navItem: HTMLElement;
  @query('.lynk-nav-item__children') childrenContainer: HTMLDivElement;

  connectedCallback() {
    super.connectedCallback();

    /** using menuitem role to differentiate interactive elments from non interactive elements in a nav.
     ** Because we are also implemening ARIA based Menu Keyboard Interactions, this
     ** can be considered an appropriate use of the menuitem role
     ** see https://stackoverflow.com/questions/41141247/aria-role-menuitem-for-a-or-li
    **/
    this.setAttribute('role', 'menuitem');
    this.setAttribute('tabindex', '-1');

    if (this.hasParent()) {
      this.slot = 'children';
      this.isChild = true;
      this.depth = this.getDepth();
    }
  }

  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded;
    this.childrenContainer.style.height = this.expanded ? 'auto' : '0';

    this.isParent = this.hasChildren;
    this.handleExpandedChange();
    this.handleSquished();
  }

  /** Simulates a click on the nav item. */
  public click() {
    this.navItem.click();
  }

  private async animateCollapse() {
    this.emit('on:collapse');

    await stopAnimations(this.childrenContainer);

    const { keyframes, options } = getAnimation(this, 'nav-item.collapse', { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.hidden = true;

    this.emit('after:collapse');
  }

  private async animateExpand() {
    this.emit('on:expand');

    await stopAnimations(this.childrenContainer);
    this.childrenContainer.hidden = false;

    const { keyframes, options } = getAnimation(this, 'nav-item.expand', { dir: this.localize.dir() });
    await animateTo(
      this.childrenContainer,
      shimKeyframesHeightAuto(keyframes, this.childrenContainer.scrollHeight),
      options
    );
    this.childrenContainer.style.height = 'auto';

    this.emit('after:expand');
  }

  // Checks whether the item is nested into an item
  private hasParent(): boolean {
    const parent = this.parentElement;
    return !!parent && LynkNavItem.isNavItem(parent);
  }

  protected get hasChildren(): boolean {
    return !!this.querySelector('lynk-nav-item');
  }

  private getDepth(): number {
    let depth = 0;
    let element = this.parentElement;
    while (element instanceof LynkNavItem) {
      depth++;
      element = element.parentElement;
    }
    return depth;
  }

  /** Returns a text label based on the contents of the menu item's default slot. */
  getTextLabel() {
    return getTextContent(this.defaultSlot);
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('expanded', { waitUntilFirstUpdate: true })
  handleExpandedChange() {
    if (this.hasChildren) {
      this.setAttribute('aria-expanded', this.expanded ? 'true' : 'false');
    } else {
      this.removeAttribute('aria-expanded');
    }
  }

  @watch('expanded', { waitUntilFirstUpdate: true })
  handleExpandAnimation() {
    if (this.expanded) {
      this.animateExpand();
    } else {
      this.animateCollapse();
    }
  }

  @watch('squished', { waitUntilFirstUpdate: true })
  handleSquished() {
    if (this.squished) {
      this.setAttribute('squished', this.squished ? 'true' : 'false');
    } else {
      this.removeAttribute('squished');
    }
  }

  protected handleClick(event: MouseEvent) {

    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return
    }

    if (this.hasChildren) {
      this.expanded = !this.expanded;
      this.emit('on:click', { bubbles: false });
      event.stopPropagation();
    } else {
      this.emit('on:click');
    }
  }

  private handleDefaultSlotChange() {
    const textLabel = this.getTextLabel();

    // Ignore the first time the label is set
    if (typeof this.cachedTextLabel === 'undefined') {
      this.cachedTextLabel = textLabel;
      return;
    }

    if (textLabel !== this.cachedTextLabel) {
      this.cachedTextLabel = textLabel;
      this.emit('on:label-change');
    }
  }

  private isLink() {
    return this.href ? true : false;
  }

  render() {
    const isLink = this.isLink();
    const tag = isLink ? literal`a` : literal`button`;
    const isRtl = this.localize.dir() === 'rtl';

    return html`
      <${tag}
        class=${classMap({
          'lynk-nav-item': true,
          'lynk-nav-item--disabled': this.disabled,
          'lynk-nav-item--selected': this.selected,
          'lynk-nav-item--has-children': this.isParent,
          'lynk-nav-item--expanded': this.expanded,
          'lynk-nav-item--rtl': isRtl,
        })}
        ?disabled=${this.disabled}
        title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
        part="nav-item"
        name=${ifDefined(isLink ? undefined : this.name)}
        value=${ifDefined(isLink ? undefined : this.value)}
        href=${ifDefined(isLink ? this.href : undefined)}
        target=${ifDefined(isLink ? this.target : undefined)}
        download=${ifDefined(isLink ? this.download : undefined)}
        rel=${ifDefined(isLink && this.target ? 'noreferrer noopener' : undefined)}
        data-level=${this.depth}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        @click=${this.handleClick}
        tabindex="-1"
        aria-current=${ifDefined(this.selected && this.href ? 'page' : undefined)}
      >
        <slot name="prefix" part="prefix" class="lynk-nav-item__prefix"></slot>
        <slot part="label" class="lynk-nav-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="lynk-nav-item__suffix"></slot>

        ${this.isParent
          ? html`
            <span class="lynk-nav-item__chevron">
              <lynk-icon library="system" aria-hidden="true" name=${isRtl ? 'chevron-left' : 'chevron-right'}></lynk-icon>
            </span>
        ` : ''}

      </${tag}>

      <slot
        name="children"
        class="lynk-nav-item__children"
        part="children"
        role="group"
      ></slot>

    `;
  }
}

setDefaultAnimation('nav-item.expand', {
  keyframes: [
    { height: '0', opacity: '0', overflow: 'hidden' },
    { height: 'auto', opacity: '1', overflow: 'hidden' }
  ],
  options: { duration: 250, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)' }
});

setDefaultAnimation('nav-item.collapse', {
  keyframes: [
    { height: 'auto', opacity: '1', overflow: 'hidden' },
    { height: '0', opacity: '0', overflow: 'hidden' }
  ],
  options: { duration: 200, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)' }
});

declare global {
  interface HTMLElementTagNameMap {
    'lynk-nav-item': LynkNavItem;
  }
}
