"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/post/page",{

/***/ "(app-pages-browser)/./src/app/post/page.tsx":
/*!*******************************!*\
  !*** ./src/app/post/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"(app-pages-browser)/./src/app/post/api.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Page = ()=>{\n    _s();\n    const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.post);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_api__WEBPACK_IMPORTED_MODULE_2__.fetchDataAsync)());\n    }, [\n        dispatch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"posts\"\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/post/page.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            state.isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/post/page.tsx\",\n                lineNumber: 19,\n                columnNumber: 33\n            }, undefined),\n            !state.isLoading && state.error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Error:\",\n                    state.error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/post/page.tsx\",\n                lineNumber: 20,\n                columnNumber: 48\n            }, undefined) : null,\n            !state.isLoading && state.items.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: state.items.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: post.title\n                    }, post.id, false, {\n                        fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/post/page.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/post/page.tsx\",\n                lineNumber: 22,\n                columnNumber: 17\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/post/page.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"FWkvKHga9et6MC1eWo2CBPmZzW4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcG9zdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN5QztBQUNGO0FBQ2dCO0FBSXZELE1BQU1LLE9BQU87O0lBQ1QsTUFBTUMsUUFBUUYsd0RBQVdBLENBQUMsQ0FBQ0UsUUFBcUJBLE1BQU1DLElBQUk7SUFDMUQsTUFBTUMsV0FBV0wsd0RBQVdBO0lBRTVCRixnREFBU0EsQ0FBQztRQUNOTyxTQUFTTixvREFBY0E7SUFDM0IsR0FBRztRQUFDTTtLQUFTO0lBRWIscUJBQ0ksOERBQUNDOzswQkFDRyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNISixNQUFNSyxTQUFTLGtCQUFJLDhEQUFDRjswQkFBSTs7Ozs7O1lBQ3hCLENBQUNILE1BQU1LLFNBQVMsSUFBSUwsTUFBTU0sS0FBSyxpQkFBRyw4REFBQ0g7O29CQUFJO29CQUFPSCxNQUFNTSxLQUFLOzs7Ozs7NEJBQVU7WUFDbkUsQ0FBQ04sTUFBTUssU0FBUyxJQUFJTCxNQUFNTyxLQUFLLENBQUNDLE1BQU0saUJBQ25DLDhEQUFDQzswQkFDSVQsTUFBTU8sS0FBSyxDQUFDRyxHQUFHLENBQUMsQ0FBQ1QscUJBQ2QsOERBQUNVO2tDQUFrQlYsS0FBS1csS0FBSzt1QkFBcEJYLEtBQUtZLEVBQUU7Ozs7Ozs7Ozs0QkFHeEI7Ozs7Ozs7QUFHaEI7R0F0Qk1kOztRQUNZRCxvREFBV0E7UUFDUkQsb0RBQVdBOzs7S0FGMUJFO0FBd0JOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcG9zdC9wYWdlLnRzeD8yOWY4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmZXRjaERhdGFBc3luYyB9IGZyb20gJy4vYXBpJztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFwcERpc3BhdGNoLCBSb290U3RhdGUgfSBmcm9tICcuLi9zaW1wbGVTdG9yZSc7XG5pbXBvcnQgeyBpU3RhdGUgfSBmcm9tICcuL3Bvc3Quc2xpY2UnO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLnBvc3QpIGFzIGlTdGF0ZTtcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hEYXRhQXN5bmMoKSk7XG4gICAgfSwgW2Rpc3BhdGNoXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPnBvc3RzPC9oMj5cbiAgICAgICAgICAgIHtzdGF0ZS5pc0xvYWRpbmcgJiYgPGRpdj5sb2FkaW5nLi4uPC9kaXY+fVxuICAgICAgICAgICAgeyFzdGF0ZS5pc0xvYWRpbmcgJiYgc3RhdGUuZXJyb3IgPyA8ZGl2PkVycm9yOntzdGF0ZS5lcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgeyFzdGF0ZS5pc0xvYWRpbmcgJiYgc3RhdGUuaXRlbXMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3N0YXRlLml0ZW1zLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+e3Bvc3QudGl0bGV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGFBc3luYyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJQYWdlIiwic3RhdGUiLCJwb3N0IiwiZGlzcGF0Y2giLCJkaXYiLCJoMiIsImlzTG9hZGluZyIsImVycm9yIiwiaXRlbXMiLCJsZW5ndGgiLCJ1bCIsIm1hcCIsImxpIiwidGl0bGUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/post/page.tsx\n"));

/***/ })

});