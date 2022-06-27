// src/utilities/base-path.ts
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath() {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName("script")];
    const configScript = scripts.find((script) => script.hasAttribute("data-lynk"));
    if (configScript) {
      setBasePath(configScript.getAttribute("data-lynk"));
    } else {
      const fallbackScript = scripts.find((s) => /lynk(\.min)?\.js($|\?)/.test(s.src));
      let path = "";
      if (fallbackScript) {
        path = fallbackScript.getAttribute("src");
      }
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }
  }
  return basePath.replace(/\/$/, "");
}

export {
  setBasePath,
  getBasePath
};
