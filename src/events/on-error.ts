type OnErrorEvent = CustomEvent<{ status?: number }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:error': OnErrorEvent;
  }
}

export default OnErrorEvent;
