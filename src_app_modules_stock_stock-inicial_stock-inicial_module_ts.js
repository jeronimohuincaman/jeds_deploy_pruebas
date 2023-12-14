"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_stock-inicial_stock-inicial_module_ts"],{

/***/ 79899:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/components/save/save.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 89566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/stock-inicial.service */ 71102);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);

var _class;




















function SaveComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", deposito_r16.iddeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](deposito_r16.descripcion);
  }
}
function SaveComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", articulo_r17.idarticulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](articulo_r17.descripcion);
  }
}
function SaveComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", um_r18.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](um_r18.um.descripcion);
  }
}
function SaveComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", articulo_r19.idarticulo0.descripcion, " ");
  }
}
function SaveComponent_th_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "C\u00F3digo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", articulo_r20.idarticulo0.codigo_interno, " ");
  }
}
function SaveComponent_th_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", articulo_r21.cantidad, " ");
  }
}
function SaveComponent_th_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Unidad de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", articulo_r22.idunidadmedida0.descripcion, " ");
  }
}
function SaveComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function SaveComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 39)(1, "button", 3, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_td_62_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const articulo_r23 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.deleteArticulo(articulo_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_tr_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 42);
  }
}
function SaveComponent_tr_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 43);
  }
}
class SaveComponent {
  constructor(data, _stockInicialService, datePipe, alert, dialogRef) {
    this.data = data;
    this._stockInicialService = _stockInicialService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.columns = ['articulo', 'codigointerno', 'cantidad', 'unidadmedida', 'acciones'];
    this.unidades_de_medida = [];
    this.stk_movimientos = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
    this.stock_inicial = this.data ? this.data : null;
    this.title = this.stock_inicial?.idstockinicial ? 'Editar stock inicial' : 'Nuevo stock inicial';
    this.user = JSON.parse(sessionStorage.getItem('user'));
  }
  ngOnInit() {
    this.newForm();
    this.getDepositos();
    this.getArticulos();
  }
  getArticulos() {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this._stockInicialService.getArticulos());
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.articulos = articulos.list;
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getDepositos() {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const depositos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this2._stockInicialService.getDepositos());
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.depositos = depositos.list;
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this3 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidadesDeMedida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this3._stockInicialService.getUnidadesDeMedidaArticulos(idarticulo));
      new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.unidades_de_medida = unidadesDeMedida.list;
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
    this.getUnidadesDeMedidaArticulos($event);
  }
  /**
   * Esta funcion añade un nuevo item a la grilla dentro del saveComponent.
   * @var art_descripcion busca en el arreglo correspondiente un elemento con el mismo id para imprimir su descripcion.
   * @var um_descripcion busca en el arreglo correspondiente un elemento con el mismo id para imprimir su descripcion.
   * @var art_stk_ini Encapsula un objeto con los datos que deseamos mostrar en la tabla.
   */
  addArticulo() {
    let articulo = this.articulos.find(articulo => articulo.idarticulo === this.form.get('articulo').value); //Traigo un articulo que coincida con mi seleccion para poder utilizar su descripcion.
    let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
    let art_stk_ini = {
      idarticulo: this.form.get('articulo').value,
      cantidad: this.form.get('cantidad').value,
      idunidadmedida: this.form.get('unidadmedida').value,
      idarticulo0: {
        descripcion: articulo.descripcion
      },
      idunidadmedida0: {
        descripcion: unidadmedida.um.descripcion
      }
    };
    this.stk_movimientos = [...this.stk_movimientos, art_stk_ini];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.stk_movimientos); //Actualizo la tabla
    //Despues de cargar un nuevo item, se limpian los campos del formulario.
    this.form.get('articulo').setValue('');
    this.form.get('unidadmedida').setValue('');
    this.form.get('cantidad').setValue('');
  }
  /**
   * El resultado de esta operación es un nuevo
   * array que contiene todos los elementos de la lista original,
   * excepto el artículo que se desea eliminar.
   * @param articulo
   */
  deleteArticulo(articulo) {
    this.stk_movimientos = this.stk_movimientos.filter(item => {
      return item !== articulo;
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.stk_movimientos);
  }
  newForm() {
    let fecha_hora = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
    this.stock_inicial ? this.stock_inicial.fecha_hora = this.datePipe.transform(this.stock_inicial.fecha_hora, 'yyyy-MM-dd') : '';
    if (this.stock_inicial) {
      //Sí existe el stock inicial, cargo la grilla con sus articulos...
      this.stk_movimientos = this.stock_inicial.stkMovimientos;
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(this.stk_movimientos);
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      user: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.user ? this.user.name : ''),
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.stock_inicial ? this.stock_inicial.fecha_hora : this.datePipe.transform(fecha_hora, 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
      hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.stock_inicial ? this.stock_inicial.hora : this.datePipe.transform(fecha_hora, 'HH:mm:ss'), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      deposito: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.stock_inicial ? this.stock_inicial.iddeposito : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.stock_inicial ? this.stock_inicial.observaciones : '', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      let fh = this.datePipe.transform(this.form.get('fecha').value, 'yyyy-MM-dd'); //Esta linea hace que siempre se mantenga el formato de la facha cuando se modifica manualmente.
      let articulos = this.stk_movimientos.map(objeto => ({
        idarticulo: objeto.idarticulo,
        cantidad: objeto.cantidad,
        idunidadmedida: objeto.idunidadmedida
      }));
      if (articulos.length === 0) {
        return alert('Debe ingresar un articulo al stock inicial');
      }
      this.stock_inicial = {
        ...this.stock_inicial,
        idusuario: this.user.id,
        fecha_hora: `${fh} ${this.form.get('hora').value}`,
        hora: this.form.get('hora').value,
        iddeposito: this.form.get('deposito').value,
        observaciones: this.form.get('observaciones').value,
        articulos: articulos
      };
      if (this.stock_inicial.idstockinicial) {
        this._stockInicialService.updateStockInicial(this.stock_inicial).subscribe({
          next: data => {
            if (data) {
              this.dialogRef.close(data);
            }
          }
        });
      } else {
        this._stockInicialService.saveStockInicial(this.stock_inicial).subscribe({
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
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_2__.StockInicialService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-save-stock-inicial"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 72,
  vars: 12,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-192", "sm:w-192", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "flex", "gap-1"], ["appearance", "outline", 1, "w-2/5"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 1, "w-1/5"], ["matInput", "", "formControlName", "hora", "type", "time"], ["matInput", "", "placeholder", "Nombre del menu", "formControlName", "user", 3, "readonly"], ["appearance", "outline", 1, "w-1/2"], ["formControlName", "deposito"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "articulo", 3, "ngModelChange"], ["formControlName", "unidadmedida"], ["appearance", "outline", 1, "w-1/3"], ["matInput", "", "type", "number", "formControlName", "cantidad"], ["mat-mini-fab", "", "color", "primary", "aria-label", "icon", 3, "click"], [1, "px-4", "pr-2", "pl-2", "overflow-y-auto", "max-h-[150px]", "mb-4"], ["mat-table", "", 1, "w-full", "mt-1", "mb-5", "shadow-lg", 3, "dataSource"], ["matColumnDef", "articulo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "codigointerno"], ["matColumnDef", "cantidad"], ["matColumnDef", "unidadmedida"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["appearance", "outline", 1, "mt-2"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "rounded-sm", 3, "click"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 8)(12, "mat-datepicker-toggle", 9)(13, "mat-datepicker", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 11)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Hora");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 11)(20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 14)(24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Dep\u00F3sitos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, SaveComponent_mat_option_27_Template, 2, 2, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 6)(29, "mat-form-field", 14)(30, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Articulos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_mat_select_ngModelChange_32_listener($event) {
        return ctx.seleccionArticulo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, SaveComponent_mat_option_33_Template, 2, 2, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "mat-form-field", 14)(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "UM");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "mat-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SaveComponent_mat_option_38_Template, 2, 2, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-form-field", 19)(40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_43_listener() {
        return ctx.addArticulo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 22)(47, "table", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](48, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, SaveComponent_th_49_Template, 2, 0, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, SaveComponent_td_50_Template, 2, 1, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](51, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, SaveComponent_th_52_Template, 2, 0, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, SaveComponent_td_53_Template, 2, 1, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](54, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, SaveComponent_th_55_Template, 2, 0, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, SaveComponent_td_56_Template, 2, 1, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](57, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, SaveComponent_th_58_Template, 2, 0, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](59, SaveComponent_td_59_Template, 2, 1, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](60, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](61, SaveComponent_th_61_Template, 2, 0, "th", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](62, SaveComponent_td_62_Template, 5, 0, "td", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](63, SaveComponent_tr_63_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](64, SaveComponent_tr_64_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "mat-form-field", 33)(66, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Observaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "textarea", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 35)(70, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_70_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.depositos);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.articulos);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.unidades_de_medida);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatMiniFabButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 59376:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/components/stock-inicial.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockInicialComponent: () => (/* binding */ StockInicialComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 53317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save/save.component */ 79899);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/date-format */ 89566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/stock-inicial.service */ 71102);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);

var _class;























function StockInicialComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StockInicialComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.limpiarFechas());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function StockInicialComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", deposito_r19.iddeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](deposito_r19.descripcion);
  }
}
function StockInicialComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", usuario_r20.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", usuario_r20.nick, " ");
  }
}
function StockInicialComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StockInicialComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_inicial_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, stock_inicial_r21.fecha_hora, "dd/MM/yyyy"), " ");
  }
}
function StockInicialComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StockInicialComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_inicial_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", stock_inicial_r22.hora, " ");
  }
}
function StockInicialComponent_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Responsable");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StockInicialComponent_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_inicial_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", stock_inicial_r23.usuario.nick, " ");
  }
}
function StockInicialComponent_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Dep\u00F3sito");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StockInicialComponent_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const stock_inicial_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", stock_inicial_r24.deposito.descripcion, " ");
  }
}
function StockInicialComponent_th_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31)(1, "button", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StockInicialComponent_th_42_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.saveStockInicial(_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Crear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function StockInicialComponent_td_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30)(1, "button", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StockInicialComponent_td_43_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const stock_inicial_r28 = restoredCtx.$implicit;
      const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.updateStockInicial(_r29, stock_inicial_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 34, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StockInicialComponent_td_43_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const stock_inicial_r28 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.deleteStockInicial(stock_inicial_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function StockInicialComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 39);
  }
}
function StockInicialComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 40);
  }
}
class StockInicialComponent {
  constructor(stockInicialService, dialogo, confirm, alert, datePipe) {
    this.stockInicialService = stockInicialService;
    this.dialogo = dialogo;
    this.confirm = confirm;
    this.alert = alert;
    this.datePipe = datePipe;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.stockInicial = []; //Se crea por sí hace falta crear una copia de los datos y manipularlos de una forma más personalizada
    this.usuarios = [];
    this.filterDeposito = [];
    this.filterUsuarios = [];
    this.filterFechas = [];
    this.columns = ['fecha', 'hora', 'responsable', 'deposito', 'acciones'];
    //campo del buscador
    this.search_control = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
    // MatPaginator atributos
    this.totalRows = 0;
    this.pageSize = 25;
    this.currentPage = 0;
    this.pageSizeOptions = [5, 10, 25, 50, 100];
    //variable auxiliar para el orden de listado
    this.sortValue = 'desc';
  }
  ngOnInit() {
    this.getStockInicial();
    this.newForm();
    this._listenCambios();
  }
  _listenCambios() {
    // funcion que escucha los cambios del buscador para filtrar
    // this.search_control.valueChanges
    //     .pipe(
    //         debounceTime(300),
    //         distinctUntilChanged(),
    //     )
    //     .subscribe(() => {
    //         this._filterStocksIniciales()
    //     });
    // funcion que escucha los cambios de los selectores para filtrar
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(() => {
      this._filterStocksIniciales();
    });
  }
  /**
   * Formulario de filtros
   */
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      filtroFechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroFechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroUsuario: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroDeposito: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
  }
  /**
   * Funcion para limpiar los filtros de rango de fechas
   */
  limpiarFechas() {
    this.form.get('filtroFechaInicio').setValue(null);
    this.form.get('filtroFechaFin').setValue(null);
  }
  /**
   * Esta funcion sirve para separar la hora de la fecha asi se pueden manipular de forma separada.
   * @param data son todos los items que devuelve el servicio.
   */
  getHora(data) {
    //Se usa este forEach para poder modificar la hora y mostrarla por separado en la grilla.
    data.list.forEach(stk_ini => {
      let fh = new Date(stk_ini.fecha_hora);
      stk_ini.hora = `${fh.getHours()}:${String(fh.getMinutes()).padStart(2, '0')}:${String(fh.getSeconds()).padStart(2, '0')}`;
      this.stockInicial.push(stk_ini);
    });
  }
  /**
   * Esta funcion es para listas los usuarios en el filtro de grilla.
   */
  getUsuarios(stk_list) {
    stk_list.forEach(stk_ini => {
      const existeUsuario = this.filterUsuarios.find(user => user.codigo === stk_ini.usuario.codigo);
      if (!existeUsuario) {
        let usuario = {
          codigo: stk_ini.usuario.codigo,
          nick: stk_ini.usuario.nick
        };
        this.filterUsuarios.push(usuario);
      }
    });
  }
  /**
   * Esta funcion es para listas los depositos en el filtro de grilla.
   */
  getDepositos(stk_list) {
    stk_list.forEach(stk_ini => {
      const existeDeposito = this.filterDeposito.find(deposito => deposito.iddeposito === stk_ini.deposito.iddeposito);
      if (!existeDeposito) {
        let deposito = stk_ini.deposito;
        this.filterDeposito.push(deposito);
      }
    });
  }
  /**
   * Esta funcion realiza el filtrado desde el front sobre el rango de fechas seleccionado en el filtro.
   */
  _filterFechas(stk_list) {
    this.filterFechas = [];
    // Obtener las fechas de inicio y fin del formulario y formatearlas
    let fh_inicio = this.datePipe.transform(this.form.get('filtroFechaInicio').value, 'yyyy-MM-dd HH:mm:ss');
    let fh_fin = this.datePipe.transform(this.form.get('filtroFechaFin').value, 'yyyy-MM-dd HH:mm:ss');
    // Iterar sobre el arreglo de fechas iniciales
    stk_list.forEach(stk_ini => {
      const existeFecha = this.filterFechas.find(item => item.fecha_hora === stk_ini.fecha_hora);
      if (!existeFecha) {
        if (stk_ini.fecha_hora >= fh_inicio && stk_ini.fecha_hora <= fh_fin) {
          this.filterFechas.push(stk_ini);
        }
      }
    });
    return this.filterFechas;
  }
  /**
   *  -Funcion en el componente.-
   * - Espera que se consulten los items del backend para almacenarlos en una variable.
   * - Teniendo la respuesta del backend en una variable, llama a la funcion 'getData...' pasandole por parametro los items.
   * - Le envia el filtro y el paginado al servicio.
   * @param filter Recibe los valores que haya tomado el filtro en la grilla.
   */
  getStockInicial(filter) {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paginado = {
        pagination: 1,
        perpage: _this.pageSize,
        currentPage: _this.currentPage + 1
      };
      const stocks_iniciales = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(_this.stockInicialService.getStockInicial({
        paginado,
        filter
      }));
      _this.getDataStocksIniciales(stocks_iniciales);
    })();
  }
  /**
   *  -Funcion en el componente-
   * - Esta funcion toma los datos que se la pasan por parametro para crear una tabla con AngularMaterial.
   * @param data En data se almacenan los fondos.
   */
  getDataStocksIniciales(data) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.getHora(data);
          _this2.getUsuarios(_this2.stockInicial);
          _this2.getDepositos(_this2.stockInicial);
          if (_this2.form.get('filtroFechaInicio').value && _this2.form.get('filtroFechaFin').value) {
            data.list = _this2._filterFechas(data.list);
          }
          if (!!_this2.paginator) {
            _this2.paginator.pageIndex = _this2.currentPage;
            _this2.paginator.length = data['totalCount'];
          }
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(data.list);
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * -Funcion en el componente-
   * * Setea la nueva cantidad de items que se quiere mostrar por pagina a las variables del componente y asi actualizar la pagina con la nueva cantidad.
   * @param event Es la modificacion en el template de cuantos items se quiere mostrar por pagina.
   */
  actualizarPagina(event) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getStockInicial();
  }
  /**
   * Funcion en el componente
   * Esta funcion toma los valores que tenga el formulario de filtro y
   * los encapsula en una constante para pasarla como parametro para obtener el listado de items.
   * @const payload
   */
  _filterStocksIniciales($event) {
    if ($event) {
      this.sortValue = $event.direction;
    }
    const payload = {
      usuario: this.form.get('filtroUsuario').value,
      deposito: this.form.get('filtroDeposito').value,
      sort: this.sortValue
    };
    this.getStockInicial(payload);
  }
  saveStockInicial(documentRef) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, {}).afterClosed().subscribe({
      next: response => {
        if (response) {
          this.getStockInicial();
        }
      }
    });
  }
  updateStockInicial(documentRef, stock_inicial) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, {
      data: stock_inicial
    }).afterClosed().subscribe({
      next: response => {
        if (response) {
          this._filterStocksIniciales();
        }
      }
    });
  }
  /**
   * Funcion en el componente
   * - Esta funcion elimina un item.
   * @param documentRef
   * @param stock_inicial
   */
  deleteStockInicial(stock_inicial) {
    this.confirm.open({
      title: "Eliminar stock inicial",
      message: "¿Desea eliminar el stock inicial: " + stock_inicial.fecha_hora + "?",
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
        this.stockInicialService.deleteStockInicial(stock_inicial.idstockinicial).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Stock Inicial eliminado con éxito.");
            if (res) {
              this._filterStocksIniciales();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.error("Este Stock inicial no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
}
_class = StockInicialComponent;
_class.ɵfac = function StockInicialComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_3__.StockInicialService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-stock-inicial"]],
  viewQuery: function StockInicialComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__.MY_DATE_FORMATS
  }])],
  decls: 48,
  vars: 14,
  consts: [[1, "w-full"], [1, "bg-slate-100", "w-full", "p-2"], [1, "bg-white", "shadow-md", "w-full", "px-4", "py-4", "rounded-lg", "flex", "justify-center", "items-center", 3, "formGroup"], ["appearance", "outline", 1, "w-1/3", "ml-2"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Desde", "formControlName", "filtroFechaInicio"], ["matEndDate", "", "placeholder", "Hasta", "formControlName", "filtroFechaFin"], ["matIconSuffix", "", 3, "for"], ["picker", ""], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["formControlName", "filtroDeposito", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "filtroUsuario", 3, "change"], [1, "px-4", "pr-2", "pl-2"], ["mat-table", "", "matSort", "", 1, "w-full", "mt-1", "mb-18", "shadow-lg", 3, "dataSource", "matSortChange"], ["matColumnDef", "fecha"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by fecha", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "hora"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "responsable"], ["matColumnDef", "deposito"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 1, "fixed", "bottom-0", "w-full", "z-50", 3, "length", "pageIndex", "pageSize", "pageSizeOptions", "page"], ["paginator", ""], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by fecha"], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-cell", "", "mat-button", "", 1, "bg-blue-500", "text-white", "rounded-md", 3, "click"], ["save", ""], ["mat-icon-button", "", 3, "click"], ["edit", ""], [1, "text-cyan-700"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function StockInicialComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "mat-form-field", 3)(4, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Rango de fechas");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-date-range-input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 5)(8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "mat-datepicker-toggle", 7)(10, "mat-date-range-picker", null, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, StockInicialComponent_button_12_Template, 3, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-form-field", 3)(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Deposito");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function StockInicialComponent_Template_mat_select_change_16_listener() {
        return ctx._filterStocksIniciales();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, StockInicialComponent_mat_option_19_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-form-field", 3)(21, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Usuario");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function StockInicialComponent_Template_mat_select_change_23_listener() {
        return ctx._filterStocksIniciales();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, StockInicialComponent_mat_option_26_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 14)(28, "table", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function StockInicialComponent_Template_table_matSortChange_28_listener($event) {
        return ctx._filterStocksIniciales($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, StockInicialComponent_th_30_Template, 2, 0, "th", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, StockInicialComponent_td_31_Template, 3, 4, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, StockInicialComponent_th_33_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, StockInicialComponent_td_34_Template, 2, 1, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](35, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, StockInicialComponent_th_36_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, StockInicialComponent_td_37_Template, 2, 1, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](38, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, StockInicialComponent_th_39_Template, 2, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, StockInicialComponent_td_40_Template, 2, 1, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](41, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, StockInicialComponent_th_42_Template, 4, 0, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, StockInicialComponent_td_43_Template, 9, 0, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, StockInicialComponent_tr_44_Template, 1, 0, "tr", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, StockInicialComponent_tr_45_Template, 1, 0, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-paginator", 26, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function StockInicialComponent_Template_mat_paginator_page_46_listener($event) {
        return ctx.actualizarPagina($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rangePicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.get("filtroFechaInicio").value || ctx.form.get("filtroFechaFin").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filterDeposito);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.filterUsuarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx.totalRows)("pageIndex", ctx.currentPage)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDateRangePicker, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 71102:
/*!******************************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/service/stock-inicial.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockInicialService: () => (/* binding */ StockInicialService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 54855);
var _class;





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
      this._authService.accessToken = resp.body.token, subject.next({
        'list': resp.body.result,
        'totalPages': resp.headers.get('x-pagination-page-count'),
        'totalCount': resp.headers.get('x-pagination-total-count')
      });
    });
    return subject.asObservable();
  }
  getArticulos() {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos}`).subscribe(resp => {
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getDepositos() {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.depositos}`).subscribe(resp => {
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
  updateStockInicial(stock_inicial) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.stock_inicial}` + '/' + stock_inicial.idstockinicial, stock_inicial);
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
_class = StockInicialService;
_class.ɵfac = function StockInicialService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});


/***/ }),

/***/ 22754:
/*!*********************************************************************!*\
  !*** ./src/app/modules/stock/stock-inicial/stock-inicial.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StockInicialModule: () => (/* binding */ StockInicialModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _components_stock_inicial_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/stock-inicial.component */ 59376);
/* harmony import */ var _service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/stock-inicial.service */ 71102);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/save/save.component */ 79899);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;






















const routes = [{
  path: '',
  component: _components_stock_inicial_component__WEBPACK_IMPORTED_MODULE_0__.StockInicialComponent
}];
class StockInicialModule {}
_class = StockInicialModule;
_class.ɵfac = function StockInicialModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_service_stock_inicial_service__WEBPACK_IMPORTED_MODULE_1__.StockInicialService, _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_4__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](StockInicialModule, {
    declarations: [_components_stock_inicial_component__WEBPACK_IMPORTED_MODULE_0__.StockInicialComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_2__.SaveComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 89566:
/*!*************************************************!*\
  !*** ./src/app/shared/constants/date-format.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_DATE_FORMATS: () => (/* binding */ MY_DATE_FORMATS)
/* harmony export */ });
// @Component({
//     selector: 'app-save-stock-inicial',
//     templateUrl: './save.component.html',
//     styleUrls: ['./save.component.scss'],
//     providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }]
// })
/**
 * Formateo de fecha
 */
const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'mm/dd/yyyy'
  },
  display: {
    dateInput: 'dd/MM/yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy'
  }
};

/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_stock-inicial_stock-inicial_module_ts.js.map