"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_movimientos-internos_movimientos-internos_module_ts"],{

/***/ 76110:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/components/addArticulo/add-articulo.component.ts ***!
  \*****************************************************************************************************/
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
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/movimientos-internos.service */ 56580);
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
    const articulo_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", articulo_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", articulo_r5.descripcion, " ");
  }
}
function AddArticuloComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddArticuloComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.limpiarCasillero("articulo"));
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
    const um_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", um_r8.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](um_r8.um.descripcion);
  }
}
function AddArticuloComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", deposito_r9.iddeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](deposito_r9.descripcion);
  }
}
class AddArticuloComponent {
  constructor(data, _movimientosInternosService, datePipe, alert, dialogRef, dialogo) {
    this.data = data;
    this._movimientosInternosService = _movimientosInternosService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.columns = ['articulo', 'cantidad', 'unidadmedida', 'deposito destino', 'acciones'];
    this.articulos = [];
    this.unidades_de_medida = [];
    this.depositos = [];
    this.articulos_list = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
    this.title = 'Añadir movimiento de articulo';
  }
  ngOnInit() {
    console.log(this.data);
    this.newForm();
    this.getArticulosDepositos();
    this.getDepositos();
  }
  /**
   * Funcion que lista los articulos que posee un déposito.
   */
  getArticulosDepositos() {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos_um_deposito = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this._movimientosInternosService.getArticulosDepositos(_this.data.deposito_egreso)); //solicitamos los aticulos que esten en un deposito
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.articulos = articulos_um_deposito.list;
          console.log(_this.articulos);
          _this.filteredArticulos = _this.form.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(value => _this._filterArticulos(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      //Esta funcion la realizamos para listar los articulos sin que se repitan.
      articulos_um_deposito.list.forEach(item => {
        const existeArticulo = _this.articulos_list.find(articulo => articulo.idarticulo === item.idarticulo);
        if (!existeArticulo) {
          let articulo = {
            idarticulo: item.idarticulo,
            codigo_interno: item.codigo_interno,
            descripcion: item.descripcion
          };
          _this.articulos_list.push(articulo);
        }
        ;
      });
    })();
  }
  /**
   * Esta funcion es para filtrar los artículos según el input que se haya ingresado en el buscador de articulos.
   * @param value
   * @returns
   */
  _filterArticulos(value) {
    const filterValue = value.toString().toLowerCase();
    return this.articulos_list.filter(articulo => articulo.descripcion.toLowerCase().includes(filterValue));
  }
  /**
   * Obtenemos la descripcion del articulo seleccionado.
   * @param option
   * @returns
   */
  getTextArticulo(option) {
    return option ? option.descripcion : '';
  }
  /**
   * Esta funcion solicita las unidades de medida que posee un articulo.
   * @param idarticulo
   */
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidadesDeMedida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this2._movimientosInternosService.getUnidadesDeMedidaArticulos(idarticulo));
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
   * Esta funcion lista los depositos activos.
   * @param option
   */
  getDepositos(option) {
    var _this3 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Depositos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this3._movimientosInternosService.getDepositos(option));
      new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.depositos = Depositos.list.filter(deposito => deposito.iddeposito != _this3.data.deposito_egreso); //Solo se almacenan los depositos que sean distintos al deposito de origen.
          resolve(true);
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
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
      this.form.get('unidadmedida').enable();
      this.getUnidadesDeMedidaArticulos($event.idarticulo);
    }
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero($event) {
    if ($event == 'articulo') {
      this.form.get('articulo').setValue('');
      this.form.get('unidadmedida').disable();
    }
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      deposito_ingreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      this.articulos.forEach(articulo => {
        if (articulo.idarticulo === this.form.get('articulo').value.idarticulo && articulo.idunidadmedida === this.form.get('unidadmedida').value) {
          if (this.form.get('cantidad').value > articulo.stock) {
            return alert('No hay stock suficiente!');
          }
          let existeMovimiento = this.data.movimientos.find(movimiento => movimiento.idarticulo === this.form.get('articulo').value.idarticulo && movimiento.idunidadmedida === this.form.get('unidadmedida').value);
          if (existeMovimiento) {
            return alert('Ya existe un movimiento de ese articulo con esa unidad de medida!');
          }
          if (this.form.get('cantidad').value <= articulo.stock && this.form.get('cantidad').value > 0) {
            let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
            let deposito = this.depositos.find(deposito => deposito.iddeposito === this.form.get('deposito_ingreso').value); //Traigo un deposito que coincida con mi seleccion para poder utilizar su descripcion.
            let movimiento_articulo = {
              articulo: this.form.get('articulo').value,
              unidad_medida: this.form.get('unidadmedida').value,
              cantidad: this.form.get('cantidad').value,
              deposito_ingreso: this.form.get('deposito_ingreso').value,
              unidadmedida_descripcion: unidadmedida.um.descripcion,
              decripcion_deposito_ingreso: deposito.descripcion
            };
            this.onCloseMenu(movimiento_articulo);
          }
        }
      });
    }
  }
  onCloseMenu(articulo) {
    this.dialogRef.close(articulo ? articulo : false);
  }
}
_class = AddArticuloComponent;
_class.ɵfac = function AddArticuloComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_2__.MovimientosInternosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-add-articulo-movimientos-internos"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 37,
  vars: 10,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-120", "sm:w-min-w-120", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "flex", "gap-1"], ["appearance", "outline", 1, "w-1/2"], ["type", "text", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete", "ngModelChange"], ["autoActiveFirstOption", "", 3, "displayWith"], ["art", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "w-1/3"], ["matInput", "", "type", "number", "formControlName", "cantidad"], ["formControlName", "unidadmedida"], ["formControlName", "deposito_ingreso"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-form-field", 7)(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Dep\u00F3sitos Destino");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, AddArticuloComponent_mat_option_33_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 17)(35, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddArticuloComponent_Template_button_click_35_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, " A\u00F1adir ");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 8, ctx.filteredArticulos));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.form.get("articulo").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.unidades_de_medida);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.depositos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 43440:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/components/filter-menu/filter-menu.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterMenuComponent: () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ 94748);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/date-format */ 89566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/movimientos-internos.service */ 56580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);

