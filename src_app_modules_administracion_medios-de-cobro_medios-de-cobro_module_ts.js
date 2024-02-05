"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_administracion_medios-de-cobro_medios-de-cobro_module_ts"],{

/***/ 31515:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/components/filter-menu/filter-menu.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterMenuComponent: () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/animations */ 94748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
var _class;










class FilterMenuComponent {
  constructor(data, menuService) {
    this.data = data;
    this.menuService = menuService;
  }
  ngOnInit() {
    /**
    * Formulario de filtros
    */
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      lleva_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      lleva_vencimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      lleva_fecha_emision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      lleva_fecha_cobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      duplica_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      lleva_banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('')
    });
    this.formFilters.patchValue(this.data.filter);
  }
  resetFilters() {
    this.formFilters.reset({
      lleva_numero: -1,
      lleva_vencimiento: -1,
      lleva_fecha_emision: -1,
      lleva_fecha_cobro: -1,
      duplica_numero: -1,
      lleva_banco: -1,
      activo: -1
    });
  }
  onCloseMenu(data = null) {
    this.menuService.close(data);
  }
}
_class = FilterMenuComponent;
_class.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-filter-menu-medios-de-cobro"]],
  decls: 89,
  vars: 23,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-bold", "text-gray-500", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded", "min-w-64", "mt-2"], ["formControlName", "lleva_numero"], [3, "value"], ["formControlName", "lleva_vencimiento"], ["formControlName", "lleva_fecha_emision"], ["formControlName", "lleva_fecha_cobro"], ["formControlName", "duplica_numero"], ["formControlName", "lleva_banco"], ["formControlName", "activo"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-stroked-button", "", "color", "primary", 1, "w-full", "rounded-none", "md:w-28", "md:rounded-3xl", "hidden", "md:block", 3, "click"], [1, "text-gray-700", "font-bold"], ["mat-raised-button", "", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"]],
  template: function FilterMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Filtros");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_5_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_8_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 6)(12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Lleva n\u00FAmero");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-select", 9)(16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Lleva vencimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-select", 11)(26, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Fecha de emision");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 8)(35, "mat-select", 12)(36, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Fecha de cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-form-field", 8)(45, "mat-select", 13)(46, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Duplica n\u00FAmero");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-form-field", 8)(55, "mat-select", 14)(56, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Lleva banco");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-form-field", 8)(65, "mat-select", 15)(66, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "mat-form-field", 8)(75, "mat-select", 16)(76, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 17)(83, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_83_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_86_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_0__.fuseAnimations
  }
});


/***/ }),

/***/ 17299:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/components/medios-de-cobro.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediosDeCobroComponent: () => (/* binding */ MediosDeCobroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 53317);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 88859);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 77055);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 31515);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/medios-de-cobro.service */ 78048);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/common/search/search.service */ 70363);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 31123);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
var _class;





















