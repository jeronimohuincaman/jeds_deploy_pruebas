"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_ventas_cobranzas_cobranzas_module_ts"],{

/***/ 57750:
/*!**************************************************************!*\
  !*** ./src/app/modules/ventas/cobranzas/cobranzas.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CobranzasModule": () => (/* binding */ CobranzasModule)
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
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _services_cobranzas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/cobranzas.service */ 86064);
/* harmony import */ var _components_cobranzas_cobranzas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cobranzas/cobranzas.component */ 55327);
/* harmony import */ var _components_alta_edicion_cobro_alta_edicion_cobro_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/alta-edicion-cobro/alta-edicion-cobro.component */ 60608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);


























//import { GuardarFacturaComponent } from './components/guardar-factura/guardar-factura.component';
const routes = [{
  path: '',
  component: _components_cobranzas_cobranzas_component__WEBPACK_IMPORTED_MODULE_6__.CobranzasComponent
}, {
  path: 'alta-cobro',
  component: _components_alta_edicion_cobro_alta_edicion_cobro_component__WEBPACK_IMPORTED_MODULE_7__.AltaEdicionCobroComponent
}, {
  path: 'edicion-cobro/:idcobro',
  component: _components_alta_edicion_cobro_alta_edicion_cobro_component__WEBPACK_IMPORTED_MODULE_7__.AltaEdicionCobroComponent
}
/* {
    path: 'guardar-factura',
    component: GuardarFacturaComponent,
}, */];

