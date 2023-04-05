type OnCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:collapse': OnCollapseEvent;
  }
}

export default OnCollapseEvent;
