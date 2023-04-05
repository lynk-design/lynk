type AfterCollapseEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'after:collapse': AfterCollapseEvent;
  }
}

export default AfterCollapseEvent;
