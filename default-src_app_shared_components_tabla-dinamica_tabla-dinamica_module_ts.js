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
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





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
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
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
  saveOrdenarArticulos(payload) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.stk_articulo_ordenar}`, payload);
  }
}
TablaDinamicaService.ɵfac = function TablaDinamicaService_Factory(t) {
  return new (t || TablaDinamicaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
TablaDinamicaService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 86907);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 10808);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _services_tabla_dinamica_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tabla-dinamica.service */ 27954);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _core_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/user/user.service */ 37495);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/activo.pipe */ 77920);






















function TablaDinamicaComponent_ng_container_3_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 14)(1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function TablaDinamicaComponent_ng_container_3_ng_container_1_th_1_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.seleccionarTodos($event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r9.allSelected);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Selecci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function TablaDinamicaComponent_ng_container_3_ng_container_1_td_2_Template_mat_checkbox_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const element_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.seleccionarElemento(element_r13, $event.checked));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", element_r13.selected);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_container_1_th_1_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_container_1_td_2_Template, 4, 1, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_2_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r16.columnsNames[i_r4], " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_2_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 16)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "activoPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const i_r4 = ctx_r20.index;
    const column_r3 = ctx_r20.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r17.columnsNames[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r17.booleanParams.includes(column_r3) ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 2, element_r19[column_r3], column_r3) : ctx_r17.parse(element_r19, column_r3), "");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_container_2_th_1_Template, 2, 1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_container_2_td_2_Template, 6, 5, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_th_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r21.columnsNames[i_r4], " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 30);
  }
  if (rf & 2) {
    const accion_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r29.color_primario ? "" : ctx_r29.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r29.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("svgIcon", accion_r26.iconoAccion(element_r24));
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_mat_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 30);
  }
  if (rf & 2) {
    const accion_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r30.color_primario ? "" : ctx_r30.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r30.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("svgIcon", accion_r26.iconoAccionado(element_r24));
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-icon", 30);
  }
  if (rf & 2) {
    const accion_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("svgIcon", accion_r26.iconoDeshabilitado(element_r24));
  }
}
const _c0 = function (a0) {
  return {
    "bg-primary text-center": a0
  };
};
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const accion_r26 = restoredCtx.$implicit;
      const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1);
      const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.emitFunction(accion_r26.functionName, element_r24, _r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_mat_icon_3_Template, 1, 5, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_mat_icon_4_Template, 1, 5, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_mat_icon_5_Template, 1, 1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accion_r26 = ctx.$implicit;
    const element_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-icon-button", accion_r26.type !== "button")("mat-button", accion_r26.type === "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("matTooltip", accion_r26.extra ? accion_r26.nombre_boton(element_r24) : accion_r26.nombre_boton);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", accion_r26.disabled && accion_r26.disabled(element_r24))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c0, accion_r26.type == "button"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !accion_r26.extra && accion_r26.iconoAccion(element_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !accion_r26.extra && accion_r26.iconoAccionado(element_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !accion_r26.extra && accion_r26.iconoDeshabilitado(element_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", accion_r26.type === "button" ? accion_r26.nombre_boton : "", " ");
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 22)(1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_button_4_Template, 7, 13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r22.columnsNames[i_r4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r22.functions);
  }
}
function TablaDinamicaComponent_ng_container_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, TablaDinamicaComponent_ng_container_3_ng_template_3_th_0_Template, 2, 1, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_template_3_td_1_Template, 5, 2, "td", 21);
  }
}
function TablaDinamicaComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TablaDinamicaComponent_ng_container_3_ng_container_1_Template, 3, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TablaDinamicaComponent_ng_container_3_ng_container_2_Template, 3, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TablaDinamicaComponent_ng_container_3_ng_template_3_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matColumnDef", column_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r3 === "seleccion");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r3 != "seleccion" && column_r3 != "acciones")("ngIfElse", _r7);
  }
}
function TablaDinamicaComponent_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 31);
  }
}
function TablaDinamicaComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 32);
  }
  if (rf & 2) {
    const row_r43 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkDrag", ctx_r2.dragAndDrop ? "" : null)("cdkDragData", ctx_r2.dragAndDrop ? row_r43 : null);
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
  constructor(jedsMenu, service, _empresaService, alert, data, menuService, _userService) {
    // this.dataSource = new MatTableDataSource<any>(this.parentData);
    // this.paginator.length = this.totalRows;
    // this.user = this._userService.getCurrentUser();
    this.jedsMenu = jedsMenu;
    this.service = service;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.data = data;
    this.menuService = menuService;
    this._userService = _userService;
    this.default_color = 'text-primary';
    this.allSelected = false;
    this.seleccionados = [];
    this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
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
    this.functionEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.columnsNames = [];
    this.columnsParams = [];
    this.booleanParams = [];
    this.extraClasses = '';
    this.dragAndDrop = false;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.showAlert = false;
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
      this.dragAndDrop = data.dragAndDrop;
    }
    if (!this.columnsNames) {
      this.columnsNames = this.columnsParams;
    }
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.tap)(() => time -= 1)).subscribe();
      }
    });
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
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(sort => {
      if (this.renderType == 'ssp') {
        let column = sort.active;
        switch (sort.direction) {
          case "asc":
            this.sortSSP = `=${column}`; //simplemente mando la columna y se ordena ascendente
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
            if (item.fecha_precarga) {
              item.fecha_precarga = this.cambiarFormatoFecha(item.fecha_precarga);
            }
            if (item.hora_entrega) {
              item.hora_entrega = this.cambiarformatoHora(item.hora_entrega);
            }
            if (item.cotizado) {
              item.cotizado = item.cotizado === 1 ? 'Si' : '';
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
            if (item.total_stock && item.cantidad_pendiente) {
              item.total_stock = parseFloat(item.total_stock).toFixed(0);
              item.cantidad_pendiente = parseFloat(item.cantidad_pendiente).toFixed(0);
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
            if (item.cotizado) {
              item.cotizado = item.cotizado === 1 ? 'Si' : '';
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
            if (item.total_stock && item.cantidad_pendiente) {
              item.total_stock = parseFloat(item.total_stock).toFixed(0);
              item.cantidad_pendiente = parseFloat(item.cantidad_pendiente).toFixed(0);
            }
          });
        }
        if (this.endpoint.toString().includes('view_stock_articulo_deposito')) {
          r.data.result = this.quitarRepetidos(r.data.result);
        }
        this.filterDataSource = r.data.result ? r.data.result : r.data;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(r.data.result ? r.data.result : r.data);
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
  * Esta funcion quita los items repetidos que se utilizaran en combo select
  * @param data
  * @returns arreglo_auxiliar
  */
  quitarRepetidos(data) {
    let arreglo_auxiliar = [];
    data.forEach(a => {
      let e = data.filter(ar => ar.idarticulo === a.idarticulo);
      if (!arreglo_auxiliar.some(ae => ae.idarticulo === a.idarticulo)) {
        let um_stock = this.groupAndAdjustData(e);
        a.stock = um_stock[0]['cantidad'];
        arreglo_auxiliar.push(a);
      }
    });
    return arreglo_auxiliar;
  }
  /**
   * Esta funcion unifica las unidades de medida de un articulo
   * @param data
   * @returns
   */
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
    this.seleccionados = this.seleccionados.filter(item => !elementosPaginaActual.includes(item));
    if (seleccionado) {
      this.seleccionados.push(...elementosPaginaActual);
    } else {
      this.seleccionados = this.seleccionados.filter(item => !elementosPaginaActual.includes(item));
    }
    this.syncSelectionWithCurrentPage();
    this.selectionChange.emit(this.seleccionados);
  }
  /**
   * Selecciona o deselecciona un elemento específico.
   * @param element El elemento que se debe seleccionar o deseleccionar.
   * @param seleccionado Indica si el elemento debe ser seleccionado o deseleccionado.
   */
  seleccionarElemento(element, seleccionado) {
    if (seleccionado) {
      if (!this.seleccionados.includes(element)) {
        this.seleccionados.push(element);
      }
    } else {
      this.seleccionados = this.seleccionados.filter(item => item !== element);
    }
    element.selected = seleccionado;
    this.syncSelectionWithCurrentPage();
    this.allSelected = this.dataSource.data.every(item => this.seleccionados.includes(item));
    this.selectionChange.emit(this.seleccionados);
  }
  /**
   * Obtiene todos los elementos seleccionados actualmente.
   * @returns Un array con los elementos que están actualmente seleccionados.
   */
  getElementosSeleccionados() {
    return this.seleccionados;
  }
  /**
   * Sincroniza la selección de elementos con la página actual.
   * Actualiza el estado de selección de cada elemento en la página actual
   * en función de si están presentes en el conjunto de elementos seleccionados.
   */
  syncSelectionWithCurrentPage() {
    const elementosPaginaActual = this.dataSource.data.slice(this.PageIndex * this.Pagesize, (this.PageIndex + 1) * this.Pagesize);
    elementosPaginaActual.forEach(item => {
      item.selected = this.seleccionados.some(i => JSON.stringify(i) === JSON.stringify(item));
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
  // Lógica para mover elementos al soltar
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__.moveItemInArray)(this.dataSource.data, event.previousIndex, event.currentIndex);
    this.saveOrdenarArticulos(event.currentIndex);
    // this.dataSource.data = [...this.dataSource.data];  // Actualiza el datasource
  }

  saveOrdenarArticulos(currentIndex) {
    let articulo_a_mover = this.dataSource.data.find((a, index) => index === currentIndex); // Artículo arrastrado para cambiar de posicion.
    let bandera = this.dataSource.data.find((a, index) => index === currentIndex + 1); // Artículo que se posicionará debajo del artículo a mover, puede ser `undefined`
    let articulo_2 = bandera ? bandera : this.dataSource.data.find((a, index) => index === currentIndex - 1); // Si mueve el articulo a la ultima posicion, `bandera` devolvera 'undefined'
    if (articulo_a_mover.idarticulo != articulo_2.idarticulo) {
      // Verifico que no sean el mismo articulo
      let payload = {
        idarticulo1: articulo_a_mover.idarticulo,
        idarticulo2: articulo_2.idarticulo // Articulo que se posicionara debajo del articulo a mover
      };
      // Llamado al servicio de ordenamiento
      this.service.saveOrdenarArticulos(payload).subscribe({
        next: data => {
          if (data) {
            this.renderTabla();
            this.alert.success('Artículo movido con éxito');
          }
        }
      });
    }
  }
}
TablaDinamicaComponent.ɵfac = function TablaDinamicaComponent_Factory(t) {
  return new (t || TablaDinamicaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_0__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_tabla_dinamica_service__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_3__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_0__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_user_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService));
};
TablaDinamicaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TablaDinamicaComponent,
  selectors: [["app-tabla-dinamica"]],
  viewQuery: function TablaDinamicaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
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
    extraClasses: "extraClasses",
    dragAndDrop: "dragAndDrop"
  },
  outputs: {
    selectionChange: "selectionChange",
    functionEmitter: "functionEmitter"
  },
  decls: 8,
  vars: 9,
  consts: [[1, "w-full", "cont-with-paginator", "mat-elevation-z8", "mb-2"], [1, "w-full", "max-h-[75vh]", "overflow-y-auto", "mt-2", "pb-12"], ["mat-table", "", "cdkDropList", "", "matSort", "", 1, "w-full", "smm:px-0", "smm:mt-0", "mt-4", "small-table-text", "mb-8", "cont-with-paginator", "responsive-table", 3, "dataSource", "cdkDropListData", "cdkDropListDropped"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "cdkDrag", "cdkDragData", 4, "matRowDef", "matRowDefColumns"], [1, "absolute", "bottom-0", "left-0", "right-0", "bg-slate-800", "rounded-b-2xl", "w-full"], ["aria-label", "Select page of users", 1, "w-full", "rounded-b-lg", "shadow-md", "mat-paginator-sticky", 3, "pageSizeOptions", "pageIndex", "pageSize", "page"], [3, "matColumnDef"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["botones", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], [3, "checked", "change"], ["mat-cell", ""], [1, "mobile-label"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [1, "cell-content"], ["mat-cell", "", "class", "mat-column-botones", 4, "matCellDef"], ["mat-cell", "", 1, "mat-column-botones"], [1, "button-container"], ["color", "accent", "matTooltipPosition", "above", "matTooltipClass", "tooltip-class", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", "TooltipTouchGestures", "auto", 3, "disabled", "mat-icon-button", "mat-button", "ngClass", "matTooltip", "click", 4, "ngFor", "ngForOf"], ["color", "accent", "matTooltipPosition", "above", "matTooltipClass", "tooltip-class", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", "TooltipTouchGestures", "auto", 3, "disabled", "ngClass", "matTooltip", "click"], ["origin", ""], [1, "icon-container"], ["class", "icon ", 3, "class", "color", "svgIcon", 4, "ngIf"], ["class", "icon ", 3, "svgIcon", 4, "ngIf"], [1, "icon", 3, "svgIcon"], ["mat-header-row", ""], ["mat-row", "", 3, "cdkDrag", "cdkDragData"]],
  template: function TablaDinamicaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cdkDropListDropped", function TablaDinamicaComponent_Template_table_cdkDropListDropped_2_listener($event) {
        return ctx.dragAndDrop ? ctx.drop($event) : null;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TablaDinamicaComponent_ng_container_3_Template, 5, 4, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TablaDinamicaComponent_tr_4_Template, 1, 0, "tr", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TablaDinamicaComponent_tr_5_Template, 1, 2, "tr", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6)(7, "mat-paginator", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function TablaDinamicaComponent_Template_mat_paginator_page_7_listener($event) {
        return ctx.cambioPagina($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource)("cdkDropListData", ctx.dragAndDrop ? ctx.dataSource.data : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.columnsParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columnsParams)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columnsParams);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("pageIndex", ctx.PageIndex)("pageSize", ctx.Pagesize);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__.MatTooltip, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckbox, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__.CdkDrag, _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_5__.ActivoPipe],
  styles: [".tooltip-class {\n  font-size: 0.85rem !important;\n  text-transform: uppercase;\n}\n\n.mat-paginator-sticky {\n  bottom: 0px;\n  position: sticky;\n  z-index: 10;\n}\n\n.mat-column-Apellido {\n  width: 7rem;\n}\n\n.mat-paginator,\n.mat-paginator-container {\n  padding: 0px !important;\n}\n\n.mat-elevation-z8 {\n  box-shadow: none !important;\n}\n\n.mat-column-seleccion {\n  padding-left: 12px !important;\n  padding-right: 0px !important;\n}\n\n.mat-column-codigo_interno {\n  width: 170px;\n}\n\n.mat-column-botones {\n  width: 170px;\n}\n\n.icon {\n  width: 38px !important;\n  height: 38px !important;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.icon-container {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 8px;\n}\n\n@media screen and (max-width: 600px) {\n  .responsive-table {\n    /*  table, thead, tbody, th, td, tr {\n      display: block;\n    } */\n  }\n  .responsive-table thead tr {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n  .responsive-table tr {\n    margin-bottom: 10px;\n    border-bottom: 2px solid #ddd;\n  }\n  .responsive-table td:first-child .mat-checkbox {\n    margin-left: auto;\n  }\n  .responsive-table td {\n    border: none;\n    position: relative;\n    padding-left: 50% !important;\n    text-align: right !important;\n    min-height: 35px;\n    display: flex !important;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .responsive-table td:before {\n    content: attr(data-label);\n    position: absolute;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap;\n    font-weight: bold;\n    text-align: left;\n  }\n  .responsive-table .mobile-label {\n    display: inline-block;\n    font-weight: bold;\n    margin-right: 5px;\n    position: absolute;\n    left: 6px;\n    width: 45%;\n    text-align: left;\n  }\n  .responsive-table .cell-content {\n    width: 50%;\n    text-align: right;\n  }\n  .responsive-table .mat-column-botones {\n    width: 100% !important;\n  }\n  .responsive-table .button-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n  }\n  .responsive-table .button-container button {\n    margin: 2px;\n  }\n}\n@media screen and (min-width: 601px) {\n  .responsive-table .mobile-label {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhLWRpbmFtaWNhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtBQUNKOztBQUVBOztFQUVJLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksNkJBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUo7O0FBSUk7RUFESjtJQUVROztPQUFBO0VBRU47RUFFTTtJQUNJLGtCQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7RUFBVjtFQUdNO0lBQ0ksbUJBQUE7SUFDQSw2QkFBQTtFQURWO0VBTU07SUFDSSxpQkFBQTtFQUpWO0VBT007SUFDSSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSw0QkFBQTtJQUNBLDRCQUFBO0lBQ0EsZ0JBQUE7SUFDQSx3QkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7RUFMVjtFQVFNO0lBQ0kseUJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUFOVjtFQVNNO0lBQ0kscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VBUFY7RUFVTTtJQUNJLFVBQUE7SUFDQSxpQkFBQTtFQVJWO0VBV007SUFDSSxzQkFBQTtFQVRWO0VBWU07SUFDSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHlCQUFBO0VBVlY7RUFhTTtJQUNJLFdBQUE7RUFYVjtBQUNGO0FBZUk7RUFDSTtJQUNJLGFBQUE7RUFiVjtBQUNGIiwiZmlsZSI6InRhYmxhLWRpbmFtaWNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2x0aXAtY2xhc3Mge1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvci1zdGlja3kge1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLUFwZWxsaWRvIHtcclxuICAgIHdpZHRoOiA3cmVtO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvcixcclxuLm1hdC1wYWdpbmF0b3ItY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16OCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXNlbGVjY2lvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1jb2RpZ29faW50ZXJubyB7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1ib3RvbmVzIHtcclxuICAgIHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgd2lkdGg6IDM4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzhweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaWNvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ucmVzcG9uc2l2ZS10YWJsZSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIC8qICB0YWJsZSwgdGhlYWQsIHRib2R5LCB0aCwgdGQsIHRyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfSAqL1xyXG5cclxuICAgICAgICB0aGVhZCB0ciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAtOTk5OXB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtOTk5OXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBBw7FhZGlyIGVzdGUgbnVldm8gZXN0aWxvIHBhcmEgZWwgY29udGVuZWRvciBkZWwgY2hlY2tib3hcclxuICAgICAgICB0ZDpmaXJzdC1jaGlsZCAubWF0LWNoZWNrYm94IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IC8vIEVtcHVqYSBlbCBjaGVja2JveCBoYWNpYSBsYSBkZXJlY2hhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9iaWxlLWxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwtY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1jb2x1bW4tYm90b25lcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgICAgICAubW9iaWxlLWxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGEtZGluYW1pY2EvdGFibGEtZGluYW1pY2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7O0VBRUksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0E7RUFDSSxZQUFBO0FBQUo7O0FBR0E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFJSTtFQURKO0lBRVE7O09BQUE7RUFFTjtFQUVNO0lBQ0ksa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQUFWO0VBR007SUFDSSxtQkFBQTtJQUNBLDZCQUFBO0VBRFY7RUFNTTtJQUNJLGlCQUFBO0VBSlY7RUFPTTtJQUNJLFlBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsNEJBQUE7SUFDQSxnQkFBQTtJQUNBLHdCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFQUxWO0VBUU07SUFDSSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQU5WO0VBU007SUFDSSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUFQVjtFQVVNO0lBQ0ksVUFBQTtJQUNBLGlCQUFBO0VBUlY7RUFXTTtJQUNJLHNCQUFBO0VBVFY7RUFZTTtJQUNJLGFBQUE7SUFDQSxlQUFBO0lBQ0EseUJBQUE7RUFWVjtFQWFNO0lBQ0ksV0FBQTtFQVhWO0FBQ0Y7QUFlSTtFQUNJO0lBQ0ksYUFBQTtFQWJWO0FBQ0Y7QUFDQSxvMEtBQW8wSyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sdGlwLWNsYXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3Itc3RpY2t5IHtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1BcGVsbGlkbyB7XHJcbiAgICB3aWR0aDogN3JlbTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3IsXHJcbi5tYXQtcGFnaW5hdG9yLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1lbGV2YXRpb24tejgge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1zZWxlY2Npb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tY29kaWdvX2ludGVybm8ge1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tYm90b25lcyB7XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM4cHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLnJlc3BvbnNpdmUtdGFibGUge1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAvKiAgdGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgdGhlYWQgdHIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTk5OTlweDtcclxuICAgICAgICAgICAgbGVmdDogLTk5OTlweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gQcODwrFhZGlyIGVzdGUgbnVldm8gZXN0aWxvIHBhcmEgZWwgY29udGVuZWRvciBkZWwgY2hlY2tib3hcclxuICAgICAgICB0ZDpmaXJzdC1jaGlsZCAubWF0LWNoZWNrYm94IHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87IC8vIEVtcHVqYSBlbCBjaGVja2JveCBoYWNpYSBsYSBkZXJlY2hhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZDpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDZweDtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9iaWxlLWxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNlbGwtY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC1jb2x1bW4tYm90b25lcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAgICAgICAubW9iaWxlLWxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
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
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 10808);
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
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _shared_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TablaDinamicaModule, {
    declarations: [_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__.TablaDinamicaComponent, _shared_pipes_activo_pipe__WEBPACK_IMPORTED_MODULE_3__.ActivoPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _shared_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponentModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltipModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__.DragDropModule],
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

/***/ 28653:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 96936);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ 78947);


function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  if (period < 0) {
    period = 0;
  }
  return (0,_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(period, period, scheduler);
}

/***/ }),

/***/ 10808:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2022/drag-drop.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CDK_DRAG_CONFIG": () => (/* binding */ CDK_DRAG_CONFIG),
/* harmony export */   "CDK_DRAG_HANDLE": () => (/* binding */ CDK_DRAG_HANDLE),
/* harmony export */   "CDK_DRAG_PARENT": () => (/* binding */ CDK_DRAG_PARENT),
/* harmony export */   "CDK_DRAG_PLACEHOLDER": () => (/* binding */ CDK_DRAG_PLACEHOLDER),
/* harmony export */   "CDK_DRAG_PREVIEW": () => (/* binding */ CDK_DRAG_PREVIEW),
/* harmony export */   "CDK_DROP_LIST": () => (/* binding */ CDK_DROP_LIST),
/* harmony export */   "CDK_DROP_LIST_GROUP": () => (/* binding */ CDK_DROP_LIST_GROUP),
/* harmony export */   "CdkDrag": () => (/* binding */ CdkDrag),
/* harmony export */   "CdkDragHandle": () => (/* binding */ CdkDragHandle),
/* harmony export */   "CdkDragPlaceholder": () => (/* binding */ CdkDragPlaceholder),
/* harmony export */   "CdkDragPreview": () => (/* binding */ CdkDragPreview),
/* harmony export */   "CdkDropList": () => (/* binding */ CdkDropList),
/* harmony export */   "CdkDropListGroup": () => (/* binding */ CdkDropListGroup),
/* harmony export */   "DragDrop": () => (/* binding */ DragDrop),
/* harmony export */   "DragDropModule": () => (/* binding */ DragDropModule),
/* harmony export */   "DragDropRegistry": () => (/* binding */ DragDropRegistry),
/* harmony export */   "DragRef": () => (/* binding */ DragRef),
/* harmony export */   "DropListRef": () => (/* binding */ DropListRef),
/* harmony export */   "copyArrayItem": () => (/* binding */ copyArrayItem),
/* harmony export */   "moveItemInArray": () => (/* binding */ moveItemInArray),
/* harmony export */   "transferArrayItem": () => (/* binding */ transferArrayItem)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 53947);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 15712);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 70867);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 46958);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 28653);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 58184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 44874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 4564);












/**
 * Shallow-extends a stylesheet object with another stylesheet-like object.
 * Note that the keys in `source` have to be dash-cased.
 * @docs-private
 */
function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];
      if (value) {
        dest.setProperty(key, value, importantProperties?.has(key) ? 'important' : '');
      } else {
        dest.removeProperty(key);
      }
    }
  }
  return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */
function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    'touch-action': enable ? '' : 'none',
    '-webkit-user-drag': enable ? '' : 'none',
    '-webkit-tap-highlight-color': enable ? '' : 'transparent',
    'user-select': userSelect,
    '-ms-user-select': userSelect,
    '-webkit-user-select': userSelect,
    '-moz-user-select': userSelect
  });
}
/**
 * Toggles whether an element is visible while preserving its dimensions.
 * @param element Element whose visibility to toggle
 * @param enable Whether the element should be visible.
 * @param importantProperties Properties to be set as `!important`.
 * @docs-private
 */
function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? '' : 'fixed',
    top: enable ? '' : '0',
    opacity: enable ? '' : '0',
    left: enable ? '' : '-999em'
  }, importantProperties);
}
/**
 * Combines a transform string with an optional other transform
 * that exited before the base transform was applied.
 */
function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != 'none' ? transform + ' ' + initialTransform : transform;
}

/** Parses a CSS time value to milliseconds. */
function parseCssTimeUnitsToMs(value) {
  // Some browsers will return it in seconds, whereas others will return milliseconds.
  const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */
function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  const property = transitionedProperties.find(prop => prop === 'transform' || prop === 'all');
  // If there's no transition for `all` or `transform`, we shouldn't do anything.
  if (!property) {
    return 0;
  }
  // Get the index of the property that we're interested in and match
  // it up to the same index in `transition-delay` and `transition-duration`.
  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */
function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(',').map(part => part.trim());
}

/** Gets a mutable version of an element's bounding `ClientRect`. */
function getMutableClientRect(element) {
  const clientRect = element.getBoundingClientRect();
  // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `ClientRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
  return {
    top: clientRect.top,
    right: clientRect.right,
    bottom: clientRect.bottom,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height,
    x: clientRect.x,
    y: clientRect.y
  };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */
