"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_administracion_medios-de-cobro_medios-de-cobro_module_ts"],{

/***/ 38436:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/components/filter-menu/filter-menu.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMenuComponent": () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 69941);












class FilterMenuComponent {
  constructor(data, menuService, _empresaService) {
    this.data = data;
    this.menuService = menuService;
    this._empresaService = _empresaService;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    /**
    * Formulario de filtros
    */
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      lleva_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      lleva_vencimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      lleva_fecha_emision: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      lleva_fecha_cobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      duplica_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      lleva_banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(''),
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('')
    });
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
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
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__.EmpresaService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-medios-de-cobro"]],
  decls: 89,
  vars: 37,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], ["formControlName", "lleva_numero"], [3, "value"], ["formControlName", "lleva_vencimiento"], ["formControlName", "lleva_fecha_emision"], ["formControlName", "lleva_fecha_cobro"], ["formControlName", "duplica_numero"], ["formControlName", "lleva_banco"], ["formControlName", "activo"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"]],
  template: function FilterMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Filtros");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_5_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_8_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 6)(12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Lleva n\u00FAmero");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-select", 9)(16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Lleva vencimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-select", 11)(26, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Fecha de emision");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-form-field", 8)(35, "mat-select", 12)(36, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Fecha de cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 8)(45, "mat-select", 13)(46, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Duplica n\u00FAmero");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-form-field", 8)(55, "mat-select", 14)(56, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Lleva banco");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "mat-form-field", 8)(65, "mat-select", 15)(66, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "mat-form-field", 8)(75, "mat-select", 16)(76, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 17)(83, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_83_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](85, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_86_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx.color_primario || "")("border", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhY2lvbi9tZWRpb3MtZGUtY29icm8vY29tcG9uZW50cy9maWx0ZXItbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_0__.fuseAnimations
  }
});


/***/ }),

/***/ 75315:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/components/medios-de-cobro.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediosDeCobroComponent": () => (/* binding */ MediosDeCobroComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 94025);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 38436);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/medios-de-cobro.service */ 89378);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 83677);




















class MediosDeCobroComponent {
  constructor(_mediosDeCobroService, _empresaService, _searchService, _menuService, confirm, alert, dialogo, router, _headerTextService) {
    this._mediosDeCobroService = _mediosDeCobroService;
    this._empresaService = _empresaService;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource();
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
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.administracion.view_ven_pago_tipos + '?';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('');
    this.default_color =  true && 'text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
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
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)()).subscribe(value => {
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
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Medio de cobro creado con éxito.");
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
    }).componentInstance.editadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Medio de cobro editado con éxito.");
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
            this.alert.warning("Este Medio de cobro no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
MediosDeCobroComponent.ɵfac = function MediosDeCobroComponent_Factory(t) {
  return new (t || MediosDeCobroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_4__.MediosDeCobroService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_6__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_7__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_8__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_9__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__.HeaderTextService));
};
MediosDeCobroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: MediosDeCobroComponent,
  selectors: [["app-medios-de-cobro"]],
  viewQuery: function MediosDeCobroComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  inputs: {
    extraParams: "extraParams"
  },
  outputs: {
    parametrosActualizados: "parametrosActualizados"
  },
  decls: 12,
  vars: 15,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "fixed", "right-10"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], ["save", ""], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function MediosDeCobroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MediosDeCobroComponent_Template_button_click_3_listener() {
        return ctx.saveMedioDeCobro();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Agregar Medio de cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 9)(11, "app-tabla-dinamica", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("functionEmitter", function MediosDeCobroComponent_Template_app_tabla_dinamica_functionEmitter_11_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpb3MtZGUtY29icm8uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhY2lvbi9tZWRpb3MtZGUtY29icm8vY29tcG9uZW50cy9tZWRpb3MtZGUtY29icm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 94025:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/components/save/save.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/medios-de-cobro.service */ 89378);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);



















function SaveComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fuse-alert", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0._alertConfig.message, " ");
  }
}
function SaveComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fondo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", fondo_r2.idfondo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](fondo_r2.descripcion);
  }
}
class SaveComponent {
  constructor(data, _mediosDeCobroService, _empresaService, alert, fb, dialogRef) {
    this.data = data;
    this._mediosDeCobroService = _mediosDeCobroService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.columns = ['descripcion', 'porcentaje', 'fondo'];
    this.fondos = [];
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.medio_de_pago = this.data ? this.data : null;
    this.title = this.medio_de_pago?.idpagotipo ? 'Editar Medio de cobro' : 'Nuevo Medio de cobro';
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.newForm();
    this.exist();
    this.subscribeAlert();
  }
  // Alert
  subscribeAlert() {
    this.alert.emitConfig.subscribe({
      next: config => {
        this.showAlert = true;
        this._alertConfig = {
          ...config,
          appearance: 'border'
        };
        let time = 2;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  newForm() {
    this.form = this.fb.group({
      descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.descripcion : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      porcentaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.porcentaje : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      idfondo: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.idfondo : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.activo : ''),
      duplica_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.duplica_numero : ''),
      lleva_banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_banco : ''),
      lleva_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_numero : ''),
      lleva_vencimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_vencimiento : ''),
      lleva_fecha_emision: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_fecha_emision : ''),
      lleva_fecha_cobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_fecha_cobro : '')
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
      return this.alert.error('Revise Los Datos Ingresados');
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
              this.editadoExitosamente.emit();
              this.onCloseMenu();
            }
          }
        });
      } else {
        this._mediosDeCobroService.saveMedioDeCobro(this.medio_de_pago).subscribe({
          next: data => {
            if (data) {
              this.creadoExitosamente.emit();
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
SaveComponent.ɵfac = function SaveComponent_Factory(t) {
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_0__.MediosDeCobroService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_1__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-medios-de-cobro"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  decls: 46,
  vars: 12,
  consts: [[1, "fixed", "inset-0", "bg-white", "dark:bg-slate-900", "shadow-lg", "overflow-hidden", "overflow-y-auto", "sm:rounded-2xl", "md:min-w-auto", "sm:w-auto", "sm:min-w-90", "flex-col", "flex", "sm:inset-auto", "max-h-screen", "sm:static"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "form-menu", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-4", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/2"], ["matInput", "", "formControlName", "descripcion"], ["appearance", "outline", 1, "w-full", "sm:w-1/3"], ["formControlName", "idfondo"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "w-full", "sm:w-1/5"], ["matInput", "", "formControlName", "porcentaje"], [1, "p-2", "m-2"], [1, "flex", "flex-wrap", "justify-between", "gap-2"], ["formControlName", "lleva_numero", 1, "flex-1", "min-w-[45%]", "md:min-w-[20%]"], ["formControlName", "lleva_vencimiento", 1, "flex-1", "min-w-[45%]", "md:min-w-[20%]"], ["formControlName", "lleva_banco", 1, "flex-1", "min-w-[45%]", "md:min-w-[20%]"], ["formControlName", "activo", 1, "flex-1", "min-w-[45%]", "md:min-w-[20%]"], [1, "flex", "flex-wrap", "justify-between", "gap-2", "mt-2"], ["formControlName", "lleva_fecha_cobro", 1, "flex-1", "min-w-[45%]", "md:min-w-[30%]"], ["formControlName", "lleva_fecha_emision", 1, "flex-1", "min-w-[45%]", "md:min-w-[30%]", "ml-5", "pl-1"], ["formControlName", "duplica_numero", 1, "flex-1", "min-w-[45%]", "md:min-w-[30%]"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [3, "value"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SaveComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "mat-form-field", 9)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-form-field", 11)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Fondo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, SaveComponent_mat_option_20_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 14)(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Porcentaje");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 16)(26, "div", 17)(27, "mat-checkbox", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-checkbox", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Vencimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-checkbox", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Banco");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-checkbox", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 22)(36, "mat-checkbox", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Fecha cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-checkbox", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Fecha emision");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-checkbox", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Duplica numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 26)(43, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_43_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.fondos);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckbox],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhY2lvbi9tZWRpb3MtZGUtY29icm8vY29tcG9uZW50cy9zYXZlL3NhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 71993:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/medios-de-cobro.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediosDeCobroModule": () => (/* binding */ MediosDeCobroModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/save/save.component */ 94025);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/paginator */ 86907);
/* harmony import */ var _components_medios_de_cobro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/medios-de-cobro.component */ 75315);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/medios-de-cobro.service */ 89378);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 38436);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);



























const routes = [{
  path: '',
  component: _components_medios_de_cobro_component__WEBPACK_IMPORTED_MODULE_4__.MediosDeCobroComponent
}];
class MediosDeCobroModule {}
MediosDeCobroModule.ɵfac = function MediosDeCobroModule_Factory(t) {
  return new (t || MediosDeCobroModule)();
};
MediosDeCobroModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: MediosDeCobroModule
});
MediosDeCobroModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_5__.MediosDeCobroService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService],
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

/***/ 89378:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/service/medios-de-cobro.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediosDeCobroService": () => (/* binding */ MediosDeCobroService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33765);




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
MediosDeCobroService.ɵfac = function MediosDeCobroService_Factory(t) {
  return new (t || MediosDeCobroService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
MediosDeCobroService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: MediosDeCobroService,
  factory: MediosDeCobroService.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_administracion_medios-de-cobro_medios-de-cobro_module_ts.js.map