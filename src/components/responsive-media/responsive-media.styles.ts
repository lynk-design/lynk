import { css } from 'lit';
import componentStyles from '../../styles/component.styles';

export default css`
  ${componentStyles}

  :host {
    display: block;
  }

  .lynk-responsive-media {
    position: relative;
  }

  .lynk-responsive-media ::slotted(*) {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  .lynk-responsive-media--cover ::slotted(embed),
  .lynk-responsive-media--cover ::slotted(iframe),
  .lynk-responsive-media--cover ::slotted(img),
  .lynk-responsive-media--cover ::slotted(video) {
    object-fit: cover !important;
  }

  .lynk-responsive-media--contain ::slotted(embed),
  .lynk-responsive-media--contain ::slotted(iframe),
  .lynk-responsive-media--contain ::slotted(img),
  .lynk-responsive-media--contain ::slotted(video) {
    object-fit: contain !important;
  }
`;
