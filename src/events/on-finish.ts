type OnFinishEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:finish': OnFinishEvent;
  }
}

export default OnFinishEvent;
