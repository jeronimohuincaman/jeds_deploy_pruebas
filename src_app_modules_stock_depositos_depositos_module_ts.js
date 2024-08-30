"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_stock_depositos_depositos_module_ts"],{

/***/ 86615:
/*!***************************************************************************!*\
  !*** ./src/app/modules/stock/depositos/components/depositos.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositosComponent": () => (/* binding */ DepositosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save/save.component */ 46748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 54002);
/* harmony import */ var _service_depositos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/depositos.service */ 46458);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 83677);




















class DepositosComponent {
  constructor(_depositosService, _empresaService, _menuService, confirm, alert, dialogo, _searchService, router, _headerTextService) {
    this._depositosService = _depositosService;
    this._empresaService = _empresaService;
    this._menuService = _menuService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableDataSource();
    this.headers = ['Descripcion', 'Activo', 'Acciones'];
    this.column_params = ['descripcion', 'activo', 'acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['descripcion'];
    this.filter = {
      activo: -1
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.stock.depositos + '?';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('');
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this._headerTextService.setTitulo(this.router);
    /**
     * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
     */
    this.funcionesObjeto = [{
      nombre_boton: "Editar",
      functionName: 'editar',
      iconoAccion: deposito => 'jedstion:editar',
      iconoAccionado: deposito => '',
      iconoDeshabilitado: deposito => ''
    }, {
      nombre_boton: "Eliminar",
      functionName: 'eliminar',
      iconoAccion: deposito => 'jedstion:eliminar',
      iconoAccionado: deposito => '',
      iconoDeshabilitado: deposito => ''
    }, {
      nombre_boton: "Stock",
      functionName: 'stock-deposito',
      iconoAccion: deposito => 'jedstion:vista_lista',
      iconoAccionado: deposito => '',
      iconoDeshabilitado: deposito => ''
    }];
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)()).subscribe(value => {
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
        this.updateDeposito(event);
        break;
      case 'eliminar':
        this.deleteDeposito(event);
        break;
      case 'stock-deposito':
        this.viewStockDeposito(event);
        break;
    }
  }
  /**
   * Esta funcion guarda un item
   */
  saveDeposito() {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      panelClass: 'ayuda-dialog'
    }).componentInstance.creadoExitosamente.subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
        this.alert.success('Depósito creado con éxito');
      }
    });
  }
  /**
   * Esta funcion modifica un item
   * @param event
   */
  updateDeposito(event) {
    this.dialogo.open(_save_save_component__WEBPACK_IMPORTED_MODULE_0__.SaveComponent, {
      data: event.params.data,
      panelClass: 'my-dialog',
      autoFocus: false
    }).componentInstance.editadoExitosamente.subscribe({
      next: () => {
        this.tabla.filters(this.filtroBusqueda);
        this.alert.success('Depósito editado con éxito');
      }
    });
  }
  /**
   * Esta funcion elimina un item
   * @param event
   */
  deleteDeposito(event) {
    this.confirm.open({
      title: "Eliminar Depósito " + event.params.data.descripcion,
      message: "¿Desea eliminar la Depósito: " + event.params.data.descripcion + "?",
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
        this._depositosService.deleteDeposito(event.params.data.iddeposito).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Depósito eliminado con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            this.alert.warning("Este Depósito no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  viewStockDeposito(event) {
    const id = event.params.data.iddeposito;
    this.router.navigate(['/depositos/', id]);
  }
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
DepositosComponent.ɵfac = function DepositosComponent_Factory(t) {
  return new (t || DepositosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_depositos_service__WEBPACK_IMPORTED_MODULE_4__.DepositosService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_6__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_7__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_8__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_9__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_10__.HeaderTextService));
};
DepositosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: DepositosComponent,
  selectors: [["app-depositos"]],
  viewQuery: function DepositosComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent, 5);
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
  decls: 12,
  vars: 15,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "fixed", "right-10"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], ["save", ""], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function DepositosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function DepositosComponent_Template_button_click_3_listener() {
        return ctx.saveDeposito();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "svg", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "path", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Agregar Dep\u00F3sito");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 9)(11, "app-tabla-dinamica", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("functionEmitter", function DepositosComponent_Template_app_tabla_dinamica_functionEmitter_11_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXBvc2l0b3MuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9kZXBvc2l0b3MvY29tcG9uZW50cy9kZXBvc2l0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 54002:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/stock/depositos/components/filter-menu/filter-menu.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMenuComponent": () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 69941);