class CobranzasModule {}
CobranzasModule.ɵfac = function CobranzasModule_Factory(t) {
  return new (t || CobranzasModule)();
};
CobranzasModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: CobranzasModule
});
CobranzasModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService, _services_cobranzas_service__WEBPACK_IMPORTED_MODULE_5__.CobranzasService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](CobranzasModule, {
    declarations: [_components_cobranzas_cobranzas_component__WEBPACK_IMPORTED_MODULE_6__.CobranzasComponent, _components_alta_edicion_cobro_alta_edicion_cobro_component__WEBPACK_IMPORTED_MODULE_7__.AltaEdicionCobroComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_19__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 60608:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ventas/cobranzas/components/alta-edicion-cobro/alta-edicion-cobro.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AltaEdicionCobroComponent": () => (/* binding */ AltaEdicionCobroComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _services_cobranzas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cobranzas.service */ 86064);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
























function AltaEdicionCobroComponent_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", cliente_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cliente_r13.razonSocial, " ");
  }
}
function AltaEdicionCobroComponent_mat_option_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AltaEdicionCobroComponent_mat_option_33_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.calcularInteres());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const venta_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", venta_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", venta_r14.descripcion, " - ($", venta_r14.saldo, ") ");
  }
}
function AltaEdicionCobroComponent_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No hay datos existentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AltaEdicionCobroComponent_table_56_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Ventas Pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r17.color_primario ? "" : ctx_r17.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r17.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_56_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r31.descripcion ? item_r31.descripcion : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_56_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Importe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r19.color_primario ? "" : ctx_r19.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r19.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_56_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r32.importe_neto ? "$" + item_r32.importe_neto : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_56_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Saldo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r21.color_primario ? "" : ctx_r21.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r21.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_56_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r33.saldo ? "$" + item_r33.saldo : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_56_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Intereses por Mora");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r23.color_primario ? "" : ctx_r23.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r23.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_56_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r34.interes ? "$" + item_r34.interes : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_56_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Asignaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r25.color_primario ? "" : ctx_r25.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r25.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_56_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r35.asignacion ? "$" + item_r35.asignacion : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_56_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total a Pagar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r27.color_primario ? "" : ctx_r27.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r27.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_56_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r36.importe_total ? "$" + item_r36.importe_total : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_56_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 86);
  }
}
function AltaEdicionCobroComponent_table_56_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 87);
  }
}
function AltaEdicionCobroComponent_table_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AltaEdicionCobroComponent_table_56_th_2_Template, 2, 4, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AltaEdicionCobroComponent_table_56_td_3_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AltaEdicionCobroComponent_table_56_th_5_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AltaEdicionCobroComponent_table_56_td_6_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AltaEdicionCobroComponent_table_56_th_8_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AltaEdicionCobroComponent_table_56_td_9_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AltaEdicionCobroComponent_table_56_th_11_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AltaEdicionCobroComponent_table_56_td_12_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AltaEdicionCobroComponent_table_56_th_14_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AltaEdicionCobroComponent_table_56_td_15_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AltaEdicionCobroComponent_table_56_th_17_Template, 2, 4, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AltaEdicionCobroComponent_table_56_td_18_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AltaEdicionCobroComponent_table_56_tr_19_Template, 1, 0, "tr", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AltaEdicionCobroComponent_table_56_tr_20_Template, 1, 0, "tr", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r5.dataSourceAsignacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r5.asignacionColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r5.asignacionColumns);
  }
}
function AltaEdicionCobroComponent_mat_option_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AltaEdicionCobroComponent_mat_option_64_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.calcularValores());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const metodo_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", metodo_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", metodo_r38.descripcion, " ");
  }
}
function AltaEdicionCobroComponent_mat_option_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const banco_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", banco_r41.idbanco);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", banco_r41.descripcion, " ");
  }
}
function AltaEdicionCobroComponent_span_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No hay datos existentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function AltaEdicionCobroComponent_table_120_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Forma de Cobro");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r42.color_primario ? "" : ctx_r42.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r42.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r62.descripcion, " ");
  }
}
function AltaEdicionCobroComponent_table_120_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r44.color_primario ? "" : ctx_r44.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r44.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", item_r63.numero_comprobante ? "#" : "", "", item_r63.numero_comprobante ? item_r63.numero_comprobante : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_120_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Emisi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r46.color_primario ? "" : ctx_r46.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r46.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r64.fecha_emision ? item_r64.fecha_emision : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_120_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cobro");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r48.color_primario ? "" : ctx_r48.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r48.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r65.fecha_cobro ? item_r65.fecha_cobro : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_120_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Vto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r50.color_primario ? "" : ctx_r50.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r50.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r66.fecha_vencimiento ? item_r66.fecha_vencimiento : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_120_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Banco");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r52.color_primario ? "" : ctx_r52.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r52.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r67.banco ? item_r67.banco : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_120_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Neto a Descontar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r54.color_primario ? "" : ctx_r54.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r54.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r68.importe_neto ? "$" + item_r68.importe_neto : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_120_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Inter\u00E9s/Descuento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r56.color_primario ? "" : ctx_r56.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r56.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r69.importe_interes_descuento ? "$" + item_r69.importe_interes_descuento : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_120_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Pago Real (Bruto)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r58.color_primario ? "" : ctx_r58.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r58.color_primario || "");
  }
}
function AltaEdicionCobroComponent_table_120_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r70.importe_real ? "$" + item_r70.importe_real : "-", " ");
  }
}
function AltaEdicionCobroComponent_table_120_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 86);
  }
}
function AltaEdicionCobroComponent_table_120_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 87);
  }
}
function AltaEdicionCobroComponent_table_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](1, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AltaEdicionCobroComponent_table_120_th_2_Template, 2, 4, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AltaEdicionCobroComponent_table_120_td_3_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AltaEdicionCobroComponent_table_120_th_5_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AltaEdicionCobroComponent_table_120_td_6_Template, 2, 2, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AltaEdicionCobroComponent_table_120_th_8_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AltaEdicionCobroComponent_table_120_td_9_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AltaEdicionCobroComponent_table_120_th_11_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AltaEdicionCobroComponent_table_120_td_12_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AltaEdicionCobroComponent_table_120_th_14_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AltaEdicionCobroComponent_table_120_td_15_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, AltaEdicionCobroComponent_table_120_th_17_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AltaEdicionCobroComponent_table_120_td_18_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AltaEdicionCobroComponent_table_120_th_20_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, AltaEdicionCobroComponent_table_120_td_21_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](22, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, AltaEdicionCobroComponent_table_120_th_23_Template, 2, 4, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, AltaEdicionCobroComponent_table_120_td_24_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](25, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, AltaEdicionCobroComponent_table_120_th_26_Template, 2, 4, "th", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, AltaEdicionCobroComponent_table_120_td_27_Template, 2, 1, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AltaEdicionCobroComponent_table_120_tr_28_Template, 1, 0, "tr", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AltaEdicionCobroComponent_table_120_tr_29_Template, 1, 0, "tr", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r12.dataSourceFormaPago);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.formaCobroColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r12.formaCobroColumns);
  }
}
class AltaEdicionCobroComponent {
  constructor(alert, router, _cobranzasService, _headerTextService, _empresaService) {
    this.alert = alert;
    this.router = router;
    this._cobranzasService = _cobranzasService;
    this._headerTextService = _headerTextService;
    this._empresaService = _empresaService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.token = localStorage.getItem('accessToken');
    this.default_color = 'bg-primary';
    this.dataSourceAsignacion = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
    this.asignacionColumns = ['descripcion', 'importe_neto', 'saldo', 'interes', 'asignacion', 'importe_total'];
    this.dataSourceFormaPago = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource();
    this.formaCobroColumns = ['descripcion', 'numero_comprobante', 'fecha_emision', 'fecha_cobro', 'fecha_vencimiento', 'banco', 'importe_neto', 'banco', 'importe_interes_descuento', 'importe_real'];
    this._headerTextService.setTitulo(this.router);
  }
  ngOnInit() {
    this.esEdicion = this.router.url.includes('edicion-cobro') ? true : false;
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    if (this.esEdicion) {
      this.idItemEdicion = this.router.url.split('/')[3];
      this.getItemEdicion(this.idItemEdicion);
    }
    this.newFormAsignacion();
    this.newFormFormaCobro();
    this.getBancos();
    this.getMetodosCobro();
    /* Funciones para manejar los eventos de los campos Neto a Descontar y Pago Real -------------> */
    this.formaCobroSub = this.formFormaCobro.get('formaCobro')?.valueChanges.subscribe(value => {
      this.enableDisableControls(value);
      this.calcularValores();
    });
    this.netoDescontarSub = this.formFormaCobro.get('netoDescontar')?.valueChanges.subscribe(() => {
      this.ultimoModificado = 'netoDescontar';
      if (this.formFormaCobro.get('netoDescontar')?.value) {
        this.formFormaCobro.get('pagoReal').disable({
          emitEvent: false
        });
      } else {
        this.formFormaCobro.get('pagoReal').enable({
          emitEvent: false
        });
      }
      setTimeout(() => {
        this.calcularValores();
      }, 750);
    });
    this.pagoRealSub = this.formFormaCobro.get('pagoReal')?.valueChanges.subscribe(() => {
      this.ultimoModificado = 'pagoReal';
      if (this.formFormaCobro.get('pagoReal')?.value) {
        this.formFormaCobro.get('netoDescontar').disable({
          emitEvent: false
        });
      } else {
        this.formFormaCobro.get('netoDescontar').enable({
          emitEvent: false
        });
      }
      setTimeout(() => {
        this.calcularValores();
      }, 750);
    });
    /* -------------------------------------------------------------------------------------------> */
    this.asignacionSub = this.formAsignacion.get('asignacion').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(750)).subscribe(value => {
      this.calcularInteres();
    });
    this.fechaSub = this.formAsignacion.get('fecha').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300)).subscribe(value => {
      this.calcularInteres();
    });
    this.formAsignacion.get('cliente').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(300)).subscribe({
      next: value => this.getClientes(value),
      error: err => console.error('Error al obtener cambios de cliente:', err)
    });
  }
  displayFn(cliente) {
    return cliente && cliente.razonSocial ? cliente.razonSocial : '';
  }
  getItemEdicion(idItemEdicion) {
    let params = `?idcobro=${idItemEdicion}`;
    this._cobranzasService.getItemEdicion(this.token, params).subscribe({
      next: data => {
        this.dataSourceAsignacion.data = data.result.items_cobro_asignacion;
        this.totalPagar = this.dataSourceAsignacion.data.reduce((acum, item) => acum + item.importe_total, 0);
        this.formFormaCobro.get('netoDescontar').setValue(this.totalPagar);
        this.formFormaCobro.get('netoDescontar').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.max(this.totalPagar)]);
        this.formFormaCobro.get('netoDescontar').updateValueAndValidity({
          emitEvent: false
        });
        this.dataSourceFormaPago.data = data.result.items_forma_pago;
        this.saldoPagar = this.dataSourceFormaPago.data.reduce((acum, item) => acum + item.importe_real, 0);
      },
      error: err => {
        console.error('Error al obtener item de edicion:', err);
      }
    });
  }
  newFormAsignacion() {
    this.formAsignacion = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(new Date(), [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      bonificada: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      venta: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      pagoParcial: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      asignacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      interesMora: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl({
        value: 0,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required])
    });
  }
  newFormFormaCobro() {
    this.formFormaCobro = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroup({
      formaCobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      netoDescontar: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      pagoReal: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]),
      numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
      emision: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
      cobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
      vencimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null),
      banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl(null)
    });
  }
  getClientes(value) {
    const filter = value ? `?filter[razonSocial][like]=${value}` : '';
    this._cobranzasService.getClientes(this.token, filter).subscribe({
      next: data => {
        this.clientes = data.result;
      },
      error: err => {
        console.error('Error al obtener clientes:', err);
      }
    });
  }
  getVentaPendiente() {
    let filter = `?filter[idcliente]=${this.formAsignacion.get('cliente').value.codigo}&filter[bonificado]=${this.formAsignacion.get('bonificada').value ? 1 : 0}&filter[saldo][gt]=0`;
    this._cobranzasService.getVentaPendiente(this.token, filter).subscribe({
      next: data => {
        this.ventasPendientes = data.result;
      },
      error: err => {
        console.error('Error al obtener ventas pendientes:', err);
      }
    });
  }
  getBancos() {
    this._cobranzasService.getBancos(this.token).subscribe({
      next: data => {
        this.bancos = data;
      },
      error: err => {
        console.error('Error al obtener bancos:', err);
      }
    });
  }
  getMetodosCobro() {
    this._cobranzasService.getMetodosCobro(this.token).subscribe({
      next: data => {
        this.metodosCobro = data.result;
      },
      error: err => {
        console.error('Error al obtener metodos de pago:', err);
      }
    });
  }
  calcularInteres() {
    let venta = this.formAsignacion.get('venta').value ? this.formAsignacion.get('venta').value : null;
    let asignacion = this.formAsignacion.get('asignacion').value ? this.formAsignacion.get('asignacion').value : null;
    let fecha = this.formAsignacion.get('fecha').value ? new Date(this.formAsignacion.get('fecha').value) : null;
    let fechaFormat = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    if (venta.asignacion === 0) {
      if (this.formAsignacion.get('pagoParcial').value) {
        // No lleva calculo de interes y deja al usaurio setear la asignacion
        // ya que es un pago parcial
        this.formAsignacion.get('asignacion').enable({
          emitEvent: false
        });
        this.formAsignacion.get('interesMora').setValue(0, {
          emitEvent: false
        });
        this.formAsignacion.get('asignacion').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.max(venta.saldo)]);
        this.formAsignacion.get('asignacion').updateValueAndValidity({
          emitEvent: false
        });
      } else {
        // No lleva calculo de interes e inhabilita el campo asignacion
        // seteandole el valor del saldo de la venta ya que es un pago total
        this.formAsignacion.get('asignacion').disable({
          emitEvent: false
        });
        this.formAsignacion.get('interesMora').setValue(0, {
          emitEvent: false
        });
        this.formAsignacion.get('asignacion').setValue(venta.saldo, {
          emitEvent: false
        });
        this.formAsignacion.get('asignacion').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.max(venta.saldo)]);
        this.formAsignacion.get('asignacion').updateValueAndValidity({
          emitEvent: false
        });
      }
    } else {
      if (this.formAsignacion.get('pagoParcial').value) {
        // Se va a calcular el interes por mora ya que es un pagaré
        // y le permite al usuario ingresar la asignacion ya que es un pago parcial
        console.log(venta.saldo);
        this.formAsignacion.get('asignacion').enable({
          emitEvent: false
        });
        this.formAsignacion.get('asignacion').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.max(venta.saldo)]);
        this.formAsignacion.get('asignacion').updateValueAndValidity({
          emitEvent: false
        });
      } else {
        // Se va a calcular el interes por mora ya que es un pagaré pero no se
        // le va a permitir al usuario ingresar la asignacion porque es un pago total
        this.formAsignacion.get('asignacion').disable({
          emitEvent: false
        });
        this.formAsignacion.get('asignacion').setValue(venta.saldo, {
          emitEvent: true
        });
        this.formAsignacion.get('asignacion').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.max(venta.saldo)]);
        this.formAsignacion.get('asignacion').updateValueAndValidity({
          emitEvent: false
        });
      }
      // Calculo del interes por mora --------------------->
      if (venta.id && asignacion && fecha) {
        let payload = {
          id: venta.id,
          asignacion: asignacion,
          fecha: fechaFormat
        };
        this._cobranzasService.calcularInteres(this.token, payload).subscribe({
          next: data => {
            this.formAsignacion.get('interesMora').setValue(data.result.interes, {
              emitEvent: false
            });
          },
          error: err => {
            console.error('Error al calcular interes:', err);
          }
        });
      } else {
        this.alert.warning('Debe completar los campos para calcular el interés');
      }
    }
  }
  calcularValores() {
    if (this.formFormaCobro.get(this.ultimoModificado)?.value) {
      if (this.formFormaCobro.get('formaCobro').value) {
        if (this.formFormaCobro.get('netoDescontar').value || this.formFormaCobro.get('pagoReal').value) {
          let payload = {
            idcobrotipo: this.formFormaCobro.get('formaCobro').value,
            importe_pago_real: this.ultimoModificado === 'pagoReal' ? this.formFormaCobro.get('pagoReal').value : null,
            importe_neto_a_descontar: this.ultimoModificado === 'netoDescontar' ? this.formFormaCobro.get('netoDescontar').value : null
          };
          this._cobranzasService.calcularImporte(this.token, payload).subscribe({
            next: res => {
              if (res.result) {
                let netoDescontar = res.result.importe_neto_a_descontar ? res.result.importe_neto_a_descontar : null;
                let pagoReal = res.result.importe_pago_real ? res.result.importe_pago_real : null;
                netoDescontar ? this.formFormaCobro.get('netoDescontar').setValue(netoDescontar, {
                  emitEvent: false
                }) : '';
                pagoReal ? this.formFormaCobro.get('pagoReal').setValue(pagoReal, {
                  emitEvent: false
                }) : '';
                this.formFormaCobro.get('pagoReal').enable({
                  emitEvent: false
                });
                this.formFormaCobro.get('netoDescontar').enable({
                  emitEvent: false
                });
              }
            },
            error: err => {
              console.error(err);
            }
          });
        } else {
          this.alert.warning('Debe ingresar un valor');
        }
      } else {
        this.alert.warning('Debe seleccionar un Método de Cobro');
      }
    } else {
      this.alert.warning('Debe ingresar un valor al modificar');
    }
  }
  enableDisableControls(metodo) {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.lleva_numero = (yield metodo.lleva_numero) === 1 ? true : false;
      metodo.lleva_numero === 1 ? _this.formFormaCobro.get('numero').enable() : _this.formFormaCobro.get('numero').disable(), _this.formFormaCobro.get('numero').setValue(null, {
        emitEvent: false
      });
      _this.lleva_vencimiento = (yield metodo.lleva_vencimiento) === 1 ? true : false;
      metodo.lleva_vencimiento === 1 ? _this.formFormaCobro.get('vencimiento').enable() : _this.formFormaCobro.get('vencimiento').disable(), _this.formFormaCobro.get('vencimiento').setValue(null, {
        emitEvent: false
      });
      _this.lleva_fecha_emision = (yield metodo.lleva_fecha_emision) === 1 ? true : false;
      metodo.lleva_fecha_emision === 1 ? _this.formFormaCobro.get('emision').enable() : _this.formFormaCobro.get('emision').disable(), _this.formFormaCobro.get('emision').setValue(null, {
        emitEvent: false
      });
      _this.lleva_fecha_cobro = (yield metodo.lleva_fecha_cobro) === 1 ? true : false;
      metodo.lleva_fecha_cobro === 1 ? _this.formFormaCobro.get('cobro').enable() : _this.formFormaCobro.get('cobro').disable(), _this.formFormaCobro.get('cobro').setValue(null, {
        emitEvent: false
      });
      _this.lleva_banco = (yield metodo.lleva_banco) === 1 ? true : false;
      metodo.lleva_banco === 1 ? _this.formFormaCobro.get('banco').enable() : _this.formFormaCobro.get('banco').disable(), _this.formFormaCobro.get('banco').setValue(null, {
        emitEvent: false
      });
    })();
  }
  addAsignacion() {
    if (this.formAsignacion.valid) {
      let payload = {
        id: this.formAsignacion.get('venta').value.id,
        es_pago_parcial: this.formAsignacion.get('pagoParcial').value ? 1 : 0,
        asignacion: this.formAsignacion.get('asignacion').value,
        interes: this.formAsignacion.get('interesMora').value
      };
      this._cobranzasService.cargarItemCobro(this.token, payload).subscribe({
        next: data => {
          this.dataSourceAsignacion.data = [...this.dataSourceAsignacion.data, data.result];
          this.totalPagar = this.dataSourceAsignacion.data.reduce((acum, item) => acum + item.importe_total, 0);
          this.formFormaCobro.get('netoDescontar').setValue(this.totalPagar);
          this.formFormaCobro.get('netoDescontar').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.max(this.totalPagar)]);
          this.formFormaCobro.get('netoDescontar').updateValueAndValidity({
            emitEvent: false
          });
        },
        error: err => {
          console.error('Error al cargar asignacion:', err);
        }
      });
    } else {
      this.alert.warning('Revise los campos y vuelva a intentar');
    }
  }
  addFormaCobro() {
    let fecha_emision = this.formFormaCobro.get('emision').value ? new Date(this.formFormaCobro.get('emision').value) : null;
    let fecha_emision_format = fecha_emision ? `${fecha_emision.getFullYear()}-${fecha_emision.getMonth() + 1}-${fecha_emision.getDate()}` : null;
    let fecha_cobro = this.formFormaCobro.get('cobro').value ? new Date(this.formFormaCobro.get('cobro').value) : null;
    let fecha_cobro_format = fecha_cobro ? `${fecha_cobro.getFullYear()}-${fecha_cobro.getMonth() + 1}-${fecha_cobro.getDate()}` : null;
    let fecha_vencimiento = this.formFormaCobro.get('vencimiento').value ? new Date(this.formFormaCobro.get('vencimiento').value) : null;
    let fecha_vencimiento_format = fecha_vencimiento ? `${fecha_vencimiento.getFullYear()}-${fecha_vencimiento.getMonth() + 1}-${fecha_vencimiento.getDate()}` : null;
    let payload = {
      idcobrotipo: this.formFormaCobro.get('formaCobro').value.idcobrotipo,
      importe_real: this.ultimoModificado === 'pagoReal' ? this.formFormaCobro.get('pagoReal').value ? this.formFormaCobro.get('pagoReal').value : null : null,
      importe_neto: this.ultimoModificado === 'netoDescontar' ? this.formFormaCobro.get('netoDescontar').value ? this.formFormaCobro.get('netoDescontar').value : null : null,
      numero_comprobante: this.formFormaCobro.get('numero').value ? this.formFormaCobro.get('numero').value : null,
      fecha_emision: fecha_emision_format,
      fecha_cobro: fecha_cobro_format,
      fecha_vencimiento: fecha_vencimiento_format,
      idbanco: this.formFormaCobro.get('banco').value // nulleable
    };

    if (this.lleva_banco === false) {
      delete payload.idbanco;
    }
    if (this.lleva_numero === false) {
      delete payload.numero_comprobante;
    }
    if (this.lleva_fecha_emision === false) {
      delete payload.fecha_emision;
    }
    if (this.lleva_fecha_cobro === false) {
      delete payload.fecha_cobro;
    }
    if (this.lleva_vencimiento === false) {
      delete payload.fecha_vencimiento;
    }
    this._cobranzasService.cargarItemFormaCobro(this.token, payload).subscribe({
      next: data => {
        this.dataSourceFormaPago.data = [...this.dataSourceFormaPago.data, data.result];
        this.saldoPagar = this.dataSourceFormaPago.data.reduce((acum, item) => acum + item.importe_real, 0);
        console.log('saldoPagar: ', this.saldoPagar);
      },
      error: err => {
        console.error('Error al cargar forma de cobro:', err);
      }
    });
  }
  onSubmit() {
    let fechaCobro = this.formAsignacion.get('fecha').value ? new Date(this.formAsignacion.get('fecha').value) : null;
    let fechaCobroFormat = fechaCobro ? `${fechaCobro.getFullYear()}-${fechaCobro.getMonth() + 1}-${fechaCobro.getDate()} ${fechaCobro.getHours()}:${fechaCobro.getMinutes()}:${fechaCobro.getSeconds()}` : null;
    let payload = {
      cobro: {
        fecha: fechaCobroFormat,
        idcliente: this.formAsignacion.get('cliente').value.codigo,
        bonificado: this.formAsignacion.get('bonificada').value === true ? 1 : 0,
        importe_neto: this.formFormaCobro.get('netoDescontar').value,
        importe_real: this.formFormaCobro.get('pagoReal').value,
        intereses: this.formAsignacion.get('interesMora').value
      },
      items_cobro_asignacion: this.dataSourceAsignacion.data.map(({
        id,
        interes,
        asignacion,
        operacion_tipo,
        bonificado
      }) => ({
        id,
        interes,
        asignacion,
        operacion_tipo,
        bonificado: bonificado === true ? 1 : 0
      })),
      items_forma_pago: this.dataSourceFormaPago.data.map(({
        idcobrotipo,
        importe_neto,
        importe_real,
        numero_comprobante,
        fecha_emision,
        fecha_cobro,
        fecha_vencimiento,
        idbanco
      }) => ({
        idcobrotipo,
        importe_neto,
        importe_real,
        numero_comprobante,
        fecha_emision,
        fecha_cobro,
        fecha_vencimiento,
        idbanco
      }))
    };
    if (this.esEdicion) {
      const idcobro = this.idItemEdicion;
      //Edicion de cobranza
      this._cobranzasService.editarCobranza(this.token, idcobro, payload).subscribe({
        next: data => {
          this.alert.success(data.mensaje);
          this.router.navigate(['/cobranzas']);
        },
        error: err => {
          console.error('Error al guardar cobro:', err);
        }
      });
    } else {
      //Alta de cobranza
      this._cobranzasService.nuevaCobranza(this.token, payload).subscribe({
        next: data => {
          this.alert.success(data.mensaje);
          this.router.navigate(['/cobranzas']);
        },
        error: err => {
          console.error('Error al guardar cobro:', err);
        }
      });
    }
  }
  ngOnDestroy() {}
}
AltaEdicionCobroComponent.ɵfac = function AltaEdicionCobroComponent_Factory(t) {
  return new (t || AltaEdicionCobroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_cobranzas_service__WEBPACK_IMPORTED_MODULE_3__.CobranzasService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_5__.EmpresaService));
};
AltaEdicionCobroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AltaEdicionCobroComponent,
  selectors: [["app-alta-edicion-cobro"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_1__.MY_DATE_FORMATS
  }])],
  decls: 126,
  vars: 32,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "flex", "flex-col", "items-center", "w-full", "h-full", "py-4", "px-6"], [1, "flex", "flex-col", "w-full", "items-center", 3, "formGroup"], [1, "flex", "w-full", "items-center", "gap-2"], [1, "flex", "gap-3", "w-7/12"], [1, "flex", "flex-col", "w-6/12"], [1, "font-medium", "text-lg", "ml-1"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "fecha", 3, "matDatepicker", "change"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "flex", "flex-col", "w-4/12"], ["matInput", "", "formControlName", "cliente", 3, "matAutocomplete"], [3, "displayWith", "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "flex", "justify-left", "item-center", "w-2/12"], ["formControlName", "bonificada", 3, "change"], [1, "flex", "justify-left", "item-center", "w-5/12", "pl-8"], [1, "font-semibold", "text-2xl"], [1, "flex", "w-full", "items-center", "gap-4"], [1, "flex", "flex-col", "justify-center", "w-4/12"], [1, "font-medium", "text-lg"], ["appearance", "outline"], ["matInput", "", "formControlName", "venta"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "w-4/12", "gap-2"], [1, "w-1/3"], ["formControlName", "pagoParcial", 3, "change"], [1, "flex", "flex-col", "justify-center", "w-2/3"], ["matInput", "", "formControlName", "asignacion", "type", "number"], ["matPrefix", "", 1, "ml-2"], [1, "flex", "items-center", "w-4/12", "gap-4"], [1, "flex", "flex-col", "justify-center", "w-10/12"], ["matInput", "", "formControlName", "interesMora"], [1, "flex", "flex-col", "justify-center", "w-2/12"], ["mat-icon-button", "", 3, "click"], ["svgIcon", "jedstion:agregar", 1, "icon-size-[38px]"], [1, "w-full", "flex", "justify-center", "items-center", "mt-2", "min-h-[200px]"], ["class", "font-medium text-lg", 4, "ngIf"], ["mat-table", "", "class", "w-full my-1", 3, "dataSource", 4, "ngIf"], [1, "w-full", "mt-6", 3, "formGroup"], [1, "flex", "w-full", "items-center", "gap-3"], [1, "flex", "flex-col", "w-3/12"], ["matInput", "", "formControlName", "formaCobro"], [1, "flex", "flex-col", "w-2/12"], ["matInput", "", "formControlName", "netoDescontar", "type", "number"], ["matInput", "", "formControlName", "pagoReal", "type", "number"], [1, "flex", "justify-start", "items-center", "pl-4", "w-3/12"], [1, "flex", "flex-col", "w-1/6"], ["matInput", "", "formControlName", "numero", "type", "number"], ["matInput", "", "formControlName", "emision", 3, "matDatepicker"], ["pickerEmision", ""], ["matInput", "", "formControlName", "cobro", 3, "matDatepicker"], ["pickerCobro", ""], ["matInput", "", "formControlName", "vencimiento", 3, "matDatepicker"], ["pickerVencimiento", ""], [1, "flex", "w-2/6", "gap-4"], [1, "flex", "flex-col", "w-10/12"], ["matInput", "", "formControlName", "banco"], [1, "flex", "items-center", "justify-center", "w-2/12"], [1, "w-full", "flex", "justify-center", "items-center", "mt-4", "min-h-[200px]"], ["mat-table", "", "class", " w-full mt-1", 3, "dataSource", 4, "ngIf"], [1, "w-full", "flex", "justify-end", "items-end", "mt-4"], ["mat-flat-button", "", 1, "w-1/7", "px-6", "py-6", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], [1, "flex", "item-center"], [1, "ml-2", "text-white", "text-lg", "mt-0.5"], [3, "value"], [3, "value", "click"], ["mat-table", "", 1, "w-full", "my-1", 3, "dataSource"], ["matColumnDef", "descripcion"], ["mat-header-cell", "", "class", "w-auto text-white rounded-tl-lg", 3, "class", "background-color", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "importe_neto"], ["mat-header-cell", "", "class", "w-auto text-white", 3, "class", "background-color", 4, "matHeaderCellDef"], ["matColumnDef", "saldo"], ["matColumnDef", "interes"], ["matColumnDef", "asignacion"], ["matColumnDef", "importe_total"], ["mat-header-cell", "", "class", "w-auto text-white rounded-tr-lg", 3, "class", "background-color", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "w-auto", "text-white", "rounded-tl-lg"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "w-auto", "text-white"], ["mat-header-cell", "", 1, "w-auto", "text-white", "rounded-tr-lg"], ["mat-header-row", ""], ["mat-row", ""], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "numero_comprobante"], ["matColumnDef", "fecha_emision"], ["matColumnDef", "fecha_cobro"], ["matColumnDef", "fecha_vencimiento"], ["matColumnDef", "banco"], ["matColumnDef", "importe_interes_descuento"], ["matColumnDef", "importe_real"]],
  template: function AltaEdicionCobroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Fecha");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field", 7)(9, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AltaEdicionCobroComponent_Template_input_change_9_listener() {
        return ctx.calcularInteres();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "mat-datepicker-toggle", 9)(11, "mat-datepicker", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 11)(14, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-autocomplete", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("optionSelected", function AltaEdicionCobroComponent_Template_mat_autocomplete_optionSelected_18_listener() {
        return ctx.getVentaPendiente();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AltaEdicionCobroComponent_mat_option_20_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16)(22, "mat-checkbox", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AltaEdicionCobroComponent_Template_mat_checkbox_change_22_listener() {
        return ctx.getVentaPendiente();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, " Bonificada ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 18)(25, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 20)(28, "div", 21)(29, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Venta");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-form-field", 23)(32, "mat-select", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, AltaEdicionCobroComponent_mat_option_33_Template, 2, 3, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 26)(35, "div", 27)(36, "mat-checkbox", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AltaEdicionCobroComponent_Template_mat_checkbox_change_36_listener() {
        return ctx.calcularInteres();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " Pago Parcial ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 29)(39, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Asignaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "$\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 32)(46, "div", 33)(47, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Intereses por Mora");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-form-field", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 35)(52, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AltaEdicionCobroComponent_Template_button_click_52_listener() {
        return ctx.addAsignacion();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "mat-icon", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, AltaEdicionCobroComponent_span_55_Template, 2, 0, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, AltaEdicionCobroComponent_table_56_Template, 21, 3, "table", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "form", 41)(58, "div", 42)(59, "div", 43)(60, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Forma de Cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "mat-form-field", 23)(63, "mat-select", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, AltaEdicionCobroComponent_mat_option_64_Template, 2, 2, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 45)(66, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "Neto a Descontar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-form-field", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](69, "input", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 45)(71, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Pago Real (Bruto)");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "mat-form-field", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 48)(76, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 42)(79, "div", 49)(80, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "N\u00FAmero");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "mat-form-field", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 49)(85, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Emisi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "mat-form-field", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "input", 51)(89, "mat-datepicker-toggle", 9)(90, "mat-datepicker", null, 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 49)(93, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94, "Cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "mat-form-field", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "input", 53)(97, "mat-datepicker-toggle", 9)(98, "mat-datepicker", null, 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 49)(101, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Vencimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "mat-form-field", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](104, "input", 55)(105, "mat-datepicker-toggle", 9)(106, "mat-datepicker", null, 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "div", 57)(109, "div", 58)(110, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Banco");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "mat-form-field", 23)(113, "mat-select", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](114, AltaEdicionCobroComponent_mat_option_114_Template, 2, 2, "mat-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "div", 60)(116, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AltaEdicionCobroComponent_Template_button_click_116_listener() {
        return ctx.addFormaCobro();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](117, "mat-icon", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](119, AltaEdicionCobroComponent_span_119_Template, 2, 0, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](120, AltaEdicionCobroComponent_table_120_Template, 30, 3, "table", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 63)(122, "button", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AltaEdicionCobroComponent_Template_button_click_122_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "div", 65)(124, "span", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](125, "Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19);
      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](91);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](99);
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formAsignacion);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.displayFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.clientes);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Total a Pagar: ", ctx.totalPagar > 0 ? "$" + ctx.totalPagar : "-", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ventasPendientes);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.dataSourceAsignacion.data.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataSourceAsignacion.data.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formFormaCobro);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.metodosCobro);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Saldo a Pagar: ", ctx.saldoPagar ? "$" + ctx.saldoPagar : "-", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bancos);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.dataSourceFormaPago.data.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.dataSourceFormaPago.data.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__.MatAutocompleteTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerToggle],
  encapsulation: 2
});


