type OnStartEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:start': OnStartEvent;
  }
}

export default OnStartEvent;
