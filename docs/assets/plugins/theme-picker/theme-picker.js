(() => {
  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(() => {
      function getTheme() {
        return localStorage.getItem('theme') || 'auto';
      }

      function isDark() {
        if (theme === 'auto') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return theme === 'dark';
      }

      function setTheme(newTheme) {
        const noTransitions = Object.assign(document.createElement('style'), {
          textContent: '* { transition: none !important; }'
        });

        theme = newTheme;
        localStorage.setItem('theme', theme);

        // Update the UI
        [...menu.querySelectorAll('lynk-menu-item')].map(item => (item.checked = item.getAttribute('value') === theme));
        menuIcon.name = isDark() ? 'moon' : 'sun';

        // Toggle the dark mode class without transitions
        document.body.appendChild(noTransitions);
        requestAnimationFrame(() => {
          document.documentElement.classList.toggle('lynk-theme-dark', isDark());
          requestAnimationFrame(() => document.body.removeChild(noTransitions));
        });
      }

      let theme = getTheme();

      // Generate the theme picker dropdown
      const dropdown = document.createElement('lynk-dropdown');
      dropdown.classList.add('theme-picker');
      dropdown.style.display = 'none';
      dropdown.innerHTML = `
        <lynk-button size="small" pill slot="trigger" caret>
          <lynk-icon name="sun" label="Select Theme"></lynk-icon>
        </lynk-button>
        <lynk-menu>
          <lynk-menu-label>Toggle <kbd>\\</kbd></lynk-menu-label>
          <lynk-menu-item value="light">Light</lynk-menu-item>
          <lynk-menu-item value="dark">Dark</lynk-menu-item>
          <lynk-divider></lynk-divider>
          <lynk-menu-item value="auto">Auto</lynk-menu-item>
        </lynk-menu>
      `;
      document.querySelector('.sidebar-toggle').insertAdjacentElement('afterend', dropdown);

      // Listen for selections
      const menu = dropdown.querySelector('lynk-menu');
      const menuIcon = dropdown.querySelector('lynk-icon');
      menu.addEventListener('on:select', event => setTheme(event.detail.item.value));

      // Update the theme when the preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => setTheme(theme));

      // Toggle themes when pressing backslash
      document.addEventListener('keydown', event => {
        if (
          event.key === '\\' &&
          !event.composedPath().some(el => ['input', 'textarea'].includes(el?.tagName?.toLowerCase()))
        ) {
          event.preventDefault();

          setTheme(isDark() ? 'light' : 'dark');
        }
      });

      // Set the initial theme and sync the UI
      setTheme(theme);
    });
  });
})();
