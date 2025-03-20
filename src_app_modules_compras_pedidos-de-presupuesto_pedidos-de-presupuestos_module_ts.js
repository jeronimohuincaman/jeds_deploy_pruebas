"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_compras_pedidos-de-presupuesto_pedidos-de-presupuestos_module_ts"],{

/***/ 88964:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/components/cotizar/cotizar.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CotizarComponent": () => (/* binding */ CotizarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _nueva_cotizacion_nueva_cotizacion_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nueva-cotizacion/nueva-cotizacion.component */ 57439);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _generar_orden_generar_orden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generar-orden/generar-orden.component */ 35381);
/* harmony import */ var _service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/pedidos-de-presupuesto.service */ 71137);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);



















function CotizarComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "fuse-alert", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx_r0._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0._alertConfig.message, " ");
  }
}
class CotizarComponent {
  constructor(data, _pedidosDePresupuestosService, confirm, _empresaService, dialogo, alert, dialogRef) {
    this.data = data;
    this._pedidosDePresupuestosService = _pedidosDePresupuestosService;
    this.confirm = confirm;
    this._empresaService = _empresaService;
    this.dialogo = dialogo;
    this.alert = alert;
    this.dialogRef = dialogRef;
    // Necesarios para la app
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    // Particulares del modulo
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource();
    this.headers = ['Fecha', 'Proveedor', 'Acciones'];
    this.column_params = ['fecha', 'proveedor', 'acciones'];
    this.funcionesObjeto = null;
    this.env = null;
    this.pedido_de_presupuesto = this.data ? this.data : null;
    this.title = `Cotizaciones Pedido de Presupuesto N° ${this.pedido_de_presupuesto.idpedido}`;
    /**
    * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
    */
    this.funcionesObjeto = [{
      icono: 'edit',
      nombre_boton: "Editar",
      functionName: 'editar',
      iconoAccion: cotizacion => cotizacion.orden_compra ? 'jedstion:editar_disabled' : 'jedstion:editar',
      iconoAccionado: cotizacion => '',
      iconoDeshabilitado: cotizacion => ''
    }, {
      icono: 'delete',
      nombre_boton: "Eliminar",
      functionName: 'eliminar',
      iconoAccion: cotizacion => cotizacion.orden_compra ? 'jedstion:eliminar_disabled' : 'jedstion:eliminar',
      iconoAccionado: cotizacion => '',
      iconoDeshabilitado: cotizacion => ''
    }, {
      icono: 'orden_de_compra',
      nombre_boton: "Generar Orden de Compra",
      functionName: 'orden_de_compra',
      iconoAccion: cotizacion => cotizacion.orden_compra ? 'jedstion:orden_de_produccion_disabled' : 'jedstion:orden_de_produccion',
      iconoAccionado: cotizacion => '',
      iconoDeshabilitado: cotizacion => ''
    }];
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.view_compras_cotizacion + '?' + `filter[idpedido]=${this.pedido_de_presupuesto.idpedido}&sort=-fecha`;
  }
  ngOnInit() {
    // Load empresa data
    this._empresaService.getEmpresa();
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.timer)(100, 1700).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  onCloseMenu() {
    this.dialogRef.close();
  }
  /**
  * Esta es la funcion que se encarga de la columna acciones dentro de la grilla dinamica
  * @param event
  */
  generarAcciones(event) {
    switch (event.name) {
      case 'editar':
        if (event.params.data.orden_compra != null) {
          this.alert.warning('No puedes editar esta cotización. Tiene una orden de compra asociada. Eliminela antes de continuar.');
        } else {
          this.updateCotizacion(event);
        }
        break;
      case 'eliminar':
        if (event.params.data.orden_compra != null) {
          this.alert.warning('No puedes eliminar esta cotización. Tiene una orden de compra asociada. Eliminela antes de continuar.');
        } else {
          this.deleteCotizacion(event);
        }
        break;
      case 'orden_de_compra':
        if (event.params.data.orden_compra != null) {
          this.alert.warning(' Ya haz generado una orden de compra para esta cotización.');
        } else {
          this.generarOrdenDeCompra(event);
        }
        break;
    }
  }
  nuevaCotizacion() {
    this.dialogo.open(_nueva_cotizacion_nueva_cotizacion_component__WEBPACK_IMPORTED_MODULE_1__.NuevaCotizacionComponent, {
      data: {
        pedido_de_presupuesto: this.pedido_de_presupuesto,
        cotizacion: null
      },
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.alert.success("Cotización creada con éxito.");
        this.tabla.renderTabla();
      }
    });
  }
  /** Modal Encargado de levantar edicion */
  updateCotizacion(event) {
    this.dialogo.open(_nueva_cotizacion_nueva_cotizacion_component__WEBPACK_IMPORTED_MODULE_1__.NuevaCotizacionComponent, {
      data: {
        pedido_de_presupuesto: this.pedido_de_presupuesto,
        cotizacion: event.params.data
      },
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.editadoExitosamente.subscribe({
      next: data => {
        if (data.success) {
          this.alert.success("Cotización editada con éxito.");
        } else if (!data.success) {
          this.alert.error(data.result);
        }
        this.tabla.renderTabla();
      }
    });
  }
  /**
   * Esta funcion elimina un item
   * @param event
   */
  deleteCotizacion(event) {
    this.confirm.open({
      title: "Eliminar Cotización " + event.params.data.observaciones,
      message: "¿Desea eliminar la Cotización de: " + event.params.data.proveedor + "?",
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
        this._pedidosDePresupuestosService.deleteCotizacion(event.params.data.idcotizacion).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            if (data.success) {
              this.alert.success("Cotización eliminada con éxito.");
              this.tabla.renderTabla();
            } else {
              this.alert.error(data.result);
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.error("Este pedido de presupuesto no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  /**
   * Metodo encargado levantar el modal de orden de compra
   * @param event
   */
  generarOrdenDeCompra(event) {
    this.dialogo.open(_generar_orden_generar_orden_component__WEBPACK_IMPORTED_MODULE_3__.GenerarOrdenComponent, {
      data: {
        pedido_de_presupuesto: this.pedido_de_presupuesto,
        cotizacion: event.params.data
      },
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.creadoExitosamente.subscribe({
      next: data => {
        if (data.success) {
          this.alert.success("Orden de compra Generada con éxito.");
        } else if (!data.success) {
          this.alert.error(data.result);
        }
        this.tabla.renderTabla();
      }
    });
  }
}
CotizarComponent.ɵfac = function CotizarComponent_Factory(t) {
  return new (t || CotizarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_4__.PedidoDePresupuestoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_7__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef));
};
CotizarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CotizarComponent,
  selectors: [["app-cotizar-pedidos-de-presupuesto"]],
  viewQuery: function CotizarComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  decls: 20,
  vars: 20,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "max-w-[1280px]", "xl:max-w-[1280px]", "xl:min-w-[950px]", "sm:max-w-[950px]", "sm:min-w-[800px]", "sm:rounded-2xl", "overflow-y-auto", "xl:max-h-[950px]", "xl:min-h-[850px]", "sm:max-h-[630px]", "sm:min-h-[500px]", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "p-4"], [1, "flex", "mb-2"], [1, "ml-auto"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], ["save", ""], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "isModal", "functionEmitter"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"]],
  template: function CotizarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CotizarComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, CotizarComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 6)(10, "div", 7)(11, "div", 8)(12, "button", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CotizarComponent_Template_button_click_12_listener() {
        return ctx.nuevaCotizacion();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "path", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18, "Nueva cotizacion");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "app-tabla-dinamica", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("functionEmitter", function CotizarComponent_Template_app_tabla_dinamica_functionEmitter_19_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("isModal", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_8__.FuseAlertComponent, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3RpemFyLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wcmFzL3BlZGlkb3MtZGUtcHJlc3VwdWVzdG8vY29tcG9uZW50cy9jb3RpemFyL2NvdGl6YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 21984:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/components/filter-menu/filter-menu.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMenuComponent": () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var app_modules_compras_pedidos_de_presupuesto_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/modules/compras/pedidos-de-presupuesto/service/pedidos-de-presupuesto.service */ 71137);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);

















function FilterMenuComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilterMenuComponent_mat_form_field_23_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", proveedor_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", proveedor_r4.RazonSocial, " ");
  }
}
function FilterMenuComponent_mat_form_field_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 19)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-autocomplete", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FilterMenuComponent_mat_form_field_23_mat_option_7_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx_r1.getTextProveedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 3, ctx_r1.filteredProveedores));
  }
}
class FilterMenuComponent {
  constructor(data, _empresaService, menuService, _pedidoDePresupuestoService) {
    this.data = data;
    this._empresaService = _empresaService;
    this.menuService = menuService;
    this._pedidoDePresupuestoService = _pedidoDePresupuestoService;
    this.proveedores = [];
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      cotizado: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1),
      proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.formFilters.patchValue(this.data.filter);
    this.getProveedores();
  }
  resetFilters() {
    this.formFilters.reset({
      cotizado: -1,
      proveedor: -1
    });
  }
  onCloseMenu(data = null) {
    this.menuService.close(data);
  }
  /**
  * Esta funcion es para listas los proveedores en el filtro de grilla.
  * @returns
  */
  getProveedores(option) {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Proveedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this._pedidoDePresupuestoService.getProveedores(option));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.proveedores = Proveedores.list;
          _this.filteredProveedores = _this.formFilters.get('proveedor').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => _this._filterProveedores(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getTextProveedor(option) {
    return option ? option.RazonSocial : '';
  }
  _filterProveedores(proveedor) {
    const filterValue = proveedor.toString().toLowerCase();
    return this.proveedores.filter(proveedor => proveedor.RazonSocial.toLowerCase().includes(filterValue));
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_modules_compras_pedidos_de_presupuesto_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_4__.PedidoDePresupuestoService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-pedidos-de-presupuesto"]],
  decls: 31,
  vars: 21,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], ["formControlName", "cotizado"], [3, "value"], ["class", "font-semibold text-gray-600 text-base", 4, "ngIf"], ["class", "fuse-mat-dense fuse-mat-no-subscript fuse-mat-rounded-lg min-w-64 mt-2", 4, "ngIf"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"], ["type", "text", "placeholder", "Seleccione Proveedor", "matInput", "", "formControlName", "proveedor", 3, "matAutocomplete"], ["mat-icon-button", "", "matSuffix", ""], ["autoActiveFirstOption", "", 3, "displayWith"], ["autoProveedor", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Contestado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-select", 9)(16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, FilterMenuComponent_span_22_Template, 2, 0, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, FilterMenuComponent_mat_form_field_23_Template, 9, 5, "mat-form-field", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13)(25, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_25_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_28_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("proveedor"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("proveedor"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx.color_primario || "")("border", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wcmFzL3BlZGlkb3MtZGUtcHJlc3VwdWVzdG8vY29tcG9uZW50cy9maWx0ZXItbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 35381:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/components/generar-orden/generar-orden.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerarOrdenComponent": () => (/* binding */ GenerarOrdenComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/pedidos-de-presupuesto.service */ 71137);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/spinner/spinner.component */ 32925);


























function GenerarOrdenComponent_spinner_component_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "spinner-component");
  }
}
function GenerarOrdenComponent_fuse_alert_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "fuse-alert", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("type", ctx_r1._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r1.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r1._alertConfig.message, " ");
  }
}
function GenerarOrdenComponent_form_10_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 53)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function GenerarOrdenComponent_form_10_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", proveedor_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", proveedor_r30.RazonSocial, " ");
  }
}
function GenerarOrdenComponent_form_10_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GenerarOrdenComponent_form_10_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r31.limpiarCasillero("proveedor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function GenerarOrdenComponent_form_10_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Codigo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r9.color_primario ? "" : ctx_r9.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r9.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r33.codigo_interno, " ");
  }
}
function GenerarOrdenComponent_form_10_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r11.color_primario ? "" : ctx_r11.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r11.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r34.articulo_descripcion, " ");
  }
}
function GenerarOrdenComponent_form_10_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Solicitado");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r13.color_primario ? "" : ctx_r13.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r13.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r35.cantidad, " ");
  }
}
function GenerarOrdenComponent_form_10_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r15.color_primario ? "" : ctx_r15.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r15.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r36.detalle, " ");
  }
}
function GenerarOrdenComponent_form_10_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cotiza");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r17.color_primario ? "" : ctx_r17.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r17.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-checkbox", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", row_r37.cotiza);
  }
}
function GenerarOrdenComponent_form_10_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Cant. a Pedir");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r19.color_primario ? "" : ctx_r19.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r19.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", row_r38.cantidad_recibida);
  }
}
function GenerarOrdenComponent_form_10_th_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Precio Unitario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r21.color_primario ? "" : ctx_r21.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r21.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", row_r39.unitario);
  }
}
function GenerarOrdenComponent_form_10_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r23.color_primario ? "" : ctx_r23.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r23.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", row_r40.subtotal);
  }
}
function GenerarOrdenComponent_form_10_th_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "OC");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r25.color_primario ? "" : ctx_r25.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r25.color_primario || "");
  }
}
function GenerarOrdenComponent_form_10_td_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-checkbox", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", row_r41.oc);
  }
}
function GenerarOrdenComponent_form_10_tr_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 64);
  }
}
function GenerarOrdenComponent_form_10_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 65);
  }
}
function GenerarOrdenComponent_form_10_div_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 66)(1, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    "reached-max": a0
  };
};
function GenerarOrdenComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "form", 10)(1, "div", 11)(2, "div", 12)(3, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "input", 14)(5, "mat-datepicker-toggle", 15)(6, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field", 17)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, GenerarOrdenComponent_form_10_button_12_Template, 3, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-autocomplete", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, GenerarOrdenComponent_form_10_mat_option_15_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, GenerarOrdenComponent_form_10_button_17_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-form-field", 24)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 27)(24, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](25, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, GenerarOrdenComponent_form_10_th_26_Template, 2, 4, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, GenerarOrdenComponent_form_10_td_27_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](28, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, GenerarOrdenComponent_form_10_th_29_Template, 2, 4, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, GenerarOrdenComponent_form_10_td_30_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](31, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, GenerarOrdenComponent_form_10_th_32_Template, 2, 4, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, GenerarOrdenComponent_form_10_td_33_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](34, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, GenerarOrdenComponent_form_10_th_35_Template, 2, 4, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, GenerarOrdenComponent_form_10_td_37_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](38, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, GenerarOrdenComponent_form_10_th_39_Template, 2, 4, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, GenerarOrdenComponent_form_10_td_40_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](41, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, GenerarOrdenComponent_form_10_th_42_Template, 2, 4, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](43, GenerarOrdenComponent_form_10_td_43_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](44, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, GenerarOrdenComponent_form_10_th_45_Template, 2, 4, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, GenerarOrdenComponent_form_10_td_46_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](47, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, GenerarOrdenComponent_form_10_th_48_Template, 2, 4, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, GenerarOrdenComponent_form_10_td_49_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](50, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, GenerarOrdenComponent_form_10_th_51_Template, 2, 4, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, GenerarOrdenComponent_form_10_td_52_Template, 2, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, GenerarOrdenComponent_form_10_tr_53_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, GenerarOrdenComponent_form_10_tr_54_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, GenerarOrdenComponent_form_10_div_55_Template, 3, 0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](57, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-form-field", 50)(61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](63, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](7);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](14);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r4)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matAutocomplete", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.form.get("proveedor").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("displayWith", ctx_r2.getTextProveedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 19, ctx_r2.filteredProveedores));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.form.get("proveedor").value && ctx_r2.isReadOnly === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.dataSource.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Total de art\u00EDculos: ", ctx_r2.dataSource.data.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](21, _c0, !ctx_r2.isPalabraMaxLengthReached()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r2.getPalabrasLength(), "/", ctx_r2.maxPalabras, " ");
  }
}
function GenerarOrdenComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 68)(1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GenerarOrdenComponent_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r43.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Generar");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx_r3.color_primario ? "" : ctx_r3.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx_r3.color_primario || "");
  }
}
class GenerarOrdenComponent {
  constructor(data, _pedidoDePresupuestoService, _empresaService, alert, datePipe, dialogRef, dialogo) {
    this.data = data;
    this._pedidoDePresupuestoService = _pedidoDePresupuestoService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.datePipe = datePipe;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    // Necesarios para la app
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.maxPalabras = 50;
    this.mostrarSpinner = true;
    this.mostrar_mensaje = false;
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    // Particulares del modulo
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource();
    this.columns = ['codigointerno', 'articulo', 'solicitado', 'detalle', 'cotiza', 'cantidad', 'unitario', 'subtotal', 'oc']; // estos son las columnas de la grilla
    this.isReadOnly = true; // Cambiar a false si quieres permitir edición
    this.pedido_de_presupuesto = this.data.pedido_de_presupuesto ? this.data.pedido_de_presupuesto : null;
    this.cotizacion = this.data.cotizacion ? this.data.cotizacion : null;
    this.title = `Generar Orden de compra a partir de la Cotización #${this.cotizacion.idcotizacion} - ${this.cotizacion.proveedor}`;
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  ngOnInit() {
    this.newForm();
    this.loadServices();
    this.subscribeAlert();
  }
  /**
   * Metodo que inicializa el/los formularios de la aplicaciónz
   */
  newForm() {
    const [dia, mes, anio] = this.cotizacion ? this.cotizacion.fecha.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl({
        Codigo: this.cotizacion.idproveedor,
        RazonSocial: this.cotizacion.proveedor
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      total: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(''),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.cotizacion.observaciones, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.maxLength(this.maxPalabras)])
    });
    if (this.isReadOnly) {
      this.form.disable();
    }
  }
  /**
   * Metodo encargado de encapsular los datos en un payload y realizar la persistencia
   */
  onSubmit() {
    const existeOrdenCompra = this.items_formulario.find(i => i.oc.value === true);
    if (!existeOrdenCompra) {
      return this.alert.warning('Debe marcar por lo menos un item para generar la orden de compra');
    }
    const payload = {
      cotizacion: this.cotizacion.idcotizacion
    };
    if (this.cotizacion?.idcotizacion) {
      this._pedidoDePresupuestoService.generarOrdenCompra(payload).subscribe({
        next: data => {
          if (data) {
            this.creadoExitosamente.emit(data);
            this.onCloseMenu(data);
          }
        }
      });
    }
  }
  /**
   * Metodo encargado de cerrar el dialogo, transmitiendo la informacion al componente padre
   * @param data
   */
  onCloseMenu(data) {
    this.dialogRef.close(data);
  }
  /**
  * Este metodo ejecuta todas las peticiones asincronas al mismo tiempo
  */
  loadServices() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all([_this.getProveedores(), _this.existeCotizacion() // Método que carga articulos
      ]).then(() => {
        _this.mostrarSpinner = false;
      });
    })();
  }
  /**
   * Metodo que se encarga de verificar que exista cotizacion para mapear los datos del servicio que lista los items de una cotizacion
   */
  existeCotizacion() {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let Items; // Variable auxiliar
      if (_this2.cotizacion?.idcotizacion) {
        Items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this2._pedidoDePresupuestoService.getItemsCotizacion(_this2.cotizacion.idcotizacion));
      }
      Items.list = Items.list.map(i => {
        return {
          ...i,
          codigo_interno: i.codigo_articulo,
          oc: i.oc === 1 ? true : false,
          cotiza: i.cotiza === 1 ? true : false,
          cantidad: Number(i.cantidad),
          unitario: Number(i.unitario),
          subtotal: Number(i.subtotal)
        };
      });
      yield _this2.crearGrillaForm(Items);
    })();
  }
  /**
   * Metodo encargado de
   * 1) Recorrer los items que me devuelve la API para agregar un input con el valor en "cantidad recibida", valor "unitario", "subtotal", "OC" y "Cotiza".
   * 2) Escuchar los cambios de "cantidad recibida" y valor "unitaro" para calcular el subtotal y total.
   * 3) Actualizar el campo "total" y rendizar los items en la grilla.
   * @param Items
   */
  crearGrillaForm(Items) {
    const subtotalObservables = []; // Almacena los observables de subtotales
    this.items_formulario = Items.list;
    this.items_formulario.forEach((item, index, items_array) => {
      // Define los FormControls
      const cantidadRecibidaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl({
        value: item.cantidad,
        disabled: this.isReadOnly
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]);
      const unitarioControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl({
        value: item.unitario || null,
        disabled: this.isReadOnly
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]);
      const subtotalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl({
        value: item.subtotal || null,
        disabled: this.isReadOnly
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]);
      // Escuchar cambios en cantidad_recibida y unitario
      cantidadRecibidaControl.valueChanges.subscribe(() => {
        this.updateSubtotal(cantidadRecibidaControl, unitarioControl, subtotalControl);
        this.updateTotal();
      });
      unitarioControl.valueChanges.subscribe(a => {
        this.updateSubtotal(cantidadRecibidaControl, unitarioControl, subtotalControl);
        this.updateTotal();
      });
      subtotalObservables.push(subtotalControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(Number(subtotalControl.value) || 0)));
      // Asigna los controles al item
      items_array[index].cantidad_recibida = cantidadRecibidaControl;
      items_array[index].unitario = unitarioControl;
      items_array[index].subtotal = subtotalControl;
      items_array[index].cotiza = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl({
        value: item.cotiza,
        disabled: this.isReadOnly
      }); // No es necesario un validador aquí si es booleano
      items_array[index].oc = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl({
        value: item.oc,
        disabled: this.isReadOnly
      }); // No es necesario un validador aquí si es booleano
    });

    this.updateTotal();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)(subtotalObservables).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(subtotales => {
      return subtotales.reduce((sum, current) => sum + (current || 0), 0);
    })).subscribe(total => {
      this.form.get('total')?.patchValue(total, {
        emitEvent: false
      });
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.items_formulario);
  }
  // ################# Metodos de comunicacion con el service #################
  /**
   * Metodo que consulta los proveedores del sistema y ademas encapsula los proveedores de que tiene un pedido de presupuesto
   * @param option
   */
  getProveedores(option) {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Proveedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this3._pedidoDePresupuestoService.getProveedores(option));
      const proveedores_del_pedido = _this3.pedido_de_presupuesto.proveedores.split(',').map(num => parseInt(num));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.proveedores = Proveedores.list.filter(p => proveedores_del_pedido.includes(p.Codigo));
          _this3.filteredProveedores = _this3.form.get('proveedor').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this3._filterProveedores(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Metodo de filtrado utilizado en los autocompletes
   * @param proveedor
   * @returns
   */
  _filterProveedores(proveedor) {
    const filterValue = proveedor.toString().toLowerCase();
    return this.proveedores.filter(proveedor => proveedor.RazonSocial.toLowerCase().includes(filterValue));
  }
  /**
   * Metodo para renderizar el texto de un autocomplete
   * @param option
   * @returns
   */
  getTextProveedor(option) {
    return option ? option.RazonSocial : '';
  }
  // ################# Metodos extra #################
  /**
   * Metodo para calcular el valor total entre todos los subtotales de una grilla
   */
  updateTotal() {
    const total = this.items_formulario.reduce((sum, item) => {
      const subtotal = Number(item.subtotal['value']) || 0;
      return sum + subtotal;
    }, 0);
    this.form.get('total')?.setValue(total, {
      emitEvent: false
    });
  }
  /**
  * Método para calcular y actualizar el subtotal
  */
  updateSubtotal(cantidadRecibidaControl, unitarioControl, subtotalControl) {
    const cantidad = Number(cantidadRecibidaControl.value) || 0;
    const unitario = Number(unitarioControl.value) || 0;
    const subtotal = cantidad * unitario;
    subtotalControl.setValue(subtotal, {
      emitEvent: false
    }); // Evita bucles de eventos
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
}
GenerarOrdenComponent.ɵfac = function GenerarOrdenComponent_Factory(t) {
  return new (t || GenerarOrdenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__.PedidoDePresupuestoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog));
};
GenerarOrdenComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: GenerarOrdenComponent,
  selectors: [["app-generar-orden-pedido-de-presupuesto"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 12,
  vars: 9,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "max-w-[1280px]", "xl:max-w-[1280px]", "xl:min-w-[950px]", "sm:max-w-[950px]", "sm:min-w-[800px]", "sm:rounded-2xl", "xl:max-h-[950px]", "xl:min-h-[850px]", "sm:max-h-[630px]", "sm:min-h-[500px]", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [4, "ngIf"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], ["class", "form-menu p-4 overflow-y-auto", 3, "formGroup", 4, "ngIf"], ["class", "w-full md:flex md:justify-center md:pb-6 md:px-6 mt-auto", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "form-menu", "p-4", "overflow-y-auto", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-4", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/3"], ["matInput", "", "formControlName", "fecha", "readonly", "true", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 1, "w-full", "sm:w-2/3"], ["type", "text", "matInput", "", "formControlName", "proveedor", 3, "matAutocomplete"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "class", "mr-2", 4, "ngIf"], ["autoActiveFirstOption", "", 3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "w-1/3", "sm:w-40"], [1, "flex", "items-center"], ["matInput", "", "formControlName", "total", "type", "number"], [1, "overflow-y-auto", "max-h-[500]", "h-[500]", "shadow-md", "rounded-lg"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "codigointerno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "solicitado"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "detalle"], [1, "text-center", "border", "border-gray-300", "rounded-md", "p-2", "w-full", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "hover:bg-white", "transition", "duration-150", "ease-in-out"], ["matColumnDef", "cotiza"], ["matColumnDef", "cantidad"], ["matColumnDef", "unitario"], ["mat-header-cell", "", "class", "text-white w-auto p-2", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "subtotal"], ["matColumnDef", "oc"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], [1, "flex", "w-full", "items-center", "my-2", "px-4"], [1, "flex-grow"], [1, "text-gray-700", "text-sm"], ["appearance", "outline", 1, "w-full", "mt-4"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "counter", 3, "ngClass"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 1, "mr-2"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-cell", ""], [3, "formControl"], ["matInput", "", "type", "number", "min", "0", "placeholder", "0", 1, "text-center", "border", "border-gray-300", "rounded-md", "p-2", "w-full", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "hover:bg-white", "transition", "duration-150", "ease-in-out", 3, "formControl"], ["mat-header-cell", "", 1, "text-white", "w-auto", "p-2"], ["matInput", "", "type", "number", "readonly", "", "placeholder", "0", 1, "text-center", "border", "border-gray-300", "rounded-md", "p-2", "w-full", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "transition", "duration-150", "ease-in-out", 3, "formControl"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"]],
  template: function GenerarOrdenComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GenerarOrdenComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, GenerarOrdenComponent_spinner_component_8_Template, 1, 0, "spinner-component", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, GenerarOrdenComponent_fuse_alert_9_Template, 2, 4, "fuse-alert", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, GenerarOrdenComponent_form_10_Template, 66, 23, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, GenerarOrdenComponent_div_11_Template, 4, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mostrarSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_25__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.FuseAlertComponent, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__.MatAutocompleteTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerToggle, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFyLW9yZGVuLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wcmFzL3BlZGlkb3MtZGUtcHJlc3VwdWVzdG8vY29tcG9uZW50cy9nZW5lcmFyLW9yZGVuL2dlbmVyYXItb3JkZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 57439:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/components/nueva-cotizacion/nueva-cotizacion.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuevaCotizacionComponent": () => (/* binding */ NuevaCotizacionComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 26562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/pedidos-de-presupuesto.service */ 71137);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/spinner/spinner.component */ 32925);
/* harmony import */ var _shared_components_grid_filter_grid_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/grid-filter/grid-filter.component */ 71788);



























function NuevaCotizacionComponent_spinner_component_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "spinner-component");
  }
}
function NuevaCotizacionComponent_fuse_alert_9_Template(rf, ctx) {
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
function NuevaCotizacionComponent_form_10_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 57)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NuevaCotizacionComponent_form_10_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", proveedor_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", proveedor_r30.RazonSocial, " ");
  }
}
function NuevaCotizacionComponent_form_10_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NuevaCotizacionComponent_form_10_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r31.limpiarCasillero("proveedor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function NuevaCotizacionComponent_form_10_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Codigo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r9.color_primario ? "" : ctx_r9.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r9.color_primario || "");
  }
}
function NuevaCotizacionComponent_form_10_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r33.codigo_interno, " ");
  }
}
function NuevaCotizacionComponent_form_10_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r11.color_primario ? "" : ctx_r11.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r11.color_primario || "");
  }
}
function NuevaCotizacionComponent_form_10_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r34.articulo_descripcion, " ");
  }
}
function NuevaCotizacionComponent_form_10_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Solicitado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r13.color_primario ? "" : ctx_r13.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r13.color_primario || "");
  }
}
function NuevaCotizacionComponent_form_10_td_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r35.cantidad, " ");
  }
}
function NuevaCotizacionComponent_form_10_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r15.color_primario ? "" : ctx_r15.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r15.color_primario || "");
  }
}
function NuevaCotizacionComponent_form_10_td_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", row_r36.detalle, " ");
  }
}
const _c0 = function () {
  return ["cursor-pointer", "transition-colors", "duration-500", "ease-in-out", "hover:bg-gray-500"];
};
function NuevaCotizacionComponent_form_10_th_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NuevaCotizacionComponent_form_10_th_40_Template_th_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r37.seleccionarTodos("cotiza"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Cotiza ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r17.color_primario ? "" : ctx_r17.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r17.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0));
  }
}
function NuevaCotizacionComponent_form_10_td_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-checkbox", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", row_r39.cotiza);
  }
}
function NuevaCotizacionComponent_form_10_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cant. a Pedir");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r19.color_primario ? "" : ctx_r19.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r19.color_primario || "");
  }
}
function NuevaCotizacionComponent_form_10_td_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", row_r40.cantidad_recibida);
  }
}
function NuevaCotizacionComponent_form_10_th_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Precio Unitario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r21.color_primario ? "" : ctx_r21.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r21.color_primario || "");
  }
}
function NuevaCotizacionComponent_form_10_td_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", row_r41.unitario);
  }
}
function NuevaCotizacionComponent_form_10_th_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Subtotal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r23.color_primario ? "" : ctx_r23.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r23.color_primario || "");
  }
}
function NuevaCotizacionComponent_form_10_td_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", row_r42.subtotal);
  }
}
function NuevaCotizacionComponent_form_10_th_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NuevaCotizacionComponent_form_10_th_52_Template_th_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.seleccionarTodos("oc"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " OC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r25.color_primario ? "" : ctx_r25.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r25.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](5, _c0));
  }
}
function NuevaCotizacionComponent_form_10_td_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "mat-checkbox", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formControl", row_r45.oc);
  }
}
function NuevaCotizacionComponent_form_10_tr_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 71);
  }
}
function NuevaCotizacionComponent_form_10_tr_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 72);
  }
}
function NuevaCotizacionComponent_form_10_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 73)(1, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c1 = function (a0) {
  return {
    "reached-max": a0
  };
};
function NuevaCotizacionComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 10)(1, "div", 11)(2, "div", 12)(3, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 14)(5, "mat-datepicker-toggle", 15)(6, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 17)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, NuevaCotizacionComponent_form_10_button_12_Template, 3, 0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "mat-autocomplete", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, NuevaCotizacionComponent_form_10_mat_option_15_Template, 2, 2, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, NuevaCotizacionComponent_form_10_button_17_Template, 3, 0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-form-field", 24)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "app-grid-filter", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filterChange", function NuevaCotizacionComponent_form_10_Template_app_grid_filter_filterChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 28)(25, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](26, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, NuevaCotizacionComponent_form_10_th_27_Template, 2, 4, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, NuevaCotizacionComponent_form_10_td_28_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](29, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, NuevaCotizacionComponent_form_10_th_30_Template, 2, 4, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, NuevaCotizacionComponent_form_10_td_31_Template, 2, 1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](32, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, NuevaCotizacionComponent_form_10_th_33_Template, 2, 4, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, NuevaCotizacionComponent_form_10_td_34_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](35, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, NuevaCotizacionComponent_form_10_th_36_Template, 2, 4, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, NuevaCotizacionComponent_form_10_td_38_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](40, NuevaCotizacionComponent_form_10_th_40_Template, 2, 6, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, NuevaCotizacionComponent_form_10_td_41_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](42, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, NuevaCotizacionComponent_form_10_th_43_Template, 2, 4, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, NuevaCotizacionComponent_form_10_td_44_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](45, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, NuevaCotizacionComponent_form_10_th_46_Template, 2, 4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, NuevaCotizacionComponent_form_10_td_47_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](48, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, NuevaCotizacionComponent_form_10_th_49_Template, 2, 4, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](50, NuevaCotizacionComponent_form_10_td_50_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](51, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, NuevaCotizacionComponent_form_10_th_52_Template, 2, 6, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, NuevaCotizacionComponent_form_10_td_53_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, NuevaCotizacionComponent_form_10_tr_54_Template, 1, 0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](55, NuevaCotizacionComponent_form_10_tr_55_Template, 1, 0, "tr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](56, NuevaCotizacionComponent_form_10_div_56_Template, 3, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "mat-form-field", 54)(62, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "textarea", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](14);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r4)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.form.get("proveedor").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx_r2.getTextProveedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 19, ctx_r2.filteredProveedores));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.form.get("proveedor").value && ctx_r2.isReadOnly === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.dataSource.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Total de art\u00EDculos: ", ctx_r2.dataSource.data.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](21, _c1, !ctx_r2.isPalabraMaxLengthReached()));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r2.getPalabrasLength(), "/", ctx_r2.maxPalabras, " ");
  }
}
function NuevaCotizacionComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 75)(1, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NuevaCotizacionComponent_div_11_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 77);
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
class NuevaCotizacionComponent {
  constructor(data, _pedidoDePresupuestoService, _empresaService, alert, datePipe, dialogRef, dialogo) {
    this.data = data;
    this._pedidoDePresupuestoService = _pedidoDePresupuestoService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.datePipe = datePipe;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    // Necesarios para la app
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.maxPalabras = 50;
    this.mostrarSpinner = true;
    this.mostrar_mensaje = false;
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
    this.columns = ['codigointerno', 'articulo', 'solicitado', 'detalle', 'cotiza', 'cantidad', 'unitario', 'subtotal', 'oc'];
    this.isReadOnly = false;
    this.isAllSelected = true;
    this.pedido_de_presupuesto = this.data.pedido_de_presupuesto ? this.data.pedido_de_presupuesto : null;
    this.cotizacion = this.data.cotizacion ? this.data.cotizacion : null;
    this.title = `Contestación de Pedido de Presupuesto #${this.pedido_de_presupuesto.idpedido}`;
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  ngOnInit() {
    this.newForm();
    this.loadServices();
    this.subscribeAlert();
  }
  /**
  * Metodo que inicializa el/los formularios de la aplicaciónz
  */
  newForm() {
    const [dia, mes, anio] = this.cotizacion ? this.cotizacion.fecha.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.cotizacion?.idproveedor ? {
        Codigo: this.cotizacion.idproveedor,
        RazonSocial: this.cotizacion.proveedor
      } : '', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.cotizacion?.fecha ? this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
      total: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(''),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.cotizacion?.observaciones ? this.cotizacion.observaciones : this.pedido_de_presupuesto.observaciones, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(this.maxPalabras)])
    });
  }
  /**
  * Metodo encargado de encapsular los datos en un payload y realizar la persistencia
  */
  onSubmit() {
    if (!this.form.valid) {
      this.alert.error('Error al cargar cotizacion. Verifique haber seleccionado un proveedor');
    } else {
      const fecha = this.form.get('fecha').value;
      // Se formatea la fecha nuevamente al formato deseado (YYYY-MM-DD)
      const fecha_formateada = this.datePipe.transform(fecha, 'yyyy-MM-dd');
      const items_cotizacion = this.items_formulario.map(item => {
        return {
          idpedidoitem: item.idpedidoitem,
          cotiza: item.cotiza.value === true ? 1 : 0,
          cantidad: item.cantidad_recibida['value'] ? item.cantidad_recibida['value'] : 0,
          unitario: item.unitario['value'] ? item.unitario['value'] : 0,
          oc: item.oc.value === true ? 1 : 0
        };
      });
      const existe_item_cotizado_con_valor_cero = items_cotizacion.find(i => i.cotiza === 1 && i.unitario < 0);
      if (existe_item_cotizado_con_valor_cero) {
        return this.alert.error('Error al cargar cotizacion. No se puede cotizar un item con valor menor a cero.');
      }
      ;
      const existe_cantidad_item_mayor_a_la_solicitada = this.items_formulario.find(item => item.cantidad_recibida['value'] > item.cantidad);
      if (existe_cantidad_item_mayor_a_la_solicitada) {
        return this.alert.error('Error al cargar cotizacion. No se puede cotizar una cantidad mayor a la pedida');
      }
      const payload = {
        cotizacion: {
          idpedido: this.pedido_de_presupuesto.idpedido,
          idproveedor: this.form.get('proveedor').value.Codigo,
          fecha: fecha_formateada,
          observaciones: this.form.get('observaciones').value
        },
        items: items_cotizacion
      };
      if (this.cotizacion?.idcotizacion) {
        this._pedidoDePresupuestoService.updateCotizazcion(this.cotizacion.idcotizacion, payload).subscribe({
          next: data => {
            if (data) {
              this.editadoExitosamente.emit(data);
              this.onCloseMenu(data);
            }
          }
        });
      } else {
        this._pedidoDePresupuestoService.saveCotizacion(payload).subscribe({
          next: data => {
            if (data) {
              this.creadoExitosamente.emit();
              this.onCloseMenu(data);
            }
          }
        });
      }
    }
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero(input) {
    if (this.form.get(input)) {
      this.form.get(input).setValue('');
    }
  }
  onCloseMenu(data) {
    this.dialogRef.close(data);
  }
  /**
  * Metodo encargado de
  * 1) Recorrer los items que me devuelve la API para agregar un input con el valor en "cantidad recibida", valor "unitario", "subtotal", "OC" y "Cotiza".
  * 2) Escuchar los cambios de "cantidad recibida" y valor "unitaro" para calcular el subtotal y total.
  * 3) Actualizar el campo "total" y rendizar los items en la grilla.
  * @param Items
  */
  crearGrillaForm(Items) {
    const subtotalObservables = []; // Almacena los observables de subtotales
    this.items_formulario = Items.list;
    this.items_formulario.forEach((item, index, items_array) => {
      // Define los FormControls
      const cantidadRecibidaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({
        value: item.cantidad || null,
        disabled: this.isReadOnly
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0)]);
      const unitarioControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({
        value: item.unitario || null,
        disabled: this.isReadOnly
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0)]);
      const subtotalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({
        value: item.subtotal || null,
        disabled: this.isReadOnly
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.min(0)]);
      // Escuchar cambios en cantidad_recibida y unitario
      cantidadRecibidaControl.valueChanges.subscribe(() => {
        this.updateSubtotal(cantidadRecibidaControl, unitarioControl, subtotalControl);
        this.updateTotal();
      });
      unitarioControl.valueChanges.subscribe(a => {
        this.updateSubtotal(cantidadRecibidaControl, unitarioControl, subtotalControl);
        this.updateTotal();
      });
      subtotalObservables.push(subtotalControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(Number(subtotalControl.value) || 0)));
      // Asigna los controles al item
      items_array[index].cantidad_recibida = cantidadRecibidaControl;
      items_array[index].unitario = unitarioControl;
      items_array[index].subtotal = subtotalControl;
      items_array[index].cotiza = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({
        value: item.cotiza,
        disabled: this.isReadOnly
      }); // No es necesario un validador aquí si es booleano
      items_array[index].oc = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl({
        value: item.oc,
        disabled: this.isReadOnly
      }); // No es necesario un validador aquí si es booleano
    });

    this.updateTotal();
    (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.combineLatest)(subtotalObservables).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(subtotales => {
      return subtotales.reduce((sum, current) => sum + (current || 0), 0);
    })).subscribe(total => {
      this.form.get('total')?.patchValue(total, {
        emitEvent: false
      });
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.items_formulario.sort((a, b) => a.idpedidoitem - b.idpedidoitem));
  }
  // ################# Metodos de comunicacion con el service #################
  /**
  * Este metodo ejecuta todas las peticiones asincronas al mismo tiempo
  */
  loadServices() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all([_this.getProveedores(), _this.existeCotizacion() // Método que carga articulos
      ]).then(() => {
        _this.mostrarSpinner = false;
      });
    })();
  }
  /**
  * Metodo que se encarga de verificar que exista cotizacion para mapear los datos del servicio que lista los items de una cotizacion
  */
  existeCotizacion() {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let Items; // Variable auxiliar
      if (_this2.cotizacion?.idcotizacion) {
        Items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this2._pedidoDePresupuestoService.getItemsCotizacion(_this2.cotizacion.idcotizacion));
      } else {
        Items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this2._pedidoDePresupuestoService.getItemsPedido(_this2.pedido_de_presupuesto.idpedido));
      }
      Items.list = Items.list.map(i => {
        return {
          ...i,
          codigo_interno: i.codigo_articulo ? i.codigo_articulo : i.codigo_interno,
          oc: _this2.cotizacion?.idcotizacion ? i.oc === 1 ? true : false : false,
          cotiza: _this2.cotizacion?.idcotizacion ? i.cotiza === 1 ? true : false : true,
          cantidad: Number(i.cantidad),
          unitario: Number(i.unitario),
          subtotal: Number(i.subtotal)
        };
      });
      yield _this2.crearGrillaForm(Items);
    })();
  }
  getProveedores(option) {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Proveedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.firstValueFrom)(_this3._pedidoDePresupuestoService.getProveedores(option));
      const proveedores_del_pedido = _this3.pedido_de_presupuesto.proveedores.split(',').map(num => parseInt(num));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.proveedores = Proveedores.list.filter(p => proveedores_del_pedido.includes(p.Codigo));
          _this3.filteredProveedores = _this3.form.get('proveedor').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this3._filterProveedores(value)));
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
  // ################# Metodos extra #################
  /**
   * Metodo para calcular el valor total entre todos los subtotales de una grilla
   */
  updateTotal() {
    const total = this.items_formulario.reduce((sum, item) => {
      const subtotal = Number(item.subtotal['value']) || 0;
      return sum + subtotal;
    }, 0);
    this.form.get('total')?.setValue(total, {
      emitEvent: false
    });
  }
  /**
  * Método para calcular y actualizar el subtotal
  */
  updateSubtotal(cantidadRecibidaControl, unitarioControl, subtotalControl) {
    const cantidad = Number(cantidadRecibidaControl.value) || 0;
    const unitario = Number(unitarioControl.value) || 0;
    const subtotal = cantidad * unitario;
    subtotalControl.setValue(subtotal, {
      emitEvent: false
    }); // Evita bucles de eventos
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
  /**
   * Este metodo es el encargado de seleccionar/deseleccionar todos los checkbox de la grilla
   * @param control caolumna del checkbox que se quiere seleccionar/deseleccionar
   */
  seleccionarTodos(control) {
    // Obtengo todos los items de ese control que esten seleccionados
    const items_seleccion = this.items_formulario.filter(item => item[control].value === this.isAllSelected);
    // Si hay mas de un item con el valor de la varibale global, seteo el valor contrario. Esto es asi al ser un metodo reutilizable, si nosotros seleccionamos todos en la columna "cotiza" y despues vamos a "oc" y seleccionamos todos, deberiamos solo obtener el valor de seleccion (seleccionar todos o deseleccionar todos) de esa columna no del ultimo valor que tiene la varibale global.
    if (items_seleccion.length > 1) {
      this.isAllSelected = !this.isAllSelected; // Asignamos el valor contrario a la variable global
    }
    // Recorremos todas las filas de ese columa y le asignamos el valor de la variable global
    this.items_formulario.forEach(item => {
      item[control].setValue(this.isAllSelected);
    });
    this.isAllSelected = !this.isAllSelected; // Le asignamos el valor contrario a la ultima seleccion
  }
  /**
  * Filtro para buscar en la grilla de articulos
  * @param filterValue
  */
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
NuevaCotizacionComponent.ɵfac = function NuevaCotizacionComponent_Factory(t) {
  return new (t || NuevaCotizacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__.PedidoDePresupuestoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog));
};
NuevaCotizacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: NuevaCotizacionComponent,
  selectors: [["app-nueva-cotizacion"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 12,
  vars: 9,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "max-w-[1280px]", "xl:max-w-[1280px]", "xl:min-w-[950px]", "sm:max-w-[950px]", "sm:min-w-[800px]", "sm:rounded-2xl", "overflow-y-auto", "xl:max-h-[950px]", "xl:min-h-[850px]", "sm:max-h-[630px]", "sm:min-h-[500px]", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [4, "ngIf"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], ["class", "form-menu p-4 overflow-y-auto", 3, "formGroup", 4, "ngIf"], ["class", "w-full md:flex md:justify-center md:pb-6 md:px-6 mt-auto", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "form-menu", "p-4", "overflow-y-auto", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-4", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/3"], ["matInput", "", "formControlName", "fecha", "readonly", "true", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 1, "w-full", "sm:w-2/3"], ["type", "text", "matInput", "", "formControlName", "proveedor", 3, "matAutocomplete"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "class", "mr-2", 4, "ngIf"], ["autoActiveFirstOption", "", 3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "w-1/3", "sm:w-40"], [1, "flex", "items-center"], ["matInput", "", "formControlName", "total", "type", "number"], [3, "filterChange"], [1, "overflow-y-auto", "max-h-[500]", "h-[500]", "shadow-md", "rounded-lg"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "codigointerno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto text-center", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white w-auto text-center", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "solicitado"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "detalle"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], [1, "text-center", "border", "border-gray-300", "rounded-md", "p-2", "w-full", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "hover:bg-white", "transition", "duration-150", "ease-in-out"], ["matColumnDef", "cotiza"], ["mat-header-cell", "", "class", "text-white w-auto text-center", 3, "class", "background", "ngClass", "click", 4, "matHeaderCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "unitario"], ["mat-header-cell", "", "class", "text-white w-auto p-2", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "subtotal"], ["matColumnDef", "oc"], ["mat-header-cell", "", "class", "text-white w-auto rounded-tr-lg text-center", 3, "class", "background", "ngClass", "click", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], [1, "flex", "w-full", "items-center", "my-2", "px-4"], [1, "flex-grow"], [1, "text-gray-700", "text-sm"], ["appearance", "outline", 1, "w-full", "mt-4"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "counter", 3, "ngClass"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 1, "mr-2"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto", "text-center"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto", "text-center"], ["mat-cell", ""], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto", "text-center", 3, "ngClass", "click"], [3, "formControl"], ["matInput", "", "type", "number", "min", "0", "placeholder", "0", 1, "text-center", "border", "border-gray-300", "rounded-md", "p-2", "w-full", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "hover:bg-white", "transition", "duration-150", "ease-in-out", 3, "formControl"], ["mat-header-cell", "", 1, "text-white", "w-auto", "p-2"], ["matInput", "", "type", "number", "readonly", "", "placeholder", "0", 1, "text-center", "border", "border-gray-300", "rounded-md", "p-2", "w-full", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:border-transparent", "bg-gray-50", "transition", "duration-150", "ease-in-out", 3, "formControl"], ["mat-header-cell", "", 1, "text-white", "w-auto", "rounded-tr-lg", "text-center", 3, "ngClass", "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"]],
  template: function NuevaCotizacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function NuevaCotizacionComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, NuevaCotizacionComponent_spinner_component_8_Template, 1, 0, "spinner-component", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, NuevaCotizacionComponent_fuse_alert_9_Template, 2, 4, "fuse-alert", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, NuevaCotizacionComponent_form_10_Template, 67, 23, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, NuevaCotizacionComponent_div_11_Template, 4, 4, "div", 8);
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_22__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.FuseAlertComponent, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_28__.MatAutocompleteTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerToggle, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _shared_components_grid_filter_grid_filter_component__WEBPACK_IMPORTED_MODULE_7__.GridFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_22__.AsyncPipe],
  styles: ["@charset \"UTF-8\";\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  font-size: 0.75rem;\n  color: #C9C9C9;\n  \n}\n\n.counter.reached-max[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm51ZXZhLWNvdGl6YWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esb0RBQUE7QUFFSiIsImZpbGUiOiJudWV2YS1jb3RpemFjaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwLjVyZW07XHJcbiAgICByaWdodDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNDOUM5Qzk7XHJcbiAgICAvKiBDb2xvciBkZSB0ZXh0byBncmlzICovXHJcbn1cclxuXHJcbi5jb3VudGVyLnJlYWNoZWQtbWF4IHtcclxuICAgIGNvbG9yOiAjZTUzZTNlO1xyXG4gICAgLyogQ29sb3IgZGUgdGV4dG8gcm9qbyBjdWFuZG8gc2UgYWxjYW56YSBlbCBsw61taXRlICovXHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wcmFzL3BlZGlkb3MtZGUtcHJlc3VwdWVzdG8vY29tcG9uZW50cy9udWV2YS1jb3RpemFjaW9uL251ZXZhLWNvdGl6YWNpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esb0RBQUE7QUFFSjtBQUNBLHd4QkFBd3hCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwLjVyZW07XHJcbiAgICByaWdodDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNDOUM5Qzk7XHJcbiAgICAvKiBDb2xvciBkZSB0ZXh0byBncmlzICovXHJcbn1cclxuXHJcbi5jb3VudGVyLnJlYWNoZWQtbWF4IHtcclxuICAgIGNvbG9yOiAjZTUzZTNlO1xyXG4gICAgLyogQ29sb3IgZGUgdGV4dG8gcm9qbyBjdWFuZG8gc2UgYWxjYW56YSBlbCBsw4PCrW1pdGUgKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 27447:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/components/pedidos-de-presupuesto.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoDePresupuestoComponent": () => (/* binding */ PedidoDePresupuestoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 37101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 21984);
/* harmony import */ var _cotizar_cotizar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cotizar/cotizar.component */ 88964);
/* harmony import */ var _ver_cotizacion_ver_cotizacion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-cotizacion/ver-cotizacion.component */ 96698);
/* harmony import */ var _shared_components_enviar_email_modal_enviar_email_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/enviar-email-modal/enviar-email.component */ 24279);
/* harmony import */ var _service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/pedidos-de-presupuesto.service */ 71137);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/service/app/pwa.service */ 16173);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 83677);
























