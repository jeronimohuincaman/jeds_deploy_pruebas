"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_compras_ordenes-de-compra_ordenes-de-compra_module_ts"],{

/***/ 48965:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/compras/ordenes-de-compra/components/addArticulo/add-articulo.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddArticuloComponent: () => (/* binding */ AddArticuloComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 89566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/ordenes-de-compra.service */ 74114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);

var _class;



















function AddArticuloComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", articulo_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", articulo_r4.descripcion, " ");
  }
}
function AddArticuloComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddArticuloComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.limpiarCasillero());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AddArticuloComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", um_r7.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](um_r7.um.descripcion);
  }
}
class AddArticuloComponent {
  constructor(data, _stockInicialService, datePipe, alert, dialogRef, dialogo) {
    this.data = data;
    this._stockInicialService = _stockInicialService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.columns = ['articulo', 'codigointerno', 'cantidad', 'unidadmedida', 'acciones'];
    this.unidades_de_medida = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
    this.title = 'Añadir articulo';
  }
  ngOnInit() {
    this.newForm();
    this.getArticulos();
  }
  getArticulos() {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this._stockInicialService.getArticulos());
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.articulos = articulos.list;
          _this.filteredArticulos = _this.form.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(value => _this._filterArticulos(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  _filterArticulos(value) {
    const filterValue = value.toString().toLowerCase();
    return this.articulos.filter(articulo => articulo.descripcion.toLowerCase().includes(filterValue));
  }
  getTextArticulo(option) {
    return option ? option.descripcion : '';
  }
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidadesDeMedida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this2._stockInicialService.getUnidadesDeMedidaArticulos(idarticulo));
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.unidades_de_medida = unidadesDeMedida.list;
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Esta funcion carga solamente las unidades de medida asociadas a un articulo en particular.
   * @param $event
   */
  seleccionArticulo($event) {
    if ($event.idarticulo) {
      this.getUnidadesDeMedidaArticulos($event.idarticulo);
    }
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero() {
    this.form.get('articulo').setValue('');
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      importe: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
      let articulo = {
        articulo: this.form.get('articulo').value,
        unidad_medida: this.form.get('unidadmedida').value,
        cantidad: this.form.get('cantidad').value,
        importe: this.form.get('importe').value,
        unidadmedida_descripcion: unidadmedida.um.descripcion
      };
      this.onCloseMenu(articulo);
    }
  }
  onCloseMenu(articulo) {
    this.dialogRef.close(articulo ? articulo : false);
  }
}
_class = AddArticuloComponent;
_class.ɵfac = function AddArticuloComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_2__.OrdenesDeCompraService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-add-articulo-movimientos-internos"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 36,
  vars: 9,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-120", "sm:w-min-w-120", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "flex", "gap-1"], ["appearance", "outline", 1, "w-1/2"], ["type", "text", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete", "ngModelChange"], ["autoActiveFirstOption", "", 3, "displayWith"], ["art", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "w-1/3"], ["matInput", "", "type", "number", "formControlName", "cantidad"], ["formControlName", "unidadmedida"], ["matInput", "", "type", "number", "formControlName", "importe"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"]],
  template: function AddArticuloComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddArticuloComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 5)(9, "div")(10, "div", 6)(11, "mat-form-field", 7)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Art\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AddArticuloComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.seleccionArticulo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-autocomplete", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AddArticuloComponent_mat_option_17_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AddArticuloComponent_button_19_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 13)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-form-field", 7)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "UM");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, AddArticuloComponent_mat_option_28_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 13)(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Importe");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17)(34, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddArticuloComponent_Template_button_click_34_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " A\u00F1adir ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.getTextArticulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 7, ctx.filteredArticulos));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("articulo").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.unidades_de_medida);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 26153:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/compras/ordenes-de-compra/components/filter-menu/filter-menu.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterMenuComponent: () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ 94748);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/date-format */ 89566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var app_modules_compras_ordenes_de_compra_service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/compras/ordenes-de-compra/service/ordenes-de-compra.service */ 74114);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);

var _class;

















function FilterMenuComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.limpiarCasillero());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FilterMenuComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", proveedor_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", proveedor_r7.RazonSocial, " ");
  }
}
function FilterMenuComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 25, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.limpiarCasillero(_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
class FilterMenuComponent {
  constructor(data, _menuService, datePipe, _ordenesDeCompraService) {
    this.data = data;
    this._menuService = _menuService;
    this.datePipe = datePipe;
    this._ordenesDeCompraService = _ordenesDeCompraService;
    this.proveedores = [];
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      filtroFechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      filtroFechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
    });
    this.formFilters.patchValue(this.data.filter);
    this.getProveedores();
  }
  resetFilters() {
    this.formFilters.reset({
      proveedor: {
        Codigo: -1,
        RazonSocial: ''
      },
      filtroFechaInicio: '',
      filtroFechaFin: ''
    });
  }
  onCloseMenu(data = {
    proveedor: -1,
    filtroFechaInicio: null,
    filtroFechaFin: null
  }) {
    if (data) {
      data.filtroFechaInicio = this.datePipe.transform(this.formFilters.get('filtroFechaInicio').value, 'yyyy-MM-dd');
      data.filtroFechaFin = this.datePipe.transform(this.formFilters.get('filtroFechaFin').value, 'yyyy-MM-dd');
      if (data.proveedor) {
        //Sí existe un proveedor...
        if (data.proveedor.Codigo) {
          //Sí existe un proveedor con codigo...
          data.proveedor = {
            Codigo: data.proveedor.Codigo,
            RazonSocial: data.proveedor.RazonSocial
          }; //...Encapsulo solo lo que necesito para poder utilizaro en la funcion getText() y para poder filtrar en el servicio.
        }
      } else {
        //Sí no existe un proveedor...
        data.proveedor = {
          Codigo: -1,
          RazonSocial: ''
        }; //...Encapsulo los datos por defecto
      }
    }

    this._menuService.close(data);
  }
  /**
  * Funcion para limpiar los filtros de rango de fechas
  */
  limpiarCasillero($event) {
    if (!$event) {
      if (this.formFilters.get('filtroFechaInicio').value) {
        this.formFilters.get('filtroFechaInicio').setValue('');
      }
      if (this.formFilters.get('filtroFechaFin').value) {
        this.formFilters.get('filtroFechaFin').setValue('');
      }
    } else {
      if (this.formFilters.get('proveedor').value) {
        this.formFilters.get('proveedor').setValue(-1);
      }
    }
  }
  getProveedores(option) {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Proveedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this._ordenesDeCompraService.getProveedores(option ? option : undefined));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.proveedores = Proveedores;
          _this.filteredProveedores = _this.formFilters.get('proveedor').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => _this._filterProveedores(value)));
          if (_this.proveedores) {
            const proveedor = _this.proveedores.filter(provedor => provedor.Codigo == _this.formFilters.get('proveedor').value.Codigo);
            _this.formFilters.get('proveedor').setValue(proveedor[0]);
          }
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  _filterProveedores(proveedor) {
    const filterValue = proveedor.toString().toLowerCase();
    return this.proveedores.filter(proveedor => proveedor.RazonSocial.toLowerCase().includes(filterValue));
  }
  getTextProveedor(option) {
    return option ? option.RazonSocial : '';
  }
}
_class = FilterMenuComponent;
_class.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_modules_compras_ordenes_de_compra_service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_4__.OrdenesDeCompraService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-filter-menu-ordenes-de-compra"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__.MY_DATE_FORMATS
  }])],
  decls: 38,
  vars: 11,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-bold", "text-gray-500", "text-base", "mt-4"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded", "min-w-64", "mt-2"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Desde", "formControlName", "filtroFechaInicio"], ["matEndDate", "", "placeholder", "Hasta", "formControlName", "filtroFechaFin"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], [1, "font-bold", "text-gray-500", "text-base"], ["type", "text", "matInput", "", "formControlName", "proveedor", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-stroked-button", "", "color", "primary", 1, "w-full", "rounded-none", "md:w-28", "md:rounded-3xl", "hidden", "md:block", 3, "click"], [1, "text-gray-700", "font-bold"], ["mat-raised-button", "", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], [3, "value"], ["btn", ""]],
  template: function FilterMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Filtros");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_5_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_8_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 6)(12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Rango de fechas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-date-range-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 10)(17, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "mat-datepicker-toggle", 12)(19, "mat-date-range-picker", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, FilterMenuComponent_button_21_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Proveedores");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-autocomplete", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, FilterMenuComponent_mat_option_28_Template, 2, 2, "mat-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, FilterMenuComponent_button_30_Template, 4, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 20)(32, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_32_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_35_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangePicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("filtroFechaInicio").value || ctx.formFilters.get("filtroFechaFin").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx.getTextProveedor);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 9, ctx.filteredProveedores));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("proveedor").value);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangePicker, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 91848:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/compras/ordenes-de-compra/components/ordenes-de-compra.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdenesDeCompraComponent: () => (/* binding */ OrdenesDeCompraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 53317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 18678);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 77055);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 26153);
