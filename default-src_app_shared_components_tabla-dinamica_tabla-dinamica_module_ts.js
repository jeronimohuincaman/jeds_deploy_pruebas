"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["default-src_app_shared_components_tabla-dinamica_tabla-dinamica_module_ts"],{

/***/ 46288:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/shared-component.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedComponentModule": () => (/* binding */ SharedComponentModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 12778);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ 12035);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 20445);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ 89314);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 86907);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 15312);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4291);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service/app/menu.service */ 88802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);



















class SharedComponentModule {}
SharedComponentModule.ɵfac = function SharedComponentModule_Factory(t) {
  return new (t || SharedComponentModule)();
};
SharedComponentModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SharedComponentModule
});
SharedComponentModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  providers: [_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_0__.JedsMenuService],
  imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedComponentModule, {
    imports: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatProgressSpinnerModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.PortalModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggleModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__.MatMenuModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__.MatAutocompleteModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 27954:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/tabla-dinamica/services/tabla-dinamica.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaDinamicaService": () => (/* binding */ TablaDinamicaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33765);



class TablaDinamicaService {
  constructor(http) {
    this.http = http;
  }
  // private _providerbase: string = environment.baseRest + '/' ;
  /**
   *
   * @param endpoint La url completa del servicio utilizado para obtener datos que se usaran en la tabla.
   * @param filter
   * @returns
   */
  getData(endpoint, filter) {
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.http.get(`${endpoint}${filter}`, {
      observe: 'response'
    }).subscribe(resp => {
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
  return new (t || TablaDinamicaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
TablaDinamicaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service/app/menu.service */ 88802);
/* harmony import */ var _services_tabla_dinamica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tabla-dinamica.service */ 27954);
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/user/user.service */ 37495);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/activo.pipe */ 77920);

















function TablaDinamicaComponent_ng_container_3_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.columnsNames[i_r4], " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 14)(1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "activoPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const i_r4 = ctx_r12.index;
    const column_r3 = ctx_r12.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.columnsNames[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r9.booleanParams.includes(column_r3) ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 2, element_r11[column_r3], column_r3) : ctx_r9.parse(element_r11, column_r3), "");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_container_1_th_1_Template, 2, 1, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_container_1_td_2_Template, 6, 5, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_2_th_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r13.columnsNames[i_r4], " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_button_2_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 25);
  }
  if (rf & 2) {
    const accion_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("svgIcon", accion_r18.icono);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_button_2_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-icon", 26);
  }
  if (rf & 2) {
    const accion_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("svgIcon", accion_r18.icono(element_r16));
  }
}
const _c0 = function (a0) {
  return {
    "bg-primary text-center": a0
  };
};
function TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_button_2_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);
      const accion_r18 = restoredCtx.$implicit;
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
      const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r26.emitFunction(accion_r18.functionName, element_r16, _r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_button_2_mat_icon_2_Template, 1, 1, "mat-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_button_2_mat_icon_3_Template, 1, 1, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accion_r18 = ctx.$implicit;
    const element_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-icon-button", accion_r18.type !== "button")("mat-button", accion_r18.type === "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matTooltip", accion_r18.extra ? accion_r18.nombre_boton(element_r16) : accion_r18.nombre_boton);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", accion_r18.disabled && accion_r18.disabled(element_r16))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, accion_r18.type == "button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !accion_r18.extra);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", accion_r18.extra);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", accion_r18.type === "button" ? accion_r18.nombre_boton : "", " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 14)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_button_2_Template, 5, 12, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r14.functions);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TablaDinamicaComponent_ng_container_3_ng_template_2_th_0_Template, 2, 1, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_template_2_td_1_Template, 3, 1, "td", 12);
  }
}
function TablaDinamicaComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_container_1_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_template_2_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matColumnDef", column_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", column_r3 != "acciones")("ngIfElse", _r6);
  }
}
function TablaDinamicaComponent_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 27);
  }
}
function TablaDinamicaComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 28);
  }
}
const _c1 = function () {
  return [5, 10, 25, 50];
};
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
    this.filterLikeCache = '';
    this.PageIndex = 0;
    this.Pagesize = 10;
    this.cache = true;
    //------------------------- Filters
    this.filterComponent = undefined;
    /**
     * Filtros concatenados
     */
    this.filterLikecomponent = '';
    this.filterLike = '';
    this.filterPaginado = '&per-page=10&page=0';
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
    if (!!this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
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
          });
        } else {
          r.data.forEach(item => {
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
          });
        }
        this.filterDataSource = r.data.result ? r.data.result : r.data;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(r.data.result ? r.data.result : r.data);
        this.paginator.length = r.totalCount;
        this.paginator.pageIndex = this.PageIndex;
        if (this.renderType == 'client') {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      });
    }
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
  return new (t || TablaDinamicaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_0__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_tabla_dinamica_service__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_0__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService));
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
    functionEmitter: "functionEmitter"
  },
  decls: 8,
  vars: 9,
  consts: [[1, "w-full", "cont-with-paginator", "mat-elevation-z8", "mb-22"], [1, "w-full", "max-h-[75vh]", "overflow-y-auto", "mt-2"], ["mat-table", "", "matSort", "", 1, "w-full", "smm:px-0", "smm:mt-0", "mt-4", "small-table-text", "mb-8", "cont-with-paginator", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "bg-slate-800", "rounded-b-2xl"], ["aria-label", "Select page of users", 1, "w-full", "rounded-b-lg", "shadow-md", "mat-paginator-sticky", "fixed", 3, "pageSizeOptions", "pageIndex", "pageSize", "page"], [3, "matColumnDef"], [4, "ngIf", "ngIfElse"], ["botones", ""], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "mobile-label"], [1, "descripcion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], [1, ""], ["color", "accent", "matTooltipPosition", "above", "matTooltipClass", "tooltip-class", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", "TooltipTouchGestures", "auto", 3, "disabled", "mat-icon-button", "mat-button", "ngClass", "matTooltip", "click", 4, "ngFor", "ngForOf"], ["color", "accent", "matTooltipPosition", "above", "matTooltipClass", "tooltip-class", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", "TooltipTouchGestures", "auto", 3, "disabled", "ngClass", "matTooltip", "click"], ["origin", ""], ["class", "dark:bg-primary dark:rounded-full", 3, "svgIcon", 4, "ngIf"], ["class", "dark:bg-primary dark:rounded-full text-center justify-center items-center", 3, "svgIcon", 4, "ngIf"], [1, "dark:bg-primary", "dark:rounded-full", 3, "svgIcon"], [1, "dark:bg-primary", "dark:rounded-full", "text-center", "justify-center", "items-center", 3, "svgIcon"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function TablaDinamicaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TablaDinamicaComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1))("pageIndex", ctx.PageIndex)("pageSize", ctx.Pagesize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__.ActivoPipe],
  styles: [".tooltip-class {\n  font-size: 0.85rem !important;\n  text-transform: uppercase;\n}\n\n.mat-paginator-sticky {\n  bottom: 0px;\n  position: sticky;\n  z-index: 10;\n}\n\n.mat-column-Apellido {\n  width: 7rem;\n}\n\n.mat-paginator, .mat-paginator-container {\n  padding: 0px !important;\n}\n\n.mat-elevation-z8 {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhLWRpbmFtaWNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0oiLCJmaWxlIjoidGFibGEtZGluYW1pY2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcC1jbGFzcyB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW0gIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLXN0aWNreSB7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB6LWluZGV4OiAxMDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tQXBlbGxpZG8ge1xyXG4gICAgd2lkdGg6IDdyZW07XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yICwubWF0LXBhZ2luYXRvci1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtZWxldmF0aW9uLXo4IHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGEtZGluYW1pY2EvdGFibGEtZGluYW1pY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSjtBQUNBLHc4QkFBdzhCIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAtY2xhc3Mge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvci1zdGlja3kge1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLUFwZWxsaWRvIHtcclxuICAgIHdpZHRoOiA3cmVtO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciAsLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/menu.service */ 88802);
/* harmony import */ var _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/activo.pipe */ 77920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);















class TablaDinamicaModule {}
TablaDinamicaModule.ɵfac = function TablaDinamicaModule_Factory(t) {
  return new (t || TablaDinamicaModule)();
};
TablaDinamicaModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: TablaDinamicaModule
});
TablaDinamicaModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_2__.JedsMenuService, {
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA,
    useValue: {}
  }, {
    provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef,
    useValue: {}
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _shared_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TablaDinamicaModule, {
    declarations: [_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__.TablaDinamicaComponent, _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__.ActivoPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _shared_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule],
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


/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_components_tabla-dinamica_tabla-dinamica_module_ts.js.map