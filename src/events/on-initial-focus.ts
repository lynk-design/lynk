type OnInitialFocusEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:initial-focus': OnInitialFocusEvent;
  }
}

export default OnInitialFocusEvent;
