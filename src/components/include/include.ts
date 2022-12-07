import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import LynkElement from '../../internal/lynk-element';
import { watch } from '../../internal/watch';
import styles from './include.styles';
import { requestInclude } from './request';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Includes give you the power to embed external HTML files into the page.
 *
 * @since 1.0
 * @status stable
 *
 * @event on:load - Emitted when the included file is loaded.
 * @event {{ status: number }} on:error - Emitted when the included file fails to load due to an error.
 */
@customElement('lynk-include')
export default class LynkInclude extends LynkElement {
  static styles: CSSResultGroup = styles;

  /**
   * The location of the HTML file to include.
   *
   * WARNING: Be sure you trust the content you are including as it will be executed as code and can result in XSS attacks.
   */
  @property() src: string;

  /** The fetch mode to use. */
  @property() mode: 'cors' | 'no-cors' | 'same-origin' = 'cors';

  /**
   * Allows included scripts to be executed. You must ensure the content you're including is trusted, otherwise this
   * option can lead to XSS vulnerabilities in your app!
   */
  @property({ attribute: 'allow-scripts', type: Boolean }) allowScripts = false;

  executeScript(script: HTMLScriptElement) {
    // Create a copy of the script and swap it out so the browser executes it
    const newScript = document.createElement('script');
    [...script.attributes].forEach(attr => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode!.replaceChild(newScript, script);
  }

  @watch('src')
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await requestInclude(src, this.mode);

      // If the src changed since the request started do nothing, otherwise we risk overwriting a subsequent response
      if (src !== this.src) {
        return;
      }

      if (!file.ok) {
        this.emit('on:error', { detail: { status: file.status } });
        return;
      }

      this.innerHTML = file.html;

      if (this.allowScripts) {
        [...this.querySelectorAll('script')].forEach(script => this.executeScript(script));
      }

      this.emit('on:load');
    } catch {
      this.emit('on:error', { detail: { status: -1 } });
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lynk-include': LynkInclude;
  }
}
