# LYNK

A living design system & web component library for building web applications with the Edgio Streaming design language.

The end-goal of LYNK is to be:

- Framework Agnostic with BEM fallback where it makes sense
- Fully customizable with CSS
- Dark theme & Light theme support
- Built with accessibility and localization in mind

---

### What are we using to build LYNK?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. The build is a custom script with bundling powered by [esbuild](https://esbuild.github.io/).

### Forking the Repo

Clone the repo locally and install dependencies.

```bash
git clone https://github.com/EDGIO/lynk-ui
cd lynk-ui
yarn
```

### Developing

Once you've cloned the repo, run the following command.

```bash
yarn start
```

This will spin up the LYNK dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

The documentation is powered by Docsify, which uses raw markdown files to generate pages. As such, no static files are built for the docs.

### Building

To generate a production build, run the following command.

```bash
yarn run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `l-tag-name` with the desired tag name.

```bash
yarn run create l-tag-name
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.
