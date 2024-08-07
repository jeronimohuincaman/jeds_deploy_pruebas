"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["default-src_app_shared_components_tabla-dinamica_tabla-dinamica_module_ts"],{

/***/ 27954:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/tabla-dinamica/services/tabla-dinamica.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaDinamicaService": () => (/* binding */ TablaDinamicaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);




class TablaDinamicaService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  // private _providerbase: string = environment.baseRest + '/' ;
  /**
   *
   * @param endpoint La url completa del servicio utilizado para obtener datos que se usaran en la tabla.
   * @param filter
   * @returns
   */
  getData(endpoint, filter) {
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.http.get(`${endpoint}${filter}`, {
      observe: 'response'
    }).subscribe(resp => {
      if (resp.body.token) this._authService.accessToken = resp.body.token;
      subject.next({
        'data': resp.body,
        'totalPages': resp.headers.get('X-Pagination-Page-Count'),
        'totalCount': resp.headers.get('X-Pagination-Total-Count')
      });
    });
    return subject.asObservable();
  }
}
TablaDinamicaService.ɵfac = function TablaDinamicaService_Factory(t) {
  return new (t || TablaDinamicaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
TablaDinamicaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: TablaDinamicaService,
  factory: TablaDinamicaService.ɵfac,
  providedIn: 'root'
});


/***/ }),

/***/ 71549:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/tabla-dinamica/tabla-dinamica.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaDinamicaComponent": () => (/* binding */ TablaDinamicaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 86907);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _services_tabla_dinamica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tabla-dinamica.service */ 27954);
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/user/user.service */ 37495);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/activo.pipe */ 77920);


















