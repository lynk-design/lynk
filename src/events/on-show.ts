type OnShowEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:show': OnShowEvent;
  }
}

export default OnShowEvent;
