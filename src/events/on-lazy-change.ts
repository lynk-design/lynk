type OnLazyChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:lazy-change': OnLazyChangeEvent;
  }
}

export default OnLazyChangeEvent;