function TablaDinamicaComponent_ng_container_3_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 14)(1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TablaDinamicaComponent_ng_container_3_ng_container_1_th_1_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.seleccionarTodos($event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r9.allSelected);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16)(1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TablaDinamicaComponent_ng_container_3_ng_container_1_td_2_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15);
      const element_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.seleccionarElemento(element_r13, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", element_r13.selected);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_container_1_th_1_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_container_1_td_2_Template, 2, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r16.columnsNames[i_r4], " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16)(1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "activoPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r17.booleanParams.includes(column_r3) ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 1, element_r19[column_r3], column_r3) : ctx_r17.parse(element_r19, column_r3), "");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_container_2_th_1_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_container_2_td_2_Template, 4, 4, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_th_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r21.columnsNames[i_r4], " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_2_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 28);
  }
  if (rf & 2) {
    const accion_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("svgIcon", accion_r26.icono);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_2_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 29);
  }
  if (rf & 2) {
    const accion_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("svgIcon", accion_r26.icono(element_r24));
  }
}
const _c0 = function (a0) {
  return {
    "bg-primary text-center": a0
  };
};
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_2_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const accion_r26 = restoredCtx.$implicit;
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.emitFunction(accion_r26.functionName, element_r24, _r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_2_mat_icon_2_Template, 1, 1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_2_mat_icon_3_Template, 1, 1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accion_r26 = ctx.$implicit;
    const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-icon-button", accion_r26.type !== "button")("mat-button", accion_r26.type === "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", accion_r26.extra ? accion_r26.nombre_boton(element_r24) : accion_r26.nombre_boton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", accion_r26.disabled && accion_r26.disabled(element_r24))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, accion_r26.type == "button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !accion_r26.extra);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", accion_r26.extra);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", accion_r26.type === "button" ? accion_r26.nombre_boton : "", " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 21)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_2_Template, 5, 12, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r22.functions);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TablaDinamicaComponent_ng_container_3_ng_template_3_th_0_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_Template, 3, 1, "td", 20);
  }
}
function TablaDinamicaComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_container_1_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_container_2_Template, 3, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TablaDinamicaComponent_ng_container_3_ng_template_3_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matColumnDef", column_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", column_r3 === "seleccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", column_r3 != "seleccion" && column_r3 != "acciones")("ngIfElse", _r7);
  }
}
function TablaDinamicaComponent_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 30);
  }
}
function TablaDinamicaComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 31);
  }
}
class TablaDinamicaComponent {
  // * para que el padre te diga cuando recargar la tabla
  eventoUpdate() {
    /*
    en el componente padre:
    -declarar @ViewChild(TablaDinamicaComponent) tabla: TablaDinamicaComponent;
    -llamar a esta funcion con this.tabla.eventoUpdate();
    */
    this.renderTabla();
  }
  constructor(jedsMenu, service, data, menuService, _userService) {
    // this.dataSource = new MatTableDataSource<any>(this.parentData);
    // this.paginator.length = this.totalRows;
    // this.user = this._userService.getCurrentUser();
    this.jedsMenu = jedsMenu;
    this.service = service;
    this.data = data;
    this.menuService = menuService;
    this._userService = _userService;
    this.allSelected = false;
    this.seleccionados = new Set();
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.filterLikeCache = '';
    this.PageIndex = 0;
    this.Pagesize = 10;
    this.pageSizeOptions = [5, 10, 25, 50, 100];
    this.cache = true;
    //------------------------- Filters
    this.filterComponent = undefined;
    /**
     * Filtros concatenados
     */
    this.filterLikecomponent = '';
    this.filterLike = '';
    this.filterPaginado = `&per-page=${this.Pagesize}&page=${this.PageIndex}`;
    this.FiltersLikes = [];
    this.FilterLikesID = false;
    this.extraParams = '';
    this.sortSSP = ''; // editado y usado solo si es SSP
    this.endpoint = null;
    this.functionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.columnsNames = [];
    this.columnsParams = [];
    this.booleanParams = [];
    this.extraClasses = '';
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    // Subscribe to the user service (ESTA ES LA FORMA DE OBTENER EL USUARIO EN ESTE PROYECTO CHEKEAR user.service.ts y auth.service.ts) 
    // this._userService.user$
    //   .pipe((takeUntil(this._unsubscribeAll)))
    //   .subscribe((user: User) => {
    //     this.user = user;
    //   });
    if (data) {
      // * caso en el que los parametros para renderizar no vengan desde una llamada al componente con su etiqueta, sino desde un dialog.
      this.endpoint = data.endpoint;
      this.extraParams = data.extraParams;
      this.renderType = data.renderType;
      this.columnsNames = data.columnsNames;
      this.columnsParams = data.columnsParams;
      this.accionesButtons = data.accionesButtons;
      this.accionesFunctions = data.accionesFunctions;
      this.functions = data.functions;
      this.extraClasses = data.extraClasses;
      this.cache = data.cache;
      this.FiltersLikes = data.FiltersLikes;
    }
    if (!this.columnsNames) {
      this.columnsNames = this.columnsParams;
    }
  }
  emitFunction(name, params, origin) {
    this.functionEmitter.emit({
      name,
      params: {
        data: params,
        origin: origin
      }
    });
  }
  ngAfterViewChecked() {
    this.agregarEstilos();
  }
  ngOnInit() {
    /* Reemplazar por get_filtro_global del common */
    /* this.filtros_cache = NavigationService.getPermisos(this.user)?.filtros
    if (this.filtros_cache && this.cache) {
           this.filterLikecomponent = this.filtros_cache.filtercomponent
           if (this.filtros_cache.filterPaginado) {
        this.filterPaginado = this.filtros_cache.filterPaginado
        this.PageIndex = this.filtros_cache.data.page
        this.Pagesize = this.filtros_cache.data.perpage
      }
           if (this.filtros_cache.like) {
        this.filterLikeCache = this.filtros_cache.like
      }
           if (this.filtros_cache.filterLike) {
        this.filterLike = this.filtros_cache.filterLike
      }
      if (this.filtros_cache.formComponent) {
        this.formComponent = this.filtros_cache.formComponent
      }
         } */
    this.renderTabla();
    this.agregarEstilos();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(sort => {
      if (this.renderType == 'ssp') {
        let column = sort.active;
        switch (sort.direction) {
          case "asc":
            this.sortSSP = `= ${column}`; //simplemente mando la columna y se ordena ascendente
            break;
          case "desc":
            this.sortSSP = `=-${column}`; // mando signo menos (-) y columna, y se ordena descendente
            break;
          default:
            this.sortSSP = '';
            break;
        }
        this.renderTabla();
      }
    });
    this.agregarEstilos();
  }
  renderTabla(arg) {
    let query = this.sortSSP != '' ? `&sort${this.sortSSP}` : ''; // sortSSP va a ser vacio si el renderType es client. Caso contrario (SSP) puede tener valor
    if (this.endpoint) {
      if (this.extraParams && this.extraParams != '') {
        let arr_filters = this.extraParams.split('&');
        if (this.extraParams.length != 0 && arr_filters.length > 0) {
          arr_filters.forEach(filter => {
            filter.startsWith('[') ? query += '&filter' + filter + '' : query += '&' + filter + '';
          });
        }
      }
      if (this.filterComponent) {
        query += this.filterLikecomponent;
      }
      if (this.filterLike) {
        query += this.filterLike;
      }
      if (this.renderType != 'client') {
        query += this.filterPaginado;
      }
      this.service.getData(this.endpoint, query).subscribe(r => {
        /**
         * Grilla con valores booleanos
         * En caso de que exista una columna que tenga valores booleanos este forEach convierte los
         * valores booleanos que sean manejados con numeros para mostrar 'si' o 'no' segun corresponda.
         */
        if (r.data.result) {
          r.data.result.forEach(item => {
            if (item.fecha) {
              item.fecha = this.cambiarFormatoFecha(item.fecha);
            }
            if (item.hora) {
              item.hora = this.cambiarformatoHora(item.hora);
            }
            if (item.activo) {
              item.activo = item.activo === 1 ? 'Si' : '';
            }
            if (item.bonificado) {
              item.bonificado = item.bonificado === 1 ? 'Si' : '';
            }
            if (item.lleva_banco) {
              item.lleva_banco = item.lleva_banco === 1 ? 'Si' : '';
            }
            if (item.lleva_numero) {
              item.lleva_numero = item.lleva_numero === 1 ? 'Si' : '';
            }
            if (item.lleva_vencimiento) {
              item.lleva_vencimiento = item.lleva_vencimiento === 1 ? 'Si' : '';
            }
            if (item.lleva_fecha_cobro) {
              item.lleva_fecha_cobro = item.lleva_fecha_cobro === 1 ? 'Si' : '';
            }
            if (item.lleva_fecha_emision) {
              item.lleva_fecha_emision = item.lleva_fecha_emision === 1 ? 'Si' : '';
            }
            if (item.duplica_numero) {
              item.duplica_numero = item.duplica_numero === 1 ? 'Si' : '';
            }
            // Clientes 
            if (item.cliente_asociado === null) {
              item.cliente_asociado = 'Sin Cliente Asociado';
            }
            // Ventas
            if (item.obra_descripcion && item.obra_direccion) {
              item.obra = `${item.obra_descripcion} - ${item.obra_direccion}`;
            }
            if (item.colocacion && item.acarreo && item.bien_cargada) {
              item.colocacion = item.colocacion === 1 ? 'Si' : '';
              item.acarreo = item.acarreo === 1 ? 'Si' : '';
              item.bien_cargada = item.bien_cargada === 1 ? 'Si' : '';
            }
            // Articulos
            if (item.total_stock) {
              item.total_stock = parseFloat(item.total_stock).toFixed(0);
            }
          });
        } else {
          r.data.forEach(item => {
            if (item.fecha) {
              item.fecha = this.cambiarFormatoFecha(item.fecha);
            }
            if (item.hora) {
              item.hora = this.cambiarformatoHora(item.hora);
            }
            if (item.activo) {
              item.activo = item.activo === 1 ? 'Si' : '';
            }
            if (item.bonificado) {
              item.bonificado = item.bonificado === 1 ? 'Si' : '';
            }
            if (item.lleva_banco) {
              item.lleva_banco = item.lleva_banco === 1 ? 'Si' : '';
            }
            if (item.lleva_numero) {
              item.lleva_numero = item.lleva_numero === 1 ? 'Si' : '';
            }
            if (item.lleva_vencimiento) {
              item.lleva_vencimiento = item.lleva_vencimiento === 1 ? 'Si' : '';
            }
            if (item.lleva_fecha_cobro) {
              item.lleva_fecha_cobro = item.lleva_fecha_cobro === 1 ? 'Si' : '';
            }
            if (item.lleva_fecha_emision) {
              item.lleva_fecha_emision = item.lleva_fecha_emision === 1 ? 'Si' : '';
            }
            if (item.duplica_numero) {
              item.duplica_numero = item.duplica_numero === 1 ? 'Si' : '';
            }
            // Clientes 
            if (item.cliente_asociado === null) {
              item.cliente_asociado = 'Sin Cliente Asociado';
            }
            // Ventas
            if (item.obra_descripcion && item.obra_direccion) {
              item.obra = `${item.obra_descripcion} - ${item.obra_direccion}`;
            }
            if (item.colocacion && item.acarreo && item.bien_cargada) {
              item.colocacion = item.colocacion === 1 ? 'Si' : '';
              item.acarreo = item.acarreo === 1 ? 'Si' : '';
              item.bien_cargada = item.bien_cargada === 1 ? 'Si' : '';
            }
            // Articulos
            if (item.total_stock) {
              item.total_stock = parseFloat(item.total_stock).toFixed(0);
            }
          });
        }
        this.filterDataSource = r.data.result ? r.data.result : r.data;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(r.data.result ? r.data.result : r.data);
        this.paginator.length = r.totalCount;
        this.syncSelectionWithCurrentPage();
        if (this.renderType == 'client') {
          //  Si el paginado es por front...
          this.paginator.length = this.filterDataSource.length; //... Se le asigna el largo de la cantidad de elementos que deveulva el back.
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        this.paginator.pageIndex = this.PageIndex;
        //Asigna el tamaño de pagina dinamicamente segun el porcentaje de 5, 10, 25, 50, 100
        this.pageSizeOptions = [Math.ceil(this.paginator.length * 0.05), Math.ceil(this.paginator.length * 0.1), Math.ceil(this.paginator.length * 0.25), Math.ceil(this.paginator.length * 0.5), this.paginator.length];
        //Eliminamos elementos repetidos
        this.pageSizeOptions = [...new Set(this.pageSizeOptions)];
        if (!this.Pagesize) {
          this.Pagesize = this.pageSizeOptions[2];
        }
      });
    }
  }
  /**
   * Esta funcion sirve para cambiar el formato de la fecha cuando se maneja con tipo String
   * @param fecha
   * @returns Devuelve una fecha con formato dd/mm/yyyy
   */
  cambiarFormatoFecha(fecha) {
    // Supongamos que la fecha está en el formato 'YYYY-MM-DD'
    const partes = fecha.split('-');
    if (partes.length === 3) {
      const anio = partes[0];
      const mes = partes[1];
      const dia = partes[2];
      return `${dia}/${mes}/${anio}`;
    } else {
      // Manejar el caso en que la cadena no tiene el formato esperado
      return 'Fecha inválida';
    }
  }
  /**
  * Esta función sirve para cambiar el formato de la hora de una cadena tipo 'HH:mm:ss'.
  * @param hora Cadena en formato 'HH:mm:ss'
  * @returns Devuelve una cadena con la hora en formato 'HH:mm'
  */
  cambiarformatoHora(hora) {
    const partes = hora.split(':');
    if (partes.length >= 2) {
      const horas = partes[0];
      const minutos = partes[1];
      return `${horas.padStart(2, '0')}:${minutos.padStart(2, '0')}`;
    } else {
      return 'Hora inválida';
    }
  }
  /**
  * Selecciona o deselecciona todos los elementos de la página actual.
  * @param seleccionado Indica si se deben seleccionar o deseleccionar todos los elementos.
  */
  seleccionarTodos(seleccionado) {
    this.allSelected = seleccionado;
    const elementosPaginaActual = this.dataSource.data.slice(this.PageIndex * this.Pagesize, (this.PageIndex + 1) * this.Pagesize);
    elementosPaginaActual.forEach(item => {
      if (seleccionado) {
        this.seleccionados.add(item.idarticulo);
      } else {
        this.seleccionados.delete(item.idarticulo);
      }
      item.selected = seleccionado;
    });
    this.selectionChange.emit(this.getElementosSeleccionados());
  }
  /**
   * Selecciona o deselecciona un elemento específico.
   * @param element El elemento que se debe seleccionar o deseleccionar.
   * @param seleccionado Indica si el elemento debe ser seleccionado o deseleccionado.
   */
  seleccionarElemento(element, seleccionado) {
    if (seleccionado) {
      this.seleccionados.add(element.idarticulo);
    } else {
      this.seleccionados.delete(element.idarticulo);
    }
    element.selected = seleccionado;
    this.allSelected = this.dataSource.data.every(item => this.seleccionados.has(item.idarticulo));
    this.selectionChange.emit(this.getElementosSeleccionados());
  }
  /**
   * Obtiene todos los elementos seleccionados actualmente.
   * @returns Un array con los elementos que están actualmente seleccionados.
   */
  getElementosSeleccionados() {
    return this.dataSource.data.filter(item => this.seleccionados.has(item.idarticulo));
  }
  /**
   * Sincroniza la selección de elementos con la página actual.
   * Actualiza el estado de selección de cada elemento en la página actual
   * en función de si están presentes en el conjunto de elementos seleccionados.
   */
  syncSelectionWithCurrentPage() {
    const elementosPaginaActual = this.dataSource.data.slice(this.PageIndex * this.Pagesize, (this.PageIndex + 1) * this.Pagesize);
    elementosPaginaActual.forEach(item => {
      item.selected = this.seleccionados.has(item.idarticulo);
    });
  }
  /**
   * Puede surgir que en cierta situacion necesitemos SOLAMENTE los elementos que
   * trae nuestro servicio para utilizarlo en un componente en concreto.
   * @returns Elemenmtos existentes.
   */
  getElementosExistentes() {
    let elementos_existentes = [];
    this.dataSource.filteredData.forEach(elemento => {
      if (!elementos_existentes.includes(elemento)) {
        elementos_existentes.push(elemento);
      }
    });
    return elementos_existentes;
  }
  agregarEstilos() {
    if (this.extraClasses && this.extraClasses != '') {
      let arr_classes = this.extraClasses.split(',');
      if (this.extraClasses.length != 0 && arr_classes.length > 0) {
        arr_classes.forEach(elem => {
          let itemSearch = elem.split(' ')[0];
          let items = document.querySelectorAll(itemSearch);
          let cssClass = elem.split(' ')[1];
          for (let i = 0; i < items.length; i += 1) {
            items[i].classList.add(cssClass);
          }
        });
      }
    }
  }
  cambioPagina(event) {
    this.PageIndex = event.pageIndex;
    this.Pagesize = event.pageSize;
    this.filterPaginado = `&per-page=${this.Pagesize}&page=${this.PageIndex}`;
    /* Deberíamos usar set_filtro_global */
    /*  if (this.cache) {
      NavigationService.setFilterModulo({ filterPaginado: this.filterPaginado, data: { perpage: this.Pagesize, page: this.PageIndex } }, this.user)
     } */
    this.renderTabla();
    this.agregarEstilos();
  }
  /**
   * Esta funcion es para el buscador de input, recibe un string y renderiza la tabla
   * @param input
   */
  filters(input) {
    this.filterLike = input;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); //Limpio el temporizador evita multiples llamadas
    }

