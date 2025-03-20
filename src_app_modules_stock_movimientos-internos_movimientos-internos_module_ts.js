"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_movimientos-internos_movimientos-internos_module_ts"],{

/***/ 42525:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/components/filter-menu/filter-menu.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMenuComponent": () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/movimientos-internos.service */ 20024);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);




















function FilterMenuComponent_mat_datepicker_toggle_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-datepicker-toggle", 26);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r1);
  }
}
function FilterMenuComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.limpiarFechas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function FilterMenuComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", deposito_r8.iddeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](deposito_r8.descripcion);
  }
}
function FilterMenuComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", usuario_r9.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", usuario_r9.nick, " ");
  }
}
class FilterMenuComponent {
  constructor(data, _menuService, datePipe, _movimientosInternosService, _empresaService) {
    this.data = data;
    this._menuService = _menuService;
    this.datePipe = datePipe;
    this._movimientosInternosService = _movimientosInternosService;
    this._empresaService = _empresaService;
    this.usuarios = [];
    this.filterDeposito = [];
    this.filterUsuarios = [];
    this.filterFechas = [];
    this.movimientos_internos_list = []; //Se crea por sí hace falta crear una copia de los datos y manipularlos de una forma más personalizada
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      filtroFechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroFechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      deposito: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1)
    });
    this.getDepositos();
    this.getUsuarios();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.formFilters.patchValue(this.data.filter);
  }
  resetFilters() {
    this.formFilters.reset({
      filtroFechaInicio: '',
      filtroFechaFin: '',
      usuario: '',
      deposito: -1
    });
  }
  onCloseMenu(data = null) {
    if (data) {
      data.filtroFechaInicio = this.datePipe.transform(this.formFilters.get('filtroFechaInicio').value, 'yyyy-MM-dd');
      data.filtroFechaFin = this.datePipe.transform(this.formFilters.get('filtroFechaFin').value, 'yyyy-MM-dd');
    }
    this._menuService.close(data);
  }
  /**
  * Funcion para limpiar los filtros de rango de fechas
  */
  limpiarFechas() {
    this.formFilters.get('filtroFechaInicio').setValue('');
    this.formFilters.get('filtroFechaFin').setValue('');
  }
  /**
   * Esta funcion es para listas los usuarios en el filtro de grilla.
   */
  getUsuarios() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Usuarios = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this._movimientosInternosService.getUsuarios());
      _this.usuarios = Usuarios.list;
      _this.filteredUsuario = _this.formFilters.controls['usuario'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(value => _this._filterUsuaurio(value)));
    })();
  }
  /**
    * Esta funcion es para filtrar los proveedores según el input que se haya ingresado en el input de proveedor.
    * @param value
    * @returns
    */
  _filterUsuaurio(value) {
    const filterValue = value.toLowerCase();
    return this.usuarios.filter(usuario => usuario.nick.toLowerCase().includes(filterValue));
  }
  /**
   * Esta funcion es para listas los depositos en el filtro de grilla.
   */
  getDepositos() {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const stk_list = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this2._movimientosInternosService.getDepositos(true));
      _this2.filterDeposito = stk_list.list;
    })();
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_4__.MovimientosInternosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__.EmpresaService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-movimientos-internos"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__.MY_DATE_FORMATS
  }])],
  decls: 47,
  vars: 25,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-120", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Desde", "formControlName", "filtroFechaInicio"], ["matEndDate", "", "placeholder", "Hasta", "formControlName", "filtroFechaFin"], ["matIconSuffix", "", 3, "for", 4, "ngIf"], ["picker", ""], ["matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["formControlName", "deposito"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Seleccione Usuario", "matInput", "", "formControlName", "usuario", 3, "matAutocomplete"], ["mat-icon-button", "", "matSuffix", ""], ["autoUsuario", "matAutocomplete"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"], ["matIconSuffix", "", 3, "for"], ["matSuffix", "", "mat-icon-button", "", 3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Rango de fechas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-date-range-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "input", 10)(17, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, FilterMenuComponent_mat_datepicker_toggle_18_Template, 1, 1, "mat-datepicker-toggle", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "mat-date-range-picker", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, FilterMenuComponent_button_21_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Dep\u00F3sito Origen");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-select", 15)(26, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, FilterMenuComponent_mat_option_28_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 19)(34, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "arrow_drop_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-autocomplete", null, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, FilterMenuComponent_mat_option_38_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 21)(41, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_41_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_44_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rangePicker", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.formFilters.get("filtroFechaInicio").value || !ctx.formFilters.get("filtroFechaFin").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formFilters.get("filtroFechaInicio").value || ctx.formFilters.get("filtroFechaFin").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filterDeposito);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](39, 23, ctx.filteredUsuario));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx.color_primario || "")("border", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDateRangePicker, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9tb3ZpbWllbnRvcy1pbnRlcm5vcy9jb21wb25lbnRzL2ZpbHRlci1tZW51L2ZpbHRlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 42596:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/components/movimientos-internos.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovimientosInternosComponent": () => (/* binding */ MovimientosInternosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 37714);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 42525);
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/movimientos-internos.service */ 20024);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/service/app/pwa.service */ 16173);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 83677);





















