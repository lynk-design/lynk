type OnResizeEvent = CustomEvent<{ entries: ResizeObserverEntry[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:resize': OnResizeEvent;
  }
}

export default OnResizeEvent;
