"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_admin_example_example_routes_ts"],{

/***/ 19918:
/*!************************************************************!*\
  !*** ./src/app/modules/admin/example/example.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleComponent": () => (/* binding */ ExampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 86679);



class ExampleComponent {
  /**
   * Constructor
   */
  constructor(_headerTextService, router) {
    this._headerTextService = _headerTextService;
    this.router = router;
    this._headerTextService.setTitulo(this.router);
  }
}
ExampleComponent.ɵfac = function ExampleComponent_Factory(t) {
  return new (t || ExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_0__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
ExampleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ExampleComponent,
  selectors: [["example"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 3,
  vars: 0,
  consts: [[1, "flex", "flex-col", "flex-auto", "min-w-0"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "h-400", "min-h-400", "max-h-400", "border-2", "border-dashed", "border-gray-300", "rounded-2xl"]],
  template: function ExampleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2
});


/***/ }),

/***/ 72386:
/*!*********************************************************!*\
  !*** ./src/app/modules/admin/example/example.routes.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_modules_admin_example_example_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/modules/admin/example/example.component */ 19918);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  path: '',
  component: app_modules_admin_example_example_component__WEBPACK_IMPORTED_MODULE_0__.ExampleComponent
}]);

/***/ })

}]);
//# sourceMappingURL=src_app_modules_admin_example_example_routes_ts.js.map