"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_inmuebles_unidades-funcionales_unidades-funcionales_module_ts"],{

/***/ 61513:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/inmuebles/unidades-funcionales/components/unidades-funcionales.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnidadesFuncionalesComponent": () => (/* binding */ UnidadesFuncionalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _service_unidaes_funcionales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/unidaes-funcionales.service */ 47730);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/app/pwa.service */ 16173);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 83677);



















class UnidadesFuncionalesComponent {
  constructor(_UnidadesFuncionalesService, _empresaService, confirm, alert, dialogo, _searchService, _menuService, router, _headerTextService, pwaService) {
    this._UnidadesFuncionalesService = _UnidadesFuncionalesService;
    this._empresaService = _empresaService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.pwaService = pwaService;
    this.selectedItems = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableDataSource();
    this.headers = ['', 'ID', 'Descripción', 'Complejo', 'Activo', 'Acciones'];
    this.column_params = ['seleccion', 'idunidadfuncional', 'descripcion_unidad_funcional', 'descripcion_complejo', 'activo', 'acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['descripcion_unidad_funcional', 'descripcion_complejo'];
    this.filter = {
      deposito: -1,
      filtroFechaInicio: '',
      filtroFechaFin: ''
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.inmuebles.unidad_funcional.view_inm_unidad_funcional + '?';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('');
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this._headerTextService.setTitulo(this.router);
    /**
     * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
     */
    this.funcionesObjeto = [{
      nombre_boton: "Reporte",
      functionName: 'orden_servicio',
      iconoAccion: unidad_funcional => 'jedstion:imprimir',
      iconoAccionado: unidad_funcional => '',
      iconoDeshabilitado: unidad_funcional => ''
    }];
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.debounceTime)(750), (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.distinctUntilChanged)()).subscribe(value => {
      this.filtroBusqueda = value;
      this.tabla.filters(this.filtroBusqueda);
    });
    this.FilterEventSub$ = this._searchService.getFilterEvent().subscribe(event => {
      this.onFilterMenu(this._searchService.getFilterOrigin());
    });
  }
  onFilterMenu(origin) {
    // this._menuService
    //     .open(FilterMenuComponent, origin._elementRef, {
    //         filter: this.filter,
    //         data: this.tabla.getElementosExistentes()
    //     })
    //     .afterClosed()
    //     .subscribe({
    //         next: filter => {
    //             if (filter) {
    //                 this.filter = filter;
    //                 this.extraParams = this.filter.deposito != -1 ? "filter[iddeposito]=" + this.filter.deposito + '&' : '';
    //                 this.extraParams += this.filter.usuario_responsable != -1 ? "filter[idusuario]=" + this.filter.usuario_responsable + '&' : '';
    //                 this.extraParams += this.filter.usuario_encargado != -1 ? "filter[usuario_entrega]=" + this.filter.usuario_encargado + '&' : '';
    //                 this.extraParams += this.filter.filtroFechaInicio != null ? "filter[fecha][gte]=" + this.filter.filtroFechaInicio + '&' : '';
    //                 this.extraParams += this.filter.filtroFechaFin != null ? "filter[fecha][lte]=" + this.filter.filtroFechaFin + '&' : '';
    //                 this.tabla.filters(this.filtroBusqueda);
    //                 // this._searchService.getSearchInput().setValue(this._tabsServices.getFiltroBuscadorPedido());
    //             }
    //         },
    //     });
  }
  /**
  * Esta es la funcion que se encarga de la columna acciones dentro de la grilla dinamica
  * @param event
  */
  generarAcciones(event) {
    switch (event.name) {
      case 'orden_servicio':
        this.reporteOrdenServicio(event);
        break;
    }
  }
  /**
  * Esta función es la que se encarga de la seleccion de check box de Ventas seleccionados
  * @param selectedElements - La lista de Ordenes de servicio seleccionados.
  */
  onSelectionChange(selectedElements) {
    this.selectedItems = selectedElements;
  }
  /**
   * Esta funcion Genera un Reporte y lo muestra en una nueva pestaña
   */
  reporteOrdenServicio(event) {
    let idordenservicio = '';
    let payload = null;
    // Si es atraves de presionar el boton de un item
    if (event) {
      // Encapsulamos el nombre de la clave del objeto
      idordenservicio = Object.keys(event.params.data)[0];
      // Selecciono el item
      this.selectedItems.push(event.params.data);
    }
    // Si no es atraves de presionar el boton del item Y no hay elementos en el array o la longitud del array es igual a cero
    if (!event && (!this.selectedItems || this.selectedItems.length === 0)) {
      return this.alert.error('Debe seleccionar al menos un Item.');
    } else {
      // Encapsulamos el nombre de la clave del objeto
      idordenservicio = Object.keys(this.selectedItems[0])[0];
      // Armo el payload para llamar al servicio
      payload = {
        // Creo un objeto con el valor del nombre de la clave y con el valor item con esa clave
        ordenes_de_servicio: this.selectedItems.map(element => ({
          [idordenservicio]: element[`${idordenservicio}`]
        }))
      };
      this._UnidadesFuncionalesService.reporteOrdenServicio(payload).subscribe({
        next: data => {
          if (data.success === true) {
            const reportePath = data.path;
            if (this.pwaService.isPwa()) {
              this.router.navigate(['/reporte', reportePath]);
            } else {
              const reporteUrl = `${environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseRest}/${reportePath}`;
              // Abre la pestaña aquí antes de la promesa
              const newWindow = window.open('', '_blank');
              if (newWindow) {
                newWindow.location.href = reporteUrl; // Redirige la URL cuando tengas el reporte
              } else {
                console.error('No se pudo abrir la nueva pestaña.');
              }
            }
            // Limpio la seleccion para que no se acumulen...
            this.selectedItems = [];
          } else {
            console.error('Error al generar el reporte');
          }
        },
        error: error => {
          console.error('Error en la solicitud del reporte', error);
        }
      });
    }
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
    this.dialogo.closeAll();
  }
}
UnidadesFuncionalesComponent.ɵfac = function UnidadesFuncionalesComponent_Factory(t) {
  return new (t || UnidadesFuncionalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_unidaes_funcionales_service__WEBPACK_IMPORTED_MODULE_2__.UnidadesFuncionalesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_6__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_7__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_8__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_9__.PwaService));
};
UnidadesFuncionalesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: UnidadesFuncionalesComponent,
  selectors: [["app-unidad-funcional"]],
  viewQuery: function UnidadesFuncionalesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__.TablaDinamicaComponent, 5);
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
  decls: 16,
  vars: 15,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "absolute", "right-10"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], [1, "flex", "items-center"], ["width", "22", "height", "22", "viewBox", "0 0 26 26", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_535_423)"], ["d", "M20.5568 8.68182H19.4773V3.28409H6.52274V8.68182H5.4432C3.65115 8.68182 2.20456 10.1284 2.20456 11.9205V18.3977H6.52274V22.7159H19.4773V18.3977H23.7955V11.9205C23.7955 10.1284 22.3489 8.68182 20.5568 8.68182ZM8.68183 5.44318H17.3182V8.68182H8.68183V5.44318ZM17.3182 18.3977V20.5568H8.68183V16.2386H17.3182V18.3977ZM19.4773 16.2386V14.0795H6.52274V16.2386H4.36365V11.9205C4.36365 11.3267 4.84945 10.8409 5.4432 10.8409H20.5568C21.1506 10.8409 21.6364 11.3267 21.6364 11.9205V16.2386H19.4773Z"], ["d", "M19.4773 13.5398C20.0735 13.5398 20.5568 13.0564 20.5568 12.4602C20.5568 11.864 20.0735 11.3807 19.4773 11.3807C18.8811 11.3807 18.3977 11.864 18.3977 12.4602C18.3977 13.0564 18.8811 13.5398 19.4773 13.5398Z"], ["id", "clip0_535_423"], ["width", "25.9091", "height", "25.9091", "fill", "currentColor", "transform", "translate(0.0454712 0.0454559)"], [1, "ml-2", "text-lg", "mt-0.5", "hidden", "md:inline"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "selectionChange", "functionEmitter"]],
  template: function UnidadesFuncionalesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UnidadesFuncionalesComponent_Template_button_click_3_listener() {
        return ctx.reporteOrdenServicio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "svg", 5)(6, "g", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "path", 7)(8, "path", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "defs")(10, "clipPath", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "rect", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "Imprimir Ordenes de Servicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 12)(15, "app-tabla-dinamica", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function UnidadesFuncionalesComponent_Template_app_tabla_dinamica_selectionChange_15_listener($event) {
        return ctx.onSelectionChange($event);
      })("functionEmitter", function UnidadesFuncionalesComponent_Template_app_tabla_dinamica_functionEmitter_15_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "ssp")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bmlkYWRlcy1mdW5jaW9uYWxlcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9pbm11ZWJsZXMvdW5pZGFkZXMtZnVuY2lvbmFsZXMvY29tcG9uZW50cy91bmlkYWRlcy1mdW5jaW9uYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 47730:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/inmuebles/unidades-funcionales/service/unidaes-funcionales.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnidadesFuncionalesService": () => (/* binding */ UnidadesFuncionalesService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);