class MediosDeCobroComponent {
  constructor(_mediosDeCobroService, _searchService, _menuService, confirm, alert, dialogo, router, _headerTextService) {
    this._mediosDeCobroService = _mediosDeCobroService;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
    this.headers = ['Descripción', 'Descuento / Recargo', 'Lleva Número', 'Lleva Vencimiento', 'Fecha de emision', 'Fecha de cobro', 'Duplica número', 'Lleva banco', 'Activo', 'Fondo'];
    this.column_params = ['descripcion', 'porcentaje', 'lleva_numero', 'lleva_vencimiento', 'lleva_fecha_emision', 'lleva_fecha_cobro', 'duplica_numero', 'lleva_banco', 'activo', 'fondo', 'acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['descripcion'];
    this.filter = {
      lleva_numero: -1,
      lleva_vencimiento: -1,
      lleva_fecha_emision: -1,
      lleva_fecha_cobro: -1,
      duplica_numero: -1,
      lleva_banco: -1,
      activo: -1
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.administracion.view_ven_pago_tipos + '?';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('');
    this._headerTextService.setTitulo(this.router);
    /**
    * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
    */
    this.funcionesObjeto = [{
      icono: 'edit',
      nombre_boton: "Editar",
      functionName: 'editar'
      //functionParams: 'id' // vacio o parametros, se manda desde el hijo el $event.data.[param]
    }, {
      icono: 'delete',
      nombre_boton: "Eliminar",
      functionName: 'eliminar'
    }];
  }
  ngOnInit() {
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()).subscribe(value => {
      this.filtroBusqueda = value;
      this.tabla.filters(this.filtroBusqueda);
    });
    this.FilterEventSub$ = this._searchService.getFilterEvent().subscribe(event => {
      this.onFilterMenu(this._searchService.getFilterOrigin());
    });
  }
  /**
  * Esta funcion se encarga de levantar los datos que se van a filtrar en el componente general del filtro
  * @param origin
  */
  onFilterMenu(origin) {
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter?.activo != -1 ? "&filter[activo]=" + this.filter.activo : '';
          this.extraParams += this.filter?.lleva_banco != -1 ? "&filter[lleva_banco]=" + this.filter.lleva_banco : '';
          this.extraParams += this.filter?.lleva_numero != -1 ? "&filter[lleva_numero]=" + this.filter.lleva_numero : '';
          this.extraParams += this.filter?.lleva_vencimiento != -1 ? "&filter[lleva_vencimiento]=" + this.filter.lleva_vencimiento : '';
          this.extraParams += this.filter?.lleva_fecha_cobro != -1 ? "&filter[lleva_fecha_cobro]=" + this.filter.lleva_fecha_cobro : '';
          this.extraParams += this.filter?.lleva_fecha_emision != -1 ? "&filter[lleva_fecha_emision]=" + this.filter.lleva_fecha_emision : '';
          this.extraParams += this.filter?.duplica_numero != -1 ? "&filter[duplica_numero]=" + this.filter.duplica_numero : '';
          this.tabla.filters(this.filtroBusqueda);
          // this._searchService.getSearchInput().setValue(this._tabsServices.getFiltroBuscadorPedido());
        }
      }
    });
  }
  /**
  * Esta es la funcion que se encarga de la columna acciones dentro de la grilla dinamica
  * @param event
  */
  generarAcciones(event) {
    switch (event.name) {
      case 'editar':
        this.updateMedioDeCobro(event);
        break;
      case 'eliminar':
        this.deleteMedioDeCobro(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveMedioDeCobro() {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      panelClass: 'ayuda-dialog'
    }).afterClosed().subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  /**
   * Esta funcion modifica un item
   * @param event
   */
  updateMedioDeCobro(event) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).afterClosed().subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  /**
   * Esta funcion elimina un item
   * @param event
   */
  deleteMedioDeCobro(event) {
    this.confirm.open({
      title: "Eliminar Medio de cobro " + event.params.data.descripcion,
      message: "¿Desea eliminar la Medio de cobro: " + event.params.data.descripcion + "?",
      dismissible: false,
      actions: {
        confirm: {
          show: true,
          color: 'warn',
          label: 'Si'
        },
        cancel: {
          show: true,
          label: 'No'
        }
      }
    }).afterClosed().subscribe(res => {
      if (res === 'confirmed') {
        this._mediosDeCobroService.deleteMedioDeCobro(event.params.data.idpagotipo).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Medio de cobro eliminado con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error(error);
            alert("Este Medio de cobro no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
_class = MediosDeCobroComponent;
_class.ɵfac = function MediosDeCobroComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_4__.MediosDeCobroService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_6__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_9__.HeaderTextService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-medios-de-cobro"]],
  viewQuery: function MediosDeCobroComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  inputs: {
    extraParams: "extraParams"
  },
  outputs: {
    parametrosActualizados: "parametrosActualizados"
  },
  decls: 9,
  vars: 9,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-8", "mt-2"], [1, "fixed", "right-10"], ["mat-icon-button", "", "type", "button", "matTooltip", "Crear Medio de cobro", 1, "mr-2", "ml-2", "bg-blue-500", "p-2", "rounded-full", "z-99999", 3, "click"], ["save", ""], [1, "text-white"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function MediosDeCobroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MediosDeCobroComponent_Template_button_click_3_listener() {
        return ctx.saveMedioDeCobro();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6)(8, "app-tabla-dinamica", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("functionEmitter", function MediosDeCobroComponent_Template_app_tabla_dinamica_functionEmitter_8_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 88859:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/components/save/save.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/medios-de-cobro.service */ 78048);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
var _class;















function SaveComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fondo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", fondo_r1.idfondo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fondo_r1.descripcion);
  }
}
class SaveComponent {
  constructor(data, _mediosDeCobroService, alert, fb, dialogRef) {
    this.data = data;
    this._mediosDeCobroService = _mediosDeCobroService;
    this.alert = alert;
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.columns = ['descripcion', 'porcentaje', 'fondo'];
    this.fondos = [];
    this.medio_de_pago = this.data ? this.data : null;
    this.title = this.medio_de_pago?.idpagotipo ? 'Editar Medio de cobro' : 'Nuevo Medio de cobro';
  }
  ngOnInit() {
    this.newForm();
    this.exist();
  }
  newForm() {
    this.form = this.fb.group({
      descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.descripcion : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      porcentaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.porcentaje : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      idfondo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.idfondo : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.activo : ''),
      duplica_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.duplica_numero : ''),
      lleva_banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_banco : ''),
      lleva_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_numero : ''),
      lleva_vencimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_vencimiento : ''),
      lleva_fecha_emision: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_fecha_emision : ''),
      lleva_fecha_cobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_fecha_cobro : '')
    });
  }
  /**
  * Si existe un item le mando 'true' a fondos y nada a TM para que me traiga todos los fondos al editar.
  * Caso contrario, si se va a crear un nuevo item, llamo a los fondos sin enviarle un parametro asi me trae solo los activos.
  */
  exist() {
    if (this.medio_de_pago?.idpagotipo) {
      this.getFondos(true);
    } else {
      this.getFondos();
    }
  }
  /**
   * Esta funcion la utilizamos cuando necesitamos listar los fondos en el saveComponent
   */
  getFondos(option) {
    const fondos = this._mediosDeCobroService.getFondos(option).subscribe(fondos => {
      this.fondos = fondos;
    });
    return fondos;
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      this.medio_de_pago = {
        ...this.medio_de_pago,
        lleva_numero: this.form.get('lleva_numero').value ? 1 : 0,
        lleva_vencimiento: this.form.get('lleva_vencimiento').value ? 1 : 0,
        lleva_fecha_emision: this.form.get('lleva_fecha_emision').value ? 1 : 0,
        lleva_fecha_cobro: this.form.get('lleva_fecha_cobro').value ? 1 : 0,
        duplica_numero: this.form.get('duplica_numero').value ? 1 : 0,
        lleva_banco: this.form.get('lleva_banco').value ? 1 : 0,
        activo: this.form.get('activo').value ? 1 : 0,
        descripcion: this.form.get('descripcion').value,
        porcentaje: this.form.get('porcentaje').value,
        idfondo: this.form.get('idfondo').value
      };
      if (this.medio_de_pago.idpagotipo) {
        this._mediosDeCobroService.updateMedioDeCobro(this.medio_de_pago).subscribe({
          next: data => {
            if (data) {
              this.onCloseMenu();
            }
          }
        });
      } else {
        this._mediosDeCobroService.saveMedioDeCobro(this.medio_de_pago).subscribe({
          next: data => {
            if (data) {
              this.onCloseMenu();
            }
          }
        });
      }
    }
  }
  onCloseMenu() {
    this.dialogRef.close(false);
  }
}
_class = SaveComponent;
_class.ɵfac = function SaveComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_0__.MediosDeCobroService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-save-medios-de-cobro"]],
  decls: 43,
  vars: 3,
  consts: [[1, "fixed", "inset-0", "bg-white", "dark:bg-slate-900", "shadow-lg", "overflow-hidden", "overflow-y-auto", "sm:rounded-2xl", "md:min-w-[50rem]", "sm:w-90", "sm:min-w-90", "flex-col", "flex", "sm:inset-auto", "max-h-screen", "sm:static"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "flex", "w-full"], ["appearance", "outline", 1, "w-1/2", "mr-2"], ["matInput", "", "formControlName", "descripcion"], ["appearance", "outline", 1, "w-1/3"], ["formControlName", "idfondo"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "w-1/5", "ml-2"], ["matInput", "", "formControlName", "porcentaje"], [1, "p-2", "m-2"], [1, "flex", "justify-between"], ["formControlName", "lleva_numero"], ["formControlName", "lleva_vencimiento"], ["formControlName", "lleva_banco"], ["formControlName", "activo"], [1, "flex"], ["formControlName", "lleva_fecha_cobro", 1, "w-1/4"], ["formControlName", "lleva_fecha_emision", 1, "w-1/3", "ml-5", "pl-1"], ["formControlName", "duplica_numero"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [3, "value"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "mat-form-field", 7)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 9)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Fondo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SaveComponent_mat_option_18_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-form-field", 12)(20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Porcentaje");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "mat-checkbox", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mat-checkbox", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Vencimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-checkbox", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Banco");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-checkbox", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20)(34, "mat-checkbox", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Fecha cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-checkbox", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Fecha emision");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-checkbox", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Duplica numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 24)(41, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_41_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fondos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 72897:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/medios-de-cobro.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediosDeCobroModule: () => (/* binding */ MediosDeCobroModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ 52484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/save/save.component */ 88859);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _components_medios_de_cobro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/medios-de-cobro.component */ 17299);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/medios-de-cobro.service */ 78048);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 31515);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 66897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;



























