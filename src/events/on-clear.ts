type OnClearEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:clear': OnClearEvent;
  }
}

export default OnClearEvent;