class MovimientosInternosComponent {
  constructor(_movimientosInternosService, _empresaService, confirm, alert, dialogo, _searchService, _menuService, router, _headerTextService, pwaService) {
    this._movimientosInternosService = _movimientosInternosService;
    this._empresaService = _empresaService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.pwaService = pwaService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource();
    this.headers = ['Fecha', 'Hora', 'Responsable', 'Observaciones', 'Deposito', 'Acciones'];
    this.column_params = ['fecha', 'hora', 'nick', 'observaciones', 'deposito', 'acciones'];
    this.funcionesObjeto = null;
    this.accionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['observaciones', 'nick', 'deposito'];
    this.filter = {
      deposito: -1,
      filtroFechaInicio: '',
      filtroFechaFin: ''
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stock.movimiento_internos + '?sort=-fecha';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('');
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this._headerTextService.setTitulo(this.router);
    /**
     * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
     */
    this.funcionesObjeto = [{
      iconoAccion: movimiento_interno => '',
      iconoAccionado: movimiento_interno => '',
      iconoDeshabilitado: movimiento_interno => '',
      visible: movimiento_interno => false
    }];
    this.showMenu = movimiento_interno => true;
    this.accionesObjeto = [{
      nombre_boton: "Editar",
      functionName: 'editar',
      iconoAccion: movimiento_interno => 'jedstion:editar',
      iconoAccionado: movimiento_interno => '',
      iconoDeshabilitado: movimiento_interno => '',
      visible: movimiento_interno => true
    }, {
      nombre_boton: "Eliminar",
      functionName: 'eliminar',
      iconoAccion: movimiento_interno => 'jedstion:eliminar',
      iconoAccionado: movimiento_interno => '',
      iconoDeshabilitado: movimiento_interno => '',
      visible: movimiento_interno => true
    }, {
      nombre_boton: "Reporte",
      functionName: 'reporte',
      iconoAccion: movimiento_interno => 'jedstion:imprimir',
      iconoAccionado: movimiento_interno => '',
      iconoDeshabilitado: movimiento_interno => '',
      visible: movimiento_interno => true
    }];
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(750), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)()).subscribe(value => {
      this.filtroBusqueda = value;
      this.tabla.filters(this.filtroBusqueda);
    });
    this.FilterEventSub$ = this._searchService.getFilterEvent().subscribe(event => {
      this.onFilterMenu(this._searchService.getFilterOrigin());
    });
  }
  onFilterMenu(origin) {
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter,
      data: this.tabla.getElementosExistentes()
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter.deposito != -1 ? "filter[iddeposito]=" + this.filter.deposito + '&' : '';
          this.extraParams += this.filter.usuario != '' ? "filter[nick]=" + this.filter.usuario + '&' : '';
          this.extraParams += this.filter.filtroFechaInicio != null ? "filter[fecha][gte]=" + this.filter.filtroFechaInicio + '&' : '';
          this.extraParams += this.filter.filtroFechaFin != null ? "filter[fecha][lte]=" + this.filter.filtroFechaFin + '&' : '';
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
        this.updateMovimientoInterno(event);
        break;
      case 'eliminar':
        this.deleteMovimientoInterno(event);
        break;
      case 'reporte':
        this.reporteMovimientoInterno(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveMovimientoInterno() {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Movimiento interno creado con éxito.");
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  /**
   * Esta funcion modifica un item
   * @param event
   */
  updateMovimientoInterno(event) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.editadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Movimiento interno editado con éxito.");
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  /**
   * Esta funcion elimina un item
   * @param event
   */
  deleteMovimientoInterno(event) {
    this.confirm.open({
      title: "Eliminar Movimiento interno: " + event.params.data.fecha,
      message: `¿Desea eliminar el movimiento interno realizado el: ${event.params.data.fecha} ${event.params.data.hora}; del depósito: ${event.params.data.deposito} ?`,
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
        this._movimientosInternosService.deleteMovimientoInterno(event.params.data.idmovimientointerno).subscribe({
          next: res => {
            // Manejar la respuesta exitosa
            this.alert.success("Movimiento interno eliminado con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.warning("Este movimiento interno no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  /**
   * Esta funcion Genera un Reporte y lo muestra en una nueva pestaña
   */
  reporteMovimientoInterno(event) {
    const idMovimientoInterno = event.params.data.idmovimientointerno;
    this._movimientosInternosService.reporteMovimientoInterno(idMovimientoInterno).subscribe(data => {
      if (data.success) {
        const reportePath = data.path;
        if (this.pwaService.isPwa()) {
          this.router.navigate(['/reporte', reportePath]);
        } else {
          const reporteUrl = `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseRest}/${reportePath}`;
          window.open(reporteUrl, '_blank');
        }
      } else {
        console.error('Error al generar el reporte');
      }
    }, error => {
      console.error('Error en la solicitud del reporte', error);
    });
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
MovimientosInternosComponent.ɵfac = function MovimientosInternosComponent_Factory(t) {
  return new (t || MovimientosInternosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_4__.MovimientosInternosService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_6__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_7__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_8__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_9__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_11__.PwaService));
};
MovimientosInternosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: MovimientosInternosComponent,
  selectors: [["app-movimientos-internos"]],
  viewQuery: function MovimientosInternosComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  inputs: {
    extraParams: "extraParams"
  },
  outputs: {
    parametrosActualizados: "parametrosActualizados"
  },
  decls: 12,
  vars: 17,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "absolute", "right-10"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], ["save", ""], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "pr-2", "pl-2", "mt-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "acciones", "showMenu", "functionEmitter"]],
  template: function MovimientosInternosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MovimientosInternosComponent_Template_button_click_3_listener() {
        return ctx.saveMovimientoInterno();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Nuevo Movimiento interno");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 9)(11, "app-tabla-dinamica", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("functionEmitter", function MovimientosInternosComponent_Template_app_tabla_dinamica_functionEmitter_11_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "ssp")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams)("acciones", ctx.accionesObjeto)("showMenu", ctx.showMenu);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpbWllbnRvcy1pbnRlcm5vcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9tb3ZpbWllbnRvcy1pbnRlcm5vcy9jb21wb25lbnRzL21vdmltaWVudG9zLWludGVybm9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvTEFBb0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 37714:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/components/save/save.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/lector-qr/lector-qr.component */ 5729);
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/movimientos-internos.service */ 20024);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/spinner/spinner.component */ 32925);




























function SaveComponent_spinner_component_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "spinner-component");
  }
}
function SaveComponent_fuse_alert_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fuse-alert", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r1._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r1.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r1._alertConfig.message, " ");
  }
}
function SaveComponent_form_10_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", deposito_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", deposito_r28.descripcion, " ");
  }
}
function SaveComponent_form_10_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_form_10_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.limpiarCasillero("deposito_egreso"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_form_10_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", articulo_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", articulo_r31.codigo_interno, " - ", articulo_r31.descripcion, " ");
  }
}
function SaveComponent_form_10_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_form_10_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.limpiarCasillero("articulo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_form_10_mat_option_41_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("(x", um_r34.factor_um, " ", um_r34.um_base, ")");
  }
}
function SaveComponent_form_10_mat_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SaveComponent_form_10_mat_option_41_i_2_Template, 2, 2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", um_r34.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", um_r34.descripcion_um, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", um_r34.factor_um != 1);
  }
}
function SaveComponent_form_10_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", deposito_r37.iddeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](deposito_r37.descripcion);
  }
}
function SaveComponent_form_10_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Codigo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r13.color_primario ? "" : ctx_r13.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r13.color_primario || "");
  }
}
function SaveComponent_form_10_td_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r38.codigo_interno, " ");
  }
}
function SaveComponent_form_10_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r15.color_primario ? "" : ctx_r15.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r15.color_primario || "");
  }
}
function SaveComponent_form_10_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r39.descripcion_articulo, " ");
  }
}
function SaveComponent_form_10_th_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Unidad de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r17.color_primario ? "" : ctx_r17.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r17.color_primario || "");
  }
}
function SaveComponent_form_10_td_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r40.descripcion_um, " ");
  }
}
function SaveComponent_form_10_th_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r19.color_primario ? "" : ctx_r19.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r19.color_primario || "");
  }
}
function SaveComponent_form_10_td_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r41.cantidad, " ");
  }
}
function SaveComponent_form_10_th_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Dep\u00F3sito Destino");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r21.color_primario ? "" : ctx_r21.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r21.color_primario || "");
  }
}
function SaveComponent_form_10_td_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r42.descripcion_deposito_ingreso, " ");
  }
}
function SaveComponent_form_10_th_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 78);
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r23.color_primario ? "" : ctx_r23.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r23.color_primario || "");
  }
}
function SaveComponent_form_10_td_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 77)(1, "button", 3, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_form_10_td_85_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46);
      const movimiento_r43 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r45.deleteMovimiento(movimiento_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_form_10_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 81);
  }
}
function SaveComponent_form_10_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 82);
  }
}
function SaveComponent_form_10_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    "reached-max": a0
  };
};
function SaveComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 10)(1, "div", 11)(2, "div", 12)(3, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 14)(5, "mat-datepicker-toggle", 15)(6, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 13)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-form-field", 18)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Dep\u00F3sito Origen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SaveComponent_form_10_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r48.seleccionItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-autocomplete", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, SaveComponent_form_10_mat_option_18_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SaveComponent_form_10_button_20_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "form", 24)(22, "div", 12)(23, "div", 25)(24, "mat-form-field", 26)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SaveComponent_form_10_Template_input_ngModelChange_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r50.seleccionItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-autocomplete", 20, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, SaveComponent_form_10_mat_option_30_Template, 2, 3, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, SaveComponent_form_10_button_32_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 29)(34, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_form_10_Template_button_click_34_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r51.etiquetaArticulo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-form-field", 18)(38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "UM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SaveComponent_form_10_Template_mat_select_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r52.seleccionItem({
        um: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, SaveComponent_form_10_mat_option_41_Template, 3, 3, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "mat-form-field", 18)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "En stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](45, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "mat-form-field", 18)(47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Dep\u00F3sitos Destino");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, SaveComponent_form_10_mat_option_50_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 36)(52, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown.enter", function SaveComponent_form_10_Template_mat_form_field_keydown_enter_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r53.onCargar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](55, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 29)(57, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_form_10_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r54.onCargar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 42)(61, "div", 43)(62, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function SaveComponent_form_10_Template_input_keyup_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.applyFilter($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "svg", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](65, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div", 48)(67, "table", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](68, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, SaveComponent_form_10_th_69_Template, 2, 4, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](70, SaveComponent_form_10_td_70_Template, 2, 1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](71, 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, SaveComponent_form_10_th_72_Template, 2, 4, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, SaveComponent_form_10_td_73_Template, 2, 1, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](74, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, SaveComponent_form_10_th_75_Template, 2, 4, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](76, SaveComponent_form_10_td_76_Template, 2, 1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](77, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, SaveComponent_form_10_th_78_Template, 2, 4, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, SaveComponent_form_10_td_79_Template, 2, 1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](80, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](81, SaveComponent_form_10_th_81_Template, 2, 4, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](82, SaveComponent_form_10_td_82_Template, 2, 1, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](83, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](84, SaveComponent_form_10_th_84_Template, 1, 4, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](85, SaveComponent_form_10_td_85_Template, 5, 0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, SaveComponent_form_10_tr_86_Template, 1, 0, "tr", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, SaveComponent_form_10_tr_87_Template, 1, 0, "tr", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, SaveComponent_form_10_div_88_Template, 3, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](90, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "mat-form-field", 67)(94, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](96, "textarea", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](29);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_17_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r4)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx_r2.getTextDeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 36, ctx_r2.filteredDepositos));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.form.get("deposito_egreso").value && ctx_r2.mov_art_list.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.form_carga_articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx_r2.getTextArticulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 38, ctx_r2.filteredArticulos));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.form_carga_articulos.get("articulo").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r2.color_primario)("color", ctx_r2.color_secundario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !((tmp_17_0 = ctx_r2.form.get("deposito_egreso")) == null ? null : tmp_17_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.unidades_de_medida);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.depositos_destino);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r2.color_primario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.dataSource.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Total de art\u00EDculos: ", ctx_r2.dataSource.data.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](40, _c0, !ctx_r2.isPalabraMaxLengthReached()));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r2.getPalabrasLength(), "/", ctx_r2.maxPalabras, " ");
  }
}
function SaveComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 85)(1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r56.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r3.color_primario ? "" : ctx_r3.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx_r3.color_primario || "");
  }
}
class SaveComponent {
  constructor(data, _movimientosInternosService, _empresaService, datePipe, alert, dialogRef, dialogo) {
    this.data = data;
    this._movimientosInternosService = _movimientosInternosService;
    this._empresaService = _empresaService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.maxPalabras = 50;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource();
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.deposito_default = 0;
    this.mostrarSpinner = true;
    this.mostrar_mensaje = false;
    // Particulares del modulo
    this.columns = ['codigointerno', 'articulo', 'cantidad', 'unidadmedida', 'deposito_ingreso', 'acciones'];
    this.depositos_origen = [];
    this.depositos_destino = [];
    this.articulos_list = [];
    this.unidades_de_medida = [];
    this.mov_art_list = [];
    this.movimiento_interno = this.data ? this.data : null;
    this.esEdicion = this.movimiento_interno ? true : false;
    this.title = this.movimiento_interno?.idmovimientointerno ? `Editar Movimiento interno ${this.movimiento_interno.fecha} - ${this.movimiento_interno.hora}` : `Nuevo Movimiento interno`;
    this.user = JSON.parse(localStorage.getItem('user'));
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
      this.deposito_default = empresa.deposito_default;
    });
  }
  ngOnInit() {
    // Load empresa data
    this.loadServices();
    this.newForm();
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  newForm() {
    const [dia, mes, anio] = this.movimiento_interno ? this.movimiento_interno.fecha.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    if (this.movimiento_interno) {
      //Sí existe el orden de compra, cargo la grilla con sus articulos...
      this.getItems(this.movimiento_interno.idmovimientointerno).then(res => {
        this.mov_art_list = res.map(m => {
          return {
            idarticulo: m.idarticulo,
            cantidad: parseFloat(m.cantidad),
            idunidadmedida: m.idunidadmedida,
            descripcion_articulo: m.descripcion_articulo,
            descripcion_um: m.descripcion_um,
            codigo_interno: m.codigo_interno_articulo,
            deposito_ingreso: m.deposito_ingreso,
            descripcion_deposito_ingreso: m.descripcion_deposito_ingreso,
            stock: m.stock_minimo_articulo //Stock restante de ese articulo con esa um...
          };
        });

        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.mov_art_list);
        if (this.mov_art_list.length != 0) {
          this.form.get('deposito_egreso').disable();
        } else {
          this.form.get('deposito_egreso').enable();
        }
      });
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.movimiento_interno?.fecha ? this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
      hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.movimiento_interno?.hora ? this.movimiento_interno.hora : this.datePipe.transform(new Date(), 'HH:mm'), [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
      deposito_egreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.movimiento_interno ? {
        descripcion: this.movimiento_interno.deposito,
        iddeposito: this.movimiento_interno.iddeposito
      } : '', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.movimiento_interno ? this.movimiento_interno.observaciones : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(this.maxPalabras)])
    });
    this.form_carga_articulos = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      deposito_ingreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      stock_existente: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('')
    });
    if (this.movimiento_interno && this.form.get('deposito_egreso').value) {
      this.seleccionItem(this.form.get('deposito_egreso').value);
    }
    this.updateFormValidators();
  }
  /**
  * Si existe un stockinicial le mando 'true' a fondos y nada a TM para que me traiga todos los fondos y TMs al editar.
  * Caso contrario, si se va a crear un stockinicial, llamo a los fondos sin enviarle un parametro asi me trae solo los activos y
  * le envio un paramtro a los tipos de stockinicials para que me traiga los activos.
  */
  exist() {}
  /**
   * Este metodo ejecuta todas las peticiones asincronas al mismo tiempo
  */
  loadServices() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all([_this._empresaService.getEmpresa(), _this.getDepositos()]).then(() => {
        _this.mostrarSpinner = false;
      });
    })();
  }
  // ################# Carga De Movimientos #################
  /**
  * Esta funcion añade un nuevo item a la grilla dentro del saveComponent.
  * @var art_descripcion busca en el arreglo correspondiente un elemento con el mismo id para imprimir su descripcion.
  * @var um_descripcion busca en el arreglo correspondiente un elemento con el mismo id para imprimir su descripcion.
  * @var art_stk_ini Encapsula un objeto con los datos que deseamos mostrar en la tabla.
  */
  addMovimiento(movimiento) {
    if (this.form.get('deposito_egreso').value != '') {
      let deposito_egreso_value = this.form.get('deposito_egreso').value.iddeposito;
      if (typeof this.form.get('deposito_egreso').value == 'string') {
        //En caso de edicion...
        let d = this.depositos_origen.find(d => d.descripcion === this.form.get('deposito_egreso').value);
        deposito_egreso_value = d.iddeposito;
      }
      if (movimiento) {
        let movimiento_articulo = {
          idarticulo: movimiento.articulo.idarticulo,
          cantidad: movimiento.cantidad,
          idunidadmedida: movimiento.unidad_medida,
          descripcion_articulo: movimiento.articulo.descripcion,
          descripcion_um: movimiento.unidadmedida_descripcion,
          codigo_interno: movimiento.articulo.codigo_interno,
          deposito_ingreso: movimiento.deposito_ingreso,
          descripcion_deposito_ingreso: movimiento.decripcion_deposito_ingreso,
          stock: movimiento.stock //Stock restante de ese articulo con esa um...
        };

        this.mov_art_list = [movimiento_articulo, ...this.mov_art_list]; // Se agrega el nuevo articulo al comienzo de la lista para que siempre aparezca primero en la grilla
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.mov_art_list); //Actualizo la tabla
        if (this.mov_art_list.length != 0) {
          this.form.get('deposito_egreso').disable();
        }
        // Actualizar validaciones según el estado de la grilla
        this.updateFormValidators();
        this.limpiarCasillero('carga_exitosa'); // Limpio casillerros para que este listo para volver a cargar
        this.alert.success("Artículo añadido con éxito");
      }
    } else {
      this.alert.warning("Seleccione un Depósito de origen");
    }
  }
  /**
   * El resultado de esta operación es un nuevo
   * array que contiene todos los elementos de la lista original,
   * excepto el artículo que se desea eliminar.
   * @param movimiento_articulo
   */
  deleteMovimiento(movimiento_articulo) {
    this.mov_art_list.forEach(mov => {
      if (mov.idarticulo == movimiento_articulo.idarticulo && mov.idunidadmedida == movimiento_articulo.idunidadmedida) {
        mov.stock = `${Number(mov.stock) + mov.cantidad}`;
      }
      ;
    });
    this.mov_art_list = this.mov_art_list.filter(item => {
      return item !== movimiento_articulo;
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.mov_art_list);
    if (this.mov_art_list.length === 0) {
      this.form.get('deposito_egreso').enable();
    }
    this.alert.success("Artículo eliminado con éxito");
  }
  /**
  * Esta funcion maneja las cambios de seleccion que puedan tener los combos.
  * @param $event
  */
  seleccionItem($event, info) {
    //Al seleccionar un articulo...
    if ($event.idarticulo) {
      this.form_carga_articulos.get('unidadmedida').enable();
      this.getUnidadesDeMedidaArticulos($event.idarticulo); //...Buscamos las UM que posee ese articulo.
    }
    // - Mostrar Stock -
    //Al seleccionar la UM...
    if ($event.um) {
      //Consultamos sí existe un articulo con esa UM y utilizamos la respuesta para ver si existe un movimiento con ese articulo y esa UM en los movimientos.
      let articulo_um = this.unidades_de_medida.find(a => a.idarticulo === this.form_carga_articulos.get('articulo').value.idarticulo && a.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value);
      let stock; //variable auxiliar   
      let cantidad_existente = 0;
      let existeMovimiento = this.mov_art_list.length > 0 ? true : false; //Consultamos sí hay movimientos
      if (existeMovimiento && this.esEdicion === false) {
        //Sí existe minimo un movimiento...
        let articulos_existentes = this.mov_art_list.filter(a => a.idarticulo === articulo_um.idarticulo && a.idunidadmedida === articulo_um.idunidadmedida); //Se hace esto para mantener el stock actualizado, en caso de haber sido modificado.
        //Si existen movimientos de articulos con la misma UM... 
        articulos_existentes.forEach(ae => {
          cantidad_existente = cantidad_existente + Number(ae.cantidad); //...sumamos la cantidad que equivalen
        });

        stock = `${Number(articulo_um.stock) - cantidad_existente}`; //...Se le asigna el stock restante...
      } else {
        stock = articulo_um.stock; //..Sino el stock que traiga ese articulo con esa UM del servicio.
      }

      this.form_carga_articulos.get('stock_existente').setValue(stock); //Lo mostramos.
    }
    //Al seleccionar un deposito...
    if ($event.iddeposito) {
      this.form_carga_articulos.enable();
      this.getArticulosDepositos($event.iddeposito); //...Buscamos las UM que posee ese articulo.
      this.getDepositosDestino($event.iddeposito);
    }
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero(input) {
    if (this.form.get(input)) {
      this.form.get(input).setValue('');
      this.seleccionItem(input, 'reset');
    }
    if (input === 'articulo') {
      this.form_carga_articulos.get('unidadmedida').disable();
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('stock_existente').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
    }
    if (input === 'deposito_egreso') {
      this.form_carga_articulos.disable();
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('stock_existente').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
    }
    if (input === 'carga_exitosa') {
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('stock_existente').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
      this.form_carga_articulos.get('deposito_ingreso').setValue('');
    }
  }
  onCargar($event) {
    if ($event?.key === 'Enter') {
      $event.preventDefault();
    }
    if (!this.form_carga_articulos.get('unidadmedida').value || !this.form_carga_articulos.get('articulo').value || !this.form_carga_articulos.get('cantidad').value || !this.form_carga_articulos.get('deposito_ingreso').value) {
      return this.alert.warning('Por favor, complete todos los campos de la carga de articulo');
    }
    if (!this.form_carga_articulos.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      this.articulos.forEach(articulo => {
        if (articulo.idarticulo === this.form_carga_articulos.get('articulo').value.idarticulo && articulo.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value) {
          if (this.form_carga_articulos.get('cantidad').value > articulo.stock) {
            this.form_carga_articulos.get('cantidad').setValue('');
            return this.alert.warning('No hay stock suficiente!');
          }
          let existeMovimiento = this.mov_art_list.find(movimiento => movimiento.idarticulo === this.form_carga_articulos.get('articulo').value.idarticulo && movimiento.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value && movimiento.deposito_ingreso === this.form_carga_articulos.get('deposito_ingreso').value);
          if (existeMovimiento) {
            this.form_carga_articulos.get('deposito_ingreso').setValue('');
            return this.alert.warning('En ese deposito ya existe un movimiento de ese articulo con esa unidad de medida!');
          }
          if (this.form_carga_articulos.get('cantidad').value <= articulo.stock && this.form_carga_articulos.get('cantidad').value > 0) {
            let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
            let deposito = this.depositos_origen.find(deposito => deposito.iddeposito === this.form_carga_articulos.get('deposito_ingreso').value); //Traigo un deposito que coincida con mi seleccion para poder utilizar su descripcion.
            let movimiento_articulo = {
              articulo: this.form_carga_articulos.get('articulo').value,
              unidad_medida: this.form_carga_articulos.get('unidadmedida').value,
              cantidad: this.form_carga_articulos.get('cantidad').value,
              deposito_ingreso: this.form_carga_articulos.get('deposito_ingreso').value,
              unidadmedida_descripcion: unidadmedida.descripcion_um,
              decripcion_deposito_ingreso: deposito.descripcion,
              stock: `${Number(articulo.stock) - this.form_carga_articulos.get('cantidad').value}`
            };
            this.addMovimiento(movimiento_articulo);
          }
        }
      });
    }
  }
  onSubmit() {
    // Verificar la longitud de las observaciones
    if (!this.isPalabraMaxLengthReached()) {
      return this.alert.error(`La longitud máxima de observaciones es de ${this.maxPalabras} caracteres.`);
    }
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      let movimientos = this.mov_art_list.map(objeto => ({
        deposito_ingreso: objeto.deposito_ingreso,
        idarticulo: objeto.idarticulo,
        cantidad: objeto.cantidad,
        idunidadmedida: objeto.idunidadmedida
      }));
      if (movimientos.length === 0) {
        return this.alert.warning('Debe ingresar un articulo al orden de compra');
      }
      const fecha = this.form.get('fecha').value;
      const hora = this.form.get('hora').value;
      // Se formatea la fecha nuevamente al formato deseado (YYYY-MM-DD)
      const fecha_formateada = this.datePipe.transform(fecha, 'yyyy-MM-dd');
      // Se concatena a ambas fecha y hora
      const fecha_hora = `${fecha_formateada} ${hora}`;
      const payload = {
        movimiento_interno: {
          idusuario: this.user.id,
          fecha_hora: fecha_hora,
          iddeposito: this.form.get('deposito_egreso').value.iddeposito,
          observaciones: this.form.get('observaciones').value
        },
        movimientos: movimientos
      };
      if (this.movimiento_interno?.idmovimientointerno) {
        this._movimientosInternosService.updateMovimientoInterno(payload, this.movimiento_interno.idmovimientointerno).subscribe({
          next: data => {
            if (data) {
              this.editadoExitosamente.emit();
              this.dialogRef.close(data);
            }
          }
        });
      } else {
        this._movimientosInternosService.saveMovimientoInterno(payload).subscribe({
          next: data => {
            if (data) {
              this.creadoExitosamente.emit();
              this.dialogRef.close(data);
            }
          }
        });
      }
    }
  }
  onCloseMenu() {
    this.dialogRef.close(false);
  }
  // ################# Metodos de escaner QR #################
  /**
  * Se escanea el QR de la Etiqueta de articulo y se toma el idarticulo.
  */
  etiquetaArticulo() {
    let deposito = this.form.get('deposito_egreso').value;
    if (!deposito) {
      return this.alert.error('Debe seleccionar un depósito');
    }
    this.dialogo.open(_shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__.LectorQrComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.sendObject.subscribe(code => {
      if (!code || code.length === 0) {
        return this.alert.error('Código QR vacío o inválido');
      }
      let decodedText = JSON.parse(code); // Convierto el string en un json
      const idarticulo = parseInt(decodedText['idarticulo'], 10);
      this._movimientosInternosService.getArticulosDepositos(deposito['iddeposito'], idarticulo).subscribe(response => {
        if (response?.list?.length > 0) {
          const articulo = response.list[0];
          this.form_carga_articulos.get('articulo').setValue(articulo);
        } else {
          return this.alert.error('No hay stock del artículo en el depósito');
        }
      }, error => {
        console.error('Error al obtener artículo:', error);
      });
    });
  }
  // ################# Metodos de comunicacion con el service #################
  getDepositos(option) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Depositos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this2._movimientosInternosService.getDepositos(option));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.depositos_origen = Depositos.list;
          if (_this2.form.get('deposito_egreso').value) {
            _this2.depositos_destino = _this2.depositos_origen.filter(deposito => deposito.iddeposito != _this2.form.get('deposito_egreso').value.iddeposito);
          }
          // Filtrar y autoasignar el depósito por defecto
          const depositoPorDefecto = _this2.depositos_origen.find(deposito => deposito.iddeposito === _this2.deposito_default);
          if (depositoPorDefecto && !_this2.movimiento_interno) {
            _this2.form.get('deposito_egreso').setValue(depositoPorDefecto);
          }
          _this2.filteredDepositos = _this2.form.get('deposito_egreso').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this2._filterTextGenerico(value, _this2.depositos_origen, 'descripcion')));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
  * Esta funcion lista los depositos activos.
  * @param deposito_origen
  */
  getDepositosDestino(deposito_origen) {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.depositos_destino = _this3.depositos_origen.filter(deposito => deposito.iddeposito != deposito_origen); //Solo se almacenan los depositos que sean distintos al deposito de origen.
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  /**
  * Esta funcion solicita las unidades de medida que posee un articulo.
  * @param idarticulo
  */
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this4 = this;
    new Promise( /*#__PURE__*/function () {
      var _ref3 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        let um_base; // Asigno una variable global para que cada UM sepa cual es la um base (factor = '1.00')
        _this4.unidades_de_medida = _this4.articulos.filter(a => a.idarticulo === idarticulo && a.factor_um != null).sort((a, b) => a.factor_um - b.factor_um).map(a => {
          //Convierto en numero
          a.factor_um = parseFloat(a.factor_um);
          // Almaceno solo la um base de un articulo 
          if (a.factor_um === 1) {
            um_base = a.um;
          }
          return {
            idarticulo: a.idarticulo,
            idunidadmedida: a.idunidadmedida,
            descripcion_um: a.um,
            stock: a.stock,
            factor_um: a.factor_um,
            um_base: um_base
          };
        });
        // Autoasigna la primera unidad de medida al control del formulario
        if (_this4.unidades_de_medida.length > 0) {
          _this4.form_carga_articulos.get('unidadmedida').setValue(_this4.unidades_de_medida[0].idunidadmedida);
          _this4.seleccionItem({
            um: _this4.unidades_de_medida[0].idunidadmedida
          });
        }
        resolve(true);
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  /**
  * Funcion que lista los articulos que posee un déposito.
  */
  getArticulosDepositos(iddeposito) {
    var _this5 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos_um_deposito = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this5._movimientosInternosService.getArticulosDepositos(iddeposito)); //solicitamos los aticulos que esten en un deposito
      new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this5.articulos = articulos_um_deposito.list;
          _this5.filteredArticulos = _this5.form_carga_articulos.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this5._filterArticulos(value)));
          resolve(true);
        });
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
      //Esta funcion la realizamos para listar los articulos sin que se repitan.
      articulos_um_deposito.list.forEach(item => {
        const existeArticulo = _this5.articulos_list.find(articulo => articulo.idarticulo === item.idarticulo);
        if (!existeArticulo) {
          let articulo = {
            idarticulo: item.idarticulo,
            codigo_interno: item.codigo_interno,
            descripcion: item.descripcion
          };
          _this5.articulos_list.push(articulo);
        }
        ;
      });
    })();
  }
  getItems(idmovimientointerno) {
    var _this6 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref5 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this6._movimientosInternosService.getItems(idmovimientointerno));
          _this6.mov_art_list = items.list;
          resolve(_this6.mov_art_list);
        });
        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }
  // ################# Metodo de filtrado para inputs autocomplete #################
  /**
  * Esta funcion es para filtrar los artículos según el input que se haya ingresado en el buscador de articulos.
  * @param value
  * @returns
  */
  _filterArticulos(value) {
    const filterValue = value.toString().toLowerCase();
    return this.articulos_list.filter(articulo => {
      const codigo_interno = articulo.codigo_interno.toString().toLowerCase().includes(filterValue);
      const descripcion = articulo.descripcion.toString().toLowerCase().includes(filterValue);
      return codigo_interno || descripcion;
    });
  }
  /**
   * Funcion generica para encontrar un item en un arreglo, parametrizable.
   * @param value Valor ingresado por buscador
   * @param array Arreglo donde se compara la busqueda
   * @param param Campo por el que se desea buscar coincidencias
   * @returns Resultado de busqueda
   */
  _filterTextGenerico(value, array, param) {
    const filterValue = value.toString().toLowerCase();
    return array.filter(res => {
      const result = res[`${param}`].toString().toLowerCase().includes(filterValue);
      return result;
    });
  }
  getTextDeposito(option) {
    if (option.descripcion) {
      return option.descripcion;
    }
    if (option.deposito) {
      return option.deposito;
    }
    return option;
  }
  /**
  * Obtenemos la descripcion del articulo seleccionado.
  * @param articulo
  * @returns
  */
  getTextArticulo(articulo) {
    return articulo ? `${articulo.codigo_interno} - ${articulo.descripcion}` : '';
  }
  // ################# Metodos extra #################
  /**
  * Funcion para contar las palabras en las observaciones
  */
  getPalabrasLength() {
    const observaciones = this.form.get('observaciones').value;
    return observaciones ? observaciones.length : 0;
  }
  /**
  * Funcion para verificar si se ha alcanzado el límite de caracteres en las observaciones
  */
  isPalabraMaxLengthReached() {
    return this.getPalabrasLength() <= this.maxPalabras;
  }
  /**
   * Este metodo sirve para agregar o quitar las validaciones de requeridos a los campos del formulario de carga de articulos.
   */
  updateFormValidators() {
    if (this.mov_art_list.length === 0) {
      // Si la grilla está vacía, hacer que los campos sean requeridos
      this.form_carga_articulos.get('articulo').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
      this.form_carga_articulos.get('cantidad').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
      this.form_carga_articulos.get('unidadmedida').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
      this.form_carga_articulos.get('deposito_ingreso').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required);
    } else {
      // Si hay elementos en la grilla, quitar la validación de requerido
      this.form_carga_articulos.get('articulo').clearValidators();
      this.form_carga_articulos.get('cantidad').clearValidators();
      this.form_carga_articulos.get('unidadmedida').clearValidators();
      this.form_carga_articulos.get('deposito_ingreso').clearValidators();
    }
    // Asegurarse de que Angular reevalúe las validaciones
    this.form_carga_articulos.get('articulo').updateValueAndValidity();
    this.form_carga_articulos.get('cantidad').updateValueAndValidity();
    this.form_carga_articulos.get('unidadmedida').updateValueAndValidity();
    this.form_carga_articulos.get('deposito_ingreso').updateValueAndValidity();
  }
  /**
  * Filtro para buscar en la grilla de articulos
  * @param filterValue
  */
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
SaveComponent.ɵfac = function SaveComponent_Factory(t) {
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_3__.MovimientosInternosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-movimiento-interno"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 12,
  vars: 9,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "max-w-[1280px]", "xl:max-w-[1280px]", "xl:min-w-[950px]", "sm:max-w-[950px]", "sm:min-w-[800px]", "sm:rounded-2xl", "xl:max-h-[950px]", "xl:min-h-[850px]", "sm:max-h-[630px]", "sm:min-h-[500px]", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [4, "ngIf"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], ["class", "form-menu p-4", 3, "formGroup", 4, "ngIf"], ["class", "w-full md:flex md:justify-center md:pb-6 md:px-6 mt-auto", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "form-menu", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-2", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/4"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", "readonly", "true", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "hora", "type", "time"], ["appearance", "outline", 1, "w-full", "sm:w-1/2"], ["type", "text", "matInput", "", "formControlName", "deposito_egreso", 3, "matAutocomplete", "ngModelChange"], ["autoActiveFirstOption", "", 3, "displayWith"], ["dep", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "flex", "w-full", "gap-1"], ["appearance", "outline", 1, "w-full", "sm:w-full"], ["type", "text", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete", "ngModelChange"], ["art_carga", "matAutocomplete"], [1, "flex"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "rounded-full", "ml-1", "mt-1", 3, "disabled", "click"], ["width", "22", "height", "22", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.66667 2.66667H6.66667V6.66667H2.66667V2.66667ZM13.3333 2.66667V6.66667H9.33333V2.66667H13.3333ZM9.33333 10H10.6667V8.66667H9.33333V7.33333H10.6667V8.66667H12V7.33333H13.3333V8.66667H12V10H13.3333V12H12V13.3333H10.6667V12H8.66667V13.3333H7.33333V10.6667H9.33333V10ZM10.6667 10V12H12V10H10.6667ZM2.66667 13.3333V9.33333H6.66667V13.3333H2.66667ZM4 4V5.33333H5.33333V4H4ZM10.6667 4V5.33333H12V4H10.6667ZM4 10.6667V12H5.33333V10.6667H4ZM2.66667 7.33333H4V8.66667H2.66667V7.33333ZM6 7.33333H8.66667V10H7.33333V8.66667H6V7.33333ZM7.33333 4H8.66667V6.66667H7.33333V4ZM1.33333 1.33333V4H0V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0L4 0V1.33333H1.33333ZM14.6667 0C15.0203 0 15.3594 0.140476 15.6095 0.390524C15.8595 0.640573 16 0.979711 16 1.33333V4H14.6667V1.33333H12V0H14.6667ZM1.33333 12V14.6667H4V16H1.33333C0.979711 16 0.640573 15.8595 0.390524 15.6095C0.140476 15.3594 0 15.0203 0 14.6667V12H1.33333ZM14.6667 14.6667V12H16V14.6667C16 15.0203 15.8595 15.3594 15.6095 15.6095C15.3594 15.8595 15.0203 16 14.6667 16H12V14.6667H14.6667Z", "fill", "currentColor"], ["formControlName", "unidadmedida", 3, "ngModelChange"], ["matInput", "", "type", "number", "formControlName", "stock_existente", "readonly", "true"], ["formControlName", "deposito_ingreso"], [1, "flex", "w-full", "sm:w-1/2"], ["appearance", "outline", 1, "w-full", "sm:w-full", 3, "keydown.enter"], ["matInput", "", "type", "number", "formControlName", "cantidad"], ["matTooltip", "A\u00F1adir UM", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "mt-2", "ml-2", "sm:ml-4", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 10H10V16H6V10H0V6H6V0H10V6H16V10Z", "fill", "white"], [1, "search-container", "mt-2", "mb-1", "flex"], [1, "relative", "w-full", "md:w-1/3"], ["matInput", "", "placeholder", "Buscar art\u00EDculo", 1, "w-full", "bg-slate-50", "border", "border-gray-200", "rounded-lg", "shadow-md", "py-2", "px-4", "text-sm", "placeholder-gray-500", "text-gray-700", "transition", "duration-300", 3, "keyup"], [1, "absolute", "inset-y-0", "right-4", "flex", "items-center", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M12.9 14.32a8 8 0 111.42-1.42l4.39 4.4a1 1 0 11-1.42 1.41l-4.4-4.39zM8 14a6 6 0 100-12 6 6 0 000 12z", "clip-rule", "evenodd"], [1, "overflow-y-auto", "max-h-[200px]", "h-[200px]", "shadow-md", "rounded-lg"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "codigointerno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "unidadmedida"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "deposito_ingreso"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "rounded-tr-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], [1, "flex", "w-full", "items-center", "my-2", "px-4"], [1, "flex-grow"], [1, "text-gray-700", "text-sm"], ["appearance", "outline", 1, "w-full", "mt-4"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "counter", 3, "ngClass"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["class", "font-light", 4, "ngIf"], [1, "font-light"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-cell", ""], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white", "w-auto"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SaveComponent_spinner_component_8_Template, 1, 0, "spinner-component", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SaveComponent_fuse_alert_9_Template, 2, 4, "fuse-alert", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SaveComponent_form_10_Template, 99, 42, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SaveComponent_div_11_Template, 4, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.mostrarSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltip, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerToggle, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe],
  styles: ["@charset \"UTF-8\";\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  font-size: 0.75rem;\n  color: #C9C9C9; \n}\n\n.counter.reached-max[_ngcontent-%COMP%] {\n  color: #e53e3e; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQSxFQUFBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBLEVBQUEsb0RBQUE7QUFFSiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwLjVyZW07XHJcbiAgICByaWdodDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNDOUM5Qzk7IC8qIENvbG9yIGRlIHRleHRvIGdyaXMgKi9cclxufVxyXG5cclxuLmNvdW50ZXIucmVhY2hlZC1tYXgge1xyXG4gICAgY29sb3I6ICNlNTNlM2U7IC8qIENvbG9yIGRlIHRleHRvIHJvam8gY3VhbmRvIHNlIGFsY2FuemEgZWwgbMOtbWl0ZSAqL1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9tb3ZpbWllbnRvcy1pbnRlcm5vcy9jb21wb25lbnRzL3NhdmUvc2F2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBLEVBQUEsd0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUEsRUFBQSxvREFBQTtBQUVKO0FBQ0Esb3VCQUFvdUIiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAuNXJlbTtcclxuICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBjb2xvcjogI0M5QzlDOTsgLyogQ29sb3IgZGUgdGV4dG8gZ3JpcyAqL1xyXG59XHJcblxyXG4uY291bnRlci5yZWFjaGVkLW1heCB7XHJcbiAgICBjb2xvcjogI2U1M2UzZTsgLyogQ29sb3IgZGUgdGV4dG8gcm9qbyBjdWFuZG8gc2UgYWxjYW56YSBlbCBsw4PCrW1pdGUgKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 66422:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/movimientos-internos.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovimientosInternosModule": () => (/* binding */ MovimientosInternosModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _components_movimientos_internos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movimientos-internos.component */ 42596);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 37714);
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/movimientos-internos.service */ 20024);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 42525);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/shared-component.module */ 46288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);



