const routes = [{
  path: '',
  component: _components_medios_de_cobro_component__WEBPACK_IMPORTED_MODULE_4__.MediosDeCobroComponent
}];
class MediosDeCobroModule {}
_class = MediosDeCobroModule;
_class.ɵfac = function MediosDeCobroModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_5__.MediosDeCobroService, _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_7__.TablaDinamicaModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MediosDeCobroModule, {
    declarations: [_components_medios_de_cobro_component__WEBPACK_IMPORTED_MODULE_4__.MediosDeCobroComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_3__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_6__.FilterMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__.MatDialogModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_7__.TablaDinamicaModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 78048:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/service/medios-de-cobro.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediosDeCobroService: () => (/* binding */ MediosDeCobroService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
var _class;




class MediosDeCobroService {
  constructor(http) {
    this.http = http;
  }
  /**
   * Funcion en el servicio
   * - Esta funcion retorna los medios de cobro.
   * - Configura los filtros para el paginado.
   * @param filter
   * @returns medios de cobro
   */
  getMediosDeCobro(filter) {
    //Se aplican filtro para la grilla
    let f = '?';
    f += filter?.filter?.sort == 'desc' ? 'sort=-descripcion' : 'sort=descripcion';
    f += filter?.filter?.descripcion ? `&filter[descripcion][like]=${filter.filter.descripcion}` : '';
    f += filter?.filter?.lleva_numero ? `&filter[lleva_numero]=` + (filter.filter.lleva_numero == 1 ? '1' : '0') : '';
    f += filter?.filter?.lleva_vencimiento ? `&filter[lleva_vencimiento]=` + (filter.filter.lleva_vencimiento == 1 ? '1' : '0') : '';
    f += filter?.filter?.lleva_fecha_emision ? `&filter[lleva_fecha_emision]=` + (filter.filter.lleva_fecha_emision == 1 ? '1' : '0') : '';
    f += filter?.filter?.lleva_fecha_cobro ? `&filter[lleva_fecha_cobro]=` + (filter.filter.lleva_fecha_cobro == 1 ? '1' : '0') : '';
    f += filter?.filter?.lleva_banco ? `&filter[lleva_banco]=` + (filter.filter.lleva_banco == 1 ? '1' : '0') : '';
    f += filter?.filter?.duplica_numero ? `&filter[duplica_numero]=` + (filter.filter.duplica_numero == 1 ? '1' : '0') : '';
    f += filter?.filter?.activo ? `&filter[activo]=` + (filter.filter.activo == 1 ? '1' : '0') : '';
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.view_ven_pago_tipos}${f}`, {
      observe: 'response'
    }).subscribe(resp => {
      subject.next({
        'list': resp.body
      });
    });
    return subject.asObservable();
  }
  /**
   * Funcion en el Servicio
   * @param medio_de_cobro
   * @returns Un medio de cobro nuevo
   */
  saveMedioDeCobro(medio_de_cobro) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.ven_pago_tipos}`, medio_de_cobro);
  }
  /**
   * Funcion en el servicio
   * @param medio_de_cobro
   * @returns medio de cobro actualizado
   */
  updateMedioDeCobro(medio_de_cobro) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.ven_pago_tipos}` + '/' + medio_de_cobro.idpagotipo, medio_de_cobro);
  }
  /**
   * Funcion en el servicio
   * @param idpagotipo
   * @returns Elimina el medio de cobro
  */
  deleteMedioDeCobro(idpagotipo) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.ven_pago_tipos + '/' + idpagotipo);
  }
  /**
   *
   * @param option Si es una edicion me trae 'true' para mostrarme todos los fondos. Sino me muestra solo los fondos activos.
   * @returns
   */
  getFondos(option) {
    let f = '?';
    f += !option ? 'filter[activo]=1' : '';
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fondos.fondos}${f}`);
  }
}
_class = MediosDeCobroService;
_class.ɵfac = function MediosDeCobroService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_administracion_medios-de-cobro_medios-de-cobro_module_ts.js.map