    this.timeoutId = setTimeout(() => {
      let query = '';
      for (let i = 0; i < this.FiltersLikes.length; i++) {
        const like = this.FiltersLikes[i];
        if (this.FilterLikesID) {
          query += `&filter[${like}]=${this.filterLike}`;
        } else {
          query += `&filter[or][${i}][${like}][like]=${this.filterLike}`;
        }
      }
      this.filterLike = query;
      /* Deberíamos usar set_filtro_global */
      /*   if (this.cache) {
          NavigationService.setFilterModulo({ like: input }, this.user)
          NavigationService.setFilterModulo({ filterLike: this.filterLike }, this.user)
        } */
      if (input != '') {
        if (this.renderType == "client") {
          this.dataSource.data = this.filterDataSource.filter(r => this.FiltersLikes.some(f => r[f].toLowerCase().includes(input.toLowerCase())));
        }
      } else {
        //Caso de input vacio
        if (this.renderType == "client") {
          this.dataSource.data = this.filterDataSource;
        } else {
          this.filterLike = '';
        }
      }
      /**
       * Se renderiza despues de cualquier acción.
       * Por ejemplo sí se quiere editar un item con el filtro de busqueda activado,
       * renderiza ese item manteniendo el filtro de busqueda.
       */
      this.renderTabla();
      this.agregarEstilos();
    }, 750);
  }
  /**
   *
   * Funcion para acceder a multi nivel con expands
   *
   * @param element una fila de la respuesta
   * @param column el string de atributo para acceder
   * @returns el parametro en formato de string.
   */
  parse(element, column) {
    let colSplit = column.split('.');
    let temp = element;
    let err = false;
    for (let i = 0; i < colSplit.length && !err; i++) {
      const propiedad = colSplit[i];
      temp = temp[propiedad];
      if (!temp) {
        err = true;
        temp = temp === 0 ? 'No' : '-'; //Parseo valor booleano manejado como numero para que me muestre un 'No'.
      }
    }

    return temp;
  }
  onFilterMenu(documentRef) {
    this.jedsMenu.open(this.filterComponent, documentRef._elementRef, this.formComponent).afterClosed().subscribe({
      next: data => {
        if (data) {
          this.filterLikecomponent = data.filter;
          this.formComponent = data.form;
          this.renderTabla();
          this.agregarEstilos();
          /* Deberíamos usar set_filtro_global */
          /*  if (this.cache) {
            NavigationService.setFilterModulo({ filtercomponent: this.filterLikecomponent, formComponent: this.formComponent }, this.user)
           } */
        }
      }
    });
  }

  modalUp(documentRef) {
    this.menuService.open(this.filterComponent, documentRef._elementRef, this.formComponent).afterClosed().subscribe({
      next: data => {
        if (data) {
          this.filterLikecomponent = data.filter;
          this.formComponent = data.form;
          this.renderTabla();
          this.agregarEstilos();
          /* Deberíamos usar set_filtro_global */
          /*  if (this.cache) {
            NavigationService.setFilterModulo({ filtercomponent: this.filterLikecomponent, formComponent: this.formComponent }, this.user)
           } */
        }
      }
    });
  }
}

