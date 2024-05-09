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
/* harmony import */ var _components_articulos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/articulos.component */ 4751);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 21820);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/articulos.service */ 79955);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal/modal.component */ 30136);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 18635);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);


























const routes = [{
  path: '',
  component: _components_articulos_component__WEBPACK_IMPORTED_MODULE_3__.ArticulosComponent
}];
class ArticulosModule {}
ArticulosModule.ɵfac = function ArticulosModule_Factory(t) {
  return new (t || ArticulosModule)();
};
ArticulosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: ArticulosModule
});
ArticulosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_service_articulos_service__WEBPACK_IMPORTED_MODULE_5__.ArticulosService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__.TablaDinamicaModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ArticulosModule, {
    declarations: [_components_articulos_component__WEBPACK_IMPORTED_MODULE_3__.ArticulosComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__.TablaDinamicaModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 21820);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.component */ 30136);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 18635);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/articulos.service */ 79955);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);






















class ArticulosComponent {
  constructor(_articulosService, _menuService, confirm, alert, dialogo, _searchService, router, _headerTextService) {
    this._articulosService = _articulosService;
    this._menuService = _menuService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource();
    this.column_params = ['codigo_interno', 'descripcion', 'descripcion_rubro', 'descripcion_tipo', 'activo', 'acciones'];
    this.headers = ['Código Interno', 'Descripción', 'Rubro', 'Tipo Articulo', 'Activo', ''];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['descripcion', 'codigo_interno'];
    this.filter = {
      activo: -1,
      tipo: -1
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stock.view_articulos + '?';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('');
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
      icono: 'square_foot',
      nombre_boton: "Unidad de medida",
      functionName: 'um'
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
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter.activo != -1 ? "filter[activo]=" + this.filter.activo : '';
          this.extraParams = this.filter.tipo != -1 ? "filter[tipo]=" + this.filter.tipo : '';
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
      case 'eliminar':
        this.deleteArticulo(event);
        break;
      case 'um':
        this.modalUnidadMedidas(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveArticulo() {
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
  updateArticulo(event) {
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
            alert("Este Artículo no puede eliminarse. Tiene elementos asociados.");
          }
        });
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
    }).afterClosed().subscribe({
      next: response => {
        if (response) {
          this.tabla.renderTabla();
        }
      }
    });
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
ArticulosComponent.ɵfac = function ArticulosComponent_Factory(t) {
  return new (t || ArticulosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_5__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_6__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_9__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__.HeaderTextService));
};
ArticulosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: ArticulosComponent,
  selectors: [["app-articulos"]],
  viewQuery: function ArticulosComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaComponent, 5);
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
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-8", "mt-2"], [1, "fixed", "right-10"], ["mat-icon-button", "", "type", "button", "matTooltip", "Crear Art\u00EDculo", 1, "mr-2", "ml-2", "bg-blue-500", "p-2", "rounded-full", "z-99999", 3, "click"], ["save", ""], [1, "text-white"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function ArticulosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function ArticulosComponent_Template_button_click_3_listener() {
        return ctx.saveArticulo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6)(8, "app-tabla-dinamica", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("functionEmitter", function ArticulosComponent_Template_app_tabla_dinamica_functionEmitter_8_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaComponent],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 69941);










class FilterMenuComponent {
  constructor(data, menuService) {
    this.data = data;
    this.menuService = menuService;
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(-1),
      tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(-1)
    });
    this.formFilters.patchValue(this.data.filter);
  }
  resetFilters() {
    this.formFilters.reset({
      activo: -1,
      tipo: -1
    });
  }
  onCloseMenu(data = null) {
    this.menuService.close(data);
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-articulos"]],
  decls: 41,
  vars: 9,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-bold", "text-gray-500", "text-base", "mt-4"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded", "min-w-64", "mt-2"], ["formControlName", "activo"], [3, "value"], [1, "fila-naranja", 3, "value"], [1, "fila-amarillo", 3, "value"], ["formControlName", "tipo"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-stroked-button", "", "color", "primary", 1, "w-full", "rounded-none", "md:w-28", "md:rounded-3xl", "hidden", "md:block", 3, "click"], [1, "text-gray-700", "font-bold"], ["mat-raised-button", "", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"]],
  template: function FilterMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Filtros");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_5_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_8_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "form", 6)(12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-select", 9)(16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Tipo Articulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-select", 13)(26, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Insumo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Servicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 14)(35, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_35_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "span", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_38_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 2);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9hcnRpY3Vsb3MvY29tcG9uZW50cy9maWx0ZXItbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_0__.fuseAnimations
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
/* harmony import */ var H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/articulos.service */ 79955);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 69941);



















function ModalComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unidad_medida_r9.idunidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unidad_medida_r9.descripcion, " ");
  }
}
function ModalComponent_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalComponent_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unidad_medida_r10.um.descripcion, " ");
  }
}
function ModalComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unidad_medida_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unidad_medida_r11.factor, " ");
  }
}
function ModalComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24)(1, "button", 3, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalComponent_td_33_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const unidad_medida_r12 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.deleteUnidadDeMedida(unidad_medida_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function ModalComponent_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 27);
  }
}
function ModalComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 28);
  }
}
class ModalComponent {
  constructor(data, articulosService, alert, dialogRef, confirm) {
    this.data = data;
    this.articulosService = articulosService;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.confirm = confirm;
    this.columns = ['descripcion', 'factor', 'acciones'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
    this.articulo = this.data ? this.data : null;
    this.title = `UM de: ${this.articulo.descripcion} `;
  }
  ngOnInit() {
    this.newForm();
    this.getUnidadesDeMedida();
    this.getUnidadesDeMedidaTable();
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      unidad_medida: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
      factor: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[0-9]*$')])
    });
  }
  /**
  * Esta funcion la utilizamos cuando queremos listar elementos en una tabla.
  */
  getUnidadesDeMedidaTable() {
    var _this = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_de_medida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.articulosService.getUnidadesDeMedidaTable(_this.articulo));
      _this.getDataUnidadesDeMedidasTable(unidades_de_medida);
    })();
  }
  getDataUnidadesDeMedidasTable(data) {
    var _this2 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.unidades_de_medida = data.list;
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(_this2.unidades_de_medida);
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
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_de_medida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this3.articulosService.getUnidadesDeMedida());
      _this3.getDataUnidadeDeMedida(unidades_de_medida);
    })();
  }
  getDataUnidadeDeMedida(data) {
    var _this4 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
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
              console.error('No se puede eliminar una UM con factor 1. Elimine las demas UM y vuelva a intentar.');
              this.alert.error("No puede borrarse UM con factor 1. Elimine las demas UM y vuelva a intentar");
              alert("No puede borrarse UM con factor 1. Elimine las demas UM y vuelva a intentar");
            } else {
              // Manejar la respuesta exitosa
              this.alert.success("Articulo eliminado con éxito.");
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
      return this.alert.warning('Revise Los Datos Ingresados');
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
              this.getUnidadesDeMedidaTable();
            } else {
              alert('La primera UM debe ser factor 1 y un articulo no puede tener 2 UM del mismo tipo.');
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
  return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_1__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_3__.FuseConfirmationService));
};
ModalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ModalComponent,
  selectors: [["app-modal-unidades-medidas"]],
  decls: 36,
  vars: 7,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-140", "sm:w-140", "sm:rounded-2xl", "overflow-y-auto", "shadow-lg", "overflow-hidden", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "shadow-lg", 3, "formGroup"], [1, "flex", "gap-3"], ["appearance", "outline", 1, "w-1/2"], ["formControlName", "unidad_medida"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "factor"], [1, "w-1/3", "pt-2", "text-center"], ["mat-mini-fab", "", "color", "primary", "aria-label", "icon", 1, "rounded-full", 3, "click"], [1, "px-4", "pr-2", "pl-2"], ["mat-table", "", 1, "w-full", "mt-1", "mb-5", "shadow-lg", 3, "dataSource"], ["matColumnDef", "descripcion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "factor"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "mat-form-field", 7)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Unidad de medida");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-select", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ModalComponent_mat_option_14_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-form-field", 7)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Factor");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11)(20, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_20_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13)(24, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ModalComponent_th_26_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ModalComponent_td_27_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ModalComponent_th_29_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ModalComponent_td_30_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ModalComponent_th_32_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ModalComponent_td_33_Template, 5, 0, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ModalComponent_tr_34_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ModalComponent_tr_35_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.um);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatMiniFabButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon],
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
/* harmony import */ var H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/articulos.service */ 79955);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);





















