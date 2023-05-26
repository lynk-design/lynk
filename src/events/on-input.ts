type OnInputEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:input': OnInputEvent;
  }
}

export default OnInputEvent;
