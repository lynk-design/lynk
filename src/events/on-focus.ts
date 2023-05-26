type OnFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:focus': OnFocusEvent;
  }
}

export default OnFocusEvent;
