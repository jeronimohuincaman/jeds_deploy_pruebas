"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_stock-inicial_stock-inicial_module_ts"],{

/***/ 67181:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/components/filter-menu/filter-menu.component.ts ***!
  \*********************************************************************************************/
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
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/stock-inicial.service */ 43537);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);




















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
  constructor(data, _menuService, _empresaService, datePipe, _stockInicialService) {
    this.data = data;
    this._menuService = _menuService;
    this._empresaService = _empresaService;
    this.datePipe = datePipe;
    this._stockInicialService = _stockInicialService;
    this.usuarios = [];
    this.filterDeposito = [];
    this.filterFechas = [];
    this.stockInicial = []; //Se crea por sí hace falta crear una copia de los datos y manipularlos de una forma más personalizada
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      // activo: new FormControl(-1),
      filtroFechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroFechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      deposito: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1)
    });
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.getDepositos();
    this.getUsuarios();
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
      const Usuarios = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this._stockInicialService.getUsuarios());
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
      const stk_list = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this2._stockInicialService.getDepositos(true));
      _this2.filterDeposito = stk_list.list;
    })();
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_5__.StockInicialService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-stock-inicial"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Deposito");
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDateRangePicker, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9zdG9jay1pbmljaWFsL2NvbXBvbmVudHMvZmlsdGVyLW1lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 88190:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/components/save/save.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/lector-qr/lector-qr.component */ 5729);
/* harmony import */ var _service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/stock-inicial.service */ 43537);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);



























function SaveComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fuse-alert", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r0._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0._alertConfig.message, " ");
  }
}
function SaveComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", deposito_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", deposito_r22.descripcion, " ");
  }
}
function SaveComponent_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_button_33_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r23.limpiarCasillero("deposito"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", articulo_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", articulo_r25.codigo_interno, " - ", articulo_r25.descripcion, " ");
  }
}
function SaveComponent_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r26.limpiarCasillero("articulo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_mat_option_53_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("(x", um_r28.factor_um, " ", um_r28.um_base, ")");
  }
}
function SaveComponent_mat_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SaveComponent_mat_option_53_i_2_Template, 2, 2, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", um_r28.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", um_r28.descripcion_um, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", um_r28.factor_um != 1);
  }
}
function SaveComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Codigo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r9.color_primario ? "" : ctx_r9.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r9.color_primario || "");
  }
}
function SaveComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r31.codigo_interno, " ");
  }
}
function SaveComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r11.color_primario ? "" : ctx_r11.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r11.color_primario || "");
  }
}
function SaveComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r32.descripcion_articulo, " ");
  }
}
function SaveComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Unidad de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r13.color_primario ? "" : ctx_r13.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r13.color_primario || "");
  }
}
function SaveComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r33.descripcion_um, " ");
  }
}
function SaveComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r15.color_primario ? "" : ctx_r15.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r15.color_primario || "");
  }
}
function SaveComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r34.cantidad, " ");
  }
}
function SaveComponent_th_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "th", 67);
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r17.color_primario ? "" : ctx_r17.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r17.color_primario || "");
  }
}
function SaveComponent_td_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 66)(1, "button", 3, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_td_79_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r38);
      const movimiento_r35 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.deleteMovimiento(movimiento_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_tr_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 70);
  }
}
function SaveComponent_tr_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 71);
  }
}
function SaveComponent_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 72)(1, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    "reached-max": a0
  };
};
class SaveComponent {
  constructor(data, _stockInicialService, _empresaService, datePipe, alert, dialogRef, dialogo) {
    this.data = data;
    this._stockInicialService = _stockInicialService;
    this._empresaService = _empresaService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.columns = ['codigointerno', 'articulo', 'unidadmedida', 'cantidad', 'acciones'];
    this.articulos_list = [];
    this.unidades_de_medida = [];
    this.mov_art_list = [];
    this.mov_art_list_deleted = [];
    this.maxPalabras = 50;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.deposito_default = 0;
    this.stock_inicial = this.data ? this.data : null;
    this.title = this.stock_inicial?.idstockinicial ? 'Editar stock inicial' : 'Nuevo stock inicial';
    this.user = JSON.parse(localStorage.getItem('user'));
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
      this.deposito_default = empresa.deposito_default;
    });
  }
  ngOnInit() {
    // Load empresa data
    this._empresaService.getEmpresa();
    this.newForm();
    this.exist();
    this.subscribeAlert();
    // Escuchamos los cambios en el control de 'articulo' para filtrar mientras escribe
    this.form_carga_articulos.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300),
    // Evita demasiadas llamadas consecutivas
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.distinctUntilChanged)(),
    // Solo procede si el valor cambia
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)(value => {
      const idarticulo = typeof value === 'object' ? value.idarticulo : null;
      const filterLike = typeof value === 'string' ? value : null;
      return this._stockInicialService.getArticulos(idarticulo, filterLike);
    })).subscribe(response => {
      this.filteredArticulos = response.list;
    });
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  newForm() {
    const [dia, mes, anio] = this.stock_inicial ? this.stock_inicial.fecha.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    if (this.stock_inicial) {
      //Sí existe el stock inicial, cargo la grilla con sus articulos...
      this.getItems(this.stock_inicial.idstockinicial).then(items => {
        // Mapeo la cantidad
        this.mov_art_list = items.map(m => {
          return {
            idarticulo: m.idarticulo,
            cantidad: parseFloat(m.cantidad),
            idunidadmedida: m.idunidadmedida,
            descripcion_articulo: m.descripcion_articulo,
            descripcion_um: m.descripcion_um,
            codigo_interno: m.codigo_interno_articulo,
            stock: m.stock_minimo_articulo
          };
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.mov_art_list);
        if (this.mov_art_list.length != 0) {
          this.form.get('deposito').disable();
        } else {
          this.form.get('deposito').enable();
        }
      });
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
      user: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this.user ? this.user.name : ''),
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this.stock_inicial?.fecha ? this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
      hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this.stock_inicial?.hora ? this.stock_inicial.hora : this.datePipe.transform(new Date(), 'HH:mm'), [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required]),
      deposito: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this.stock_inicial ? this.stock_inicial.descripcion_deposito : '', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl(this.stock_inicial ? this.stock_inicial.observaciones : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.maxLength(this.maxPalabras)])
    });
    this.form_carga_articulos = new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroup({
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required)
    });
    this.updateFormValidators();
  }
  // ################# Carga De Movimientos #################
  /**
   * Esta funcion añade un nuevo item a la grilla dentro del saveComponent.
   * @var movimiento_articulo Encapsula un objeto con los datos que deseamos mostrar en la tabla.
   */
  addMovimiento(movimiento) {
    if (this.form.get('deposito').value != '') {
      if (movimiento) {
        let movimiento_articulo = {
          idarticulo: movimiento.articulo.idarticulo,
          cantidad: movimiento.cantidad,
          idunidadmedida: movimiento.unidad_medida,
          descripcion_articulo: movimiento.articulo.descripcion,
          descripcion_um: movimiento.unidadmedida_descripcion,
          codigo_interno: movimiento.articulo.codigo_interno
        };
        this.mov_art_list = [movimiento_articulo, ...this.mov_art_list]; // Se agrega el nuevo articulo al comienzo de la lista para que siempre aparezca primero en la grilla
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.mov_art_list); //Actualizo la tabla
        if (this.mov_art_list.length != 0) {
          this.form.get('deposito').disable();
        }
        // Actualizar validaciones según el estado de la grilla
        this.updateFormValidators();
        this.limpiarCasillero('carga_exitosa'); // Limpio casillerros para que este listo para volver a cargar
        this.alert.success("Artículo añadido con éxito");
      }
    } else {
      this.alert.warning("Seleccione un Depósito");
    }
  }
  /**
   * El resultado de esta operación es un nuevo
   * array que contiene todos los elementos de la lista original,
   * excepto el artículo que se desea eliminar.
   * @param articulo
   */
  deleteMovimiento(articulo) {
    this.mov_art_list = this.mov_art_list.filter(item => {
      return item !== articulo;
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.mov_art_list);
    if (this.mov_art_list.length === 0) {
      this.form.get('deposito').enable();
    }
    this.alert.success("Artículo eliminado con éxito");
  }
  /**
   * Esta funcion carga solamente las unidades de medida asociadas a un articulo en particular.
   * @param $event
   */
  seleccionItem($event, info) {
    if ($event.idarticulo) {
      this.form_carga_articulos.get('unidadmedida').enable();
      this.getUnidadesDeMedidaArticulos($event.idarticulo);
    }
    //Al seleccionar un deposito...
    if ($event.iddeposito) {
      this.form_carga_articulos.enable();
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
      this.form_carga_articulos.get('cantidad').setValue('');
    }
    if (input === 'deposito') {
      this.form_carga_articulos.disable();
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
    }
    if (input === 'carga_exitosa') {
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
    }
  }
  onCargar($event) {
    if ($event?.key === 'Enter') {
      $event.preventDefault();
    }
    if (!this.form_carga_articulos.get('unidadmedida').value || !this.form_carga_articulos.get('articulo').value || !this.form_carga_articulos.get('cantidad').value) {
      return this.alert.warning('Por favor, complete todos los campos de la carga de articulo');
    }
    if (!this.form_carga_articulos.valid) {
      return this.alert.error('Debe seleccionar un artículo');
    } else {
      let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
      let articulo = {
        articulo: this.form_carga_articulos.get('articulo').value,
        unidad_medida: this.form_carga_articulos.get('unidadmedida').value,
        cantidad: this.form_carga_articulos.get('cantidad').value,
        unidadmedida_descripcion: unidadmedida.descripcion_um
      };
      let existeMovimiento = this.mov_art_list.find(movimiento => movimiento.idarticulo === this.form_carga_articulos.get('articulo').value.idarticulo && movimiento.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value);
      if (existeMovimiento) {
        this.form_carga_articulos.get('unidadmedida').setValue('');
        return this.alert.warning('Ya ha selecionado este articulo');
      }
      this.addMovimiento(articulo);
    }
  }
  onSubmit() {
    // Verificar la longitud de las observaciones
    if (!this.isPalabraMaxLengthReached()) {
      return this.alert.error(`La longitud máxima de observaciones es de ${this.maxPalabras} caractemovimiento.`);
    }
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      let fh = this.datePipe.transform(this.form.get('fecha').value, 'yyyy-MM-dd'); //Esta linea hace que siempre se mantenga el formato de la facha cuando se modifica manualmente.
      let articulos = this.mov_art_list.map(objeto => ({
        idarticulo: objeto.idarticulo,
        cantidad: Number(objeto.cantidad),
        idunidadmedida: objeto.idunidadmedida
      }));
      if (articulos.length === 0) {
        return this.alert.warning('Debe ingresar un articulo al stock inicial');
      }
      const payload = {
        idusuario: this.user.id,
        fecha_hora: `${fh} ${this.form.get('hora').value}`,
        hora: this.form.get('hora').value,
        iddeposito: this.form.get('deposito').value.iddeposito,
        observaciones: this.form.get('observaciones').value,
        articulos: articulos
      };
      if (this.stock_inicial?.idstockinicial) {
        let depo = this.depositos.find(d => d.iddeposito === this.stock_inicial.iddeposito); //Hago esto porque cuando es una edicion me levanta el texto del deposito y, sino lo cambio durante la edicion, al persistr pincha porque le estoy enviando un string en vez de un number en 'iddeposito'.
        payload['iddeposito'] = depo.iddeposito;
        this._stockInicialService.updateStockInicial(payload, this.stock_inicial.idstockinicial).subscribe({
          next: data => {
            if (data) {
              this.editadoExitosamente.emit();
              this.dialogRef.close(data);
            }
          }
        });
      } else {
        this._stockInicialService.saveStockInicial(payload).subscribe({
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
    let deposito = this.form.get('deposito').value;
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
      this._stockInicialService.getArticulos(idarticulo, null).subscribe(response => {
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
  /**
  * Si existe un stockinicial le mando 'true' a fondos y nada a TM para que me traiga todos los fondos y TMs al editar.
  * Caso contrario, si se va a crear un stockinicial, llamo a los fondos sin enviarle un parametro asi me trae solo los activos y
  * le envio un paramtro a los tipos de stockinicials para que me traiga los activos.
  */
  exist() {
    if (this.stock_inicial?.idstockinicial) {
      this.getDepositos(true);
    } else {
      this.getDepositos();
    }
  }
  getArticulos() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(_this._stockInicialService.getArticulos());
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.articulos = articulos.result;
          _this.articulos_list = _this.articulos;
          _this.filteredArticulos = _this.form_carga_articulos.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.map)(value => _this._filterArticulos(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidadesDeMedida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(_this2._stockInicialService.getUnidadesDeMedidaArticulos(idarticulo));
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          let um_base; // Asigno una variable global para que cada UM sepa cual es la um base (factor = '1.00')
          _this2.unidades_de_medida = unidadesDeMedida.list.sort((a, b) => a.factor - b.factor).map(unidad => {
            //Convierto en numero
            unidad.factor = parseFloat(unidad.factor);
            // Almaceno solo la um base de un articulo 
            if (unidad.factor === 1) {
              um_base = unidad.um.descripcion;
            }
            return {
              idunidadmedida: unidad.idunidadmedida,
              descripcion_um: unidad.um.descripcion,
              factor_um: unidad.factor,
              um_base: um_base
            };
          });
          // Autoasigna la primera unidad de medida al control del formulario
          if (_this2.unidades_de_medida.length > 0) {
            _this2.form_carga_articulos.get('unidadmedida').setValue(_this2.unidades_de_medida[0].idunidadmedida);
            _this2.seleccionItem({
              um: _this2.unidades_de_medida[0].idunidadmedida
            });
          }
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  getDepositos(option) {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Depositos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(_this3._stockInicialService.getDepositos(option));
      new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.depositos = Depositos.list;
          // Filtrar y autoasignar el depósito por defecto
          const depositoPorDefecto = _this3.depositos.find(deposito => deposito.iddeposito === _this3.deposito_default);
          if (depositoPorDefecto && !_this3.stock_inicial) {
            _this3.form.get('deposito').setValue(depositoPorDefecto);
          }
          _this3.filteredDepositos = _this3.form.get('deposito').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.map)(value => _this3._filterDepositos(value)));
          resolve(true);
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Listamos los movimientos asociados a este registro
   * @param idstockinicial
   * @returns
   */
  getItems(idstockinicial) {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.firstValueFrom)(_this4._stockInicialService.getItems(idstockinicial));
          _this4.mov_art_list = items.list;
          resolve(_this4.mov_art_list);
        });
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  // ################# Metodo de filtrado para inputs autocomplete #################
  _filterDepositos(deposito) {
    const filterValue = deposito.toString().toLowerCase();
    return this.depositos.filter(deposito => deposito.descripcion.toLowerCase().includes(filterValue));
  }
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
  // ################# Metodos para obtener textos de input #################
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
      this.form_carga_articulos.get('articulo').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required);
      this.form_carga_articulos.get('cantidad').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required);
      this.form_carga_articulos.get('unidadmedida').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required);
    } else {
      // Si hay elementos en la grilla, quitar la validación de requerido
      this.form_carga_articulos.get('articulo').clearValidators();
      this.form_carga_articulos.get('cantidad').clearValidators();
      this.form_carga_articulos.get('unidadmedida').clearValidators();
    }
    // Asegurarse de que Angular reevalúe las validaciones
    this.form_carga_articulos.get('articulo').updateValueAndValidity();
    this.form_carga_articulos.get('cantidad').updateValueAndValidity();
    this.form_carga_articulos.get('unidadmedida').updateValueAndValidity();
  }
}
SaveComponent.ɵfac = function SaveComponent_Factory(t) {
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_3__.StockInicialService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-stock-inicial"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 93,
  vars: 49,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-120", "sm:w-min-w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "form-menu", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-2", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/4"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "hora", "type", "time"], ["matInput", "", "placeholder", "Nombre del menu", "formControlName", "user", 3, "readonly"], ["type", "text", "matInput", "", "formControlName", "deposito", 3, "matAutocomplete", "ngModelChange"], ["autoActiveFirstOption", "", 3, "displayWith"], ["dep", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], [3, "formGroup"], [1, "flex", "w-full", "gap-1"], ["appearance", "outline", 1, "w-full", "sm:w-full"], ["type", "text", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete", "ngModelChange"], ["art_carga", "matAutocomplete"], [1, "flex"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "rounded-full", "ml-1", "mt-1", 3, "disabled", "click"], ["width", "22", "height", "22", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.66667 2.66667H6.66667V6.66667H2.66667V2.66667ZM13.3333 2.66667V6.66667H9.33333V2.66667H13.3333ZM9.33333 10H10.6667V8.66667H9.33333V7.33333H10.6667V8.66667H12V7.33333H13.3333V8.66667H12V10H13.3333V12H12V13.3333H10.6667V12H8.66667V13.3333H7.33333V10.6667H9.33333V10ZM10.6667 10V12H12V10H10.6667ZM2.66667 13.3333V9.33333H6.66667V13.3333H2.66667ZM4 4V5.33333H5.33333V4H4ZM10.6667 4V5.33333H12V4H10.6667ZM4 10.6667V12H5.33333V10.6667H4ZM2.66667 7.33333H4V8.66667H2.66667V7.33333ZM6 7.33333H8.66667V10H7.33333V8.66667H6V7.33333ZM7.33333 4H8.66667V6.66667H7.33333V4ZM1.33333 1.33333V4H0V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0L4 0V1.33333H1.33333ZM14.6667 0C15.0203 0 15.3594 0.140476 15.6095 0.390524C15.8595 0.640573 16 0.979711 16 1.33333V4H14.6667V1.33333H12V0H14.6667ZM1.33333 12V14.6667H4V16H1.33333C0.979711 16 0.640573 15.8595 0.390524 15.6095C0.140476 15.3594 0 15.0203 0 14.6667V12H1.33333ZM14.6667 14.6667V12H16V14.6667C16 15.0203 15.8595 15.3594 15.6095 15.6095C15.3594 15.8595 15.0203 16 14.6667 16H12V14.6667H14.6667Z", "fill", "currentColor"], ["appearance", "outline", 1, "w-full", "sm:w-1/2"], ["formControlName", "unidadmedida", 3, "ngModelChange"], [1, "flex", "w-full", "sm:w-1/2"], ["appearance", "outline", 1, "w-full", "sm:w-full", 3, "keydown.enter"], ["matInput", "", "type", "number", "formControlName", "cantidad"], ["matTooltip", "A\u00F1adir UM", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "mt-2", "ml-2", "sm:ml-4", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 10H10V16H6V10H0V6H6V0H10V6H16V10Z", "fill", "white"], [1, "overflow-y-auto", "max-h-[200px]", "h-[200px]", "shadow-md", "rounded-lg"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "codigointerno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "unidadmedida"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "rounded-tr-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "mt-4"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "counter", 3, "ngClass"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["class", "font-light", 4, "ngIf"], [1, "font-light"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-cell", ""], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white", "w-auto"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SaveComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "input", 10)(14, "mat-datepicker-toggle", 11)(15, "mat-datepicker", null, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-form-field", 9)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Hora");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-form-field", 9)(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 9)(26, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Dep\u00F3sitos");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.seleccionItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-autocomplete", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, SaveComponent_mat_option_31_Template, 2, 2, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, SaveComponent_button_33_Template, 3, 0, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "form", 20)(35, "div", 8)(36, "div", 21)(37, "mat-form-field", 22)(38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Art\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_input_ngModelChange_40_listener($event) {
        return ctx.seleccionItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-autocomplete", 16, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, SaveComponent_mat_option_43_Template, 2, 3, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](44, SaveComponent_button_44_Template, 3, 0, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 25)(46, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_46_listener() {
        return ctx.etiquetaArticulo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "svg", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-form-field", 29)(50, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "UM");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-select", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_mat_select_ngModelChange_52_listener($event) {
        return ctx.seleccionItem({
          um: $event
        });
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, SaveComponent_mat_option_53_Template, 3, 3, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "div", 31)(55, "mat-form-field", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function SaveComponent_Template_mat_form_field_keydown_enter_55_listener($event) {
        return ctx.onCargar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](58, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](59, "div", 25)(60, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_60_listener() {
        return ctx.onCargar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "svg", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](62, "path", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 37)(64, "table", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](65, 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, SaveComponent_th_66_Template, 2, 4, "th", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, SaveComponent_td_67_Template, 2, 1, "td", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](68, 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, SaveComponent_th_69_Template, 2, 4, "th", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, SaveComponent_td_70_Template, 2, 1, "td", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](71, 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, SaveComponent_th_72_Template, 2, 4, "th", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, SaveComponent_td_73_Template, 2, 1, "td", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](74, 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, SaveComponent_th_75_Template, 2, 4, "th", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](76, SaveComponent_td_76_Template, 2, 1, "td", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](77, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, SaveComponent_th_78_Template, 1, 4, "th", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, SaveComponent_td_79_Template, 5, 0, "td", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](80, SaveComponent_tr_80_Template, 1, 0, "tr", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](81, SaveComponent_tr_81_Template, 1, 0, "tr", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, SaveComponent_div_82_Template, 3, 0, "div", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "mat-form-field", 52)(84, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85, "Observaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](86, "textarea", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](89, "div", 55)(90, "button", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_90_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "span", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](92, "Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](30);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](42);
      let tmp_22_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r1)("min", ctx.minDate)("max", ctx.maxDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("readonly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayWith", ctx.getTextDeposito);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 45, ctx.filteredDepositos));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("deposito").value && ctx.mov_art_list.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form_carga_articulos);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matAutocomplete", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayWith", ctx.getTextArticulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.filteredArticulos);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form_carga_articulos.get("articulo").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.color_primario)("color", ctx.color_secundario);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !((tmp_22_0 = ctx.form.get("deposito")) == null ? null : tmp_22_0.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.unidades_de_medida);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.color_primario);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](47, _c0, !ctx.isPalabraMaxLengthReached()));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx.getPalabrasLength(), "/", ctx.maxPalabras, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_28__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__.MatTooltip, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_31__.MatDatepickerToggle, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_32__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe],
  styles: ["@charset \"UTF-8\";\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  font-size: 0.75rem;\n  color: #C9C9C9; \n}\n\n.counter.reached-max[_ngcontent-%COMP%] {\n  color: #e53e3e; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQSxFQUFBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBLEVBQUEsb0RBQUE7QUFFSiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwLjVyZW07XHJcbiAgICByaWdodDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNDOUM5Qzk7IC8qIENvbG9yIGRlIHRleHRvIGdyaXMgKi9cclxufVxyXG5cclxuLmNvdW50ZXIucmVhY2hlZC1tYXgge1xyXG4gICAgY29sb3I6ICNlNTNlM2U7IC8qIENvbG9yIGRlIHRleHRvIHJvam8gY3VhbmRvIHNlIGFsY2FuemEgZWwgbMOtbWl0ZSAqL1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9zdG9jay1pbmljaWFsL2NvbXBvbmVudHMvc2F2ZS9zYXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUEsRUFBQSx3QkFBQTtBQUVKOztBQUNBO0VBQ0ksY0FBQSxFQUFBLG9EQUFBO0FBRUo7QUFDQSxvdUJBQW91QiIsInNvdXJjZXNDb250ZW50IjpbIi5jb3VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMC41cmVtO1xyXG4gICAgcmlnaHQ6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiAjQzlDOUM5OyAvKiBDb2xvciBkZSB0ZXh0byBncmlzICovXHJcbn1cclxuXHJcbi5jb3VudGVyLnJlYWNoZWQtbWF4IHtcclxuICAgIGNvbG9yOiAjZTUzZTNlOyAvKiBDb2xvciBkZSB0ZXh0byByb2pvIGN1YW5kbyBzZSBhbGNhbnphIGVsIGzDg8KtbWl0ZSAqL1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 59815:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/components/stock-inicial.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockInicialComponent": () => (/* binding */ StockInicialComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 88190);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 67181);