/***/ }),

/***/ 55327:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ventas/cobranzas/components/cobranzas/cobranzas.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CobranzasComponent": () => (/* binding */ CobranzasComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _services_cobranzas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cobranzas.service */ 86064);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 83677);












class CobranzasComponent {
  constructor(alert, router, confirm, _cobranzasService, _headerTextService, _empresaService) {
    this.alert = alert;
    this.router = router;
    this.confirm = confirm;
    this._cobranzasService = _cobranzasService;
    this._headerTextService = _headerTextService;
    this._empresaService = _empresaService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.token = localStorage.getItem('accessToken');
    this.default_color = 'bg-primary';
    this.headers = ['Fecha', 'Cliente', 'Neto a Descontar ', 'Pago Real (Bruto)', 'A Facturar', '', ''];
    this.column_params = ['fecha', 'descripcion_cliente', 'importe_neto', 'importe_real', 'a_facturar', 'facturado', 'acciones'];
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = [];
    this.extraParams = '';
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_vta_cobros + "?";
    this._headerTextService.setTitulo(this.router);
  }
  ngOnInit() {
    /* this.checkTabla() */
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    this.funcionesObjeto = [{
      nombre_boton: "editar",
      functionName: 'editar',
      iconoAccion: () => 'jedstion:editar',
      iconoAccionado: () => '' /* 'jedstion:editar_accionado' */,
      iconoDeshabilitado: () => '' /* 'jedstion:editar_disabled' */
    }, {
      nombre_boton: "eliminar",
      functionName: 'eliminar',
      iconoAccion: () => 'jedstion:eliminar',
      iconoAccionado: () => '' /* 'jedstion:eliminar_accionado' */,
      iconoDeshabilitado: () => '' /* 'jedstion:eliminar_disabled' */
    }, {
      nombre_boton: "Reporte",
      functionName: 'generar_reporte',
      iconoAccion: () => 'jedstion:imprimir',
      iconoAccionado: () => '' /* 'jedstion:imprimir_accionado' */,
      iconoDeshabilitado: () => '' /* 'jedstion:imprimir_disabled' */
    }
    /* {
        nombre_boton: "Guardar Factura",
        functionName: 'guardar_factura',
        iconoAccion: () => 'jedstion:reporte_de_venta',
        iconoAccionado: () => '',
        iconoDeshabilitado: () => '',
    }, */];
  }
  /* checkTabla(){
      console.log(this.tabla)
      this.hasData = this.tabla !== undefined ? true : false;
  } */
  generarAcciones(event) {
    switch (event.name) {
      case 'editar':
        this.updateCobranza(event);
        break;
      case 'eliminar':
        this.deleteCobranza(event);
        break;
      case 'generar_reporte':
        this.generarReporteCobro(event);
        break;
      /* case 'guardar_factura':
          this.guardarFactura(event);
          break; */
    }
  }

