"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_entregas-qr_entregas-qr_module_ts"],{

/***/ 50552:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/stock/entregas-qr/components/entregas-qr.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasQRComponent": () => (/* binding */ EntregasQRComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/lector-qr/lector-qr.component */ 5729);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save/save.component */ 34918);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _service_entregas_qr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/entregas-qr.service */ 64542);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/service/app/pwa.service */ 16173);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);




























function EntregasQRComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Escanear Credencial de Empleado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function EntregasQRComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"](" ", ctx_r1.nombre, " ", ctx_r1.apellido, " ");
  }
}
function EntregasQRComponent_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Escanear Orden de Servicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function EntregasQRComponent_p_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" \u00D3rden N\u00B0", ctx_r3.orden_servicio, " ");
  }
}
function EntregasQRComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 39)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function EntregasQRComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EntregasQRComponent_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r19.limpiarCasillero("deposito_entrega"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mat-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function EntregasQRComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const deposito_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", deposito_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", deposito_r21.descripcion, " ");
  }
}
function EntregasQRComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " C\u00F3digo Interno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r8.color_primario ? "" : ctx_r8.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("background", ctx_r8.color_primario || "");
  }
}
function EntregasQRComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r22.codigo_interno, " ");
  }
}
function EntregasQRComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r10.color_primario ? "" : ctx_r10.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("background", ctx_r10.color_primario || "");
  }
}
function EntregasQRComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r23.descripcion_articulo, " ");
  }
}
function EntregasQRComponent_th_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " U. de Medida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r12.color_primario ? "" : ctx_r12.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("background", ctx_r12.color_primario || "");
  }
}
function EntregasQRComponent_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r24.descripcion_um, " ");
  }
}
function EntregasQRComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Cantidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx_r14.color_primario ? "" : ctx_r14.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("background", ctx_r14.color_primario || "");
  }
}
function EntregasQRComponent_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r25.cantidad, " ");
  }
}
function EntregasQRComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 47);
  }
}
function EntregasQRComponent_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 48);
  }
}
function EntregasQRComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 49)(1, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "background": a0,
    "border": a1,
    "color": a2
  };
};
class EntregasQRComponent {
  constructor(_entregasQRService, _empresaService, confirm, alert, dialogo, _searchService, _menuService, router, _headerTextService, pwaService, datePipe) {
    this._entregasQRService = _entregasQRService;
    this._empresaService = _empresaService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.pwaService = pwaService;
    this.datePipe = datePipe;
    this.columns = ['codigo_interno', 'articulo', 'unidadmedida', 'cantidad'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.depositos = [];
    this.mov_art_list = [];
    this.usuarios = [];
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this.nombre = '';
    this.apellido = '';
    this.mostrarTextoCredencial = true;
    this.mostrarTextoOrdenServicio = true;
    this.buttonStyleCredencial = 'default';
    this.buttonStyleOrdenServicio = 'default';
    this.credencialScaneada = false;
    this.ordenServicioScaneada = false;
    this.deposito_default = 0;
    this._headerTextService.setTitulo(this.router);
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
      this.deposito_default = empresa.deposito_default;
      this.asignacion_entrega = empresa.asignacion_entrega;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.newForm();
    this.getDepositos();
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroup({
      deposito_entrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl(this.entrega ? this.entrega.descripcion_deposito : '', _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required)
    });
  }
  /**
   * Se escanea el QR de la Credencial de Usuario y se toma el idusuario.
   */
  credencialUsuario() {
    this.dialogo.open(_shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__.LectorQrComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.sendObject.subscribe(code => {
      if (!code || code.length === 0) {
        this.alert.error('Código QR vacío o inválido.');
        return;
      }
      let decodedText = JSON.parse(code); // Convierto el string en un json
      const idusuario = parseInt(decodedText['idusuario'], 10);
      this.idUsuario = idusuario;
      this._entregasQRService.getUsuarioQR(idusuario).subscribe(response => {
        if (response?.result?.length > 0) {
          const usuario = response.result[0];
          this.nombre = usuario.nombre;
          this.apellido = usuario.apellido;
          this.mostrarTextoCredencial = false;
          this.buttonStyleCredencial = 'scanned';
          this.credencialScaneada = true;
        } else {
          this.alert.error('Usuario no encontrado.');
        }
      }, error => {
        console.error('Error al obtener usuario:', error);
      });
    });
  }
  /**
   * Se escanea el QR de Orden de Servicio y se toma la idventagenerica.
   */
  ordenServicio() {
    let idordenservicio;
    let clave_os;
    let endpoint;
    let queryParams;
    this.dialogo.open(_shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__.LectorQrComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.sendObject.subscribe(code => {
      if (!code || code.length === 0) {
        this.alert.error('Código QR vacío o inválido.');
        return;
      }
      let decodedText = JSON.parse(code); // Convierto el string en json
      // Encapsulo los datos que voy a utilizar
      for (const clave in decodedText) {
        clave_os = clave;
        idordenservicio = decodedText[clave];
        this.asignacion_tipo = clave;
      }
      // Defino el endpoint segun cada asignacion
      if (this.asignacion_entrega === 0 && clave_os === 'idventagenerica') {
        endpoint = `${environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.ventas.view_venta_genericas}`;
      } else if (this.asignacion_entrega === 1 && clave_os === 'idcomplejo') {
        endpoint = `${environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.inmuebles.complejos.view_inm_complejos}`;
      } else if (this.asignacion_entrega === 1 && clave_os === 'idunidadfuncional') {
        endpoint = `${environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.inmuebles.unidad_funcional.view_inm_unidad_funcional}`;
      } else {
        return this.alert.error('Orden de Servicio no encontrada.');
      }
      // Aplico el filtro
      queryParams = `?filter[${clave_os}]=`;
      this._entregasQRService.getOrdenServicio(idordenservicio, endpoint, queryParams).subscribe(response => {
        if (response?.result?.length > 0) {
          const result = response.result[0];
          // Aplico el valor de la orden de servicio segun la asignacion que se haya escaneado
          if (this.asignacion_entrega === 0) {
            this.orden_servicio = result.idventagenerica;
          } else if (this.asignacion_entrega === 1 && clave_os === 'idcomplejo') {
            this.orden_servicio = result.idcomplejo;
          } else if (this.asignacion_entrega === 1 && clave_os === 'idunidadfuncional') {
            this.orden_servicio = result.idunidadfuncional;
          }
          this.mostrarTextoOrdenServicio = false;
          this.buttonStyleOrdenServicio = 'scanned';
          this.ordenServicioScaneada = true;
        } else {
          this.alert.error('Orden de Servicio no encontrada.');
        }
      }, error => {
        console.error('Error al obtener venta:', error);
      });
    });
  }
  /**
   *
   * @param option
   * Se va a traer los Depositos para listarlos en un Select
   */
  getDepositos(option) {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Depositos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.firstValueFrom)(_this._entregasQRService.getDepositos(option));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.depositos = Depositos.list;
          // Filtrar y autoasignar el depósito por defecto
          const depositoPorDefecto = _this.depositos.find(deposito => deposito.iddeposito === _this.deposito_default);
          if (depositoPorDefecto) {
            _this.form.get('deposito_entrega').setValue(depositoPorDefecto);
          }
          _this.filteredDepositos = _this.form.get('deposito_entrega').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.map)(value => _this._filterDepositos(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   *
   * @param deposito
   * @returns Filtrado de Depositos para el Autocomplete
   */
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
   * Esta funcion guarda un item
   */
  agregarArticulo() {
    if (this.form.get('deposito_entrega').value != '') {
      let deposito_entrega_value = this.form.get('deposito_entrega').value.iddeposito;
      this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_3__.SaveComponent, {
        panelClass: 'ayuda-dialog',
        data: {
          deposito_entrega: deposito_entrega_value,
          movimientos: this.mov_art_list
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
              codigo_interno: res.articulo.codigo,
              stock: res.stock //Stock restante de ese articulo con esa um...
            };

            this.mov_art_list = [movimiento_articulo, ...this.mov_art_list];
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.mov_art_list); //Actualizo la tabla
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
  * Funcion para limpiar campos
  */
  limpiarCasillero(input) {
    this.form.get(input).setValue('');
  }
  /**
   * Resetea todo el Formulario de Entrega con QR
   */
  resetForm() {
    // Filtrar y autoasignar el depósito por defecto
    const depositoPorDefecto = this.depositos.find(deposito => deposito.iddeposito === this.deposito_default);
    this.form.get('deposito_entrega').setValue(depositoPorDefecto ? depositoPorDefecto : '');
    this.form.get('deposito_entrega').enable();
    this.form.get('deposito_entrega').setErrors(null);
    this.mov_art_list = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.mov_art_list);
    this.mostrarTextoCredencial = true;
    this.mostrarTextoOrdenServicio = true;
    this.buttonStyleCredencial = 'default';
    this.buttonStyleOrdenServicio = 'default';
    this.credencialScaneada = false;
    this.ordenServicioScaneada = false;
    this.idUsuario = null;
    this.nombre = '';
    this.apellido = '';
    this.orden_servicio = null;
  }
  onSubmit() {
    // if (!this.credencialScaneada || !this.ordenServicioScaneada) {
    //     this.alert.error('Escanea ambos códigos QR');
    //     return;
    // }
    if (!this.ordenServicioScaneada) {
      this.alert.error('Debe Escanear La Orden De Servicio');
      return;
    }
    if (!this.form.get('deposito_entrega').value || !this.form.get('deposito_entrega').value.iddeposito) {
      this.alert.error('Revise Los Datos Ingresados');
      return;
    } else {
      let movimientos = this.mov_art_list.map(objeto => ({
        idarticulo: objeto.idarticulo,
        cantidad: objeto.cantidad,
        idunidadmedida: objeto.idunidadmedida
      }));
      if (movimientos.length === 0) {
        return this.alert.warning('Debe ingresar un articulo a la orden de entrega.');
      }
      const fecha = new Date().toISOString().split('T')[0];
      const hora = new Date().toLocaleTimeString([], {
        hour12: false
      });
      // Se formatea la fecha nuevamente al formato deseado (YYYY-MM-DD)
      const fecha_formateada = this.datePipe.transform(fecha, 'yyyy-MM-dd');
      // Se concatena a ambas fecha y hora
      const fecha_hora = `${fecha_formateada} ${hora}`;
      const payload = {
        entrega: {
          idusuario: this.user.id,
          fecha_hora_precarga: fecha_hora,
          iddeposito: this.form.get('deposito_entrega').value.iddeposito,
          usuario_entrega: this.idUsuario ? this.idUsuario : null,
          observaciones: `Entrega QR - Órden N°${this.orden_servicio}`,
          idventagenerica: this.asignacion_tipo === 'idventagenerica' ? this.orden_servicio : null,
          idunidadfuncional: this.asignacion_tipo === 'idunidadfuncional' ? this.orden_servicio : null,
          idcomplejo: this.asignacion_tipo === 'idcomplejo' ? this.orden_servicio : null
        },
        movimientos: movimientos
      };
      this._entregasQRService.saveEntregaQR(payload).subscribe({
        next: data => {
          if (data) {
            this.alert.success("Entrega creada con éxito.");
            setTimeout(() => {
              this.resetForm();
            }, 1500);
          }
        }
      });
    }
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
    this.dialogo.closeAll();
  }
}
EntregasQRComponent.ɵfac = function EntregasQRComponent_Factory(t) {
  return new (t || EntregasQRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_service_entregas_qr_service__WEBPACK_IMPORTED_MODULE_5__.EntregasQRService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_9__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_10__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_11__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_12__.PwaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe));
};
EntregasQRComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: EntregasQRComponent,
  selectors: [["app-entregas-qr"]],
  viewQuery: function EntregasQRComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  decls: 54,
  vars: 42,
  consts: [[1, "flex-auto", "p-2", "sm:p-10", "bg-card", "relative"], [1, "text-3xl", "font-semibold", "mb-6", "text-center"], [1, "flex", "items-center", "justify-center", "mb-6", 3, "click"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "rounded-full", "mr-4", 3, "ngClass", "ngStyle"], ["width", "22", "height", "22", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.66667 2.66667H6.66667V6.66667H2.66667V2.66667ZM13.3333 2.66667V6.66667H9.33333V2.66667H13.3333ZM9.33333 10H10.6667V8.66667H9.33333V7.33333H10.6667V8.66667H12V7.33333H13.3333V8.66667H12V10H13.3333V12H12V13.3333H10.6667V12H8.66667V13.3333H7.33333V10.6667H9.33333V10ZM10.6667 10V12H12V10H10.6667ZM2.66667 13.3333V9.33333H6.66667V13.3333H2.66667ZM4 4V5.33333H5.33333V4H4ZM10.6667 4V5.33333H12V4H10.6667ZM4 10.6667V12H5.33333V10.6667H4ZM2.66667 7.33333H4V8.66667H2.66667V7.33333ZM6 7.33333H8.66667V10H7.33333V8.66667H6V7.33333ZM7.33333 4H8.66667V6.66667H7.33333V4ZM1.33333 1.33333V4H0V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0L4 0V1.33333H1.33333ZM14.6667 0C15.0203 0 15.3594 0.140476 15.6095 0.390524C15.8595 0.640573 16 0.979711 16 1.33333V4H14.6667V1.33333H12V0H14.6667ZM1.33333 12V14.6667H4V16H1.33333C0.979711 16 0.640573 15.8595 0.390524 15.6095C0.140476 15.3594 0 15.0203 0 14.6667V12H1.33333ZM14.6667 14.6667V12H16V14.6667C16 15.0203 15.8595 15.3594 15.6095 15.6095C15.3594 15.8595 15.0203 16 14.6667 16H12V14.6667H14.6667Z", "fill", "currentColor"], ["class", "text-lg font-semibold w-72", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "mb-4", 3, "click"], [1, "flex", "flex-col", "form-menu", "items-center", "justify-center", "my-6", 3, "formGroup"], [1, "w-90"], [1, "block", "font-semibold", "text-lg", "mb-2"], ["appearance", "fill", 1, "w-full", "sm:w-90"], ["type", "text", "matInput", "", "formControlName", "deposito_entrega", "placeholder", "Seleccione Dep\u00F3sito", 3, "matAutocomplete"], ["mat-icon-button", "", "matSuffix", "", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["autoActiveFirstOption", "", 3, "displayWith"], ["art", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", 1, "w-36", "rounded-lg", "py-0", "ml-[215px]", "!border", "border-solid", 3, "click"], [1, "flex", "item-center"], [1, "text-lg"], [1, "overflow-y-auto", "max-h-[150px]", "h-[150px]", "shadow-md", "rounded-lg", "mt-8"], ["mat-table", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "codigo_interno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "unidadmedida"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", "class", "rounded-tr-lg text-white", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], [1, "flex", "items-center", "justify-center"], [1, "w-90", "mt-8"], ["mat-flat-button", "", 1, "rounded-lg", "w-36", "ml-[215px]", "py-0", 3, "click"], [1, "text-lg", "text-white"], [1, "text-lg", "font-semibold", "w-72"], ["mat-icon-button", "", "matSuffix", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "text-xl"], [3, "value"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white"], ["mat-cell", ""], ["mat-header-cell", "", 1, "text-white"], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"]],
  template: function EntregasQRComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Realizar Entrega");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EntregasQRComponent_Template_div_click_3_listener() {
        return ctx.credencialUsuario();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, EntregasQRComponent_p_7_Template, 2, 0, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, EntregasQRComponent_p_8_Template, 2, 2, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EntregasQRComponent_Template_div_click_9_listener() {
        return ctx.ordenServicio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, EntregasQRComponent_p_13_Template, 2, 0, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, EntregasQRComponent_p_14_Template, 2, 1, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "form", 8)(16, "div", 9)(17, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Dep\u00F3sito");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, EntregasQRComponent_button_21_Template, 3, 0, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](22, EntregasQRComponent_button_22_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "mat-autocomplete", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, EntregasQRComponent_mat_option_25_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EntregasQRComponent_Template_button_click_27_listener() {
        return ctx.agregarArticulo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](28, "div", 19)(29, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Agregar Art\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "div", 21)(32, "table", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](33, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, EntregasQRComponent_th_34_Template, 2, 4, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, EntregasQRComponent_td_35_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](36, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](37, EntregasQRComponent_th_37_Template, 2, 4, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](38, EntregasQRComponent_td_38_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](39, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, EntregasQRComponent_th_40_Template, 2, 4, "th", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](41, EntregasQRComponent_td_41_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](42, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](43, EntregasQRComponent_th_43_Template, 2, 4, "th", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](44, EntregasQRComponent_td_44_Template, 2, 1, "td", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, EntregasQRComponent_tr_45_Template, 1, 0, "tr", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](46, EntregasQRComponent_tr_46_Template, 1, 0, "tr", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](47, EntregasQRComponent_div_47_Template, 3, 0, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "div", 34)(49, "div", 35)(50, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function EntregasQRComponent_Template_button_click_50_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "div", 19)(52, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx.color_primario ? "" : ctx.default_color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction3"](34, _c0, ctx.buttonStyleCredencial === "default" ? ctx.color_primario || "" : "", ctx.buttonStyleCredencial === "scanned" ? "2px solid " + (ctx.color_primario || "") : "", ctx.buttonStyleCredencial === "scanned" ? ctx.color_primario || "" : "white"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mostrarTextoCredencial);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.mostrarTextoCredencial);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx.color_primario ? "" : ctx.default_color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction3"](38, _c0, ctx.buttonStyleOrdenServicio === "default" ? ctx.color_primario || "" : "", ctx.buttonStyleOrdenServicio === "scanned" ? "2px solid " + (ctx.color_primario || "") : "", ctx.buttonStyleOrdenServicio === "scanned" ? ctx.color_primario || "" : "white"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.mostrarTextoOrdenServicio);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.mostrarTextoOrdenServicio);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matAutocomplete", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.form.get("deposito_entrega").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.form.get("deposito_entrega").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("displayWith", ctx.getTextDeposito);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](26, 32, ctx.filteredDepositos));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("background", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.idUsuario ? "Entregar" : "Precargar", " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgStyle, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_27__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnRyZWdhcy1xci5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9lbnRyZWdhcy1xci9jb21wb25lbnRzL2VudHJlZ2FzLXFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 34918:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/stock/entregas-qr/components/save/save.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/lector-qr/lector-qr.component */ 5729);
/* harmony import */ var _service_entregas_qr_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/entregas-qr.service */ 64542);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);






