function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */
function adjustClientRect(clientRect, top, left) {
  clientRect.top += top;
  clientRect.bottom = clientRect.top + clientRect.height;
  clientRect.left += left;
  clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */
function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}

/** Keeps track of the scroll position and dimensions of the parents of an element. */
class ParentPositionTracker {
  constructor(_document) {
    this._document = _document;
    /** Cached positions of the scrollable parent elements. */
    this.positions = new Map();
  }
  /** Clears the cached positions. */
  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */
  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach(element => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */
  handleScroll(event) {
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
    const cachedPosition = this.positions.get(target);
    if (!cachedPosition) {
      return null;
    }
    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;
    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }
    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft;
    // Go through and update the cached positions of the scroll
    // parents that are inside the element that was scrolled.
    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustClientRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */
  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }
}

/** Creates a deep clone of an element. */
function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase();
  // Remove the `id` to avoid having multiple elements with the same id on the page.
  clone.removeAttribute('id');
  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }
  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }
  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */
function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);
  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);
    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
}
// Counter for unique cloned radio button names.
let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */
function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  }
  // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.
  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */
function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');
  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch {}
  }
}

/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/** Options that can be used to bind an active event listener. */
const activeEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false
});
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */
const MOUSE_EVENT_IGNORE_TIME = 800;
/** Inline styles to be set as `!important` while dragging. */
const dragImportantProperties = new Set([
// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
'position']);
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */
class DragRef {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }
  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this._toggleNativeDragInteractions();
      this._handles.forEach(handle => toggleNativeDragInteractions(handle, newValue));
    }
  }
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */
    this._passiveTransform = {
      x: 0,
      y: 0
    };
    /** CSS `transform` that is applied to the element while it's being dragged. */
    this._activeTransform = {
      x: 0,
      y: 0
    };
    /**
     * Whether the dragging sequence has been started. Doesn't
     * necessarily mean that the element has been moved.
     */
    this._hasStartedDragging = false;
    /** Emits when the item is being moved. */
    this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Subscription to pointer movement events. */
    this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the event that is dispatched when the user lifts their pointer. */
    this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the viewport being scrolled. */
    this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Subscription to the viewport being resized. */
    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Cached reference to the boundary element. */
    this._boundaryElement = null;
    /** Whether the native dragging interactions have been enabled on the root element. */
    this._nativeInteractionsEnabled = true;
    /** Elements that can be used to drag the draggable item. */
    this._handles = [];
    /** Registered handles that are currently disabled. */
    this._disabledHandles = new Set();
    /** Layout direction of the item. */
    this._direction = 'ltr';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */
    this.dragStartDelay = 0;
    this._disabled = false;
    /** Emits as the drag sequence is being prepared. */
    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user starts dragging the item. */
    this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user has released a drag item, before any animations have started. */
    this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user stops dragging an item in the container. */
    this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user has moved the item into a new container. */
    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user removes the item its container by dragging it into another container. */
    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user drops the item inside a container. */
    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    this.moved = this._moveEvents;
    /** Handler for the `mousedown`/`touchstart` events. */
    this._pointerDown = event => {
      this.beforeStarted.next();
      // Delegate the event based on whether it started from a handle or the element itself.
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */
    this._pointerMove = event => {
      const pointerPosition = this._getPointerPositionOnPage(event);
      if (!this._hasStartedDragging) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold;
        // Only start dragging after the user has moved more than the minimum distance in either
        // direction. Note that this is preferable over doing something like `skip(minimumDistance)`
        // in the `pointerMove` subscription, because we're not guaranteed to have one move event
        // per pixel of movement (e.g. if the user moves their pointer quickly).
        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);
          const container = this._dropContainer;
          if (!isDelayElapsed) {
            this._endDragSequence(event);
            return;
          }
          // Prevent other drag sequences from starting while something in the container is still
          // being dragged. This can happen while we're waiting for the drop animation to finish
          // and can cause errors, because some elements might still be moving around.
          if (!container || !container.isDragging() && !container.isReceiving()) {
            // Prevent the default action as soon as the dragging sequence is considered as
            // "started" since waiting for the next event can allow the device to begin scrolling.
            event.preventDefault();
            this._hasStartedDragging = true;
            this._ngZone.run(() => this._startDragSequence(event));
          }
        }
        return;
      }
      // We prevent the default action down here so that we know that dragging has started. This is
      // important for touch devices where doing this too early can unnecessarily block scrolling,
      // if there's a dragging delay.
      event.preventDefault();
      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);
      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;
      this._updatePointerDirectionDelta(constrainedPointerPosition);
      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        // If there's a position constraint function, we want the element's top/left to be at the
        // specific position on the page. Use the initial position as a reference if that's the case.
        const offset = this.constrainPosition ? this._initialClientRect : this._pickupPositionOnPage;
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - offset.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - offset.y + this._passiveTransform.y;
        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
      }
      // Since this event gets fired for every pixel while dragging, we only
      // want to fire it if the consumer opted into it. Also we have to
      // re-enter the zone because we run all of the events on the outside.
      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */
    this._pointerUp = event => {
      this._endDragSequence(event);
    };
    /** Handles a native `dragstart` event. */
    this._nativeDragStart = event => {
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);
        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          event.preventDefault();
        }
      } else if (!this.disabled) {
        // Usually this isn't necessary since the we prevent the default action in `pointerDown`,
        // but some cases like dragging of links can slip through (see #24403).
        event.preventDefault();
      }
    };
    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);
    _dragDropRegistry.registerDragItem(this);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */
  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */
  withHandles(handles) {
    this._handles = handles.map(handle => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(handle));
    this._handles.forEach(handle => toggleNativeDragInteractions(handle, this.disabled));
    this._toggleNativeDragInteractions();
    // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
    // the set, rather than iterate over it and filter out the destroyed handles, because while
    // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
    // use an array internally which may throw an error.
    const disabledHandles = new Set();
    this._disabledHandles.forEach(handle => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });
    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */
  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */
  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */
  withRootElement(rootElement) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(rootElement);
    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }
      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        element.addEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
      });
      this._initialTransform = undefined;
      this._rootElement = element;
    }
    if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }
    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */
  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(boundaryElement) : null;
    this._resizeSubscription.unsubscribe();
    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }
    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */
  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */
  dispose() {
    this._removeRootElementListeners(this._rootElement);
    // Do this check before removing from the registry since it'll
    // stop being considered as dragged once it is removed.
    if (this.isDragging()) {
      // Since we move out the element to the end of the body while it's being
      // dragged, we have to make sure that it's removed if it gets destroyed.
      this._rootElement?.remove();
    }
    this._anchor?.remove();
    this._destroyPreview();
    this._destroyPlaceholder();
    this._dragDropRegistry.removeDragItem(this);
    this._removeSubscriptions();
    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this._moveEvents.complete();
    this._handles = [];
    this._disabledHandles.clear();
    this._dropContainer = undefined;
    this._resizeSubscription.unsubscribe();
    this._parentPositions.clear();
    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */
  isDragging() {
    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._rootElement.style.transform = this._initialTransform || '';
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */
  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);
      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */
  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);
      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */
  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */
  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;
    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }
    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */
  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */
  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;
    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */
  _removeSubscriptions() {
    this._pointerMoveSubscription.unsubscribe();
    this._pointerUpSubscription.unsubscribe();
    this._scrollSubscription.unsubscribe();
  }
  /** Destroys the preview element and its ViewRef. */
  _destroyPreview() {
    this._preview?.remove();
    this._previewRef?.destroy();
    this._preview = this._previewRef = null;
  }
  /** Destroys the placeholder element and its ViewRef. */
  _destroyPlaceholder() {
    this._placeholder?.remove();
    this._placeholderRef?.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */
  _endDragSequence(event) {
    // Note that here we use `isDragging` from the service, rather than from `this`.
    // The difference is that the one from the service reflects whether a dragging sequence
    // has been initiated, whereas the one on `this` includes whether the user has passed
    // the minimum dragging threshold.
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }
    this._removeSubscriptions();
    this._dragDropRegistry.stopDragging(this);
    this._toggleNativeDragInteractions();
    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }
    if (!this._hasStartedDragging) {
      return;
    }
    this.released.next({
      source: this,
      event
    });
    if (this._dropContainer) {
      // Stop scrolling immediately, instead of waiting for the animation to finish.
      this._dropContainer._stopScrolling();
      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);
        this._cleanupCachedDimensions();
        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      // Convert the active transform into a passive one. This means that next time
      // the user starts dragging the item, its position will be calculated relatively
      // to the new passive transform.
      this._passiveTransform.x = this._activeTransform.x;
      const pointerPosition = this._getPointerPositionOnPage(event);
      this._passiveTransform.y = this._activeTransform.y;
      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition,
          event
        });
      });
      this._cleanupCachedDimensions();
      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */
  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }
    this._toggleNativeDragInteractions();
    const dropContainer = this._dropContainer;
    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;
      const placeholder = this._placeholder = this._createPlaceholderElement();
      const anchor = this._anchor = this._anchor || this._document.createComment('');
      // Needs to happen before the root element is moved.
      const shadowRoot = this._getShadowRoot();
      // Insert an anchor node so that we can restore the element's position in the DOM.
      parent.insertBefore(anchor, element);
      // There's no risk of transforms stacking when inside a drop container so
      // we can keep the initial transform up to date any time dragging starts.
      this._initialTransform = element.style.transform || '';
      // Create the preview after the initial transform has
      // been cached, because it can be affected by the transform.
      this._preview = this._createPreviewElement();
      // We move the element out at the end of the body and we make it hidden, because keeping it in
      // place will throw off the consumer's `:last-child` selectors. We can't remove the element
      // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
      toggleVisibility(element, false, dragImportantProperties);
      this._document.body.appendChild(parent.replaceChild(placeholder, element));
      this._getPreviewInsertionPoint(parent, shadowRoot).appendChild(this._preview);
      this.started.next({
        source: this,
        event
      }); // Emit before notifying the container.
      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this,
        event
      });
      this._initialContainer = this._initialIndex = undefined;
    }
    // Important to run after we've called `start` on the parent container
    // so that it has had time to resolve its scrollable parents.
    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */
  _initializeDragSequence(referenceElement, event) {
    // Stop propagation if the item is inside another
    // draggable so we don't start multiple drag sequences.
    if (this._parentDragRef) {
      event.stopPropagation();
    }
    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.isFakeTouchstartFromScreenReader)(event) : (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.isFakeMousedownFromScreenReader)(event);
    // If the event started from an element with the native HTML drag&drop, it'll interfere
    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
    // events from firing on touch devices.
    if (target && target.draggable && event.type === 'mousedown') {
      event.preventDefault();
    }
    // Abort if the user is already dragging or is using a mouse button other than the primary one.
    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    }
    // If we've got handles, we need to disable the tap highlight on the entire root element,
    // otherwise iOS will still add it, even though all the drag interactions on the handle
    // are disabled.
    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || '';
      rootStyles.webkitTapHighlightColor = 'transparent';
    }
    this._hasStartedDragging = this._hasMoved = false;
    // Avoid multiple subscriptions and memory leaks when multi touch
    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)
    this._removeSubscriptions();
    this._initialClientRect = this._rootElement.getBoundingClientRect();
    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(scrollEvent => this._updateOnScroll(scrollEvent));
    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    }
    // If we have a custom preview we can't know ahead of time how large it'll be so we position
    // it next to the cursor. The exception is when the consumer has opted into making the preview
    // the same size as the root element, in which case we do know the size.
    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(this._initialClientRect, referenceElement, event);
    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);
    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();
    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
  _cleanupDragArtifacts(event) {
    // Restore the element's visibility and insert it at its old position in the DOM.
    // It's important that we maintain the position, because moving the element around in the DOM
    // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
    // while moving the existing elements in all other cases.
    toggleVisibility(this._rootElement, true, dragImportantProperties);
    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);
    this._destroyPreview();
    this._destroyPlaceholder();
    this._initialClientRect = this._boundaryRect = this._previewRect = this._initialTransform = undefined;
    // Re-enter the NgZone since we bound `document` events on the outside.
    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);
      const pointerPosition = this._getPointerPositionOnPage(event);
      const distance = this._getDragDistance(pointerPosition);
      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);
      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition,
        event
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container: container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition,
        event
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition, event);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */
  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    // Drop container that draggable has been moved into.
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y);
    // If we couldn't find a new container to move the item into, and the item has left its
    // initial container, check whether the it's over the initial container. This handles the
    // case where two containers are connected one way and the user tries to undo dragging an
    // item into a new container.
    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }
    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        // Notify the old container that the item has left.
        this.exited.next({
          item: this,
          container: this._dropContainer
        });
        this._dropContainer.exit(this);
        // Notify the new container that the item has entered.
        this._dropContainer = newContainer;
        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer &&
        // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : undefined);
        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    }
    // Dragging may have been interrupted as a result of the events above.
    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);
      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);
      if (this.constrainPosition) {
        this._applyPreviewTransform(x, y);
      } else {
        this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
      }
    }
  }
  /**
   * Creates the element that will be rendered next to the user's pointer
   * and will be used as a preview of the element that is being dragged.
   */
  _createPreviewElement() {
    const previewConfig = this._previewTemplate;
    const previewClass = this.previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;
    if (previewTemplate && previewConfig) {
      // Measure the element before we've inserted the preview
      // since the insertion could throw off the measurement.
      const rootRect = previewConfig.matchSize ? this._initialClientRect : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewRef = viewRef;
      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      preview = deepCloneNode(this._rootElement);
      matchElementSize(preview, this._initialClientRect);
      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }
    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      'pointer-events': 'none',
      // We have to reset the margin, because it can throw off positioning relative to the viewport.
      'margin': '0',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': `${this._config.zIndex || 1000}`
    }, dragImportantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add('cdk-drag-preview');
    preview.setAttribute('dir', this._direction);
    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach(className => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }
    return preview;
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */
  _animatePreviewToPlaceholder() {
    // If the user hasn't moved yet, the transitionend event won't fire.
    if (!this._hasMoved) {
      return Promise.resolve();
    }
    const placeholderRect = this._placeholder.getBoundingClientRect();
    // Apply the class that adds a transition to the preview.
    this._preview.classList.add('cdk-drag-animating');
    // Move the preview to the placeholder position.
    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top);
    // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
    // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
    // apply its style, we take advantage of the available info to figure out whether we need to
    // bind the event in the first place.
    const duration = getTransformTransitionDurationInMs(this._preview);
    if (duration === 0) {
      return Promise.resolve();
    }
    return this._ngZone.runOutsideAngular(() => {
      return new Promise(resolve => {
        const handler = event => {
          if (!event || (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event) === this._preview && event.propertyName === 'transform') {
            this._preview?.removeEventListener('transitionend', handler);
            resolve();
            clearTimeout(timeout);
          }
        };
        // If a transition is short enough, the browser might not fire the `transitionend` event.
        // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
        // fire if the transition hasn't completed when it was supposed to.
        const timeout = setTimeout(handler, duration * 1.5);
        this._preview.addEventListener('transitionend', handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */
  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;
    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);
      this._placeholderRef.detectChanges();
      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    }
    // Stop pointer events on the preview so the user can't
    // interact with it while the preview is animating.
    placeholder.style.pointerEvents = 'none';
    placeholder.classList.add('cdk-drag-placeholder');
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */
  _getPointerPositionInElement(elementRect, referenceElement, event) {
    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;
    const scrollPosition = this._getViewportScrollPosition();
    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */
  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();
    const point = isTouchEvent(event) ?
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
    // to have a value, but Firefox in device emulation mode has a bug where both can be empty
    // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
    // throwing an error. The value returned here will be incorrect, but since this only
    // breaks inside a developer tool and the value is only used for secondary information,
    // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
    event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top;
    // if dragging SVG element, try to convert from the screen coordinate system to the SVG
    // coordinate system
    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();
      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();
        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }
    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */
  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this, this._initialClientRect, this._pickupPositionInElement) : point;
    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
      y = this._pickupPositionOnPage.y;
    } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
      x = this._pickupPositionOnPage.x;
    }
    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = this._pickupPositionInElement;
      const boundaryRect = this._boundaryRect;
      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();
      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }
    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */
  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
    // Amount of pixels the user has dragged since the last time the direction changed.
    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y);
    // Because we handle pointer events on a per-pixel basis, we don't want the delta
    // to change for every pixel, otherwise anything that depends on it can look erratic.
    // To make the delta more consistent, we track how much the user has moved since the last
    // delta change and we only update it after it has reached a certain threshold.
    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }
    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }
    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */
  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }
    const shouldEnable = this._handles.length > 0 || !this.isDragging();
    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */
  _removeRootElementListeners(element) {
    element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
    element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    element.removeEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyRootElementTransform(x, y) {
    const transform = getTransform(x, y);
    const styles = this._rootElement.style;
    // Cache the previous transform amount only after the first drag sequence, because
    // we don't want our own transforms to stack on top of each other.
    // Should be excluded none because none + translate3d(x, y, x) is invalid css
    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != 'none' ? styles.transform : '';
    }
    // Preserve the previous `transform` value, if there was one. Note that we apply our own
    // transform before the user's, because things like rotation can affect which direction
    // the element will be translated towards.
    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */
  _applyPreviewTransform(x, y) {
    // Only apply the initial transform if the preview is a clone of the original element, otherwise
    // it could be completely different and the transform might not make sense anymore.
    const initialTransform = this._previewTemplate?.template ? undefined : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.style.transform = combineTransforms(transform, initialTransform);
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */
  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;
    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */
  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = undefined;
    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */
  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;
    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }
    // Note: don't use `_clientRectAtStart` here, because we want the latest position.
    const elementRect = this._rootElement.getBoundingClientRect();
    const boundaryRect = this._boundaryElement.getBoundingClientRect();
    // It's possible that the element got hidden away after dragging (e.g. by switching to a
    // different tab). Don't do anything in this case so we don't clear the user's position.
    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }
    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom;
    // If the element has become wider than the boundary, we can't
    // do much to make it fit so we just anchor it to the left.
    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }
      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    }
    // If the element has become taller than the boundary, we can't
    // do much to make it fit so we just anchor it to the top.
    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }
      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }
    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */
  _getDragStartDelay(event) {
    const value = this.dragStartDelay;
    if (typeof value === 'number') {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }
    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */
  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);
    if (scrollDifference) {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);
      // ClientRect dimensions are based on the scroll position of the page and its parent
      // node so we have to update the cached boundary ClientRect if the user has scrolled.
      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }
      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top;
      // If we're in free drag mode, we have to update the active transform, because
      // it isn't relative to the viewport like the preview inside a drop list.
      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;
        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */
  _getViewportScrollPosition() {
    return this._parentPositions.positions.get(this._document)?.scrollPosition || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (this._cachedShadowRoot === undefined) {
      this._cachedShadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._rootElement);
    }
    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */
  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || 'global';
    if (previewContainer === 'parent') {
      return initialParent;
    }
    if (previewContainer === 'global') {
      const documentRef = this._document;
      // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.
      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */
  _getPreviewRect() {
    // Cache the preview element rect if we haven't cached it already or if
    // we cached it too early before the element dimensions were computed.
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = this._preview ? this._preview.getBoundingClientRect() : this._initialClientRect;
    }
    return this._previewRect;
  }
  /** Gets a handle that is the target of an event. */
  _getTargetHandle(event) {
    return this._handles.find(handle => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }
}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */
function getTransform(x, y) {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/** Clamps a value between a minimum and a maximum. */
function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/** Determines whether an event is a touch event. */
function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */
function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;
  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }
  const wrapper = _document.createElement('div');
  rootNodes.forEach(node => wrapper.appendChild(node));
  return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */
function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}

/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */
function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);
  if (from === to) {
    return;
  }
  const target = array[from];
  const delta = to < from ? -1 : 1;
  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }
  array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const to = clamp(targetIndex, targetArray.length);
  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
/** Clamps a number between zero and a maximum. */
function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}

/**
 * Strategy that only supports sorting along a single axis.
 * Items are reordered using CSS transforms which allows for sorting to be animated.
 * @docs-private
 */
class SingleAxisSortStrategy {
  constructor(_element, _dragDropRegistry) {
    this._element = _element;
    this._dragDropRegistry = _dragDropRegistry;
    /** Cache of the dimensions of all the items inside the container. */
    this._itemPositions = [];
    /** Direction in which the list is oriented. */
    this.orientation = 'vertical';
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occurred and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */
    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
  }
  /**
   * To be called when the drag sequence starts.
   * @param items Items that are currently in the list.
   */
  start(items) {
    this.withItems(items);
  }
  /**
   * To be called when an item is being sorted.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  sort(item, pointerX, pointerY, pointerDelta) {
    const siblings = this._itemPositions;
    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
    if (newIndex === -1 && siblings.length > 0) {
      return null;
    }
    const isHorizontal = this.orientation === 'horizontal';
    const currentIndex = siblings.findIndex(currentItem => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1;
    // How many pixels the item's placeholder should be offset.
    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
    // How many pixels all the other items should be offset.
    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
    // Save the previous order of the items before moving the item to its new index.
    // We use this to check whether an item has been moved as a result of the sorting.
    const oldOrder = siblings.slice();
    // Shuffle the array in place.
    moveItemInArray(siblings, currentIndex, newIndex);
    siblings.forEach((sibling, index) => {
      // Don't do anything if the position hasn't changed.
      if (oldOrder[index] === sibling) {
        return;
      }
      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement();
      // Update the offset to reflect the new position.
      sibling.offset += offset;
      // Since we're moving the items with a `transform`, we need to adjust their cached
      // client rects to reflect their new position, as well as swap their positions in the cache.
      // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
      // elements may be mid-animation which will give us a wrong result.
      if (isHorizontal) {
        // Round the transforms since some browsers will
        // blur the elements, for sub-pixel transforms.
        elementToOffset.style.transform = combineTransforms(`translate3d(${Math.round(sibling.offset)}px, 0, 0)`, sibling.initialTransform);
        adjustClientRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${Math.round(sibling.offset)}px, 0)`, sibling.initialTransform);
        adjustClientRect(sibling.clientRect, offset, 0);
      }
    });
    // Note that it's important that we do this after the client rects have been adjusted.
    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
    return {
      previousIndex: currentIndex,
      currentIndex: newIndex
    };
  }
  /**
   * Called when an item is being moved into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    const newIndex = index == null || index < 0 ?
    // We use the coordinates of where the item entered the drop
    // zone to figure out at which index it should be inserted.
    this._getItemIndexFromPointerPosition(item, pointerX, pointerY) : index;
    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex];
    // If the item at the new position is the same as the item that is being dragged,
    // it means that we're trying to restore the item to its initial position. In this
    // case we should use the next item from the list as the reference.
    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    }
    // If we didn't find a new position reference, it means that either the item didn't start off
    // in this container, or that the item requested to be inserted at the end of the list.
    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    }
    // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
    // into another container and back again), we have to ensure that it isn't duplicated.
    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    }
    // Don't use items that are being dragged as a reference, because
    // their element has been moved down to the bottom of the body.
    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this._element).appendChild(placeholder);
      activeDraggables.push(item);
    }
    // The transform needs to be cleared so it doesn't throw off the measurements.
    placeholder.style.transform = '';
    // Note that usually `start` is called together with `enter` when an item goes into a new
    // container. This will cache item positions, but we need to refresh them since the amount
    // of items has changed.
    this._cacheItemPositions();
  }
  /** Sets the items that are currently part of the list. */
  withItems(items) {
    this._activeDraggables = items.slice();
    this._cacheItemPositions();
  }
  /** Assigns a sort predicate to the strategy. */
  withSortPredicate(predicate) {
    this._sortPredicate = predicate;
  }
  /** Resets the strategy to its initial state before dragging was started. */
  reset() {
    // TODO(crisbeto): may have to wait for the animations to finish.
    this._activeDraggables.forEach(item => {
      const rootElement = item.getRootElement();
      if (rootElement) {
        const initialTransform = this._itemPositions.find(p => p.drag === item)?.initialTransform;
        rootElement.style.transform = initialTransform || '';
      }
    });
    this._itemPositions = [];
    this._activeDraggables = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;
  }
  /**
   * Gets a snapshot of items currently in the list.
   * Can include items that we dragged in from another list.
   */
  getActiveItemsSnapshot() {
    return this._activeDraggables;
  }
  /** Gets the index of a specific item. */
  getItemIndex(item) {
    // Items are sorted always by top/left in the cache, however they flow differently in RTL.
    // The rest of the logic still stands no matter what orientation we're in, however
    // we need to invert the array when determining the index.
    const items = this.orientation === 'horizontal' && this.direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex(currentItem => currentItem.drag === item);
  }
  /** Used to notify the strategy that the scroll position has changed. */
  updateOnScroll(topDifference, leftDifference) {
    // Since we know the amount that the user has scrolled we can shift all of the
    // client rectangles ourselves. This is cheaper than re-measuring everything and
    // we can avoid inconsistent behavior where we might be measuring the element before
    // its position has changed.
    this._itemPositions.forEach(({
      clientRect
    }) => {
      adjustClientRect(clientRect, topDifference, leftDifference);
    });
    // We need two loops for this, because we want all of the cached
    // positions to be up-to-date before we re-sort the item.
    this._itemPositions.forEach(({
      drag
    }) => {
      if (this._dragDropRegistry.isDragging(drag)) {
        // We need to re-sort the item manually, because the pointer move
        // events won't be dispatched while the user is scrolling.
        drag._sortFromLastPointerPosition();
      }
    });
  }
  /** Refreshes the position cache of the items and sibling containers. */
  _cacheItemPositions() {
    const isHorizontal = this.orientation === 'horizontal';
    this._itemPositions = this._activeDraggables.map(drag => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || '',
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */
  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top;
    // Account for differences in the item width/height.
    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }
    return itemOffset;
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */
  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
    if (immediateSibling) {
      const start = isHorizontal ? 'left' : 'top';
      const end = isHorizontal ? 'right' : 'bottom';
      // Get the spacing between the start of the current item and the end of the one immediately
      // after it in the direction in which the user is dragging, or vice versa. We add it to the
      // offset in order to push the element to where it will be when it's inline and is influenced
      // by the `margin` of its siblings.
      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }
    return siblingOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */
  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }
    const itemPositions = this._itemPositions;
    const isHorizontal = this.orientation === 'horizontal';
    // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
    // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)
    const reversed = itemPositions[0].drag !== this._activeDraggables[0];
    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */
  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this.orientation === 'horizontal';
    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      // Skip the item itself.
      if (drag === item) {
        return false;
      }
      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y;
        // If the user is still hovering over the same item as last time, their cursor hasn't left
        // the item after we made the swap, and they didn't change the direction in which they're
        // dragging, we don't consider it a direction swap.
        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }
      return isHorizontal ?
      // Round these down since most browsers report client rects with
      // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
      pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });
    return index === -1 || !this._sortPredicate(index, item) ? -1 : index;
  }
}

