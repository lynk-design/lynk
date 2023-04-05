type OnEnterViewEvent = CustomEvent<{ entry: IntersectionObserverEntry }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:enter-view': OnEnterViewEvent;
  }
}

export default OnEnterViewEvent;
