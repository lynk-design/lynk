type OnClickEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:click': OnClickEvent;
  }
}

export default OnClickEvent;