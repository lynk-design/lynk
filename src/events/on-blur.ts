type OnBlurEvent = CustomEvent<Record<PropertyKey, never>>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:blur': OnBlurEvent;
  }
}

export default OnBlurEvent;
