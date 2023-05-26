type AfterShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'after:show': AfterShowEvent;
  }
}

export default AfterShowEvent;