class FilterMenuComponent {
  constructor(data, menuService, _empresaService) {
    this.data = data;
    this.menuService = menuService;
    this._empresaService = _empresaService;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(-1)
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
  // Este método es llamado cuando el componente es destruido
  ngOnDestroy() {
    // Emite un valor para cerrar todas las suscripciones
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__.EmpresaService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-depositos"]],
  decls: 29,
  vars: 19,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], ["formControlName", "activo"], [3, "value"], [1, "fila-naranja", 3, "value"], [1, "fila-amarillo", 3, "value"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-select", 9)(16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 13)(23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_23_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_26_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx.color_primario || "")("border", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9kZXBvc2l0b3MvY29tcG9uZW50cy9maWx0ZXItbWVudS9maWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_0__.fuseAnimations
  }
});


/***/ }),

/***/ 63932:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/stock/depositos/components/filter-stock-deposito/filter-stock-deposito.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterStockDepositoComponent": () => (/* binding */ FilterStockDepositoComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _service_depositos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/depositos.service */ 46458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 69941);















function FilterStockDepositoComponent_mat_option_30_Template(rf, ctx) {
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
class FilterStockDepositoComponent {
  constructor(data, menuService, _empresaService, _depositosService) {
    this.data = data;
    this.menuService = menuService;
    this._empresaService = _empresaService;
    this._depositosService = _depositosService;
    this.filterRubro = [];
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1),
      rubro: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(-1)
    });
    this.formFilters.patchValue(this.data.filter);
    this.getRubros();
  }
  resetFilters() {
    this.formFilters.reset({
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
      const rubros = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this._depositosService.getRubros());
      _this.filterRubro = rubros.list;
    })();
  }
  // Este método es llamado cuando el componente es destruido
  ngOnDestroy() {
    // Emite un valor para cerrar todas las suscripciones
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
FilterStockDepositoComponent.ɵfac = function FilterStockDepositoComponent_Factory(t) {
  return new (t || FilterStockDepositoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_2__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_depositos_service__WEBPACK_IMPORTED_MODULE_4__.DepositosService));
};
FilterStockDepositoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FilterStockDepositoComponent,
  selectors: [["app-filter-stock-deposito"]],
  decls: 38,
  vars: 22,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], ["formControlName", "tipo"], [3, "value"], ["formControlName", "rubro"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"]],
  template: function FilterStockDepositoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Filtros");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterStockDepositoComponent_Template_button_click_5_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "refresh");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterStockDepositoComponent_Template_button_click_8_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 6)(12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Tipo Articulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-select", 9)(16, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Insumo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Producto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Servicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Rubro");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-form-field", 8)(27, "mat-select", 11)(28, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Todos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, FilterStockDepositoComponent_mat_option_30_Template, 2, 2, "mat-option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 13)(32, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterStockDepositoComponent_Template_button_click_32_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterStockDepositoComponent_Template_button_click_35_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Filtrar");
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
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItc3RvY2stZGVwb3NpdG8uY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9kZXBvc2l0b3MvY29tcG9uZW50cy9maWx0ZXItc3RvY2stZGVwb3NpdG8vZmlsdGVyLXN0b2NrLWRlcG9zaXRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3TEFBd0wiLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 46748:
/*!***************************************************************************!*\
  !*** ./src/app/modules/stock/depositos/components/save/save.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveComponent": () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _service_depositos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/depositos.service */ 46458);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);


















function SaveComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fuse-alert", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", ctx_r0._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r0.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0._alertConfig.message, " ");
  }
}
class SaveComponent {
  constructor(data, depositosService, _empresaService, alert, dialogRef) {
    this.data = data;
    this.depositosService = depositosService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.columns = ['nombre', 'activo', 'acciones'];
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.deposito = this.data ? this.data : null;
    this.title = this.deposito?.iddeposito ? 'Editar depósito' : 'Nuevo depósito';
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.newForm();
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
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.deposito ? this.deposito.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(this.deposito ? this.deposito?.activo ? 1 : 0 : '', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
      default: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required)
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      const payload = {
        ...this.deposito,
        descripcion: this.form.get('descripcion').value,
        activo: this.form.get('activo').value,
        default: this.form.get('default').value
      };
      if (this.deposito.iddeposito) {
        this.depositosService.updateDeposito(payload).subscribe({
          next: data => {
            if (data) {
              this.editadoExitosamente.emit();
              this.onCloseMenu();
            }
          }
        });
      } else {
        this.depositosService.saveDeposito(payload).subscribe({
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
  return new (t || SaveComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_depositos_service__WEBPACK_IMPORTED_MODULE_0__.DepositosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_1__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef));
};
SaveComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SaveComponent,
  selectors: [["app-save-depositos"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  decls: 34,
  vars: 15,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "md:min-w-140", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "bg-white", "shadow-sm", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "descripcion"], ["formControlName", "activo"], [3, "value"], ["formControlName", "default"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SaveComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6)(10, "mat-form-field", 7)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 7)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-select", 9)(18, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 7)(23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Dep\u00F3sito Predeterminado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-select", 11)(26, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 12)(31, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_31_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYXZlLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9kZXBvc2l0b3MvY29tcG9uZW50cy9zYXZlL3NhdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdLQUFnSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 58191:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/stock/depositos/components/stock-deposito/stock-deposito.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StockDepositoComponent": () => (/* binding */ StockDepositoComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _filter_stock_deposito_filter_stock_deposito_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filter-stock-deposito/filter-stock-deposito.component */ 63932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 69941);















class StockDepositoComponent {
  constructor(_empresaService, router, _headerTextService, _searchService, _menuService, dialogo, route) {
    this._empresaService = _empresaService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.dialogo = dialogo;
    this.route = route;
    this.articulos_list = [];
    this.headers = ['Código interno', 'Descripción', 'Rubro', 'Tipo Artículo', 'Stock Minimo', 'Stock'];
    this.columns = ['codigo_interno', 'descripcion', 'rubro', 'descripcion_tipo', 'stock_minimo', 'stock'];
    this.column_params = ['codigo_interno', 'descripcion', 'descripcion_rubro', 'descripcion_tipo', 'stock_minimo', 'stock'];
    this.filtersLike = ['descripcion', 'codigo_interno'];
    this.funcionesObjeto = null;
    this.extraParams = '';
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_stock_articulo_depositos + '?filter[deposito]=' + +this.route.snapshot.paramMap.get('id');
    this.default_color = 'border-primary text-primary';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    this.filtroBusqueda = '';
    this.filter = {
      tipo: -1,
      rubro: -1
    };
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this._headerTextService.setTitulo(router);
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.distinctUntilChanged)()).subscribe(value => {
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
    this._menuService.open(_filter_stock_deposito_filter_stock_deposito_component__WEBPACK_IMPORTED_MODULE_2__.FilterStockDepositoComponent, origin._elementRef, {
      filter: this.filter
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter?.tipo != -1 ? "filter[tipo_articulo]=" + this.filter.tipo : '';
          this.extraParams += this.filter?.rubro != -1 ? "&filter[idrubro]=" + this.filter.rubro : '';
          this.tabla.filters(this.filtroBusqueda);
          // this._searchService.getSearchInput().setValue(this._tabsServices.getFiltroBuscadorPedido());
        }
      }
    });
  }

  volverPaginaAnterior() {
    this.router.navigate(['/depositos']);
  }
  // Este método es llamado cuando el componente es destruido
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
StockDepositoComponent.ɵfac = function StockDepositoComponent_Factory(t) {
  return new (t || StockDepositoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_5__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_6__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute));
};
StockDepositoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: StockDepositoComponent,
  selectors: [["app-stock-deposito"]],
  viewQuery: function StockDepositoComponent_Query(rf, ctx) {
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
  decls: 16,
  vars: 22,
  consts: [[1, "w-full", "flex", "flex-col", "relative", "mt-4"], [1, "flex", "justify-start", "sm:mb-0", "mx-4"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "w-full", "!border", "border-solid", "md:w-28", 3, "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2", "text-lg", "font-normal"], [1, "fixed", "right-10", "flex", "space-x-4"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg"], ["save", ""], [1, "flex", "items-center"], ["width", "38", "height", "38", "viewBox", "0 0 38 38", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M25.7121 10.7121H15.7121C14.7955 10.7121 14.0455 11.4621 14.0455 12.3788V22.3788C14.0455 23.2955 14.7955 24.0455 15.7121 24.0455H25.7121C26.6288 24.0455 27.3788 23.2955 27.3788 22.3788V12.3788C27.3788 11.4621 26.6288 10.7121 25.7121 10.7121ZM25.7121 22.3788H15.7121V12.3788H25.7121V22.3788ZM12.3788 14.0455H10.7121V25.7121C10.7121 26.6288 11.4621 27.3788 12.3788 27.3788H24.0455V25.7121H12.3788V14.0455ZM22.3788 19.0455V16.5455C22.3788 16.0871 22.0038 15.7121 21.5455 15.7121H19.8788V19.8788H21.5455C22.0038 19.8788 22.3788 19.5038 22.3788 19.0455ZM20.7121 16.5455H21.5455V19.0455H20.7121V16.5455ZM24.0455 18.2121H24.8788V17.3788H24.0455V16.5455H24.8788V15.7121H23.2121V19.8788H24.0455V18.2121ZM17.3788 18.2121H18.2121C18.6705 18.2121 19.0455 17.8371 19.0455 17.3788V16.5455C19.0455 16.0871 18.6705 15.7121 18.2121 15.7121H16.5455V19.8788H17.3788V18.2121ZM17.3788 16.5455H18.2121V17.3788H17.3788V16.5455Z", "fill", "#currentColor"], [1, "ml-2", "text-lg", "mt-0.5", "hidden", "md:inline"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams"]],
  template: function StockDepositoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function StockDepositoComponent_Template_button_click_2_listener() {
        return ctx.volverPaginaAnterior();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Volver");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 5)(7, "button", 6, 7)(9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "svg", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "path", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Exportar Stock");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-tabla-dinamica", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9jay1kZXBvc2l0by5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zdG9jay9kZXBvc2l0b3MvY29tcG9uZW50cy9zdG9jay1kZXBvc2l0by9zdG9jay1kZXBvc2l0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 32556:
/*!*************************************************************!*\
  !*** ./src/app/modules/stock/depositos/depositos.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositosModule": () => (/* binding */ DepositosModule)
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
/* harmony import */ var _components_depositos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/depositos.component */ 86615);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 46748);
/* harmony import */ var _service_depositos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/depositos.service */ 46458);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 54002);
/* harmony import */ var _components_stock_deposito_stock_deposito_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stock-deposito/stock-deposito.component */ 58191);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ 86907);
/* harmony import */ var _components_filter_stock_deposito_filter_stock_deposito_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/filter-stock-deposito/filter-stock-deposito.component */ 63932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);























