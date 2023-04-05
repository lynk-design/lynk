type OnCancelEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:cancel': OnCancelEvent;
  }
}

export default OnCancelEvent;