TablaDinamicaComponent.ɵfac = function TablaDinamicaComponent_Factory(t) {
  return new (t || TablaDinamicaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_0__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_tabla_dinamica_service__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_0__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
};
TablaDinamicaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: TablaDinamicaComponent,
  selectors: [["app-tabla-dinamica"]],
  viewQuery: function TablaDinamicaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  inputs: {
    cache: "cache",
    filterComponent: "filterComponent",
    FiltersLikes: "FiltersLikes",
    FilterLikesID: "FilterLikesID",
    extraParams: "extraParams",
    renderType: "renderType",
    endpoint: "endpoint",
    functions: "functions",
    columnsNames: "columnsNames",
    columnsParams: "columnsParams",
    booleanParams: "booleanParams",
    accionesButtons: "accionesButtons",
    accionesFunctions: "accionesFunctions",
    extraClasses: "extraClasses"
  },
  outputs: {
    selectionChange: "selectionChange",
    functionEmitter: "functionEmitter"
  },
  decls: 8,
  vars: 8,
  consts: [[1, "w-full", "cont-with-paginator", "mat-elevation-z8", "mb-2"], [1, "w-full", "max-h-[75vh]", "overflow-y-auto", "mt-2"], ["mat-table", "", "matSort", "", 1, "w-full", "smm:px-0", "smm:mt-0", "mt-4", "small-table-text", "mb-8", "cont-with-paginator", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "bg-slate-800", "rounded-b-2xl"], ["aria-label", "Select page of users", 1, "w-full", "rounded-b-lg", "shadow-md", "mat-paginator-sticky", "fixed", 3, "pageSizeOptions", "pageIndex", "pageSize", "page"], [3, "matColumnDef"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["botones", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], [3, "checked", "change"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "descripcion"], ["mat-cell", "", "class", "mat-column-botones", 4, "matCellDef"], ["mat-cell", "", 1, "mat-column-botones"], [1, ""], ["color", "accent", "matTooltipPosition", "above", "matTooltipClass", "tooltip-class", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", "TooltipTouchGestures", "auto", 3, "disabled", "mat-icon-button", "mat-button", "ngClass", "matTooltip", "click", 4, "ngFor", "ngForOf"], ["color", "accent", "matTooltipPosition", "above", "matTooltipClass", "tooltip-class", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", "TooltipTouchGestures", "auto", 3, "disabled", "ngClass", "matTooltip", "click"], ["origin", ""], ["class", "dark:bg-primary dark:rounded-full mr-1", 3, "svgIcon", 4, "ngIf"], ["class", "dark:bg-primary dark:rounded-full text-center justify-center items-center", 3, "svgIcon", 4, "ngIf"], [1, "dark:bg-primary", "dark:rounded-full", "mr-1", 3, "svgIcon"], [1, "dark:bg-primary", "dark:rounded-full", "text-center", "justify-center", "items-center", 3, "svgIcon"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function TablaDinamicaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TablaDinamicaComponent_ng_container_3_Template, 5, 4, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TablaDinamicaComponent_tr_4_Template, 1, 0, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TablaDinamicaComponent_tr_5_Template, 1, 0, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6)(7, "mat-paginator", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("page", function TablaDinamicaComponent_Template_mat_paginator_page_7_listener($event) {
        return ctx.cambioPagina($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.columnsParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsParams)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.columnsParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageIndex", ctx.PageIndex)("pageSize", ctx.Pagesize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckbox, _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__.ActivoPipe],
  styles: [".tooltip-class {\n  font-size: 0.85rem !important;\n  text-transform: uppercase;\n}\n\n.mat-paginator-sticky {\n  bottom: 0px;\n  position: sticky;\n  z-index: 10;\n}\n\n.mat-column-Apellido {\n  width: 7rem;\n}\n\n.mat-paginator, .mat-paginator-container {\n  padding: 0px !important;\n}\n\n.mat-elevation-z8 {\n  box-shadow: none !important;\n}\n\n.mat-column-seleccion {\n  padding-left: 12px !important;\n  padding-right: 0px !important;\n}\n\n.mat-column-codigo_interno {\n  width: 170px;\n  padding-left: 0px !important;\n}\n\n.mat-column-botones {\n  width: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhLWRpbmFtaWNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJ0YWJsYS1kaW5hbWljYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwLWNsYXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3Itc3RpY2t5IHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1BcGVsbGlkbyB7XHJcbiAgICB3aWR0aDogN3JlbTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3IgLC5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejgge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zZWxlY2Npb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tY29kaWdvX2ludGVybm8ge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tYm90b25lcyB7XHJcbiAgICB3aWR0aDogMTcwcHg7IFxyXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGEtZGluYW1pY2EvdGFibGEtZGluYW1pY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjs7QUFFQTtFQUNJLDZCQUFBO0VBQ0EsNkJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKO0FBQ0EsNDVDQUE0NUMiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcC1jbGFzcyB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW0gIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLXN0aWNreSB7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tQXBlbGxpZG8ge1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yICwubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo4IHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tc2VsZWNjaW9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWNvZGlnb19pbnRlcm5vIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWJvdG9uZXMge1xyXG4gICAgd2lkdGg6IDE3MHB4OyBcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});


/***/ }),

/***/ 11711:
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/tabla-dinamica/tabla-dinamica.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaDinamicaModule": () => (/* binding */ TablaDinamicaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabla-dinamica.component */ 71549);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 86907);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _shared_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared-component.module */ 46288);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/activo.pipe */ 77920);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
















class TablaDinamicaModule {}
TablaDinamicaModule.ɵfac = function TablaDinamicaModule_Factory(t) {
  return new (t || TablaDinamicaModule)();
};
TablaDinamicaModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: TablaDinamicaModule
});
TablaDinamicaModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_2__.JedsMenuService, {
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA,
    useValue: {}
  }, {
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef,
    useValue: {}
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _shared_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TablaDinamicaModule, {
    declarations: [_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__.TablaDinamicaComponent, _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__.ActivoPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _shared_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule],
    exports: [_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__.TablaDinamicaComponent]
  });
})();

/***/ }),