  deleteCobranza(event) {
    const idcobro = event.params.data.idcobro;
    this.confirm.open({
      title: "Eliminar Cobranza: " + idcobro,
      message: `¿Desea eliminar la Cobranza: ${event.params.data.idcobro} -  ${event.params.data.descripcion_cliente}?`,
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
        this._cobranzasService.deleteCobranza(this.token, idcobro).subscribe({
          next: res => {
            this.alert.success("Cobranza elimada con éxito");
            setTimeout(() => {
              this.tabla.renderTabla();
              // this.checkTabla();
            }, 750);
          },
          error: err => {
            this.alert.error("Ocurrió un error al eliminar la cobranza");
          }
        });
      }
    });
  }
  updateCobranza(event) {
    const id = event.params.data.idcobro;
    this.router.navigate([`/cobranzas/edicion-cobro/${id}`]);
  }
  onNuevaCobranza() {
    this.router.navigate(['/cobranzas/alta-cobro']);
  }
  generarReporteCobro(event) {
    const params = `?idcobro=${event.params.data.idcobro}`;
    this._cobranzasService.generarReporteCobro(this.token, params).subscribe({
      next: res => {
        const path = res.path;
        window.open(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseRest + "/" + path, '_blank');
      },
      error: err => {
        this.alert.error("Ocurrió un error al generar el reporte");
      }
    });
  }
  /* guardarFactura(event){
      this.router.navigate(['/cobranzas/guardar-factura']);
  } */
  ngOnDestroy() {}
}
CobranzasComponent.ɵfac = function CobranzasComponent_Factory(t) {
  return new (t || CobranzasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_3__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_cobranzas_service__WEBPACK_IMPORTED_MODULE_4__.CobranzasService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_5__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__.EmpresaService));
};
CobranzasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CobranzasComponent,
  selectors: [["app-cobranzas"]],
  viewQuery: function CobranzasComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  inputs: {
    extraParams: "extraParams"
  },
  decls: 11,
  vars: 15,
  consts: [[1, "w-full", "h-full", "flex", "flex-col", "items-center", "p-4"], [1, "w-full", "flex", "justify-end"], [1, "w-1/7", "flex", "justify-center", "items-center"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "w-full", "pr-2", "pl-2", "mt-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "functionEmitter"]],
  template: function CobranzasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CobranzasComponent_Template_button_click_3_listener() {
        return ctx.onNuevaCobranza();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "svg", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "path", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Nueva Cobranza");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 8)(10, "app-tabla-dinamica", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("functionEmitter", function CobranzasComponent_Template_app_tabla_dinamica_functionEmitter_10_listener($event) {
        return ctx.generarAcciones($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "ssp")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  encapsulation: 2
});


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
//# sourceMappingURL=src_app_modules_ventas_cobranzas_cobranzas_module_ts.js.map