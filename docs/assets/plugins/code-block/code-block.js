/* global Prism */

(() => {
  const reactVersion = '17.0.2';
  let flavor = getFlavor();
  let count = 1;

  // Sync flavor UI on page load
  setFlavor(getFlavor());

  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  function convertModuleLinks(html) {
    const version = sessionStorage.getItem('l-version');

    html = html
      .replace(/from 'react'/g, `from 'https://cdn.skypack.dev/react@${reactVersion}'`)
      .replace(/from "react"/g, `from "https://cdn.skypack.dev/react@${reactVersion}"`);

    return html;
  }

  function getAdjacentExample(name, pre) {
    let currentPre = pre.nextElementSibling;

    while (currentPre?.tagName.toLowerCase() === 'pre') {
      if (currentPre?.getAttribute('data-lang').split(' ').includes(name)) {
        return currentPre;
      }

      currentPre = currentPre.nextElementSibling;
    }

    return null;
  }

  function runScript(script) {
    const newScript = document.createElement('script');

    if (script.type === 'module') {
      newScript.type = 'module';
      newScript.textContent = script.innerHTML;
    } else {
      newScript.appendChild(document.createTextNode(`(() => { ${script.innerHTML} })();`));
    }

    script.parentNode.replaceChild(newScript, script);
  }

  function getFlavor() {
    return localStorage.getItem('flavor') || 'html';
  }

  function setFlavor(newFlavor) {
    flavor = ['html', 'react'].includes(newFlavor) ? newFlavor : 'html';
    localStorage.setItem('flavor', flavor);

    // Set the flavor class on the body
    document.body.classList.toggle('flavor-html', flavor === 'html');
    document.body.classList.toggle('flavor-react', flavor === 'react');
  }

  window.$docsify.plugins.push(hook => {
    // Convert code blocks to previews
    hook.afterEach((html, next) => {
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(html, 'text/html');

      const htmlButton = `
        <button
          type="button"
          title="Show HTML code"
          class="code-block__button code-block__button--html ${flavor === 'html' ? 'code-block__button--selected' : ''}"
        >
          HTML
        </button>
      `;

      const reactButton = `
        <button
          type="button"
          title="Show React code"
          class="code-block__button code-block__button--react ${
            flavor === 'react' ? 'code-block__button--selected' : ''
          }"
        >
          React
        </button>
      `;

      [...doc.querySelectorAll('code[class^="lang-"]')].forEach(code => {
        if (code.classList.contains('preview')) {
          const isExpanded = code.classList.contains('expanded');
          const pre = code.closest('pre');
          const sourceGroupId = `code-block-source-group-${count}`;
          const toggleId = `code-block-toggle-${count}`;
          const reactPre = getAdjacentExample('react', pre);
          const hasReact = reactPre !== null;

          pre.setAttribute('data-lang', pre.getAttribute('data-lang').replace(/ preview$/, ''));
          pre.setAttribute('aria-labelledby', toggleId);

          const codeBlock = `
            <div class="code-block ${isExpanded ? 'code-block--expanded' : ''}">
              <div class="code-block__preview">
                ${code.textContent}
                <div class="code-block__resizer">
                  <lynk-icon name="grip-vertical"></lynk-icon>
                </div>
              </div>

              <div class="code-block__source-group" id="${sourceGroupId}">
                <div class="code-block__source code-block__source--html" ${hasReact ? 'data-flavor="html"' : ''}>
                  ${pre.outerHTML}
                </div>

                ${
                  hasReact
                    ? `
                  <div class="code-block__source code-block__source--react" data-flavor="react">
                    ${reactPre.outerHTML}
                  </div>
                `
                    : ''
                }
              </div>

              <div class="code-block__buttons">
                ${hasReact ? ` ${htmlButton} ${reactButton} ` : ''}

                <button
                  type="button"
                  class="code-block__button code-block__toggle"
                  aria-expanded="${isExpanded ? 'true' : 'false'}"
                  aria-controls="${sourceGroupId}"
                >
                  Source
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

              </div>
            </div>
          `;

          pre.replaceWith(domParser.parseFromString(codeBlock, 'text/html').body);
          reactPre?.remove();

          count++;
        }
      });

      // Force the highlighter to run again so JSX fields get highlighted properly
      requestAnimationFrame(() => Prism.highlightAll());

      next(doc.body.innerHTML);
    });

    // After the page is done loading, force scripts in previews to execute
    hook.doneEach(() => {
      [...document.querySelectorAll('.code-block__preview script')].map(script => runScript(script));
    });

    // Horizontal resizing
    hook.doneEach(() => {
      [...document.querySelectorAll('.code-block__preview')].forEach(preview => {
        const resizer = preview.querySelector('.code-block__resizer');
        let startX;
        let startWidth;

        function dragStart(event) {
          startX = event.changedTouches ? event.changedTouches[0].pageX : event.clientX;
          startWidth = parseInt(document.defaultView.getComputedStyle(preview).width, 10);
          preview.classList.add('code-block__preview--dragging');
          event.preventDefault();
          document.documentElement.addEventListener('mousemove', dragMove);
          document.documentElement.addEventListener('touchmove', dragMove);
          document.documentElement.addEventListener('mouseup', dragStop);
          document.documentElement.addEventListener('touchend', dragStop);
        }

        function dragMove(event) {
          setWidth(startWidth + (event.changedTouches ? event.changedTouches[0].pageX : event.pageX) - startX);
        }

        function dragStop() {
          preview.classList.remove('code-block__preview--dragging');
          document.documentElement.removeEventListener('mousemove', dragMove);
          document.documentElement.removeEventListener('touchmove', dragMove);
          document.documentElement.removeEventListener('mouseup', dragStop);
          document.documentElement.removeEventListener('touchend', dragStop);
        }

        function setWidth(width) {
          preview.style.width = `${width}px`;
        }

        resizer.addEventListener('mousedown', dragStart);
        resizer.addEventListener('touchstart', dragStart, { passive: true });
      }, false);
    });
  });

  // Toggle source mode
  document.addEventListener('click', event => {
    const button = event.target.closest('button');

    if (button?.classList.contains('code-block__button--html')) {
      setFlavor('html');
    } else if (button?.classList.contains('code-block__button--react')) {
      setFlavor('react');
    } else {
      return;
    }

    // Update flavor buttons
    [...document.querySelectorAll('.code-block')].forEach(codeBlock => {
      codeBlock
        .querySelector('.code-block__button--html')
        ?.classList.toggle('code-block__button--selected', flavor === 'html');
      codeBlock
        .querySelector('.code-block__button--react')
        ?.classList.toggle('code-block__button--selected', flavor === 'react');
    });
  });

  // Expand and collapse code blocks
  document.addEventListener('click', event => {
    const toggle = event.target.closest('.code-block__toggle');
    if (toggle) {
      const codeBlock = event.target.closest('.code-block');
      codeBlock.classList.toggle('code-block--expanded');
      event.target.setAttribute('aria-expanded', codeBlock.classList.contains('code-block--expanded'));
    }
  });

  // Show pulse when copying
  document.addEventListener('click', event => {
    const button = event.target.closest('.docsify-copy-code-button');
    if (button) {
      button.classList.remove('copied');
      requestAnimationFrame(() => {
        button.addEventListener('animationend', () => button.classList.remove('copied'), { once: true });
        button.classList.add('copied');
      });
    }
  });

})();
