import type LynkMenuItem from '../components/menu-item/menu-item';
import type LynkNavItem from '../components/nav-item/nav-item';

type OnSelectEvent = CustomEvent<{ item: LynkMenuItem | LynkNavItem }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'on:select': OnSelectEvent;
  }
}

export default OnSelectEvent;