class PedidoDePresupuestoComponent {
  constructor(_pedidoDePresupuestosService, _empresaService, confirm, alert, dialogo, _searchService, _menuService, router, _headerTextService, pwaService) {
    this._pedidoDePresupuestosService = _pedidoDePresupuestosService;
    this._empresaService = _empresaService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.pwaService = pwaService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource();
    this.headers = ['Numero', 'Fecha', 'Contestado', 'Proveedores', 'Acciones'];
    this.column_params = ['idpedido', 'fecha', 'cotizado', 'proveedores_descripcion', 'acciones'];
    this.accionesObjeto = null;
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['proveedores_descripcion'];
    this.filter = {
      cotizado: -1,
      proveedor: -1
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.compras.view_compras_pedidos + '?';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControl('');
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subject();
    this.enviadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_16__.EventEmitter();
    this._headerTextService.setTitulo(this.router);
    /**
     * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
     */
    this.funcionesObjeto = [{
      iconoAccion: pedido => '',
      iconoAccionado: pedido => '',
      iconoDeshabilitado: pedido => '',
      visible: pedido => false
    }];
    this.showMenu = pedido => true;
    /**
     * Aca se declaran los botones que van a ir en la botonera de la grilla dependiendo si showMenu es true o false
     */
    this.accionesObjeto = [{
      nombre_boton: "Ver pedido",
      functionName: 'ver',
      iconoAccion: pedido => 'jedstion:ver',
      iconoAccionado: pedido => '',
      iconoDeshabilitado: pedido => '',
      visible: pedido => true
    }, {
      nombre_boton: "Editar",
      functionName: 'editar',
      iconoAccion: pedido => pedido.cotizado === 0 ? 'jedstion:editar' : 'jedstion:editar_disabled',
      iconoAccionado: pedido => '',
      iconoDeshabilitado: pedido => '',
      visible: pedido => true
    }, {
      icono: 'delete',
      nombre_boton: "Eliminar",
      functionName: 'eliminar',
      iconoAccion: pedido => 'jedstion:eliminar',
      iconoAccionado: pedido => '',
      iconoDeshabilitado: pedido => '',
      visible: pedido => true
    }, {
      icono: 'comment',
      nombre_boton: "Cotizaciones",
      functionName: 'cotizaciones',
      iconoAccion: pedido => 'jedstion:cotizar',
      iconoAccionado: pedido => '',
      iconoDeshabilitado: pedido => '' /* 'jedstion:cotizar_disabled' */,
      visible: pedido => true
    }, {
      icono: 'impresora',
      nombre_boton: "Reporte de Pedido",
      functionName: 'reporte_pedido',
      iconoAccion: pedido => 'jedstion:imprimir',
      iconoAccionado: pedido => '',
      iconoDeshabilitado: pedido => '',
      visible: pedido => true
    }, {
      icono: 'send',
      nombre_boton: "Enviar Pedido",
      functionName: 'enviar_pedido',
      iconoAccion: pedido => 'jedstion:enviar',
      iconoAccionado: pedido => '',
      iconoDeshabilitado: pedido => '',
      visible: pedido => true
    }];
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
  }
  ngOnInit() {
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(750), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)()).subscribe(value => {
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
          this.extraParams = this.filter.cotizado != -1 ? "filter[cotizado]=" + this.filter.cotizado : '';
          this.extraParams += this.filter.proveedor != -1 ? "&filter[proveedores][like]=" + this.filter.proveedor.Codigo.toString() : '';
          this.tabla.filters(this.filtroBusqueda);
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
        if (event.params.data.cotizado === 0) {
          this.updatePedidoDePresupuesto(event);
        } else {
          this.alert.warning('Este pedido no puede editarse. Tiene una cotización asociada');
        }
        break;
      case 'eliminar':
        this.deletePedidoDePresupuesto(event);
        break;
      case 'cotizaciones':
        this.cotizarPedidoDePresupuesto(event);
        break;
      case 'ver':
        this.verPedidoDePresupuesto(event);
        break;
      case 'reporte_pedido':
        this.reportePedidoDePresupuesto(event);
        break;
      case 'enviar_pedido':
        // this.alert.info('Esta función estará disponible proximamente');
        this.enviarPedidoDePresupuesto(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  savePedidoDePresupuesto() {
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
  updatePedidoDePresupuesto(event) {
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
  deletePedidoDePresupuesto(event) {
    this.confirm.open({
      title: "Eliminar pedido de presupuesto " + event.params.data.observaciones,
      message: "¿Desea eliminar el pedido de presupuesto: " + event.params.data.observaciones + "?",
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
        this._pedidoDePresupuestosService.deletePedidoDePresupuesto(event.params.data.idpedido).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Pedido de presupuesto eliminado con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.error("Este pedido de presupuesto no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  cotizarPedidoDePresupuesto(event) {
    this.dialogo.open(_cotizar_cotizar_component__WEBPACK_IMPORTED_MODULE_4__.CotizarComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).afterClosed().subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  verPedidoDePresupuesto(event) {
    this.dialogo.open(_ver_cotizacion_ver_cotizacion_component__WEBPACK_IMPORTED_MODULE_5__.VerCotizacionComponent, {
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
   * Esta funcion Genera un Reporte y lo muestra en una nueva pestaña
   */
  reportePedidoDePresupuesto(event) {
    const idpedido = event.params.data.idpedido;
    this._pedidoDePresupuestosService.reportePedidoDePresupuesto(idpedido).subscribe(data => {
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
  enviarPedidoDePresupuesto(event) {
    const modal_data = {
      model: event.params.data,
      _endpointService: environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.compras.compras_pedidos_enviar_presupuesto,
      title: `Enviar Pedido de Presupuesto N°${event.params.data.idpedido}`,
      permiteAdjunto: false
    };
    this.dialogo.open(_shared_components_enviar_email_modal_enviar_email_component__WEBPACK_IMPORTED_MODULE_6__.EnviarEmailModalComponent, {
      data: modal_data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.enviadoExitosamente.subscribe({
      next: data => {
        if (data['success'] === true) {
          this.alert.success('Email enviado con éxito');
        } else {
          this.alert.error(data['error']);
        }
        this.tabla.filters(this.filtroBusqueda);
      }
    });
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
PedidoDePresupuestoComponent.ɵfac = function PedidoDePresupuestoComponent_Factory(t) {
  return new (t || PedidoDePresupuestoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_7__.PedidoDePresupuestoService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_8__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_9__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_10__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_11__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_12__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_13__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_14__.PwaService));
};
PedidoDePresupuestoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: PedidoDePresupuestoComponent,
  selectors: [["app-pedidos-de-presupuesto"]],
  viewQuery: function PedidoDePresupuestoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  inputs: {
    extraParams: "extraParams"
  },
  outputs: {
    parametrosActualizados: "parametrosActualizados",
    enviadoExitosamente: "enviadoExitosamente"
  },
  decls: 12,
  vars: 17,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "absolute", "right-10"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], ["save", ""], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "acciones", "showMenu", "functionEmitter"]],
  template: function PedidoDePresupuestoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function PedidoDePresupuestoComponent_Template_button_click_3_listener() {
        return ctx.savePedidoDePresupuesto();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "Nuevo Pedido de presupuesto");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 9)(11, "app-tabla-dinamica", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("functionEmitter", function PedidoDePresupuestoComponent_Template_app_tabla_dinamica_functionEmitter_11_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "ssp")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams)("acciones", ctx.accionesObjeto)("showMenu", ctx.showMenu);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG9zLWRlLXByZXN1cHVlc3RvLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wcmFzL3BlZGlkb3MtZGUtcHJlc3VwdWVzdG8vY29tcG9uZW50cy9wZWRpZG9zLWRlLXByZXN1cHVlc3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3TEFBd0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 37101:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/components/save/save.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 53158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/lector-qr/lector-qr.component */ 5729);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/pedidos-de-presupuesto.service */ 71137);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/chips */ 51031);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/spinner/spinner.component */ 32925);
/* harmony import */ var _shared_components_grid_filter_grid_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/grid-filter/grid-filter.component */ 71788);






























function SaveComponent_spinner_component_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "spinner-component");
  }
}
function SaveComponent_fuse_alert_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "fuse-alert", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx_r1._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r1.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1._alertConfig.message, " ");
  }
}
function SaveComponent_form_11_mat_chip_row_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-chip-row", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("removed", function SaveComponent_form_11_mat_chip_row_13_Template_mat_chip_row_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const proveedor_r32 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.removeProveedor(proveedor_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 78)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const proveedor_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", proveedor_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", proveedor_r32.RazonSocial, " ");
  }
}
function SaveComponent_form_11_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", proveedor_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", proveedor_r35.RazonSocial, " ");
  }
}
function SaveComponent_form_11_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", rubro_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", rubro_r36.descripcion, " ");
  }
}
function SaveComponent_form_11_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SaveComponent_form_11_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r37.limpiarCasillero("rubro"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_form_11_mat_option_38_i_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("(", articulo_r39.total_stock, ")");
  }
}
function SaveComponent_form_11_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 79)(1, "span")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, SaveComponent_form_11_mat_option_38_i_5_Template, 2, 1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const articulo_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", articulo_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](articulo_r39.codigo_interno);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" - ", articulo_r39.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", articulo_r39.tipo != 2);
  }
}
function SaveComponent_form_11_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SaveComponent_form_11_button_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r42.limpiarCasillero("articulo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_form_11_mat_option_50_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("(x", um_r44.factor_um, " ", um_r44.um_base, ")");
  }
}
function SaveComponent_form_11_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, SaveComponent_form_11_mat_option_50_i_2_Template, 2, 2, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", um_r44.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", um_r44.descripcion_um, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", um_r44.factor_um != 1);
  }
}
function SaveComponent_form_11_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Codigo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r17.color_primario ? "" : ctx_r17.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r17.color_primario || "");
  }
}
function SaveComponent_form_11_td_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r47.codigo_interno_articulo, " ");
  }
}
function SaveComponent_form_11_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r19.color_primario ? "" : ctx_r19.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r19.color_primario || "");
  }
}
function SaveComponent_form_11_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r48.descripcion_articulo, " ");
  }
}
function SaveComponent_form_11_th_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r21.color_primario ? "" : ctx_r21.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r21.color_primario || "");
  }
}
function SaveComponent_form_11_td_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r49.cantidad, " ");
  }
}
function SaveComponent_form_11_th_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "UM");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r23.color_primario ? "" : ctx_r23.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r23.color_primario || "");
  }
}
function SaveComponent_form_11_td_79_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r50.descripcion_um, " ");
  }
}
function SaveComponent_form_11_th_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r25.color_primario ? "" : ctx_r25.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r25.color_primario || "");
  }
}
function SaveComponent_form_11_td_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 86)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const movimiento_articulo_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](movimiento_articulo_r51.detalle);
  }
}
function SaveComponent_form_11_th_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "th", 87);
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r27.color_primario ? "" : ctx_r27.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r27.color_primario || "");
  }
}
function SaveComponent_form_11_td_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "td", 86)(1, "button", 3, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SaveComponent_form_11_td_85_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r55);
      const movimiento_r52 = restoredCtx.$implicit;
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r54.deleteMovimiento(movimiento_r52));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-icon", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_form_11_tr_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 90);
  }
}
function SaveComponent_form_11_tr_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tr", 91);
  }
}
function SaveComponent_form_11_div_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 92)(1, "p", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return [];
};
const _c1 = function (a0) {
  return {
    "reached-max": a0
  };
};
function SaveComponent_form_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "form", 11)(1, "div", 12)(2, "div", 13)(3, "mat-form-field", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "input", 15)(5, "mat-datepicker-toggle", 16)(6, "mat-datepicker", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-form-field", 18)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-chip-grid", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, SaveComponent_form_11_mat_chip_row_13_Template, 5, 2, "mat-chip-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "mat-autocomplete", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("optionSelected", function SaveComponent_form_11_Template_mat_autocomplete_optionSelected_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](15);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r57.selectProveedor($event, _r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](18, SaveComponent_form_11_mat_option_18_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "form", 27)(21, "div", 28)(22, "mat-form-field", 29)(23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Rubro");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SaveComponent_form_11_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r59.seleccionItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "mat-autocomplete", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, SaveComponent_form_11_mat_option_28_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, SaveComponent_form_11_button_30_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 34)(32, "mat-form-field", 35)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](34, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SaveComponent_form_11_Template_input_ngModelChange_35_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r60.seleccionItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "mat-autocomplete", 31, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](38, SaveComponent_form_11_mat_option_38_Template, 6, 4, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](40, SaveComponent_form_11_button_40_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 38)(42, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SaveComponent_form_11_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r61.etiquetaArticulo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "svg", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "path", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "div", 42)(46, "mat-form-field", 43)(47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "UM");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "mat-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function SaveComponent_form_11_Template_mat_select_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r62.seleccionItem({
        um: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](50, SaveComponent_form_11_mat_option_50_Template, 3, 3, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "div", 45)(52, "mat-form-field", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown.enter", function SaveComponent_form_11_Template_mat_form_field_keydown_enter_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r63.seleccionItem($event, "cambio_de_foco"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](55, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "div", 48)(57, "mat-form-field", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown.enter", function SaveComponent_form_11_Template_mat_form_field_keydown_enter_57_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r64.onCargar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](60, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](61, "div", 38)(62, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SaveComponent_form_11_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r65.onCargar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "svg", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](64, "path", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](65, "app-grid-filter", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("filterChange", function SaveComponent_form_11_Template_app_grid_filter_filterChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r58);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r66.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "div", 55)(67, "table", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](68, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](69, SaveComponent_form_11_th_69_Template, 2, 4, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](70, SaveComponent_form_11_td_70_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](71, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](72, SaveComponent_form_11_th_72_Template, 2, 4, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](73, SaveComponent_form_11_td_73_Template, 2, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](74, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](75, SaveComponent_form_11_th_75_Template, 2, 4, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](76, SaveComponent_form_11_td_76_Template, 2, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](77, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, SaveComponent_form_11_th_78_Template, 2, 4, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, SaveComponent_form_11_td_79_Template, 2, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](80, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](81, SaveComponent_form_11_th_81_Template, 2, 4, "th", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](82, SaveComponent_form_11_td_82_Template, 3, 1, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](83, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](84, SaveComponent_form_11_th_84_Template, 1, 4, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](85, SaveComponent_form_11_td_85_Template, 5, 0, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](86, SaveComponent_form_11_tr_86_Template, 1, 0, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](87, SaveComponent_form_11_tr_87_Template, 1, 0, "tr", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](88, SaveComponent_form_11_div_88_Template, 3, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](90, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](93, "mat-form-field", 74)(94, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](95, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](96, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](97, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](7);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](17);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](27);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](37);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_13_0;
    let tmp_17_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matDatepicker", _r4)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("for", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.selectedProveedores);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placeholder", "Agregar Proveedor")("matChipInputFor", _r5)("matAutocomplete", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 39, ctx_r2.filteredProveedores$));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r2.form_carga_articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matAutocomplete", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayWith", ctx_r2.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", (tmp_13_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 41, ctx_r2.filteredRubros$)) !== null && tmp_13_0 !== undefined ? tmp_13_0 : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](45, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.form_carga_articulos.get("rubro").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matAutocomplete", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayWith", ctx_r2.getTextArticulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", (tmp_17_0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 43, ctx_r2.filteredArticulos$)) !== null && tmp_17_0 !== undefined ? tmp_17_0 : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](46, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.form_carga_articulos.get("articulo").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r2.color_primario)("color", ctx_r2.color_secundario);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r2.unidades_de_medida);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r2.color_primario);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.dataSource.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" Total de art\u00EDculos: ", ctx_r2.dataSource.data.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](47, _c1, !ctx_r2.isPalabraMaxLengthReached()));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", ctx_r2.getPalabrasLength(), "/", ctx_r2.maxPalabras, " ");
  }
}
function SaveComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 94)(1, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SaveComponent_div_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r68);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r67.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx_r3.color_primario ? "" : ctx_r3.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx_r3.color_primario || "");
  }
}
class SaveComponent {
  constructor(data, _pedidoDePresupuestoService, _empresaService, alert, datePipe, dialogRef, dialogo) {
    this.data = data;
    this._pedidoDePresupuestoService = _pedidoDePresupuestoService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.datePipe = datePipe;
    this.dialogRef = dialogRef;
    this.dialogo = dialogo;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.maxPalabras = 50;
    this.showAlert = false;
    this.mostrarSpinner = true;
    this.mostrar_mensaje = false;
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    // Propios del modulo
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource();
    this.columns = ['codigointerno', 'articulo', 'cantidad', 'unidadmedida', 'detalle', 'acciones'];
    this.selectedProveedores = [];
    this.mov_art_list = [];
    this.articulos = [];
    this.articulos_list = [];
    this.unidades_de_medida = [];
    this.filteredArticulos$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    this.rubros = [];
    this.filteredRubros$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject([]);
    this.pedido_de_presupuesto = this.data ? this.data : null;
    this.title = this.pedido_de_presupuesto?.idpedido ? 'Editar pedido de presupuesto' : 'Nuevo pedido de presupuesto';
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
  }
  ngOnInit() {
    this.newForm();
    this.subscribeAlert();
    this.loadServices();
    // Escuchamos los cambios en el control de 'articulo' para filtrar mientras escribe
    this.form_carga_articulos.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(500),
    // Evita demasiadas llamadas consecutivas
    (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)(),
    // Solo procede si el valor cambia
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.switchMap)(value => {
      const idarticulo = typeof value === 'object' ? value.idarticulo : null;
      const filterLike = typeof value === 'string' ? value : null;
      let idrubro = this.form_carga_articulos.get('rubro').value ? this.form_carga_articulos.get('rubro').value.idrubro : null;
      return this._pedidoDePresupuestoService.getArticulos(idarticulo, filterLike, idrubro).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.of)({
        list: []
      })) // Manejo de errores
      );
    })).subscribe(response => {
      this.filteredArticulos$.next(response.list || []);
    });
  }
  /**
  * Este metodo ejecuta todas las peticiones asincronas al mismo tiempo
  */
  loadServices() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all([_this.getProveedores(), _this.getArticulos(), _this.getRubros() // Método que carga rubros
      ]).then(() => {
        _this.mostrarSpinner = false;
      });
    })();
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  newForm() {
    const [dia, mes, anio] = this.pedido_de_presupuesto ? this.pedido_de_presupuesto.fecha.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    if (this.pedido_de_presupuesto) {
      //Sí existe el pedido de presupuesto, cargo la grilla con sus articulos...
      this.getItemsPedido(this.pedido_de_presupuesto.idpedido).then(res => {
        this.mov_art_list = res.map(m => {
          return {
            articulo: m.idarticulo,
            cantidad: m.cantidad,
            idunidadmedida: m.idunidadmedida,
            descripcion_articulo: m.articulo_descripcion,
            descripcion_um: m.um_descripcion,
            codigo_interno_articulo: m.codigo_interno,
            detalle: m.detalle
          };
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(this.mov_art_list);
      });
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(this.pedido_de_presupuesto?.fecha ? this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'YYYY-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]),
      proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(this.pedido_de_presupuesto?.observaciones ? this.pedido_de_presupuesto?.observaciones : null)
    });
    this.form_carga_articulos = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1)]),
      detalle: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('')
    });
    this.updateFormValidators();
  }
  selectProveedor($event, input) {
    const selected = $event.option.value;
    if (selected && !this.selectedProveedores.includes(selected)) {
      this.selectedProveedores.push(selected);
    }
    this.form.get('proveedor').setValue("");
    input.value = "";
  }
  removeProveedor(proveedor) {
    const index = this.selectedProveedores.indexOf(proveedor);
    if (index >= 0) {
      this.selectedProveedores.splice(index, 1);
    }
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      const fecha = this.form.get('fecha').value;
      const fecha_formateada = this.datePipe.transform(fecha, 'yyyy-MM-dd');
      const items_pedido = this.mov_art_list.map(a => {
        return {
          idarticulo: a.articulo,
          idunidadmedida: a.idunidadmedida,
          cantidad: a.cantidad,
          detalle: a.detalle
        };
      });
      const proveedores_id = this.selectedProveedores.map(p => {
        return p.Codigo;
      });
      const payload = {
        pedido: {
          fecha: fecha_formateada,
          observaciones: this.form.get('observaciones').value != null && this.form.get('observaciones').value != '' ? this.form.get('observaciones').value : null
        },
        articulos: items_pedido,
        proveedores: proveedores_id
      };
      if (this.pedido_de_presupuesto?.idpedido) {
        this._pedidoDePresupuestoService.updatePedidoDePresupuesto(this.pedido_de_presupuesto.idpedido, payload).subscribe({
          next: data => {
            if (data) {
              this.onCloseMenu();
            }
          }
        });
      } else {
        this._pedidoDePresupuestoService.savePedidoDePresupuesto(payload).subscribe({
          next: data => {
            if (data) {
              this.onCloseMenu();
            }
          }
        });
      }
    }
  }
  /**
  * Esta funcion maneja las cambios de seleccion que puedan tener los combos.
  * @param $event
  */
  seleccionItem($event, info) {
    //Al seleccionar un articulo...
    if ($event.idarticulo) {
      this.getUnidadesDeMedidaArticulos($event.idarticulo); //...Buscamos las UM que posee ese articulo.
      // Muevo el foco al campo "cantidad" luego de un pequeño retraso.
      // Lo encapsulo dentro de `setTimeout` porque espero a que el DOM renderice el input "cantidad".
      setTimeout(() => {
        const cantidadField = document.querySelector('[formControlName="cantidad"]');
        cantidadField?.focus();
      }, 1);
    }
    if ($event.idrubro && !$event.idarticulo) {
      this.getArticulos($event.idrubro);
      // Muevo el foco al campo "articulo" luego de un pequeño retraso.
      // Lo encapsulo dentro de `setTimeout` porque espero a que el DOM renderice el input "articulo".
      setTimeout(() => {
        const articuloField = document.querySelector('[formControlName="articulo"]');
        articuloField?.focus();
      }, 1);
    }
    if ($event && info === 'cambio_de_foco') {
      $event.preventDefault();
      // Muevo el foco al campo "detalle" luego de un pequeño retraso.
      // Lo encapsulo dentro de `setTimeout` porque espero a que el DOM renderice el input "detalle".
      setTimeout(() => {
        const detalleField = document.querySelector('[formControlName="detalle"]');
        detalleField?.focus();
      }, 1);
    }
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero(input) {
    if (this.form.get(input)) {
      this.form.get(input).setValue('');
      this.seleccionItem(input, 'reset');
    } else if (this.form_carga_articulos.get(input)) {
      this.form_carga_articulos.get(input).setValue('');
      this.seleccionItem(input, 'reset');
    }
    if (input === 'rubro') {
      if (this.form_carga_articulos.get('articulo').value) {
        this.form_carga_articulos.get('articulo').setValue('');
      }
      this.getArticulos();
    }
    if (input === 'articulo') {
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
    }
    if (input === 'carga_exitosa') {
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').reset({
        value: ''
      });
      this.form_carga_articulos.get('cantidad').setValue('');
      this.form_carga_articulos.get('detalle').setValue('');
    }
    if (input === 'proveedor') {
      this.selectedProveedores = [];
      this.form.get('proveedor').setValue(null);
    }
  }
  // ################# Carga De Movimientos #################
  /**
   * Esta funcion añade un nuevo item a la grilla dentro del saveComponent.
   * @var movimiento_articulo Encapsula un objeto con los datos que deseamos mostrar en la tabla.
   */
  addMovimiento(movimiento) {
    if (movimiento) {
      //Si 'res' no es false | undefined | null, continua con la logica...
      let movimiento_articulo = {
        articulo: movimiento.articulo.idarticulo,
        cantidad: movimiento.cantidad,
        idunidadmedida: movimiento.unidad_medida,
        descripcion_articulo: movimiento.articulo.descripcion,
        descripcion_um: movimiento.unidadmedida_descripcion,
        codigo_interno_articulo: movimiento.articulo.codigo_interno,
        detalle: movimiento.detalle
      };
      this.mov_art_list = [movimiento_articulo, ...this.mov_art_list]; // Se agrega el nuevo articulo al comienzo de la lista para que siempre aparezca primero en la grilla
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(this.mov_art_list); //Actualizo la tabla
      // Actualizar validaciones según el estado de la grilla
      this.updateFormValidators();
      this.limpiarCasillero('carga_exitosa'); // Limpio casillerros para que este listo para volver a cargar
      this.alert.success("Artículo añadido con éxito");
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
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource(this.mov_art_list);
    if (this.mov_art_list.length === 0) {
      this.form.get('presupuesto').enable();
    }
    this.alert.success("Artículo eliminado con éxito");
  }
  onCargar($event, input) {
    if ($event?.key === 'Enter') {
      $event.preventDefault();
    }
    if (this.form_carga_articulos.get('cantidad').value <= 0) {
      return this.alert.warning('Por favor, Ingrese una cantidad mayor a cero');
    }
    if (!this.form_carga_articulos.get('unidadmedida').value || !this.form_carga_articulos.get('articulo').value || !this.form_carga_articulos.get('cantidad').value) {
      return this.alert.warning('Por favor, complete todos los campos de la carga de articulo');
    }
    if (!this.form_carga_articulos.valid) {
      return this.alert.error('Debe seleccionar un artículo');
    } else {
      let existeMovimiento = this.mov_art_list.find(movimiento => movimiento.articulo === this.form_carga_articulos.get('articulo').value.idarticulo && movimiento.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value);
      if (existeMovimiento) {
        this.form_carga_articulos.get('unidadmedida').setValue('');
        return this.alert.warning('Ya existe un movimiento de ese articulo con esa unidad de medida');
      }
      let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
      let movimiento_articulo = {
        articulo: this.form_carga_articulos.get('articulo').value,
        unidad_medida: this.form_carga_articulos.get('unidadmedida').value,
        unidadmedida_descripcion: unidadmedida.descripcion_um,
        detalle: this.form_carga_articulos.get('detalle').value,
        cantidad: this.form_carga_articulos.get('cantidad').value
      };
      this.addMovimiento(movimiento_articulo);
    }
    // Mueve el foco al campo "articulo" después de la carga
    this.form_carga_articulos.get('articulo').reset({
      value: ''
    });
    const articuloField = document.querySelector('[formControlName="articulo"]');
    articuloField?.focus();
  }
  onCloseMenu() {
    this.dialogRef.close();
  }
  /**
  * Se escanea el QR de la Etiqueta de articulo y se toma el idarticulo.
  */
  etiquetaArticulo() {
    this.dialogo.open(_shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_1__.LectorQrComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.sendObject.subscribe(code => {
      if (!code || code.length === 0) {
        return this.alert.error('Código QR vacío o inválido');
      }
      let decodedText = JSON.parse(code); // Convierto el string en un json
      const idarticulo = parseInt(decodedText['idarticulo'], 10);
      this._pedidoDePresupuestoService.getArticulos(idarticulo).subscribe(response => {
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
  getProveedores(option) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Proveedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this2._pedidoDePresupuestoService.getProveedores());
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.proveedores = Proveedores.list;
          _this2.filteredProveedores$ = _this2.form.get('proveedor').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)(value => _this2._filterProveedores(value)));
          // En caso de edicion...
          if (_this2.pedido_de_presupuesto) {
            const id_proveedores = _this2.pedido_de_presupuesto.proveedores.toString().split(","); // Encapsulo los idproveedor que me envia el servicio en un arreglo de tipo String...
            // Por cada idproveedor...
            id_proveedores.forEach(idproveedor => {
              // Busco el proveedor el cual coincida su 'codigo' y el 'idproveedor' parseado a Entero...
              let proveedor = _this2.proveedores.find(p => p.Codigo === parseInt(idproveedor));
              // Si no existe el proveedor en arreglo que lista los chips...
              if (!_this2.selectedProveedores.includes(proveedor)) {
                // Lo agrego.
                _this2.selectedProveedores.push(proveedor);
              }
              // Sino no hace nada...
            });
            // Termina ejecucion...
          }

          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getArticulos(idrubro) {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const articulos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this3._pedidoDePresupuestoService.getArticulos(null, null, idrubro));
        _this3.articulos = articulos.list;
        _this3.articulos_list = _this3.articulos;
        _this3.form_carga_articulos.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)(value => _this3._filterArticulos(value || ''))).subscribe(filtered => {
          _this3.filteredArticulos$.next(filtered);
        });
      } catch (error) {
        console.error('Error al obtener articulos:', error);
        _this3.filteredArticulos$.next([]);
      }
    })();
  }
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidadesDeMedida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this4._pedidoDePresupuestoService.getUnidadesDeMedidaArticulos(idarticulo));
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          let um_base; // Asigno una variable global para que cada UM sepa cual es la um base (factor = '1.00')
          _this4.unidades_de_medida = unidadesDeMedida.list.sort((a, b) => a.factor - b.factor).map(unidad => {
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
          if (_this4.unidades_de_medida.length > 0) {
            _this4.form_carga_articulos.get('unidadmedida').setValue(_this4.unidades_de_medida[0].idunidadmedida);
            _this4.seleccionItem({
              um: _this4.unidades_de_medida[0].idunidadmedida
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
  getItemsPedido(idpedido) {
    var _this5 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this5._pedidoDePresupuestoService.getItemsPedido(idpedido));
          _this5.mov_art_list = items.list;
          resolve(_this5.mov_art_list);
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  getRubros() {
    var _this6 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const rubros = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this6._pedidoDePresupuestoService.getRubros());
        _this6.rubros = rubros.list;
        _this6.form_carga_articulos.get('rubro').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)(value => _this6._filterSelect(value || '', 'rubros'))).subscribe(filtered => {
          _this6.filteredRubros$.next(filtered);
        });
      } catch (error) {
        console.error('Error al obtener articulos:', error);
        _this6.filteredRubros$.next([]);
      }
    })();
  }
  _filterProveedores(proveedor) {
    const filterValue = proveedor.toString().toLowerCase();
    return this.proveedores.filter(proveedor => proveedor.RazonSocial.toLowerCase().includes(filterValue));
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
   *
   * @param item Valor a buscar
   * @param model Modelo donde se retorna la lista de valores encontrados
   * @returns Valores encontrados en la lista
   */
  _filterSelect(item, model) {
    const filterValue = item.toString().toLowerCase();
    return this[`${model}`].filter(item => item.descripcion.toLowerCase().includes(filterValue));
  }
  // ################# Metodos para obtener textos de input #################
  /**
  * Obtenemos la descripcion del articulo seleccionado.
  * @param articulo
  * @returns
  */
  getTextArticulo(articulo) {
    return articulo?.idarticulo ? `${articulo.codigo_interno} - ${articulo.descripcion}` : '';
  }
  getTextProveedor(option) {
    return option ? option.RazonSocial : '';
  }
  getTextGenerico(option) {
    if (option.RazonSocial || option.razonSocial) return option ? option.RazonSocial || option.razonSocial : '';
    if (option.descripcion) return option ? option.descripcion : '';
    if (option.nick) return option ? `${option.nombre} ${option.apellido}` : '';
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
      this.form_carga_articulos.get('articulo').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required);
      this.form_carga_articulos.get('unidadmedida').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required);
      this.form_carga_articulos.get('cantidad').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1)]);
    } else {
      // Si hay elementos en la grilla, quitar la validación de requerido
      this.form_carga_articulos.get('articulo').clearValidators();
      this.form_carga_articulos.get('unidadmedida').clearValidators();
      this.form_carga_articulos.get('cantidad').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1));
    }
    // Asegurarse de que Angular reevalúe las validaciones
    this.form_carga_articulos.get('articulo').updateValueAndValidity();
    this.form_carga_articulos.get('unidadmedida').updateValueAndValidity();
    this.form_carga_articulos.get('cantidad').updateValueAndValidity();
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
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_3__.PedidoDePresupuestoService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-pedidos-de-presupuesto"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__.MY_DATE_FORMATS
  }])],
  decls: 13,
  vars: 9,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "max-w-[1280px]", "xl:max-w-[1280px]", "xl:min-w-[950px]", "sm:max-w-[950px]", "sm:min-w-[800px]", "sm:rounded-2xl", "sm:min-h-[500px]", "overflow-y-auto", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [4, "ngIf"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "w-full", "h-full", "flex", "flex-col", "overflow-y-scroll"], ["class", "form-menu p-4", 3, "formGroup", 4, "ngIf"], ["class", "w-full md:flex md:justify-center md:pb-6 md:px-6 mt-auto", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "form-menu", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-2", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/4"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 1, "w-full", "sm:w-3/4"], ["aria-label", "Seleccione Proveedor"], ["chipgrid", ""], [3, "value", "removed", 4, "ngFor", "ngForOf"], ["formControlName", "proveedor", 3, "placeholder", "matChipInputFor", "matAutocomplete"], ["proveedorInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "flex-col", 3, "formGroup"], [1, "flex", "flex-col", "gap-2", "sm:flex-row"], ["appearance", "outline", 1, "sm:w-2/6", "w-full"], ["type", "text", "matInput", "", "formControlName", "rubro", 3, "matAutocomplete", "ngModelChange"], ["autoActiveFirstOption", "", 3, "displayWith"], ["art_rubro", "matAutocomplete"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], [1, "flex", "sm:w-4/6", "w-full", "gap-1"], ["appearance", "outline", 1, "w-full", "sm:w-full"], ["type", "text", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete", "ngModelChange"], ["art_carga", "matAutocomplete"], [1, "flex"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "rounded-full", "ml-1", "mt-1", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.66667 2.66667H6.66667V6.66667H2.66667V2.66667ZM13.3333 2.66667V6.66667H9.33333V2.66667H13.3333ZM9.33333 10H10.6667V8.66667H9.33333V7.33333H10.6667V8.66667H12V7.33333H13.3333V8.66667H12V10H13.3333V12H12V13.3333H10.6667V12H8.66667V13.3333H7.33333V10.6667H9.33333V10ZM10.6667 10V12H12V10H10.6667ZM2.66667 13.3333V9.33333H6.66667V13.3333H2.66667ZM4 4V5.33333H5.33333V4H4ZM10.6667 4V5.33333H12V4H10.6667ZM4 10.6667V12H5.33333V10.6667H4ZM2.66667 7.33333H4V8.66667H2.66667V7.33333ZM6 7.33333H8.66667V10H7.33333V8.66667H6V7.33333ZM7.33333 4H8.66667V6.66667H7.33333V4ZM1.33333 1.33333V4H0V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0L4 0V1.33333H1.33333ZM14.6667 0C15.0203 0 15.3594 0.140476 15.6095 0.390524C15.8595 0.640573 16 0.979711 16 1.33333V4H14.6667V1.33333H12V0H14.6667ZM1.33333 12V14.6667H4V16H1.33333C0.979711 16 0.640573 15.8595 0.390524 15.6095C0.140476 15.3594 0 15.0203 0 14.6667V12H1.33333ZM14.6667 14.6667V12H16V14.6667C16 15.0203 15.8595 15.3594 15.6095 15.6095C15.3594 15.8595 15.0203 16 14.6667 16H12V14.6667H14.6667Z", "fill", "currentColor"], [1, "flex", "gap-2", "flex-col", "sm:flex-row", "w-full"], ["appearance", "outline", 1, "w-full", "sm:w-2/6"], ["formControlName", "unidadmedida", 3, "ngModelChange"], [1, "flex", "w-full", "flex-col", "sm:flex-row", "sm:w-4/6", "gap-2"], ["appearance", "outline", 1, "w-full", "sm:w-2/6", 3, "keydown.enter"], ["matInput", "", "type", "number", "formControlName", "cantidad"], [1, "flex", "w-full", "sm:w-4/6"], ["appearance", "outline", 1, "w-full", "sm:w-full", 3, "keydown.enter"], ["matInput", "", "type", "text", "formControlName", "detalle"], ["matTooltip", "Cargar", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "mt-2", "ml-2", "sm:ml-4", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 10H10V16H6V10H0V6H6V0H10V6H16V10Z", "fill", "white"], [3, "filterChange"], [1, "overflow-y-auto", "max-h-[200px]", "h-[200px]", "shadow-md", "rounded-lg"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "codigointerno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "cantidad"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "unidadmedida"], ["matColumnDef", "detalle"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "rounded-tr-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], [1, "flex", "w-full", "items-center", "my-2", "px-4"], [1, "flex-grow"], [1, "text-gray-700", "text-sm"], ["appearance", "outline", 1, "w-full", "mt-4"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "counter", 3, "ngClass"], [3, "value", "removed"], ["matChipRemove", ""], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["class", "font-light", 4, "ngIf"], [1, "font-light"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-cell", ""], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white", "w-auto"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, SaveComponent_spinner_component_8_Template, 1, 0, "spinner-component", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, SaveComponent_fuse_alert_9_Template, 2, 4, "fuse-alert", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, SaveComponent_form_11_Template, 99, 49, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, SaveComponent_div_12_Template, 4, 4, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.mostrarSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_32__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_6__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__.MatTooltip, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_36__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_37__.MatDatepickerToggle, _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_38__.MatChipRow, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent, _shared_components_grid_filter_grid_filter_component__WEBPACK_IMPORTED_MODULE_8__.GridFilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe],
  styles: ["@charset \"UTF-8\";\n.counter[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  right: 0.5rem;\n  font-size: 0.75rem;\n  color: #C9C9C9;\n  \n}\n\n.counter.reached-max[_ngcontent-%COMP%] {\n  color: #e53e3e;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esb0RBQUE7QUFFSiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwLjVyZW07XHJcbiAgICByaWdodDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNDOUM5Qzk7XHJcbiAgICAvKiBDb2xvciBkZSB0ZXh0byBncmlzICovXHJcbn1cclxuXHJcbi5jb3VudGVyLnJlYWNoZWQtbWF4IHtcclxuICAgIGNvbG9yOiAjZTUzZTNlO1xyXG4gICAgLyogQ29sb3IgZGUgdGV4dG8gcm9qbyBjdWFuZG8gc2UgYWxjYW56YSBlbCBsw61taXRlICovXHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wcmFzL3BlZGlkb3MtZGUtcHJlc3VwdWVzdG8vY29tcG9uZW50cy9zYXZlL3NhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0Esb0RBQUE7QUFFSjtBQUNBLHd2QkFBd3ZCIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwLjVyZW07XHJcbiAgICByaWdodDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNDOUM5Qzk7XHJcbiAgICAvKiBDb2xvciBkZSB0ZXh0byBncmlzICovXHJcbn1cclxuXHJcbi5jb3VudGVyLnJlYWNoZWQtbWF4IHtcclxuICAgIGNvbG9yOiAjZTUzZTNlO1xyXG4gICAgLyogQ29sb3IgZGUgdGV4dG8gcm9qbyBjdWFuZG8gc2UgYWxjYW56YSBlbCBsw4PCrW1pdGUgKi9cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 96698:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/components/ver-cotizacion/ver-cotizacion.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerCotizacionComponent": () => (/* binding */ VerCotizacionComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/pedidos-de-presupuesto.service */ 71137);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/chips */ 51031);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/spinner/spinner.component */ 32925);
