"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_entregas_entregas_module_ts"],{

/***/ 20281:
/*!*************************************************************************!*\
  !*** ./src/app/modules/stock/entregas/components/entregas.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntregasComponent": () => (/* binding */ EntregasComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save/save.component */ 20113);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 48097);
/* harmony import */ var _shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/lector-qr/lector-qr.component */ 5729);
/* harmony import */ var _service_entregas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/entregas.service */ 78165);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/service/app/pwa.service */ 16173);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 83677);
























function EntregasComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 3, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EntregasComponent_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.saveEntrega());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "Nueva Entrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx_r0.color_primario ? "" : ctx_r0.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("border", ctx_r0.color_primario || "")("color", ctx_r0.color_primario || "");
  }
}
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
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource();
    this.headers = ['Fecha Precarga', 'Fecha Entrega', 'Responsable', 'Observaciones', 'Deposito', 'Usuario Encargado', 'Estado', 'Acciones'];
    this.column_params = ['fecha_hora_precarga', 'fecha_hora_entrega', 'nick_usuario', 'observaciones', 'descripcion_deposito', 'nick_usuario_entrega', 'descripcion_estado', 'acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['nick_usuario', 'descripcion_deposito', 'nick_usuario_entrega', 'numero_venta'];
    this.filter = {
      deposito: -1,
      filtroFechaInicio: '',
      filtroFechaFin: ''
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.stock.view_stock_entregas + '?sort=-fecha_hora_precarga';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('');
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    this.mostrarTextoOrdenServicio = true;
    this.buttonStyleOrdenServicio = 'default';
    this.ordenServicioScaneada = false;
    this.puede_crear = false;
    this._headerTextService.setTitulo(this.router);
    /**
     * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
     */
    this.funcionesObjeto = [{
      nombre_boton: "Editar",
      functionName: 'editar',
      iconoAccion: entrega => entrega.puede_editar_entrega == 1 ? 'jedstion:editar' : '',
      iconoAccionado: entrega => '',
      iconoDeshabilitado: entrega => ''
    }, {
      nombre_boton: "Eliminar",
      functionName: 'eliminar',
      iconoAccion: entrega => entrega.puede_eliminar == 1 ? 'jedstion:eliminar' : '',
      iconoAccionado: entrega => '',
      iconoDeshabilitado: entrega => ''
    }, {
      nombre_boton: "Reporte",
      functionName: 'reporte',
      iconoAccion: entrega => 'jedstion:imprimir',
      iconoAccionado: entrega => '',
      iconoDeshabilitado: entrega => ''
    }, {
      nombre_boton: "Entregar",
      functionName: 'entregar',
      iconoAccion: entrega => entrega.puede_editar_entrega == 1 && !entrega.fecha_hora_entrega ? 'jedstion:lector_qr' : '',
      iconoAccionado: entrega => '',
      iconoDeshabilitado: entrega => '' //'jedstion:lector_qr_disabled',
    }];
  }

  ngOnInit() {
    this.puedeCrearEntrega();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
      this.asignacion_entrega = empresa.asignacion_entrega;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(750), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)()).subscribe(value => {
      this.filtroBusqueda = value;
      this.tabla.filters(this.filtroBusqueda);
    });
    this.FilterEventSub$ = this._searchService.getFilterEvent().subscribe(event => {
      this.onFilterMenu(this._searchService.getFilterOrigin());
    });
  }
  puedeCrearEntrega() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        _this._entregasService.puedeCrearEntrega().subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            if (data.success) {
              _this.puede_crear = data.result;
              resolve(data);
            }
          },
          error: error => {
            // Manejar el error
            console.log('No se pudo obtener puede_crear.');
          }
        });
      });
    })();
  }
  /**
  * Se escanea el QR de Orden de Servicio y se toma la idordenservicio.
  */
  ordenServicio() {
    let idordenservicio;
    let clave_os;
    this.dialogo.open(_shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_5__.LectorQrComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.sendObject.subscribe(code => {
      return console.log(code);
      if (!code || code.length === 0) {
        this.alert.error('Código QR vacío o inválido.');
        return;
      }
      let decodedText = JSON.parse(code); // Convierto el string en json
      for (const clave in decodedText) {
        clave_os = clave;
        idordenservicio = decodedText[clave];
      }
      let queryParams = `?filter[${clave_os}]=`;
      this._entregasService.getOrdenServicioEntregas(idordenservicio, queryParams).subscribe(response => {
        if (response?.result?.length > 0) {
          const result = response.result[0];
          if (this.asignacion_entrega === 0) {
            this.orden_servicio = result.idventagenerica;
            this.filter.orden_servicio = {
              idventagenerica: result.idventagenerica,
              cliente: result.cliente_venta,
              fecha: result.fecha_precarga
            };
          } else if (this.asignacion_entrega === 1 && clave_os === 'idcomplejo') {
            this.orden_servicio = result.idcomplejo;
            this.filter.complejo = {
              idcomplejo: result.idcomplejo,
              descripcion_complejo: result.descripcion_complejo
            };
          } else if (this.asignacion_entrega === 1 && clave_os === 'idunidadfuncional') {
            this.orden_servicio = result.idunidadfuncional;
            this.filter.unidad_funcional = {
              idunidadfuncional: result.idunidadfuncional,
              descripcion_complejo_uf: result.descripcion_complejo_uf
            };
          }
          this.extraParams = `&filter[${clave_os}]=${this.orden_servicio}`;
          this.tabla.filters(this.filtroBusqueda); // Aplico filtro y renderizo la tabla
        } else {
          this.alert.error('No hay items asociados a esa OS.');
          this.extraParams = this.filtroBusqueda.replace(`&filter[${clave_os}]=${this.orden_servicio}`, ""); // Elimino el query params.
          this.tabla.filters(this.filtroBusqueda); // Aplico filtro y renderizo la tabla
        }
      }, error => {
        console.error('Error al obtener venta:', error);
        this.tabla.filters(this.filtroBusqueda); // Aplico filtro y renderizo la tabla
      });
    });
  }

  onFilterMenu(origin) {
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter,
      data: this.tabla.getElementosExistentes()
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter.deposito != -1 ? "filter[iddeposito]=" + this.filter.deposito + '&' : '';
          this.extraParams += this.filter?.orden_servicio?.idventagenerica ? "filter[idventagenerica]=" + this.filter.orden_servicio?.idventagenerica + '&' : '';
          this.extraParams += this.filter?.unidad_funcional?.idunidadfuncional ? "filter[idunidadfuncional]=" + this.filter.unidad_funcional?.idunidadfuncional + '&' : '';
          this.extraParams += this.filter?.complejo?.idcomplejo ? "filter[idcomplejo]=" + this.filter.complejo?.idcomplejo + '&' : '';
          this.extraParams += this.filter.usuario_responsable != '' ? "filter[nick_usuario]=" + this.filter.usuario_responsable + '&' : '';
          this.extraParams += this.filter.usuario_encargado != '' ? "filter[nick_usuario_entrega]=" + this.filter.usuario_encargado + '&' : '';
          this.extraParams += this.filter.filtroFechaInicio != null ? "filter[fecha_precarga][gte]=" + this.filter.filtroFechaInicio + '&' : '';
          this.extraParams += this.filter.filtroFechaFin != null ? "filter[fecha_precarga][lte]=" + this.filter.filtroFechaFin + '&' : '';
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
        this.updateEntrega(event);
        break;
      case 'eliminar':
        this.deleteEntrega(event);
        break;
      case 'reporte':
        this.reporteEntrega(event);
        break;
      case 'entregar':
        this.entregarEntrega(event);
        break;
    }
  }
  entregarEntrega(event) {
    let idUsuario = -1;
    this.dialogo.open(_shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_5__.LectorQrComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.sendObject.subscribe(code => {
      if (!code || code.length === 0) {
        this.alert.error('Código QR vacío o inválido.');
        return;
      }
      let decodedText = JSON.parse(code); // Convierto el string en json
      const idusuario = parseInt(decodedText['idusuario'], 10);
      idUsuario = idusuario;
      this._entregasService.getUsuarioQR(idusuario).subscribe(response => {
        if (response?.result?.length > 0) {
          const usuario = response.result[0];
          this.confirm.open({
            title: "Asignar Entrega: " + event.params.data.fecha_hora_precarga,
            message: '¿Asignar entrega al usuario ' + usuario.nombre + ' ' + usuario.apellido + '?',
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
              let payload = {
                "usuario_entrega": usuario.codigo
              };
              this._entregasService.entregarEntrega(event.params.data.identrega, payload).subscribe({
                next: res => {
                  // Manejar la respuesta exitosa
                  this.alert.success("Entrega asignada con éxito.");
                  if (res) {
                    this.tabla.renderTabla();
                  }
                },
                error: error => {
                  // Manejar el error
                  console.error('Error en el servicio:', error);
                  this.alert.warning("Esta entrega no puede asignarse.");
                }
              });
            }
          });
        } else {
          this.alert.error('Usuario no encontrado.');
        }
      }, error => {
        console.error('Error al obtener usuario:', error);
      });
    });
  }
  /**
   * Esta funcion guarda un item
   */
  saveEntrega() {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, {
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
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, {
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
      title: "Eliminar Entrega: " + event.params.data.fecha_hora_precarga,
      message: `¿Desea eliminar la entrega realizada el: ${event.params.data.fecha_hora_precarga}; del depósito: ${event.params.data.descripcion_deposito} ?`,
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
          const reporteUrl = `${environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseRest}/${reportePath}`;
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
  return new (t || EntregasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_service_entregas_service__WEBPACK_IMPORTED_MODULE_6__.EntregasService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_7__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_8__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_9__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_10__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_11__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_12__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_13__.PwaService));
};
EntregasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: EntregasComponent,
  selectors: [["app-entregas"]],
  viewQuery: function EntregasComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  inputs: {
    extraParams: "extraParams"
  },
  outputs: {
    parametrosActualizados: "parametrosActualizados"
  },
  decls: 12,
  vars: 16,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "fixed", "right-10", "flex", "space-x-4"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], [1, "flex", "items-center"], ["width", "22", "height", "22", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.66667 2.66667H6.66667V6.66667H2.66667V2.66667ZM13.3333 2.66667V6.66667H9.33333V2.66667H13.3333ZM9.33333 10H10.6667V8.66667H9.33333V7.33333H10.6667V8.66667H12V7.33333H13.3333V8.66667H12V10H13.3333V12H12V13.3333H10.6667V12H8.66667V13.3333H7.33333V10.6667H9.33333V10ZM10.6667 10V12H12V10H10.6667ZM2.66667 13.3333V9.33333H6.66667V13.3333H2.66667ZM4 4V5.33333H5.33333V4H4ZM10.6667 4V5.33333H12V4H10.6667ZM4 10.6667V12H5.33333V10.6667H4ZM2.66667 7.33333H4V8.66667H2.66667V7.33333ZM6 7.33333H8.66667V10H7.33333V8.66667H6V7.33333ZM7.33333 4H8.66667V6.66667H7.33333V4ZM1.33333 1.33333V4H0V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0L4 0V1.33333H1.33333ZM14.6667 0C15.0203 0 15.3594 0.140476 15.6095 0.390524C15.8595 0.640573 16 0.979711 16 1.33333V4H14.6667V1.33333H12V0H14.6667ZM1.33333 12V14.6667H4V16H1.33333C0.979711 16 0.640573 15.8595 0.390524 15.6095C0.140476 15.3594 0 15.0203 0 14.6667V12H1.33333ZM14.6667 14.6667V12H16V14.6667C16 15.0203 15.8595 15.3594 15.6095 15.6095C15.3594 15.8595 15.0203 16 14.6667 16H12V14.6667H14.6667Z", "fill", "currentColor"], [1, "ml-2", "text-lg", "mt-0.5", "hidden", "md:inline"], ["mat-flat-button", "", "class", "w-full px-6 py-6 !border border-solid rounded-lg md:w-55 md:rounded-lg", 3, "class", "border", "color", "click", 4, "ngIf"], [1, "pr-2", "pl-2", "mt-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"], ["save", ""], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"]],
  template: function EntregasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EntregasComponent_Template_button_click_3_listener() {
        return ctx.ordenServicio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "Buscar OS");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, EntregasComponent_button_9_Template, 7, 6, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 9)(11, "app-tabla-dinamica", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("functionEmitter", function EntregasComponent_Template_app_tabla_dinamica_functionEmitter_11_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.puede_crear);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "ssp")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent],
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-datepicker-toggle", 30);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r1);
  }
}
function FilterMenuComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.limpiarFechas());
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
    const deposito_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", deposito_r16.iddeposito);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](deposito_r16.descripcion);
  }
}
function FilterMenuComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Orden de servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FilterMenuComponent_mat_form_field_30_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const venta_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", venta_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", venta_r19.cliente, " ~ ", venta_r19.fecha, " ");
  }
}
function FilterMenuComponent_mat_form_field_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 21)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-autocomplete", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, FilterMenuComponent_mat_form_field_30_mat_option_7_Template, 2, 3, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx_r5.getTextVenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 3, ctx_r5.filteredVentas));
  }
}
function FilterMenuComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Unidad funcional");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FilterMenuComponent_mat_form_field_32_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const uf_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", uf_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", uf_r22.descripcion_complejo_uf, " ");
  }
}
function FilterMenuComponent_mat_form_field_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 21)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-autocomplete", 33, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, FilterMenuComponent_mat_form_field_32_mat_option_7_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx_r7.getTextUnidadFuncional);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 3, ctx_r7.filteredUnidadesFuncionales));
  }
}
function FilterMenuComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Complejo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function FilterMenuComponent_mat_form_field_34_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const complejo_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", complejo_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", complejo_r25.descripcion_complejo, " ");
  }
}
function FilterMenuComponent_mat_form_field_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 21)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-autocomplete", 33, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, FilterMenuComponent_mat_form_field_34_mat_option_7_Template, 2, 2, "mat-option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](6);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx_r9.getTextComplejo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 3, ctx_r9.filteredComplejos));
  }
}
function FilterMenuComponent_mat_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_responsable_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", usuario_responsable_r26.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", usuario_responsable_r26.nick, " ");
  }
}
function FilterMenuComponent_mat_option_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_encargado_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", usuario_encargado_r27.nick);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", usuario_encargado_r27.nick, " ");
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
    this.unidades_funcionales = [];
    this.complejos = [];
    this.ventas = [];
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
      this.asignacion_entrega = empresa.asignacion_entrega;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.getDepositos();
    this.getUsuarios();
    this.getAsignacionEntrega();
    this.formFilters.patchValue(this.data.filter);
  }
  getAsignacionEntrega() {
    if (this.asignacion_entrega === 0) {
      this.formFilters.addControl('orden_servicio', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''));
      this.getVentas();
    } else if (this.asignacion_entrega === 1) {
      this.formFilters.addControl('unidad_funcional', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''));
      this.formFilters.addControl('complejo', new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''));
      this.getUnidadesFuncionales();
      this.getComplejos();
    }
  }
  resetFilters() {
    if (this.asignacion_entrega === 0) {
      this.formFilters.reset({
        filtroFechaInicio: '',
        filtroFechaFin: '',
        usuario_responsable: '',
        usuario_encargado: '',
        deposito: -1,
        orden_servicio: ''
      });
    } else if (this.asignacion_entrega === 1) {
      this.formFilters.reset({
        filtroFechaInicio: '',
        filtroFechaFin: '',
        usuario_responsable: '',
        usuario_encargado: '',
        deposito: -1,
        unidad_funcional: '',
        complejo: ''
      });
    }
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
  /**
  * Funcion que lista las ventas.
  */
  getVentas() {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ventas = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this3._entregasService.getVentas());
      _this3.ventas = ventas.list;
      _this3.filteredVentas = _this3.formFilters.get('orden_servicio').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(value => _this3._filterVentas(value)));
    })();
  }
  /**
  * Esta funcion es para filtrar las ventas según el input que se haya ingresado en el buscador de ventas.
  * @param value
  * @returns
  */
  _filterVentas(value) {
    const filterValue = value?.idventagenerica ? value.idventagenerica.toString().toLowerCase() : value.toString().toLowerCase(); // PErdon por no ser tan prolijo, es una chanchada esto, no tengo tiempo ;(
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
    return venta ? `${venta.cliente} ~ ${venta.fecha}` : '';
  }
  /**
  * Funcion que lista los complejos.
  */
  getComplejos() {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const complejos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this4._entregasService.getComplejos());
      _this4.complejos = complejos.list;
      _this4.filteredComplejos = _this4.formFilters.get('complejo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(value => _this4._filterTextGenerico(value, _this4.complejos, 'descripcion_complejo')));
    })();
  }
  /**
  * Funcion que lista las unidades funcionales.
  */
  getUnidadesFuncionales() {
    var _this5 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_funcionales = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.firstValueFrom)(_this5._entregasService.getUnidadesFuncionales());
      _this5.unidades_funcionales = unidades_funcionales.list;
      _this5.filteredUnidadesFuncionales = _this5.formFilters.get('unidad_funcional').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.map)(value => _this5._filterTextGenerico(value, _this5.unidades_funcionales, 'descripcion_complejo_uf')));
    })();
  }
  /**
  * Obtenemos el cliente y fecha de dicha venta seleccionada.
  * @param uf
  * @returns
  */
  getTextUnidadFuncional(uf) {
    return uf ? uf.descripcion_complejo_uf : '';
  }
  /**
  * Obtenemos el cliente y fecha de dicha venta seleccionada.
  * @param complejo
  * @returns
  */
  getTextComplejo(complejo) {
    return complejo ? complejo.descripcion_complejo : '';
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
  decls: 64,
  vars: 35,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-120", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Desde", "formControlName", "filtroFechaInicio"], ["matEndDate", "", "placeholder", "Hasta", "formControlName", "filtroFechaFin"], ["matIconSuffix", "", 3, "for", 4, "ngIf"], ["picker", ""], ["matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["formControlName", "deposito"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "font-semibold text-gray-600 text-base", 4, "ngIf"], ["class", "fuse-mat-dense fuse-mat-no-subscript fuse-mat-rounded-lg min-w-64 mt-2", 4, "ngIf"], ["type", "text", "placeholder", "Seleccione Usuario Responsable", "matInput", "", "formControlName", "usuario_responsable", 3, "matAutocomplete"], ["mat-icon-button", "", "matSuffix", ""], ["autoUsuarioResponsable", "matAutocomplete"], ["type", "text", "placeholder", "Seleccione Usuario Encargado", "matInput", "", "formControlName", "usuario_encargado", 3, "matAutocomplete"], ["autoUsuarioEncargado", "matAutocomplete"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"], ["matIconSuffix", "", 3, "for"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["type", "text", "placeholder", "Seleccione Orden de Servicio", "matInput", "", "formControlName", "orden_servicio", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["autoOrdenServicio", "matAutocomplete"], ["type", "text", "placeholder", "Seleccione Unidad funcional", "matInput", "", "formControlName", "unidad_funcional", 3, "matAutocomplete"], ["autoUnidadFuncional", "matAutocomplete"], ["type", "text", "placeholder", "Seleccione Complejo", "matInput", "", "formControlName", "complejo", 3, "matAutocomplete"], ["autoComplejo", "matAutocomplete"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, FilterMenuComponent_span_29_Template, 2, 0, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, FilterMenuComponent_mat_form_field_30_Template, 9, 5, "mat-form-field", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, FilterMenuComponent_span_31_Template, 2, 0, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, FilterMenuComponent_mat_form_field_32_Template, 9, 5, "mat-form-field", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, FilterMenuComponent_span_33_Template, 2, 0, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, FilterMenuComponent_mat_form_field_34_Template, 9, 5, "mat-form-field", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Usuario Responsable");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "button", 21)(40, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "arrow_drop_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-autocomplete", null, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, FilterMenuComponent_mat_option_44_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](45, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Usuario Encargado");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "button", 21)(51, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "arrow_drop_down");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-autocomplete", null, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, FilterMenuComponent_mat_option_55_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](56, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 25)(58, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_58_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_61_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](43);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](54);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formFilters.get("orden_servicio"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formFilters.get("orden_servicio"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formFilters.get("unidad_funcional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formFilters.get("unidad_funcional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formFilters.get("complejo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.formFilters.get("complejo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](45, 31, ctx.filteredUsuarioResponsable));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](56, 33, ctx.filteredUsuarioEncargado));
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
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _service_entregas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/entregas.service */ 78165);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);




























function SaveComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fuse-alert", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r0._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0._alertConfig.message, " ");
  }
}
function SaveComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 64);
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
function SaveComponent_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_button_29_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.limpiarCasillero("deposito_entrega"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const usuario_encargado_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", usuario_encargado_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", usuario_encargado_r31.nick, " ");
  }
}
function SaveComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r32.limpiarCasillero("usuario_entrega"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_mat_form_field_46_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const venta_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", venta_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", venta_r37.cliente, " ~ ", venta_r37.fecha, " ");
  }
}
function SaveComponent_mat_form_field_46_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_mat_form_field_46_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r38.limpiarCasillero("venta"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return {
    cliente: "",
    fecha: "",
    idventa: null
  };
};
function SaveComponent_mat_form_field_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 22)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-autocomplete", 17, 67)(6, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SaveComponent_mat_form_field_46_mat_option_8_Template, 2, 3, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SaveComponent_mat_form_field_46_button_10_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx_r8.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 5, ctx_r8.filteredVentas));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.form.get("venta").value);
  }
}
function SaveComponent_mat_form_field_47_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const complejo_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", complejo_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", complejo_r43.descripcion_complejo, " ");
  }
}
function SaveComponent_mat_form_field_47_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_mat_form_field_47_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r44.limpiarCasillero("complejo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    idcomplejo: null,
    descripcion_complejo: "Sin complejo asociado"
  };
};
function SaveComponent_mat_form_field_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 22)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Complejos");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SaveComponent_mat_form_field_47_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r46.seleccionItem($event, "complejo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-autocomplete", 17, 69)(6, "mat-option", 64)(7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Sin complejo asociado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SaveComponent_mat_form_field_47_mat_option_9_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SaveComponent_mat_form_field_47_button_11_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx_r9.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](10, 5, ctx_r9.filteredComplejos));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.form.get("complejo").value);
  }
}
function SaveComponent_mat_form_field_48_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const uf_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", uf_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", uf_r51.descripcion_complejo_uf, " ");
  }
}
function SaveComponent_mat_form_field_48_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_mat_form_field_48_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r52.limpiarCasillero("unidad_funcional"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_mat_form_field_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 22)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Unidades Funcionales");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-autocomplete", 17, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, SaveComponent_mat_form_field_48_mat_option_6_Template, 2, 2, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SaveComponent_mat_form_field_48_button_8_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](5);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx_r10.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 4, ctx_r10.filteredUnidadesFuncionales));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.form.get("unidad_funcional").value);
  }
}
function SaveComponent_mat_option_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", articulo_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", articulo_r54.codigo_interno, " - ", articulo_r54.descripcion, " ");
  }
}
function SaveComponent_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_button_64_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.limpiarCasillero("articulo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function SaveComponent_mat_option_73_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("(x", um_r57.factor_um, " ", um_r57.um_base, ")");
  }
}
function SaveComponent_mat_option_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SaveComponent_mat_option_73_i_2_Template, 2, 2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", um_r57.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", um_r57.descripcion_um, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", um_r57.factor_um != 1);
  }
}
function SaveComponent_th_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Codigo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r15.color_primario ? "" : ctx_r15.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r15.color_primario || "");
  }
}
function SaveComponent_td_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r60.codigo_interno, " ");
  }
}
function SaveComponent_th_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r17.color_primario ? "" : ctx_r17.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r17.color_primario || "");
  }
}
function SaveComponent_td_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r61.descripcion_articulo, " ");
  }
}
function SaveComponent_th_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Unidad de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r19.color_primario ? "" : ctx_r19.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r19.color_primario || "");
  }
}
function SaveComponent_td_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r62.descripcion_um, " ");
  }
}
function SaveComponent_th_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r21.color_primario ? "" : ctx_r21.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r21.color_primario || "");
  }
}
function SaveComponent_td_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const movimiento_articulo_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", movimiento_articulo_r63.cantidad, " ");
  }
}
function SaveComponent_th_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "th", 78);
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r23.color_primario ? "" : ctx_r23.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx_r23.color_primario || "");
  }
}
function SaveComponent_td_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 77)(1, "button", 3, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_td_103_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r67);
      const movimiento_r64 = restoredCtx.$implicit;
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r66.deleteMovimiento(movimiento_r64));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
}
function SaveComponent_tr_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 81);
  }
}
function SaveComponent_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "tr", 82);
  }
}
function SaveComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 83)(1, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
const _c2 = function (a0) {
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
    this.columns = ['codigointerno', 'articulo', 'unidadmedida', 'cantidad', 'acciones'];
    this.articulos = [];
    this.articulos_list = [];
    this.unidades_de_medida = [];
    this.usuarios = [];
    this.depositos = [];
    this.mov_art_list = [];
    this.ventas = [];
    this.unidades_funcionales = [];
    this.complejos = [];
    this.maxPalabras = 50;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource();
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.deposito_default = 0;
    this.asignacion_entrega = null;
    this.entrega = this.data ? this.data : null;
    this.esEdicion = this.entrega ? true : false;
    this.title = this.entrega?.identrega ? `Editar Entrega ${this.entrega.fecha_precarga} - ${this.entrega.hora_precarga}` : `Nueva Entrega`;
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
      this.asignacion_entrega = empresa.asignacion_entrega;
    });
  }
  ngOnInit() {
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  newForm() {
    const [dia, mes, anio] = this.entrega ? this.entrega.fecha_precarga.split('/') : ''; //Se hace esto para poder manejar el formato que se cambio en el render del componente de tabla dinamica.
    if (this.entrega) {
      Promise.all([/* this.getVentas(),  */this.getItems(this.entrega.identrega)]).then(([/* ventas,  */items]) => {
        // this.ventas = ventas;
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
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.mov_art_list);
        if (this.mov_art_list.length != 0) {
          this.form.get('deposito_entrega').disable();
        } else {
          this.form.get('deposito_entrega').enable();
        }
      });
    }
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.entrega?.fecha_precarga ? this.datePipe.transform(new Date(`${mes}/${dia}/${anio}`), 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
      hora: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.entrega?.hora_precarga ? this.entrega.hora_precarga : this.datePipe.transform(new Date(), 'HH:mm:ss'), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      usuario_entrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.entrega?.usuario_entrega ? {
        codigo: this.entrega.usuario_entrega,
        nick: this.entrega.nick_usuario_entrega
      } : ''),
      deposito_entrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.entrega ? {
        descripcion: this.entrega.descripcion_deposito,
        iddeposito: this.entrega.iddeposito
      } : '', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.entrega ? this.entrega.observaciones : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(this.maxPalabras)])
    });
    this.form_carga_articulos = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required),
      stock_existente: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('')
    });
    this.updateFormValidators();
  }
  /**
  * Si existe un stockinicial le mando 'true' a fondos y nada a TM para que me traiga todos los fondos y TMs al editar.
  * Caso contrario, si se va a crear un stockinicial, llamo a los fondos sin enviarle un parametro asi me trae solo los activos y
  * le envio un paramtro a los tipos de stockinicials para que me traiga los activos.
  */
  exist() {
    if (this.entrega?.idusuario) {
      this.getUsuarios(true);
    } else if (this.entrega?.identrega) {
      this.getDepositos(true);
    } else {
      this.getUsuarios();
      this.getDepositos();
    }
    if (this.asignacion_entrega === 0) {
      this.form.addControl('venta', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.entrega?.idventagenerica ? {
        idventagenerica: this.entrega.idventagenerica,
        cliente: this.entrega.cliente_venta,
        fecha: this.entrega.fecha_venta
      } : '', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required));
      this.getVentas();
    } else if (this.asignacion_entrega === 1) {
      this.form.addControl('unidad_funcional', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.entrega?.idunidadfuncional ? {
        idunidadfuncional: this.entrega.idunidadfuncional,
        descripcion_complejo_uf: this.entrega.descripcion_unidad_funcional,
        idcomplejo: this.entrega.idcomplejo,
        descripcion_complejo: this.entrega.descripcion_complejo
      } : ''));
      this.form.addControl('complejo', new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(this.entrega?.idcomplejo ? {
        idcomplejo: this.entrega.idcomplejo,
        descripcion_complejo: this.entrega.descripcion_complejo
      } : ''));
      this.getComplejos();
      this.getUnidadesFuncionales();
    }
  }
  // ################# Carga De Movimientos #################
  /**
   * Esta funcion añade un nuevo item a la grilla dentro del saveComponent.
   * @var art_descripcion busca en el arreglo correspondiente un elemento con el mismo id para imprimir su descripcion.
   * @var um_descripcion busca en el arreglo correspondiente un elemento con el mismo id para imprimir su descripcion.
   * @var art_stk_ini Encapsula un objeto con los datos que deseamos mostrar en la tabla.
   */
  addMovimiento(movimiento) {
    if (this.form.get('deposito_entrega').value != '') {
      let deposito_entrega_value = this.form.get('deposito_entrega').value.iddeposito;
      if (typeof this.form.get('deposito_entrega').value == 'string') {
        //En caso de edicion...
        let d = this.depositos.find(d => d.descripcion === this.form.get('deposito_entrega').value);
        deposito_entrega_value = d.iddeposito;
      }
      if (movimiento) {
        let movimiento_articulo = {
          idarticulo: movimiento.articulo.idarticulo,
          cantidad: movimiento.cantidad,
          idunidadmedida: movimiento.unidad_medida,
          descripcion_articulo: movimiento.articulo.descripcion,
          descripcion_um: movimiento.unidadmedida_descripcion,
          codigo_interno: movimiento.articulo.codigo_interno,
          stock: movimiento.stock //Stock restante de ese articulo con esa um...
        };

        this.mov_art_list = [movimiento_articulo, ...this.mov_art_list]; // Se agrega el nuevo articulo al comienzo de la lista para que siempre aparezca primero en la grilla
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.mov_art_list); //Actualizo la tabla
        // Deshabilito el control Deposito
        if (this.mov_art_list.length != 0) {
          this.form.get('deposito_entrega').disable();
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
    // Habilito el control Deposito si la lista de movimientos está vacía
    if (this.mov_art_list.length === 0) {
      this.form.get('deposito_entrega').enable();
    }
    // Actualizar validaciones según el estado de la grilla
    this.updateFormValidators();
    this.alert.success("Artículo eliminado con éxito");
  }
  /**
  * Esta funcion maneja las cambios de seleccion que puedan tener los combos.
  * @param $event
  */
  seleccionItem($event, info) {
    if ($event.idcomplejo) {
      this.getUnidadesFuncionales($event.idcomplejo); //...Buscamos las UF que posee ese complejo.
    } else if ($event.idcomplejo === null) {
      this.getUnidadesFuncionales($event.idcomplejo); //...Buscamos las UF que posee ese complejo.
    } else if ($event === 'complejo' && info === 'reset') {
      this.getUnidadesFuncionales(); //...Buscamos las UF que posee ese complejo.
    }
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
        //Sí existe minimo un movimiento y es una crecion...
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
    if (input === 'complejo' && this.form.get('unidad_funcional').value) {
      this.form.get('unidad_funcional').setValue('');
    }
    if (input === 'articulo') {
      this.form_carga_articulos.get('unidadmedida').disable();
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('stock_existente').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
    }
    if (input === 'deposito_entrega') {
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
    }
  }
  onCargar($event) {
    if ($event?.key === 'Enter') {
      $event.preventDefault();
    }
    if (!this.form_carga_articulos.valid) {
      return this.alert.error('Debe seleccionar un artículo');
    } else {
      this.articulos.forEach(articulo => {
        if (articulo.idarticulo === this.form_carga_articulos.get('articulo').value.idarticulo && articulo.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value) {
          if (this.form_carga_articulos.get('cantidad').value > articulo.stock) {
            this.form_carga_articulos.get('cantidad').setValue('');
            return this.alert.warning('No hay stock suficiente!');
          }
          let existeMovimiento = this.mov_art_list.find(movimiento => movimiento.idarticulo === this.form_carga_articulos.get('articulo').value.idarticulo && movimiento.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value /*  && movimiento.idventa === this.form_carga_articulos.get('venta').value.idventa */);
          if (existeMovimiento) {
            this.form_carga_articulos.get('unidadmedida').setValue('');
            this.form_carga_articulos.get('stock_existente').setValue('');
            return this.alert.warning('Ya existe un movimiento de ese articulo con esa unidad de medida asociado a esa Orden de Servicio.');
          }
          if (this.form_carga_articulos.get('cantidad').value <= articulo.stock && this.form_carga_articulos.get('cantidad').value > 0) {
            let unidadmedida = this.unidades_de_medida.find(um => um.idunidadmedida === this.form_carga_articulos.get('unidadmedida').value); //Traigo una UM que coincida con mi seleccion para poder utilizar su descripcion.
            let movimiento_articulo = {
              articulo: this.form_carga_articulos.get('articulo').value,
              unidad_medida: this.form_carga_articulos.get('unidadmedida').value,
              unidadmedida_descripcion: unidadmedida.descripcion_um,
              stock: `${Number(articulo.stock) - this.form_carga_articulos.get('cantidad').value}`,
              cantidad: this.form_carga_articulos.get('cantidad').value
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
      if (this.asignacion_entrega === 1) {
        const existe_complejo_uf = this.form.get('unidad_funcional').value && this.form.get('complejo').value;
        if (existe_complejo_uf) {
          const la_uf_no_pertenece_al_complejo = this.form.get('unidad_funcional').value?.idcomplejo != this.form.get('complejo').value?.idcomplejo;
          if (la_uf_no_pertenece_al_complejo) {
            this.form.get('complejo').setValue('');
            return this.alert.error('La unidad Funcional no pertenece a ese complejo');
          }
        } else if (!this.form.get('unidad_funcional').value && !this.form.get('complejo').value) {
          return this.alert.error('Debe elegir una Unidad Funcional y/o Complejo');
        }
      }
      let movimientos = this.mov_art_list.map(objeto => ({
        idarticulo: objeto.idarticulo,
        cantidad: objeto.cantidad,
        idunidadmedida: objeto.idunidadmedida
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
          usuario_entrega: this.form.get('usuario_entrega').value?.codigo ? this.form.get('usuario_entrega').value.codigo : null,
          observaciones: this.form.get('observaciones').value,
          idventagenerica: this.form.get('venta')?.value?.idventagenerica ? this.form.get('venta').value.idventagenerica : null,
          idcomplejo: this.form.get('complejo')?.value?.idcomplejo ? this.form.get('complejo').value.idcomplejo : null,
          idunidadfuncional: this.form.get('unidad_funcional')?.value?.idunidadfuncional ? this.form.get('unidad_funcional').value.idunidadfuncional : null
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
  // ################# Metodos de escaner QR #################
  /**
  * Se escanea el QR de la Credencial de Usuario y se toma el idusuario.
  */
  credencialUsuario() {
    this.dialogo.open(_shared_components_lector_qr_lector_qr_component__WEBPACK_IMPORTED_MODULE_2__.LectorQrComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.sendObject.subscribe(code => {
      if (!code || code.length === 0) {
        return this.alert.error('Código QR vacío o inválido');
      }
      let decodedText = JSON.parse(code); // Convierto el string en un json
      const idusuario = parseInt(decodedText['idusuario'], 10);
      this._entregasService.getUsuarioQR(idusuario).subscribe(response => {
        if (response?.result?.length > 0) {
          const usuario = response.result[0];
          this.form.get('usuario_entrega').setValue(usuario);
        } else {
          return this.alert.error('Usuario no encontrado');
        }
      }, error => {
        console.error('Error al obtener usuario:', error);
      });
    });
  }
  /**
  * Se escanea el QR de la Etiqueta de articulo y se toma el idarticulo.
  */
  etiquetaArticulo() {
    let deposito = this.form.get('deposito_entrega').value;
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
      this._entregasService.getArticulosDepositos(deposito['iddeposito'], idarticulo).subscribe(response => {
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
  /**
  * Se escanea el QR de Orden de Servicio y se toma la idordenservicio.
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
        return this.alert.error('Código QR vacío o inválido');
      }
      let decodedText = JSON.parse(code); // Convierto el string en json
      // Encapsulo los datos que voy a utilizar
      for (const clave in decodedText) {
        clave_os = clave;
        idordenservicio = decodedText[clave];
      }
      // Defino el endpoint segun cada asignacion
      if (this.asignacion_entrega === 0 && clave_os === 'idventagenerica') {
        endpoint = `${environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ventas.view_venta_genericas}`;
      } else if (this.asignacion_entrega === 1 && clave_os === 'idcomplejo') {
        endpoint = `${environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.inmuebles.complejos.view_inm_complejos}`;
      } else if (this.asignacion_entrega === 1 && clave_os === 'idunidadfuncional') {
        endpoint = `${environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.inmuebles.unidad_funcional.view_inm_unidad_funcional}`;
      } else {
        return this.alert.error('Orden de Servicio no encontrada');
      }
      queryParams = `?filter[${clave_os}]=`;
      this._entregasService.getOrdenServicioGenerico(idordenservicio, endpoint, queryParams).subscribe(response => {
        if (response?.result?.length > 0) {
          const result = response.result[0];
          if (this.asignacion_entrega === 0) {
            this.orden_servicio = result.idventagenerica;
            this.form.get('venta').setValue(result);
          } else if (this.asignacion_entrega === 1 && clave_os === 'idcomplejo') {
            this.form.get('complejo').setValue(result);
            this.orden_servicio = result.idcomplejo;
          } else if (this.asignacion_entrega === 1 && clave_os === 'idunidadfuncional') {
            this.form.get('unidad_funcional').setValue(result);
            this.orden_servicio = result.idunidadfuncional;
          }
        } else {
          return this.alert.error('No hay items asociados a esa OS');
        }
      }, error => {
        console.error('Error al obtener venta:', error);
      });
    });
  }
  // ################# Metodos de comunicacion con el service #################
  getUsuarios(option) {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Usuarios = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this._entregasService.getUsuarios(option));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.usuarios = Usuarios.list;
          _this.filteredUsuarios = _this.form.get('usuario_entrega').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this._filterUsuarios(value)));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getDepositos(option) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Depositos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this2._entregasService.getDepositos(option));
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.depositos = Depositos.list;
          // Filtrar y autoasignar el depósito por defecto
          const depositoPorDefecto = _this2.depositos.find(deposito => deposito.iddeposito === _this2.deposito_default);
          if (depositoPorDefecto && !_this2.entrega) {
            _this2.form.get('deposito_entrega').setValue(depositoPorDefecto);
          }
          _this2.filteredDepositos = _this2.form.get('deposito_entrega').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this2._filterTextGenerico(value, _this2.depositos, 'descripcion')));
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  /**
  * Funcion que lista los complejos.
  */
  getComplejos() {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const complejos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this3._entregasService.getComplejos());
      _this3.complejos = complejos.list;
      _this3.filteredComplejos = _this3.form.get('complejo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this3._filterTextGenerico(value, _this3.complejos, 'descripcion_complejo')));
    })();
  }
  /**
  * Funcion que lista las unidades funcionales.
  */
  getUnidadesFuncionales(idcomplejo) {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_funcionales = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this4._entregasService.getUnidadesFuncionales(idcomplejo));
      _this4.unidades_funcionales = idcomplejo === null ? unidades_funcionales.list.filter(uf => uf.idcomplejo === null) : unidades_funcionales.list;
      _this4.filteredUnidadesFuncionales = _this4.form.get('unidad_funcional').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this4._filterTextGenerico(value, _this4.unidades_funcionales, 'descripcion_complejo_uf')));
    })();
  }
  /**
  * Funcion que lista las ventas.
  */
  getVentas() {
    var _this5 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ventas = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this5._entregasService.getVentas());
      _this5.ventas = ventas.list;
      _this5.filteredVentas = _this5.form.get('venta').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this5._filterVentas(value)));
    })();
  }
  /**
   * Listamos los movimientos asociados a este registro
   * @param identrega
   * @returns
   */
  getItems(identrega) {
    var _this6 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          const items = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this6._entregasService.getItems(identrega));
          _this6.mov_art_list = items.list;
          resolve(_this6.mov_art_list);
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  /**
  * Esta funcion solicita las unidades de medida que posee un articulo.
  * @param idarticulo
  */
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this7 = this;
    new Promise( /*#__PURE__*/function () {
      var _ref4 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
        let um_base; // Asigno una variable global para que cada UM sepa cual es la um base (factor = '1.00')
        _this7.unidades_de_medida = _this7.articulos.filter(a => a.idarticulo === idarticulo && a.factor_um != null).sort((a, b) => a.factor_um - b.factor_um).map(a => {
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
        if (_this7.unidades_de_medida.length > 0) {
          _this7.form_carga_articulos.get('unidadmedida').setValue(_this7.unidades_de_medida[0].idunidadmedida);
          _this7.seleccionItem({
            um: _this7.unidades_de_medida[0].idunidadmedida
          });
        }
        resolve(true);
      });
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  /**
  * Funcion que lista los articulos que posee un déposito.
  */
  getArticulosDepositos(iddeposito) {
    var _this8 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos_um_deposito = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.firstValueFrom)(_this8._entregasService.getArticulosDepositos(iddeposito)); //solicitamos los aticulos que esten en un deposito
      new Promise( /*#__PURE__*/function () {
        var _ref5 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this8.articulos = articulos_um_deposito.list;
          _this8.filteredArticulos = _this8.form_carga_articulos.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.map)(value => _this8._filterArticulos(value)));
          resolve(true);
        });
        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
      //Esta funcion la realizamos para listar los articulos sin que se repitan.
      articulos_um_deposito.list.forEach(item => {
        const existeArticulo = _this8.articulos_list.find(articulo => articulo.idarticulo === item.idarticulo);
        if (!existeArticulo) {
          let articulo = {
            idarticulo: item.idarticulo,
            codigo_interno: item.codigo_interno,
            descripcion: item.descripcion
          };
          _this8.articulos_list.push(articulo);
        }
        ;
      });
    })();
  }
  // ################# Metodo de filtrado para inputs autocomplete #################
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
  _filterUsuarios(usuario) {
    const filterValue = usuario.toString().toLowerCase();
    return this.usuarios.filter(usuario => usuario.nick.toLowerCase().includes(filterValue) && usuario.codigo !== this.user.id);
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
  /**
   * Esta funcion obtiene el texto del input que lo utilice en [displayWith]="getTextGenerico"
   * @param option Type: Unidad Funcional
   * @param option Type: Complejo
   * @param option Type: Usuario
   * @param option Type: Venta
   * @returns
   */
  getTextGenerico(option) {
    if (option.nick) {
      return option.nick;
    }
    if (option.usuario) {
      return option.usuario;
    }
    if (option.idunidadfuncional) {
      return option.descripcion_complejo_uf;
    }
    if (option.idcomplejo) {
      return option.descripcion_complejo;
    }
    if (option.idventagenerica) {
      return `${option.cliente} ~ ${option.fecha}`;
    }
    return option;
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
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_entregas_service__WEBPACK_IMPORTED_MODULE_4__.EntregasService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_21__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialog));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-entregas"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 117,
  vars: 72,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-140", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "form-menu", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-2", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-2/4"], ["matInput", "", "placeholder", "Fecha", "formControlName", "fecha", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "outline", 1, "w-full", "sm:w-1/4"], ["matInput", "", "formControlName", "hora", "type", "time"], ["appearance", "outline", 1, "w-full", "sm:w-1/2"], ["type", "text", "matInput", "", "formControlName", "deposito_entrega", 3, "matAutocomplete", "ngModelChange"], ["autoActiveFirstOption", "", 3, "displayWith"], ["dep", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], [1, "flex", "w-full", "gap-1"], ["appearance", "outline", 1, "w-full", "sm:w-full"], ["type", "text", "matInput", "", "formControlName", "usuario_entrega", 3, "matAutocomplete"], ["ue", "matAutocomplete"], [1, "flex"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "rounded-full", "ml-1", "mt-1", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.66667 2.66667H6.66667V6.66667H2.66667V2.66667ZM13.3333 2.66667V6.66667H9.33333V2.66667H13.3333ZM9.33333 10H10.6667V8.66667H9.33333V7.33333H10.6667V8.66667H12V7.33333H13.3333V8.66667H12V10H13.3333V12H12V13.3333H10.6667V12H8.66667V13.3333H7.33333V10.6667H9.33333V10ZM10.6667 10V12H12V10H10.6667ZM2.66667 13.3333V9.33333H6.66667V13.3333H2.66667ZM4 4V5.33333H5.33333V4H4ZM10.6667 4V5.33333H12V4H10.6667ZM4 10.6667V12H5.33333V10.6667H4ZM2.66667 7.33333H4V8.66667H2.66667V7.33333ZM6 7.33333H8.66667V10H7.33333V8.66667H6V7.33333ZM7.33333 4H8.66667V6.66667H7.33333V4ZM1.33333 1.33333V4H0V1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0L4 0V1.33333H1.33333ZM14.6667 0C15.0203 0 15.3594 0.140476 15.6095 0.390524C15.8595 0.640573 16 0.979711 16 1.33333V4H14.6667V1.33333H12V0H14.6667ZM1.33333 12V14.6667H4V16H1.33333C0.979711 16 0.640573 15.8595 0.390524 15.6095C0.140476 15.3594 0 15.0203 0 14.6667V12H1.33333ZM14.6667 14.6667V12H16V14.6667C16 15.0203 15.8595 15.3594 15.6095 15.6095C15.3594 15.8595 15.0203 16 14.6667 16H12V14.6667H14.6667Z", "fill", "currentColor"], ["appearance", "outline", "class", "w-full sm:w-full", 4, "ngIf"], [3, "formGroup"], ["type", "text", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete", "ngModelChange"], ["art_carga", "matAutocomplete"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "rounded-full", "ml-1", "mt-1", 3, "disabled", "click"], ["formControlName", "unidadmedida", 3, "ngModelChange"], ["matInput", "", "type", "number", "formControlName", "stock_existente", "readonly", "true"], [1, "flex", "w-full", "sm:w-1/2"], ["appearance", "outline", 1, "w-full", "sm:w-full", 3, "keydown.enter"], ["matInput", "", "type", "number", "formControlName", "cantidad"], ["matTooltip", "A\u00F1adir UM", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "mt-2", "ml-2", "sm:ml-4", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 10H10V16H6V10H0V6H6V0H10V6H16V10Z", "fill", "white"], [1, "overflow-y-auto", "max-h-[200px]", "h-[200px]", "shadow-md", "rounded-lg"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "codigointerno"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "unidadmedida"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "rounded-tr-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "flex justify-center items-center h-20", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "mt-4"], ["matInput", "", "formControlName", "observaciones", 1, "resize-none"], [1, "counter", 3, "ngClass"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [3, "value"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["type", "text", "matInput", "", "formControlName", "venta", 3, "matAutocomplete"], ["vn", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "complejo", 3, "matAutocomplete", "ngModelChange"], ["cj", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "unidad_funcional", 3, "matAutocomplete"], ["uf", "matAutocomplete"], ["class", "font-light", 4, "ngIf"], [1, "font-light"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-cell", ""], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white", "w-auto"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "justify-center", "items-center", "h-20"], [1, "text-gray-600", "text-lg"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, SaveComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "div", 8)(12, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 10)(14, "mat-datepicker-toggle", 11)(15, "mat-datepicker", null, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 13)(18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Hora");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-form-field", 15)(22, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Dep\u00F3sito");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.seleccionItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-autocomplete", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, SaveComponent_mat_option_27_Template, 2, 2, "mat-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, SaveComponent_button_29_Template, 3, 0, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 21)(31, "mat-form-field", 22)(32, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Usuario Entrega");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-autocomplete", 17, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, SaveComponent_mat_option_37_Template, 2, 2, "mat-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, SaveComponent_button_39_Template, 3, 0, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 25)(41, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_41_listener() {
        return ctx.credencialUsuario();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "svg", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 8)(45, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, SaveComponent_mat_form_field_46_Template, 11, 8, "mat-form-field", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, SaveComponent_mat_form_field_47_Template, 12, 8, "mat-form-field", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, SaveComponent_mat_form_field_48_Template, 9, 6, "mat-form-field", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 25)(50, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_50_listener() {
        return ctx.ordenServicio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "svg", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "form", 30)(54, "div", 8)(55, "div", 21)(56, "mat-form-field", 22)(57, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58, "Art\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_input_ngModelChange_59_listener($event) {
        return ctx.seleccionItem($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-autocomplete", 17, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](62, SaveComponent_mat_option_62_Template, 2, 3, "mat-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](63, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](64, SaveComponent_button_64_Template, 3, 0, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 25)(66, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_66_listener() {
        return ctx.etiquetaArticulo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "svg", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](68, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "mat-form-field", 15)(70, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "UM");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "mat-select", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function SaveComponent_Template_mat_select_ngModelChange_72_listener($event) {
        return ctx.seleccionItem({
          um: $event
        });
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, SaveComponent_mat_option_73_Template, 3, 3, "mat-option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "mat-form-field", 15)(75, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "En stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](77, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 36)(79, "mat-form-field", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown.enter", function SaveComponent_Template_mat_form_field_keydown_enter_79_listener($event) {
        return ctx.onCargar($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "Cantidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div", 25)(84, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_84_listener() {
        return ctx.onCargar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "svg", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](86, "path", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div", 42)(88, "table", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](89, 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](90, SaveComponent_th_90_Template, 2, 4, "th", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](91, SaveComponent_td_91_Template, 2, 1, "td", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](92, 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](93, SaveComponent_th_93_Template, 2, 4, "th", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, SaveComponent_td_94_Template, 2, 1, "td", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](95, 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](96, SaveComponent_th_96_Template, 2, 4, "th", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](97, SaveComponent_td_97_Template, 2, 1, "td", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](98, 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](99, SaveComponent_th_99_Template, 2, 4, "th", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](100, SaveComponent_td_100_Template, 2, 1, "td", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](101, 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](102, SaveComponent_th_102_Template, 1, 4, "th", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](103, SaveComponent_td_103_Template, 5, 0, "td", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](104, SaveComponent_tr_104_Template, 1, 0, "tr", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](105, SaveComponent_tr_105_Template, 1, 0, "tr", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](106, SaveComponent_div_106_Template, 3, 0, "div", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "mat-form-field", 57)(108, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109, "Observaciones");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](110, "textarea", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "div", 60)(114, "button", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_114_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](26);
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](36);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](61);
      let tmp_34_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r1)("min", ctx.minDate)("max", ctx.maxDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx.getTextDeposito);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 64, ctx.filteredDepositos));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.get("deposito_entrega").value && ctx.mov_art_list.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx.getTextGenerico);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](38, 66, ctx.filteredUsuarios));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.get("usuario_entrega").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx.color_primario)("color", ctx.color_secundario);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.get("venta"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.get("complejo"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form.get("unidad_funcional"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx.color_primario)("color", ctx.color_secundario);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.form_carga_articulos);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matAutocomplete", _r11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("displayWith", ctx.getTextArticulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](63, 68, ctx.filteredArticulos));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.form_carga_articulos.get("articulo").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx.color_primario)("color", ctx.color_secundario);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", !((tmp_34_0 = ctx.form.get("deposito_entrega")) == null ? null : tmp_34_0.value));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.unidades_de_medida);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background", ctx.color_primario);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](70, _c2, !ctx.isPalabraMaxLengthReached()));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx.getPalabrasLength(), "/", ctx.maxPalabras, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.form.get("usuario_entrega").value ? "Entregar" : "Precargar", " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__.MatTooltip, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__.MatDatepickerToggle, _angular_common__WEBPACK_IMPORTED_MODULE_21__.AsyncPipe],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _components_entregas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/entregas.component */ 20281);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 20113);