const routes = [{
  path: '',
  component: _components_movimientos_internos_component__WEBPACK_IMPORTED_MODULE_3__.MovimientosInternosComponent
}];
class MovimientosInternosModule {}
MovimientosInternosModule.ɵfac = function MovimientosInternosModule_Factory(t) {
  return new (t || MovimientosInternosModule)();
};
MovimientosInternosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: MovimientosInternosModule
});
MovimientosInternosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_5__.MovimientosInternosService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule, _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_8__.SharedComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MovimientosInternosModule, {
    declarations: [_components_movimientos_internos_component__WEBPACK_IMPORTED_MODULE_3__.MovimientosInternosComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule, _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_8__.SharedComponentModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 20024:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/service/movimientos-internos.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovimientosInternosService": () => (/* binding */ MovimientosInternosService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class MovimientosInternosService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el Servicio
   * @param movimiento_interno
   * @returns Crea un item nuevo
   */
  saveMovimientoInterno(movimiento_interno) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.movimiento_internos}`, movimiento_interno);
  }
  /**
   * Funcion en el servicio
   * @param movimiento_interno
   * @returns Item actualizado actualizado
   */
  updateMovimientoInterno(movimiento_interno, idmovimientointerno) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.movimiento_internos}` + '/' + idmovimientointerno, movimiento_interno);
  }
  /**
   * Funcion en el servicio
   * @param idmovimientointerno
   * @returns Elimina un item
   */
  deleteMovimientoInterno(idmovimientointerno) {
    return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.movimiento_internos}` + '/' + idmovimientointerno);
  }
  /**
   *
   * @param idmovimientointerno
   * @returns
   */
  reporteMovimientoInterno(idmovimientointerno) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.reporte_movimiento_internos}` + idmovimientointerno);
  }
  getDepositos(option) {
    let f = '?';
    f += !option ? 'filter[activo]=1' : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.depositos}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getArticulosDepositos(deposito, idarticulo) {
    let f = `?filter[deposito]=${deposito}`;
    f += idarticulo ? `&filter[idarticulo]=${idarticulo}` : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_articulo_depositos}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getUnidadesDeMedidaArticulos(idarticulo) {
    let f = `?filter[idarticulo]=${idarticulo}`;
    f += `&expand=um`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulo_unidad_medidas}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getItems(idmovimientointerno) {
    let f = `?filter[idmovimientointerno]=${idmovimientointerno}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_movimientos}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getUsuarios() {
    let f = `?sort=asc`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.login.view_usuarios}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
}
MovimientosInternosService.ɵfac = function MovimientosInternosService_Factory(t) {
  return new (t || MovimientosInternosService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
MovimientosInternosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MovimientosInternosService,
  factory: MovimientosInternosService.ɵfac
});


/***/ }),

/***/ 46322:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/toolbar.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatToolbar": () => (/* binding */ MatToolbar),
/* harmony export */   "MatToolbarModule": () => (/* binding */ MatToolbarModule),
/* harmony export */   "MatToolbarRow": () => (/* binding */ MatToolbarRow),
/* harmony export */   "throwToolbarMixedModesError": () => (/* binding */ throwToolbarMixedModesError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 15712);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 86477);






// Boilerplate for applying mixins to MatToolbar.
/** @docs-private */
const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];
const _MatToolbarBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
});
class MatToolbarRow {}
MatToolbarRow.ɵfac = function MatToolbarRow_Factory(t) {
  return new (t || MatToolbarRow)();
};
MatToolbarRow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: MatToolbarRow,
  selectors: [["mat-toolbar-row"]],
  hostAttrs: [1, "mat-toolbar-row"],
  exportAs: ["matToolbarRow"]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbarRow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: 'mat-toolbar-row',
      exportAs: 'matToolbarRow',
      host: {
        'class': 'mat-toolbar-row'
      }
    }]
  }], null, null);
})();
class MatToolbar extends _MatToolbarBase {
  constructor(elementRef, _platform, document) {
    super(elementRef);
    this._platform = _platform;
    // TODO: make the document a required param when doing breaking changes.
    this._document = document;
  }
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._checkToolbarMixedModes();
      this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
    }
  }
  /**
   * Throws an exception when developers are attempting to combine the different toolbar row modes.
   */
  _checkToolbarMixedModes() {
    if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      // Check if there are any other DOM nodes that can display content but aren't inside of
      // a <mat-toolbar-row> element.
      const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(node => !(node.classList && node.classList.contains('mat-toolbar-row'))).filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some(node => !!(node.textContent && node.textContent.trim()));
      if (isCombinedUsage) {
        throwToolbarMixedModesError();
      }
    }
  }
}
MatToolbar.ɵfac = function MatToolbar_Factory(t) {
  return new (t || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
};
MatToolbar.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MatToolbar,
  selectors: [["mat-toolbar"]],
  contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
    }
  },
  hostAttrs: [1, "mat-toolbar"],
  hostVars: 4,
  hostBindings: function MatToolbar_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
    }
  },
  inputs: {
    color: "color"
  },
  exportAs: ["matToolbar"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  template: function MatToolbar_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    }
  },
  styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color: inherit;--mdc-outlined-button-label-text-color: inherit}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mat-toolbar',
      exportAs: 'matToolbar',
      inputs: ['color'],
      host: {
        'class': 'mat-toolbar',
        '[class.mat-toolbar-multiple-rows]': '_toolbarRows.length > 0',
        '[class.mat-toolbar-single-row]': '_toolbarRows.length === 0'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      template: "<ng-content></ng-content>\n<ng-content select=\"mat-toolbar-row\"></ng-content>\n",
      styles: [".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color: inherit;--mdc-outlined-button-label-text-color: inherit}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }];
  }, {
    _toolbarRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ContentChildren,
      args: [MatToolbarRow, {
        descendants: true
      }]
    }]
  });
})();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */
function throwToolbarMixedModesError() {
  throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
}
class MatToolbarModule {}
MatToolbarModule.ɵfac = function MatToolbarModule_Factory(t) {
  return new (t || MatToolbarModule)();
};
MatToolbarModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MatToolbarModule
});
MatToolbarModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatToolbarModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      exports: [MatToolbar, MatToolbarRow, _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MatCommonModule],
      declarations: [MatToolbar, MatToolbarRow]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_movimientos-internos_movimientos-internos_module_ts.js.map