export type OnCopyEvent = CustomEvent<{ value: string }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:copy': OnCopyEvent;
  }
}

export default OnCopyEvent;