"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_administracion_clientes_clientes_module_ts"],{

/***/ 53438:
/*!********************************************************************!*\
  !*** ./src/app/modules/administracion/clientes/clientes.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesModule": () => (/* binding */ ClientesModule)
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
/* harmony import */ var _components_clientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clientes.component */ 92093);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 70184);
/* harmony import */ var _service_clientes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/clientes.service */ 12254);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 80657);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);

























const routes = [{
  path: '',
  component: _components_clientes_component__WEBPACK_IMPORTED_MODULE_3__.ClientesComponent
}];
class ClientesModule {}
ClientesModule.ɵfac = function ClientesModule_Factory(t) {
  return new (t || ClientesModule)();
};
ClientesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: ClientesModule
});
ClientesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_service_clientes_service__WEBPACK_IMPORTED_MODULE_5__.ClientesService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ClientesModule, {
    declarations: [_components_clientes_component__WEBPACK_IMPORTED_MODULE_3__.ClientesComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 92093:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/administracion/clientes/components/clientes.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesComponent": () => (/* binding */ ClientesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 70184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 80657);
/* harmony import */ var _service_clientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/clientes.service */ 12254);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);






















class ClientesComponent {
  constructor(_clientesService, _searchService, _menuService, confirm, alert, dialogo, router, _headerTextService, _empresaService) {
    this._clientesService = _clientesService;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this.router = router;
    this._headerTextService = _headerTextService;
    this._empresaService = _empresaService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource();
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['razonSocial', 'correoElectronico'];
    this.filter = {
      razonSocial: '-1',
      Cuit: '-1',
      localidad_descripcion: '-1'
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.administracion.view_clientes + '?';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('');
    this._headerTextService.setTitulo(this.router);
    /**
     * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
     */
    this.funcionesObjeto = [{
      icono: 'remove_red_eye',
      nombre_boton: "Ver",
      functionName: 'ver'
      //functionParams: 'id' // vacio o parametros, se manda desde el hijo el $event.data.[param]
    }, {
      icono: 'edit',
      nombre_boton: "Editar",
      functionName: 'editar'
    }, {
      icono: 'delete',
      nombre_boton: "Eliminar",
      functionName: 'eliminar'
    }];
    this._empresaService.tieneClientesAsociados().subscribe(ClientesAsociados => {
      this.headers = ['Nombre y Apellido / Razón Social', 'CUIT', 'Condición', 'Teléfono', 'Localidad', 'E-mail', ClientesAsociados ? 'Cliente Asociado' : 'Contacto de Referencia', 'Acciones'];
      this.column_params = ['razonSocial', 'Cuit', 'condicioniva_descripcion', 'telefonoParticular', 'localidad_descripcion', 'correoElectronico', ClientesAsociados ? 'cliente_asociado' : 'contacto_referencia', 'acciones'];
    });
  }
  ngOnInit() {
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.distinctUntilChanged)()).subscribe(value => {
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
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = '';
          if (this.filter?.razonSocial !== '-1') {
            this.extraParams += "filter[razonSocial][like]=" + this.filter.razonSocial + '&';
          }
          if (this.filter?.Cuit !== '-1') {
            this.extraParams += "filter[Cuit][like]=" + this.filter.Cuit + '&';
          }
          if (this.filter?.localidad_descripcion !== '-1') {
            this.extraParams += "filter[localidad_descripcion][like]=" + this.filter.localidad_descripcion + '&';
          }
          if (this.filter?.razonSocial === '-1' && this.filter?.Cuit === '-1' && this.filter?.localidad_descripcion === '-1') {
            this.extraParams = ''; // Si se selecciona 'Todos' en ambos, reinicia todos los filtros
          }

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
      case 'ver':
        this.verCliente(event);
        break;
      case 'editar':
        this.updateCliente(event);
        break;
      case 'eliminar':
        this.deleteCliente(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveCliente() {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
        this.alert.success("Cliente creado con éxito.");
      }
    });
  }
  /**
   * Esta funcion modifica un item
   * @param event
   */
  updateCliente(event) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.editadoExitosamente.subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
        this.alert.success("Cliente editado con éxito.");
      }
    });
  }
  /**
   * Esta funcion es para ver un item
   * @param event
   */
  verCliente(event) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      data: {
        ...event.params.data,
        visualizar: true
      },
      panelClass: 'my-dialog',
      autoFocus: false,
      disableClose: true
    }).afterClosed().subscribe({
      next: () => {
        // No se manda nada aqui porque es para la visualizacion del cliente solamente
      }
    });
  }
  /**
   * Esta funcion elimina un item
   * @param event
   */
  deleteCliente(event) {
    this.confirm.open({
      title: "Eliminar Cliente " + event.params.data.razonSocial,
      message: "¿Desea eliminar el cliente: " + event.params.data.razonSocial + "?",
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
        this._clientesService.deleteCliente(event.params.data.codigo).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Cliente eliminado con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.warning("Este Cliente no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
ClientesComponent.ɵfac = function ClientesComponent_Factory(t) {
  return new (t || ClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_clientes_service__WEBPACK_IMPORTED_MODULE_4__.ClientesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_6__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_9__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_10__.EmpresaService));
};
ClientesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: ClientesComponent,
  selectors: [["app-clientes"]],
  viewQuery: function ClientesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
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
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-8", "mt-2"], [1, "fixed", "right-10"], ["mat-icon-button", "", "type", "button", "matTooltip", "Crear Cliente", 1, "mr-2", "ml-2", "bg-blue-500", "p-2", "rounded-full", "z-99999", 3, "click"], ["save", ""], [1, "text-white"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function ClientesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ClientesComponent_Template_button_click_3_listener() {
        return ctx.saveCliente();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6)(8, "app-tabla-dinamica", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("functionEmitter", function ClientesComponent_Template_app_tabla_dinamica_functionEmitter_8_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlcy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhY2lvbi9jbGllbnRlcy9jb21wb25lbnRzL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvS0FBb0siLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 80657:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/administracion/clientes/components/filter-menu/filter-menu.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMenuComponent": () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _service_clientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/clientes.service */ 12254);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 69941);














function FilterMenuComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cliente_r3.razonSocial);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", cliente_r3.razonSocial, " ");
  }
}
function FilterMenuComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cliente_r4.Cuit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", cliente_r4.Cuit, " ");
  }
}
function FilterMenuComponent_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const localidad_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", localidad_r5.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", localidad_r5.descripcion, " ");
  }
}
class FilterMenuComponent {
  constructor(data, _menuService, _clientesService) {
    this.data = data;
    this._menuService = _menuService;
    this._clientesService = _clientesService;
    this.filterCliente = [];
    this.filterLocalidad = [];
  }
  ngOnInit() {
    /**
    * Formulario de filtros
    */
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      razonSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('-1'),
      Cuit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('-1'),
      localidad_descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('-1')
    });
    this.getClientes();
    this.getLocalidades();
    this.formFilters.patchValue(this.data.filter);
  }
  resetFilters() {
    this.formFilters.reset({
      razonSocial: '-1',
      Cuit: '-1',
      localidad_descripcion: '-1'
    });
  }
  /**
   * Esta funcion es para listar los clientes en el filtro de grilla.
   */
  getClientes() {
    var _this = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Clientes = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this._clientesService.getClientes());
      _this.filterCliente = Clientes.list;
    })();
  }
  /**
    * Esta funcion es para listar las localidades en el filtro de grilla.
    */
  getLocalidades() {
    var _this2 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Localidades = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this2._clientesService.getLocalidades());
      _this2.filterLocalidad = Localidades.list;
    })();
  }
  onCloseMenu(data = null) {
    this._menuService.close(data);
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_2__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_clientes_service__WEBPACK_IMPORTED_MODULE_3__.ClientesService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-clientes"]],
  decls: 40,
  vars: 8,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-bold", "text-gray-500", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded", "min-w-64", "mt-2"], ["formControlName", "razonSocial"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "Cuit"], ["formControlName", "localidad_descripcion"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-stroked-button", "", "color", "primary", 1, "w-full", "rounded-none", "md:w-28", "md:rounded-3xl", "hidden", "md:block", 3, "click"], [1, "text-gray-700", "font-bold"], ["mat-raised-button", "", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"]],
  template: function FilterMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Filtros");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_5_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_8_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "form", 6)(12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Raz\u00F3n Social");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-select", 9)(16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FilterMenuComponent_mat_option_18_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "CUIT");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 8)(22, "mat-select", 12)(23, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, FilterMenuComponent_mat_option_25_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Localidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 8)(29, "mat-select", 13)(30, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, FilterMenuComponent_mat_option_32_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 14)(34, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_34_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_37_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterCliente);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterCliente);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "-1");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.filterLocalidad);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhY2lvbi9jbGllbnRlcy9jb21wb25lbnRzL2ZpbHRlci1tZW51L2ZpbHRlci1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 70184:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/administracion/clientes/components/save/save.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _service_clientes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/clientes.service */ 12254);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);




















function SaveComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "fuse-alert", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r0._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0._alertConfig.message, " ");
  }
}
function SaveComponent_form_14_div_1_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const condicion_r9 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", condicion_r9.id)("disabled", ctx_r5.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](condicion_r9.descripcion);
  }
}
function SaveComponent_form_14_div_1_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const localidad_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", localidad_r10.id)("disabled", ctx_r6.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", localidad_r10.descripcion, " ");
  }
}
function SaveComponent_form_14_div_1_mat_form_field_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 21)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Contacto de Referencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r7.modoVisualizacion);
  }
}
function SaveComponent_form_14_div_1_mat_form_field_43_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", cliente_r12.codigo)("disabled", ctx_r11.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cliente_r12.razonSocial);
  }
}
function SaveComponent_form_14_div_1_mat_form_field_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 21)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cliente Asociado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 32)(4, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Sin Cliente Asociado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SaveComponent_form_14_div_1_mat_form_field_43_mat_option_6_Template, 2, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r8.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r8.clientes);
  }
}
function SaveComponent_form_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "mat-form-field", 15)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Nombre y Apellido / Raz\u00F3n Social");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 17)(6, "mat-form-field", 18)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 18)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "CUIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 21)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Condicion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SaveComponent_form_14_div_1_mat_option_18_Template, 2, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 17)(20, "mat-form-field", 18)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 18)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Localidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SaveComponent_form_14_div_1_mat_option_28_Template, 2, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-form-field", 21)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 17)(34, "mat-form-field", 18)(35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Tel\u00E9fono Adicional");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 18)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, SaveComponent_form_14_div_1_mat_form_field_42_Template, 4, 1, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, SaveComponent_form_14_div_1_mat_form_field_43_Template, 7, 2, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r3.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r3.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r3.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.condiciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r3.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.localidades);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r3.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r3.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r3.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.tieneClienteAsociado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.tieneClienteAsociado);
  }
}
function SaveComponent_form_14_div_2_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const condicion_r17 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", condicion_r17.id)("disabled", ctx_r13.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](condicion_r17.descripcion);
  }
}
function SaveComponent_form_14_div_2_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const localidad_r18 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", localidad_r18.id)("disabled", ctx_r14.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", localidad_r18.descripcion, " ");
  }
}
function SaveComponent_form_14_div_2_mat_form_field_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 21)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Contacto de Referencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r15.modoVisualizacion);
  }
}
function SaveComponent_form_14_div_2_mat_form_field_43_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", cliente_r20.codigo)("disabled", ctx_r19.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](cliente_r20.razonSocial);
  }
}
function SaveComponent_form_14_div_2_mat_form_field_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 21)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Cliente Asociado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-select", 32)(4, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Sin Cliente Asociado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SaveComponent_form_14_div_2_mat_form_field_43_mat_option_6_Template, 2, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r16.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r16.clientes);
  }
}
function SaveComponent_form_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "mat-form-field", 15)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Nombre y Apellido / Raz\u00F3n Social");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 17)(6, "mat-form-field", 18)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 18)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "CUIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 21)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Condicion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SaveComponent_form_14_div_2_mat_option_18_Template, 2, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 17)(20, "mat-form-field", 18)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 18)(25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Localidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, SaveComponent_form_14_div_2_mat_option_28_Template, 2, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-form-field", 21)(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 17)(34, "mat-form-field", 18)(35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Tel\u00E9fono Adicional");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 18)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, SaveComponent_form_14_div_2_mat_form_field_42_Template, 4, 1, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, SaveComponent_form_14_div_2_mat_form_field_43_Template, 7, 2, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.condiciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.localidades);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.modoVisualizacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.tieneClienteAsociado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.tieneClienteAsociado);
  }
}
function SaveComponent_form_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveComponent_form_14_div_1_Template, 44, 11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SaveComponent_form_14_div_2_Template, 44, 11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedOption === "fisica");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedOption === "juridica");
  }
}
function SaveComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class SaveComponent {
  constructor(data, _clientesService, _authService, alert, dialogRef) {
    this.data = data;
    this._clientesService = _clientesService;
    this._authService = _authService;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.modoVisualizacion = false;
    this.localidades = [];
    this.condiciones = [];
    this.clientes = [];
    this.tieneClienteAsociado = false;
    this.selectedOption = '';
    this.isFisicaDisabled = false;
    this.isJuridicaDisabled = false;
    this.showAlert = false;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.cliente = this.data ? this.data : null;
    if (this.data && this.data.visualizar) {
      this.title = 'Ver Cliente';
      this.modoVisualizacion = true;
    } else {
      this.title = this.cliente?.codigo ? 'Editar cliente' : 'Nuevo cliente';
    }
  }
  ngOnInit() {
    this.getLocalidades();
    this.getCondicionesIva();
    this.getClientes();
    this.verificarClienteAsociado();
    this.getTipoCliente();
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  /**
   * Esta funcion es para verificar si la empresa tiene cliente asociado
   */
  verificarClienteAsociado() {
    this._authService.verificarDatosEmpresaCargados().subscribe(empresaCargada => {
      if (empresaCargada && this._authService.empresaData.cliente_asociado === 1) {
        this.tieneClienteAsociado = true;
      }
    });
  }
  /**
   * Esta funcion es para ver que Tipo de Cliente
   */
  getTipoCliente() {
    if (this.cliente) {
      if (this.cliente.tipoCliente === 0) {
        this.selectedOption = 'juridica';
        this.isFisicaDisabled = true;
      } else if (this.cliente.tipoCliente === 1) {
        this.selectedOption = 'fisica';
        this.isJuridicaDisabled = true;
      }
      this.toggleForm(this.selectedOption, this.cliente.tipoCliente);
      if (this.cliente.codigo && !this.cliente.cliente) {
        this.form.get('cliente').setValue('sin_asociado');
      }
    }
  }
  toggleForm(option, tipo) {
    this.selectedOption = option;
    if (tipo === 0) {
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        razonSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.razonSocial : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        DNI: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.DNI : null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        Cuit: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.Cuit : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        condicionIva: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.condicionIva : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.direccion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        localidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.localidad : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        telefonoParticular: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.telefonoParticular : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        telefonoMovil: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.telefonoMovil : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        correoElectronico: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.correoElectronico : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email])
      });
      this.form.get('DNI').disable();
      if (!this.tieneClienteAsociado) {
        this.form.addControl('contacto_referencia', new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.contacto_referencia : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required));
      } else {
        this.form.addControl('cliente', new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.cliente : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required));
      }
    } else if (tipo === 1) {
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
        razonSocial: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.razonSocial : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        DNI: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.DNI : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        Cuit: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.Cuit : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        condicionIva: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.condicionIva : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.direccion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        localidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.localidad : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        telefonoParticular: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.telefonoParticular : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        telefonoMovil: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.telefonoMovil : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required),
        correoElectronico: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.correoElectronico : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.email])
      });
      this.form.get('DNI').enable();
      if (!this.tieneClienteAsociado) {
        this.form.addControl('contacto_referencia', new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.contacto_referencia : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required));
      } else {
        this.form.addControl('cliente', new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(this.cliente ? this.cliente.cliente : '', _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required));
      }
    }
  }
  /**
   * Esta funcion la utilizamos cuando queremos listar elementos en un selector en este caso Localidades.
   */
  getLocalidades() {
    var _this = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const localidades = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(_this._clientesService.getLocalidades());
      _this.getDataLocalidades(localidades);
    })();
  }
  getDataLocalidades(data) {
    var _this2 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.localidades = data.list;
      // Este if es para que lo tome al momento de edicion
      if (_this2.cliente && _this2.cliente.localidad) {
        _this2.form.get('localidad').setValue(_this2.cliente.localidad.toString());
      }
    })();
  }
  /**
   * Esta funcion la utilizamos cuando queremos listar elementos en un selector en este caso Condicion Iva.
   */
  getCondicionesIva() {
    var _this3 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const condicion_iva = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(_this3._clientesService.getCondicionesIva());
      _this3.getDataCondiciones(condicion_iva);
    })();
  }
  getDataCondiciones(data) {
    var _this4 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.condiciones = data.list;
      // Este if es para que lo tome al momento de edicion
      if (_this4.cliente && _this4.cliente.condicionIva) {
        _this4.form.get('condicionIva').setValue(_this4.cliente.condicionIva.toString());
      }
    })();
  }
  /**
   * Esta funcion la utilizamos cuando queremos listar los elementos en un selector en este caso Clientes
   */
  getClientes() {
    var _this5 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Clientes = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(_this5._clientesService.getClientes());
      if (_this5.cliente && _this5.cliente.codigo) {
        _this5.clientes = Clientes.list.filter(c => c.codigo !== _this5.cliente.codigo);
      } else {
        _this5.clientes = Clientes.list;
      }
    })();
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      let payload = null;
      if (this.selectedOption === 'juridica') {
        payload = {
          codigo: this.cliente?.codigo ? this.cliente.codigo : null,
          razonSocial: this.form.get('razonSocial').value,
          Cuit: this.form.get('Cuit').value,
          condicionIva: this.form.get('condicionIva').value,
          direccion: this.form.get('direccion').value,
          localidad: this.form.get('localidad').value,
          telefonoParticular: this.form.get('telefonoParticular').value,
          telefonoMovil: this.form.get('telefonoMovil').value,
          correoElectronico: this.form.get('correoElectronico').value,
          tipoCliente: 0
        };
        if (!this.tieneClienteAsociado) {
          payload['contacto_referencia'] = this.form.get('contacto_referencia').value;
        } else {
          if (this.form.get('cliente').value === 'sin_asociado') {
            payload['cliente'] = null;
          } else {
            payload['cliente'] = this.form.get('cliente').value;
          }
        }
      } else if (this.selectedOption === 'fisica') {
        payload = {
          codigo: this.cliente?.codigo ? this.cliente.codigo : null,
          razonSocial: this.form.get('razonSocial').value,
          DNI: this.form.get('DNI').value,
          Cuit: this.form.get('Cuit').value,
          condicionIva: this.form.get('condicionIva').value,
          direccion: this.form.get('direccion').value,
          localidad: this.form.get('localidad').value,
          telefonoParticular: this.form.get('telefonoParticular').value,
          telefonoMovil: this.form.get('telefonoMovil').value,
          correoElectronico: this.form.get('correoElectronico').value,
          tipoCliente: 1
        };
        if (!this.tieneClienteAsociado) {
          payload['contacto_referencia'] = this.form.get('contacto_referencia').value;
        } else {
          if (this.form.get('cliente').value === 'sin_asociado') {
            payload['cliente'] = null;
          } else {
            payload['cliente'] = this.form.get('cliente').value;
          }
        }
      }
      if (this.cliente?.codigo) {
        this._clientesService.updateCliente(payload).subscribe({
          next: data => {
            if (data) {
              this.editadoExitosamente.emit();
              this.onCloseMenu();
            }
          }
        });
      } else {
        this._clientesService.saveCliente(payload).subscribe({
          next: data => {
            if (data) {
              this.creadoExitosamente.emit();
              this.onCloseMenu();
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
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_clientes_service__WEBPACK_IMPORTED_MODULE_1__.ClientesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-clientes"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  decls: 17,
  vars: 8,
  consts: [[1, "fixed", "inset-0", "bg-white", "dark:bg-slate-900", "shadow-lg", "overflow-hidden", "overflow-y-auto", "sm:rounded-2xl", "md:min-w-[50rem]", "sm:w-90", "sm:min-w-90", "flex-col", "flex", "sm:inset-auto", "max-h-screen", "sm:static"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "flex", "flex-row", "w-full", "h-full", "p-5"], [3, "checked", "disabled", "change"], ["class", "form-menu mt-[-30px] p-4", 3, "formGroup", 4, "ngIf"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", "class", "w-full bg-primary rounded-none md:w-28 md:rounded-3xl py-8 md:py-0", 3, "click", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "form-menu", "mt-[-30px]", "p-4", 3, "formGroup"], ["class", "flex flex-col w-full h-full p-4", 4, "ngIf"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "razonSocial", 3, "readonly"], [1, "flex", "gap-4", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "w-full", "sm:w-1/2"], ["matInput", "", "formControlName", "DNI", 3, "readonly"], ["matInput", "", "formControlName", "Cuit", 3, "readonly"], ["appearance", "outline", 1, "w-full", "sm:w-1/3"], ["formControlName", "condicionIva"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "direccion", 3, "readonly"], ["formControlName", "localidad"], ["matInput", "", "formControlName", "telefonoParticular", 3, "readonly"], ["matInput", "", "formControlName", "telefonoMovil", 3, "readonly"], ["matInput", "", "formControlName", "correoElectronico", 3, "readonly"], ["appearance", "outline", "class", "w-full sm:w-1/3", 4, "ngIf"], [3, "value", "disabled"], ["matInput", "", "formControlName", "contacto_referencia", 3, "readonly"], ["formControlName", "cliente"], ["value", "sin_asociado", 3, "disabled"], ["mat-raised-button", "", "color", "accent", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SaveComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6)(10, "mat-checkbox", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SaveComponent_Template_mat_checkbox_change_10_listener() {
        return ctx.toggleForm("fisica", 1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Persona F\u00EDsica ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "mat-checkbox", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SaveComponent_Template_mat_checkbox_change_12_listener() {
        return ctx.toggleForm("juridica", 0);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " Persona Jur\u00EDdica ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SaveComponent_form_14_Template, 3, 3, "form", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SaveComponent_button_16_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.selectedOption === "fisica")("disabled", ctx.isFisicaDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.selectedOption === "juridica")("disabled", ctx.isJuridicaDisabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedOption !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.modoVisualizacion);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__.FuseAlertComponent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hZG1pbmlzdHJhY2lvbi9jbGllbnRlcy9jb21wb25lbnRzL3NhdmUvc2F2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 12254:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/administracion/clientes/service/clientes.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientesService": () => (/* binding */ ClientesService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class ClientesService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el servicio
   * - Esta funcion retorna los Clientes.
   * @returns Rubros
   */
  getClientes(sort) {
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
   * @param cliente
   * @returns Crea un item nuevo
   */
  saveCliente(cliente) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.clientes}`, cliente);
  }
  /**
   * Funcion en el servicio
   * @param cliente
   * @returns Item actualizado actualizado
   */
  updateCliente(cliente) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.clientes}` + '/' + cliente.codigo, cliente);
  }
  /**
   * Funcion en el servicio
   * @param idcliente
   * @returns Elimina un item
   */
  deleteCliente(idcliente) {
    return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.clientes}` + '/' + idcliente);
  }
  /**
   * Listamos las localidades para el selector del formulario de alta/edicion
   * @returns Todos las localidades.
  */
  getLocalidades() {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.localidades}`).subscribe(resp => {
      subject.next({
        'list': resp.result
      });
    });
    return subject.asObservable();
  }
  /**
   * Listamos las condicion iva para el selector del formulario de alta/edicion
   * @returns Todas las condicion iva.
   */
  getCondicionesIva() {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.condicion_iva}`).subscribe(resp => {
      subject.next({
        'list': resp.result
      });
    });
    return subject.asObservable();
  }
}
ClientesService.ɵfac = function ClientesService_Factory(t) {
  return new (t || ClientesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
ClientesService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ClientesService,
  factory: ClientesService.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_administracion_clientes_clientes_module_ts.js.map