function SaveComponent_div_8_mat_checkbox_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SaveComponent_div_8_mat_checkbox_1_Template_mat_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.toggleForm("insumo", 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Insumo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", (ctx_r2.articulo == null ? null : ctx_r2.articulo.tipo) === 0);
  }
}
function SaveComponent_div_8_mat_checkbox_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SaveComponent_div_8_mat_checkbox_2_Template_mat_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.toggleForm("producto", 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", (ctx_r3.articulo == null ? null : ctx_r3.articulo.tipo) === 1);
  }
}
function SaveComponent_div_8_mat_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SaveComponent_div_8_mat_checkbox_3_Template_mat_checkbox_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.toggleForm("servicio", 2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Servicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", (ctx_r4.articulo == null ? null : ctx_r4.articulo.tipo) === 2);
  }
}
function SaveComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveComponent_div_8_mat_checkbox_1_Template, 2, 1, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SaveComponent_div_8_mat_checkbox_2_Template, 2, 1, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SaveComponent_div_8_mat_checkbox_3_Template, 2, 1, "mat-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.TipoArticulo.includes("insumo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.TipoArticulo.includes("producto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.TipoArticulo.includes("servicio"));
  }
}
function SaveComponent_form_9_div_1_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", rubro_r15.idrubro);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rubro_r15.descripcion);
  }
}
function SaveComponent_form_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "mat-form-field", 15)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 17)(6, "mat-form-field", 18)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "C\u00F3digo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 18)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Rubro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SaveComponent_form_9_div_1_mat_option_14_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 18)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Stock m\u00EDnimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 18)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-select", 23)(23, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r11.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r11.rubros);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
  }
}
function SaveComponent_form_9_div_2_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", rubro_r30.idrubro);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rubro_r30.descripcion);
  }
}
function SaveComponent_form_9_div_2_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_form_9_div_2_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "US");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_form_9_div_2_mat_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r19.articulo.iva_proveedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r19.articulo.iva_proveedor, "% ");
  }
}
function SaveComponent_form_9_div_2_span_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_form_9_div_2_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "US");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_form_9_div_2_ng_container_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function SaveComponent_form_9_div_2_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "US");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function SaveComponent_form_9_div_2_span_90_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_form_9_div_2_span_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "US");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_form_9_div_2_mat_option_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r26.articulo.iva_porcentaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r26.articulo.iva_porcentaje, "% ");
  }
}
function SaveComponent_form_9_div_2_span_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_form_9_div_2_span_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "US");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SaveComponent_form_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "mat-form-field", 25)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 26)(6, "mat-form-field", 27)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "C\u00F3digo Interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 28)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Rubro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SaveComponent_form_9_div_2_mat_option_14_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 27)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Stock m\u00EDnimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 30)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-select", 23)(23, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-form-field", 27)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Moneda");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-select", 31)(31, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "$(pesos)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "U$S(dolar)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 26)(36, "mat-form-field", 27)(37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Precio de Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, SaveComponent_form_9_div_2_span_39_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, SaveComponent_form_9_div_2_span_40_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 30)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "IVA Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, SaveComponent_form_9_div_2_mat_option_46_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "10.5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "21%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "27%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-form-field", 30)(56, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Flete (%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 36)(59, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function SaveComponent_form_9_div_2_Template_input_input_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-form-field", 27)(63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Flete (Importe)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, SaveComponent_form_9_div_2_span_65_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, SaveComponent_form_9_div_2_span_66_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function SaveComponent_form_9_div_2_Template_input_input_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r33.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "mat-form-field", 30)(69, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](70, "Utilidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 36)(72, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function SaveComponent_form_9_div_2_Template_input_input_72_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 26)(76, "div", 41)(77, "mat-label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Neto Sugerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 43)(80, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, SaveComponent_form_9_div_2_ng_container_81_Template, 2, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, SaveComponent_form_9_div_2_ng_container_82_Template, 2, 0, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "mat-form-field", 27)(88, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Precio Neto Final");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, SaveComponent_form_9_div_2_span_90_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, SaveComponent_form_9_div_2_span_91_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function SaveComponent_form_9_div_2_Template_input_input_92_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r35.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "mat-form-field", 30)(94, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "mat-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectionChange", function SaveComponent_form_9_div_2_Template_mat_select_selectionChange_96_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.onInputChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, SaveComponent_form_9_div_2_mat_option_97_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99, "0%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, "10.5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "21%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "27%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "mat-form-field", 27)(107, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Precio de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, SaveComponent_form_9_div_2_span_109_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](110, SaveComponent_form_9_div_2_span_110_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](111, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "mat-form-field", 27)(113, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Fecha Actualizacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](115, "input", 48)(116, "mat-datepicker-toggle", 49)(117, "mat-datepicker", null, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](118);
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r12.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r12.rubros);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "10.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "21.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "27.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r12.form.get("neto_sugerido").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.articulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "10.5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "21.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "27.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.form.get("moneda").value === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r29)("min", ctx_r12.minDate)("max", ctx_r12.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r29);
  }
}
function SaveComponent_form_9_div_3_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", rubro_r38.idrubro);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](rubro_r38.descripcion);
  }
}
function SaveComponent_form_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "mat-form-field", 15)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 17)(6, "mat-form-field", 18)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "C\u00F3digo interno");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-form-field", 18)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Rubro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, SaveComponent_form_9_div_3_mat_option_14_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 18)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-select", 23)(19, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Si");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r13.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r13.rubros);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", 1);
  }
}
function SaveComponent_form_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SaveComponent_form_9_div_1_Template, 27, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SaveComponent_form_9_div_2_Template, 119, 31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SaveComponent_form_9_div_3_Template, 23, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedOption === "insumo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedOption === "producto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.selectedOption === "servicio");
  }
}
class SaveComponent {
  constructor(data, authService, articulosService, datePipe, alert, dialogRef) {
    this.data = data;
    this.authService = authService;
    this.articulosService = articulosService;
    this.datePipe = datePipe;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.columns = ['codigo_interno', 'descripcion', 'rubro', 'tipo', 'activo'];
    this.selectedOption = '';
    this.TipoArticulo = [];
    this.articulo = this.data ? this.data : null;
    this.title = this.articulo?.idarticulo ? 'Editar articulo' : 'Nuevo articulo';
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
  }
  ngOnInit() {
    setTimeout(() => {
      this.getRubros();
      this.authService.verificarDatosEmpresaCargados().subscribe({
        next: loaded => {
          if (loaded) {
            this.getTipoArticulo();
          }
        }
      });
    });
  }
  getTipoArticulo() {
    var _this = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
        codigo_interno: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.codigo_interno : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.idrubro : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        stock_minimo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.stock_minimo : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0.0)]),
        activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo?.activo ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
      });
    } else if (tipo === 1) {
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
        codigo_interno: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.codigo_interno : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.idrubro : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        stock_minimo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.stock_minimo : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0.0)]),
        activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo?.activo ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        moneda: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo?.moneda ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        precio_costo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.costo : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        iva_proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.iva_proveedor : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        flete_porcentaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.flete_porcentaje : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        flete_importe: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.flete_importe : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        utilidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.utilidad : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        neto_sugerido: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.neto_sugerido : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        neto_final: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.neto_final : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        iva_porcentaje: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.iva_porcentaje : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        bruto_sugerido: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.bruto_sugerido : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        fecha_actualizacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo?.fecha_actualizacion ? this.datePipe.transform(this.articulo.fecha_actualizacion, 'yyyy-MM-dd') : this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
      });
    } else if (tipo === 2) {
      this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
        codigo_interno: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.codigo_interno : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo.idrubro : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.articulo ? this.articulo?.activo ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
      });
    }
  }
  /**
   * Esta funcion la utilizamos cuando queremos listar elementos en un selector.
   */
  getRubros() {
    var _this2 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rubros = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this2.articulosService.getRubros());
      _this2.getDataRubros(rubros);
    })();
  }
  getDataRubros(data) {
    var _this3 = this;
    return (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,H_51573I145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
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
  * Esta funcion calcula el importe del flete
  */
  calcularImporteFlete() {
    const precioCosto = this.form.get('precio_costo').value;
    const ivaProveedor = this.form.get('iva_proveedor').value;
    const porcentajeFlete = this.form.get('flete_porcentaje').value;
    const importeFlete = this.form.get('flete_importe').value;
    if (porcentajeFlete !== null && porcentajeFlete !== '') {
      // Calcular el importe del flete utilizando el porcentaje
      const flete = precioCosto * (1 + ivaProveedor / 100) * (porcentajeFlete / 100);
      this.form.patchValue({
        'flete_importe': flete
      });
    } else if (importeFlete !== null && importeFlete !== '') {
      // Si se ingresó un importe de flete, usar ese valor
      this.form.patchValue({
        'flete_porcentaje': null
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
    const neto_sugerido = ((precioCosto * (1 + ivaProveedor / 100) + importeFlete) * (1 + utilidad / 100)).toFixed(2);
    this.form.patchValue({
      'neto_sugerido': neto_sugerido
    });
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
  /**
   * Esta funcion es para manejar cambios en los campos relevantes
  */
  onInputChange() {
    this.calcularImporteFlete();
    this.calcularNetoSugerido();
    this.calcularPrecioVentaSugerido();
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      if (this.selectedOption === 'insumo') {
        this.articulo = {
          ...this.articulo,
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
        this.articulo = {
          ...this.articulo,
          codigo_interno: this.form.get('codigo_interno').value.toUpperCase(),
          descripcion: this.form.get('descripcion').value,
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
      } else if (this.selectedOption === 'servicio') {
        this.articulo = {
          ...this.articulo,
          codigo_interno: this.form.get('codigo_interno').value.toUpperCase(),
          descripcion: this.form.get('descripcion').value,
          idrubro: this.form.get('rubro').value,
          activo: this.form.get('activo').value,
          tipo: 2
        };
      }
      if (this.articulo.idarticulo) {
        this.articulosService.updateArticulo(this.articulo).subscribe({
          next: data => {
            if (data) {
              this.onCloseMenu();
            }
          }
        });
      } else {
        this.articulosService.saveArticulo(this.articulo).subscribe({
          next: data => {
            if (data) {
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
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_3__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-articulos"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 13,
  vars: 3,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-200", "sm:w-140", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "flex flex-row w-full h-full p-4", 4, "ngIf"], ["class", "form-menu p-4", 3, "formGroup", 4, "ngIf"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [1, "flex", "flex-row", "w-full", "h-full", "p-4"], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"], [1, "form-menu", "p-4", 3, "formGroup"], ["class", "flex flex-col w-full h-full p-4", 3, "formGroup", 4, "ngIf"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "descripcion"], [1, "flex", "gap-1"], ["appearance", "outline", 1, "w-1/2"], ["matInput", "", "formControlName", "codigo_interno"], ["formControlName", "rubro"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "formControlName", "stock_minimo"], ["formControlName", "activo"], [3, "value"], [1, "w-full"], [1, "flex", "gap-4", "mt-4"], [1, "w-1/2"], [1, "w-2/3"], ["matInput", "", "type", "number", "formControlName", "stock_minimo", 1, "input-suffix"], [1, "w-1/3"], ["formControlName", "moneda"], [4, "ngIf"], ["matInput", "", "formControlName", "precio_costo"], ["formControlName", "iva_proveedor"], [3, "value", 4, "ngIf"], [1, "input-with-suffix"], ["matInput", "", "formControlName", "flete_porcentaje", 3, "input"], [1, "suffix"], ["matInput", "", "formControlName", "flete_importe", 3, "input"], ["matInput", "", "formControlName", "utilidad", 3, "input"], [1, "flex", "flex-col", "items-center"], [1, "mb-2"], [1, "flex", "gap-1", "items-center", "mt-3"], [1, "text-xl", "font-bold", "text-black"], ["matInput", "", "formControlName", "neto_final", 3, "input"], ["formControlName", "iva_porcentaje", 3, "selectionChange"], ["matInput", "", "formControlName", "bruto_sugerido"], ["matInput", "", "formControlName", "fecha_actualizacion", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, SaveComponent_div_8_Template, 4, 3, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, SaveComponent_form_9_Template, 4, 4, "form", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7)(11, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_11_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.TipoArticulo.length > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedOption !== "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle],
  styles: [".input-suffix[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.input-with-suffix[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-with-suffix[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 22px;\n  text-align: right;\n}\n.input-with-suffix[_ngcontent-%COMP%]   .suffix[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBUiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXN1ZmZpeCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmlucHV0LXdpdGgtc3VmZml4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VmZml4IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7IFxyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9hcnRpY3Vsb3MvY29tcG9uZW50cy9zYXZlL3NhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjtBQUNJO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBUjtBQUNBLDQxQkFBNDFCIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXN1ZmZpeCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmlucHV0LXdpdGgtc3VmZml4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VmZml4IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHg7IFxyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
        'list': resp.result
        // 'totalPages': resp.headers.get('x-pagination-page-count'),
        // 'totalCount': resp.headers.get('x-pagination-total-count')
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
  updateArticulo(articulo) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos}` + '/' + articulo.idarticulo, articulo);
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
   * Listamos los rubros para el selector del formulario de alta/modificacion
   * @returns Todos los rubros.
   */
  getRubros() {
    let f = '?filter[activo]=1';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.rubros}${f}`).subscribe(resp => {
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