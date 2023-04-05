type AfterExpandEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'after:expand': AfterExpandEvent;
  }
}

export default AfterExpandEvent;