/***/ 77920:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/activo.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivoPipe": () => (/* binding */ ActivoPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);

class ActivoPipe {
  transform(value, column_name) {
    // Lógica para transformar el valor según tus necesidades
    if (value == 1) {
      return 'Si';
    } else if (value == 0) {
      return 'No';
    } else {
      return value;
    }
  }
}
ActivoPipe.ɵfac = function ActivoPipe_Factory(t) {
  return new (t || ActivoPipe)();
};
ActivoPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "activoPipe",
  type: ActivoPipe,
  pure: true
});


/***/ }),

/***/ 95096:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/sort.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_SORT_DEFAULT_OPTIONS": () => (/* binding */ MAT_SORT_DEFAULT_OPTIONS),
/* harmony export */   "MAT_SORT_HEADER_INTL_PROVIDER": () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER),
/* harmony export */   "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY": () => (/* binding */ MAT_SORT_HEADER_INTL_PROVIDER_FACTORY),
/* harmony export */   "MatSort": () => (/* binding */ MatSort),
/* harmony export */   "MatSortHeader": () => (/* binding */ MatSortHeader),
/* harmony export */   "MatSortHeaderIntl": () => (/* binding */ MatSortHeaderIntl),
/* harmony export */   "MatSortModule": () => (/* binding */ MatSortModule),
/* harmony export */   "matSortAnimations": () => (/* binding */ matSortAnimations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/a11y */ 46958);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ 70867);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ 24387);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 72223);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);











/** @docs-private */
const _c0 = ["mat-sort-header", ""];
function MatSortHeader_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@arrowPosition.start", function MatSortHeader_div_3_Template_div_animation_arrowPosition_start_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._disableViewStateAnimation = true);
    })("@arrowPosition.done", function MatSortHeader_div_3_Template_div_animation_arrowPosition_done_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3._disableViewStateAnimation = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6)(4, "div", 7)(5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@arrowOpacity", ctx_r0._getArrowViewState())("@arrowPosition", ctx_r0._getArrowViewState())("@allowChildren", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@indicator", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@leftPointer", ctx_r0._getArrowDirectionState());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@rightPointer", ctx_r0._getArrowDirectionState());
  }
}
const _c1 = ["*"];
function getSortDuplicateSortableIdError(id) {
  return Error(`Cannot have two MatSortables with the same id (${id}).`);
}
/** @docs-private */
function getSortHeaderNotContainedWithinSortError() {
  return Error(`MatSortHeader must be placed within a parent element with the MatSort directive.`);
}
/** @docs-private */
function getSortHeaderMissingIdError() {
  return Error(`MatSortHeader must be provided with a unique id.`);
}
/** @docs-private */
function getSortInvalidDirectionError(direction) {
  return Error(`${direction} is not a valid sort direction ('asc' or 'desc').`);
}

/** Injection token to be used to override the default options for `mat-sort`. */
const MAT_SORT_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_SORT_DEFAULT_OPTIONS');
// Boilerplate for applying mixins to MatSort.
/** @docs-private */
const _MatSortBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinInitialized)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(class {}));
/** Container for MatSortables to manage the sort state and provide default sort parameters. */
class MatSort extends _MatSortBase {
  /** The sort direction of the currently active MatSortable. */
  get direction() {
    return this._direction;
  }
  set direction(direction) {
    if (direction && direction !== 'asc' && direction !== 'desc' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortInvalidDirectionError(direction);
    }
    this._direction = direction;
  }
  /**
   * Whether to disable the user from clearing the sort by finishing the sort direction cycle.
   * May be overridden by the MatSortable's disable clear input.
   */
  get disableClear() {
    return this._disableClear;
  }
  set disableClear(v) {
    this._disableClear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
  }
  constructor(_defaultOptions) {
    super();
    this._defaultOptions = _defaultOptions;
    /** Collection of all registered sortables that this directive manages. */
    this.sortables = new Map();
    /** Used to notify any child components listening to state changes. */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * The direction to set when an MatSortable is initially sorted.
     * May be overridden by the MatSortable's sort start.
     */
    this.start = 'asc';
    this._direction = '';
    /** Event emitted when the user changes either the active sort or sort direction. */
    this.sortChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Register function to be used by the contained MatSortables. Adds the MatSortable to the
   * collection of MatSortables.
   */
  register(sortable) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      if (!sortable.id) {
        throw getSortHeaderMissingIdError();
      }
      if (this.sortables.has(sortable.id)) {
        throw getSortDuplicateSortableIdError(sortable.id);
      }
    }
    this.sortables.set(sortable.id, sortable);
  }
  /**
   * Unregister function to be used by the contained MatSortables. Removes the MatSortable from the
   * collection of contained MatSortables.
   */
  deregister(sortable) {
    this.sortables.delete(sortable.id);
  }
  /** Sets the active sort id and determines the new sort direction. */
  sort(sortable) {
    if (this.active != sortable.id) {
      this.active = sortable.id;
      this.direction = sortable.start ? sortable.start : this.start;
    } else {
      this.direction = this.getNextSortDirection(sortable);
    }
    this.sortChange.emit({
      active: this.active,
      direction: this.direction
    });
  }
  /** Returns the next sort direction of the active sortable, checking for potential overrides. */
  getNextSortDirection(sortable) {
    if (!sortable) {
      return '';
    }
    // Get the sort direction cycle with the potential sortable overrides.
    const disableClear = sortable?.disableClear ?? this.disableClear ?? !!this._defaultOptions?.disableClear;
    let sortDirectionCycle = getSortDirectionCycle(sortable.start || this.start, disableClear);
    // Get and return the next direction in the cycle
    let nextDirectionIndex = sortDirectionCycle.indexOf(this.direction) + 1;
    if (nextDirectionIndex >= sortDirectionCycle.length) {
      nextDirectionIndex = 0;
    }
    return sortDirectionCycle[nextDirectionIndex];
  }
  ngOnInit() {
    this._markInitialized();
  }
  ngOnChanges() {
    this._stateChanges.next();
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
}
MatSort.ɵfac = function MatSort_Factory(t) {
  return new (t || MatSort)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
};
MatSort.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatSort,
  selectors: [["", "matSort", ""]],
  hostAttrs: [1, "mat-sort"],
  inputs: {
    disabled: ["matSortDisabled", "disabled"],
    active: ["matSortActive", "active"],
    start: ["matSortStart", "start"],
    direction: ["matSortDirection", "direction"],
    disableClear: ["matSortDisableClear", "disableClear"]
  },
  outputs: {
    sortChange: "matSortChange"
  },
  exportAs: ["matSort"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSort, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[matSort]',
      exportAs: 'matSort',
      host: {
        'class': 'mat-sort'
      },
      inputs: ['disabled: matSortDisabled']
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SORT_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortActive']
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortStart']
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortDirection']
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matSortDisableClear']
    }],
    sortChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['matSortChange']
    }]
  });
})();
/** Returns the sort direction cycle to use given the provided parameters of order and clear. */
function getSortDirectionCycle(start, disableClear) {
  let sortOrder = ['asc', 'desc'];
  if (start == 'desc') {
    sortOrder.reverse();
  }
  if (!disableClear) {
    sortOrder.push('');
  }
  return sortOrder;
}
const SORT_ANIMATION_TRANSITION = _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationDurations.ENTERING + ' ' + _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.AnimationCurves.STANDARD_CURVE;
/**
 * Animations used by MatSort.
 * @docs-private
 */