function SaveComponent_fuse_alert_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fuse-alert", 38);
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
function SaveComponent_p_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Escanear Art\u00EDculo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SaveComponent_p_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r2.codigo_interno, " - ", ctx_r2.descripcion, " ");
  }
}
function SaveComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", um_r5.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](um_r5.descripcion_um);
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    "background": a0,
    "border": a1,
    "color": a2
  };
};
class SaveComponent {
  constructor(data, _entregasQRService, _empresaService, datePipe, alert, dialogRef, dialogo) {
    this.data = data;
    this._entregasQRService = _entregasQRService;
    this._empresaService = _empresaService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.articulos = [];
    this.idArticulo = null;
    this.unidades_de_medida = [];
    this.default_color = 'bg-primary';
    this.showAlert = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.codigo_interno = '';
    this.descripcion = '';
    this.mostrarTexto = true;
    this.buttonStyle = 'default';
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
    this.subscribeAlert();
    this.etiquetaArticulo();
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
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroup({
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required),
      stock_existente: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl(''),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required)
    });
    this.form.get('unidadmedida').disable();
    this.form.get('stock_existente').disable();
    this.form.get('cantidad').disable();
  }
  /**
   * Funcion que lista los articulos que posee un déposito.
   */
  getArticulosDepositos() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos_um_deposito = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.firstValueFrom)(_this._entregasQRService.getArticulosDepositos(_this.data.deposito_entrega)); // solicitamos los artículos que estén en un depósito
      _this.articulos = articulos_um_deposito.list;
    })();
  }
  /**
   * Se escanea el QR de las Etiqueta de Articulos y se toma el idarticulo.
   */
  etiquetaArticulo() {
    var _this2 = this;
    this.dialogo.open(_shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__.LectorQrComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.sendObject.subscribe( /*#__PURE__*/function () {
      var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (code) {
        if (!code || code.length === 0) {
          _this2.alert.error('Código QR vacío o inválido.');
          return;
        }
        let decodedText = JSON.parse(code); // Convierto el string en json
        const idarticulo = parseInt(decodedText['idarticulo']);
        try {
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.firstValueFrom)(_this2._entregasQRService.getArticuloQR(idarticulo));
          if (response?.result?.length > 0) {
            const articulo = response.result[0];
            // Validar si el artículo está en el depósito
            const articuloEnDeposito = _this2.articulos.find(item => item.idarticulo === articulo.idarticulo);
            if (articuloEnDeposito) {
              _this2.idArticulo = articulo.idarticulo;
              _this2.codigo_interno = articulo.codigo_interno;
              _this2.descripcion = articulo.descripcion;
              _this2.mostrarTexto = false;
              _this2.buttonStyle = 'scanned';
              _this2.getUnidadesDeMedidaArticulos(articulo.idarticulo);
            } else {
              _this2.alert.error('Artículo sin stock en este depósito.');
            }
            _this2.form.get('unidadmedida').enable();
            _this2.form.get('cantidad').enable();
          } else {
            _this2.alert.error('Artículo no encontrado.');
          }
        } catch (error) {
          console.error('Error al obtener artículo:', error);
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }
  /**
   * Esta funcion solicita las unidades de medida que posee un articulo.
   * @param idarticulo
   */
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this3 = this;
    new Promise( /*#__PURE__*/function () {
      var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        _this3.unidades_de_medida = _this3.articulos.filter(a => a.idarticulo === idarticulo).sort((a, b) => a.factor_um - b.factor_um).map(a => {
          return {
            idarticulo: a.idarticulo,
            codigo_interno: a.codigo_interno,
            idunidadmedida: a.idunidadmedida,
            descripcion_um: a.um,
            stock: a.stock
          };
        });
        // Autoasigna la primera unidad de medida al control del formulario
        if (_this3.unidades_de_medida.length > 0) {
          _this3.form.get('unidadmedida').setValue(_this3.unidades_de_medida[0].idunidadmedida);
          _this3.seleccionArticulo({
            um: _this3.unidades_de_medida[0].idunidadmedida
          });
        }
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
      let articulo_um = this.unidades_de_medida.find(a => a.idarticulo === this.idArticulo && a.idunidadmedida === this.form.get('unidadmedida').value);
      let stock; //variable auxiliar   
      let cantidad_existente = 0;
      let existeMovimiento = this.data.movimientos.length > 0 ? true : false; //Consultamos sí hay movimientos
      if (existeMovimiento) {
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
   *
   * @param input
   * Metodo para el boton de suma para el campo de Cantidad.
   */
  sumaArticulo(input) {
    if (this.idArticulo !== null) {
      const currentValue = Number(input.value) || 0;
      this.form.controls['cantidad'].setValue(currentValue + 1);
    }
  }
  /**
   *
   * @param input
   * Metodo para el boton de resta para el campo de Cantidad.
   */
  restaArticulo(input) {
    if (this.idArticulo !== null) {
      const currentValue = Number(input.value) || 0;
      if (currentValue > 0) {
        this.form.controls['cantidad'].setValue(currentValue - 1);
      }
    }
  }
  /**
   * Limpia los campos del Formulario.
   */
  limpiarCasilleros() {
    this.codigo_interno = '';
    this.descripcion = '';
    this.mostrarTexto = true;
    this.buttonStyle = 'default';
    this.form.reset({
      unidadmedida: '',
      stock_existente: '',
      cantidad: ''
    });
  }
  /**
  * Maneja los eventos de teclado en el formulario.
  * @param event - El evento del teclado.
  */
  onKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Evita el comportamiento predeterminado del Enter (como el envío de formularios)
      this.onSubmit(); // Llama a la función onSubmit
    }
  }

  onSubmit() {
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      this.articulos.forEach(articulo => {
        if (articulo.idarticulo === this.idArticulo && articulo.idunidadmedida === this.form.get('unidadmedida').value) {
          if (this.form.get('cantidad').value > articulo.stock) {
            this.form.get('cantidad').setValue('');
            return this.alert.warning('No hay stock suficiente!');
          }
          let existeMovimiento = this.data.movimientos.find(movimiento => movimiento.idarticulo === this.idArticulo && movimiento.idunidadmedida === this.form.get('unidadmedida').value);
          if (existeMovimiento) {
            this.form.get('unidadmedida').setValue('');
            this.form.get('stock_existente').setValue('');
            this.form.get('cantidad').setValue('');
            return this.alert.warning('Este artículo ya tiene un movimiento con esta unidad.');
          }
          if (this.form.get('cantidad').value <= articulo.stock && this.form.get('cantidad').value > 0) {
            let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
            let movimiento_articulo = {
              articulo: {
                idarticulo: this.idArticulo,
                codigo: this.codigo_interno,
                descripcion: this.descripcion
              },
              unidad_medida: this.form.get('unidadmedida').value,
              unidadmedida_descripcion: unidadmedida.descripcion_um,
              stock: `${Number(articulo.stock) - this.form.get('cantidad').value}`,
              cantidad: this.form.get('cantidad').value
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
SaveComponent.ɵfac = function SaveComponent_Factory(t) {
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_entregas_qr_service__WEBPACK_IMPORTED_MODULE_3__.EntregasQRService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-entregas"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 52,
  vars: 37,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-120", "sm:w-min-w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "flex", "px-8", "pt-6", "items-center", "sm:ml-12", 3, "click"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "rounded-full", "mr-4", 3, "ngClass", "ngStyle"], ["width", "22", "height", "22", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.66667 2.66667H6.66667V6.66667H2.66667V2.66667ZM13.3333 2.66667V6.66667H9.33333V2.66667H13.3333ZM9.33333 10H10.6667V8.66667H9.33333V7.33333H10.6667V8.66667H12V7.33333H13.3333V8.66667H12V10H13.3333V12H12V13.3333H10.6667V12H8.66667V13.3333H7.33333V10.6667H9.33333V10ZM10.6667 10V12H12V10H10.6667ZM2.66667 13.3333V9.33333H6.66667V13.3333H2.66667ZM4 4V5.33333H5.33333V4H4ZM10.6667 4V5.33333H12V4H10.6667ZM4 10.6667V12H5.33333V10.6667H4ZM2.66667 7.33333H4V8.66667H2.66667V7.33333ZM6 7.33333H8.66667V10H7.33333V8.66667H6V7.33333ZM7.33333 4H8.66667V6.66667H7.33333V4ZM1.33333 1.33333V4H0V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0L4 0V1.33333H1.33333ZM14.6667 0C15.0203 0 15.3594 0.140476 15.6095 0.390524C15.8595 0.640573 16 0.979711 16 1.33333V4H14.6667V1.33333H12V0H14.6667ZM1.33333 12V14.6667H4V16H1.33333C0.979711 16 0.640573 15.8595 0.390524 15.6095C0.140476 15.3594 0 15.0203 0 14.6667V12H1.33333ZM14.6667 14.6667V12H16V14.6667C16 15.0203 15.8595 15.3594 15.6095 15.6095C15.3594 15.8595 15.0203 16 14.6667 16H12V14.6667H14.6667Z", "fill", "currentColor"], ["class", "text-lg font-semibold", 4, "ngIf"], [1, "form-menu", "p-8", "sm:ml-12", 3, "formGroup"], [1, "flex", "gap-4"], [1, "flex", "flex-col"], [1, "block", "font-semibold", "text-lg", "mb-2"], ["appearance", "outline", 1, "w-[186px]"], ["formControlName", "unidadmedida", "placeholder", "Selecciona una UM", 3, "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "block", "font-semibold", "text-lg", "mb-2", "text-gray-500"], ["appearance", "outline", 1, "w-32"], ["matInput", "", "type", "number", "formControlName", "stock_existente", "placeholder", "Stock Art\u00EDculo", "readonly", "true"], [1, "flex", "gap-2"], ["appearance", "outline", 1, "w-48"], ["matInput", "", "type", "number", "formControlName", "cantidad", "placeholder", "Cantidad a Entregar", 3, "keydown"], ["cantidadInput", ""], [1, "flex", "items-center", "justify-center", "ml-2"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "sm:w-12", "sm:h-12", "rounded-full", "mt-3.5", "mr-2", "sm:mr-4", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 10H10V16H6V10H0V6H6V0H10V6H16V10Z", "fill", "white"], [1, "flex", "items-center", "justify-center", "w-10", "h-10", "sm:w-12", "sm:h-12", "rounded-full", "mt-3.5", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "14", "height", "2", "viewBox", "0 0 14 2", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M14 2H0V0H14V2Z", "fill", "white"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-flat-button", "", 1, "hidden", "!border", "border-solid", "md:block", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", "mr-2", 3, "click"], [1, "font-medium", "text-base"], ["mat-flat-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "md:w-36", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "text-lg", "font-semibold"], [3, "value"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Agregar Art\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.limpiarCasilleros();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_8_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, SaveComponent_fuse_alert_11_Template, 2, 4, "fuse-alert", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_div_click_12_listener() {
        return ctx.etiquetaArticulo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SaveComponent_p_16_Template, 2, 0, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, SaveComponent_p_17_Template, 2, 2, "p", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "form", 12)(19, "div", 13)(20, "div", 14)(21, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Unidad de Medida");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "mat-form-field", 16)(24, "mat-select", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_mat_select_ngModelChange_24_listener($event) {
        return ctx.seleccionArticulo({
          um: $event
        });
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, SaveComponent_mat_option_25_Template, 2, 2, "mat-option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 14)(27, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "En Stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-form-field", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 22)(32, "div", 14)(33, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-form-field", 23)(36, "input", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function SaveComponent_Template_input_keydown_36_listener($event) {
        return ctx.onKeyDown($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 26)(39, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_39_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](37);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.sumaArticulo(_r4));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "svg", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "path", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_42_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](37);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.restaArticulo(_r4));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "svg", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "path", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "div", 33)(46, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_46_listener() {
        return ctx.limpiarCasilleros();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_49_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Agregar");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.color_primario)("color", ctx.color_secundario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.color_primario ? "" : ctx.default_color)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](33, _c0, ctx.buttonStyle === "default" ? ctx.color_primario || "" : "", ctx.buttonStyle === "scanned" ? "2px solid " + (ctx.color_primario || "") : "", ctx.buttonStyle === "scanned" ? ctx.color_primario || "" : "white"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mostrarTexto);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.mostrarTexto);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.unidades_de_medida);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.color_primario);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx.color_primario);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx.color_primario)("color", ctx.color_secundario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgStyle, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.FuseAlertComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9lbnRyZWdhcy1xci9jb21wb25lbnRzL3NhdmUvc2F2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1453:
/*!*****************************************************************!*\
  !*** ./src/app/modules/stock/entregas-qr/entregas-qr.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasQRModule": () => (/* binding */ EntregasQRModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _service_entregas_qr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/entregas-qr.service */ 64542);
/* harmony import */ var _components_entregas_qr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/entregas-qr.component */ 50552);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/save/save.component */ 34918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);

























const routes = [{
  path: '',
  component: _components_entregas_qr_component__WEBPACK_IMPORTED_MODULE_5__.EntregasQRComponent
}];
class EntregasQRModule {}
EntregasQRModule.ɵfac = function EntregasQRModule_Factory(t) {
  return new (t || EntregasQRModule)();
};
EntregasQRModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: EntregasQRModule
});
EntregasQRModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_service_entregas_qr_service__WEBPACK_IMPORTED_MODULE_4__.EntregasQRService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](EntregasQRModule, {
    declarations: [_components_entregas_qr_component__WEBPACK_IMPORTED_MODULE_5__.EntregasQRComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_6__.SaveComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 64542:
/*!**************************************************************************!*\
  !*** ./src/app/modules/stock/entregas-qr/service/entregas-qr.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasQRService": () => (/* binding */ EntregasQRService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class EntregasQRService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el Servicio
   * @param entregas
   * @returns Crea un item nuevo
   */
  saveEntregaQR(entregas) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.entregas}`, entregas);
  }
  /**
   *
   * @param codigo
   * @returns Verifica si el QR escaneado de la Credencial del Usuario es valido.
   */
  getUsuarioQR(codigo) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.login.view_usuarios}?filter[codigo]=` + codigo);
  }
  /**
  *
  * @param idordenservicio
  * @param queryParams
  * @returns Verifica si el QR escaneado de la Orden de Servicio es valido.
  */
  getOrdenServicio(idordenservicio, endpoint, queryParams) {
    return this.http.get(`${endpoint}${queryParams}` + idordenservicio);
  }
  /**
   *
   * @param idarticulo
   * @returns Verifica si el QR escaneado de las Etiquetas de Articulos es valido.
   */
  getArticuloQR(idarticulo) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_articulos}?pagination=1&filter[idarticulo]=` + idarticulo);
  }
  /**
   *
   * @param option
   * @returns Trae los Depositos de dichas empresa
   */
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
  /**
   *
   * @param deposito
   * @returns Trae los Articulos que se tienen en dichos Depositos.
   */
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
}
EntregasQRService.ɵfac = function EntregasQRService_Factory(t) {
  return new (t || EntregasQRService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
EntregasQRService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: EntregasQRService,
  factory: EntregasQRService.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_entregas-qr_entregas-qr_module_ts.js.map