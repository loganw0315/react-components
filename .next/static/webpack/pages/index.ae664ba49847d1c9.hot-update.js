"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpeakerData */ \"./SpeakerData.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar IndexPage = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"container speakers-list\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n            lineNumber: 5,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"row\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: _SpeakerData__WEBPACK_IMPORTED_MODULE_1__.data.map(function(speaker) {\n                var id = speaker.id, bio = speaker.bio, first = speaker.first, last = speaker.last, favorite = speaker.favorite, twitterHandle = speaker.twitterHandle, company = speaker.company, sessions = speaker.sessions;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    className: \"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"card card-height p-4 mt-4\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: \"speaker-img d-flex flex-row justify-content-center align-items-center h-300\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                        lineNumber: 22,\n                                        columnNumber: 17\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        className: \"contain-fit\",\n                                        src: \"/images/speaker-\".concat(id, \".jpg\"),\n                                        width: \"300\",\n                                        alt: \"\".concat(first, \" \").concat(last),\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                            lineNumber: 23,\n                                            columnNumber: 19\n                                        },\n                                        __self: this\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"speaker-info\",\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: \"d-flex justify-content-between mb-3\",\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                                lineNumber: 31,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                                                className: \"text-truncate w-200\",\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                                    lineNumber: 32,\n                                                    columnNumber: 21\n                                                },\n                                                __self: this,\n                                                children: [\n                                                    first,\n                                                    \" \",\n                                                    last\n                                                ]\n                                            })\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            __source: {\n                                                fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 19\n                                            },\n                                            __self: this,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 21\n                                                },\n                                                __self: this,\n                                                children: [\n                                                    bio,\n                                                    \" \",\n                                                    company,\n                                                    \" \",\n                                                    twitterHandle,\n                                                    \" \",\n                                                    favorite\n                                                ]\n                                            })\n                                        })\n                                    ]\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"sessionBox card h-250\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                lineNumber: 43,\n                                columnNumber: 15\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Session, {\n                                title: sessions[0].title,\n                                room: sessions[0].room.name,\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\logan\\\\Desktop\\\\BrightPaths\\\\Pluralsight-Exercises\\\\react-components\\\\pages\\\\index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 17\n                                },\n                                __self: this\n                            })\n                        })\n                    ]\n                }, id));\n            })\n        })\n    }));\n};\n_c = IndexPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7O0FBRXJDLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsR0FBRixDQUFDO0lBQ3ZCLE1BQU0sc0VBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQXlCOzs7Ozs7O3VGQUNyQ0QsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBSzs7Ozs7OztzQkFDakJILGtEQUFRLENBQUMsUUFBUSxDQUFFSyxPQUFPLEVBQUUsQ0FBQztnQkFDNUIsR0FBSyxDQUNIQyxFQUFFLEdBUUFELE9BQU8sQ0FSVEMsRUFBRSxFQUNGQyxHQUFHLEdBT0RGLE9BQU8sQ0FQVEUsR0FBRyxFQUNIQyxLQUFLLEdBTUhILE9BQU8sQ0FOVEcsS0FBSyxFQUNMQyxJQUFJLEdBS0ZKLE9BQU8sQ0FMVEksSUFBSSxFQUNKQyxRQUFRLEdBSU5MLE9BQU8sQ0FKVEssUUFBUSxFQUNSQyxhQUFhLEdBR1hOLE9BQU8sQ0FIVE0sYUFBYSxFQUNiQyxPQUFPLEdBRUxQLE9BQU8sQ0FGVE8sT0FBTyxFQUNQQyxRQUFRLEdBQ05SLE9BQU8sQ0FEVFEsUUFBUTtnQkFHVixNQUFNLHVFQUNIWCxDQUFHO29CQUFVQyxTQUFTLEVBQUMsQ0FBMkQ7Ozs7Ozs7OzhGQUNoRkQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQTJCOzs7Ozs7OztxR0FDdkNELENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUE2RTs7Ozs7OzttSEFDekZXLENBQUc7d0NBQ0ZYLFNBQVMsRUFBQyxDQUFhO3dDQUN2QlksR0FBRyxFQUFHLENBQWdCLGtCQUFLLE1BQUksQ0FBUFQsRUFBRSxFQUFDLENBQUk7d0NBQy9CVSxLQUFLLEVBQUMsQ0FBSzt3Q0FDWEMsR0FBRyxFQUFHLEdBQVdSLE1BQUksQ0FBYkQsS0FBSyxFQUFDLENBQUMsSUFBTyxPQUFMQyxJQUFJOzs7Ozs7Ozs7c0dBR3hCUCxDQUFHO29DQUFDQyxTQUFTLEVBQUMsQ0FBYzs7Ozs7Ozs7NkdBQzFCRCxDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBcUM7Ozs7Ozs7NEhBQ2pEZSxDQUFFO2dEQUFDZixTQUFTLEVBQUMsQ0FBcUI7Ozs7Ozs7O29EQUNoQ0ssS0FBSztvREFBQyxDQUFDO29EQUFDQyxJQUFJOzs7OzZHQUdoQlAsQ0FBRzs7Ozs7Ozs0SEFDRGlCLENBQUM7Ozs7Ozs7O29EQUNDWixHQUFHO29EQUFDLENBQUM7b0RBQUNLLE9BQU87b0RBQUMsQ0FBQztvREFBQ0QsYUFBYTtvREFBQyxDQUFDO29EQUFDRCxRQUFROzs7Ozs7Ozs2RkFLaERSLENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUF1Qjs7Ozs7OzsyR0FDbkNpQixPQUFPO2dDQUFDQyxLQUFLLEVBQUVSLFFBQVEsQ0FBQyxDQUFDLEVBQUVRLEtBQUs7Z0NBQUVDLElBQUksRUFBRVQsUUFBUSxDQUFDLENBQUMsRUFBRVMsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7Ozs7O21CQXhCeERqQixFQUFFO1lBNkJoQixDQUFDOzs7QUFJVCxDQUFDO0tBbERLTCxTQUFTO0FBb0RmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uL1NwZWFrZXJEYXRhXCI7XHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICB7ZGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGJpbyxcclxuICAgICAgICAgICAgZmlyc3QsXHJcbiAgICAgICAgICAgIGxhc3QsXHJcbiAgICAgICAgICAgIGZhdm9yaXRlLFxyXG4gICAgICAgICAgICB0d2l0dGVySGFuZGxlLFxyXG4gICAgICAgICAgICBjb21wYW55LFxyXG4gICAgICAgICAgICBzZXNzaW9ucyxcclxuICAgICAgICAgIH0gPSBzcGVha2VyO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpZH0gY2xhc3NOYW1lPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wtc20tMTIgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwZWFrZXItaW1nIGQtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBoLTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvc3BlYWtlci0ke2lkfS5qcGdgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Zmlyc3R9IHtsYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2Jpb30ge2NvbXBhbnl9IHt0d2l0dGVySGFuZGxlfSB7ZmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Vzc2lvbkJveCBjYXJkIGgtMjUwXCI+XHJcbiAgICAgICAgICAgICAgICA8U2Vzc2lvbiB0aXRsZT17c2Vzc2lvbnNbMF0udGl0bGV9IHJvb209e3Nlc3Npb25zWzBdLnJvb20ubmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTsiXSwibmFtZXMiOlsiZGF0YSIsIkluZGV4UGFnZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInNwZWFrZXIiLCJpZCIsImJpbyIsImZpcnN0IiwibGFzdCIsImZhdm9yaXRlIiwidHdpdHRlckhhbmRsZSIsImNvbXBhbnkiLCJzZXNzaW9ucyIsImltZyIsInNyYyIsIndpZHRoIiwiYWx0IiwiaDMiLCJwIiwiU2Vzc2lvbiIsInRpdGxlIiwicm9vbSIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});