/* harmony import */ var _service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/ordenes-de-compra.service */ 74114);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/common/search/search.service */ 70363);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 31123);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
var _class;





















class OrdenesDeCompraComponent {
  constructor(_ordenesDeCompraService, confirm, alert, dialogo, _searchService, _menuService, router, _headerTextService) {
    this._ordenesDeCompraService = _ordenesDeCompraService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
    this.headers = ['N°', 'Fecha', 'Observaciones', 'Proveedor', 'Presupuesto', 'Acciones'];
    this.column_params = ['codigo', 'fecha', 'observaciones', 'proveedor_descripcion', 'presupuesto', 'acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['observaciones', 'proveedor_descripcion'];
    this.filter = {
      proveedor: -1
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.compras.orden_compra + '?sort=-codigo';
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
    (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.debounceTime)(750), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()).subscribe(value => {
      this.filtroBusqueda = value;
      this.tabla.filters(this.filtroBusqueda);
    });
    this.FilterEventSub$ = this._searchService.getFilterEvent().subscribe(event => {
      this.onFilterMenu(this._searchService.getFilterOrigin());
    });
  }
  onFilterMenu(origin) {
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter.proveedor?.Codigo != -1 ? "filter[proveedor]=" + this.filter.proveedor.Codigo + '&' : '';
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
        this.updateOrdenDeCompra(event);
        break;
      case 'eliminar':
        this.deleteOrdenDeCompra(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveOrdenDeCompra() {
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
  updateOrdenDeCompra(event) {
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
  deleteOrdenDeCompra(event) {
    this.confirm.open({
      title: "Eliminar orden de compra N°" + event.params.data.codigo,
      message: `¿Desea eliminar la orden de compra: N° ${event.params.data.codigo} del proveedor ${event.params.data.proveedor} ?`,
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
        this._ordenesDeCompraService.deleteOrdenDeCompra(event.params.data.codigo).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Orden de compra eliminado con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            alert("Esta orden de compra no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
_class = OrdenesDeCompraComponent;
_class.ɵfac = function OrdenesDeCompraComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_4__.OrdenesDeCompraService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_7__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_8__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_9__.HeaderTextService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-ordenes-de-compra"]],
  viewQuery: function OrdenesDeCompraComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent, 5);
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
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-4", "mt-2", "pb-4"], [1, "fixed", "right-10"], ["mat-icon-button", "", "type", "button", "matTooltip", "Crear Orden", 1, "mr-2", "ml-2", "bg-blue-500", "rounded-full", "z-99999", 3, "click"], ["save", ""], [1, "text-white"], [1, "pr-2", "pl-2", "mt-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function OrdenesDeCompraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function OrdenesDeCompraComponent_Template_button_click_3_listener() {
        return ctx.saveOrdenDeCompra();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6)(8, "app-tabla-dinamica", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("functionEmitter", function OrdenesDeCompraComponent_Template_app_tabla_dinamica_functionEmitter_8_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "ssp")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 18678:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/compras/ordenes-de-compra/components/save/save.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 75043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 89566);
/* harmony import */ var _addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addArticulo/add-articulo.component */ 48965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/ordenes-de-compra.service */ 74114);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);

var _class;





















function SaveComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", proveedor_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", proveedor_r17.RazonSocial, " ");
  }
}
function SaveComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", articulo_r18.descripcion_articulo, " ");
  }
}
function SaveComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "C\u00F3digo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", articulo_r19.codigo_interno_articulo, " ");
  }
}
function SaveComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", articulo_r20.cantidad, " ");
  }
}
function SaveComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Unidad de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", articulo_r21.descripcion_um, " ");
  }
}
function SaveComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Importe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", articulo_r22.importe, " ");
  }
}
function SaveComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_th_59_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.addArticulo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37)(1, "button", 3, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_td_60_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const articulo_r25 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.deleteArticulo(articulo_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 41);
  }
}
function SaveComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 42);
  }
}
class SaveComponent {
  constructor(_ordenesDeCompraService, data, datePipe, alert, dialogRef, dialogo) {
    this._ordenesDeCompraService = _ordenesDeCompraService;
    this.data = data;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.columns = ['articulo', 'codigointerno', 'cantidad', 'unidadmedida', 'importe', 'acciones'];
    this.unidades_de_medida = [];
    this.items_list = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
    this.orden_de_compra = this.data ? this.data : null;
    this.title = this.orden_de_compra?.codigo ? 'Editar orden de compra' : 'Nuevo orden de compra';
    /* this.user = JSON.parse(sessionStorage.getItem('user')) */
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  ngOnInit() {
    this.newForm();
    this.exist();
  }
  newForm() {
    const [dia, mes, anio] = this.orden_de_compra ? this.orden_de_compra.fecha.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    if (this.orden_de_compra) {
      //Sí existe el orden de compra, cargo la grilla con sus articulos...
      this.getItems(this.orden_de_compra.codigo).then(r => {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(r);
      });
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.orden_de_compra ? this.orden_de_compra.proveedor : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.orden_de_compra?.fecha ? this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.orden_de_compra ? this.orden_de_compra.observaciones : ''),
      numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.orden_de_compra ? this.orden_de_compra.numero : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]*$')]),
      presupuesto: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.orden_de_compra ? this.orden_de_compra.presupuesto : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('^[0-9]*$')]),
      iva: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.orden_de_compra ? this.orden_de_compra.iva : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
      // contacto: new FormControl((this.orden_de_compra ? this.orden_de_compra.contacto : ''),),
      // pedido: new FormControl((this.orden_de_compra ? this.orden_de_compra.pedido : ''), Validators.required),
    });
  }
  /**
  * Si existe un stockinicial le mando 'true' a fondos y nada a TM para que me traiga todos los fondos y TMs al editar.
  * Caso contrario, si se va a crear un stockinicial, llamo a los fondos sin enviarle un parametro asi me trae solo los activos y
  * le envio un paramtro a los tipos de stockinicials para que me traiga los activos.
  */
  exist() {
    if (this.orden_de_compra?.codigo) {
      this.getProveedores(true);
    } else {
      this.getProveedores();
    }
  }
  getProveedores(option) {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Proveedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this._ordenesDeCompraService.getProveedores(option));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.proveedores = Proveedores;
          _this.filteredProveedores = _this.form.get('proveedor').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => _this._filterProveedores(value)));
          if (_this.orden_de_compra && _this.proveedores) {
            const proveedor = _this.proveedores.filter(provedor => provedor.Codigo == _this.orden_de_compra.proveedor);
            _this.form.get('proveedor').setValue(proveedor[0]);
          }
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  _filterProveedores(proveedor) {
    const filterValue = proveedor.toString().toLowerCase();
    return this.proveedores.filter(proveedor => proveedor.RazonSocial.toLowerCase().includes(filterValue));
  }
  getTextProveedor(option) {
    return option ? option.RazonSocial : '';
  }
  getItems(idordencompra) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this2._ordenesDeCompraService.getItems(idordencompra));
          _this2.items_list = items.list;
          resolve(_this2.items_list);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Esta funcion añade un nuevo item a la grilla dentro del saveComponent.
   * @var art_descripcion busca en el arreglo correspondiente un elemento con el mismo id para imprimir su descripcion.
   * @var um_descripcion busca en el arreglo correspondiente un elemento con el mismo id para imprimir su descripcion.
   * @var art_stk_ini Encapsula un objeto con los datos que deseamos mostrar en la tabla.
   */
  addArticulo() {
    this.dialogo.open(_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_2__.AddArticuloComponent, {
      panelClass: 'ayuda-dialog'
    }).afterClosed().subscribe({
      next: res => {
        let art_stk_ini = {
          articulo: res.articulo.idarticulo,
          cantidad: res.cantidad,
          idunidadmedida: res.unidad_medida,
          descripcion_articulo: res.articulo.descripcion,
          descripcion_um: res.unidadmedida_descripcion,
          codigo_interno_articulo: res.articulo.codigo_interno,
          importe: res.importe
        };
        this.items_list = [...this.items_list, art_stk_ini];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.items_list); //Actualizo la tabla
      }
    });
  }
  /**
   * El resultado de esta operación es un nuevo
   * array que contiene todos los elementos de la lista original,
   * excepto el artículo que se desea eliminar.
   * @param articulo
   */
  deleteArticulo(articulo) {
    this.items_list = this.items_list.filter(item => {
      return item !== articulo;
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.items_list);
  }
  cambiarFecha(fecha) {
    // Supongamos que la fecha está en el formato 'DD-MM-YYYY'
    const partes = fecha.split('/');
    if (partes.length === 3) {
      const anio = partes[0];
      const mes = partes[1];
      const dia = partes[2];
      const fh = new Date(Number(anio), Number(mes), Number(dia));
      return fh;
    } else {
      // Manejar el caso en que la cadena no tiene el formato esperado
      return 'Fecha inválida';
    }
  }
  onSubmit() {
    if (!this.form.valid) {
      return alert('Revise Los Datos Ingresados');
    } else {
      let items = this.items_list.map(objeto => ({
        articulo: objeto.articulo,
        cantidad: objeto.cantidad,
        um: objeto.idunidadmedida,
        importe: objeto.importe
      }));
      if (items.length === 0) {
        return alert('Debe ingresar un articulo al orden de compra');
      }
      const payload = {
        orden_compra: {
          fecha: this.form.get('fecha').value,
          numero: this.form.get('numero').value,
          usuario: this.user.id,
          proveedor: this.form.get('proveedor').value.Codigo,
          iva: this.form.get('iva').value,
          observaciones: this.form.get('observaciones').value,
          presupuesto: this.form.get('presupuesto').value
        },
        items: items
      };
      if (this.orden_de_compra?.codigo) {
        this._ordenesDeCompraService.updateOrdenDeCompra(payload, this.orden_de_compra.codigo).subscribe({
          next: data => {
            if (data) {
              this.dialogRef.close(data);
            }
          }
        });
      } else {
        this._ordenesDeCompraService.saveOrdenDeCompra(payload).subscribe({
          next: data => {
            if (data) {
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
}
_class = SaveComponent;
_class.ɵfac = function SaveComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_3__.OrdenesDeCompraService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-save-ordenes-de-compra"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 66,
  vars: 13,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-140", "sm:w-min-w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "shadow-md", "mb-3"], [1, "flex", "gap-1"], ["appearance", "outline", 1, "w-1/4"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", "readonly", "true", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "text", "matInput", "", "formControlName", "proveedor", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "formControlName", "iva"], ["matInput", "", "type", "text", "formControlName", "presupuesto"], ["matInput", "", "type", "text", "formControlName", "numero"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "overflow-y-auto", "max-h-[150px]", "h-[150px]", "shadow-xl", "pb-10", "border-t-2", "border-slate-200"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "articulo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigointerno"], ["matColumnDef", "cantidad"], ["matColumnDef", "unidadmedida"], ["matColumnDef", "importe"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-mini-fab", "", "color", "primary", "aria-label", "icon", 1, "rounded-full", 3, "click"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "div", 7)(11, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "input", 9)(13, "mat-datepicker-toggle", 10)(14, "mat-datepicker", null, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-form-field", 8)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Proveedor");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-autocomplete", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, SaveComponent_mat_option_22_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "IVA %");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-form-field", 8)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Presupuesto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-form-field", 8)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "N\u00FAmero");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div")(37, "mat-form-field", 19)(38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Observaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "textarea", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 21)(42, "table", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](43, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, SaveComponent_th_44_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, SaveComponent_td_45_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](46, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, SaveComponent_th_47_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, SaveComponent_td_48_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](49, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, SaveComponent_th_50_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, SaveComponent_td_51_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](52, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, SaveComponent_th_53_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, SaveComponent_td_54_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](55, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, SaveComponent_th_56_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, SaveComponent_td_57_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](58, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, SaveComponent_th_59_Template, 4, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, SaveComponent_td_60_Template, 5, 0, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, SaveComponent_tr_61_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, SaveComponent_tr_62_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 33)(64, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_64_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx.getTextProveedor);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 11, ctx.filteredProveedores));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatMiniFabButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerToggle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 6739:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/compras/ordenes-de-compra/ordenes-de-compra.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdenesDeCompraModule: () => (/* binding */ OrdenesDeCompraModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 52484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _components_ordenes_de_compra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ordenes-de-compra.component */ 91848);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 18678);
/* harmony import */ var _service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/ordenes-de-compra.service */ 74114);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 66897);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 26153);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);
/* harmony import */ var _components_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/addArticulo/add-articulo.component */ 48965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;



