/* harmony import */ var _service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/stock-inicial.service */ 43537);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 83677);























class StockInicialComponent {
  constructor(_stockInicialService, _empresaService, _menuService, _searchService, dialogo, confirm, alert, datePipe, router, _headerTextService) {
    this._stockInicialService = _stockInicialService;
    this._empresaService = _empresaService;
    this._menuService = _menuService;
    this._searchService = _searchService;
    this.dialogo = dialogo;
    this.confirm = confirm;
    this.alert = alert;
    this.datePipe = datePipe;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableDataSource();
    this.stockInicial = []; //Se crea por sí hace falta crear una copia de los datos y manipularlos de una forma más personalizada
    this.column_params = ['fecha', 'hora', 'nick_usuario', 'descripcion_deposito', 'acciones'];
    this.headers = ['Fecha', 'Hora', 'Responsable', 'Deposito', 'Acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['descripcion_deposito'];
    this.filter = {
      activo: -1,
      deposito: -1,
      usuario: ''
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stock.view_stock_inicials + '?sort=-fecha';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('');
    this.stkMovimientos = [];
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    this._headerTextService.setTitulo(this.router);
    /**
    * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
    */
    this.funcionesObjeto = [{
      nombre_boton: "Editar",
      functionName: 'editar',
      iconoAccion: stock_inicial => stock_inicial.puede_modificar === true ? 'jedstion:editar' : '',
      iconoAccionado: stock_inicial => '',
      iconoDeshabilitado: stock_inicial => stock_inicial.puede_modificar === false ? 'jedstion:editar_disabled' : ''
    }, {
      nombre_boton: "Eliminar",
      functionName: 'eliminar',
      iconoAccion: stock_inicial => stock_inicial.puede_eliminar === true ? 'jedstion:eliminar' : '',
      iconoAccionado: stock_inicial => '',
      iconoDeshabilitado: stock_inicial => stock_inicial.puede_eliminar === false ? 'jedstion:eliminar_disabled' : ''
    }];
  }
  ngOnInit() {
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)()).subscribe(value => {
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
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter,
      data: this.tabla.getElementosExistentes()
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          // this.extraParams += this.filter.activo != -1 ? "&filter[activo]=" + this.filter.activo : '';
          this.extraParams = this.filter.deposito != -1 ? "&filter[iddeposito]=" + this.filter.deposito : '';
          this.extraParams += this.filter.usuario != '' ? "&filter[nick_usuario]=" + this.filter.usuario : '';
          this.extraParams += this.filter.filtroFechaInicio != null ? "&filter[fecha][gte]=" + this.filter.filtroFechaInicio : '';
          this.extraParams += this.filter.filtroFechaFin != null ? "&filter[fecha][lte]=" + this.filter.filtroFechaFin : '';
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
        if (event.params.data.puede_modificar) {
          this.updateStockInicial(event);
        }
        break;
      case 'eliminar':
        if (event.params.data.puede_eliminar) {
          this.deleteStockInicial(event);
        }
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveStockInicial() {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Stock inicial creado con éxito.");
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  /**
   * Esta funcion modifica un item
   * @param event
   */
  updateStockInicial(event) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.editadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Stock inicial editado con éxito.");
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  /**
   * Esta funcion elimina un item
   * @param event
   */
  deleteStockInicial(event) {
    this.confirm.open({
      title: "Eliminar Stock inicial " + event.params.data.fecha,
      message: "¿Desea eliminar el Stock inicial: " + event.params.data.fecha + "?",
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
        this._stockInicialService.deleteStockInicial(event.params.data.idstockinicial).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Stock inicial eliminado con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error(error);
            this.alert.warning("Este Stock inicial no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
StockInicialComponent.ɵfac = function StockInicialComponent_Factory(t) {
  return new (t || StockInicialComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_5__.StockInicialService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_7__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_8__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_9__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_10__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_11__.HeaderTextService));
};
StockInicialComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: StockInicialComponent,
  selectors: [["app-stock-inicial"]],
  viewQuery: function StockInicialComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaComponent, 5);
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
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 12,
  vars: 15,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "fixed", "right-10"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], ["save", ""], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "pr-2", "pl-2", "mt-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function StockInicialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function StockInicialComponent_Template_button_click_3_listener() {
        return ctx.saveStockInicial();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Nuevo Stock Inicial ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 9)(11, "app-tabla-dinamica", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("functionEmitter", function StockInicialComponent_Template_app_tabla_dinamica_functionEmitter_11_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "ssp")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1pbmljaWFsLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9zdG9jay1pbmljaWFsL2NvbXBvbmVudHMvc3RvY2staW5pY2lhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 43537:
/*!******************************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/service/stock-inicial.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockInicialService": () => (/* binding */ StockInicialService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class StockInicialService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el servicio
   * - Esta funcion retorna los sotcks iniciales.
   * @returns sotcks iniciales
   */
  getStockInicial(sort) {
    let f = '?expand=usuario,deposito,stkMovimientos.idarticulo0,stkMovimientos.idunidadmedida0&';
    f += sort?.filter?.sort == 'desc' ? 'sort=fecha_hora&' : 'sort=-fecha_hora&';
    f += sort?.filter?.deposito ? `filter[iddeposito]=${sort.filter.deposito}&` : '';
    f += sort?.filter?.usuario ? `filter[idusuario]=${sort.filter.usuario}&` : '';
    f += sort?.paginado?.pagination ? '&pagination=1&' : '';
    f += sort?.paginado?.perpage ? 'per-page=' + sort.paginado.perpage + '&' : '';
    f += sort?.paginado?.currentPage ? 'page=' + sort.paginado.currentPage + '&' : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.stock_inicial}${f}`, {
      observe: 'response'
    }).subscribe(resp => {
      this._authService.accessToken = resp.token, subject.next({
        'list': resp.result,
        'totalPages': resp.headers.get('x-pagination-page-count'),
        'totalCount': resp.headers.get('x-pagination-total-count')
      });
    });
    return subject.asObservable();
  }
  getItems(idstockinicial) {
    let f = `?filter[idstockinicial]=${idstockinicial}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_movimientos}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getArticulos(idarticulo, filterLike) {
    let f = `?filter[activo]=1&pagination=1&per-page=10&page=1`;
    if (idarticulo) {
      f += `&filter[idarticulo]=${idarticulo}`;
    } else if (filterLike) {
      f += `&filter[or][0][codigo_interno][like]=${filterLike}&filter[or][1][descripcion][like]=${filterLike}`;
    }
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos}${f}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => resp)).subscribe(resp => {
      this._authService.accessToken = resp.token, subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getDepositos(option) {
    let f = '?';
    f += !option ? 'filter[activo]=1' : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.depositos}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token, subject.next({
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
      // this._authService.accessToken = resp.token,
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
  /**
   * Funcion en el Servicio
   * @param stock_inicial
   * @returns Crea un item nuevo
  */
  saveStockInicial(stock_inicial) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.stock_inicial}`, stock_inicial);
  }
  /**
   * Funcion en el servicio
   * @param stock_inicial
   * @returns Item actualizado actualizado
  */
  updateStockInicial(stock_inicial, idstockinicial) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.stock_inicial}` + '/' + idstockinicial, stock_inicial);
  }
  /**
   * Funcion en el servicio
   * @param idstockinicial
   * @returns Elimina un item
  */
  deleteStockInicial(idstockinicial) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.stock_inicial + '/' + idstockinicial);
  }
}
StockInicialService.ɵfac = function StockInicialService_Factory(t) {
  return new (t || StockInicialService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
StockInicialService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: StockInicialService,
  factory: StockInicialService.ɵfac
});


/***/ }),

/***/ 21625:
/*!*********************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/stock-inicial.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockInicialModule": () => (/* binding */ StockInicialModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_stock_inicial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stock-inicial.component */ 59815);
/* harmony import */ var _service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/stock-inicial.service */ 43537);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/save/save.component */ 88190);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 86907);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 67181);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);

























const routes = [{
  path: '',
  component: _components_stock_inicial_component__WEBPACK_IMPORTED_MODULE_0__.StockInicialComponent
}];
class StockInicialModule {}
StockInicialModule.ɵfac = function StockInicialModule_Factory(t) {
  return new (t || StockInicialModule)();
};
StockInicialModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: StockInicialModule
});
StockInicialModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_1__.StockInicialService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_4__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](StockInicialModule, {
    declarations: [_components_stock_inicial_component__WEBPACK_IMPORTED_MODULE_0__.StockInicialComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_2__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_stock-inicial_stock-inicial_module_ts.js.map