"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_administracion_medios-de-cobro_medios-de-cobro_module_ts"],{

/***/ 5315:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/components/medios-de-cobro.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediosDeCobroComponent": () => (/* binding */ MediosDeCobroComponent)
/* harmony export */ });
/* harmony import */ var H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save/save.component */ 4025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/medios-de-cobro.service */ 9378);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/menu.service */ 8802);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 5377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/alert.service */ 6375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 5096);



















function MediosDeCobroComponent_th_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r25.descripcion, " ");
  }
}
function MediosDeCobroComponent_th_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Descuento / Recargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r26.porcentaje, "% ");
  }
}
function MediosDeCobroComponent_th_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Numero");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r27.lleva_numero ? "Si" : "No", " ");
  }
}
function MediosDeCobroComponent_th_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r28.lleva_vencimiento ? "Si" : "No", " ");
  }
}
function MediosDeCobroComponent_th_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Emision");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r29.lleva_fecha_emision ? "Si" : "No", " ");
  }
}
function MediosDeCobroComponent_th_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Fecha Cobro");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r30.lleva_fecha_cobro ? "Si" : "No", " ");
  }
}
function MediosDeCobroComponent_th_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Duplica Numero");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r31.duplica_numero ? "Si" : "No", " ");
  }
}
function MediosDeCobroComponent_th_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Banco");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r32.lleva_banco ? "Si" : "No", " ");
  }
}
function MediosDeCobroComponent_th_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Fondo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r33.fondo, " ");
  }
}
function MediosDeCobroComponent_th_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MediosDeCobroComponent_td_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const medio_de_pago_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", medio_de_pago_r34.activo ? "Si" : "No", " ");
  }
}
function MediosDeCobroComponent_th_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35)(1, "button", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MediosDeCobroComponent_th_110_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.saveMedioDePago(_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Crear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function MediosDeCobroComponent_td_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34)(1, "button", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MediosDeCobroComponent_td_111_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42);
      const medio_de_pago_r38 = restoredCtx.$implicit;
      const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r41.updateMedioDePago(_r39, medio_de_pago_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 38, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MediosDeCobroComponent_td_111_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42);
      const medio_de_pago_r38 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r43.deleteMedioDePago(medio_de_pago_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function MediosDeCobroComponent_tr_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 43);
  }
}
function MediosDeCobroComponent_tr_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 44);
  }
}
class MediosDeCobroComponent {
  constructor(mediosDePagoService, menu, confirm, alert) {
    this.mediosDePagoService = mediosDePagoService;
    this.menu = menu;
    this.confirm = confirm;
    this.alert = alert;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.fondos = [];
    this.columns = ['descripcion', 'descuento_recargo', 'numero', 'vencimiento', 'fecha_emision', 'fecha_cobro', 'duplica_numero', 'banco', 'fondo', 'activo', 'acciones'];
    //campo del buscador
    this.search_descripcion = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
  }
  ngOnInit() {
    this.getMediosDePago();
    this.newForm();
    this.getFondos();
    this._listenCambios();
  }
  /**
   * ESta funcion cumple la tarea de escuchar sí se produce alguna modificacion en el filtro de la grilla.
   */
  _listenCambios() {
    // funcion que escucha los cambios del buscador para filtrar
    this.search_descripcion.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(() => {
      this._filterMediosDePago();
    });
    // funcion que escucha los cambios de los selectores para filtrar
    this.form.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(300), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(() => {
      this._filterMediosDePago();
    });
  }
  /**
   * Esta funcion inicializa el formulario de filtros
   */
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      filtroNumero: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroVencimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroFechaEmision: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroFechaCobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroDuplicaNumero: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroBanco: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroActivos: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
  }
  /**
   * Esta funcion es para listas los fondos de origen y destino en el filtro de grilla.
   * @returns fondos de origen y destino
   */
  getFondos() {
    const fondos = this.mediosDePagoService.getFondos().subscribe(fondos => {
      this.fondos = fondos;
    });
    return fondos;
  }
  /**
   *  -Funcion en el componente.-
   * - Funcion que comunica el componente con los servicios.
   * - Espera que se consulten los medios de pago del backend para almacenarlos en una variable.
   * - Teniendo la respuesta del backend en una variable, llama a la funcion 'getDataMediosDePago' pasandole por parametro los medios de pago.
   * - Le envia el filtro y el paginado al servicio.
   * @param filter Recibe los valores que haya tomado el filtro en la grilla.
   */
  getMediosDePago(filter) {
    var _this = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const medios_de_pago = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(_this.mediosDePagoService.getMediosDePago({
        filter
      }));
      _this.getDataMediosDePago(medios_de_pago);
    })();
  }
  /**
   *  -Funcion en el componente-
   * - Esta funcion toma los datos que se la pasan por parametro para crear una tabla con AngularMaterial.
   * @param data En data se almacenan los fondos.
  */
  getDataMediosDePago(data) {
    var _this2 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.medio_de_pago = data.list;
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(_this2.medio_de_pago);
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Funcion en el componente
   * Esta funcion toma los valores que tenga el formulario de filtro y
   * los encapsula en una constante para pasarla como parametro al obtener los medios de pago.
   * @const payload
   */
  _filterMediosDePago($event) {
    if ($event) {
      this.sortValue = $event.direction;
    }
    const payload = {
      descripcion: this.search_descripcion.value.toLowerCase(),
      lleva_numero: this.form.get('filtroNumero').value,
      lleva_vencimiento: this.form.get('filtroVencimiento').value,
      lleva_fecha_emision: this.form.get('filtroFechaEmision').value,
      lleva_fecha_cobro: this.form.get('filtroFechaCobro').value,
      lleva_banco: this.form.get('filtroBanco').value,
      duplica_numero: this.form.get('filtroDuplicaNumero').value,
      activo: this.form.get('filtroActivos').value,
      sort: this.sortValue
    };
    this.getMediosDePago(payload);
  }
  /**
   * Funcion en el componente
   * - Esta funcion guarda un medio de pago.
   * @param documentRef
   */
  saveMedioDePago(documentRef) {
    this.menu.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, documentRef._elementRef, {}).afterClosed().subscribe({
      next: response => {
        if (response) {
          this._filterMediosDePago();
        }
      }
    });
  }
  /**
   * Funcion en el componente
   * - Esta funcion actualiza un medio de pago.
   * @param documentRef
   * @param medio_de_pago
   */
  updateMedioDePago(documentRef, medio_de_pago) {
    this.menu.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, documentRef._elementRef, medio_de_pago).afterClosed().subscribe({
      next: response => {
        if (response) {
          this._filterMediosDePago();
        }
      }
    });
  }
  /**
   * Funcion en el componente
   * - Esta funcion elimina un medio de pago.
   * @param documentRef
   * @param medio_de_pago
   */
  deleteMedioDePago(medio_de_pago) {
    this.confirm.open({
      title: "Eliminar medio de pago " + medio_de_pago.descripcion,
      message: "¿Desea eliminar el medio de pago: " + medio_de_pago.descripcion + "?",
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
        this.mediosDePagoService.deleteMedioDePago(medio_de_pago.idpagotipo).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Medio de pago eliminado con éxito.");
            if (res) {
              this._filterMediosDePago();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.error("Este medio de pago no puede eliminarse. Esta asociado a algo más.");
          }
        });
      }
    });
  }
}
MediosDeCobroComponent.ɵfac = function MediosDeCobroComponent_Factory(t) {
  return new (t || MediosDeCobroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_2__.MediosDeCobroService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService));
};
MediosDeCobroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MediosDeCobroComponent,
  selectors: [["app-medios-de-cobro"]],
  decls: 114,
  vars: 20,
  consts: [[1, "w-full"], [1, "bg-slate-100", "w-full", "p-2"], [1, "bg-white", "shadow-md", "w-full", "px-4", "py-4", "rounded-lg", "flex", "justify-center", "items-center", 3, "formGroup"], ["appearance", "outline", 1, "w-2/5", "ml-2"], [1, "text-gray-700"], ["matInput", "", "placeholder", "Buscar", "autocomplete", "off", 1, "text-black", "w-full", 3, "formControl"], ["buscar_descripcion", ""], ["appearance", "outline", 1, "w-1/5", "ml-2"], ["formControlName", "filtroNumero", 3, "change"], [3, "value"], ["formControlName", "filtroVencimiento", 3, "change"], ["formControlName", "filtroFechaEmision", 3, "change"], ["formControlName", "filtroFechaCobro", 3, "change"], ["formControlName", "filtroDuplicaNumero", 3, "change"], ["formControlName", "filtroBanco", 3, "change"], ["formControlName", "filtroActivos", 3, "change"], ["mat-table", "", "matSort", "", 1, "w-full", "mt-1", "mb-18", "shadow-lg", "mr-2", "ml-2", 3, "dataSource", "matSortChange"], ["matColumnDef", "descripcion"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by descripcion", "class", "bg-slate-300", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descuento_recargo"], ["mat-header-cell", "", "class", "bg-slate-300", 4, "matHeaderCellDef"], ["matColumnDef", "numero"], ["matColumnDef", "vencimiento"], ["matColumnDef", "fecha_emision"], ["matColumnDef", "fecha_cobro"], ["matColumnDef", "duplica_numero"], ["matColumnDef", "banco"], ["matColumnDef", "fondo"], ["matColumnDef", "activo"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by descripcion", 1, "bg-slate-300"], ["mat-cell", ""], ["mat-header-cell", "", 1, "bg-slate-300"], ["mat-header-cell", "", "mat-button", "", 1, "bg-blue-500", "text-white", "rounded-md", 3, "click"], ["save", ""], ["mat-icon-button", "", 3, "click"], ["edit", ""], [1, "text-cyan-700"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function MediosDeCobroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "mat-form-field", 3)(4, "mat-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field", 7)(9, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MediosDeCobroComponent_Template_mat_select_change_11_listener() {
        return ctx._filterMediosDePago();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 7)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Vencimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MediosDeCobroComponent_Template_mat_select_change_21_listener() {
        return ctx._filterMediosDePago();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field", 7)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Fecha Emision");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MediosDeCobroComponent_Template_mat_select_change_31_listener() {
        return ctx._filterMediosDePago();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "mat-form-field", 7)(39, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Fecha Cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MediosDeCobroComponent_Template_mat_select_change_41_listener() {
        return ctx._filterMediosDePago();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-form-field", 7)(49, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Duplica Numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MediosDeCobroComponent_Template_mat_select_change_51_listener() {
        return ctx._filterMediosDePago();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "mat-form-field", 7)(59, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Banco");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "mat-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MediosDeCobroComponent_Template_mat_select_change_61_listener() {
        return ctx._filterMediosDePago();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-form-field", 7)(69, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Activos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function MediosDeCobroComponent_Template_mat_select_change_71_listener() {
        return ctx._filterMediosDePago();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "mat-option");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "table", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function MediosDeCobroComponent_Template_table_matSortChange_78_listener($event) {
        return ctx._filterMediosDePago($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](79, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](80, MediosDeCobroComponent_th_80_Template, 2, 0, "th", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, MediosDeCobroComponent_td_81_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](82, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, MediosDeCobroComponent_th_83_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, MediosDeCobroComponent_td_84_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](85, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](86, MediosDeCobroComponent_th_86_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, MediosDeCobroComponent_td_87_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](88, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](89, MediosDeCobroComponent_th_89_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, MediosDeCobroComponent_td_90_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](91, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](92, MediosDeCobroComponent_th_92_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](93, MediosDeCobroComponent_td_93_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](94, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](95, MediosDeCobroComponent_th_95_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](96, MediosDeCobroComponent_td_96_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](97, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](98, MediosDeCobroComponent_th_98_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, MediosDeCobroComponent_td_99_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](100, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](101, MediosDeCobroComponent_th_101_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](102, MediosDeCobroComponent_td_102_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](103, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](104, MediosDeCobroComponent_th_104_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](105, MediosDeCobroComponent_td_105_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](106, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](107, MediosDeCobroComponent_th_107_Template, 2, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, MediosDeCobroComponent_td_108_Template, 2, 1, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](109, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](110, MediosDeCobroComponent_th_110_Template, 4, 0, "th", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](111, MediosDeCobroComponent_td_111_Template, 9, 0, "td", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](112, MediosDeCobroComponent_tr_112_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](113, MediosDeCobroComponent_tr_113_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.search_descripcion);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpb3MtZGUtY29icm8uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhY2lvbi9tZWRpb3MtZGUtY29icm8vY29tcG9uZW50cy9tZWRpb3MtZGUtY29icm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 4025:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/components/save/save.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/medios-de-cobro.service */ 9378);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 6375);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/menu.service */ 8802);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);














function SaveComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fondo_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", fondo_r1.idfondo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](fondo_r1.descripcion);
  }
}
class SaveComponent {
  constructor(data, mediosDeCobroService, alert, menu, fb) {
    this.data = data;
    this.mediosDeCobroService = mediosDeCobroService;
    this.alert = alert;
    this.menu = menu;
    this.fb = fb;
    this.columns = ['descripcion', 'porcentaje', 'fondo'];
    this.fondos = [];
    this.medio_de_pago = this.data ? this.data : null;
    this.title = this.medio_de_pago?.idpagotipo ? 'Editar Movimiento' : 'Nuevo Movimiento';
  }
  ngOnInit() {
    this.newForm();
    this.getFondos();
  }
  newForm() {
    this.form = this.fb.group({
      descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.descripcion : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      porcentaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.porcentaje : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      idfondo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.idfondo : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.activo : ''),
      duplica_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.duplica_numero : ''),
      lleva_banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_banco : ''),
      lleva_numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_numero : ''),
      lleva_vencimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_vencimiento : ''),
      lleva_fecha_emision: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_fecha_emision : ''),
      lleva_fecha_cobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.medio_de_pago ? this.medio_de_pago.lleva_fecha_cobro : '')
    });
  }
  /**
   * Esta funcion la utilizamos cuando necesitamos listar los fondos en el saveComponent
   */
  getFondos() {
    const fondos = this.mediosDeCobroService.getFondos().subscribe(fondos => {
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
        this.mediosDeCobroService.updateMedioDePago(this.medio_de_pago).subscribe({
          next: data => {
            if (data) {
              this.menu.close(data);
            }
          }
        });
      } else {
        this.mediosDeCobroService.saveMedioDePago(this.medio_de_pago).subscribe({
          next: data => {
            if (data) {
              this.menu.close(data);
            }
          }
        });
      }
    }
  }
  onCloseMenu() {
    this.menu.close(false);
  }
}
SaveComponent.ɵfac = function SaveComponent_Factory(t) {
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_0__.MediosDeCobroService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_2__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-medios-de-cobro"]],
  decls: 43,
  vars: 3,
  consts: [[1, "fixed", "inset-0", "bg-white", "dark:bg-slate-900", "shadow-lg", "overflow-hidden", "overflow-y-auto", "sm:rounded-2xl", "md:min-w-[50rem]", "sm:w-90", "sm:min-w-90", "flex-col", "flex", "sm:inset-auto", "max-h-screen", "sm:static"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "flex", "w-full"], ["appearance", "outline", 1, "w-1/2", "mr-2"], ["matInput", "", "formControlName", "descripcion"], ["appearance", "outline", 1, "w-1/3"], ["formControlName", "idfondo"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "w-1/5", "ml-2"], ["matInput", "", "formControlName", "porcentaje"], [1, "p-2", "m-2"], [1, "flex", "justify-between"], ["formControlName", "lleva_numero"], ["formControlName", "lleva_vencimiento"], ["formControlName", "lleva_banco"], ["formControlName", "activo"], [1, "flex"], ["formControlName", "lleva_fecha_cobro", 1, "w-1/4"], ["formControlName", "lleva_fecha_emision", 1, "w-1/3", "ml-5", "pl-1"], ["formControlName", "duplica_numero"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "rounded-sm", 3, "click"], [3, "value"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "mat-form-field", 7)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 9)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Fondo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, SaveComponent_mat_option_18_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 12)(20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Porcentaje");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 14)(24, "div", 15)(25, "mat-checkbox", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-checkbox", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Vencimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-checkbox", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Banco");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-checkbox", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 20)(34, "mat-checkbox", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Fecha cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "mat-checkbox", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Fecha emision");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-checkbox", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Duplica numero");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 24)(41, "button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_41_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.fondos);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhY2lvbi9tZWRpb3MtZGUtY29icm8vY29tcG9uZW50cy9zYXZlL3NhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 1993:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/medios-de-cobro.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediosDeCobroModule": () => (/* binding */ MediosDeCobroModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 6679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ 6322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 3348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 3677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 6508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 8750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 9542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 7483);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/menu.service */ 8802);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 9941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 6375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 2423);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/save/save.component */ 4025);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 2556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 6844);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 6907);