/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */
const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */
const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */
class DropListRef {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    /** Whether starting a dragging sequence from this container is disabled. */
    this.disabled = false;
    /** Whether sorting items within the list is disabled. */
    this.sortingDisabled = false;
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */
    this.autoScrollDisabled = false;
    /** Number of pixels to scroll for each frame when auto-scrolling an element. */
    this.autoScrollStep = 2;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    this.enterPredicate = () => true;
    /** Function that is used to determine whether an item can be sorted into a particular index. */
    this.sortPredicate = () => true;
    /** Emits right before dragging has started. */
    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user drops an item inside the container. */
    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits as the user is swapping items while actively dragging. */
    this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when a dragging sequence is started in a list connected to the current one. */
    this.receivingStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when a dragging sequence is stopped from a list connected to the current one. */
    this.receivingStopped = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Whether an item in the list is being dragged. */
    this._isDragging = false;
    /** Draggable items in the container. */
    this._draggables = [];
    /** Drop lists that are connected to the current one. */
    this._siblings = [];
    /** Connected siblings that currently have a dragged item. */
    this._activeSiblings = new Set();
    /** Subscription to the window being scrolled. */
    this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
    /** Vertical direction in which the list is currently scrolling. */
    this._verticalScrollDirection = 0 /* AutoScrollVerticalDirection.NONE */;
    /** Horizontal direction in which the list is currently scrolling. */
    this._horizontalScrollDirection = 0 /* AutoScrollHorizontalDirection.NONE */;
    /** Used to signal to the current auto-scroll sequence when to stop. */
    this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */
    this._cachedShadowRoot = null;
    /** Starts the interval that'll auto-scroll the element. */
    this._startScrollInterval = () => {
      this._stopScrolling();
      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(0, rxjs__WEBPACK_IMPORTED_MODULE_6__.animationFrameScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;
        if (this._verticalScrollDirection === 1 /* AutoScrollVerticalDirection.UP */) {
          node.scrollBy(0, -scrollStep);
        } else if (this._verticalScrollDirection === 2 /* AutoScrollVerticalDirection.DOWN */) {
          node.scrollBy(0, scrollStep);
        }
        if (this._horizontalScrollDirection === 1 /* AutoScrollHorizontalDirection.LEFT */) {
          node.scrollBy(-scrollStep, 0);
        } else if (this._horizontalScrollDirection === 2 /* AutoScrollHorizontalDirection.RIGHT */) {
          node.scrollBy(scrollStep, 0);
        }
      });
    };
    this.element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(element);
    this._document = _document;
    this.withScrollableParents([this.element]);
    _dragDropRegistry.registerDropContainer(this);
    this._parentPositions = new ParentPositionTracker(_document);
    this._sortStrategy = new SingleAxisSortStrategy(this.element, _dragDropRegistry);
    this._sortStrategy.withSortPredicate((index, item) => this.sortPredicate(index, item, this));
  }
  /** Removes the drop list functionality from the DOM element. */
  dispose() {
    this._stopScrolling();
    this._stopScrollTimers.complete();
    this._viewportScrollSubscription.unsubscribe();
    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();
    this.receivingStarted.complete();
    this.receivingStopped.complete();
    this._activeSiblings.clear();
    this._scrollNode = null;
    this._parentPositions.clear();
    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */
  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */
  start() {
    this._draggingStarted();
    this._notifyReceivingSiblings();
  }
  /**
   * Attempts to move an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */
  enter(item, pointerX, pointerY, index) {
    this._draggingStarted();
    // If sorting is disabled, we want the item to return to its starting
    // position if the user is returning it to its initial container.
    if (index == null && this.sortingDisabled) {
      index = this._draggables.indexOf(item);
    }
    this._sortStrategy.enter(item, pointerX, pointerY, index);
    // Note that this usually happens inside `_draggingStarted` as well, but the dimensions
    // can change when the sort strategy moves the item around inside `enter`.
    this._cacheParentPositions();
    // Notify siblings at the end so that the item has been inserted into the `activeDraggables`.
    this._notifyReceivingSiblings();
    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */
  exit(item) {
    this._reset();
    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   * @param event Event that triggered the dropping sequence.
   *
   * @breaking-change 15.0.0 `previousIndex` and `event` parameters to become required.
   */
  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint, event = {}) {
    this._reset();
    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint,
      event
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */
  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach(item => item._withDropContainer(this));
    if (this.isDragging()) {
      const draggedItems = previousItems.filter(item => item.isDragging());
      // If all of the items being dragged were removed
      // from the list, abort the current drag sequence.
      if (draggedItems.every(item => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._sortStrategy.withItems(this._draggables);
      }
    }
    return this;
  }
  /** Sets the layout direction of the drop list. */
  withDirection(direction) {
    this._sortStrategy.direction = direction;
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */
  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */
  withOrientation(orientation) {
    // TODO(crisbeto): eventually we should be constructing the new sort strategy here based on
    // the new orientation. For now we can assume that it'll always be `SingleAxisSortStrategy`.
    this._sortStrategy.orientation = orientation;
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */
  withScrollableParents(elements) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this.element);
    // We always allow the current element to be scrollable
    // so we need to ensure that it's in the array.
    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */
  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */
  getItemIndex(item) {
    return this._isDragging ? this._sortStrategy.getItemIndex(item) : this._draggables.indexOf(item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */
  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */
  _sortItem(item, pointerX, pointerY, pointerDelta) {
    // Don't sort the item if sorting is disabled or it's out of range.
    if (this.sortingDisabled || !this._clientRect || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }
    const result = this._sortStrategy.sort(item, pointerX, pointerY, pointerDelta);
    if (result) {
      this.sorted.next({
        previousIndex: result.previousIndex,
        currentIndex: result.currentIndex,
        container: this,
        item
      });
    }
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */
  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }
    let scrollNode;
    let verticalScrollDirection = 0 /* AutoScrollVerticalDirection.NONE */;
    let horizontalScrollDirection = 0 /* AutoScrollHorizontalDirection.NONE */;
    // Check whether we should start scrolling any of the parent containers.
    this._parentPositions.positions.forEach((position, element) => {
      // We have special handling for the `document` below. Also this would be
      // nicer with a  for...of loop, but it requires changing a compiler flag.
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }
      if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);
        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    });
    // Otherwise check if we can start scrolling the viewport.
    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();
      const clientRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
      scrollNode = window;
    }
    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;
      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */
  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */
  _draggingStarted() {
    const styles = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this.element).style;
    this.beforeStarted.next();
    this._isDragging = true;
    // We need to disable scroll snapping while the user is dragging, because it breaks automatic
    // scrolling. The browser seems to round the value based on the snapping points which means
    // that we can't increment/decrement the scroll position.
    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
    styles.scrollSnapType = styles.msScrollSnapType = 'none';
    this._sortStrategy.start(this._draggables);
    this._cacheParentPositions();
    this._viewportScrollSubscription.unsubscribe();
    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */
  _cacheParentPositions() {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this.element);
    this._parentPositions.cache(this._scrollableElements);
    // The list element is always in the `scrollableElements`
    // so we can take advantage of the cached `ClientRect`.
    this._clientRect = this._parentPositions.positions.get(element).clientRect;
  }
  /** Resets the container to its initial state. */
  _reset() {
    this._isDragging = false;
    const styles = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this.element).style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap;
    this._siblings.forEach(sibling => sibling._stopReceiving(this));
    this._sortStrategy.reset();
    this._stopScrolling();
    this._viewportScrollSubscription.unsubscribe();
    this._parentPositions.clear();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */
  _isOverContainer(x, y) {
    return this._clientRect != null && isInsideClientRect(this._clientRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find(sibling => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */
  _canReceive(item, x, y) {
    if (!this._clientRect || !isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }
    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y);
    // If there's no element at the pointer position, then
    // the client rect is probably scrolled out of the view.
    if (!elementFromPoint) {
      return false;
    }
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this.element);
    // The `ClientRect`, that we're using to find the container over which the user is
    // hovering, doesn't give us any information on whether the element has been scrolled
    // out of the view or whether it's overlapping with other containers. This means that
    // we could end up transferring the item into a container that's invisible or is positioned
    // below another one. We use the result from `elementFromPoint` to get the top-most element
    // at the pointer position and to find whether it's one of the intersecting drop containers.
    return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */
  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;
    if (!activeSiblings.has(sibling) && items.every(item => {
      // Note that we have to add an exception to the `enterPredicate` for items that started off
      // in this drop list. The drag ref has logic that allows an item to return to its initial
      // container, if it has left the initial container and none of the connected containers
      // allow it to enter. See `DragRef._updateActiveDropContainer` for more context.
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);
      this._cacheParentPositions();
      this._listenToScrollEvents();
      this.receivingStarted.next({
        initiator: sibling,
        receiver: this,
        items
      });
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */
  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);
    this._viewportScrollSubscription.unsubscribe();
    this.receivingStopped.next({
      initiator: sibling,
      receiver: this
    });
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */
  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(event => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);
        if (scrollDifference) {
          this._sortStrategy.updateOnScroll(scrollDifference.top, scrollDifference.left);
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */
  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(this.element));
      this._cachedShadowRoot = shadowRoot || this._document;
    }
    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */
  _notifyReceivingSiblings() {
    const draggedItems = this._sortStrategy.getActiveItemsSnapshot().filter(item => item.isDragging());
    this._siblings.forEach(sibling => sibling._startReceiving(this, draggedItems));
  }
}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return 1 /* AutoScrollVerticalDirection.UP */;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return 2 /* AutoScrollVerticalDirection.DOWN */;
  }

  return 0 /* AutoScrollVerticalDirection.NONE */;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */
function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;
  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return 1 /* AutoScrollHorizontalDirection.LEFT */;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return 2 /* AutoScrollHorizontalDirection.RIGHT */;
  }

  return 0 /* AutoScrollHorizontalDirection.NONE */;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */
function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = 0 /* AutoScrollVerticalDirection.NONE */;
  let horizontalScrollDirection = 0 /* AutoScrollHorizontalDirection.NONE */;
  // Note that we here we do some extra checks for whether the element is actually scrollable in
  // a certain direction and we only assign the scroll direction if it is. We do this so that we
  // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
  // This allows us to handle cases where the scroll regions of two scrollable elements overlap.
  if (computedVertical) {
    const scrollTop = element.scrollTop;
    if (computedVertical === 1 /* AutoScrollVerticalDirection.UP */) {
      if (scrollTop > 0) {
        verticalScrollDirection = 1 /* AutoScrollVerticalDirection.UP */;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = 2 /* AutoScrollVerticalDirection.DOWN */;
    }
  }

  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;
    if (computedHorizontal === 1 /* AutoScrollHorizontalDirection.LEFT */) {
      if (scrollLeft > 0) {
        horizontalScrollDirection = 1 /* AutoScrollHorizontalDirection.LEFT */;
      }
    } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
      horizontalScrollDirection = 2 /* AutoScrollHorizontalDirection.RIGHT */;
    }
  }

  return [verticalScrollDirection, horizontalScrollDirection];
}