class UnidadesFuncionalesService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   *
   * @param ordenes_de_servicio
   * @returns
   */
  reporteOrdenServicio(ordenes_de_servicio) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.reporte_orden_servicio}`, ordenes_de_servicio);
  }
}
UnidadesFuncionalesService.ɵfac = function UnidadesFuncionalesService_Factory(t) {
  return new (t || UnidadesFuncionalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
UnidadesFuncionalesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: UnidadesFuncionalesService,
  factory: UnidadesFuncionalesService.ɵfac
});


/***/ }),

/***/ 77907:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/inmuebles/unidades-funcionales/unidades-funcionales.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnidadesFuncionalesModule": () => (/* binding */ UnidadesFuncionalesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _service_unidaes_funcionales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/unidaes-funcionales.service */ 47730);
/* harmony import */ var _components_unidades_funcionales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/unidades-funcionales.component */ 61513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
























const routes = [{
  path: '',
  component: _components_unidades_funcionales_component__WEBPACK_IMPORTED_MODULE_5__.UnidadesFuncionalesComponent
}];
class UnidadesFuncionalesModule {}
UnidadesFuncionalesModule.ɵfac = function UnidadesFuncionalesModule_Factory(t) {
  return new (t || UnidadesFuncionalesModule)();
};
UnidadesFuncionalesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: UnidadesFuncionalesModule
});
UnidadesFuncionalesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_service_unidaes_funcionales_service__WEBPACK_IMPORTED_MODULE_4__.UnidadesFuncionalesService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UnidadesFuncionalesModule, {
    declarations: [_components_unidades_funcionales_component__WEBPACK_IMPORTED_MODULE_5__.UnidadesFuncionalesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

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
//# sourceMappingURL=src_app_modules_inmuebles_unidades-funcionales_unidades-funcionales_module_ts.js.map