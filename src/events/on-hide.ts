type OnHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:hide': OnHideEvent;
  }
}

export default OnHideEvent;
