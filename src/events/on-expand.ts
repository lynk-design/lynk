type OnExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:expand': OnExpandEvent;
  }
}

export default OnExpandEvent;