/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
class DragDropRegistry {
  constructor(_ngZone, _document) {
    this._ngZone = _ngZone;
    /** Registered drop container instances. */
    this._dropInstances = new Set();
    /** Registered drag item instances. */
    this._dragInstances = new Set();
    /** Drag item instances that are currently being dragged. */
    this._activeDragInstances = [];
    /** Keeps track of the event listeners that we've bound to the `document`. */
    this._globalListeners = new Map();
    /**
     * Predicate function to check if an item is being dragged.  Moved out into a property,
     * because it'll be called a lot and we don't want to create a new function every time.
     */
    this._draggingPredicate = item => item.isDragging();
    /**
     * Emits the `touchmove` or `mousemove` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits the `touchend` or `mouseup` events that are dispatched
     * while the user is dragging a drag item instance.
     */
    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Emits when the viewport has been scrolled while the user is dragging an item.
     * @deprecated To be turned into a private member. Use the `scrolled` method instead.
     * @breaking-change 13.0.0
     */
    this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Event listener that will prevent the default browser action while the user is dragging.
     * @param event Event whose default action should be prevented.
     */
    this._preventDefaultWhileDragging = event => {
      if (this._activeDragInstances.length > 0) {
        event.preventDefault();
      }
    };
    /** Event listener for `touchmove` that is bound even if no dragging is happening. */
    this._persistentTouchmoveListener = event => {
      if (this._activeDragInstances.length > 0) {
        // Note that we only want to prevent the default action after dragging has actually started.
        // Usually this is the same time at which the item is added to the `_activeDragInstances`,
        // but it could be pushed back if the user has set up a drag delay or threshold.
        if (this._activeDragInstances.some(this._draggingPredicate)) {
          event.preventDefault();
        }
        this.pointerMove.next(event);
      }
    };
    this._document = _document;
  }
  /** Adds a drop container to the registry. */
  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */
  registerDragItem(drag) {
    this._dragInstances.add(drag);
    // The `touchmove` event gets bound once, ahead of time, because WebKit
    // won't preventDefault on a dynamically-added `touchmove` listener.
    // See https://bugs.webkit.org/show_bug.cgi?id=184250.
    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        // The event handler has to be explicitly active,
        // because newer browsers make it passive by default.
        this._document.addEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */
  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */
  removeDragItem(drag) {
    this._dragInstances.delete(drag);
    this.stopDragging(drag);
    if (this._dragInstances.size === 0) {
      this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */
  startDragging(drag, event) {
    // Do not process the same drag twice to avoid memory leaks and redundant listeners
    if (this._activeDragInstances.indexOf(drag) > -1) {
      return;
    }
    this._activeDragInstances.push(drag);
    if (this._activeDragInstances.length === 1) {
      const isTouchEvent = event.type.startsWith('touch');
      // We explicitly bind __active__ listeners here, because newer browsers will default to
      // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
      // use `preventDefault` to prevent the page from scrolling while the user is dragging.
      this._globalListeners.set(isTouchEvent ? 'touchend' : 'mouseup', {
        handler: e => this.pointerUp.next(e),
        options: true
      }).set('scroll', {
        handler: e => this.scroll.next(e),
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        options: true
      })
      // Preventing the default action on `mousemove` isn't enough to disable text selection
      // on Safari so we need to prevent the selection event as well. Alternatively this can
      // be done by setting `user-select: none` on the `body`, however it has causes a style
      // recalculation which can be expensive on pages with a lot of elements.
      .set('selectstart', {
        handler: this._preventDefaultWhileDragging,
        options: activeCapturingEventOptions
      });
      // We don't have to bind a move event for touch drag sequences, because
      // we already have a persistent global one bound from `registerDragItem`.
      if (!isTouchEvent) {
        this._globalListeners.set('mousemove', {
          handler: e => this.pointerMove.next(e),
          options: activeCapturingEventOptions
        });
      }
      this._ngZone.runOutsideAngular(() => {
        this._globalListeners.forEach((config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }
  /** Stops dragging a drag item instance. */
  stopDragging(drag) {
    const index = this._activeDragInstances.indexOf(drag);
    if (index > -1) {
      this._activeDragInstances.splice(index, 1);
      if (this._activeDragInstances.length === 0) {
        this._clearGlobalListeners();
      }
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */
  isDragging(drag) {
    return this._activeDragInstances.indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */
  scrolled(shadowRoot) {
    const streams = [this.scroll];
    if (shadowRoot && shadowRoot !== this._document) {
      // Note that this is basically the same as `fromEvent` from rxjs, but we do it ourselves,
      // because we want to guarantee that the event is bound outside of the `NgZone`. With
      // `fromEvent` it'll only happen if the subscription is outside the `NgZone`.
      streams.push(new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
        return this._ngZone.runOutsideAngular(() => {
          const eventOptions = true;
          const callback = event => {
            if (this._activeDragInstances.length) {
              observer.next(event);
            }
          };
          shadowRoot.addEventListener('scroll', callback, eventOptions);
          return () => {
            shadowRoot.removeEventListener('scroll', callback, eventOptions);
          };
        });
      }));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...streams);
  }
  ngOnDestroy() {
    this._dragInstances.forEach(instance => this.removeDragItem(instance));
    this._dropInstances.forEach(instance => this.removeDropContainer(instance));
    this._clearGlobalListeners();
    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /** Clears out the global event listeners from the `document`. */
  _clearGlobalListeners() {
    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });
    this._globalListeners.clear();
  }
}
DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
  return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
};
DragDropRegistry.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: DragDropRegistry,
  factory: DragDropRegistry.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDropRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }];
  }, null);
})();

/** Default configuration to be used when creating a `DragRef`. */
const DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
class DragDrop {
  constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */
  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */
  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }
}
DragDrop.ɵfac = function DragDrop_Factory(t) {
  return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](DragDropRegistry));
};
DragDrop.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: DragDrop,
  factory: DragDrop.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler
    }, {
      type: DragDropRegistry
    }];
  }, null);
})();

