type OnMutationEvent = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:mutation': OnMutationEvent;
  }
}

export default OnMutationEvent;