// import { PermisoGuard } from '@core/auth/guards/permiso.guard';




const routes = [{
  path: '',
  component: _components_depositos_component__WEBPACK_IMPORTED_MODULE_3__.DepositosComponent
}, {
  path: ':id',
  component: _components_stock_deposito_stock_deposito_component__WEBPACK_IMPORTED_MODULE_8__.StockDepositoComponent,
  data: {
    title: 'Stock por depósito'
  }
  // canActivate: [PermisoGuard],
}];

class DepositosModule {}
DepositosModule.ɵfac = function DepositosModule_Factory(t) {
  return new (t || DepositosModule)();
};
DepositosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: DepositosModule
});
DepositosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [_service_depositos_service__WEBPACK_IMPORTED_MODULE_5__.DepositosService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DepositosModule, {
    declarations: [_components_depositos_component__WEBPACK_IMPORTED_MODULE_3__.DepositosComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_7__.FilterMenuComponent, _components_stock_deposito_stock_deposito_component__WEBPACK_IMPORTED_MODULE_8__.StockDepositoComponent, _components_filter_stock_deposito_filter_stock_deposito_component__WEBPACK_IMPORTED_MODULE_9__.FilterStockDepositoComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_6__.TablaDinamicaModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__.MatPaginatorModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 46458:
/*!**********************************************************************!*\
  !*** ./src/app/modules/stock/depositos/service/depositos.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositosService": () => (/* binding */ DepositosService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class DepositosService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  /**
   * Funcion en el servicio
   * - Esta funcion retorna los Depositos.
   * @returns Depositos
   */
  getDepositos(sort) {
    let f = '?';
    f += sort == 'desc' ? 'sort=-descripcion' : 'sort=descripcion';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.depositos}${f}`).subscribe(resp => {
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
   * @param deposito
   * @returns Un deposito nuevo
   */
  saveDeposito(deposito) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.depositos}`, deposito);
  }
  /**
   * Funcion en el servicio
   * @param deposito
   * @returns Deposito actualizado
   */
  updateDeposito(deposito) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.depositos}` + '/' + deposito.iddeposito, deposito);
  }
  /**
   * Funcion en el servicio
   * @param iddeposito
   * @returns Elimina el deposito
   */
  deleteDeposito(iddeposito) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.depositos + '/' + iddeposito);
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
}
DepositosService.ɵfac = function DepositosService_Factory(t) {
  return new (t || DepositosService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
DepositosService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: DepositosService,
  factory: DepositosService.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_stock_depositos_depositos_module_ts.js.map