import { getOffset } from './offset';

const locks = new Set();
const visibilityRegex = new RegExp('^(visible|hidden)');

/** Returns the width of the document's scrollbar */
function getScrollbarWidth() {
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

/**
 * Prevents body scrolling. Keeps track of which elements requested a lock so multiple levels of locking are possible
 * without premature unlocking.
 */
export function lockBodyScrolling(lockingEl: HTMLElement) {
  locks.add(lockingEl);

  // When the first lock is created, set the scroll lock size to match the scrollbar's width to prevent content from
  // shifting. We only do this on the first lock because the scrollbar width will measure zero after overflow is hidden.
  if (!document.body.classList.contains('lynk-scroll-lock')) {
    const scrollbarWidth = getScrollbarWidth(); // must be measured before the `lynk-scroll-lock` class is applied
    document.body.classList.add('lynk-scroll-lock');
    document.body.style.setProperty('--lynk-scroll-lock-size', `${scrollbarWidth}px`);
  }
}

/**
 * Unlocks body scrolling. Scrolling will only be unlocked once all elements that requested a lock call this method.
 */
export function unlockBodyScrolling(lockingEl: HTMLElement) {
  locks.delete(lockingEl);

  if (locks.size === 0) {
    document.body.classList.remove('lynk-scroll-lock');
    document.body.style.removeProperty('--lynk-scrollbar-width');
  }
}

/** Scrolls an element into view of its container. If the element is already in view, nothing will happen. */
export function scrollIntoView(
  element: HTMLElement,
  container: HTMLElement,
  direction: 'horizontal' | 'vertical' | 'both' = 'vertical',
  behavior: 'smooth' | 'auto' = 'smooth'
) {
  const offset = getOffset(element, container);
  const offsetTop = offset.top + container.scrollTop;
  const offsetLeft = offset.left + container.scrollLeft;
  const minX = container.scrollLeft;
  const maxX = container.scrollLeft + container.offsetWidth;
  const minY = container.scrollTop;
  const maxY = container.scrollTop + container.offsetHeight;

  if (direction === 'horizontal' || direction === 'both') {
    if (offsetLeft < minX) {
      container.scrollTo({ left: offsetLeft, behavior });
    } else if (offsetLeft + element.clientWidth > maxX) {
      container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
    }
  }

  if (direction === 'vertical' || direction === 'both') {
    if (offsetTop < minY) {
      container.scrollTo({ top: offsetTop, behavior });
    } else if (offsetTop + element.clientHeight > maxY) {
      container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
    }
  }
}

/**
 * Gets the scrollable parent element of a given element
 * @param x: Optional. Whether to check if the element can scroll on the x axis. Default: true
 * @param y: Optional. Whether to check if the element can scroll on the y axis. Default: true
 */
export function getScrollParent(element: HTMLElement | null, x = true, y = true): HTMLElement | null {
  if (!element) {
    return null;
  }

  const computedStyle = window.getComputedStyle(element);

  if (x && !visibilityRegex.test(computedStyle.overflowX) && element.scrollWidth >= element.clientWidth) {
    return element;
  }

  if (y && !visibilityRegex.test(computedStyle.overflowY) && element.scrollHeight >= element.clientHeight) {
    return element;
  }

  return getScrollParent(element.parentElement, x, y) || document.body;
}
