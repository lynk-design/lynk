type OnEnterEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:enter': OnEnterEvent;
  }
}

export default OnEnterEvent;
