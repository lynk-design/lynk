type OnLazyLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:lazy-load': OnLazyLoadEvent;
  }
}

export default OnLazyLoadEvent;
