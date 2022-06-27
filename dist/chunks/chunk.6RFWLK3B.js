import {
  shared_default
} from "./chunk.ONHQXJBE.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/badge/_badge.scss
var badge_default = r`
:host {
  display: inline-flex;
}

.lynk-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--lynk-font-size-small);
  font-weight: var(--lynk-font-weight-semibold);
  letter-spacing: var(--lynk-letter-spacing-normal);
  line-height: 1;
  border-radius: var(--lynk-border-radius-small);
  border: solid 1px var(--lynk-color-neutral-0);
  white-space: nowrap;
  padding: 3px 6px;
  user-select: none;
  cursor: inherit;
}

/* Variant modifiers */
.lynk-badge--primary {
  background-color: var(--lynk-color-primary-600);
  color: var(--lynk-color-neutral-0);
}

.lynk-badge--success {
  background-color: var(--lynk-color-success-600);
  color: var(--lynk-color-neutral-0);
}

.lynk-badge--neutral {
  background-color: var(--lynk-color-neutral-600);
  color: var(--lynk-color-neutral-0);
}

.lynk-badge--warning {
  background-color: var(--lynk-color-warning-600);
  color: var(--lynk-color-neutral-0);
}

.lynk-badge--danger {
  background-color: var(--lynk-color-danger-600);
  color: var(--lynk-color-neutral-0);
}

/* Pill modifier */
.lynk-badge--pill {
  border-radius: var(--lynk-border-radius-pill);
}

/* Pulse modifier */
.lynk-badge--pulse {
  animation: pulse 1.5s infinite;
}

.lynk-badge--pulse.lynk-badge--primary {
  --pulse-color: var(--lynk-color-primary-600);
}

.lynk-badge--pulse.lynk-badge--success {
  --pulse-color: var(--lynk-color-success-600);
}

.lynk-badge--pulse.lynk-badge--neutral {
  --pulse-color: var(--lynk-color-neutral-600);
}

.lynk-badge--pulse.lynk-badge--warning {
  --pulse-color: var(--lynk-color-warning-600);
}

.lynk-badge--pulse.lynk-badge--danger {
  --pulse-color: var(--lynk-color-danger-600);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--pulse-color);
  }
  70% {
    box-shadow: 0 0 0 0.5rem transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}`;

// src/components/badge/badge.styles.ts
var badge_styles_default = r`
  ${shared_default}
  ${badge_default}
`;

export {
  badge_styles_default
};
