import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: contents;
    --spacing: var(--lynk-spacing-small);
    --divider: 1px solid var(--lynk-color-neutral-200);
  }

  .accordion {
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
  }

  .accordion--flush{
    gap: 0;
  }

  .accordion--flush::slotted(lynk-panel),
  .accordion--square::slotted(lynk-panel) {
    --border-radius: 0;
  }

  .accordion--flush::slotted(lynk-panel:first-child) {
    --border-radius: var(--lynk-border-radius-medium) var(--lynk-border-radius-medium) 0 0;
  }

  .accordion--flush::slotted(lynk-panel:last-child) {
    --border-radius: 0 0 var(--lynk-border-radius-medium) var(--lynk-border-radius-medium);
  }

  .accordion--flush::slotted(lynk-panel) {
    border-top: var(--divider); 
  }
  .accordion--flush::slotted(lynk-panel:first-child) {
    border-top: none;
  }

  .accordion--compact {
    gap: var(--lynk-spacing-x-small);
  }

  .accordion--comfy {
    gap: var(--lynk-spacing-medium);
  }

  .accordion--rounded::slotted(lynk-panel) {
    --border-radius: var(--lynk-border-radius-large);
  }
`;
