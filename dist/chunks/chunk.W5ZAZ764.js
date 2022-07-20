import {
  component_styles_default
} from "./chunk.BBN5BSZB.js";
import {
  r
} from "./chunk.4DJQ63TK.js";

// src/components/responsive-media/responsive-media.styles.ts
var responsive_media_styles_default = r`
  ${component_styles_default}

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

export {
  responsive_media_styles_default
};
