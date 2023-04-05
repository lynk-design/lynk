type OnLoadEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:load': OnLoadEvent;
  }
}

export default OnLoadEvent;