/* harmony import */ var _service_entregas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/entregas.service */ 78165);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 48097);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);


























const routes = [{
  path: '',
  component: _components_entregas_component__WEBPACK_IMPORTED_MODULE_3__.EntregasComponent
}];
class EntregasModule {}
EntregasModule.ɵfac = function EntregasModule_Factory(t) {
  return new (t || EntregasModule)();
};
EntregasModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: EntregasModule
});
EntregasModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_service_entregas_service__WEBPACK_IMPORTED_MODULE_5__.EntregasService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](EntregasModule, {
    declarations: [_components_entregas_component__WEBPACK_IMPORTED_MODULE_3__.EntregasComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
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
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_venta_genericas}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getUnidadesFuncionales(idcomplejo) {
    let f = idcomplejo ? `?filter[idcomplejo]=${idcomplejo}` : '';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.inmuebles.unidad_funcional.view_inm_unidad_funcional}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getComplejos() {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.inmuebles.complejos.view_inm_complejos}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
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
  /**
  *
  * @param idordenservicio
  * @param queryParams
  * @returns Verifica si el QR escaneado de la Orden de Servicio es valido.
  */
  getOrdenServicioEntregas(idordenservicio, queryParams) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_entregas}${queryParams}` + idordenservicio);
  }
  /**
  *
  * @param idordenservicio
  * @param queryParams
  * @returns Verifica si el QR escaneado de la Orden de Servicio es valido.
  */
  getOrdenServicioGenerico(idordenservicio, endpoint, queryParams) {
    return this.http.get(`${endpoint}${queryParams}` + idordenservicio);
  }
  getUsuarioQR(codigo) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.login.view_usuarios}?filter[codigo]=` + codigo);
  }
  entregarEntrega(idempresa, payload) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.entregar}` + idempresa, payload);
  }
  puedeCrearEntrega() {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.stk_entrega_puede_crear}`, '');
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