const routes = [{
  path: '',
  component: _components_ordenes_de_compra_component__WEBPACK_IMPORTED_MODULE_3__.OrdenesDeCompraComponent
}];
class OrdenesDeCompraModule {}
_class = OrdenesDeCompraModule;
_class.ɵfac = function OrdenesDeCompraModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_service_ordenes_de_compra_service__WEBPACK_IMPORTED_MODULE_5__.OrdenesDeCompraService, _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](OrdenesDeCompraModule, {
    declarations: [_components_ordenes_de_compra_component__WEBPACK_IMPORTED_MODULE_3__.OrdenesDeCompraComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent, _components_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_8__.AddArticuloComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 74114:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/compras/ordenes-de-compra/service/ordenes-de-compra.service.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OrdenesDeCompraService: () => (/* binding */ OrdenesDeCompraService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 54855);
var _class;





class OrdenesDeCompraService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el servicio
   */
  getOrdenesDeCompra(sort) {
    let f = '?';
    f += sort == 'desc' ? 'sort=-descripcion' : 'sort=descripcion';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.view_clientes}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token, subject.next({
        'list': resp.result
        // 'totalPages': resp.headers.get('x-pagination-page-count'),
        // 'totalCount': resp.headers.get('x-pagination-total-count')
      });
    });

    return subject.asObservable();
  }
  /**
   * Funcion en el Servicio
   * @param orden_de_compra
   * @returns Crea un item nuevo
   */
  saveOrdenDeCompra(orden_de_compra) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.orden_compra}`, orden_de_compra);
  }
  /**
   * Funcion en el servicio
   * @param orden_de_compra
   * @returns Item actualizado actualizado
   */
  updateOrdenDeCompra(orden_de_compra, idordencompra) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.orden_compra}` + '/' + idordencompra, orden_de_compra);
  }
  /**
   * Funcion en el servicio
   * @param codigo
   * @returns Elimina un item
   */
  deleteOrdenDeCompra(codigo) {
    return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.orden_compra}` + '/' + codigo);
  }
  getProveedores(option) {
    let f = '?sort=RazonSocial';
    f += !option ? '?filter[activo]=1' : '';
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.proveedores}${f}`);
  }
  getArticulos() {
    let f = '?filter[activo]=1&pagination=1&per-page=10&page=1';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos}${f}`).subscribe(resp => {
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
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getItems(idordencompra) {
    let f = `?filter[ordenCompra]=${idordencompra}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.orden_compra_items}${f}`).subscribe(resp => {
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
}
_class = OrdenesDeCompraService;
_class.ɵfac = function OrdenesDeCompraService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_compras_ordenes-de-compra_ordenes-de-compra_module_ts.js.map