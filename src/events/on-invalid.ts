type OnInvalidEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:invalid': OnInvalidEvent;
  }
}

export default OnInvalidEvent;