/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */
const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CDK_DRAG_PARENT');

/**
 * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
 * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDropListGroup');
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */
class CdkDropListGroup {
  constructor() {
    /** Drop lists registered inside the group. */
    this._items = new Set();
    this._disabled = false;
  }
  /** Whether starting a dragging sequence from inside this group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  ngOnDestroy() {
    this._items.clear();
  }
}
CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
  return new (t || CdkDropListGroup)();
};
CdkDropListGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDropListGroup,
  selectors: [["", "cdkDropListGroup", ""]],
  inputs: {
    disabled: ["cdkDropListGroupDisabled", "disabled"]
  },
  exportAs: ["cdkDropListGroup"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DROP_LIST_GROUP,
    useExisting: CdkDropListGroup
  }])]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDropListGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDropListGroup]',
      exportAs: 'cdkDropListGroup',
      standalone: true,
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListGroupDisabled']
    }]
  });
})();

/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */
const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CDK_DRAG_CONFIG');

/**
 * Asserts that a particular node is an element.
 * @param node Node to be checked.
 * @param name Name to attach to the error message.
 */
function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. ` + `Currently attached to "${node.nodeName}".`);
  }
}

/** Counter used to generate unique ids for drop zones. */
let _uniqueIdCounter = 0;
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDropList');
/** Container that wraps a set of draggable items. */
class CdkDropList {
  /** Whether starting a dragging sequence from this container is disabled. */
  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }
  set disabled(value) {
    // Usually we sync the directive and ref state right before dragging starts, in order to have
    // a single point of failure and to avoid having to use setters for everything. `disabled` is
    // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
    // the user in a disabled state, so we also need to sync it as it's being set.
    this._dropListRef.disabled = this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  constructor( /** Element that the drop list is attached to. */
  element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._dir = _dir;
    this._group = _group;
    /** Emits when the list has been destroyed. */
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Other draggable containers that this container is connected to and into which the
     * container's items can be transferred. Can either be references to other drop containers,
     * or their unique IDs.
     */
    this.connectedTo = [];
    /**
     * Unique ID for the drop zone. Can be used as a reference
     * in the `connectedTo` of another `CdkDropList`.
     */
    this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */
    this.enterPredicate = () => true;
    /** Functions that is used to determine whether an item can be sorted into a particular index. */
    this.sortPredicate = () => true;
    /** Emits when the user drops an item inside the container. */
    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits when the user has moved a new drag item into this container.
     */
    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */
    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits as the user is swapping items while actively dragging. */
    this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Keeps track of the items that are registered with this container. Historically we used to
     * do this with a `ContentChildren` query, however queries don't handle transplanted views very
     * well which means that we can't handle cases like dragging the headers of a `mat-table`
     * correctly. What we do instead is to have the items register themselves with the container
     * and then we sort them based on their position in the DOM.
     */
    this._unsortedItems = new Set();
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assertElementNode(element.nativeElement, 'cdkDropList');
    }
    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;
    if (config) {
      this._assignDefaults(config);
    }
    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };
    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };
    this._setupInputSyncSubscription(this._dropListRef);
    this._handleEvents(this._dropListRef);
    CdkDropList._dropLists.push(this);
    if (_group) {
      _group._items.add(this);
    }
  }
  /** Registers an items with the drop list. */
  addItem(item) {
    this._unsortedItems.add(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Removes an item from the drop list. */
  removeItem(item) {
    this._unsortedItems.delete(item);
    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */
  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement());
      // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
      // tslint:disable-next-line:no-bitwise
      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }
  ngOnDestroy() {
    const index = CdkDropList._dropLists.indexOf(this);
    if (index > -1) {
      CdkDropList._dropLists.splice(index, 1);
    }
    if (this._group) {
      this._group._items.delete(this);
    }
    this._unsortedItems.clear();
    this._dropListRef.dispose();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this._dir.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(value => ref.withDirection(value));
    }
    ref.beforeStarted.subscribe(() => {
      const siblings = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceArray)(this.connectedTo).map(drop => {
        if (typeof drop === 'string') {
          const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);
          if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }
          return correspondingDropList;
        }
        return drop;
      });
      if (this._group) {
        this._group._items.forEach(drop => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      }
      // Note that we resolve the scrollable parents here so that we delay the resolution
      // as long as possible, ensuring that the element is in its final place in the DOM.
      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(scrollable => scrollable.getElementRef().nativeElement);
        this._dropListRef.withScrollableParents(scrollableParents);
        // Only do this once since it involves traversing the DOM and the parents
        // shouldn't be able to change without the drop list being destroyed.
        this._scrollableParentsResolved = true;
      }
      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(this.sortingDisabled);
      ref.autoScrollDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(this.autoScrollDisabled);
      ref.autoScrollStep = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */
  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef();
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(event => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe(event => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });
      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe(event => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe(dropEvent => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        item: dropEvent.item.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
      // Mark for check since all of these events run outside of change
      // detection and we're not guaranteed for something else to have triggered it.
      this._changeDetectorRef.markForCheck();
    });
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(ref.receivingStarted, ref.receivingStopped).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || 'vertical';
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */
  _syncItemsWithRef() {
    this._dropListRef.withItems(this.getSortedItems().map(item => item._dragRef));
  }
}
/** Keeps track of the drop lists that are currently on the page. */
CdkDropList._dropLists = [];
CdkDropList.ɵfac = function CdkDropList_Factory(t) {
  return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
};
CdkDropList.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDropList,
  selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
  hostAttrs: [1, "cdk-drop-list"],
  hostVars: 7,
  hostBindings: function CdkDropList_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    }
  },
  inputs: {
    connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
    data: ["cdkDropListData", "data"],
    orientation: ["cdkDropListOrientation", "orientation"],
    id: "id",
    lockAxis: ["cdkDropListLockAxis", "lockAxis"],
    disabled: ["cdkDropListDisabled", "disabled"],
    sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
    enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
    sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
    autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
    autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"]
  },
  outputs: {
    dropped: "cdkDropListDropped",
    entered: "cdkDropListEntered",
    exited: "cdkDropListExited",
    sorted: "cdkDropListSorted"
  },
  exportAs: ["cdkDropList"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([
  // Prevent child drop lists from picking up the same group as their parent.
  {
    provide: CDK_DROP_LIST_GROUP,
    useValue: undefined
  }, {
    provide: CDK_DROP_LIST,
    useExisting: CdkDropList
  }])]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDropList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDropList], cdk-drop-list',
      exportAs: 'cdkDropList',
      standalone: true,
      providers: [
      // Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: undefined
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        'class': 'cdk-drop-list',
        '[attr.id]': 'id',
        '[class.cdk-drop-list-disabled]': 'disabled',
        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }]
    }, {
      type: CdkDropListGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DROP_LIST_GROUP]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_CONFIG]
      }]
    }];
  }, {
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListConnectedTo']
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListData']
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListOrientation']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListLockAxis']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListDisabled']
    }],
    sortingDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListSortingDisabled']
    }],
    enterPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListEnterPredicate']
    }],
    sortPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListSortPredicate']
    }],
    autoScrollDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListAutoScrollDisabled']
    }],
    autoScrollStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListAutoScrollStep']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListDropped']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListExited']
    }],
    sorted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListSorted']
    }]
  });
})();

/**
 * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
 * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragHandle');
/** Handle that can be used to drag a CdkDrag instance. */
class CdkDragHandle {
  /** Whether starting to drag through this handle is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    this._stateChanges.next(this);
  }
  constructor(element, parentDrag) {
    this.element = element;
    /** Emits when the state of the handle has changed. */
    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this._disabled = false;
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assertElementNode(element.nativeElement, 'cdkDragHandle');
    }
    this._parentDrag = parentDrag;
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
}
CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
  return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
};
CdkDragHandle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragHandle,
  selectors: [["", "cdkDragHandle", ""]],
  hostAttrs: [1, "cdk-drag-handle"],
  inputs: {
    disabled: ["cdkDragHandleDisabled", "disabled"]
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_HANDLE,
    useExisting: CdkDragHandle
  }])]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragHandle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDragHandle]',
      standalone: true,
      host: {
        'class': 'cdk-drag-handle'
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_PARENT]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragHandleDisabled']
    }]
  });
})();

/**
 * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
 * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragPlaceholder');
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */
class CdkDragPlaceholder {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
}
CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
  return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef));
};
CdkDragPlaceholder.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragPlaceholder,
  selectors: [["ng-template", "cdkDragPlaceholder", ""]],
  inputs: {
    data: "data"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PLACEHOLDER,
    useExisting: CdkDragPlaceholder
  }])]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPlaceholder]',
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }]
  });
})();

/**
 * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
 * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragPreview');
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */
class CdkDragPreview {
  /** Whether the preview should preserve the same size as the item that is being dragged. */
  get matchSize() {
    return this._matchSize;
  }
  set matchSize(value) {
    this._matchSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
  }
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._matchSize = false;
  }
}
CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
  return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef));
};
CdkDragPreview.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragPreview,
  selectors: [["ng-template", "cdkDragPreview", ""]],
  inputs: {
    data: "data",
    matchSize: "matchSize"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PREVIEW,
    useExisting: CdkDragPreview
  }])]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragPreview, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPreview]',
      standalone: true,
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }],
    matchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }]
  });
})();
const DRAG_HOST_CLASS = 'cdk-drag';
/** Element that can be moved inside a CdkDropList container. */
class CdkDrag {
  /** Whether starting to drag this element is disabled. */
  get disabled() {
    return this._disabled || this.dropContainer && this.dropContainer.disabled;
  }
  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    this._dragRef.disabled = this._disabled;
  }
  constructor( /** Element that the draggable is attached to. */
  element, /** Droppable container that the draggable is a part of. */
  dropContainer,
  /**
   * @deprecated `_document` parameter no longer being used and will be removed.
   * @breaking-change 12.0.0
   */
  _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
    this.element = element;
    this.dropContainer = dropContainer;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._selfHandle = _selfHandle;
    this._parentDrag = _parentDrag;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** Emits when the user starts dragging the item. */
    this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user has released a drag item, before any animations have started. */
    this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user stops dragging an item in the container. */
    this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user has moved the item into a new container. */
    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user removes the item its container by dragging it into another container. */
    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user drops the item inside a container. */
    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */
    this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
      const subscription = this._dragRef.moved.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(movedEvent => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);
      return () => {
        subscription.unsubscribe();
      };
    });
    this._dragRef = dragDrop.createDrag(element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config?.zIndex
    });
    this._dragRef.data = this;
    // We have to keep track of the drag instances in order to be able to match an element to
    // a drag instance. We can't go through the global registry of `DragRef`, because the root
    // element could be different.
    CdkDrag._dragInstances.push(this);
    if (config) {
      this._assignDefaults(config);
    }
    // Note that usually the container is assigned when the drop list is picks up the item, but in
    // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
    // where there are no items on the first change detection pass, but the items get picked up as
    // soon as the user triggers another pass by dragging. This is a problem, because the item would
    // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
    // is too late since the two modes save different kinds of information. We work around it by
    // assigning the drop container both from here and the list.
    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);
      dropContainer.addItem(this);
    }
    this._syncInputs(this._dragRef);
    this._handleEvents(this._dragRef);
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */
  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */
  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */
  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */
  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */
  setFreeDragPosition(value) {
    this._dragRef.setFreeDragPosition(value);
  }
  ngAfterViewInit() {
    // Normally this isn't in the zone, but it can cause major performance regressions for apps
    // using `zone-patch-rxjs` because it'll trigger a change detection when it unsubscribes.
    this._ngZone.runOutsideAngular(() => {
      // We need to wait for the zone to stabilize, in order for the reference
      // element to be in the proper place in the DOM. This is mostly relevant
      // for draggable elements inside portals since they get stamped out in
      // their original DOM position and then they get transferred to the portal.
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => {
        this._updateRootElement();
        this._setupHandlesListener();
        if (this.freeDragPosition) {
          this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
      });
    });
  }
  ngOnChanges(changes) {
    const rootSelectorChange = changes['rootElementSelector'];
    const positionChange = changes['freeDragPosition'];
    // We don't have to react to the first change since it's being
    // handled in `ngAfterViewInit` where it needs to be deferred.
    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    }
    // Skip the first change since it's being handled in `ngAfterViewInit`.
    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }
  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }
    const index = CdkDrag._dragInstances.indexOf(this);
    if (index > -1) {
      CdkDrag._dragInstances.splice(index, 1);
    }
    // Unnecessary in most cases, but used to avoid extra change detections with `zone-paths-rxjs`.
    this._ngZone.runOutsideAngular(() => {
      this._destroyed.next();
      this._destroyed.complete();
      this._dragRef.dispose();
    });
  }
  /** Syncs the root element with the `DragRef`. */
  _updateRootElement() {
    const element = this.element.nativeElement;
    let rootElement = element;
    if (this.rootElementSelector) {
      rootElement = element.closest !== undefined ? element.closest(this.rootElementSelector) :
      // Comment tag doesn't have closest method, so use parent's one.
      element.parentElement?.closest(this.rootElementSelector);
    }
    if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      assertElementNode(rootElement, 'cdkDrag');
    }
    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */
  _getBoundaryElement() {
    const boundary = this.boundaryElement;
    if (!boundary) {
      return null;
    }
    if (typeof boundary === 'string') {
      return this.element.nativeElement.closest(boundary);
    }
    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || 'global');
        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    });
    // This only needs to be resolved once.
    ref.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
      // If we managed to resolve a parent through DI, use it.
      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      }
      // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
      // the item was projected into another item by something like `ngTemplateOutlet`.
      let parent = this.element.nativeElement.parentElement;
      while (parent) {
        if (parent.classList.contains(DRAG_HOST_CLASS)) {
          ref.withParent(CdkDrag._dragInstances.find(drag => {
            return drag.element.nativeElement === parent;
          })?._dragRef || null);
          break;
        }
        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */
  _handleEvents(ref) {
    ref.started.subscribe(startEvent => {
      this.started.emit({
        source: this,
        event: startEvent.event
      });
      // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.
      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe(releaseEvent => {
      this.released.emit({
        source: this,
        event: releaseEvent.event
      });
    });
    ref.ended.subscribe(endEvent => {
      this.ended.emit({
        source: this,
        distance: endEvent.distance,
        dropPoint: endEvent.dropPoint,
        event: endEvent.event
      });
      // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.
      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(enterEvent => {
      this.entered.emit({
        container: enterEvent.container.data,
        item: this,
        currentIndex: enterEvent.currentIndex
      });
    });
    ref.exited.subscribe(exitEvent => {
      this.exited.emit({
        container: exitEvent.container.data,
        item: this
      });
    });
    ref.dropped.subscribe(dropEvent => {
      this.dropped.emit({
        previousIndex: dropEvent.previousIndex,
        currentIndex: dropEvent.currentIndex,
        previousContainer: dropEvent.previousContainer.data,
        container: dropEvent.container.data,
        isPointerOverContainer: dropEvent.isPointerOverContainer,
        item: this,
        distance: dropEvent.distance,
        dropPoint: dropEvent.dropPoint,
        event: dropEvent.event
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */
  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;
    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }
    if (previewClass) {
      this.previewClass = previewClass;
    }
    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }
    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }
    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */
  _setupHandlesListener() {
    // Listen for any newly-added handles.
    this._handles.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this._handles),
    // Sync the new handles with the DragRef.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(handles => {
      const childHandleElements = handles.filter(handle => handle._parentDrag === this).map(handle => handle.element);
      // Usually handles are only allowed to be a descendant of the drag element, but if
      // the consumer defined a different drag root, we should allow the drag element
      // itself to be a handle too.
      if (this._selfHandle && this.rootElementSelector) {
        childHandleElements.push(this.element);
      }
      this._dragRef.withHandles(childHandleElements);
    }),
    // Listen if the state of any of the handles changes.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(handles => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...handles.map(item => {
        return item._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(item));
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(handleInstance => {
      // Enabled/disable the handle that changed in the DragRef.
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }
}
CdkDrag._dragInstances = [];
CdkDrag.ɵfac = function CdkDrag_Factory(t) {
  return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
};
CdkDrag.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDrag,
  selectors: [["", "cdkDrag", ""]],
  contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PREVIEW, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PLACEHOLDER, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_HANDLE, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    }
  },
  hostAttrs: [1, "cdk-drag"],
  hostVars: 4,
  hostBindings: function CdkDrag_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    }
  },
  inputs: {
    data: ["cdkDragData", "data"],
    lockAxis: ["cdkDragLockAxis", "lockAxis"],
    rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
    boundaryElement: ["cdkDragBoundary", "boundaryElement"],
    dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
    freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"],
    disabled: ["cdkDragDisabled", "disabled"],
    constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
    previewClass: ["cdkDragPreviewClass", "previewClass"],
    previewContainer: ["cdkDragPreviewContainer", "previewContainer"]
  },
  outputs: {
    started: "cdkDragStarted",
    released: "cdkDragReleased",
    ended: "cdkDragEnded",
    entered: "cdkDragEntered",
    exited: "cdkDragExited",
    dropped: "cdkDragDropped",
    moved: "cdkDragMoved"
  },
  exportAs: ["cdkDrag"],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PARENT,
    useExisting: CdkDrag
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDrag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDrag]',
      exportAs: 'cdkDrag',
      standalone: true,
      host: {
        'class': DRAG_HOST_CLASS,
        '[class.cdk-drag-disabled]': 'disabled',
        '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DROP_LIST]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_CONFIG]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }]
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
    }, {
      type: CdkDragHandle,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_HANDLE]
      }]
    }, {
      type: CdkDrag,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_PARENT]
      }]
    }];
  }, {
    _handles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChildren,
      args: [CDK_DRAG_HANDLE, {
        descendants: true
      }]
    }],
    _previewTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
      args: [CDK_DRAG_PREVIEW]
    }],
    _placeholderTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
      args: [CDK_DRAG_PLACEHOLDER]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragData']
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragLockAxis']
    }],
    rootElementSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragRootElement']
    }],
    boundaryElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragBoundary']
    }],
    dragStartDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragStartDelay']
    }],
    freeDragPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragFreeDragPosition']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragDisabled']
    }],
    constrainPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragConstrainPosition']
    }],
    previewClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragPreviewClass']
    }],
    previewContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragPreviewContainer']
    }],
    started: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragStarted']
    }],
    released: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragReleased']
    }],
    ended: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragEnded']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragExited']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragDropped']
    }],
    moved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragMoved']
    }]
  });
})();
const DRAG_DROP_DIRECTIVES = [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder];
class DragDropModule {}
DragDropModule.ɵfac = function DragDropModule_Factory(t) {
  return new (t || DragDropModule)();
};
DragDropModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: DragDropModule
});
DragDropModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [DragDrop],
  imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDropModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule,
    args: [{
      imports: DRAG_DROP_DIRECTIVES,
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule, ...DRAG_DROP_DIRECTIVES],
      providers: [DragDrop]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



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