"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_articulos_articulos_module_ts"],{

/***/ 42635:
/*!*************************************************************!*\
  !*** ./src/app/modules/stock/articulos/articulos.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticulosModule: () => (/* binding */ ArticulosModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/toolbar */ 52484);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _components_articulos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/articulos.component */ 25795);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 75969);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/articulos.service */ 60052);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal/modal.component */ 64566);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 81780);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 66897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;

























const routes = [{
  path: '',
  component: _components_articulos_component__WEBPACK_IMPORTED_MODULE_3__.ArticulosComponent
}];
class ArticulosModule {}
_class = ArticulosModule;
_class.ɵfac = function ArticulosModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [_service_articulos_service__WEBPACK_IMPORTED_MODULE_5__.ArticulosService, _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__.TablaDinamicaModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ArticulosModule, {
    declarations: [_components_articulos_component__WEBPACK_IMPORTED_MODULE_3__.ArticulosComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_17__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_20__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_21__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_8__.TablaDinamicaModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule]
  });
})();

/***/ }),

/***/ 25795:
/*!***************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/articulos.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticulosComponent: () => (/* binding */ ArticulosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 50655);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 53317);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 75969);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/modal.component */ 64566);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 77055);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 81780);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/articulos.service */ 60052);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/common/search/search.service */ 70363);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 31123);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
var _class;






















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
    this.column_params = ['codigo_interno', 'descripcion', 'rubro.descripcion', 'stock_minimo', 'activo', 'acciones'];
    this.headers = ['Código Interno', 'Descripción', 'Rubro', 'Stock Mínimo', 'Activo', ''];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['descripcion'];
    this.filter = {
      activo: -1
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.stock.articulos + '?' + 'expand=rubro&pagination=1&per-page=5&page=1';
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
_class = ArticulosComponent;
_class.ɵfac = function ArticulosComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_5__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_6__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_9__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__.HeaderTextService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: _class,
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
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 81780:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/filter-menu/filter-menu.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterMenuComponent: () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/animations */ 94748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
var _class;










class FilterMenuComponent {
  constructor(data, menuService) {
    this.data = data;
    this.menuService = menuService;
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(-1)
    });
    this.formFilters.patchValue(this.data.filter);
  }
  resetFilters() {
    this.formFilters.reset({
      activo: -1
    });
  }
  onCloseMenu(data = null) {
    this.menuService.close(data);
  }
}
_class = FilterMenuComponent;
_class.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-filter-menu-articulos"]],
  decls: 29,
  vars: 5,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-bold", "text-gray-500", "text-base", "mt-4"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded", "min-w-64", "mt-2"], ["formControlName", "activo"], [3, "value"], [1, "fila-naranja", 3, "value"], [1, "fila-amarillo", 3, "value"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-stroked-button", "", "color", "primary", 1, "w-full", "rounded-none", "md:w-28", "md:rounded-3xl", "hidden", "md:block", 3, "click"], [1, "text-gray-700", "font-bold"], ["mat-raised-button", "", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 13)(23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_23_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_26_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Filtrar");
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
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_0__.fuseAnimations
  }
});


/***/ }),

/***/ 64566:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/modal/modal.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalComponent: () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/articulos.service */ 60052);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 86515);

