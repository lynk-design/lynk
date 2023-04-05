type OnChangeEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:change': OnChangeEvent;
  }
}

export default OnChangeEvent;
