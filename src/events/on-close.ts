type OnCloseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:close': OnCloseEvent;
  }
}

export default OnCloseEvent;
