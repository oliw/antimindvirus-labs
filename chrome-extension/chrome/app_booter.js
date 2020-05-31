document.addEventListener("DOMContentLoaded", function () {
  require("chrome-extension/app")["default"].create({
    rootElement: "#chrome-app",
  });
});
