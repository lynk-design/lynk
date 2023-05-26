type OnExitViewEvent = CustomEvent<{ entry: IntersectionObserverEntry }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:exit-view': OnExitViewEvent;
  }
}

export default OnExitViewEvent;
