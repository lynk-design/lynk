type OnTabHideEvent = CustomEvent<{ name: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:tab-hide': OnTabHideEvent;
  }
}

export default OnTabHideEvent;