var _class;
















function FilterMenuComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.limpiarFechas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FilterMenuComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", deposito_r6.iddeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](deposito_r6.descripcion);
  }
}
function FilterMenuComponent_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", usuario_r7.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", usuario_r7.nick, " ");
  }
}
class FilterMenuComponent {
  constructor(data, _menuService, datePipe, _movimientosInternosService) {
    this.data = data;
    this._menuService = _menuService;
    this.datePipe = datePipe;
    this._movimientosInternosService = _movimientosInternosService;
    this.usuarios = [];
    this.filterDeposito = [];
    this.filterUsuarios = [];
    this.filterFechas = [];
    this.movimientos_internos_list = []; //Se crea por sí hace falta crear una copia de los datos y manipularlos de una forma más personalizada
  }

  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      filtroFechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      filtroFechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      usuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(-1),
      deposito: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(-1)
    });
    this.getDepositos();
    this.getUsuarios();
    this.formFilters.patchValue(this.data.filter);
  }
  resetFilters() {
    this.formFilters.reset({
      filtroFechaInicio: '',
      filtroFechaFin: '',
      usuario: -1,
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
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Usuarios = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this._movimientosInternosService.getUsuarios());
      _this.filterUsuarios = Usuarios.list;
    })();
  }
  /**
   * Esta funcion es para listas los depositos en el filtro de grilla.
   */
  getDepositos() {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const stk_list = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this2._movimientosInternosService.getDepositos(true));
      _this2.filterDeposito = stk_list.list;
    })();
  }
}
_class = FilterMenuComponent;
_class.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_4__.MovimientosInternosService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-filter-menu-movimientos-internos"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__.MY_DATE_FORMATS
  }])],
  decls: 43,
  vars: 9,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-120", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-bold", "text-gray-500", "text-base", "mt-4"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded", "min-w-64", "mt-2"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Desde", "formControlName", "filtroFechaInicio"], ["matEndDate", "", "placeholder", "Hasta", "formControlName", "filtroFechaFin"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["formControlName", "deposito"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "usuario"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-stroked-button", "", "color", "primary", 1, "w-full", "rounded-none", "md:w-28", "md:rounded-3xl", "hidden", "md:block", 3, "click"], [1, "text-gray-700", "font-bold"], ["mat-raised-button", "", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Deposito");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-select", 15)(26, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, FilterMenuComponent_mat_option_28_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 8)(32, "mat-select", 18)(33, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, FilterMenuComponent_mat_option_35_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 19)(37, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_37_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_40_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangePicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("filtroFechaInicio").value || ctx.formFilters.get("filtroFechaFin").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterDeposito);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterUsuarios);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__.MatDateRangePicker],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 63218:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/components/movimientos-internos.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovimientosInternosComponent: () => (/* binding */ MovimientosInternosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 53317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 39312);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 77055);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 43440);
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/movimientos-internos.service */ 56580);
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





















