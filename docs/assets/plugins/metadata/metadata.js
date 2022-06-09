(() => {
  const isDev = location.hostname === 'localhost';
  const isNext = location.hostname === 'next.shoelace.style';
  const customElements = fetch('/dist/custom-elements.json')
    .then(res => res.json())
    .catch(err => console.error(err));

  function createPropsTable(props) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Reflects</th>
          <th>Type</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        ${props
          .map(prop => {
            const hasAttribute = !!prop.attribute;
            const isAttributeDifferent = prop.attribute !== prop.name;
            let attributeInfo = '';

            if (!hasAttribute) {
              attributeInfo = `<br><small>(property only)</small>`;
            } else if (isAttributeDifferent) {
              attributeInfo = `
                <br>
                <l-tooltip content="This attribute is different from its property">
                  <small>
                    <code class="nowrap">
                      ${escapeHtml(prop.attribute)}
                    </code>
                  </small>
                </l-tooltip>`;
            }

            return `
              <tr>
                <td>
                  <code class="nowrap">${escapeHtml(prop.name)}</code>
                  ${attributeInfo}
                </td>
                <td>
                  ${escapeHtml(prop.description)}
                </td>
                <td style="text-align: center;">${
                  prop.reflects ? '<l-icon label="yes" name="check"></l-icon>' : ''
                }</td>
                <td>${prop.type?.text ? `<code>${escapeHtml(prop.type?.text || '')}</code>` : '-'}</td>
                <td>${prop.default ? `<code>${escapeHtml(prop.default)}</code>` : '-'}</td>
              </tr>
            `;
          })
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createEventsTable(events) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th data-flavor="html">Name</th>
          <th data-flavor="react">React Event</th>
          <th>Description</th>
          <th>Event Detail</th>
        </tr>
      </thead>
      <tbody>
        ${events
          .map(
            event => `
              <tr>
                <td data-flavor="html"><code class="nowrap">${escapeHtml(event.name)}</code></td>
                <td data-flavor="react"><code class="nowrap">${escapeHtml(event.reactName)}</code></td>
                <td>${escapeHtml(event.description)}</td>
                <td>${event.type?.text ? `<code>${escapeHtml(event.type?.text)}` : '-'}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createMethodsTable(methods) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody>
        ${methods
          .map(
            method => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(method.name)}</code></td>
                <td>${escapeHtml(method.description)}</td>
                <td>
                  ${
                    method.parameters?.length
                      ? `
                        <code>${escapeHtml(
                          method.parameters.map(param => `${param.name}: ${param.type.text}`).join(', ')
                        )}</code>
                      `
                      : '-'
                  }
                </td>
              </tr>
           `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createSlotsTable(slots) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${slots
          .map(
            slot => `
              <tr>
                <td class="nowrap">${slot.name ? `<code>${escapeHtml(slot.name)}</code>` : '(default)'}</td>
                <td>${escapeHtml(slot.description)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createCustomPropertiesTable(styles) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        ${styles
          .map(
            style => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(style.name)}</code></td>
                <td>${escapeHtml(style.description)}</td>
                <td>${style.default ? `<code>${escapeHtml(style.default)}</code>` : ''}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createPartsTable(parts) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${parts
          .map(
            part => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(part.name)}</code></td>
                <td>${escapeHtml(part.description)}</td>
              </tr>
           `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createAnimationsTable(animations) {
    const table = document.createElement('table');
    table.classList.add('metadata-table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${animations
          .map(
            animation => `
              <tr>
                <td class="nowrap"><code>${escapeHtml(animation.name)}</code></td>
                <td>${escapeHtml(animation.description)}</td>
              </tr>
            `
          )
          .join('')}
      </tbody>
    `;

    return table.outerHTML;
  }

  function createDependenciesList(targetComponent, allComponents) {
    const ul = document.createElement('ul');
    const dependencies = [];

    // Recursively fetch sub-dependencies
    function getDependencies(tag) {
      const component = allComponents.find(c => c.tagName === tag);
      if (!component || !Array.isArray(component.dependencies)) {
        return;
      }

      component.dependencies?.forEach(dependentTag => {
        if (!dependencies.includes(dependentTag)) {
          dependencies.push(dependentTag);
        }
        getDependencies(dependentTag);
      });
    }

    getDependencies(targetComponent);
    dependencies.sort().forEach(tag => {
      const li = document.createElement('li');
      li.innerHTML = `<code>&lt;${tag}&gt;</code>`;
      ul.appendChild(li);
    });

    return ul.outerHTML;
  }

  function escapeHtml(html) {
    if (!html) {
      return '';
    }
    return html
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;')
      .replace(/`(.*?)`/g, '<code>$1</code>');
  }

  function getAllComponents(metadata) {
    const allComponents = [];
    metadata.modules?.forEach(module => {
      module.declarations?.forEach(declaration => {
        if (declaration.customElement) {
          // Generate the dist path based on the src path and attach it to the component
          declaration.path = module.path.replace(/^src\//, 'dist/').replace(/\.ts$/, '.js');

          allComponents.push(declaration);
        }
      });
    });

    return allComponents;
  }

  function getComponent(metadata, tagName) {
    return getAllComponents(metadata).find(component => component.tagName === tagName);
  }

  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(async () => {
      const metadata = await customElements;
      const target = document.querySelector('.app-name');

      // Add version
      const version = document.createElement('div');
      version.classList.add('sidebar-version');
      version.textContent = isDev ? 'Dev' : isNext ? 'Next' : metadata.package.version;
      target.appendChild(version);

      // Store version for reuse
      sessionStorage.setItem('l-version', metadata.package.version);

    });

    hook.beforeEach(async (content, next) => {
      const metadata = await customElements;

      // Replace %VERSION% placeholders
      content = content.replace(/%VERSION%/g, metadata.package.version);

      // Handle [component-header] tags
      content = content.replace(/\[component-header:([a-z-]+)\]/g, (match, tag) => {
        const component = getComponent(metadata, tag);
        let result = '';

        if (!component) {
          console.error(`Component not found in metadata: ${tag}`);
          return next(content);
        }

        let badgeType = 'neutral';
        if (component.status === 'stable') {
          badgeType = 'primary';
        }
        if (component.status === 'experimental') {
          badgeType = 'warning';
        }
        if (component.status === 'planned') {
          badgeType = 'neutral';
        }
        if (component.status === 'deprecated') {
          badgeType = 'danger';
        }

        result += `
          <div class="component-header">
            <div class="component-header__tag">
              <code>&lt;${component.tagName}&gt; | ${component.name}</code>
            </div>

            <div class="component-header__info">
              <l-badge variant="neutral" pill>
                Since ${component.since || '?'}
              </l-badge>

              <l-badge variant="${badgeType}" pill style="text-transform: capitalize;">
                ${component.status}
              </l-badge>
            </div>
          </div>
        `;

        return result.replace(/^ +| +$/gm, '');
      });

      // Handle [component-metadata] tags
      content = content.replace(/\[component-metadata:([a-z-]+)\]/g, (match, tag) => {
        const component = getComponent(metadata, tag);
        let result = '';

        if (!component) {
          console.error(`Component not found in metadata: ${tag}`);
          return next(content);
        }

        // Remove members that are private or don't have a description
        const members = component.members?.filter(member => member.description && member.privacy !== 'private');
        const methods = members?.filter(prop => prop.kind === 'method' && prop.privacy !== 'private');
        const props = members?.filter(prop => {
          // Look for a corresponding attribute
          const attribute = component.attributes?.find(attr => attr.fieldName === prop.name);
          if (attribute) {
            prop.attribute = attribute.name || attribute.fieldName;
          }

          return prop.kind === 'field' && prop.privacy !== 'private';
        });

        if (props?.length) {
          result += `
            ## Properties
            ${createPropsTable(props)}

            _Learn more about [properties and attributes](/getting-started/usage#properties)._
          `;
        }

        if (component.events?.length) {
          result += `
            ## Events
            ${createEventsTable(component.events)}

            _Learn more about [listening to events](/getting-started/usage#events)._
          `;
        }

        if (methods?.length) {
          result += `
            ## Methods

            ${createMethodsTable(methods)}

            _Learn more about [calling methods](/getting-started/usage#methods)._
          `;
        }

        if (component.slots?.length) {
          result += `
            ## Slots
            ${createSlotsTable(component.slots)}

            _Learn more about [using slots](/getting-started/usage#slots)._
          `;
        }

        if (component.cssProperties?.length) {
          result += `
            ## CSS Custom Properties
            ${createCustomPropertiesTable(component.cssProperties)}

            _Learn more about [customizing CSS Custom Properties](/getting-started/customizing#custom-properties)._
          `;
        }

        if (component.cssParts?.length) {
          result += `
            ## CSS Parts
            ${createPartsTable(component.cssParts)}

            _Learn more about [customizing CSS Parts](/getting-started/customizing#component-parts)._
          `;
        }

        if (component.animations?.length) {
          result += `
            ## Animations
            ${createAnimationsTable(component.animations)}

            _Learn more about [customizing animations](/getting-started/customizing#animations)._
          `;
        }

        if (component.dependencies?.length) {
          result += `
            ## Dependencies

            This component imports the following dependencies.

            ${createDependenciesList(component.tagName, getAllComponents(metadata))}
          `;
        }

        // Strip whitespace so markdown doesn't process things as code blocks
        return result.replace(/^ +| +$/gm, '');
      });

      next(content);
    });

    // Wrap tables so we can scroll them horizontally when needed
    hook.doneEach(() => {
      const content = document.querySelector('.content');
      const tables = [...content.querySelectorAll('table')];

      tables.forEach(table => {
        table.outerHTML = `
          <div class="table-wrapper">
            ${table.outerHTML}
          </div>
        `;
      });
    });
  });
})();
