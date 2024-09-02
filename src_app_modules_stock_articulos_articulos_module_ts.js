"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_articulos_articulos_module_ts"],{

/***/ 76270:
/*!*************************************************************!*\
  !*** ./src/app/modules/stock/articulos/articulos.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticulosModule": () => (/* binding */ ArticulosModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _components_articulos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/articulos.component */ 4751);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 21820);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/articulos.service */ 79955);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal/modal.component */ 30136);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 18635);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/stock/stock.component */ 99482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);



























const routes = [{
  path: '',
  component: _components_articulos_component__WEBPACK_IMPORTED_MODULE_3__.ArticulosComponent
}];
class ArticulosModule {}
ArticulosModule.ɵfac = function ArticulosModule_Factory(t) {
  return new (t || ArticulosModule)();
};
ArticulosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: ArticulosModule
});
ArticulosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_service_articulos_service__WEBPACK_IMPORTED_MODULE_5__.ArticulosService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__.TablaDinamicaModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ArticulosModule, {
    declarations: [_components_articulos_component__WEBPACK_IMPORTED_MODULE_3__.ArticulosComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _components_stock_stock_component__WEBPACK_IMPORTED_MODULE_9__.StockComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__.TablaDinamicaModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 4751:
/*!***************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/articulos.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticulosComponent": () => (/* binding */ ArticulosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 21820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.component */ 30136);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 18635);
/* harmony import */ var _stock_stock_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stock/stock.component */ 99482);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/articulos.service */ 79955);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/service/app/pwa.service */ 16173);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 83677);























class ArticulosComponent {
  constructor(_articulosService, _empresaService, _menuService, confirm, alert, dialogo, _searchService, router, _headerTextService, pwaService) {
    this._articulosService = _articulosService;
    this._empresaService = _empresaService;
    this._menuService = _menuService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.pwaService = pwaService;
    this.selectedArticulos = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.column_params = ['seleccion', 'codigo_interno', 'descripcion', 'descripcion_rubro', 'descripcion_tipo', 'activo', 'total_stock', 'cantidad_pendiente', 'acciones'];
    this.headers = ['', 'Código Interno', 'Descripción', 'Rubro', 'Tipo Articulo', 'Activo', 'Stock', 'Pendiente de entrega', 'Acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['descripcion', 'codigo_interno'];
    this.filter = {
      activo: -1,
      tipo: -1,
      rubro: -1
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stock.view_articulos + '?sort=descripcion';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('');
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subject();
    this._headerTextService.setTitulo(this.router);
    /**
    * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
    */
    this.funcionesObjeto = [{
      nombre_boton: "Editar",
      functionName: 'editar',
      iconoAccion: articulo => 'jedstion:editar',
      iconoAccionado: articulo => '',
      iconoDeshabilitado: articulo => ''
    }, {
      nombre_boton: "Unidad de medida",
      functionName: 'um',
      iconoAccion: articulo => 'jedstion:unidad_medida',
      iconoAccionado: articulo => '',
      iconoDeshabilitado: articulo => ''
    }, {
      nombre_boton: 'Stock',
      functionName: 'stock',
      iconoAccion: articulo => 'jedstion:stock',
      iconoAccionado: articulo => '',
      iconoDeshabilitado: articulo => ''
    }, {
      nombre_boton: "Eliminar",
      functionName: 'eliminar',
      iconoAccion: articulo => 'jedstion:eliminar',
      iconoAccionado: articulo => '',
      iconoDeshabilitado: articulo => ''
    }];
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.distinctUntilChanged)()).subscribe(value => {
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
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter.activo != -1 ? "filter[activo]=" + this.filter.activo : '';
          this.extraParams = this.filter.tipo != -1 ? "filter[tipo]=" + this.filter.tipo : '';
          this.extraParams = this.filter.rubro != -1 ? "filter[idrubro]=" + this.filter.rubro : '';
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
        this.updateArticulo(event);
        break;
      case 'um':
        this.modalUnidadMedidas(event);
        break;
      case 'stock':
        this.stockArticulo(event);
        break;
      case 'eliminar':
        this.deleteArticulo(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveArticulo() {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
        this.alert.success('Artículo creado con éxito');
      }
    });
  }
  /**
   * Esta funcion modifica un item
   * @param event
   */
  updateArticulo(event) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.editadoExitosamente.subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
        this.alert.success('Artículo editado con éxito');
      }
    });
  }
  /**
  * Funcion en el componente
  * - Esta funcion abre un modal.
  * @param documentRef
  * @param articulo
  */
  modalUnidadMedidas(event) {
    this.dialogo.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.tabla.renderTabla();
        this.alert.success('Unidad de Medida creada con éxito');
      }
    });
  }
  /**
   * Esta funcion muestra el stock que se tiene de ese articulo en cada uno de los Depositos
   */
  stockArticulo(event) {
    this.dialogo.open(_stock_stock_component__WEBPACK_IMPORTED_MODULE_5__.StockComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).afterClosed().subscribe({
      next: () => {
        this.tabla.renderTabla();
      }
    });
  }
  /**
   * Esta funcion elimina un item
   * @param event
   */
  deleteArticulo(event) {
    this.confirm.open({
      title: "Eliminar Artículo " + event.params.data.descripcion,
      message: "¿Desea eliminar la Artículo: " + event.params.data.descripcion + "?",
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
        this._articulosService.deleteArticulo(event.params.data.idarticulo).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Artículo eliminado con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error(error);
            this.alert.warning("Este Artículo no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  /**
   * Esta función es la que se encarga de la seleccion de check box de artículos seleccionados
   * @param selectedElements - La lista de artículos seleccionados.
   */
  onSelectionChange(selectedElements) {
    this.selectedArticulos = selectedElements;
  }
  /**
   * Esta funcion Genera un Reporte de Etiqueta/s y lo muestra en una nueva pestaña
   */
  reporteEtiqueta() {
    if (!this.selectedArticulos || this.selectedArticulos.length === 0) {
      this.alert.error('Debe seleccionar al menos un artículo.');
      return;
    } else {
      let payload = null;
      payload = {
        articulos: this.selectedArticulos.map(element => ({
          idarticulo: element.idarticulo
        }))
      };
      this._articulosService.reporteEtiqueta(payload).subscribe(data => {
        if (data.success) {
          const reportePath = data.path;
          if (this.pwaService.isPwa()) {
            this.router.navigate(['/reporte', reportePath]);
          } else {
            const reporteUrl = `${environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.baseRest}/${reportePath}`;
            window.open(reporteUrl, '_blank');
          }
        } else {
          this.alert.error('Los artículos deben tener al menos una Unidad de Medida asignada.');
        }
      }, error => {
        console.error('Error en la solicitud del reporte de etiquetas', error);
        this.alert.error('Los artículos deben tener al menos una Unidad de Medida asignada.');
      });
    }
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
ArticulosComponent.ɵfac = function ArticulosComponent_Factory(t) {
  return new (t || ArticulosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_6__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_7__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_8__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_9__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_10__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_11__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_12__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_13__.PwaService));
};
ArticulosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: ArticulosComponent,
  selectors: [["app-articulos"]],
  viewQuery: function ArticulosComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  inputs: {
    extraParams: "extraParams"
  },
  outputs: {
    parametrosActualizados: "parametrosActualizados"
  },
  decls: 23,
  vars: 21,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "fixed", "right-10", "flex", "space-x-4"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], ["save", ""], [1, "flex", "items-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5", "hidden", "md:inline"], ["width", "22", "height", "22", "viewBox", "0 0 26 26", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_535_423)"], ["d", "M20.5568 8.68182H19.4773V3.28409H6.52274V8.68182H5.4432C3.65115 8.68182 2.20456 10.1284 2.20456 11.9205V18.3977H6.52274V22.7159H19.4773V18.3977H23.7955V11.9205C23.7955 10.1284 22.3489 8.68182 20.5568 8.68182ZM8.68183 5.44318H17.3182V8.68182H8.68183V5.44318ZM17.3182 18.3977V20.5568H8.68183V16.2386H17.3182V18.3977ZM19.4773 16.2386V14.0795H6.52274V16.2386H4.36365V11.9205C4.36365 11.3267 4.84945 10.8409 5.4432 10.8409H20.5568C21.1506 10.8409 21.6364 11.3267 21.6364 11.9205V16.2386H19.4773Z"], ["d", "M19.4773 13.5398C20.0735 13.5398 20.5568 13.0564 20.5568 12.4602C20.5568 11.864 20.0735 11.3807 19.4773 11.3807C18.8811 11.3807 18.3977 11.864 18.3977 12.4602C18.3977 13.0564 18.8811 13.5398 19.4773 13.5398Z"], ["id", "clip0_535_423"], ["width", "25.9091", "height", "25.9091", "fill", "currentColor", "transform", "translate(0.0454712 0.0454559)"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "selectionChange", "functionEmitter"]],
  template: function ArticulosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ArticulosComponent_Template_button_click_3_listener() {
        return ctx.saveArticulo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "Agregar Art\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function ArticulosComponent_Template_button_click_10_listener() {
        return ctx.reporteEtiqueta();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "svg", 9)(13, "g", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](14, "path", 11)(15, "path", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "defs")(17, "clipPath", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "rect", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](20, "Imprimir Etiquetas");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "div", 15)(22, "app-tabla-dinamica", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selectionChange", function ArticulosComponent_Template_app_tabla_dinamica_selectionChange_22_listener($event) {
        return ctx.onSelectionChange($event);
      })("functionEmitter", function ArticulosComponent_Template_app_tabla_dinamica_functionEmitter_22_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY3Vsb3MuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9hcnRpY3Vsb3MvY29tcG9uZW50cy9hcnRpY3Vsb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 18635:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/filter-menu/filter-menu.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMenuComponent": () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/articulos.service */ 79955);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 69941);















function FilterMenuComponent_mat_option_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", rubro_r1.idrubro);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rubro_r1.descripcion);
  }
}
class FilterMenuComponent {
  constructor(data, menuService, _empresaService, _articulosService) {
    this.data = data;
    this.menuService = menuService;
    this._empresaService = _empresaService;
    this._articulosService = _articulosService;
    this.filterRubro = [];
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(-1),
      tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(-1),
      rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(-1)
    });
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    this.getRubros();
    // Load empresa data
    this._empresaService.getEmpresa();
    this.formFilters.patchValue(this.data.filter);
  }
  resetFilters() {
    this.formFilters.reset({
      activo: -1,
      tipo: -1,
      rubro: -1
    });
  }
  onCloseMenu(data = null) {
    this.menuService.close(data);
  }
  /**
  * Esta funcion es para listas los Rubros en el filtro de grilla.
  */
  getRubros() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rubros = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this._articulosService.getRubros());
      _this.filterRubro = rubros.list;
    })();
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_2__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_4__.ArticulosService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-articulos"]],
  decls: 48,
  vars: 25,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], ["formControlName", "activo"], [3, "value"], [1, "fila-naranja", 3, "value"], [1, "fila-amarillo", 3, "value"], ["formControlName", "tipo"], ["formControlName", "rubro"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-select", 9)(16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Tipo Articulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-select", 13)(26, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Insumo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Servicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Rubro");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "mat-form-field", 8)(37, "mat-select", 14)(38, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, FilterMenuComponent_mat_option_40_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 16)(42, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_42_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_45_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Filtrar");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.filterRubro);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx.color_primario || "")("border", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9hcnRpY3Vsb3MvY29tcG9uZW50cy9maWx0ZXItbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 30136:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/modal/modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/articulos.service */ 79955);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);























function ModalComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fuse-alert", 27);
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
function ModalComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", unidad_medida_r10.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", unidad_medida_r10.descripcion, " ");
  }
}
function ModalComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", ctx_r2.color_primario || "");
  }
}
function ModalComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", unidad_medida_r11.um.descripcion, " ");
  }
}
function ModalComponent_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r4.color_primario ? "" : ctx_r4.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", ctx_r4.color_primario || "");
  }
}
function ModalComponent_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", unidad_medida_r12.factor, " ");
  }
}
function ModalComponent_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r6.color_primario ? "" : ctx_r6.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", ctx_r6.color_primario || "");
  }
}
function ModalComponent_td_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 30)(1, "button", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalComponent_td_34_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const unidad_medida_r13 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.deleteUnidadDeMedida(unidad_medida_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ModalComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 36);
  }
}
function ModalComponent_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 37);
  }
}
class ModalComponent {
  constructor(data, _empresaService, articulosService, alert, dialogRef, confirm) {
    this.data = data;
    this._empresaService = _empresaService;
    this.articulosService = articulosService;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.confirm = confirm;
    this.columns = ['descripcion', 'factor', 'acciones'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.articulo = this.data ? this.data : null;
    this.title = `UM de: ${this.articulo.descripcion} `;
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
    this.getUnidadesDeMedida();
    this.getUnidadesDeMedidaTable();
    this.subscribeAlert();
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      unidad_medida: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required),
      factor: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern('^[0-9]*$')])
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.timer)(100, 1800).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  /**
  * Esta funcion la utilizamos cuando queremos listar elementos en una tabla.
  */
  getUnidadesDeMedidaTable() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_de_medida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.firstValueFrom)(_this.articulosService.getUnidadesDeMedidaTable(_this.articulo));
      _this.getDataUnidadesDeMedidasTable(unidades_de_medida);
    })();
  }
  getDataUnidadesDeMedidasTable(data) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.unidades_de_medida = data.list;
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(_this2.unidades_de_medida);
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
  * Esta funcion la utilizamos cuando queremos listar elementos en un selector.
  */
  getUnidadesDeMedida() {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_de_medida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.firstValueFrom)(_this3.articulosService.getUnidadesDeMedida());
      _this3.getDataUnidadeDeMedida(unidades_de_medida);
    })();
  }
  getDataUnidadeDeMedida(data) {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this4.um = data.list;
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  deleteUnidadDeMedida(unidad_medida) {
    this.confirm.open({
      title: "Eliminar UM " + unidad_medida.um.descripcion,
      message: "¿Desea eliminar la UM: " + unidad_medida.um.descripcion + "?",
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
        this.articulosService.deleteUnidadDeMedida(unidad_medida.idarticulounidadmedida).subscribe({
          next: res => {
            if (res.success == false) {
              // Manejar el error
              this.alert.error("No puede borrarse UM con factor 1. Elimine las demas UM y vuelva a intentar");
            } else {
              // Manejar la respuesta exitosa
              this.alert.success("Unidad de Medida eliminada con éxito.");
              this.getUnidadesDeMedidaTable();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.error("Error");
          }
        });
      }
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      this.articulo_um = {
        ...this.articulo_um,
        idarticulo: this.articulo.idarticulo,
        idunidadmedida: this.form.get('unidad_medida').value,
        factor: this.form.get('factor').value
      };
      if (!this.articulo_um.idarticulounidadmedida) {
        this.articulosService.saveUnidadDeMedida(this.articulo_um).subscribe({
          next: res => {
            if (res.success) {
              this.creadoExitosamente.emit();
              this.getUnidadesDeMedidaTable();
            } else {
              this.alert.warning('La primera unidad de medida (UM) debe ser factor 1 y un artículo no puede tener dos UMs del mismo tipo.');
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
ModalComponent.ɵfac = function ModalComponent_Factory(t) {
  return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_1__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_2__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService));
};
ModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ModalComponent,
  selectors: [["app-modal-unidades-medidas"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente"
  },
  decls: 37,
  vars: 16,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-140", "sm:w-140", "sm:rounded-2xl", "overflow-y-auto", "shadow-lg", "overflow-hidden", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "flex", "flex-col", "w-full", "h-full", "p-6", "shadow-lg", 3, "formGroup"], [1, "flex", "gap-3"], ["appearance", "outline", 1, "w-1/2"], ["formControlName", "unidad_medida"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "factor"], [1, "w-1/4"], ["matTooltip", "A\u00F1adir UM", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "mt-2", "ml-2", "sm:ml-4", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 10H10V16H6V10H0V6H6V0H10V6H16V10Z", "fill", "white"], [1, "overflow-y-auto", "h-auto", "shadow-md", "rounded-lg", "mt-4"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "descripcion"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "factor"], ["mat-header-cell", "", "class", "text-white", 3, "class", "background", 4, "matHeaderCellDef"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "rounded-tr-lg text-white", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [3, "value"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", ""], ["mat-header-cell", "", 1, "text-white"], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white"], ["mat-icon-button", "", "matTooltip", "Eliminar UM", 3, "click"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ModalComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "form", 6)(10, "div", 7)(11, "mat-form-field", 8)(12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Unidad de medida");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ModalComponent_mat_option_15_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field", 8)(17, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Factor");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 12)(21, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_21_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "svg", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "path", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 16)(25, "table", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ModalComponent_th_27_Template, 2, 4, "th", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ModalComponent_td_28_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ModalComponent_th_30_Template, 2, 4, "th", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ModalComponent_td_31_Template, 2, 1, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](32, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, ModalComponent_th_33_Template, 2, 4, "th", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, ModalComponent_td_34_Template, 5, 0, "td", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, ModalComponent_tr_35_Template, 1, 0, "tr", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ModalComponent_tr_36_Template, 1, 0, "tr", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.um);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", ctx.color_primario);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9hcnRpY3Vsb3MvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 21820:
/*!***************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/save/save.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/articulos.service */ 79955);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);


























function SaveComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "fuse-alert", 12);
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
function SaveComponent_div_9_mat_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SaveComponent_div_9_mat_checkbox_1_Template_mat_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.toggleForm("insumo", 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Insumo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", (ctx_r4.articulo == null ? null : ctx_r4.articulo.tipo) === 0)("disabled", ctx_r4.articulo && ctx_r4.articulo.tipo !== 0);
  }
}
function SaveComponent_div_9_mat_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SaveComponent_div_9_mat_checkbox_2_Template_mat_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.toggleForm("producto", 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Producto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", (ctx_r5.articulo == null ? null : ctx_r5.articulo.tipo) === 1)("disabled", ctx_r5.articulo && ctx_r5.articulo.tipo !== 1);
  }
}
function SaveComponent_div_9_mat_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SaveComponent_div_9_mat_checkbox_3_Template_mat_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.toggleForm("servicio", 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Servicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", (ctx_r6.articulo == null ? null : ctx_r6.articulo.tipo) === 2)("disabled", ctx_r6.articulo && ctx_r6.articulo.tipo !== 2);
  }
}
function SaveComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SaveComponent_div_9_mat_checkbox_1_Template, 2, 2, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SaveComponent_div_9_mat_checkbox_2_Template, 2, 2, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SaveComponent_div_9_mat_checkbox_3_Template, 2, 2, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.TipoArticulo.includes("insumo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.TipoArticulo.includes("producto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.TipoArticulo.includes("servicio"));
  }
}
function SaveComponent_form_10_div_1_mat_form_field_11_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", unidad_medida_r19.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](unidad_medida_r19.descripcion);
  }
}
function SaveComponent_form_10_div_1_mat_form_field_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 25)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Unidad de medida base");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SaveComponent_form_10_div_1_mat_form_field_11_mat_option_4_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r16.unidades_de_medida);
  }
}
function SaveComponent_form_10_div_1_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", rubro_r20.idrubro);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rubro_r20.descripcion);
  }
}
function SaveComponent_form_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "mat-form-field", 21)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-form-field", 21)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "C\u00F3digo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SaveComponent_form_10_div_1_mat_form_field_11_Template, 5, 1, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-form-field", 25)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Rubro");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SaveComponent_form_10_div_1_mat_option_16_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 25)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Stock m\u00EDnimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-form-field", 25)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-select", 29)(25, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r13.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r13.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r13.rubros);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
  }
}
function SaveComponent_form_10_div_2_mat_form_field_15_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", unidad_medida_r39.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](unidad_medida_r39.descripcion);
  }
}
function SaveComponent_form_10_div_2_mat_form_field_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 42)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Unidad de medida base");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SaveComponent_form_10_div_2_mat_form_field_15_mat_option_4_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r21.unidades_de_medida);
  }
}
function SaveComponent_form_10_div_2_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", rubro_r40.idrubro);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rubro_r40.descripcion);
  }
}
function SaveComponent_form_10_div_2_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r23.precioCostoHasFocus || ctx_r23.form.get("precio_costo").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "U$S");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r24.precioCostoHasFocus || ctx_r24.form.get("precio_costo").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_mat_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r25.articulo.iva_proveedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r25.articulo.iva_proveedor, "% ");
  }
}
function SaveComponent_form_10_div_2_span_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r26.fletePorcentajeHasFocus || ctx_r26.form.get("flete_porcentaje").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r27.fleteImporteHasFocus || ctx_r27.form.get("flete_importe").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "U$S");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r28.fleteImporteHasFocus || ctx_r28.form.get("flete_importe").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_80_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r29.utilidadHasFocus || ctx_r29.form.get("utilidad").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r30.netoSugeridoHasFocus || ctx_r30.form.get("neto_sugerido").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "U$S");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r31.netoSugeridoHasFocus || ctx_r31.form.get("neto_sugerido").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r32.netoFinalHasFocus || ctx_r32.form.get("neto_final").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "U$S");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r33.netoFinalHasFocus || ctx_r33.form.get("neto_final").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_mat_option_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r34.articulo.iva_porcentaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r34.articulo.iva_porcentaje, "% ");
  }
}
function SaveComponent_form_10_div_2_span_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r35.brutoSugeridoHasFocus || ctx_r35.form.get("bruto_sugerido").value ? "inline" : "none");
  }
}
function SaveComponent_form_10_div_2_span_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "U$S");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx_r36.brutoSugeridoHasFocus || ctx_r36.form.get("bruto_sugerido").value ? "inline" : "none");
  }
}
const _c0 = function (a1) {
  return ["w-full", a1];
};
function SaveComponent_form_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "mat-form-field", 34)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-form-field", 35)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "C\u00F3digo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field", 36)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "textarea", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown.enter", function SaveComponent_form_10_div_2_Template_textarea_keydown_enter_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r41.onEnter($event));
    })("input", function SaveComponent_form_10_div_2_Template_textarea_input_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.autoResize($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, SaveComponent_form_10_div_2_mat_form_field_15_Template, 5, 1, "mat-form-field", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "mat-form-field", 39)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, "Rubro");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, SaveComponent_form_10_div_2_mat_option_20_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "mat-form-field", 39)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Stock m\u00EDnimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-form-field", 39)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "mat-select", 29)(29, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "mat-form-field", 39)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Moneda");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "mat-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function SaveComponent_form_10_div_2_Template_mat_select_selectionChange_36_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r44.onMonedaChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "$ (Pesos)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "U$S (D\u00F3lares)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 33)(42, "mat-form-field", 42)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Precio de Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, SaveComponent_form_10_div_2_span_46_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, SaveComponent_form_10_div_2_span_47_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SaveComponent_form_10_div_2_Template_input_focus_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r45.precioCostoHasFocus = true);
    })("blur", function SaveComponent_form_10_div_2_Template_input_blur_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r46.precioCostoHasFocus = false);
    })("input", function SaveComponent_form_10_div_2_Template_input_input_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r47.onInputChangeNetoSugerido());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-form-field", 42)(50, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "IVA Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "mat-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function SaveComponent_form_10_div_2_Template_mat_select_selectionChange_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r48.onInputChangeNetoSugerido());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](53, SaveComponent_form_10_div_2_mat_option_53_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "10.5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "21%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "27%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "mat-form-field", 42)(63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Flete (%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 48)(66, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SaveComponent_form_10_div_2_Template_input_focus_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.fletePorcentajeHasFocus = true);
    })("blur", function SaveComponent_form_10_div_2_Template_input_blur_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r50.fletePorcentajeHasFocus = false);
    })("input", function SaveComponent_form_10_div_2_Template_input_input_66_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r51.onPorcentajeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, SaveComponent_form_10_div_2_span_67_Template, 2, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "mat-form-field", 42)(69, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](70, "Flete (Importe)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](72, SaveComponent_form_10_div_2_span_72_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, SaveComponent_form_10_div_2_span_73_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SaveComponent_form_10_div_2_Template_input_focus_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r52.fleteImporteHasFocus = true);
    })("blur", function SaveComponent_form_10_div_2_Template_input_blur_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r53.fleteImporteHasFocus = false);
    })("input", function SaveComponent_form_10_div_2_Template_input_input_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r54.onImporteChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "mat-form-field", 42)(76, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "Utilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "div", 48)(79, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SaveComponent_form_10_div_2_Template_input_focus_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.utilidadHasFocus = true);
    })("blur", function SaveComponent_form_10_div_2_Template_input_blur_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r56.utilidadHasFocus = false);
    })("input", function SaveComponent_form_10_div_2_Template_input_input_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r57.onInputChangeNetoSugerido());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, SaveComponent_form_10_div_2_span_80_Template, 2, 2, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 53)(82, "mat-form-field", 42)(83, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, "Neto Sugerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, SaveComponent_form_10_div_2_span_86_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, SaveComponent_form_10_div_2_span_87_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](88, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SaveComponent_form_10_div_2_Template_input_focus_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r58.netoSugeridoHasFocus = true);
    })("blur", function SaveComponent_form_10_div_2_Template_input_blur_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r59.netoSugeridoHasFocus = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "mat-form-field", 42)(90, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91, "Precio Neto Final");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](93, SaveComponent_form_10_div_2_span_93_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](94, SaveComponent_form_10_div_2_span_94_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SaveComponent_form_10_div_2_Template_input_focus_95_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r60.netoFinalHasFocus = true);
    })("blur", function SaveComponent_form_10_div_2_Template_input_blur_95_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r61.netoFinalHasFocus = false);
    })("input", function SaveComponent_form_10_div_2_Template_input_input_95_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r62.onInputChangeVentaSugerido());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "mat-form-field", 42)(97, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, "IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "mat-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectionChange", function SaveComponent_form_10_div_2_Template_mat_select_selectionChange_99_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r63.onInputChangeVentaSugerido());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](100, SaveComponent_form_10_div_2_mat_option_100_Template, 2, 2, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, "0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "10.5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106, "21%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "27%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "mat-form-field", 42)(110, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, "Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](113, SaveComponent_form_10_div_2_span_113_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](114, SaveComponent_form_10_div_2_span_114_Template, 2, 2, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("focus", function SaveComponent_form_10_div_2_Template_input_focus_115_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r64.brutoSugeridoHasFocus = true);
    })("blur", function SaveComponent_form_10_div_2_Template_input_blur_115_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r65.brutoSugeridoHasFocus = false);
    })("input", function SaveComponent_form_10_div_2_Template_input_input_115_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r66.onActualizarNetoFinal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "mat-form-field", 42)(117, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118, "Fecha Actualizacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](119, "input", 58)(120, "mat-datepicker-toggle", 59)(121, "mat-datepicker", null, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](122);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r14.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r14.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](37, _c0, ctx_r14.articulo ? "sm:w-50" : "sm:w-40"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r14.rubros);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](39, _c0, ctx_r14.articulo ? "sm:w-50" : "sm:w-40"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](41, _c0, ctx_r14.articulo ? "sm:w-50" : "sm:w-40"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](43, _c0, ctx_r14.articulo ? "sm:w-50" : "sm:w-40"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "10.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "21.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "27.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.form.get("flete_porcentaje").value !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.form.get("utilidad").value !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "10.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "21.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", "27.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r14.monedaSeleccionada === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r37)("min", ctx_r14.minDate)("max", ctx_r14.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("for", _r37);
  }
}
function SaveComponent_form_10_div_3_mat_form_field_11_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", unidad_medida_r70.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](unidad_medida_r70.descripcion);
  }
}
function SaveComponent_form_10_div_3_mat_form_field_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-form-field", 25)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Unidad de medida base");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SaveComponent_form_10_div_3_mat_form_field_11_mat_option_4_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r67.unidades_de_medida);
  }
}
function SaveComponent_form_10_div_3_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", rubro_r71.idrubro);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](rubro_r71.descripcion);
  }
}
const _c1 = function () {
  return ["sm:w-2/4"];
};
function SaveComponent_form_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "mat-form-field", 21)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-form-field", 21)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "C\u00F3digo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SaveComponent_form_10_div_3_mat_form_field_11_Template, 5, 1, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-form-field", 39)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Rubro");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, SaveComponent_form_10_div_3_mat_option_16_Template, 2, 2, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 25)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-select", 29)(21, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r15.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r15.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r15.rubros);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
  }
}
function SaveComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, SaveComponent_form_10_div_1_Template, 29, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, SaveComponent_form_10_div_2_Template, 123, 45, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, SaveComponent_form_10_div_3_Template, 25, 7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.selectedOption === "insumo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.selectedOption === "producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.selectedOption === "servicio");
  }
}
function SaveComponent_div_11_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 76)(1, "div", 77)(2, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_div_11_div_13_div_4_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r78);
      const file_r76 = restoredCtx.$implicit;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r77.removeFile("imagenes nuevas", file_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const file_r76 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r75.color_primario ? "" : ctx_r75.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx_r75.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx_r75.getFileTitle(file_r76));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", file_r76.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", file_r76.name, " (", ctx_r75.getFileSize(file_r76.size), ")");
  }
}
function SaveComponent_div_11_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 73)(1, "span", 74)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Nueva:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SaveComponent_div_11_div_13_div_4_Template, 7, 8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r73.selectedFiles);
  }
}
function SaveComponent_div_11_div_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 76)(1, "a", 82)(2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "mat-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_div_11_div_14_div_4_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r82);
      const imagen_r80 = restoredCtx.$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r81.removeFile("imagenes guardadas", imagen_r80));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-icon", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const imagen_r80 = ctx.$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r79.color_primario ? "" : ctx_r79.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx_r79.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("href", ctx_r79.urlBase + imagen_r80.name, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("matTooltip", imagen_r80.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r79.getFileNameFromUrl(imagen_r80.name));
  }
}
function SaveComponent_div_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 81)(1, "span", 74)(2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Guardada:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, SaveComponent_div_11_div_14_div_4_Template, 9, 7, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r74.imagenesProducto);
  }
}
function SaveComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 63)(1, "div", 64)(2, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_div_11_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r84);
      const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r72.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "input", 67, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function SaveComponent_div_11_Template_input_change_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r84);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r85.onAddAdjunto($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "small", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_div_11_Template_small_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r84);
      const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r72.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " (Max: 20 Mb.) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, SaveComponent_div_11_div_13_Template, 5, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, SaveComponent_div_11_div_14_Template, 5, 1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r3.color_primario ? "" : ctx_r3.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx_r3.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("accept", ctx_r3.validExtension);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.titleImagen ? "Agregar Imagen" : "Seleccione Imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.selectedFiles && ctx_r3.selectedFiles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.imagenesProducto && ctx_r3.imagenesProducto.length > 0);
  }
}
class SaveComponent {
  constructor(data, authService, _empresaService, articulosService, datePipe, alert, dialogRef) {
    this.data = data;
    this.authService = authService;
    this._empresaService = _empresaService;
    this.articulosService = articulosService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.columns = ['codigo_interno', 'descripcion', 'rubro', 'tipo', 'activo'];
    this.selectedOption = '';
    this.TipoArticulo = [];
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this.imagenesNuevas = [];
    this.urlBase = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stock.ver_imagen + '/';
    this.selectedFiles = [];
    this.validExtension = ['.png', '.jpg'];
    this.imagenesProducto = [];
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.calculoExacto = 0;
    this.articulo = this.data ? this.data : null;
    this.imagen = data?.imagen;
    this.title = this.articulo?.idarticulo ? 'Editar articulo' : 'Nuevo articulo';
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
  }
  ngOnInit() {
    setTimeout(() => {
      // Subscribe to empresa data
      this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
        this.color_primario = empresa.color_primario;
        this.color_secundario = empresa.color_secundario;
      });
      // Load empresa data
      this._empresaService.getEmpresa();
      this.getRubros();
      this.getUnidadesDeMedida();
      this.authService.verificarDatosEmpresaCargados().subscribe({
        next: loaded => {
          if (loaded) {
            this.getTipoArticulo();
          }
        }
      });
      this.subscribeAlert();
      this.monedaSeleccionada = this.form.get('moneda').value;
      this.form.get('neto_sugerido').valueChanges.subscribe(value => {
        if (value) {
          this.form.patchValue({
            'neto_final': value
          });
        }
      });
      if (this.imagen) {
        this.getImagenProducto();
      }
      ; //obtener las imagenes actuales de los productos
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
  getTipoArticulo() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.TipoArticulo = _this.authService.tiposArticuloPermitidos;
      // Verificar si solo hay un tipo de artículo permitido
      if (_this.TipoArticulo.length === 1) {
        // Obtener el tipo de artículo permitido
        const tipo = _this.TipoArticulo[0];
        // Seleccionar automáticamente ese tipo de artículo y cargar el formulario correspondiente
        if (tipo === 'insumo') {
          _this.toggleForm('insumo', 0);
        } else if (tipo === 'producto') {
          _this.toggleForm('producto', 1);
        } else if (tipo === 'servicio') {
          _this.toggleForm('servicio', 2);
        }
      } else if (_this.articulo && _this.articulo.tipo !== undefined) {
        // Verificar si estás editando un artículo
        // Si estás editando un artículo, selecciona automáticamente el checkbox correspondiente
        if (_this.articulo.tipo === 0) {
          _this.toggleForm('insumo', 0);
        } else if (_this.articulo.tipo === 1) {
          _this.toggleForm('producto', 1);
        } else if (_this.articulo.tipo === 2) {
          _this.toggleForm('servicio', 2);
        }
      }
    })();
  }
  toggleForm(option, tipo) {
    this.selectedOption = option;
    if (tipo === 0) {
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
        codigo_interno: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.codigo_interno : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.idrubro : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        unidad_medida: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.idunidadmedida : '', this.articulo ? null : _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        stock_minimo: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? parseFloat(this.articulo.stock_minimo) : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0.0)]),
        activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo?.activo ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required)
      });
    } else if (tipo === 1) {
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
        codigo_interno: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.codigo_interno : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        detalles: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.detalle : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        unidad_medida: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.idunidadmedida : '', this.articulo ? null : _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.idrubro : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        stock_minimo: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? parseFloat(this.articulo.stock_minimo) : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0.0)]),
        activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo?.activo ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        moneda: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo?.moneda ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        precio_costo: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.costo : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        iva_proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.iva_proveedor : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        flete_porcentaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.flete_porcentaje : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        flete_importe: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.flete_importe : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        utilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.utilidad : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        neto_sugerido: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.neto_sugerido : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        neto_final: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.neto_final : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        iva_porcentaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.iva_porcentaje : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        bruto_sugerido: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.bruto_sugerido : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        fecha_actualizacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo?.fecha_actualizacion ? this.datePipe.transform(this.articulo.fecha_actualizacion, 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])
      });
    } else if (tipo === 2) {
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
        codigo_interno: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.codigo_interno : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        unidad_medida: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.idunidadmedida : '', this.articulo ? null : _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo.idrubro : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required),
        activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(this.articulo ? this.articulo?.activo ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required)
      });
    }
  }
  /**
   * Esta funcion la utilizamos cuando queremos listar elementos en un selector.
   */
  getRubros() {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rubros = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this2.articulosService.getRubros());
      _this2.getDataRubros(rubros);
    })();
  }
  getDataRubros(data) {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.rubros = data.list;
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
  * Esta funcion la utilizamos cuando queremos listar elementos en un selector.
  */
  getUnidadesDeMedida() {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_de_medida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.firstValueFrom)(_this4.articulosService.getUnidadesDeMedida());
      _this4.getDataUnidadeDeMedida(unidades_de_medida);
    })();
  }
  getDataUnidadeDeMedida(data) {
    var _this5 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this5.unidades_de_medida = data.list;
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Esta funcion calcula el importe del flete
  */
  calcularImporteFlete() {
    const precioCosto = this.form.get('precio_costo').value;
    const ivaProveedor = this.form.get('iva_proveedor').value;
    let porcentajeFlete = this.form.get('flete_porcentaje').value;
    if (precioCosto && ivaProveedor && porcentajeFlete) {
      const fleteImporte = (precioCosto * (1 + ivaProveedor / 100) * (porcentajeFlete / 100)).toFixed(2);
      this.calculoExacto = parseInt(fleteImporte);
      this.form.patchValue({
        'flete_importe': this.calculoExacto
      });
    }
  }
  /**
   * Esta funcion calcula el porcentaje del flete
  */
  calcularPorcentajeFlete() {
    const precioCosto = this.form.get('precio_costo').value;
    const ivaProveedor = this.form.get('iva_proveedor').value;
    let importeFlete = this.form.get('flete_importe').value;
    if (precioCosto && ivaProveedor && importeFlete) {
      const fletePorcentaje = (importeFlete / (precioCosto * (1 + ivaProveedor / 100)) * 100).toFixed(2);
      this.form.patchValue({
        'flete_porcentaje': fletePorcentaje
      });
    }
  }
  /**
   * Esta funcion calcula el Neto Sugerido dependiendo del Precion de Costo, Iva Proveedor, Importe Flete y Utilidad
  */
  calcularNetoSugerido() {
    const precioCosto = this.form.get('precio_costo').value;
    const ivaProveedor = this.form.get('iva_proveedor').value;
    const importeFlete = this.form.get('flete_importe').value;
    const utilidad = this.form.get('utilidad').value;
    if (!isNaN(precioCosto) && !isNaN(ivaProveedor) && !isNaN(importeFlete) && !isNaN(utilidad)) {
      const neto_sugerido = ((Number(precioCosto) * (1 + Number(ivaProveedor) / 100) + Number(importeFlete)) * (1 + Number(utilidad) / 100)).toFixed(2);
      this.form.patchValue({
        'neto_sugerido': neto_sugerido
      });
    }
  }
  /**
   * Esta funcion calcula el Precio de Venta Sugerido que se lo puede vender dependiendo del Precio Neto Final y Iva
  */
  calcularPrecioVentaSugerido() {
    const netoFinal = this.form.get('neto_final').value;
    const ivaPorcentaje = this.form.get('iva_porcentaje').value;
    const bruto_sugerido = (netoFinal * (1 + ivaPorcentaje / 100)).toFixed(2);
    this.form.patchValue({
      'bruto_sugerido': bruto_sugerido
    });
  }
  actuaizarNetoFinal() {
    const brutoSugerido = this.form.get('bruto_sugerido').value;
    const ivaPorcentaje = this.form.get('iva_porcentaje').value;
    const neto_final = (brutoSugerido / (1 + ivaPorcentaje / 100)).toFixed(2);
    // Actualizar el valor del campo neto final en el formulario
    this.form.patchValue({
      'neto_final': neto_final
    });
  }
  /**
   * Estas funcione es para manejar cambios en los campos relevantes
  */
  onMonedaChange(event) {
    this.monedaSeleccionada = event.value;
  }
  onPorcentajeChange() {
    this.calcularImporteFlete();
    this.calcularNetoSugerido();
  }
  onImporteChange() {
    this.calcularPorcentajeFlete();
    this.calcularNetoSugerido();
  }
  onActualizarNetoFinal() {
    this.actuaizarNetoFinal();
  }
  onInputChangeNetoSugerido() {
    this.calcularImporteFlete();
    this.calcularPorcentajeFlete();
    this.calcularNetoSugerido();
  }
  onInputChangeVentaSugerido() {
    this.calcularPrecioVentaSugerido();
  }
  onEnter(event) {
    event.preventDefault();
    this.form.get('detalles').setValue(this.form.get('detalles').value + '\n');
  }
  autoResize(event) {
    const textarea = event.target;
    textarea.rows = textarea.value.split('\n').length + 1;
  }
  getImagenProducto() {
    var _this6 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this6.imagenesProducto.push({
          base64: _this6.urlBase + _this6.imagen,
          extension: _this6.obtenerExtension(_this6.imagen),
          name: _this6.imagen
        });
      } catch (error) {
        console.error('Error al obtener las imagen de Producto:', error);
      }
    })();
  }
  obtenerExtension(nombreArchivo) {
    // Encuentra la última aparición del punto en el nombre del archivo
    const ultimoPuntoIndex = nombreArchivo.lastIndexOf('.');
    // Si no se encuentra ningún punto o el punto está al final del nombre del archivo, no hay extensión
    if (ultimoPuntoIndex === -1 || ultimoPuntoIndex === nombreArchivo.length - 1) {
      return '';
    }
    // Devuelve la parte del nombre del archivo después del último punto (la extensión)
    return nombreArchivo.slice(ultimoPuntoIndex + 1);
  }
  getFileNameFromUrl(url) {
    // Divide la URL en partes utilizando el carácter "/"
    const parts = url.split('/');
    // El último elemento del array es el nombre del archivo
    const fileName = parts[parts.length - 1];
    return fileName;
  }
  getFileSize(size) {
    const bytes = size;
    const kilobytes = bytes / 1024;
    if (kilobytes < 1024) {
      return kilobytes.toFixed(2) + ' KB';
    } else {
      const megabytes = kilobytes / 1024;
      return megabytes.toFixed(2) + ' MB';
    }
  }
  getFileTitle(file) {
    return file.name + ' (' + this.getFileSize(file.size) + ')';
  }
  removeFile(imagenes, file) {
    switch (imagenes) {
      case 'imagenes nuevas':
        {
          const index = this.selectedFiles.indexOf(file);
          if (index !== -1) {
            this.selectedFiles.splice(index, 1);
            if (this.selectedFiles.length === 0) {
              this.titleImagen = false;
            }
          }
          const adjIndex = this.imagenesNuevas.findIndex(adj => adj.name === file.name);
          if (adjIndex !== -1) {
            this.imagenesNuevas.splice(adjIndex, 1);
          }
          // Reinicializar el campo de entrada de archivos
          const campoArchivo = "fileToUploadImagen";
          document.getElementById(campoArchivo).value = null;
        }
        break;
      case 'imagenes guardadas':
        {
          const adjIndex = this.imagenesProducto.findIndex(adj => adj.name === file.name);
          if (adjIndex !== -1) {
            this.imagenesProducto.splice(adjIndex, 1);
          }
        }
        break;
      default:
        {
          console.error('Ocurrió un error.');
        }
    }
  }
  onAddAdjunto(evento) {
    const imagenes = evento.target.files;
    if (!imagenes || imagenes.length === 0) return; // No se seleccionaron archivos
    if (this.imagenesNuevas.length > 0) {
      this.alert.error("Solo se puede agregar una imagen");
      return;
    }
    for (let i = 0; i < imagenes.length; i++) {
      const imagenProducto = imagenes[i];
      this.selectedFiles.push(imagenProducto);
      let tamaño = imagenProducto.size / 1024; // en Kb
      tamaño = Math.round(tamaño);
      const nombreArchivo = imagenProducto.name;
      const extension = nombreArchivo.split('.').pop();
      let imagenValida = true;
      if (tamaño <= 20480) {
        // Máximo: 20 Mb
        this.getBase64(imagenProducto).then(data => {
          let base64 = data.toString().split("base64,")[1];
          if (this.validExtension.includes('.' + extension)) {
            const adj = {
              name: nombreArchivo,
              extension: extension,
              base64: base64
            };
            // Verificar si el archivo ya está en la lista
            const existe = this.imagenesNuevas.some(a => a.extension === adj.extension && a.base64 === adj.base64);
            if (!existe) {
              this.imagenesNuevas.push(adj);
              this.titleImagen = true; // Cambiar a verdadero cuando se agrega un archivo
            }
          } else {
            this.alert.info("Formato de archivo no soportado");
            imagenValida = false;
          }
        });
      } else {
        this.alert.info("Tamaño de archivo superado: " + imagenProducto?.name + " - " + Math.trunc(tamaño / 1024) + " Mb");
        imagenValida = false;
      }
      if (!imagenValida) {
        // Si el archivo no es válido, limpiar el campo de entrada
        let campoArchivo;
        this.fileAdjuntoImagen = null;
        campoArchivo = "fileToUploadImagen";
        document.getElementById(campoArchivo).value = null;
      }
    }
  }
  getBase64(file) {
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    })();
  }
  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      let payload;
      if (this.selectedOption === 'insumo') {
        payload = {
          codigo_interno: this.form.get('codigo_interno').value.toUpperCase(),
          descripcion: this.form.get('descripcion').value,
          idrubro: this.form.get('rubro').value,
          stock_minimo: this.form.get('stock_minimo').value,
          activo: this.form.get('activo').value,
          tipo: 0
        };
      } else if (this.selectedOption === 'producto') {
        const fecha = this.form.get('fecha_actualizacion').value;
        // Se formatea la fecha nuevamente al formato deseado (YYYY-MM-DD hh:mm:ss)
        const fecha_actualizacion = this.datePipe.transform(`${fecha}`, 'yyyy-MM-dd');
        if (this.imagenesProducto.length > 0 && this.imagenesNuevas.length > 0) {
          this.alert.warning("Ya tiene una imagen cargada. Si desea agregar uno nueva, elimine la imagen existente.");
          return;
        }
        payload = {
          codigo_interno: this.form.get('codigo_interno').value.toUpperCase(),
          descripcion: this.form.get('descripcion').value,
          detalle: this.form.get('detalles').value,
          idrubro: this.form.get('rubro').value,
          stock_minimo: this.form.get('stock_minimo').value,
          activo: this.form.get('activo').value,
          tipo: 1,
          moneda: this.form.get('moneda').value,
          costo: this.form.get('precio_costo').value,
          iva_proveedor: this.form.get('iva_proveedor').value,
          flete_porcentaje: this.form.get('flete_porcentaje').value,
          flete_importe: this.form.get('flete_importe').value,
          utilidad: this.form.get('utilidad').value,
          neto_sugerido: this.form.get('neto_sugerido').value,
          neto_final: this.form.get('neto_final').value,
          iva_porcentaje: this.form.get('iva_porcentaje').value,
          bruto_sugerido: this.form.get('bruto_sugerido').value,
          fecha_actualizacion: fecha_actualizacion
        };
        if (this.imagenesNuevas.length > 0) {
          payload.imagen = this.imagenesNuevas[0].base64;
        } else {
          payload.imagen = null;
        }
      } else if (this.selectedOption === 'servicio') {
        payload = {
          codigo_interno: this.form.get('codigo_interno').value.toUpperCase(),
          descripcion: this.form.get('descripcion').value,
          idrubro: this.form.get('rubro').value,
          activo: this.form.get('activo').value,
          tipo: 2
        };
      }
      if (this.articulo?.idarticulo) {
        this.articulosService.updateArticulo(this.articulo.idarticulo, payload).subscribe({
          next: data => {
            if (data) {
              this.editadoExitosamente.emit();
              this.onCloseMenu();
            }
          }
        });
      } else {
        payload['idunidadmedida'] = this.form.get('unidad_medida').value;
        this.articulosService.saveArticulo(payload).subscribe({
          next: data => {
            if (data && this.imagenesNuevas.length > 0) {
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
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_5__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-articulos"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 16,
  vars: 13,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-auto", "sm:w-auto", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], ["class", "flex flex-row w-full h-full p-4", 4, "ngIf"], ["class", "form-menu", 3, "formGroup", 4, "ngIf"], ["class", "flex flex-col sm:flex-row items-center sm:pl-8 sm:pr-[120px] sm:pb-4 mt-1.5", 4, "ngIf"], [1, "w-full", "md:flex", "md:justify-end", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "flex", "flex-row", "w-full", "h-full", "p-4"], [3, "checked", "disabled", "change", 4, "ngIf"], [3, "checked", "disabled", "change"], [1, "form-menu", 3, "formGroup"], ["class", "flex flex-col xl:w-[650px] sm:w-full md:w-full h-full p-4", 3, "formGroup", 4, "ngIf"], ["class", "flex flex-col w-full h-full px-8 pt-4", 3, "formGroup", 4, "ngIf"], [1, "flex", "flex-col", "xl:w-[650px]", "sm:w-full", "md:w-full", "h-full", "p-4", 3, "formGroup"], [1, "flex", "gap-4", "mt-4", "flex-col", "sm:flex-row"], ["appearance", "outline", 1, "xl:w-full", "sm:w-full", "md:w-full"], ["matInput", "", "formControlName", "descripcion"], ["matInput", "", "formControlName", "codigo_interno"], ["appearance", "outline", "class", "w-full sm:w-1/2", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "sm:w-1/2"], ["formControlName", "rubro"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "formControlName", "stock_minimo"], ["formControlName", "activo"], [3, "value"], ["formControlName", "unidad_medida"], [1, "flex", "flex-col", "w-full", "h-full", "px-8", "pt-4", 3, "formGroup"], [1, "flex", "flex-wrap", "justify-between", "gap-4", "mt-1.5"], ["appearance", "outline", 1, "w-full", "sm:w-3/4"], ["appearance", "outline", 1, "flex-1", "w-1/4", "sm:w-44"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "detalles", 1, "max-h-[170px]", 3, "keydown.enter", "input"], ["appearance", "outline", "class", "w-full sm:w-40", 4, "ngIf"], ["appearance", "outline", 3, "ngClass"], ["matInput", "", "type", "number", "formControlName", "stock_minimo", 1, "input-suffix"], ["formControlName", "moneda", 3, "selectionChange"], ["appearance", "outline", 1, "w-full", "sm:w-40"], [1, "flex", "items-center"], ["class", "mr-1", 3, "display", 4, "ngIf"], ["matInput", "", "formControlName", "precio_costo", "type", "number", 3, "focus", "blur", "input"], ["formControlName", "iva_proveedor", 3, "selectionChange"], [3, "value", 4, "ngIf"], [1, "input-with-suffix"], ["matInput", "", "formControlName", "flete_porcentaje", "type", "number", 3, "focus", "blur", "input"], ["class", "suffix", 3, "display", 4, "ngIf"], ["matInput", "", "formControlName", "flete_importe", "type", "number", 3, "focus", "blur", "input"], ["matInput", "", "formControlName", "utilidad", "type", "number", 3, "focus", "blur", "input"], [1, "flex", "gap-4", "mt-1.5", "flex-col", "sm:flex-row"], ["matInput", "", "readonly", "", "formControlName", "neto_sugerido", "type", "number", 3, "focus", "blur"], ["matInput", "", "formControlName", "neto_final", "type", "number", 3, "focus", "blur", "input"], ["formControlName", "iva_porcentaje", 3, "selectionChange"], ["matInput", "", "formControlName", "bruto_sugerido", "type", "number", 3, "focus", "blur", "input"], ["matInput", "", "formControlName", "fecha_actualizacion", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "mr-1"], [1, "suffix"], [1, "flex", "flex-col", "sm:flex-row", "items-center", "sm:pl-8", "sm:pr-[120px]", "sm:pb-4", "mt-1.5"], [1, "flex", "flex-row", "items-center", "mr-4"], ["mat-icon-button", "", "type", "button", "matTooltip", "A\u00F1adir Imagen", 3, "click"], [1, "!text-white", "transform", "-rotate-45"], ["id", "fileToUploadImagen", "type", "file", 2, "display", "none", 3, "accept", "change"], ["fileInput", ""], [1, "text-muted", "text-lg", "ml-6", "cursor-pointer", 3, "click"], [1, "flex", "flex-col", "sm:flex-row", "justify-start", "gap-4"], ["class", "flex items-center flex-wrap gap-2 my-4 ml-4", 4, "ngIf"], ["class", "flex items-center flex-wrap gap-2 my-4", 4, "ngIf"], [1, "flex", "items-center", "flex-wrap", "gap-2", "my-4", "ml-4"], [1, "text-base"], ["class", "flex items-center justify-between px-2 rounded-full min-w-60 max-w-60", 3, "class", "background-color", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-between", "px-2", "rounded-full", "min-w-60", "max-w-60"], [1, "flex", "items-center", 3, "title"], [1, "max-w-[180px]", "truncate", "text-sm", "text-white", 3, "matTooltip"], ["mat-icon-button", "", "type", "button", "matTooltip", "Eliminar Imagen", 1, "!w-7", "!h-7", "!max-h-7", "!min-h-7", 3, "click"], [1, "icon-size-3", "text-white"], [1, "flex", "items-center", "flex-wrap", "gap-2", "my-4"], ["target", "_blank", 1, "flex", "items-center", 3, "href"], [1, "max-w-[160px]", "truncate", "text-sm", "text-white", 3, "matTooltip"], ["matTooltip", "Ver Imagen", 1, "ml-12", "text-lg", "justify-end", "text-white"], [1, "icon-size-4", "text-white"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, SaveComponent_div_9_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, SaveComponent_form_10_Template, 4, 4, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, SaveComponent_div_11_Template, 15, 8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_13_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.TipoArticulo.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedOption !== "");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedOption === "producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__.MatTooltip, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__.MatDatepickerToggle],
  styles: [".input-suffix[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.input-with-suffix[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-suffix[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 22px;\n  text-align: right;\n}\n.input-with-suffix[_ngcontent-%COMP%]   .suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\ntextarea[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  padding-bottom: 10px;\n}\n\n@media (max-width: 640px) {\n  .input-with-suffix[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding-left: 250px;\n    text-align: right;\n  }\n  .input-with-suffix[_ngcontent-%COMP%]   .suffix[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUVJO0lBQ0ksbUJBQUE7SUFDQSxpQkFBQTtFQUZOO0VBS0U7SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoic2F2ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1zdWZmaXgge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnB1dC13aXRoLXN1ZmZpeCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1ZmZpeCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4OyBcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuXHJcbiAgICAuaW5wdXQtd2l0aC1zdWZmaXggaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjUwcHg7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC13aXRoLXN1ZmZpeCAuc3VmZml4IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9hcnRpY3Vsb3MvY29tcG9uZW50cy9zYXZlL3NhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFESjs7QUFJQTtFQUVJO0lBQ0ksbUJBQUE7SUFDQSxpQkFBQTtFQUZOO0VBS0U7SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSwyQkFBQTtFQUhOO0FBQ0Y7QUFDQSw0OUNBQTQ5QyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1zdWZmaXgge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5pbnB1dC13aXRoLXN1ZmZpeCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1ZmZpeCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4OyBcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuXHJcbiAgICAuaW5wdXQtd2l0aC1zdWZmaXggaW5wdXQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjUwcHg7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dC13aXRoLXN1ZmZpeCAuc3VmZml4IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 99482:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/stock/stock.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockComponent": () => (/* binding */ StockComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/articulos.service */ 79955);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
















function StockComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "fuse-alert", 14);
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
function StockComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Deposito");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "total-row": a0
  };
};
function StockComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, articulo_r7.isTotalRow));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", articulo_r7.deposito_descripcion, " ");
  }
}
function StockComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function StockComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", articulo_r8.cantidad, " ");
  }
}
function StockComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 18);
  }
}
function StockComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 19);
  }
}
class StockComponent {
  constructor(data, articulosService, _empresaService, alert, dialogRef, confirm) {
    this.data = data;
    this.articulosService = articulosService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.confirm = confirm;
    this.columns = ['deposito', 'cantidad'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.articulo = this.data ? this.data : null;
    this.title = `Stock de: ${this.articulo.descripcion}`;
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.getArticulosStock();
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.timer)(100, 1800).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  getArticulosStock() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulo_stock = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.firstValueFrom)(_this.articulosService.getArticulosStockTable(_this.articulo.idarticulo));
      _this.getDataStockTable(articulo_stock);
    })();
  }
  getDataStockTable(data) {
    // Agrupar y ajustar los datos
    const adjusteData = this.groupAndAdjustData(data.list);
    // Calcular el total combinado
    let totalCantidad = adjusteData.reduce((total, item) => {
      const cantidadParts = item.cantidad.split(' + ');
      cantidadParts.forEach(part => {
        const match = part.match(/(\d+)\s*(.*)/);
        if (match) {
          const cantidad = parseInt(match[1]);
          total[match[2].trim()] = (total[match[2].trim()] || 0) + cantidad;
        }
      });
      return total;
    }, {});
    // Formatear el total para mostrarlo en la tabla
    const totalFormatted = Object.entries(totalCantidad).map(([um, cantidad]) => `${cantidad} ${um}`).join(' + ');
    // Agregar el total como último elemento si hay datos
    if (adjusteData.length > 0) {
      adjusteData.push({
        deposito_descripcion: 'Total',
        cantidad: totalFormatted,
        isTotalRow: true
      });
    } else {
      adjusteData.push({
        deposito_descripcion: '-',
        cantidad: 'No Hay Stock'
      });
    }
    // Asignar los datos al dataSource de MatTableDataSource
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(adjusteData);
  }
  groupAndAdjustData(data) {
    const groupedData = data.reduce((acc, articulo) => {
      if (articulo.stock !== '0') {
        const existing = acc.find(item => item.deposito_descripcion === articulo.deposito_descripcion);
        if (existing) {
          existing.cantidad += ` + ${articulo.stock} ${articulo.um || ''}`.trim();
        } else {
          acc.push({
            deposito_descripcion: articulo.deposito_descripcion,
            cantidad: `${articulo.stock} ${articulo.um || ''}`.trim()
          });
        }
      }
      return acc;
    }, []);
    // Ajuste para separar los valores concatenados con espacio
    groupedData.forEach(item => {
      item.cantidad = item.cantidad.replace(/\s*\+\s*/g, ' + ');
    });
    return groupedData;
  }
  onCloseMenu() {
    this.dialogRef.close(false);
  }
}
StockComponent.ɵfac = function StockComponent_Factory(t) {
  return new (t || StockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_1__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService));
};
StockComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: StockComponent,
  selectors: [["app-modal-stock"]],
  decls: 18,
  vars: 10,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-140", "sm:w-140", "sm:rounded-2xl", "overflow-y-auto", "shadow-lg", "overflow-hidden", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], ["mat-table", "", 1, "w-full", "mt-1", "mb-5", "px-4", "pr-2", "pl-2", 3, "dataSource"], ["matColumnDef", "deposito"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], ["mat-header-cell", ""], ["mat-cell", "", 3, "ngClass"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function StockComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function StockComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, StockComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "table", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, StockComponent_th_11_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, StockComponent_td_12_Template, 2, 4, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, StockComponent_th_14_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, StockComponent_td_15_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, StockComponent_tr_16_Template, 1, 0, "tr", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, StockComponent_tr_17_Template, 1, 0, "tr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_5__.FuseAlertComponent],
  styles: [".total-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzdG9jay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RhbC1yb3cge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9hcnRpY3Vsb3MvY29tcG9uZW50cy9zdG9jay9zdG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7QUFDQSxnVEFBZ1QiLCJzb3VyY2VzQ29udGVudCI6WyIudG90YWwtcm93IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 79955:
/*!**********************************************************************!*\
  !*** ./src/app/modules/stock/articulos/service/articulos.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticulosService": () => (/* binding */ ArticulosService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class ArticulosService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el servicio
   * - Esta funcion retorna los Articulos.
   * @returns Articulos
   */
  getArticulos(sort) {
    let f = '?';
    f += sort == 'desc' ? 'sort=-descripcion' : 'sort=descripcion';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_articulos}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token, subject.next({
        'list': resp.result,
        'totalPages': resp.headers.get('x-pagination-page-count'),
        'totalCount': resp.headers.get('x-pagination-total-count')
      });
    });
    return subject.asObservable();
  }
  /**
   * Funcion en el Servicio
   * @param articulo
   * @returns Crea un item nuevo
   */
  saveArticulo(articulo) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos}`, articulo);
  }
  /**
   * Funcion en el servicio
   * @param articulo
   * @returns Item actualizado actualizado
   */
  updateArticulo(idarticulo, articulo) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos}` + '/' + idarticulo, articulo);
  }
  /**
   * Funcion en el servicio
   * @param idarticulo
   * @returns Elimina un item
   */
  deleteArticulo(idarticulo) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos + '/' + idarticulo);
  }
  /**
   *
   * @param idarticulounidadmedida
   * @returns Elimina una Unidad de medida
   */
  deleteUnidadDeMedida(idarticulounidadmedida) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulo_unidad_medidas + '/' + idarticulounidadmedida);
  }
  /**
   *
   * @param unidad_de_medida
   * @returns Guarda una unidad de medida asociada al articulo
   */
  saveUnidadDeMedida(unidad_de_medida) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulo_unidad_medidas}`, unidad_de_medida);
  }
  /**
   * @param articulos
   * @returns Genera un reporte de etiquetas
   */
  reporteEtiqueta(articulos) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.reporte_etiqueta}`, articulos);
  }
  /**
   * Listamos los rubros para el selector del formulario de alta/modificacion
   * @returns Todos los rubros.
   */
  getRubros() {
    let f = '?filter[activo]=1';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.rubros}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        'list': resp.result
      });
    });
    return subject.asObservable();
  }
  /**
  * Funcion en el servicio
  * - Esta funcion retorna los unidades de medidas que tiene asociada un articulo.
  * @returns Unidades de medidas
  */
  getUnidadesDeMedidaTable(articulo) {
    let f = `?filter[idarticulo]=${articulo.idarticulo}`;
    f += '&expand=um&sort=factor&';
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulo_unidad_medidas}${f}`).subscribe(resp => {
      // this._authService.accessToken = resp.token;
      subject.next({
        'list': resp.result
      });
    });
    return subject.asObservable();
  }
  getArticulosStockTable(idarticulo) {
    let f = `?filter[idarticulo]=${idarticulo}`;
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_articulo_depositos}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        'list': resp.result
      });
    });
    return subject.asObservable();
  }
  /**
   * Listamos los valores para el selector del formulario de unidades de medida.
   * @returns
   */
  getUnidadesDeMedida() {
    let f = '?filter[activo]=1';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.unidad_medidas}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        'list': resp.result
      });
    });
    return subject.asObservable();
  }
}
ArticulosService.ɵfac = function ArticulosService_Factory(t) {
  return new (t || ArticulosService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
ArticulosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ArticulosService,
  factory: ArticulosService.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_articulos_articulos_module_ts.js.map