const matSortAnimations = {
  /** Animation that moves the sort indicator. */
  indicator: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('indicator', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0px)'
  })),
  // 10px is the height of the sort indicator, minus the width of the pointers
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(10px)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the left pointer of the indicator based on the sorting direction. */
  leftPointer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('leftPointer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(-45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that rotates the right pointer of the indicator based on the sorting direction. */
  rightPointer: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('rightPointer', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'rotate(-45deg)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active-asc <=> active-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /** Animation that controls the arrow opacity. */
  arrowOpacity: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowOpacity', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-active, asc-to-active, active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 1
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0.54
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    opacity: 0
  })),
  // Transition between all states except for immediate transitions
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc, * => desc, * => active, * => hint, * => void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('0ms')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION))]),
  /**
   * Animation for the translation of the arrow as a whole. States are separated into two
   * groups: ones with animations and others that are immediate. Immediate states are asc, desc,
   * peek, and active. The other states define a specific animation (source-to-destination)
   * and are determined as a function of their prev user-perceived state and what the next state
   * should be.
   */
  arrowPosition: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('arrowPosition', [
  // Hidden Above => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => desc-to-hint, * => desc-to-active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })]))),
  // Hint Center => Hidden Below
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-desc, * => active-to-desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  })]))),
  // Hidden Below => Hint Center
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => asc-to-hint, * => asc-to-active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })]))),
  // Hint Center => Hidden Above
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* => hint-to-asc, * => active-to-asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(SORT_ANIMATION_TRANSITION, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  })]))), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(0)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-desc, active-to-desc, desc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(-25%)'
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('hint-to-asc, active-to-asc, asc', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
    transform: 'translateY(25%)'
  }))]),
  /** Necessary trigger that calls animate on children animations. */
  allowChildren: (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('allowChildren', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('* <=> *', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.query)('@*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animateChild)(), {
    optional: true
  })])])
};

/**
 * To modify the labels and text displayed, create a new instance of MatSortHeaderIntl and
 * include it in a custom provider.
 */
class MatSortHeaderIntl {
  constructor() {
    /**
     * Stream that emits whenever the labels here are changed. Use this to notify
     * components if the labels have changed after initialization.
     */
    this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
}
MatSortHeaderIntl.ɵfac = function MatSortHeaderIntl_Factory(t) {
  return new (t || MatSortHeaderIntl)();
};
MatSortHeaderIntl.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatSortHeaderIntl,
  factory: MatSortHeaderIntl.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeaderIntl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** @docs-private */
function MAT_SORT_HEADER_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatSortHeaderIntl();
}
/** @docs-private */
const MAT_SORT_HEADER_INTL_PROVIDER = {
  // If there is already an MatSortHeaderIntl available, use that. Otherwise, provide a new one.
  provide: MatSortHeaderIntl,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatSortHeaderIntl]],
  useFactory: MAT_SORT_HEADER_INTL_PROVIDER_FACTORY
};

// Boilerplate for applying mixins to the sort header.
/** @docs-private */
const _MatSortHeaderBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_1__.mixinDisabled)(class {});
/**
 * Applies sorting behavior (click to change sort) and styles to an element, including an
 * arrow to display the current sort direction.
 *
 * Must be provided with an id and contained within a parent MatSort directive.
 *
 * If used on header cells in a CdkTable, it will automatically default its id from its containing
 * column definition.
 */