class MovimientosInternosComponent {
  constructor(_movimientosInternosService, confirm, alert, dialogo, _searchService, _menuService, router, _headerTextService) {
    this._movimientosInternosService = _movimientosInternosService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
    this.headers = ['Fecha', 'Hora', 'Responsable', 'Observaciones', 'Deposito', 'Acciones'];
    this.column_params = ['fecha', 'hora', 'nick', 'observaciones', 'deposito', 'acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['observaciones', 'nick', 'deposito'];
    this.filter = {
      deposito: -1,
      filtroFechaInicio: '',
      filtroFechaFin: ''
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stock.movimiento_internos + '?sort=-idmovimientointerno';
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
      filter: this.filter,
      data: this.tabla.getElementosExistentes()
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter.deposito != -1 ? "filter[iddeposito]=" + this.filter.deposito + '&' : '';
          this.extraParams += this.filter.usuario != -1 ? "filter[idusuario]=" + this.filter.usuario + '&' : '';
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
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveMovimientoInterno() {
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
  updateMovimientoInterno(event) {
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
        this._movimientosInternosService.deleteMovimientoInterno(event.params.data.codigo).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            alert("Movimiento interno eliminado con éxito.");
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
_class = MovimientosInternosComponent;
_class.ɵfac = function MovimientosInternosComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_4__.MovimientosInternosService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_7__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_8__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_9__.HeaderTextService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-movimientos-internos"]],
  viewQuery: function MovimientosInternosComponent_Query(rf, ctx) {
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
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-4", "mt-2", "pb-4"], [1, "fixed", "right-10"], ["mat-icon-button", "", "type", "button", "matTooltip", "Crear Movimiento interno", 1, "mr-2", "ml-2", "bg-blue-500", "rounded-full", "z-99999", 3, "click"], ["save", ""], [1, "text-white"], [1, "pr-2", "pl-2", "mt-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function MovimientosInternosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MovimientosInternosComponent_Template_button_click_3_listener() {
        return ctx.saveMovimientoInterno();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 6)(8, "app-tabla-dinamica", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("functionEmitter", function MovimientosInternosComponent_Template_app_tabla_dinamica_functionEmitter_8_listener($event) {
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

/***/ 39312:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/components/save/save.component.ts ***!
  \**************************************************************************************/
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
/* harmony import */ var _addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addArticulo/add-articulo.component */ 76110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/movimientos-internos.service */ 56580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);

var _class;





















function SaveComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", deposito_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", deposito_r16.descripcion, " ");
  }
}
function SaveComponent_button_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_button_28_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.limpiarCasillero());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r19.descripcion_articulo, " ");
  }
}
function SaveComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r20.cantidad, " ");
  }
}
function SaveComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Unidad de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r21.descripcion_um, " ");
  }
}
function SaveComponent_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Dep\u00F3sito Destino");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r22.descripcion_deposito_ingreso, " ");
  }
}
function SaveComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36)(1, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_th_49_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.addMovimiento());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 37)(1, "button", 3, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_td_50_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const movimiento_r25 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.deleteMovimiento(movimiento_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 41);
  }
}
function SaveComponent_tr_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 42);
  }
}
class SaveComponent {
  constructor(data, _movimientosInternosService, datePipe, alert, dialogRef, dialogo) {
    this.data = data;
    this._movimientosInternosService = _movimientosInternosService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.columns = ['articulo', 'cantidad', 'unidadmedida', 'deposito_ingreso', 'acciones'];
    this.depositos = [];
    this.unidades_de_medida = [];
    this.mov_art_list = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
    this.movimiento_interno = this.data ? this.data : null;
    this.title = this.movimiento_interno?.idmovimientointerno ? `Editar Movimiento interno ${this.movimiento_interno.fecha_hora}` : `Nuevo Movimiento interno`;
    /* this`user = JSON.parse(sessionStorage.getItem('user')) */
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  ngOnInit() {
    this.newForm();
    this.exist();
  }
  newForm() {
    const [dia, mes, anio] = this.movimiento_interno ? this.movimiento_interno.fecha.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    if (this.movimiento_interno) {
      //Sí existe el orden de compra, cargo la grilla con sus articulos...
      this.getItems(this.movimiento_interno.idmovimientointerno).then(r => {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(r);
      });
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.movimiento_interno?.fecha ? this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.movimiento_interno?.hora ? this.movimiento_interno.hora : this.datePipe.transform(new Date(), 'HH:mm'), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      deposito_egreso: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.movimiento_interno ? this.movimiento_interno.deposito : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.movimiento_interno ? this.movimiento_interno.observaciones : '')
    });
  }
  /**
  * Si existe un stockinicial le mando 'true' a fondos y nada a TM para que me traiga todos los fondos y TMs al editar.
  * Caso contrario, si se va a crear un stockinicial, llamo a los fondos sin enviarle un parametro asi me trae solo los activos y
  * le envio un paramtro a los tipos de stockinicials para que me traiga los activos.
  */
  exist() {
    if (this.movimiento_interno?.idmovimientointerno) {
      this.getDepositos(true);
    } else {
      this.getDepositos();
    }
  }
  getDepositos(option) {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Depositos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this._movimientosInternosService.getDepositos(option));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.depositos = Depositos.list;
          _this.filteredDepositos = _this.form.get('deposito_egreso').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => _this._filterDepositos(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  _filterDepositos(deposito) {
    const filterValue = deposito.toString().toLowerCase();
    return this.depositos.filter(deposito => deposito.descripcion.toLowerCase().includes(filterValue));
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
  getItems(idmovimientointerno) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this2._movimientosInternosService.getItems(idmovimientointerno));
          _this2.mov_art_list = items.list;
          resolve(_this2.mov_art_list);
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
  addMovimiento() {
    if (this.form.get('deposito_egreso').value != '') {
      this.dialogo.open(_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_2__.AddArticuloComponent, {
        panelClass: 'ayuda-dialog',
        data: {
          deposito_egreso: this.form.get('deposito_egreso').value.iddeposito,
          movimientos: this.mov_art_list
        }
      }).afterClosed().subscribe({
        next: res => {
          console.log(res);
          let movimiento_articulo = {
            idarticulo: res.articulo.idarticulo,
            cantidad: res.cantidad,
            idunidadmedida: res.unidad_medida,
            descripcion_articulo: res.articulo.descripcion,
            descripcion_um: res.unidadmedida_descripcion,
            codigo_interno_articulo: res.articulo.codigo_interno,
            deposito_ingreso: res.deposito_ingreso.iddeposito,
            descripcion_deposito_ingreso: res.decripcion_deposito_ingreso
          };
          this.mov_art_list = [...this.mov_art_list, movimiento_articulo];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.mov_art_list); //Actualizo la tabla
        }
      });
    } else {
      alert("Seleccione un Depósito de origen");
    }
  }
  /**
   * El resultado de esta operación es un nuevo
   * array que contiene todos los elementos de la lista original,
   * excepto el artículo que se desea eliminar.
   * @param movimiento_articulo
   */
  deleteMovimiento(movimiento_articulo) {
    this.mov_art_list = this.mov_art_list.filter(item => {
      return item !== movimiento_articulo;
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(this.mov_art_list);
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero() {
    this.form.get('deposito_egreso').setValue('');
  }
  onSubmit() {
    if (!this.form.valid) {
      return alert('Revise Los Datos Ingresados');
    } else {
      let movimientos = this.mov_art_list.map(objeto => ({
        deposito_ingreso: objeto.deposito_ingreso,
        idarticulo: objeto.idarticulo,
        cantidad: objeto.cantidad,
        idunidadmedida: objeto.idunidadmedida
      }));
      if (movimientos.length === 0) {
        return alert('Debe ingresar un articulo al orden de compra');
      }
      const payload = {
        movimiento_interno: {
          idusuario: this.user.id,
          fecha_hora: `${this.form.get('fecha').value} ${this.form.get('hora').value}`,
          iddeposito: this.form.get('deposito_egreso').value.iddeposito,
          observaciones: this.form.get('observaciones').value
        },
        movimientos: movimientos
      };
      if (this.movimiento_interno?.idmovimientointerno) {
        this._movimientosInternosService.updateMovimientoInterno(payload, this.movimiento_interno.idmovimientointerno).subscribe({
          next: data => {
            if (data) {
              this.dialogRef.close(data);
            }
          }
        });
      } else {
        this._movimientosInternosService.saveMovimientoInterno(payload).subscribe({
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
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_3__.MovimientosInternosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-save-movimiento-interno"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 56,
  vars: 14,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-120", "sm:w-min-w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "shadow-md", "mb-3"], [1, "flex", "gap-1"], ["appearance", "outline", 1, "w-1/4"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "hora", "type", "time"], ["appearance", "outline", 1, "w-1/2"], ["type", "text", "matInput", "", "formControlName", "deposito_egreso", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["art", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "overflow-y-auto", "max-h-[150px]", "h-[150px]", "shadow-xl", "pb-10", "border-t-2", "border-slate-200"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "articulo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "unidadmedida"], ["matColumnDef", "deposito_ingreso"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-mini-fab", "", "color", "primary", "aria-label", "icon", 1, "rounded-full", 3, "click"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Hora");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-form-field", 13)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Dep\u00F3sito Origen");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-autocomplete", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, SaveComponent_mat_option_26_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SaveComponent_button_28_Template, 3, 0, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div")(30, "mat-form-field", 19)(31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Observaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "textarea", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 21)(35, "table", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](36, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, SaveComponent_th_37_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, SaveComponent_td_38_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](39, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, SaveComponent_th_40_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, SaveComponent_td_41_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](42, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, SaveComponent_th_43_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, SaveComponent_td_44_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](45, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, SaveComponent_th_46_Template, 2, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, SaveComponent_td_47_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](48, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, SaveComponent_th_49_Template, 4, 0, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, SaveComponent_td_50_Template, 5, 0, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, SaveComponent_tr_51_Template, 1, 0, "tr", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, SaveComponent_tr_52_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 32)(54, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_54_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](15);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx.getTextDeposito);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 12, ctx.filteredDepositos));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.form.get("deposito_egreso").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatMiniFabButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerToggle, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 76802:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/movimientos-internos.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovimientosInternosModule: () => (/* binding */ MovimientosInternosModule)
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
/* harmony import */ var _components_movimientos_internos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movimientos-internos.component */ 63218);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 39312);
/* harmony import */ var _service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/movimientos-internos.service */ 56580);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 66897);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 43440);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);
/* harmony import */ var _components_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/addArticulo/add-articulo.component */ 76110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;



























const routes = [{
  path: '',
  component: _components_movimientos_internos_component__WEBPACK_IMPORTED_MODULE_3__.MovimientosInternosComponent
}];
class MovimientosInternosModule {}
_class = MovimientosInternosModule;
_class.ɵfac = function MovimientosInternosModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_service_movimientos_internos_service__WEBPACK_IMPORTED_MODULE_5__.MovimientosInternosService, _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MovimientosInternosModule, {
    declarations: [_components_movimientos_internos_component__WEBPACK_IMPORTED_MODULE_3__.MovimientosInternosComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent, _components_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_8__.AddArticuloComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 56580:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/stock/movimientos-internos/service/movimientos-internos.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MovimientosInternosService: () => (/* binding */ MovimientosInternosService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 54855);
var _class;





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
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.orden_compra}` + '/' + idmovimientointerno, movimiento_interno);
  }
  /**
   * Funcion en el servicio
   * @param idmovimientointerno
   * @returns Elimina un item
   */
  deleteMovimientoInterno(idmovimientointerno) {
    return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.orden_compra}` + '/' + idmovimientointerno);
  }
  getDepositos(option) {
    let f = '?';
    f += !option ? 'filter[activo]=1' : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.depositos}${f}`).subscribe(resp => {
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getArticulosDepositos(deposito_origen) {
    let f = `?filter[deposito]=${deposito_origen}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_articulo_depositos}${f}`).subscribe(resp => {
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
  getItems(idmovimientointerno) {
    let f = `?filter[idmovimientointerno]=${idmovimientointerno}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_movimientos}${f}`).subscribe(resp => {
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
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
}
_class = MovimientosInternosService;
_class.ɵfac = function MovimientosInternosService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_movimientos-internos_movimientos-internos_module_ts.js.map