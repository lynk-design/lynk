type OnRemoveEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:remove': OnRemoveEvent;
  }
}

export default OnRemoveEvent;
