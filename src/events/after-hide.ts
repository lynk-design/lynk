type AfterHideEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'after:hide': AfterHideEvent;
  }
}

export default AfterHideEvent;