/* harmony import */ var _shared_components_grid_filter_grid_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/grid-filter/grid-filter.component */ 71788);
























function VerCotizacionComponent_spinner_component_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "spinner-component");
  }
}
function VerCotizacionComponent_fuse_alert_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fuse-alert", 8);
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
function VerCotizacionComponent_form_10_mat_chip_row_13_button_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 46)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function VerCotizacionComponent_form_10_mat_chip_row_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-chip-row", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, VerCotizacionComponent_form_10_mat_chip_row_13_button_2_Template, 3, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r20 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", "bg-slate-800")("value", proveedor_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", proveedor_r20.RazonSocial, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r5.pedido_de_presupuesto);
  }
}
function VerCotizacionComponent_form_10_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Codigo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r7.color_primario ? "" : ctx_r7.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r7.color_primario || "");
  }
}
function VerCotizacionComponent_form_10_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r22.codigo_interno_articulo, " ");
  }
}
function VerCotizacionComponent_form_10_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r9.color_primario ? "" : ctx_r9.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r9.color_primario || "");
  }
}
function VerCotizacionComponent_form_10_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r23.descripcion_articulo, " ");
  }
}
function VerCotizacionComponent_form_10_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r11.color_primario ? "" : ctx_r11.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r11.color_primario || "");
  }
}
function VerCotizacionComponent_form_10_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r24.cantidad, " ");
  }
}
function VerCotizacionComponent_form_10_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "UM");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r13.color_primario ? "" : ctx_r13.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r13.color_primario || "");
  }
}
function VerCotizacionComponent_form_10_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r25.descripcion_um, " ");
  }
}
function VerCotizacionComponent_form_10_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r15.color_primario ? "" : ctx_r15.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r15.color_primario || "");
  }
}
function VerCotizacionComponent_form_10_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 50)(1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const movimiento_articulo_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](movimiento_articulo_r26.detalle);
  }
}
function VerCotizacionComponent_form_10_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 52);
  }
}
function VerCotizacionComponent_form_10_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 53);
  }
}
function VerCotizacionComponent_form_10_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 54)(1, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function VerCotizacionComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 9)(1, "div", 10)(2, "div", 11)(3, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 13)(5, "mat-datepicker-toggle", 14)(6, "mat-datepicker", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-form-field", 16)(9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "mat-chip-grid", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, VerCotizacionComponent_form_10_mat_chip_row_13_Template, 3, 4, "mat-chip-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "app-grid-filter", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("filterChange", function VerCotizacionComponent_form_10_Template_app_grid_filter_filterChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 23)(18, "table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](19, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, VerCotizacionComponent_form_10_th_20_Template, 2, 4, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, VerCotizacionComponent_form_10_td_21_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](22, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, VerCotizacionComponent_form_10_th_23_Template, 2, 4, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, VerCotizacionComponent_form_10_td_24_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](25, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, VerCotizacionComponent_form_10_th_26_Template, 2, 4, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, VerCotizacionComponent_form_10_td_27_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](28, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, VerCotizacionComponent_form_10_th_29_Template, 2, 4, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, VerCotizacionComponent_form_10_td_30_Template, 2, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](31, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, VerCotizacionComponent_form_10_th_32_Template, 2, 4, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, VerCotizacionComponent_form_10_td_33_Template, 3, 1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, VerCotizacionComponent_form_10_tr_34_Template, 1, 0, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, VerCotizacionComponent_form_10_tr_35_Template, 1, 0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, VerCotizacionComponent_form_10_div_36_Template, 3, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "mat-form-field", 41)(42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "textarea", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](12);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.selectedProveedores);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("placeholder", "Agregar Proveedor")("matChipInputFor", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.columns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx_r2.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.dataSource.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" Total de art\u00EDculos: ", ctx_r2.dataSource.data.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r2.getPalabrasLength(), "/", ctx_r2.maxPalabras, " ");
  }
}
class VerCotizacionComponent {
  constructor(data, _pedidoDePresupuestoService, _empresaService, alert, datePipe, dialogRef) {
    this.data = data;
    this._pedidoDePresupuestoService = _pedidoDePresupuestoService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.datePipe = datePipe;
    this.dialogRef = dialogRef;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.showAlert = false;
    this.maxPalabras = 50;
    this.mostrarSpinner = true;
    this.mostrar_mensaje = false;
    // Particulares del modulo
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
    this.columns = ['codigointerno', 'articulo', 'cantidad', 'unidadmedida', 'detalle'];
    this.mov_art_list = [];
    this.selectedProveedores = [];
    this.pedido_de_presupuesto = this.data ? this.data : null;
    this.title = `Pedido De Presupuesto N° ${this.pedido_de_presupuesto.idpedido}`;
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
  }
  ngOnInit() {
    // Load empresa data
    this._empresaService.getEmpresa();
    this.newForm();
    this.loadServices();
  }
  newForm() {
    const [dia, mes, anio] = this.pedido_de_presupuesto.fecha.split('/'); //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    this.getItemsPedido(this.pedido_de_presupuesto.idpedido).then(res => {
      this.mov_art_list = res.map(m => {
        return {
          articulo: m.idarticulo,
          cantidad: m.cantidad,
          idunidadmedida: m.idunidadmedida,
          descripcion_articulo: m.articulo_descripcion,
          descripcion_um: m.um_descripcion,
          codigo_interno_articulo: m.codigo_interno,
          detalle: m.detalle
        };
      });
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource(this.mov_art_list);
    });
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl({
        disabled: true,
        value: this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd')
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(''),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl({
        disabled: true,
        value: this.pedido_de_presupuesto.observaciones
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required)
    });
  }
  onCloseMenu() {
    this.dialogRef.close();
  }
  // ################# Metodos de comunicacion con el service #################
  /**
  * Este metodo ejecuta todas las peticiones asincronas al mismo tiempo
  */
  loadServices() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all([_this.getProveedores() // Método que carga proveedores
      ]).then(() => {
        _this.mostrarSpinner = false;
      });
    })();
  }
  getItemsPedido(idpedido) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(_this2._pedidoDePresupuestoService.getItemsPedido(idpedido));
          _this2.mov_art_list = items.list;
          resolve(_this2.mov_art_list);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getProveedores(option) {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Proveedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(_this3._pedidoDePresupuestoService.getProveedores());
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.proveedores = Proveedores.list;
          // En caso de edicion...
          if (_this3.pedido_de_presupuesto) {
            const id_proveedores = _this3.pedido_de_presupuesto.proveedores.toString().split(","); // Encapsulo los idproveedor que me envia el servicio en un arreglo de tipo String...
            // Por cada idproveedor...
            id_proveedores.forEach(idproveedor => {
              // Busco el proveedor el cual coincida su 'codigo' y el 'idproveedor' parseado a Entero...
              let proveedor = _this3.proveedores.find(p => p.Codigo === parseInt(idproveedor));
              // Si no existe el proveedor en arreglo que lista los chips...
              if (!_this3.selectedProveedores.includes(proveedor)) {
                // Lo agrego.
                _this3.selectedProveedores.push(proveedor);
              }
              // Sino no hace nada...
            });
            // Termina ejecucion...
          }

          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
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
  * Filtro para buscar en la grilla de articulos
  * @param filterValue
  */
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
VerCotizacionComponent.ɵfac = function VerCotizacionComponent_Factory(t) {
  return new (t || VerCotizacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_2__.PedidoDePresupuestoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef));
};
VerCotizacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: VerCotizacionComponent,
  selectors: [["app-ver-cotizacion-pedidos-de-presupuesto"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 11,
  vars: 8,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "max-w-[1280px]", "xl:max-w-[1280px]", "xl:min-w-[950px]", "sm:max-w-[950px]", "sm:min-w-[800px]", "sm:rounded-2xl", "xl:max-h-[950px]", "xl:min-h-[850px]", "sm:max-h-[630px]", "sm:min-h-[500px]", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [4, "ngIf"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], ["class", "form-menu p-4 overflow-y-auto", 3, "formGroup", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "form-menu", "p-4", "overflow-y-auto", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-4", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/4"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 1, "w-full", "sm:w-full"], ["disabled", "", "aria-label", "Seleccione Proveedor"], ["chipgrid", ""], [3, "ngClass", "value", 4, "ngFor", "ngForOf"], ["readonly", "", "formControlName", "proveedor", 3, "placeholder", "matChipInputFor"], ["proveedorInput", ""], [3, "filterChange"], [1, "overflow-y-auto", "max-h-[450px]", "h-[450px]", "sm:max-h-[200px]", "sm:h-[200px]", "shadow-md", "rounded-lg"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "codigointerno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "cantidad"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "unidadmedida"], ["matColumnDef", "detalle"], ["mat-header-cell", "", "class", " rounded-tr-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], [1, "flex", "w-full", "items-center", "my-2", "px-4"], [1, "flex-grow"], [1, "text-gray-700", "text-sm"], ["appearance", "outline", 1, "w-full", "mt-4"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], ["disabled", "", "ngClass", "text-gray-400", 1, "counter"], [3, "ngClass", "value"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-cell", ""], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white", "w-auto"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"]],
  template: function VerCotizacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function VerCotizacionComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, VerCotizacionComponent_spinner_component_8_Template, 1, 0, "spinner-component", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, VerCotizacionComponent_fuse_alert_9_Template, 2, 4, "fuse-alert", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, VerCotizacionComponent_form_10_Template, 47, 14, "form", 7);
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
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatSuffix, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.FuseAlertComponent, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__.MatDatepickerToggle, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipGrid, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipInput, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipRemove, _angular_material_chips__WEBPACK_IMPORTED_MODULE_22__.MatChipRow, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _shared_components_grid_filter_grid_filter_component__WEBPACK_IMPORTED_MODULE_7__.GridFilterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXItY290aXphY2lvbi5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wcmFzL3BlZGlkb3MtZGUtcHJlc3VwdWVzdG8vY29tcG9uZW50cy92ZXItY290aXphY2lvbi92ZXItY290aXphY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 22225:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/pedidos-de-presupuestos.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidosDePresupuestoModule": () => (/* binding */ PedidosDePresupuestoModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _components_pedidos_de_presupuesto_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pedidos-de-presupuesto.component */ 27447);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 37101);
/* harmony import */ var _service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/pedidos-de-presupuesto.service */ 71137);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 21984);
/* harmony import */ var _components_cotizar_cotizar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cotizar/cotizar.component */ 88964);
/* harmony import */ var _components_ver_cotizacion_ver_cotizacion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ver-cotizacion/ver-cotizacion.component */ 96698);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/chips */ 51031);
/* harmony import */ var _components_nueva_cotizacion_nueva_cotizacion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nueva-cotizacion/nueva-cotizacion.component */ 57439);
/* harmony import */ var _components_generar_orden_generar_orden_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/generar-orden/generar-orden.component */ 35381);
/* harmony import */ var _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/shared-component.module */ 46288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 86839);
































