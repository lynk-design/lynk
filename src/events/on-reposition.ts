type OnRepositionEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:reposition': OnRepositionEvent;
  }
}

export default OnRepositionEvent;
