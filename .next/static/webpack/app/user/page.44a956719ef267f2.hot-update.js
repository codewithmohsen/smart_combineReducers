"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/user/page",{

/***/ "(app-pages-browser)/./src/app/user/page.tsx":
/*!*******************************!*\
  !*** ./src/app/user/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>state.user);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch(fetchDataAsync());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Users\"\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            state.isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                lineNumber: 17,\n                columnNumber: 33\n            }, undefined),\n            !state.isLoading && state.error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Error:\",\n                    state.error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                lineNumber: 18,\n                columnNumber: 48\n            }, undefined) : null,\n            !state.isLoading && state.items.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: state.items.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: user.name\n                    }, user.id, false, {\n                        fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"FWkvKHga9et6MC1eWo2CBPmZzW4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3lDO0FBQ2M7QUFHdkQsTUFBTUksT0FBaUI7O0lBQ25CLE1BQU1DLFFBQVFGLHdEQUFXQSxDQUFDLENBQUNFLFFBQXFCQSxNQUFNQyxJQUFJO0lBQzFELE1BQU1DLFdBQVdMLHdEQUFXQTtJQUU1QkQsZ0RBQVNBLENBQUM7UUFDTk0sU0FBU0M7SUFDYixHQUFHO1FBQUNEO0tBQVM7SUFFYixxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hMLE1BQU1NLFNBQVMsa0JBQUksOERBQUNGOzBCQUFJOzs7Ozs7WUFDeEIsQ0FBQ0osTUFBTU0sU0FBUyxJQUFJTixNQUFNTyxLQUFLLGlCQUFHLDhEQUFDSDs7b0JBQUk7b0JBQU9KLE1BQU1PLEtBQUs7Ozs7Ozs0QkFBVTtZQUNuRSxDQUFDUCxNQUFNTSxTQUFTLElBQUlOLE1BQU1RLEtBQUssQ0FBQ0MsTUFBTSxpQkFDbkMsOERBQUNDOzBCQUNJVixNQUFNUSxLQUFLLENBQUNHLEdBQUcsQ0FBQyxDQUFDVixxQkFDZCw4REFBQ1c7a0NBQWtCWCxLQUFLWSxJQUFJO3VCQUFuQlosS0FBS2EsRUFBRTs7Ozs7Ozs7OzRCQUd4Qjs7Ozs7OztBQUdoQjtHQXRCTWY7O1FBQ1lELG9EQUFXQTtRQUNSRCxvREFBV0E7OztLQUYxQkU7QUF3Qk4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91c2VyL3BhZ2UudHN4PzRkNDQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tICcuLi9zaW1wbGVTdG9yZSc7XG5cbmNvbnN0IFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnVzZXIpIGFzIGlTdGF0ZTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhQXN5bmMoKSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlVzZXJzPC9oMj5cbiAgICAgICAgICAgIHtzdGF0ZS5pc0xvYWRpbmcgJiYgPGRpdj5sb2FkaW5nLi4uPC9kaXY+fVxuICAgICAgICAgICAgeyFzdGF0ZS5pc0xvYWRpbmcgJiYgc3RhdGUuZXJyb3IgPyA8ZGl2PkVycm9yOntzdGF0ZS5lcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgeyFzdGF0ZS5pc0xvYWRpbmcgJiYgc3RhdGUuaXRlbXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLml0ZW1zLm1hcCgodXNlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0+e3VzZXIubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJQYWdlIiwic3RhdGUiLCJ1c2VyIiwiZGlzcGF0Y2giLCJmZXRjaERhdGFBc3luYyIsImRpdiIsImgyIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJpdGVtcyIsImxlbmd0aCIsInVsIiwibWFwIiwibGkiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/user/page.tsx\n"));

/***/ })

});