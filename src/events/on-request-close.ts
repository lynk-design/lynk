type OnRequestCloseEvent = CustomEvent<{ source: 'close-button' | 'keyboard' | 'overlay' }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:request-close': OnRequestCloseEvent;
  }
}

export default OnRequestCloseEvent;