var _class;


















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
function ModalComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Unidad de Medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalComponent_td_26_Template(rf, ctx) {
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
function ModalComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Factor");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalComponent_td_29_Template(rf, ctx) {
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
function ModalComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ModalComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24)(1, "button", 3, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalComponent_td_32_Template_button_click_1_listener() {
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
function ModalComponent_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 27);
  }
}
function ModalComponent_tr_34_Template(rf, ctx) {
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
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_de_medida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this.articulosService.getUnidadesDeMedidaTable(_this.articulo));
      _this.getDataUnidadesDeMedidasTable(unidades_de_medida);
    })();
  }
  getDataUnidadesDeMedidasTable(data) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
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
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidades_de_medida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.firstValueFrom)(_this3.articulosService.getUnidadesDeMedida());
      _this3.getDataUnidadeDeMedida(unidades_de_medida);
    })();
  }
  getDataUnidadeDeMedida(data) {
    var _this4 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
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
_class = ModalComponent;
_class.ɵfac = function ModalComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_1__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_3__.FuseConfirmationService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-modal-unidades-medidas"]],
  decls: 35,
  vars: 7,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-140", "sm:w-140", "sm:rounded-2xl", "overflow-y-auto", "shadow-lg", "overflow-hidden", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "shadow-lg", 3, "formGroup"], [1, "flex", "gap-3"], ["appearance", "outline", 1, "w-1/2"], ["formControlName", "unidad_medida"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "factor"], [1, "w-1/3", "pt-2", "text-center"], ["mat-raised-button", "", "color", "accent", 1, "rounded-full", 3, "click"], [1, "px-4", "pr-2", "pl-2"], ["mat-table", "", 1, "w-full", "mt-1", "mb-5", "shadow-lg", 3, "dataSource"], ["matColumnDef", "descripcion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "factor"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " + ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 13)(23, "table", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ModalComponent_th_25_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ModalComponent_td_26_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, ModalComponent_th_28_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ModalComponent_td_29_Template, 2, 1, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](30, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, ModalComponent_th_31_Template, 2, 0, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ModalComponent_td_32_Template, 5, 0, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, ModalComponent_tr_33_Template, 1, 0, "tr", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ModalComponent_tr_34_Template, 1, 0, "tr", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.um);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 75969:
/*!***************************************************************************!*\
  !*** ./src/app/modules/stock/articulos/components/save/save.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_articulos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/articulos.service */ 60052);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 86515);

var _class;















function SaveComponent_mat_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rubro_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", rubro_r1.idrubro);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](rubro_r1.descripcion);
  }
}
class SaveComponent {
  constructor(data, articulosService, alert, dialogRef) {
    this.data = data;
    this.articulosService = articulosService;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.columns = ['codigo_interno', 'descripcion', 'rubro', 'stock_minimo', 'activo'];
    this.articulo = this.data ? this.data : null;
    this.title = this.articulo?.idarticulo ? 'Editar articulo' : 'Nuevo articulo';
  }
  ngOnInit() {
    this.newForm();
    this.getRubros();
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      codigo_interno: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.articulo ? this.articulo.codigo_interno : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.articulo ? this.articulo.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.articulo ? this.articulo.idrubro : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
      stock_minimo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.articulo ? this.articulo.stock_minimo : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0.0)]),
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.articulo ? this.articulo?.activo ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
  }
  /**
   * Esta funcion la utilizamos cuando queremos listar elementos en un selector.
   */
  getRubros() {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const rubros = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.articulosService.getRubros());
      _this.getDataRubros(rubros);
    })();
  }
  getDataRubros(data) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.rubros = data.list;
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      this.articulo = {
        ...this.articulo,
        codigo_interno: this.form.get('codigo_interno').value.toUpperCase(),
        descripcion: this.form.get('descripcion').value,
        idrubro: this.form.get('rubro').value,
        stock_minimo: this.form.get('stock_minimo').value,
        activo: this.form.get('activo').value
      };
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
_class = SaveComponent;
_class.ɵfac = function SaveComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_articulos_service__WEBPACK_IMPORTED_MODULE_1__.ArticulosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-save-articulos"]],
  decls: 39,
  vars: 5,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-140", "sm:w-140", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "descripcion"], [1, "flex", "gap-1"], ["appearance", "outline", 1, "w-1/2"], ["matInput", "", "formControlName", "codigo_interno"], ["formControlName", "rubro"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "number", "formControlName", "stock_minimo"], ["formControlName", "activo"], [3, "value"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "w-full", "bg-primary", "rounded-none", "md:w-28", "md:rounded-3xl", "py-8", "md:py-0", 3, "click"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 5)(9, "mat-form-field", 6)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8)(14, "mat-form-field", 9)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "C\u00F3digo interno");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-form-field", 9)(19, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Rubro");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SaveComponent_mat_option_22_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8)(24, "mat-form-field", 9)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Stock m\u00EDnimo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-form-field", 9)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-select", 14)(32, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 16)(37, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_37_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rubros);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 60052:
/*!**********************************************************************!*\
  !*** ./src/app/modules/stock/articulos/service/articulos.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticulosService: () => (/* binding */ ArticulosService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 54855);
var _class;





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
    let f = '?expand=rubro&';
    f += sort == 'desc' ? 'sort=-descripcion' : 'sort=descripcion';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos}${f}`).subscribe(resp => {
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
_class = ArticulosService;
_class.ɵfac = function ArticulosService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_articulos_articulos_module_ts.js.map