/* harmony import */ var _components_medios_de_cobro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/medios-de-cobro.component */ 5315);
/* harmony import */ var _service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/medios-de-cobro.service */ 9378);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 5096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 6839);
























const routes = [{
  path: '',
  component: _components_medios_de_cobro_component__WEBPACK_IMPORTED_MODULE_4__.MediosDeCobroComponent
}];
class MediosDeCobroModule {}
MediosDeCobroModule.ɵfac = function MediosDeCobroModule_Factory(t) {
  return new (t || MediosDeCobroModule)();
};
MediosDeCobroModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MediosDeCobroModule
});
MediosDeCobroModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_service_medios_de_cobro_service__WEBPACK_IMPORTED_MODULE_5__.MediosDeCobroService, _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MediosDeCobroModule, {
    declarations: [_components_medios_de_cobro_component__WEBPACK_IMPORTED_MODULE_4__.MediosDeCobroComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_3__.SaveComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 9378:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/administracion/medios-de-cobro/service/medios-de-cobro.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediosDeCobroService": () => (/* binding */ MediosDeCobroService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 6839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3765);




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
  getMediosDePago(filter) {
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
   * @param medio_de_pago
   * @returns Un medio de pago nuevo
   */
  saveMedioDePago(medio_de_pago) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.ven_pago_tipos}`, medio_de_pago);
  }
  /**
   * Funcion en el servicio
   * @param medio_de_pago
   * @returns medio de pago actualizado
   */
  updateMedioDePago(medio_de_pago) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.ven_pago_tipos}` + '/' + medio_de_pago.idpagotipo, medio_de_pago);
  }
  /**
   * Funcion en el servicio
   * @param idpagotipo
   * @returns Elimina el medio de pago
  */
  deleteMedioDePago(idpagotipo) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.ven_pago_tipos + '/' + idpagotipo);
  }
  getFondos() {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.fondos.fondos}`);
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