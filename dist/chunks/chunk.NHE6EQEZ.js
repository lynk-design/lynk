import {
  responsive_media_styles_default
} from "./chunk.LQANPCUY.js";
import {
  o
} from "./chunk.AY3TXN3C.js";
import {
  e,
  n
} from "./chunk.ML4GKG4X.js";
import {
  $,
  s
} from "./chunk.4DJQ63TK.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/responsive-media/responsive-media.ts
var LynkResponsiveMedia = class extends s {
  constructor() {
    super(...arguments);
    this.aspectRatio = "16:9";
    this.fit = "cover";
  }
  render() {
    const split = this.aspectRatio.split(":");
    const x = parseFloat(split[0]);
    const y = parseFloat(split[1]);
    const paddingBottom = !isNaN(x) && !isNaN(y) && x > 0 && y > 0 ? `${y / x * 100}%` : "0";
    return $`
      <div
        class=${o({
      "lynk-responsive-media": true,
      "lynk-responsive-media--cover": this.fit === "cover",
      "lynk-responsive-media--contain": this.fit === "contain"
    })}
        style="padding-bottom: ${paddingBottom}"
      >
        <slot></slot>
      </div>
    `;
  }
};
LynkResponsiveMedia.styles = responsive_media_styles_default;
__decorateClass([
  e({ attribute: "aspect-ratio" })
], LynkResponsiveMedia.prototype, "aspectRatio", 2);
__decorateClass([
  e()
], LynkResponsiveMedia.prototype, "fit", 2);
LynkResponsiveMedia = __decorateClass([
  n("lynk-responsive-media")
], LynkResponsiveMedia);

export {
  LynkResponsiveMedia
};