const routes = [{
  path: '',
  component: _components_pedidos_de_presupuesto_component__WEBPACK_IMPORTED_MODULE_3__.PedidoDePresupuestoComponent
}];
class PedidosDePresupuestoModule {}
PedidosDePresupuestoModule.ɵfac = function PedidosDePresupuestoModule_Factory(t) {
  return new (t || PedidosDePresupuestoModule)();
};
PedidosDePresupuestoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: PedidosDePresupuestoModule
});
PedidosDePresupuestoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
  providers: [_service_pedidos_de_presupuesto_service__WEBPACK_IMPORTED_MODULE_5__.PedidoDePresupuestoService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_12__.SharedComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](PedidosDePresupuestoModule, {
    declarations: [_components_pedidos_de_presupuesto_component__WEBPACK_IMPORTED_MODULE_3__.PedidoDePresupuestoComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent, _components_cotizar_cotizar_component__WEBPACK_IMPORTED_MODULE_8__.CotizarComponent, _components_ver_cotizacion_ver_cotizacion_component__WEBPACK_IMPORTED_MODULE_9__.VerCotizacionComponent, _components_nueva_cotizacion_nueva_cotizacion_component__WEBPACK_IMPORTED_MODULE_10__.NuevaCotizacionComponent, _components_generar_orden_generar_orden_component__WEBPACK_IMPORTED_MODULE_11__.GenerarOrdenComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_29__.MatDatepickerModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_30__.MatChipsModule, _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_12__.SharedComponentModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

/***/ }),

/***/ 71137:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/compras/pedidos-de-presupuesto/service/pedidos-de-presupuesto.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoDePresupuestoService": () => (/* binding */ PedidoDePresupuestoService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class PedidoDePresupuestoService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el servicio
   * - Esta funcion retorna los Rubros.
   * @returns Rubros
   */
  getPedidoDePresupuesto(sort) {
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
   * @param pedido_de_presupuesto
   * @returns Crea un item nuevo
   */
  savePedidoDePresupuesto(pedido_de_presupuesto) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.compras_pedidos}`, pedido_de_presupuesto);
  }
  /**
   * Funcion en el servicio
   * @param idpedido
   * @param pedido_de_presupuesto
   * @returns Item actualizado actualizado
   */
  updatePedidoDePresupuesto(idpedido, pedido_de_presupuesto) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.compras_pedidos}` + '/' + idpedido, pedido_de_presupuesto);
  }
  /**
   * Funcion en el servicio
   * @param idpedido
   * @returns Elimina un item
   */
  deletePedidoDePresupuesto(idpedido) {
    return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.compras_pedidos}` + '/' + idpedido);
  }
  getProveedores(option) {
    let f = '?sort=RazonSocial';
    f += !option ? '&filter[activo]=1' : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.proveedores}${f}`).subscribe(resp => {
      // this._authService.accessToken = resp.token;
      subject.next({
        list: resp
      });
    });
    return subject.asObservable();
  }
  getRubros(option) {
    let f = '?sort=descripcion';
    f += !option ? '&filter[activo]=1' : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.rubros}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  enviarPedidoDePresupuesto(pedido_de_presupuesto) {
    return this.http.post(``, pedido_de_presupuesto);
  }
  getArticulos(idarticulo, filterLike, idrubro) {
    let f = `?filter[activo]=1&pagination=1&per-page=10&page=1`;
    if (idarticulo) {
      f += `&filter[idarticulo]=${idarticulo}`;
    } else if (filterLike) {
      f += `&filter[or][0][codigo_interno][like]=${filterLike}&filter[or][1][descripcion][like]=${filterLike}`;
    }
    f += idrubro ? `&filter[idrubro]=${idrubro}` : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    let env = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_articulos + '?sort=descripcion&pagination=1&sort=-total_stock&sort=orden';
    this.http.get(`${env}${f}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => resp)).subscribe(resp => {
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
      // this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getItemsPedido(idpedido) {
    let f = `?filter[idpedido]=${idpedido}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.view_compras_pedido_item}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  saveCotizacion(cotizacion) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.compras_cotizacion}`, cotizacion);
  }
  updateCotizazcion(idcotizacion, cotizacion) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.compras_cotizacion}` + '/' + idcotizacion, cotizacion);
  }
  deleteCotizacion(idcotizacion) {
    return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.compras_cotizacion}` + '/' + idcotizacion);
  }
  getCotizacionesPedido(idpedido) {
    let f = `?filter[idpedido]=${idpedido}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.view_compras_cotizacion}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getItemsCotizacion(idcotizacion) {
    let f = `?filter[idcotizacion]=${idcotizacion}`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.view_compras_cotizacion_item}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  generarOrdenCompra(payload) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.compras_orden_compra_cotizacion}`, payload);
  }
  /**
  *
  * @param idpedido
  * @returns
  */
  reportePedidoDePresupuesto(idpedido) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.compras.generar_reporte_pedido}` + idpedido);
  }
}
PedidoDePresupuestoService.ɵfac = function PedidoDePresupuestoService_Factory(t) {
  return new (t || PedidoDePresupuestoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
PedidoDePresupuestoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: PedidoDePresupuestoService,
  factory: PedidoDePresupuestoService.ɵfac
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
//# sourceMappingURL=src_app_modules_compras_pedidos-de-presupuesto_pedidos-de-presupuestos_module_ts.js.map