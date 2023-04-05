type OnTabShowEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:tab-show': OnTabShowEvent;
  }
}

export default OnTabShowEvent;
