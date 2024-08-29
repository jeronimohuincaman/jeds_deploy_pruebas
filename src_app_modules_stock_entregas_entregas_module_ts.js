"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_entregas_entregas_module_ts"],{

/***/ 64136:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/stock/entregas/components/addArticulo/add-articulo.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddArticuloComponent": () => (/* binding */ AddArticuloComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _service_entregas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/entregas.service */ 78165);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);






















function AddArticuloComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fuse-alert", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx_r0._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r0._alertConfig.message, " ");
  }
}
function AddArticuloComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", articulo_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", articulo_r8.codigo_interno, " - ", articulo_r8.descripcion, " ");
  }
}
function AddArticuloComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddArticuloComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.limpiarCasillero("articulo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function AddArticuloComponent_mat_option_25_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("(x", um_r11.factor_um, " ", um_r11.um_base, ")");
  }
}
function AddArticuloComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AddArticuloComponent_mat_option_25_i_2_Template, 2, 2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", um_r11.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", um_r11.descripcion_um, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", um_r11.factor_um != 1);
  }
}
function AddArticuloComponent_mat_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const venta_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", venta_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", venta_r14.cliente, " - ", venta_r14.fecha, " ");
  }
}
function AddArticuloComponent_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddArticuloComponent_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.limpiarCasillero("venta"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    cliente: "",
    fecha: "",
    idventa: null
  };
};
class AddArticuloComponent {
  constructor(data, _entregasService, _empresaService, alert, dialogRef) {
    this.data = data;
    this._entregasService = _entregasService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.columns = ['articulo', 'cantidad', 'unidadmedida', 'acciones'];
    this.articulos = [];
    this.unidades_de_medida = [];
    this.depositos = [];
    this.ventas = [];
    this.articulos_list = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.title = 'Añadir entrega de articulo';
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.newForm();
    this.getArticulosDepositos();
    this.getVentas();
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  /**
   * Funcion que lista los articulos que posee un déposito.
   */
  getArticulosDepositos() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos_um_deposito = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.firstValueFrom)(_this._entregasService.getArticulosDepositos(_this.data.deposito_entrega)); //solicitamos los aticulos que esten en un deposito
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.articulos = articulos_um_deposito.list;
          _this.filteredArticulos = _this.form.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(value => _this._filterArticulos(value)));
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
    return this.articulos_list.filter(articulo => {
      const codigo_interno = articulo.codigo_interno.toString().toLowerCase().includes(filterValue);
      const descripcion = articulo.descripcion.toString().toLowerCase().includes(filterValue);
      return codigo_interno || descripcion;
    });
  }
  /**
   * Obtenemos la descripcion del articulo seleccionado.
   * @param articulo
   * @returns
   */
  getTextArticulo(articulo) {
    return articulo ? `${articulo.codigo_interno} - ${articulo.descripcion}` : '';
  }
  /**
   * Funcion que lista las ventas.
  */
  getVentas() {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ventas = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.firstValueFrom)(_this2._entregasService.getVentas());
      _this2.ventas = ventas.list;
      _this2.filteredVentas = _this2.form.get('venta').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(value => _this2._filterVentas(value)));
    })();
  }
  /**
   * Esta funcion es para filtrar las ventas según el input que se haya ingresado en el buscador de ventas.
   * @param value
   * @returns
   */
  _filterVentas(value) {
    const filterValue = value.toString().toLowerCase();
    return this.ventas.filter(venta => {
      const cliente = venta.cliente.toString().toLowerCase().includes(filterValue);
      const fecha = venta.fecha.toString().toLowerCase().includes(filterValue);
      return cliente || fecha;
    });
  }
  /**
   * Obtenemos el cliente y fecha de dicha venta seleccionada.
   * @param venta
   * @returns
  */
  getTextVenta(venta) {
    return venta ? `${venta.cliente} - ${venta.fecha}` : '';
  }
  /**
  * Esta funcion solicita las unidades de medida que posee un articulo.
  * @param idarticulo
  */
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this3 = this;
    new Promise( /*#__PURE__*/function () {
      var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        let um_base; // Asigno una variable global para que cada UM sepa cual es la um base (factor = '1.00')
        _this3.unidades_de_medida = _this3.articulos.filter(a => a.idarticulo === idarticulo && a.factor_um != null).sort((a, b) => a.factor_um - b.factor_um).map(a => {
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
        resolve(true);
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }
  /**
   * Esta funcion maneja las cambios de seleccion que puedan tener articulos y unidades de medida.
   * @param $event
   */
  seleccionArticulo($event) {
    //Al seleccionar un articulo...
    if ($event.idarticulo) {
      this.form.get('unidadmedida').enable();
      this.getUnidadesDeMedidaArticulos($event.idarticulo); //...Buscamos las UM que posee ese articulo.
    }
    // - Mostrar Stock -
    //Al seleccionar la UM...
    if ($event.um) {
      //Consultamos sí existe un articulo con esa UM y utilizamos la respuesta para ver si existe un movimiento con ese articulo y esa UM en los movimientos.
      let articulo_um = this.unidades_de_medida.find(a => a.idarticulo === this.form.get('articulo').value.idarticulo && a.idunidadmedida === this.form.get('unidadmedida').value);
      let stock; //variable auxiliar   
      let cantidad_existente = 0;
      let existeMovimiento = this.data.movimientos.length > 0 ? true : false; //Consultamos sí hay movimientos
      if (existeMovimiento && this.data.esEdicion === false) {
        //Sí existe minimo un movimiento y es una crecion...
        let articulos_existentes = this.data.movimientos.filter(a => a.idarticulo === articulo_um.idarticulo && a.idunidadmedida === articulo_um.idunidadmedida); //Se hace esto para mantener el stock actualizado, en caso de haber sido modificado.
        //Si existen movimientos de articulos con la misma UM...
        articulos_existentes.forEach(ae => {
          cantidad_existente = cantidad_existente + Number(ae.cantidad); //...sumamos la cantidad que equivalen
        });

        stock = `${Number(articulo_um.stock) - cantidad_existente}`; //...Se le asigna el stock restante...
      } else {
        stock = articulo_um.stock; //..Sino el stock que traiga ese articulo con esa UM del servicio.
      }

      this.form.get('stock_existente').setValue(stock); //Lo mostramos.
    }
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero($event) {
    if ($event == 'articulo') {
      this.form.get('articulo').setValue('');
      this.form.get('unidadmedida').disable();
      this.form.get('unidadmedida').setValue('');
      this.form.get('stock_existente').setValue('');
      this.form.get('cantidad').setValue('');
      this.form.get('venta').setValue('');
    }
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required),
      stock_existente: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(''),
      venta: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required)
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      this.articulos.forEach(articulo => {
        if (articulo.idarticulo === this.form.get('articulo').value.idarticulo && articulo.idunidadmedida === this.form.get('unidadmedida').value) {
          if (this.form.get('cantidad').value > articulo.stock) {
            this.form.get('cantidad').setValue('');
            return this.alert.warning('No hay stock suficiente!');
          }
          let existeMovimiento = this.data.movimientos.find(movimiento => movimiento.idarticulo === this.form.get('articulo').value.idarticulo && movimiento.idunidadmedida === this.form.get('unidadmedida').value && movimiento.idventa === this.form.get('venta').value.idventa);
          if (existeMovimiento) {
            this.form.get('unidadmedida').setValue('');
            this.form.get('venta').setValue('');
            this.form.get('stock_existente').setValue('');
            return this.alert.warning('Ya existe un movimiento de ese articulo con esa unidad de medida asociado a esa venta.');
          }
          if (this.form.get('cantidad').value <= articulo.stock && this.form.get('cantidad').value > 0) {
            let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
            let movimiento_articulo = {
              articulo: this.form.get('articulo').value,
              unidad_medida: this.form.get('unidadmedida').value,
              unidadmedida_descripcion: unidadmedida.descripcion_um,
              stock: `${Number(articulo.stock) - this.form.get('cantidad').value}`,
              cantidad: this.form.get('cantidad').value,
              venta: this.form.get('venta').value
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
AddArticuloComponent.ɵfac = function AddArticuloComponent_Factory(t) {
  return new (t || AddArticuloComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_entregas_service__WEBPACK_IMPORTED_MODULE_2__.EntregasService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogRef));
};
AddArticuloComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AddArticuloComponent,
  selectors: [["app-add-articulo-entregas"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 49,
  vars: 26,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-120", "sm:w-min-w-120", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "form-menu", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-2", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/2"], ["type", "text", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete", "ngModelChange"], ["autoActiveFirstOption", "", 3, "displayWith"], ["art", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["formControlName", "unidadmedida", 3, "ngModelChange"], ["appearance", "outline", 1, "w-full", "sm:w-1/3"], ["matInput", "", "type", "number", "formControlName", "stock_existente", "readonly", "true"], ["matInput", "", "type", "number", "formControlName", "cantidad"], ["type", "text", "matInput", "", "formControlName", "venta", 3, "matAutocomplete"], ["vn", "matAutocomplete"], [3, "value"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["class", "font-light", 4, "ngIf"], [1, "font-light"]],
  template: function AddArticuloComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddArticuloComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AddArticuloComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "mat-form-field", 9)(13, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Art\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddArticuloComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.seleccionArticulo($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-autocomplete", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AddArticuloComponent_mat_option_18_Template, 2, 3, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AddArticuloComponent_button_20_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-form-field", 9)(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "UM");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AddArticuloComponent_Template_mat_select_ngModelChange_24_listener($event) {
        return ctx.seleccionArticulo({
          um: $event
        });
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, AddArticuloComponent_mat_option_25_Template, 3, 3, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-form-field", 16)(27, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "En stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-form-field", 16)(31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-form-field", 9)(35, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Venta");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-autocomplete", 11, 20)(40, "mat-option", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " - ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, AddArticuloComponent_mat_option_42_Template, 2, 3, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](43, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, AddArticuloComponent_button_44_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 22)(46, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddArticuloComponent_Template_button_click_46_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "A\u00F1adir");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](17);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.getTextArticulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 21, ctx.filteredArticulos));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.get("articulo").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.unidades_de_medida);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.getTextVenta);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](25, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](43, 23, ctx.filteredVentas));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.form.get("venta").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.FuseAlertComponent, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtYXJ0aWN1bG8uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9lbnRyZWdhcy9jb21wb25lbnRzL2FkZEFydGljdWxvL2FkZC1hcnRpY3Vsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 20281:
/*!*************************************************************************!*\
  !*** ./src/app/modules/stock/entregas/components/entregas.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasComponent": () => (/* binding */ EntregasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 20113);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 48097);
/* harmony import */ var _service_entregas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/entregas.service */ 78165);
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





















class EntregasComponent {
  constructor(_entregasService, _empresaService, confirm, alert, dialogo, _searchService, _menuService, router, _headerTextService, pwaService) {
    this._entregasService = _entregasService;
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
    this.headers = ['Fecha Precarga', 'Fecha Entrega', 'Responsable', 'Observaciones', 'Deposito', 'Usuario Encargado', 'Estado', 'Acciones'];
    this.column_params = ['fecha_hora_precarga', 'fecha_hora_entrega', 'nick_usuario', 'observaciones', 'descripcion_deposito', 'nick_usuario_entrega', 'descripcion_estado', 'acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['nick_usuario', 'descripcion_deposito', 'nick_usuario_entrega'];
    this.filter = {
      deposito: -1,
      filtroFechaInicio: '',
      filtroFechaFin: ''
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_13__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stock.view_stock_entregas + '?sort=-fecha_hora';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('');
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this._headerTextService.setTitulo(this.router);
    /**
     * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
     */
    this.funcionesObjeto = [{
      nombre_boton: "Editar",
      functionName: 'editar',
      iconoAccion: entrega => 'jedstion:editar',
      iconoAccionado: entrega => '',
      iconoDeshabilitado: entrega => ''
    }, {
      nombre_boton: "Eliminar",
      functionName: 'eliminar',
      iconoAccion: entrega => 'jedstion:eliminar',
      iconoAccionado: entrega => '',
      iconoDeshabilitado: entrega => ''
    }, {
      nombre_boton: "Reporte",
      functionName: 'reporte',
      iconoAccion: entrega => 'jedstion:imprimir',
      iconoAccionado: entrega => '',
      iconoDeshabilitado: entrega => ''
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
          this.extraParams += this.filter.usuario_responsable != '' ? "filter[nick_usuario]=" + this.filter.usuario_responsable + '&' : '';
          this.extraParams += this.filter.usuario_encargado != '' ? "filter[nick_usuario_entrega]=" + this.filter.usuario_encargado + '&' : '';
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
        this.updateEntrega(event);
        break;
      case 'eliminar':
        this.deleteEntrega(event);
        break;
      case 'reporte':
        this.reporteEntrega(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveEntrega() {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Entrega creada con éxito.");
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  /**
   * Esta funcion modifica un item
   * @param event
   */
  updateEntrega(event) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.editadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Entrega editada con éxito.");
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  /**
   * Esta funcion elimina un item
   * @param event
   */
  deleteEntrega(event) {
    this.confirm.open({
      title: "Eliminar Entrega: " + event.params.data.fecha,
      message: `¿Desea eliminar la entrega realizada el: ${event.params.data.fecha} ${event.params.data.hora}; del depósito: ${event.params.data.descripcion_deposito} ?`,
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
        this._entregasService.deleteEntrega(event.params.data.identrega).subscribe({
          next: res => {
            // Manejar la respuesta exitosa
            this.alert.success("Entrega eliminada con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.warning("Esta entrega no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  /**
   * Esta funcion Genera un Reporte y lo muestra en una nueva pestaña
   */
  reporteEntrega(event) {
    const idEntrega = event.params.data.identrega;
    this._entregasService.reporteEntrega(idEntrega).subscribe(data => {
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
    this.dialogo.closeAll();
  }
}
EntregasComponent.ɵfac = function EntregasComponent_Factory(t) {
  return new (t || EntregasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_service_entregas_service__WEBPACK_IMPORTED_MODULE_4__.EntregasService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_6__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_7__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_8__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_9__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_11__.PwaService));
};
EntregasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: EntregasComponent,
  selectors: [["app-entregas"]],
  viewQuery: function EntregasComponent_Query(rf, ctx) {
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
  vars: 15,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "fixed", "right-10"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], ["save", ""], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "pr-2", "pl-2", "mt-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function EntregasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EntregasComponent_Template_button_click_3_listener() {
        return ctx.saveEntrega();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Nueva Entrega");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 9)(11, "app-tabla-dinamica", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("functionEmitter", function EntregasComponent_Template_app_tabla_dinamica_functionEmitter_11_listener($event) {
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
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyZWdhcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9lbnRyZWdhcy9jb21wb25lbnRzL2VudHJlZ2FzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 48097:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/stock/entregas/components/filter-menu/filter-menu.component.ts ***!
  \****************************************************************************************/
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
/* harmony import */ var _service_entregas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/entregas.service */ 78165);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-datepicker-toggle", 28);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r1);
  }
}
function FilterMenuComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.limpiarFechas());
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
    const deposito_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", deposito_r10.iddeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](deposito_r10.descripcion);
  }
}
function FilterMenuComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_responsable_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", usuario_responsable_r11.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", usuario_responsable_r11.nick, " ");
  }
}
function FilterMenuComponent_mat_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_encargado_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", usuario_encargado_r12.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", usuario_encargado_r12.nick, " ");
  }
}
class FilterMenuComponent {
  constructor(data, _menuService, datePipe, _entregasService, _empresaService) {
    this.data = data;
    this._menuService = _menuService;
    this.datePipe = datePipe;
    this._entregasService = _entregasService;
    this._empresaService = _empresaService;
    this.filterDeposito = [];
    this.usuarios = [];
    this.filterFechas = [];
    this.movimientos_internos_list = []; //Se crea por sí hace falta crear una copia de los datos y manipularlos de una forma más personalizada
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      filtroFechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroFechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      usuario_responsable: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      usuario_encargado: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
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
      usuario_responsable: '',
      usuario_encargado: '',
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
      const Usuarios = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this._entregasService.getUsuarios());
      _this.usuarios = Usuarios.list;
      _this.filteredUsuarioResponsable = _this.formFilters.controls['usuario_responsable'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(value => _this._filterUsuaurio(value)));
      _this.filteredUsuarioEncargado = _this.formFilters.controls['usuario_encargado'].valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(value => _this._filterUsuaurio(value)));
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
      const stk_list = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this2._entregasService.getDepositos(true));
      _this2.filterDeposito = stk_list.list;
    })();
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_entregas_service__WEBPACK_IMPORTED_MODULE_4__.EntregasService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__.EmpresaService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-entregas"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__.MY_DATE_FORMATS
  }])],
  decls: 58,
  vars: 29,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-120", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Desde", "formControlName", "filtroFechaInicio"], ["matEndDate", "", "placeholder", "Hasta", "formControlName", "filtroFechaFin"], ["matIconSuffix", "", 3, "for", 4, "ngIf"], ["picker", ""], ["matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["formControlName", "deposito"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Seleccione Usuario Responsable", "matInput", "", "formControlName", "usuario_responsable", 3, "matAutocomplete"], ["mat-icon-button", "", "matSuffix", ""], ["autoUsuarioResponsable", "matAutocomplete"], ["type", "text", "placeholder", "Seleccione Usuario Encargado", "matInput", "", "formControlName", "usuario_encargado", 3, "matAutocomplete"], ["autoUsuarioEncargado", "matAutocomplete"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"], ["matIconSuffix", "", 3, "for"], ["matSuffix", "", "mat-icon-button", "", 3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Usuario Responsable");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "button", 19)(34, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "arrow_drop_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-autocomplete", null, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, FilterMenuComponent_mat_option_38_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](39, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Usuario Encargado");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "button", 19)(45, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "arrow_drop_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-autocomplete", null, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, FilterMenuComponent_mat_option_49_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 23)(52, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_52_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_55_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](37);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](48);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](39, 25, ctx.filteredUsuarioResponsable));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](50, 27, ctx.filteredUsuarioEncargado));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx.color_primario || "")("border", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDateRangePicker, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9lbnRyZWdhcy9jb21wb25lbnRzL2ZpbHRlci1tZW51L2ZpbHRlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 20113:
/*!**************************************************************************!*\
  !*** ./src/app/modules/stock/entregas/components/save/save.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addArticulo/add-articulo.component */ 64136);
/* harmony import */ var _service_entregas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/entregas.service */ 78165);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);

























function SaveComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fuse-alert", 44);
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
function SaveComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_encargado_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", usuario_encargado_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", usuario_encargado_r23.nick, " ");
  }
}
function SaveComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.limpiarCasillero("usuario_entrega"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", deposito_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", deposito_r26.descripcion, " ");
  }
}
function SaveComponent_button_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_button_38_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r27.limpiarCasillero("deposito_entrega"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Codigo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r8.color_primario ? "" : ctx_r8.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r8.color_primario || "");
  }
}
function SaveComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r29.codigo_interno, " ");
  }
}
function SaveComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r10.color_primario ? "" : ctx_r10.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r10.color_primario || "");
  }
}
function SaveComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r30.descripcion_articulo, " ");
  }
}
function SaveComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Unidad de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r12.color_primario ? "" : ctx_r12.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r12.color_primario || "");
  }
}
function SaveComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r31.descripcion_um, " ");
  }
}
function SaveComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r14.color_primario ? "" : ctx_r14.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r14.color_primario || "");
  }
}
function SaveComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r32.cantidad, " ");
  }
}
function SaveComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r16.color_primario ? "" : ctx_r16.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r16.color_primario || "");
  }
}
function SaveComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", movimiento_articulo_r33.cliente_venta, " - ", movimiento_articulo_r33.fecha_venta, " ");
  }
}
function SaveComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51)(1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_th_63_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.addMovimiento());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "A\u00F1adir Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r18.color_primario ? "" : ctx_r18.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r18.color_primario || "");
  }
}
function SaveComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50)(1, "button", 3, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_td_64_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r39);
      const movimiento_r36 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r38.deleteMovimiento(movimiento_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_tr_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 57);
  }
}
function SaveComponent_tr_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 58);
  }
}
function SaveComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 59)(1, "p", 60);
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
  constructor(data, _entregasService, _empresaService, datePipe, alert, dialogRef, dialogo) {
    this.data = data;
    this._entregasService = _entregasService;
    this._empresaService = _empresaService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.columns = ['codigointerno', 'articulo', 'unidadmedida', 'cantidad', 'venta', 'acciones'];
    this.usuarios = [];
    this.depositos = [];
    this.mov_art_list = [];
    this.ventas = [];
    this.maxPalabras = 50;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.entrega = this.data ? this.data : null;
    this.title = this.entrega?.identrega ? `Editar Entrega ${this.entrega.fecha_precarga} - ${this.entrega.hora_precarga}` : `Nueva Entrega`;
    /* this`user = JSON.parse(sessionStorage.getItem('user')) */
    this.user = JSON.parse(localStorage.getItem('user'));
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  newForm() {
    const [dia, mes, anio] = this.entrega ? this.entrega.fecha_precarga.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    if (this.entrega) {
      Promise.all([this.getVentas(), this.getItems(this.entrega.identrega)]).then(([ventas, items]) => {
        this.ventas = ventas;
        this.mov_art_list = items.map(m => {
          let venta = this.ventas.find(v => v.idventa === m.idventa);
          return {
            idarticulo: m.idarticulo,
            cantidad: parseFloat(m.cantidad),
            idunidadmedida: m.idunidadmedida,
            descripcion_articulo: m.descripcion_articulo,
            descripcion_um: m.descripcion_um,
            codigo_interno: m.codigo_interno_articulo,
            stock: m.stock_minimo_articulo,
            idventa: m.idventa ? venta.idventa : null,
            fecha_venta: venta ? venta.fecha : '',
            cliente_venta: venta ? venta.cliente : ''
          };
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.mov_art_list);
        if (this.mov_art_list.length != 0) {
          this.form.get('deposito_entrega').disable();
        } else {
          this.form.get('deposito_entrega').enable();
        }
      });
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.entrega?.fecha_precarga ? this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.entrega?.hora_precarga ? this.entrega.hora_precarga : this.datePipe.transform(new Date(), 'HH:mm'), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
      usuario_entrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.entrega ? this.entrega.nick_usuario_entrega : ''),
      deposito_entrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.entrega ? {
        descripcion: this.entrega.descripcion_deposito,
        iddeposito: this.entrega.iddeposito
      } : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.entrega ? this.entrega.observaciones : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(this.maxPalabras)])
    });
  }
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
  * Si existe un stockinicial le mando 'true' a fondos y nada a TM para que me traiga todos los fondos y TMs al editar.
  * Caso contrario, si se va a crear un stockinicial, llamo a los fondos sin enviarle un parametro asi me trae solo los activos y
  * le envio un paramtro a los tipos de stockinicials para que me traiga los activos.
  */
  exist() {
    if (this.entrega?.idusuario) {
      this.getUsuarios(true);
    } else {
      this.getUsuarios();
    }
    if (this.entrega?.identrega) {
      this.getDepositos(true);
    } else {
      this.getDepositos();
    }
  }
  getUsuarios(option) {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Usuarios = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this._entregasService.getUsuarios(option));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.usuarios = Usuarios.list;
          _this.filteredUsuarios = _this.form.get('usuario_entrega').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => _this._filterUsuarios(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  _filterUsuarios(usuario) {
    const filterValue = usuario.toString().toLowerCase();
    return this.usuarios.filter(usuario => usuario.nick.toLowerCase().includes(filterValue) && usuario.codigo !== this.user.id);
  }
  getTextUsuario(option) {
    if (option.nick) {
      return option.nick;
    }
    if (option.usuario) {
      return option.usuario;
    }
    return option;
  }
  getDepositos(option) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Depositos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this2._entregasService.getDepositos(option));
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.depositos = Depositos.list;
          _this2.filteredDepositos = _this2.form.get('deposito_entrega').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => _this2._filterDepositos(value)));
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
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
  /**
   * Listamos los movimientos asociados a este registro
   * @param idventa
   * @returns
   */
  getVentas() {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const Ventas = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this3._entregasService.getVentas());
          _this3.ventas = Ventas.list;
          resolve(_this3.ventas);
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Listamos los movimientos asociados a este registro
   * @param identrega
   * @returns
   */
  getItems(identrega) {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this4._entregasService.getItems(identrega));
          _this4.mov_art_list = items.list;
          resolve(_this4.mov_art_list);
        });
        return function (_x4) {
          return _ref4.apply(this, arguments);
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
    if (this.form.get('deposito_entrega').value != '') {
      let deposito_entrega_value = this.form.get('deposito_entrega').value.iddeposito;
      if (typeof this.form.get('deposito_entrega').value == 'string') {
        //En caso de edicion...
        let d = this.depositos.find(d => d.descripcion === this.form.get('deposito_entrega').value);
        deposito_entrega_value = d.iddeposito;
      }
      let esEdicion = this.entrega ? true : false;
      this.dialogo.open(_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_2__.AddArticuloComponent, {
        panelClass: 'ayuda-dialog',
        data: {
          deposito_entrega: deposito_entrega_value,
          movimientos: this.mov_art_list,
          esEdicion: esEdicion
        }
      }).afterClosed().subscribe({
        next: res => {
          if (res) {
            let movimiento_articulo = {
              idarticulo: res.articulo.idarticulo,
              cantidad: res.cantidad,
              idunidadmedida: res.unidad_medida,
              descripcion_articulo: res.articulo.descripcion,
              descripcion_um: res.unidadmedida_descripcion,
              codigo_interno: res.articulo.codigo_interno,
              stock: res.stock,
              idventa: res.venta.idventa ? res.venta.idventa : null,
              fecha_venta: res.venta ? res.venta.fecha : '',
              cliente_venta: res.venta ? res.venta.cliente : ''
            };
            this.mov_art_list = [movimiento_articulo, ...this.mov_art_list]; // Se agrega el nuevo articulo al comienzo de la lista para que siempre aparezca primero en la grilla
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.mov_art_list); //Actualizo la tabla
            // Deshabilito el control Deposito
            if (this.mov_art_list.length != 0) {
              this.form.get('deposito_entrega').disable();
            }
            this.alert.success("Artículo añadido con éxito");
          }
        }
      });
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
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource(this.mov_art_list);
    // Habilito el control Deposito si la lista de movimientos está vacía
    if (this.mov_art_list.length === 0) {
      this.form.get('deposito_entrega').enable();
    }
    this.alert.success("Artículo eliminado con éxito");
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero(input) {
    this.form.get(input).setValue('');
  }
  onSubmit() {
    // Verificar la longitud de las observaciones
    if (!this.isPalabraMaxLengthReached()) {
      return this.alert.error(`La longitud máxima de observaciones es de ${this.maxPalabras} caracteres.`);
    }
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      // Verificar si el usuario entrega seleccionado está en la lista de usuarios
      // if (!this.entrega || (this.entrega && this.form.get('usuario_entrega').value !== this.entrega.nick_usuario_entrega)) {
      //     const usuarioSeleccionado = this.form.get('usuario_entrega').value;
      //     const usuarioExistente = this.usuarios.find(usuario => usuario.codigo === usuarioSeleccionado.codigo);
      //     if (!usuarioExistente) {
      //         return this.alert.error('El usuario de entrega seleccionado no existe. Por favor, seleccione un usuario válido.');
      //     }
      // }
      let movimientos = this.mov_art_list.map(objeto => ({
        idarticulo: objeto.idarticulo,
        cantidad: objeto.cantidad,
        idunidadmedida: objeto.idunidadmedida,
        idventa: objeto.idventa
      }));
      if (movimientos.length === 0) {
        return this.alert.warning('Debe ingresar un articulo a la orden de entrega');
      }
      const fecha = this.form.get('fecha').value;
      const hora = this.form.get('hora').value;
      // Se formatea la fecha nuevamente al formato deseado (YYYY-MM-DD)
      const fecha_formateada = this.datePipe.transform(fecha, 'yyyy-MM-dd');
      // Se concatena a ambas fecha y hora
      const fecha_hora_precarga = `${fecha_formateada} ${hora}`;
      const payload = {
        entrega: {
          idusuario: this.user.id,
          fecha_hora_precarga: fecha_hora_precarga,
          iddeposito: this.form.get('deposito_entrega').value.iddeposito,
          usuario_entrega: this.form.get('usuario_entrega').value.codigo ? this.form.get('usuario_entrega').value.codigo : null,
          observaciones: this.form.get('observaciones').value
        },
        movimientos: movimientos
      };
      if (this.entrega?.identrega) {
        this._entregasService.updateEntrega(payload, this.entrega.identrega).subscribe({
          next: data => {
            if (data) {
              this.editadoExitosamente.emit();
              this.dialogRef.close(data);
            }
          }
        });
      } else {
        this._entregasService.saveEntrega(payload).subscribe({
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
}
SaveComponent.ɵfac = function SaveComponent_Factory(t) {
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_entregas_service__WEBPACK_IMPORTED_MODULE_3__.EntregasService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-entregas"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 72,
  vars: 38,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-120", "sm:w-min-w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "form-menu", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-2", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/4"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matInput", "", "formControlName", "hora", "type", "time"], ["appearance", "outline", 1, "w-full", "sm:w-1/2"], ["type", "text", "matInput", "", "formControlName", "usuario_entrega", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["ue", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["type", "text", "matInput", "", "formControlName", "deposito_entrega", 3, "matAutocomplete"], ["art", "matAutocomplete"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "counter", 3, "ngClass"], [1, "overflow-y-auto", "max-h-[215px]", "h-auto", "shadow-md", "rounded-lg"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "codigointerno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "unidadmedida"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "venta"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "rounded-tr-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-cell", ""], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white", "w-auto"], [1, "flex", "items-center", "justify-center", 3, "click"], [1, "text-inherit", "text-xl"], [1, "ml-2"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-form-field", 14)(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Usuario Entrega");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-autocomplete", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, SaveComponent_mat_option_27_Template, 2, 2, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, SaveComponent_button_29_Template, 3, 0, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-form-field", 14)(31, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Dep\u00F3sito");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-autocomplete", 16, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, SaveComponent_mat_option_36_Template, 2, 2, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](38, SaveComponent_button_38_Template, 3, 0, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-form-field", 22)(40, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "Observaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "textarea", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 25)(46, "table", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](47, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, SaveComponent_th_48_Template, 2, 4, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, SaveComponent_td_49_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](50, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, SaveComponent_th_51_Template, 2, 4, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, SaveComponent_td_52_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](53, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, SaveComponent_th_54_Template, 2, 4, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, SaveComponent_td_55_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](56, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, SaveComponent_th_57_Template, 2, 4, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, SaveComponent_td_58_Template, 2, 1, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](59, 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, SaveComponent_th_60_Template, 2, 4, "th", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, SaveComponent_td_61_Template, 2, 2, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](62, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, SaveComponent_th_63_Template, 6, 4, "th", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, SaveComponent_td_64_Template, 5, 0, "td", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, SaveComponent_tr_65_Template, 1, 0, "tr", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, SaveComponent_tr_66_Template, 1, 0, "tr", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, SaveComponent_div_67_Template, 3, 0, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "div", 41)(69, "button", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_69_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](16);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](26);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](35);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayWith", ctx.getTextUsuario);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](28, 32, ctx.filteredUsuarios));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("usuario_entrega").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matAutocomplete", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayWith", ctx.getTextDeposito);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 34, ctx.filteredDepositos));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.form.get("deposito_entrega").value && ctx.mov_art_list.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](36, _c0, !ctx.isPalabraMaxLengthReached()));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx.getPalabrasLength(), "/", ctx.maxPalabras, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.form.get("usuario_entrega").value ? "Entregar" : "Precargar", " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.FuseAlertComponent, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_26__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerToggle, _angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe],
  styles: ["@charset \"UTF-8\";\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  font-size: 0.75rem;\n  color: #C9C9C9; \n}\n\n.counter.reached-max[_ngcontent-%COMP%] {\n  color: #e53e3e; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQSxFQUFBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBLEVBQUEsb0RBQUE7QUFFSiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwLjVyZW07XHJcbiAgICByaWdodDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNDOUM5Qzk7IC8qIENvbG9yIGRlIHRleHRvIGdyaXMgKi9cclxufVxyXG5cclxuLmNvdW50ZXIucmVhY2hlZC1tYXgge1xyXG4gICAgY29sb3I6ICNlNTNlM2U7IC8qIENvbG9yIGRlIHRleHRvIHJvam8gY3VhbmRvIHNlIGFsY2FuemEgZWwgbMOtbWl0ZSAqL1xyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9lbnRyZWdhcy9jb21wb25lbnRzL3NhdmUvc2F2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBLEVBQUEsd0JBQUE7QUFFSjs7QUFDQTtFQUNJLGNBQUEsRUFBQSxvREFBQTtBQUVKO0FBQ0Esb3VCQUFvdUIiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDAuNXJlbTtcclxuICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBjb2xvcjogI0M5QzlDOTsgLyogQ29sb3IgZGUgdGV4dG8gZ3JpcyAqL1xyXG59XHJcblxyXG4uY291bnRlci5yZWFjaGVkLW1heCB7XHJcbiAgICBjb2xvcjogI2U1M2UzZTsgLyogQ29sb3IgZGUgdGV4dG8gcm9qbyBjdWFuZG8gc2UgYWxjYW56YSBlbCBsw4PCrW1pdGUgKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 55526:
/*!***********************************************************!*\
  !*** ./src/app/modules/stock/entregas/entregas.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasModule": () => (/* binding */ EntregasModule)
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
/* harmony import */ var _components_entregas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/entregas.component */ 20281);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 20113);
/* harmony import */ var _service_entregas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/entregas.service */ 78165);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 48097);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _components_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/addArticulo/add-articulo.component */ 64136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);



























