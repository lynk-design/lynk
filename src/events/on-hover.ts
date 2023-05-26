type OnHoverEvent = CustomEvent<{
  phase: 'start' | 'move' | 'end';
  value: number;
}>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:hover': OnHoverEvent;
  }
}

export default OnHoverEvent;
