"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/user/user.slice.ts":
/*!************************************!*\
  !*** ./src/app/user/user.slice.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slice: function() { return /* binding */ slice; },\n/* harmony export */   useGetAllProductsQuery: function() { return /* binding */ useGetAllProductsQuery; },\n/* harmony export */   useGetProductQuery: function() { return /* binding */ useGetProductQuery; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.modern.mjs\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/query/rtk-query.modern.mjs\");\n\nconst slice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"user\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"https://jsonplaceholder.typicode.com/\"\n    }),\n    endpoints: (builder)=>({\n            getAllProducts: builder.query({\n                query: ()=>\"posts\"\n            }),\n            getProduct: builder.query({\n                query: (product)=>\"products/search?q=\".concat(product)\n            })\n        })\n});\nconst { useGetAllProductsQuery, useGetProductQuery } = productsApi;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlci91c2VyLnNsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlFO0FBRWxFLE1BQU1FLFFBQVFGLHVFQUFTQSxDQUFDO0lBQzlCRyxhQUFhO0lBQ2JDLFdBQVdILDRFQUFjQSxDQUFDO1FBQUVJLFNBQVM7SUFBd0M7SUFFN0VDLFdBQVcsQ0FBQ0MsVUFBYTtZQUN4QkMsZ0JBQWdCRCxRQUFRRSxLQUFLLENBQUM7Z0JBQzdCQSxPQUFPLElBQU07WUFDZDtZQUNBQyxZQUFZSCxRQUFRRSxLQUFLLENBQUM7Z0JBQ3pCQSxPQUFPLENBQUNFLFVBQVkscUJBQTZCLE9BQVJBO1lBQzFDO1FBQ0Q7QUFDRCxHQUFHO0FBRUksTUFBTSxFQUFFQyxzQkFBc0IsRUFBRUMsa0JBQWtCLEVBQUUsR0FBR0MsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3VzZXIvdXNlci5zbGljZS50cz82NDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0L3F1ZXJ5L3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHNsaWNlID0gY3JlYXRlQXBpKHtcblx0cmVkdWNlclBhdGg6ICd1c2VyJyxcblx0YmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7IGJhc2VVcmw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vJyB9KSxcblxuXHRlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuXHRcdGdldEFsbFByb2R1Y3RzOiBidWlsZGVyLnF1ZXJ5KHtcblx0XHRcdHF1ZXJ5OiAoKSA9PiAncG9zdHMnLFxuXHRcdH0pLFxuXHRcdGdldFByb2R1Y3Q6IGJ1aWxkZXIucXVlcnkoe1xuXHRcdFx0cXVlcnk6IChwcm9kdWN0KSA9PiBgcHJvZHVjdHMvc2VhcmNoP3E9JHtwcm9kdWN0fWAsXG5cdFx0fSksXG5cdH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHVzZUdldEFsbFByb2R1Y3RzUXVlcnksIHVzZUdldFByb2R1Y3RRdWVyeSB9ID0gcHJvZHVjdHNBcGk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJzbGljZSIsInJlZHVjZXJQYXRoIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRBbGxQcm9kdWN0cyIsInF1ZXJ5IiwiZ2V0UHJvZHVjdCIsInByb2R1Y3QiLCJ1c2VHZXRBbGxQcm9kdWN0c1F1ZXJ5IiwidXNlR2V0UHJvZHVjdFF1ZXJ5IiwicHJvZHVjdHNBcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/user/user.slice.ts\n"));

/***/ })

});