class MatSortHeader extends _MatSortHeaderBase {
  /**
   * Description applied to MatSortHeader's button element with aria-describedby. This text should
   * describe the action that will occur when the user clicks the sort header.
   */
  get sortActionDescription() {
    return this._sortActionDescription;
  }
  set sortActionDescription(value) {
    this._updateSortActionDescription(value);
  }
  /** Overrides the disable clear value of the containing MatSort for this MatSortable. */
  get disableClear() {
    return this._disableClear;
  }
  set disableClear(v) {
    this._disableClear = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(v);
  }
  constructor(
  /**
   * @deprecated `_intl` parameter isn't being used anymore and it'll be removed.
   * @breaking-change 13.0.0
   */
  _intl, _changeDetectorRef,
  // `MatSort` is not optionally injected, but just asserted manually w/ better error.
  // tslint:disable-next-line: lightweight-tokens
  _sort, _columnDef, _focusMonitor, _elementRef, /** @breaking-change 14.0.0 _ariaDescriber will be required. */
  _ariaDescriber, defaultOptions) {
    // Note that we use a string token for the `_columnDef`, because the value is provided both by
    // `material/table` and `cdk/table` and we can't have the CDK depending on Material,
    // and we want to avoid having the sort header depending on the CDK table because
    // of this single reference.
    super();
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._sort = _sort;
    this._columnDef = _columnDef;
    this._focusMonitor = _focusMonitor;
    this._elementRef = _elementRef;
    this._ariaDescriber = _ariaDescriber;
    /**
     * Flag set to true when the indicator should be displayed while the sort is not active. Used to
     * provide an affordance that the header is sortable by showing on focus and hover.
     */
    this._showIndicatorHint = false;
    /**
     * The view transition state of the arrow (translation/ opacity) - indicates its `from` and `to`
     * position through the animation. If animations are currently disabled, the fromState is removed
     * so that there is no animation displayed.
     */
    this._viewState = {};
    /** The direction the arrow should be facing according to the current state. */
    this._arrowDirection = '';
    /**
     * Whether the view state animation should show the transition between the `from` and `to` states.
     */
    this._disableViewStateAnimation = false;
    /** Sets the position of the arrow that displays when sorted. */
    this.arrowPosition = 'after';
    // Default the action description to "Sort" because it's better than nothing.
    // Without a description, the button's label comes from the sort header text content,
    // which doesn't give any indication that it performs a sorting operation.
    this._sortActionDescription = 'Sort';
    if (!_sort && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getSortHeaderNotContainedWithinSortError();
    }
    if (defaultOptions?.arrowPosition) {
      this.arrowPosition = defaultOptions?.arrowPosition;
    }
    this._handleStateChanges();
  }
  ngOnInit() {
    if (!this.id && this._columnDef) {
      this.id = this._columnDef.name;
    }
    // Initialize the direction of the arrow and set the view state to be immediately that state.
    this._updateArrowDirection();
    this._setAnimationTransitionState({
      toState: this._isSorted() ? 'active' : this._arrowDirection
    });
    this._sort.register(this);
    this._sortButton = this._elementRef.nativeElement.querySelector('.mat-sort-header-container');
    this._updateSortActionDescription(this._sortActionDescription);
  }
  ngAfterViewInit() {
    // We use the focus monitor because we also want to style
    // things differently based on the focus origin.
    this._focusMonitor.monitor(this._elementRef, true).subscribe(origin => {
      const newState = !!origin;
      if (newState !== this._showIndicatorHint) {
        this._setIndicatorHintVisible(newState);
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._sort.deregister(this);
    this._rerenderSubscription.unsubscribe();
  }
  /**
   * Sets the "hint" state such that the arrow will be semi-transparently displayed as a hint to the
   * user showing what the active sort will become. If set to false, the arrow will fade away.
   */
  _setIndicatorHintVisible(visible) {
    // No-op if the sort header is disabled - should not make the hint visible.
    if (this._isDisabled() && visible) {
      return;
    }
    this._showIndicatorHint = visible;
    if (!this._isSorted()) {
      this._updateArrowDirection();
      if (this._showIndicatorHint) {
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: 'hint'
        });
      } else {
        this._setAnimationTransitionState({
          fromState: 'hint',
          toState: this._arrowDirection
        });
      }
    }
  }
  /**
   * Sets the animation transition view state for the arrow's position and opacity. If the
   * `disableViewStateAnimation` flag is set to true, the `fromState` will be ignored so that
   * no animation appears.
   */
  _setAnimationTransitionState(viewState) {
    this._viewState = viewState || {};
    // If the animation for arrow position state (opacity/translation) should be disabled,
    // remove the fromState so that it jumps right to the toState.
    if (this._disableViewStateAnimation) {
      this._viewState = {
        toState: viewState.toState
      };
    }
  }
  /** Triggers the sort on this sort header and removes the indicator hint. */
  _toggleOnInteraction() {
    this._sort.sort(this);
    // Do not show the animation if the header was already shown in the right position.
    if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
      this._disableViewStateAnimation = true;
    }
  }
  _handleClick() {
    if (!this._isDisabled()) {
      this._sort.sort(this);
    }
  }
  _handleKeydown(event) {
    if (!this._isDisabled() && (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__.ENTER)) {
      event.preventDefault();
      this._toggleOnInteraction();
    }
  }
  /** Whether this MatSortHeader is currently sorted in either ascending or descending order. */
  _isSorted() {
    return this._sort.active == this.id && (this._sort.direction === 'asc' || this._sort.direction === 'desc');
  }
  /** Returns the animation state for the arrow direction (indicator and pointers). */
  _getArrowDirectionState() {
    return `${this._isSorted() ? 'active-' : ''}${this._arrowDirection}`;
  }
  /** Returns the arrow position state (opacity, translation). */
  _getArrowViewState() {
    const fromState = this._viewState.fromState;
    return (fromState ? `${fromState}-to-` : '') + this._viewState.toState;
  }
  /**
   * Updates the direction the arrow should be pointing. If it is not sorted, the arrow should be
   * facing the start direction. Otherwise if it is sorted, the arrow should point in the currently
   * active sorted direction. The reason this is updated through a function is because the direction
   * should only be changed at specific times - when deactivated but the hint is displayed and when
   * the sort is active and the direction changes. Otherwise the arrow's direction should linger
   * in cases such as the sort becoming deactivated but we want to animate the arrow away while
   * preserving its direction, even though the next sort direction is actually different and should
   * only be changed once the arrow displays again (hint or activation).
   */
  _updateArrowDirection() {
    this._arrowDirection = this._isSorted() ? this._sort.direction : this.start || this._sort.start;
  }
  _isDisabled() {
    return this._sort.disabled || this.disabled;
  }
  /**
   * Gets the aria-sort attribute that should be applied to this sort header. If this header
   * is not sorted, returns null so that the attribute is removed from the host element. Aria spec
   * says that the aria-sort property should only be present on one header at a time, so removing
   * ensures this is true.
   */
  _getAriaSortAttribute() {
    if (!this._isSorted()) {
      return 'none';
    }
    return this._sort.direction == 'asc' ? 'ascending' : 'descending';
  }
  /** Whether the arrow inside the sort header should be rendered. */
  _renderArrow() {
    return !this._isDisabled() || this._isSorted();
  }
  _updateSortActionDescription(newDescription) {
    // We use AriaDescriber for the sort button instead of setting an `aria-label` because some
    // screen readers (notably VoiceOver) will read both the column header *and* the button's label
    // for every *cell* in the table, creating a lot of unnecessary noise.
    // If _sortButton is undefined, the component hasn't been initialized yet so there's
    // nothing to update in the DOM.
    if (this._sortButton) {
      // removeDescription will no-op if there is no existing message.
      // TODO(jelbourn): remove optional chaining when AriaDescriber is required.
      this._ariaDescriber?.removeDescription(this._sortButton, this._sortActionDescription);
      this._ariaDescriber?.describe(this._sortButton, newDescription);
    }
    this._sortActionDescription = newDescription;
  }
  /** Handles changes in the sorting state. */
  _handleStateChanges() {
    this._rerenderSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.merge)(this._sort.sortChange, this._sort._stateChanges, this._intl.changes).subscribe(() => {
      if (this._isSorted()) {
        this._updateArrowDirection();
        // Do not show the animation if the header was already shown in the right position.
        if (this._viewState.toState === 'hint' || this._viewState.toState === 'active') {
          this._disableViewStateAnimation = true;
        }
        this._setAnimationTransitionState({
          fromState: this._arrowDirection,
          toState: 'active'
        });
        this._showIndicatorHint = false;
      }
      // If this header was recently active and now no longer sorted, animate away the arrow.
      if (!this._isSorted() && this._viewState && this._viewState.toState === 'active') {
        this._disableViewStateAnimation = false;
        this._setAnimationTransitionState({
          fromState: 'active',
          toState: this._arrowDirection
        });
      }
      this._changeDetectorRef.markForCheck();
    });
  }
}
MatSortHeader.ɵfac = function MatSortHeader_Factory(t) {
  return new (t || MatSortHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSortHeaderIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatSort, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('MAT_SORT_HEADER_COLUMN_DEF', 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_SORT_DEFAULT_OPTIONS, 8));
};
MatSortHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatSortHeader,
  selectors: [["", "mat-sort-header", ""]],
  hostAttrs: [1, "mat-sort-header"],
  hostVars: 3,
  hostBindings: function MatSortHeader_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSortHeader_click_HostBindingHandler() {
        return ctx._handleClick();
      })("keydown", function MatSortHeader_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("mouseenter", function MatSortHeader_mouseenter_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(true);
      })("mouseleave", function MatSortHeader_mouseleave_HostBindingHandler() {
        return ctx._setIndicatorHintVisible(false);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-sort", ctx._getAriaSortAttribute());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-disabled", ctx._isDisabled());
    }
  },
  inputs: {
    disabled: "disabled",
    id: ["mat-sort-header", "id"],
    arrowPosition: "arrowPosition",
    start: "start",
    sortActionDescription: "sortActionDescription",
    disableClear: "disableClear"
  },
  exportAs: ["matSortHeader"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 4,
  vars: 7,
  consts: [[1, "mat-sort-header-container", "mat-focus-indicator"], [1, "mat-sort-header-content"], ["class", "mat-sort-header-arrow", 4, "ngIf"], [1, "mat-sort-header-arrow"], [1, "mat-sort-header-stem"], [1, "mat-sort-header-indicator"], [1, "mat-sort-header-pointer-left"], [1, "mat-sort-header-pointer-right"], [1, "mat-sort-header-pointer-middle"]],
  template: function MatSortHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSortHeader_div_3_Template, 6, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-sort-header-sorted", ctx._isSorted())("mat-sort-header-position-before", ctx.arrowPosition === "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._isDisabled() ? null : 0)("role", ctx._isDisabled() ? null : "button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._renderArrow());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf],
  styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"],
  encapsulation: 2,
  data: {
    animation: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren]
  },
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[mat-sort-header]',
      exportAs: 'matSortHeader',
      host: {
        'class': 'mat-sort-header',
        '(click)': '_handleClick()',
        '(keydown)': '_handleKeydown($event)',
        '(mouseenter)': '_setIndicatorHintVisible(true)',
        '(mouseleave)': '_setIndicatorHintVisible(false)',
        '[attr.aria-sort]': '_getAriaSortAttribute()',
        '[class.mat-sort-header-disabled]': '_isDisabled()'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled'],
      animations: [matSortAnimations.indicator, matSortAnimations.leftPointer, matSortAnimations.rightPointer, matSortAnimations.arrowOpacity, matSortAnimations.arrowPosition, matSortAnimations.allowChildren],
      template: "<!--\n  We set the `tabindex` on an element inside the table header, rather than the header itself,\n  because of a bug in NVDA where having a `tabindex` on a `th` breaks keyboard navigation in the\n  table (see https://github.com/nvaccess/nvda/issues/7718). This allows for the header to both\n  be focusable, and have screen readers read out its `aria-sort` state. We prefer this approach\n  over having a button with an `aria-label` inside the header, because the button's `aria-label`\n  will be read out as the user is navigating the table's cell (see #13012).\n\n  The approach is based off of: https://dequeuniversity.com/library/aria/tables/sf-sortable-grid\n-->\n<div class=\"mat-sort-header-container mat-focus-indicator\"\n     [class.mat-sort-header-sorted]=\"_isSorted()\"\n     [class.mat-sort-header-position-before]=\"arrowPosition === 'before'\"\n     [attr.tabindex]=\"_isDisabled() ? null : 0\"\n     [attr.role]=\"_isDisabled() ? null : 'button'\">\n\n  <!--\n    TODO(crisbeto): this div isn't strictly necessary, but we have to keep it due to a large\n    number of screenshot diff failures. It should be removed eventually. Note that the difference\n    isn't visible with a shorter header, but once it breaks up into multiple lines, this element\n    causes it to be center-aligned, whereas removing it will keep the text to the left.\n  -->\n  <div class=\"mat-sort-header-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <!-- Disable animations while a current animation is running -->\n  <div class=\"mat-sort-header-arrow\"\n       *ngIf=\"_renderArrow()\"\n       [@arrowOpacity]=\"_getArrowViewState()\"\n       [@arrowPosition]=\"_getArrowViewState()\"\n       [@allowChildren]=\"_getArrowDirectionState()\"\n       (@arrowPosition.start)=\"_disableViewStateAnimation = true\"\n       (@arrowPosition.done)=\"_disableViewStateAnimation = false\">\n    <div class=\"mat-sort-header-stem\"></div>\n    <div class=\"mat-sort-header-indicator\" [@indicator]=\"_getArrowDirectionState()\">\n      <div class=\"mat-sort-header-pointer-left\" [@leftPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-right\" [@rightPointer]=\"_getArrowDirectionState()\"></div>\n      <div class=\"mat-sort-header-pointer-middle\"></div>\n    </div>\n  </div>\n</div>\n",
      styles: [".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-container::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}"]
    }]
  }], function () {
    return [{
      type: MatSortHeaderIntl
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: MatSort,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['MAT_SORT_HEADER_COLUMN_DEF']
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.AriaDescriber,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_SORT_DEFAULT_OPTIONS]
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['mat-sort-header']
    }],
    arrowPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    start: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortActionDescription: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disableClear: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatSortModule {}
MatSortModule.ɵfac = function MatSortModule_Factory(t) {
  return new (t || MatSortModule)();
};
MatSortModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatSortModule
});
MatSortModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MAT_SORT_HEADER_INTL_PROVIDER],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatSortModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatCommonModule],
      exports: [MatSort, MatSortHeader],
      declarations: [MatSort, MatSortHeader],
      providers: [MAT_SORT_HEADER_INTL_PROVIDER]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_tabla-dinamica_tabla-dinamica_module_ts.js.map