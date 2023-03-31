"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 661:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(735);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(162);
;// CONCATENATED MODULE: ./src/styles/theme/light-theme.ts
const themeLight = {
    type: "light"
};
/* harmony default export */ const light_theme = (themeLight);

;// CONCATENATED MODULE: ./src/styles/theme/dark-theme.ts
const themeDark = {
    type: "dark"
};
/* harmony default export */ const dark_theme = (themeDark);

;// CONCATENATED MODULE: external "recoil"
const external_recoil_namespaceObject = require("recoil");
;// CONCATENATED MODULE: ./src/pages/_app.tsx
// import '@/styles/globals.css'






const dark = (0,react_.createTheme)(dark_theme);
const light = (0,react_.createTheme)(light_theme);
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_namespaceObject.RecoilRoot, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_next_themes_.ThemeProvider, {
            defaultTheme: "system",
            attribute: "class",
            value: {
                light: light.className,
                dark: dark.className
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.NextUIProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}


/***/ }),

/***/ 735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(661));
module.exports = __webpack_exports__;

})();