const routes = [{
  path: '',
  component: _components_entregas_component__WEBPACK_IMPORTED_MODULE_3__.EntregasComponent
}];
class EntregasModule {}
EntregasModule.ɵfac = function EntregasModule_Factory(t) {
  return new (t || EntregasModule)();
};
EntregasModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: EntregasModule
});
EntregasModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_service_entregas_service__WEBPACK_IMPORTED_MODULE_5__.EntregasService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EntregasModule, {
    declarations: [_components_entregas_component__WEBPACK_IMPORTED_MODULE_3__.EntregasComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent, _components_addArticulo_add_articulo_component__WEBPACK_IMPORTED_MODULE_8__.AddArticuloComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 78165:
/*!********************************************************************!*\
  !*** ./src/app/modules/stock/entregas/service/entregas.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasService": () => (/* binding */ EntregasService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class EntregasService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el Servicio
   * @param entregas
   * @returns Crea un item nuevo
   */
  saveEntrega(entregas) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.entregas}`, entregas);
  }
  /**
   * Funcion en el servicio
   * @param entregas
   * @returns Item actualizado actualizado
   */
  updateEntrega(entregas, identrega) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.entregas}` + '/' + identrega, entregas);
  }
  /**
   * Funcion en el servicio
   * @param identrega
   * @returns Elimina un item
   */
  deleteEntrega(identrega) {
    return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.entregas}` + '/' + identrega);
  }
  /**
   *
   * @param identrega
   * @returns
   */
  reporteEntrega(identrega) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.reporte_entrega}` + identrega);
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
  getArticulosDepositos(deposito) {
    let f = `?filter[deposito]=${deposito}`;
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
  getItems(identrega) {
    let f = `?filter[identrega]=${identrega}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_movimientos}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getVentas() {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_venta_selects}`).subscribe(resp => {
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getUsuarios(option) {
    let f = `?sort=asc`;
    f += !option ? 'filter[activo]=1' : '';
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
EntregasService.ɵfac = function EntregasService_Factory(t) {
  return new (t || EntregasService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
EntregasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EntregasService,
  factory: EntregasService.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_entregas_entregas_module_ts.js.map