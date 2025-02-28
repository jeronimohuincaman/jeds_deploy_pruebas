"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_ventas_genericas_venta-generica_module_ts"],{

/***/ 43857:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ventas/genericas/components/alta-edicion/alta-edicion.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AltaEdicionVentaComponent": () => (/* binding */ AltaEdicionVentaComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 32313);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 62566);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/constants/date-format */ 93611);
/* harmony import */ var _calcular_unitario_calcular_unitario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calcular-unitario/calcular-unitario.component */ 36005);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var app_modules_administracion_clientes_components_save_save_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/modules/administracion/clientes/components/save/save.component */ 70184);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _service_venta_generica_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/venta-generica.service */ 73899);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/components/spinner/spinner.component */ 32925);

































function AltaEdicionVentaComponent_spinner_component_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "spinner-component");
  }
}
function AltaEdicionVentaComponent_fuse_alert_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "fuse-alert", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", ctx_r1._alertConfig.type)("appearance", "outline")("@fadeIn", ctx_r1.showAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1._alertConfig.message, " ");
  }
}
function AltaEdicionVentaComponent_form_8_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 74)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_mat_option_18_Template_mat_option_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r27.seleccionItem($event, true, "vendedor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", cliente_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", cliente_r26.descripcion, " ");
  }
}
function AltaEdicionVentaComponent_form_8_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r29.limpiarCasillero("cliente"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_button_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 74)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_mat_option_32_Template_mat_option_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r32.seleccionItem($event, true, "descripcion_obra"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vendedor_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", vendedor_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", vendedor_r31.nombre, " ", vendedor_r31.apellido, " ");
  }
}
function AltaEdicionVentaComponent_form_8_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r34.limpiarCasillero("vendedor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_form_35_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_form_35_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r47.limpiarCasillero("descripcion_obra"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_form_35_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_form_35_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r49.limpiarCasillero("direccion_obra"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_form_35_button_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 74)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_form_35_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_form_35_mat_option_19_Template_mat_option_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r52.seleccionItem($event, true, "tratamiento"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const localidad_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", localidad_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", localidad_r51.descripcion, " ");
  }
}
function AltaEdicionVentaComponent_form_8_form_35_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_form_35_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r55);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r54.limpiarCasillero("localidad"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_form_35_button_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 74)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_form_35_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_form_35_mat_option_30_Template_mat_option_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r57.seleccionItem($event, true, "articulo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tratamiento_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", tratamiento_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", tratamiento_r56.descripcion, " ");
  }
}
function AltaEdicionVentaComponent_form_8_form_35_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_form_35_button_32_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r59.limpiarCasillero("tratamiento"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_form_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 41)(1, "div", 12)(2, "mat-form-field", 43)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Obra");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_form_35_Template_input_keydown_enter_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r61.seleccionItem($event, true, "direccion_obra"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AltaEdicionVentaComponent_form_8_form_35_button_6_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mat-form-field", 43)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Direcci\u00F3n Obra");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_form_35_Template_input_keydown_enter_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r62);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r63.seleccionItem($event, true, "localidad"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AltaEdicionVentaComponent_form_8_form_35_button_11_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-form-field", 79)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Localidad - Provincia");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_form_35_Template_input_keydown_enter_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r62);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r64.seleccionItem($event, true, "tratamiento"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, AltaEdicionVentaComponent_form_8_form_35_button_16_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "mat-autocomplete", 21, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, AltaEdicionVentaComponent_form_8_form_35_mat_option_19_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, AltaEdicionVentaComponent_form_8_form_35_button_21_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 12)(23, "mat-form-field", 82)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Tratamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_form_35_Template_input_keydown_enter_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r62);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r65.seleccionItem($event, true, "articulo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, AltaEdicionVentaComponent_form_8_form_35_button_27_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "mat-autocomplete", 21, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, AltaEdicionVentaComponent_form_8_form_35_mat_option_30_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](31, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, AltaEdicionVentaComponent_form_8_form_35_button_32_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 85)(34, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](35, "mat-checkbox", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Acarreo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](39, "mat-checkbox", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "Colocaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "mat-checkbox", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "Retiro en F\u00E1brica");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "mat-form-field", 90)(47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "Fecha de Entrega");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](49, "input", 91)(50, "mat-datepicker-toggle", 15)(51, "mat-datepicker", null, 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](18);
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](29);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](52);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r13.form_obra);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.form_obra.get("descripcion_obra").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.form_obra.get("direccion_obra").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r13.form_obra.get("localidad").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayWith", ctx_r13.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 16, ctx_r13.filteredLocalidades));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.form_obra.get("localidad").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r13.form_obra.get("tratamiento").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayWith", ctx_r13.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](31, 18, ctx_r13.filteredTratamientos));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r13.form_obra.get("tratamiento").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matDatepicker", _r46)("min", ctx_r13.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("for", _r46);
  }
}
function AltaEdicionVentaComponent_form_8_small_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "small", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_small_43_Template_small_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](42);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r14.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " (Max: 20Mb) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]("Adjuntos");
  }
}
function AltaEdicionVentaComponent_form_8_div_44_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const imagen_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", imagen_r69.path, " (", ctx_r70.getFileSize(imagen_r69.size), ")");
  }
}
function AltaEdicionVentaComponent_form_8_div_44_ng_container_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "open_in_new");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const imagen_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("href", ctx_r71.urlBase + imagen_r69.path, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r71.getFileNameFromUrl(imagen_r69.path), " ");
  }
}
function AltaEdicionVentaComponent_form_8_div_44_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AltaEdicionVentaComponent_form_8_div_44_ng_container_1_span_2_Template, 2, 2, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AltaEdicionVentaComponent_form_8_div_44_ng_container_1_a_3_Template, 4, 2, "a", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_div_44_ng_container_1_Template_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r75);
      const imagen_r69 = restoredCtx.$implicit;
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r74.removeFile("adjuntos", imagen_r69));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const imagen_r69 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r68.color_primario ? "" : ctx_r68.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r68.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !imagen_r69.idventaadjunto);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", imagen_r69.idventaadjunto);
  }
}
function AltaEdicionVentaComponent_form_8_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AltaEdicionVentaComponent_form_8_div_44_ng_container_1_Template, 7, 6, "ng-container", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r16.adjuntos);
  }
}
function AltaEdicionVentaComponent_form_8_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", articulo_r76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", articulo_r76.codigo_interno, " - ", articulo_r76.descripcion, " ");
  }
}
function AltaEdicionVentaComponent_form_8_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_button_55_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r78);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r77.limpiarCasillero("articulo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_mat_option_60_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("(x", um_r79.factor_um, " ", um_r79.um_base, ")");
  }
}
function AltaEdicionVentaComponent_form_8_mat_option_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AltaEdicionVentaComponent_form_8_mat_option_60_i_2_Template, 2, 2, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const um_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", um_r79.idarticulounidadmedida);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", um_r79.descripcion_um, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", um_r79.factor_um != 1);
  }
}
function AltaEdicionVentaComponent_form_8_button_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_button_65_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r82.limpiarCasillero("detalle"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_button_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_button_76_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r84.limpiarCasillero("importe_unitario"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_button_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_button_89_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r87);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r86.limpiarCasillero("porcentaje_bonificado"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Articulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r88.color_primario ? "" : ctx_r88.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r88.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r118.descripcion, " ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "td", 130);
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Unidad de medida");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r91.color_primario ? "" : ctx_r91.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r91.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r119 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r119.descripcion_um, " ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "td", 130);
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r94.color_primario ? "" : ctx_r94.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r94.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r120.cantidad, " ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "td", 130);
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Precio Unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r97.color_primario ? "" : ctx_r97.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r97.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 133)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" $", item_r121.importe_unitario, " ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Bonificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r100.color_primario ? "" : ctx_r100.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r100.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 133)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r122 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("$", item_r122.importe_bonificado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" (", item_r122.porcentaje_bonificado, "%) ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" $", ctx_r102.totales.importe_bonificado, "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "No Bonificado");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r103.color_primario ? "" : ctx_r103.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r103.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 133)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r123 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" $", item_r123.importe_no_bonificado, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" (", 100 - item_r123.porcentaje_bonificado, "%) ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" $", ctx_r105.totales.importe_no_bonificado, " ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r106.color_primario ? "" : ctx_r106.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r106.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 133)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r124 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" $", item_r124.importe_iva, " ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" $", ctx_r108.totales.importe_iva, "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r109.color_primario ? "" : ctx_r109.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r109.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 133)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r125 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" $", item_r125.importe_subtotal, " ");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" $", ctx_r111.totales.importe_subtotal, "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 135);
  }
  if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r112.color_primario ? "" : ctx_r112.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r112.color_primario || "");
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 133)(1, "button", 99, 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_table_101_td_35_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r129);
      const movimiento_r126 = restoredCtx.$implicit;
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r128.deleteMovimiento(movimiento_r126));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function AltaEdicionVentaComponent_form_8_table_101_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "td", 130);
  }
}
function AltaEdicionVentaComponent_form_8_table_101_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 138);
  }
}
function AltaEdicionVentaComponent_form_8_table_101_tr_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 139);
  }
}
function AltaEdicionVentaComponent_form_8_table_101_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 140);
  }
}
function AltaEdicionVentaComponent_form_8_table_101_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "table", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](1, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AltaEdicionVentaComponent_form_8_table_101_th_2_Template, 2, 4, "th", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AltaEdicionVentaComponent_form_8_table_101_td_3_Template, 2, 1, "td", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AltaEdicionVentaComponent_form_8_table_101_td_4_Template, 1, 0, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](5, 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AltaEdicionVentaComponent_form_8_table_101_th_6_Template, 2, 4, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AltaEdicionVentaComponent_form_8_table_101_td_7_Template, 2, 1, "td", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AltaEdicionVentaComponent_form_8_table_101_td_8_Template, 1, 0, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](9, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AltaEdicionVentaComponent_form_8_table_101_th_10_Template, 2, 4, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, AltaEdicionVentaComponent_form_8_table_101_td_11_Template, 2, 1, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, AltaEdicionVentaComponent_form_8_table_101_td_12_Template, 1, 0, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](13, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, AltaEdicionVentaComponent_form_8_table_101_th_14_Template, 2, 4, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, AltaEdicionVentaComponent_form_8_table_101_td_15_Template, 3, 1, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, AltaEdicionVentaComponent_form_8_table_101_td_16_Template, 2, 0, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](17, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, AltaEdicionVentaComponent_form_8_table_101_th_18_Template, 2, 4, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, AltaEdicionVentaComponent_form_8_table_101_td_19_Template, 4, 2, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, AltaEdicionVentaComponent_form_8_table_101_td_20_Template, 2, 1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](21, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, AltaEdicionVentaComponent_form_8_table_101_th_22_Template, 2, 4, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, AltaEdicionVentaComponent_form_8_table_101_td_23_Template, 4, 2, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, AltaEdicionVentaComponent_form_8_table_101_td_24_Template, 2, 1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](25, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](26, AltaEdicionVentaComponent_form_8_table_101_th_26_Template, 2, 4, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, AltaEdicionVentaComponent_form_8_table_101_td_27_Template, 3, 1, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, AltaEdicionVentaComponent_form_8_table_101_td_28_Template, 2, 1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](29, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, AltaEdicionVentaComponent_form_8_table_101_th_30_Template, 2, 4, "th", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, AltaEdicionVentaComponent_form_8_table_101_td_31_Template, 3, 1, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, AltaEdicionVentaComponent_form_8_table_101_td_32_Template, 2, 1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](33, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, AltaEdicionVentaComponent_form_8_table_101_th_34_Template, 1, 4, "th", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, AltaEdicionVentaComponent_form_8_table_101_td_35_Template, 5, 0, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, AltaEdicionVentaComponent_form_8_table_101_td_36_Template, 1, 0, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, AltaEdicionVentaComponent_form_8_table_101_tr_37_Template, 1, 0, "tr", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](38, AltaEdicionVentaComponent_form_8_table_101_tr_38_Template, 1, 0, "tr", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, AltaEdicionVentaComponent_form_8_table_101_tr_39_Template, 1, 0, "tr", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx_r24.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx_r24.columns)("matHeaderRowDefSticky", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx_r24.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matFooterRowDef", ctx_r24.columns)("matFooterRowDefSticky", true);
  }
}
function AltaEdicionVentaComponent_form_8_div_102_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 141)(1, "p", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "No hay art\u00EDculos cargados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}
function AltaEdicionVentaComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "form", 10)(1, "div", 11)(2, "div", 12)(3, "mat-form-field", 13)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Fecha de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "input", 14)(7, "mat-datepicker-toggle", 15)(8, "mat-datepicker", null, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 17)(11, "mat-form-field", 18)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_Template_input_keydown_enter_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r131.seleccionItem($event, true, "vendedor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, AltaEdicionVentaComponent_form_8_button_15_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "mat-autocomplete", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, AltaEdicionVentaComponent_form_8_mat_option_18_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, AltaEdicionVentaComponent_form_8_button_20_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 25)(22, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r133.cargarNuevoCliente());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "mat-form-field", 29)(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_Template_input_keydown_enter_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r134.seleccionItem($event, true, "descripcion_obra"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, AltaEdicionVentaComponent_form_8_button_29_Template, 3, 0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "mat-autocomplete", 21, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](32, AltaEdicionVentaComponent_form_8_mat_option_32_Template, 2, 3, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, AltaEdicionVentaComponent_form_8_button_34_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, AltaEdicionVentaComponent_form_8_form_35_Template, 53, 20, "form", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 33)(37, "div", 34)(38, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_Template_button_click_38_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](42);
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](_r14.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AltaEdicionVentaComponent_form_8_Template_input_change_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r136.setImagen($event, 0));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, AltaEdicionVentaComponent_form_8_small_43_Template, 4, 1, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, AltaEdicionVentaComponent_form_8_div_44_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "form", 41)(46, "div", 12)(47, "div", 42)(48, "mat-form-field", 43)(49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AltaEdicionVentaComponent_form_8_Template_input_ngModelChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r137.seleccionItem($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "mat-autocomplete", 21, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](54, AltaEdicionVentaComponent_form_8_mat_option_54_Template, 2, 3, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, AltaEdicionVentaComponent_form_8_button_55_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "mat-form-field", 43)(57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "UM");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "mat-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AltaEdicionVentaComponent_form_8_Template_mat_select_ngModelChange_59_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r138.seleccionItem({
        um: $event
      }));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](60, AltaEdicionVentaComponent_form_8_mat_option_60_Template, 3, 3, "mat-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "mat-form-field", 43)(62, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_Template_input_keydown_enter_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r139.seleccionItem($event, true, "cantidad"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](65, AltaEdicionVentaComponent_form_8_button_65_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "mat-form-field", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_Template_mat_form_field_keydown_enter_66_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r140.seleccionItem($event, true, "importe_unitario"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](69, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "div", 51)(71, "mat-form-field", 52)(72, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](73, "Precio Unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "div", 53)(75, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_Template_input_keydown_enter_75_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r141.seleccionItem($event, true, "porcentaje_bonificado"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](76, AltaEdicionVentaComponent_form_8_button_76_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "mat-hint", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78, "Sin I.V.A.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "div", 56)(80, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r142.calcularPrecioUnitario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "svg", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](82, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "div", 51)(84, "mat-form-field", 52)(85, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "Bonificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "div", 53)(88, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_Template_input_keydown_enter_88_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r143.onCargar($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](89, AltaEdicionVentaComponent_form_8_button_89_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "div", 56)(91, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_form_8_Template_button_click_91_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r144.onCargar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](93, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "div", 62)(95, "div", 63)(96, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function AltaEdicionVentaComponent_form_8_Template_input_keyup_96_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r145.applyFilter($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "svg", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](99, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](100, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](101, AltaEdicionVentaComponent_form_8_table_101_Template, 40, 6, "table", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](102, AltaEdicionVentaComponent_form_8_div_102_Template, 3, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "form", 41)(104, "div", 71)(105, "mat-form-field", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown.enter", function AltaEdicionVentaComponent_form_8_Template_mat_form_field_keydown_enter_105_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r132);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r146.seleccionItem($event, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107, "TOTAL VENTA");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](108, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](9);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](17);
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](31);
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](53);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matDatepicker", _r4)("min", ctx_r2.minDate)("max", ctx_r2.maxDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("for", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r2.form.get("cliente").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayWith", ctx_r2.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 47, ctx_r2.filteredClientes));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.form.get("cliente").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r2.color_primario);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r2.form.get("vendedor").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayWith", ctx_r2.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](33, 49, ctx_r2.filteredVendedores));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.form.get("vendedor").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.configura_obra);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r2.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("accept", ctx_r2.validExtension);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.adjuntos.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.adjuntos.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r2.form_carga_articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matAutocomplete", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("displayWith", ctx_r2.getTextArticulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.filteredArticulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.form_carga_articulos.get("articulo").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.unidades_de_medida);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.form_carga_articulos.get("detalle").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.form_carga_articulos.get("importe_unitario").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r2.color_primario);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.form_carga_articulos.get("porcentaje_bonificado").value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r2.color_primario ? "" : ctx_r2.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r2.color_primario);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.dataSource.data.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.dataSource.data.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r2.form);
  }
}
function AltaEdicionVentaComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 143)(1, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_div_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r148);
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r147.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx_r3.color_primario ? "" : ctx_r3.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r3.color_primario || "");
  }
}
class AltaEdicionVentaComponent {
  constructor(_empresaService, _ventaGenericasService, _headerTextService, alert, dialogo, datePipe, dialogRef, router, route) {
    this._empresaService = _empresaService;
    this._ventaGenericasService = _ventaGenericasService;
    this._headerTextService = _headerTextService;
    this.alert = alert;
    this.dialogo = dialogo;
    this.datePipe = datePipe;
    this.dialogRef = dialogRef;
    this.router = router;
    this.route = route;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource();
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.maxPalabras = 150;
    this.deposito_default = 0;
    this.mostrarSpinner = true;
    this.mostrar_mensaje = false;
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.articulos_list = [];
    this.unidades_de_medida = [];
    this.lista_de_articulos = [];
    this.columns = ['articulo', 'unidadmedida', 'cantidad', 'importe_unitario', 'importe_bonificado', 'importe_no_bonificado', 'importe_iva', 'importe_subtotal', 'acciones'];
    this.funcionesObjeto = null;
    this.extraParams = '';
    this.totales = {
      importe_iva: 0,
      importe_bonificado: 0,
      importe_no_bonificado: 0,
      importe_subtotal: 0
    };
    this.importe_desuento = 0;
    this.filtroBusqueda = '';
    this.filter = {
      tipo: -1,
      rubro: -1
    };
    this.validExtension = ['.jpg', '.png', '.pdf'];
    this.selectedFiles = [];
    this.adjunto = null;
    this.adjuntos = [];
    this.selectedOption = '';
    this.esEdicion = this.route.snapshot.paramMap.get('idventa') ? true : false;
    this.idventa = Number(this.route.snapshot.paramMap.get('idventa')) ?? null;
    this.urlBase = `${environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.baseRest}/`;
    let titulo = this.esEdicion ? {
      custom_title: true,
      titulo: `Edición de Venta Genérica ${this.idventa}`
    } : {
      custom_title: true,
      titulo: 'Alta de Venta Genérica'
    };
    this._headerTextService.setCustomTitle(titulo);
    this.user = JSON.parse(localStorage.getItem('user'));
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
      this.configura_obra = empresa.configura_obra === 1 ? true : false;
    });
    // Se define minDate como null o cualquier otra fecha límite que desees permitir hacia atras
    this.minDate = null;
    // Define maxDate como el dia de hoy
    this.maxDate = new Date();
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.timer)(100, 1500).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.finalize)(() => {
          this.showAlert = false;
          this._alertConfig = null;
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.takeWhile)(() => time > 0), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._unsubscribeAll), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(() => time -= 1)).subscribe();
      }
    });
  }
  ngOnInit() {
    // Load empresa data
    this._empresaService.getEmpresa();
    this.newForm();
    this.loadServices();
    // Escuchamos los cambios en el control de 'articulo' para filtrar mientras escribe
    this.form_carga_articulos.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.debounceTime)(300),
    // Evita demasiadas llamadas consecutivas
    (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.distinctUntilChanged)(),
    // Solo procede si el valor cambia
    (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.switchMap)(value => {
      const idarticulo = typeof value === 'object' ? value.idarticulo : null;
      const filterLike = typeof value === 'string' ? value : null;
      return this._ventaGenericasService.getArticulos(idarticulo, filterLike);
    })).subscribe(response => {
      this.filteredArticulos = response.list;
    });
    // Escuchamos los cambios del porcentaje de descuento efectivo
    this.form.get('porcentaje_descuento_efectivo').valueChanges.subscribe(porcentaje_descuento_efectivo => {
      this.updateDescuento(porcentaje_descuento_efectivo);
    });
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required]),
      cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.maxLength(this.maxPalabras)]),
      vendedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      porcentaje_descuento_efectivo: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      total_venta: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl({
        value: '',
        disabled: true
      })
    });
    if (this.configura_obra) {
      this.form_obra = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
        descripcion_obra: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
        direccion_obra: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
        localidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
        tratamiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
        colocacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
        acarreo: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
        retiro_fabrica: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(false, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
        fecha_entrega: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(this.datePipe.transform(new Date(), 'yyyy-MM-dd'), [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required])
        // fecha_medicion: new FormControl((this.datePipe.transform(new Date(), 'yyyy-MM-dd')), [Validators.required]),
      });
    }

    this.form_carga_articulos = new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroup({
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
      unidadmedida: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
      detalle: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl(''),
      importe_unitario: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required),
      cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1)]),
      porcentaje_bonificado: new _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required)
    });
    this.updateFormValidators();
  }
  volverPaginaAnterior() {
    this.router.navigate(['/ventas']);
  }
  // Este método es llamado cuando el componente es destruido
  ngOnDestroy() {}
  /**
   *
   * @param $event
   * @param cambio_de_foco
   * @param redirect_control
   */
  seleccionItem($event, cambio_de_foco, redirect_control) {
    if ($event.idarticulo) {
      this.form_carga_articulos.get('unidadmedida').enable();
      this.getUnidadesDeMedidaArticulos($event.idarticulo);
      // Muevo el foco al campo "cantidad" luego de un pequeño retraso.
      // Lo encapsulo dentro de `setTimeout` porque espero a que el DOM renderice el input "cantidad".
      setTimeout(() => {
        const cantidadField = document.querySelector('[formControlName="detalle"]');
        cantidadField?.focus();
      }, 1);
    }
    if ($event && cambio_de_foco === true && redirect_control) {
      // Si es un evento de teclado, evita que se propague
      if ($event instanceof KeyboardEvent) $event.preventDefault();
      // Muevo el foco al campo "cantidad" luego de un pequeño retraso.
      // Lo encapsulo dentro de `setTimeout` porque espero a que el DOM renderice el input "cantidad".
      setTimeout(() => {
        const cantidadField = document.querySelector(`[formControlName=${redirect_control}]`);
        cantidadField?.focus();
      }, 1);
    }
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero(input) {
    if (input != 'carga_exitosa') {
      if (this.form.get(input)) {
        this.form.get(input).setValue('');
      } else if (this.form_carga_articulos.get(input)) {
        this.form_carga_articulos.get(input).setValue('');
      } else {
        this.form_obra.get(input).setValue('');
      }
      this.seleccionItem(input, false, 'reset');
    }
    if (input === 'articulo') {
      this.form_carga_articulos.get('unidadmedida').disable();
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
    }
    if (input === 'carga_exitosa') {
      this.form_carga_articulos.get('articulo').setValue('');
      this.form_carga_articulos.get('unidadmedida').setValue('');
      this.form_carga_articulos.get('cantidad').setValue('');
      this.form_carga_articulos.get('detalle').setValue('');
      this.form_carga_articulos.get('importe_unitario').setValue('');
      this.form_carga_articulos.get('porcentaje_bonificado').setValue('');
    }
  }
  onCargar($event) {
    if ($event?.key === 'Enter') {
      $event.preventDefault();
    }
    if (!this.form_carga_articulos.get('unidadmedida').value || !this.form_carga_articulos.get('articulo').value || !this.form_carga_articulos.get('cantidad').value || !this.form_carga_articulos.get('importe_unitario').value || !this.form_carga_articulos.get('porcentaje_bonificado').value) {
      return this.alert.warning('Por favor, complete todos los campos de la carga de articulo');
    }
    if (this.form_carga_articulos.get('cantidad').value <= 0) {
      return this.alert.warning('Por favor, Ingrese una cantidad mayor a cero');
    }
    if (this.form_carga_articulos.get('importe_unitario').value <= 0) {
      return this.alert.warning('Por favor, Ingrese una precio unitario mayor a cero');
    }
    if (this.form_carga_articulos.get('porcentaje_bonificado').value < 0 || this.form_carga_articulos.get('porcentaje_bonificado').value > 100) {
      return this.alert.warning('Por favor, Ingrese un porcentaje de bonificación entre cero y cien');
    }
    if (!this.form_carga_articulos.valid) {
      return this.alert.error('Debe ingresar un Artículo');
    } else {
      let existe_articulo_en_grilla = this.lista_de_articulos.find(item => item.idarticulo === this.form_carga_articulos.get('articulo').value.idarticulo && item.idarticulounidadmedida === this.form_carga_articulos.get('unidadmedida').value);
      if (existe_articulo_en_grilla) {
        this.form_carga_articulos.get('unidadmedida').setValue('');
        return this.alert.warning('Ya existe un movimiento de ese articulo con esa unidad de medida.');
      }
      let articulo = {
        idarticulo: this.form_carga_articulos.get('articulo').value.idarticulo,
        detalle: this.form_carga_articulos.get('detalle').value,
        cantidad: this.form_carga_articulos.get('cantidad').value,
        precio_unitario: this.form_carga_articulos.get('importe_unitario').value,
        porcentaje_bonificado: this.form_carga_articulos.get('porcentaje_bonificado').value,
        idarticulounidadmedida: this.form_carga_articulos.get('unidadmedida').value
      };
      this.addMovimiento(articulo);
    }
    // Mueve el foco al campo "articulo" después de la carga
    this.form_carga_articulos.get('articulo').reset({
      value: ''
    });
    const articuloField = document.querySelector('[formControlName="articulo"]');
    articuloField?.focus();
  }
  onSubmit() {
    // Se especifica el tipo de base 64
    this.adjuntos = this.adjuntos.map(adjunto => {
      return {
        idventaadjunto: adjunto.idventaadjunto ?? null,
        path: !adjunto.idventaadjunto ? `data:application/pdf;base64,${adjunto.base64}` : adjunto.path
      };
    });
    // Se formatea la lista de articulos para que coincida con el formato deseado agregando "importe_total" y eliminando "importe_subtotal"
    this.lista_de_articulos = this.lista_de_articulos.map(item => {
      item.importe_total = item.importe_subtotal;
      delete item.importe_subtotal;
      return item;
    });
    // Se formatea la fecha nuevamente al formato deseado (YYYY-MM-DD)
    const fecha_venta_formateada = this.datePipe.transform(this.form.get('fecha').value, 'yyyy-MM-dd');
    if (this.configura_obra) {
      // const fecha_medicion_formateada = this.datePipe.transform(this.form_obra.get('fecha_medicion').value, 'yyyy-MM-dd');
      const fecha_entrega_formateada = this.datePipe.transform(this.form_obra.get('fecha_entrega').value, 'yyyy-MM-dd');
      var obra = {
        descripcion: this.form_obra.get('descripcion_obra').value,
        direccion: this.form_obra.get('direccion_obra').value,
        idlocalidad: parseInt(this.form_obra.get('localidad').value.idlocalidad),
        idtratamiento: parseInt(this.form_obra.get('tratamiento').value.id),
        // fecha_medicion: fecha_medicion_formateada,
        fecha_entrega: fecha_entrega_formateada,
        colocacion: this.form_obra.get('colocacion').value ? 1 : 0,
        acarreo: this.form_obra.get('acarreo').value ? 1 : 0,
        retiro_fabrica: this.form_obra.get('retiro_fabrica').value ? 1 : 0
      };
    }
    // Se crea el payload con los datos necesarios para crear una venta
    const payload = {
      venta: {
        idcliente: parseInt(this.form.get('cliente').value.id),
        idusuario: this.form.get('vendedor').value.codigo,
        fecha: fecha_venta_formateada,
        importe_total: this.form.get('total_venta').value,
        importe_bonificado: this.totales.importe_bonificado,
        importe_no_bonificado: this.totales.importe_no_bonificado,
        importe_iva: this.totales.importe_iva.toString(),
        porcentaje_descuento: this.form.get('porcentaje_descuento_efectivo').value ? this.form.get('porcentaje_descuento_efectivo').value : 0,
        importe_descuento: this.importe_desuento
      },
      obra: this.configura_obra ? obra : null,
      items: this.lista_de_articulos,
      adjuntos: this.adjuntos
    };
    if (this.esEdicion) {
      this._ventaGenericasService.updateVenta(this.idventa, payload).subscribe({
        next: data => {
          if (data) {
            this.editadoExitosamente.emit();
            this.volverPaginaAnterior();
          }
        }
      });
    } else {
      this._ventaGenericasService.saveVenta(payload).subscribe({
        next: data => {
          if (data) {
            this.creadoExitosamente.emit();
            this.volverPaginaAnterior();
          }
        }
      });
    }
  }
  /**
   * Metodo para calcular el precio unitario de un item
   * @returns
   */
  calcularPrecioUnitario() {
    const articuloSeleccionado = this.form_carga_articulos.get('articulo').value;
    if (!articuloSeleccionado) {
      return this.alert.error('Seleccione un artículo válido');
    }
    // Abre el diálogo
    this.dialogo.open(_calcular_unitario_calcular_unitario_component__WEBPACK_IMPORTED_MODULE_3__.CalcularUnitarioComponent, {
      data: articuloSeleccionado,
      panelClass: 'ayuda-dialog'
    }).afterClosed().subscribe({
      next: data => {
        if (data) {
          this.form_carga_articulos.get('importe_unitario').setValue(data.result);
          // Notifica al usuario
          this.alert.success('Se calculo el precio unitario');
        }
      },
      error: error => {
        console.error('Error al calcular el precio unitario:', error);
        this.alert.error('Ocurrió un error al calcular el precio unitario');
      }
    });
  }
  cargarNuevoCliente() {
    // Abre el diálogo
    this.dialogo.open(app_modules_administracion_clientes_components_save_save_component__WEBPACK_IMPORTED_MODULE_5__.SaveComponent, {
      panelClass: 'ayuda-dialog'
    }).afterClosed().subscribe({
      next: data => {
        if (data) {
          this.form.get('cliente').setValue(data.result);
          // Notifica al usuario
          this.alert.success('El cliente fue creado con éxito');
          this.getClientes();
        }
      },
      error: error => {
        console.error('Error al crear cliente:', error);
        this.alert.error('Ocurrió un error al crear cliente');
      }
    });
  }
  // ################# Carga De Movimientos #################
  /**
   * Esta funcion añade un nuevo item a la grilla dentro del saveComponent.
   * @var movimiento_articulo Encapsula un objeto con los datos que deseamos mostrar en la tabla.
   */
  addMovimiento(item) {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Obtengo el arituclo calculado
      const ItemVenta = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this._ventaGenericasService.calcularItem(item));
      // Si la operacion fue exitosa...
      if (ItemVenta.success) {
        // Encapsulo los datos del articulo en un objeto
        let item_venta = {
          ...ItemVenta.result
        };
        _this.lista_de_articulos = [item_venta, ..._this.lista_de_articulos]; // Se agrega el nuevo articulo al comienzo de la lista para que siempre aparezca primero en la grilla
        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(_this.lista_de_articulos); //Actualizo la tabla
        // Actualizar validaciones según el estado de la grilla
        _this.updateFormValidators();
        _this.updateTotal();
        _this.limpiarCasillero('carga_exitosa'); // Limpio casillerros para que este listo para volver a cargar
        _this.alert.success("Artículo añadido con éxito");
      } else {
        return _this.alert.error("Ocurrió un error al añadir el artículo");
      }
    })();
  }
  /**
   * El resultado de esta operación es un nuevo
   * array que contiene todos los elementos de la lista original,
   * excepto el artículo que se desea eliminar.
   * @param articulo
   */
  deleteMovimiento(articulo) {
    this.lista_de_articulos = this.lista_de_articulos.filter(item => {
      return item !== articulo;
    });
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(this.lista_de_articulos);
    // Actualizamos el valor total de la carga
    this.updateTotal();
    this.alert.success("Artículo eliminado con éxito");
  }
  // ################# Metodos de comunicacion con el service #################
  /**
  * Este metodo ejecuta todas las peticiones asincronas al mismo tiempo
  */
  loadServices() {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all([_this2.getArticulos(), _this2.getClientes(), _this2.getVendedores(), _this2.configura_obra ? _this2.getLocalidades() : Promise.resolve(), _this2.configura_obra ? _this2.getTratamientos() : Promise.resolve(), _this2.esEdicion ? _this2.getDatosVenta() : Promise.resolve()]).then(() => {
        _this2.mostrarSpinner = false;
      });
    })();
  }
  getDatosVenta() {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Venta = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this3._ventaGenericasService.getDatosVenta(_this3.idventa));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.venta = Venta.list.venta;
          _this3.lista_de_articulos = Venta.list.items.map(item => {
            item.importe_subtotal = item.importe_total;
            return item;
          });
          _this3.adjuntos = Venta.list.adjuntos.map(item => {
            return item;
          });
          _this3.obra = Venta.list.obra ?? null;
          _this3.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource(_this3.lista_de_articulos); //Actualizo la tabla
          // Rellena los formularios con los datos obtenidos
          _this3.form.patchValue({
            fecha: _this3.venta.fecha,
            cliente: {
              id: _this3.venta.idcliente,
              descripcion: _this3.venta.descripcion_cliente
            },
            vendedor: {
              id: _this3.venta.idusuario,
              descripcion: _this3.venta.descripcion_usuario
            },
            porcentaje_descuento_efectivo: Number(_this3.venta.porcentaje_descuento),
            total_venta: _this3.venta.total
          });
          if (_this3.configura_obra) {
            _this3.form_obra.patchValue({
              descripcion_obra: _this3.obra?.descripcion ?? '',
              direccion_obra: _this3.obra?.direccion ?? '',
              localidad: {
                idlocalidad: _this3.obra.idlocalidad,
                descripcion: _this3.obra.descripcion_localidad
              },
              tratamiento: {
                id: _this3.obra.idtratamiento,
                descripcion: _this3.obra.descripcion_tratamiento
              },
              colocacion: _this3.obra?.colocacion ? true : false,
              acarreo: _this3.obra?.acarreo ? true : false,
              retiro_fabrica: _this3.obra?.retiro_fabrica ? true : false,
              fecha_entrega: _this3.datePipe.transform(_this3.obra?.fecha_entrega, 'yyyy-MM-dd')
              // fecha_medicion: this.datePipe.transform(this.obra?.fecha_medicion, 'yyyy-MM-dd'),
            });
          }

          _this3.updateTotal();
          // Oculto el spinner
          _this3.mostrarSpinner = false;
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getClientes(option) {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Clientes = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this4._ventaGenericasService.getClientes(option));
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this4.clientes = Clientes.list;
          _this4.filteredClientes = _this4.form.get('cliente').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)(value => _this4._filterSelect(value, 'clientes')));
          // Oculto el spinner
          _this4.mostrarSpinner = false;
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  getLocalidades(option) {
    var _this5 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Localidades = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this5._ventaGenericasService.getLocalidades());
      new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this5.localidades = Localidades.list;
          _this5.filteredLocalidades = _this5.form_obra.get('localidad').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)(value => _this5._filterSelect(value, 'localidades')));
          // Oculto el spinner
          _this5.mostrarSpinner = false;
          resolve(true);
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  getTratamientos(option) {
    var _this6 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Tratamientos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this6._ventaGenericasService.getTratamientos());
      new Promise( /*#__PURE__*/function () {
        var _ref4 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this6.tratamientos = Tratamientos.list;
          _this6.filteredTratamientos = _this6.form_obra.get('tratamiento').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)(value => _this6._filterSelect(value, 'tratamientos')));
          // Oculto el spinner
          _this6.mostrarSpinner = false;
          resolve(true);
        });
        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }());
    })();
  }
  getVendedores(option) {
    var _this7 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Vendedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this7._ventaGenericasService.getVendedores(option));
      new Promise( /*#__PURE__*/function () {
        var _ref5 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this7.vendedores = Vendedores['list'];
          _this7.filteredVendedores = _this7.form.get('vendedor').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)(value => _this7._filterVendodres(value)));
          // Oculto el spinner
          _this7.mostrarSpinner = false;
          resolve(true);
        });
        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }
  getArticulos() {
    var _this8 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const articulos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this8._ventaGenericasService.getArticulos());
      new Promise( /*#__PURE__*/function () {
        var _ref6 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this8.articulos = articulos.list;
          _this8.articulos_list = _this8.articulos;
          _this8.filteredArticulos = _this8.form_carga_articulos.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_25__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_26__.map)(value => _this8._filterArticulos(value)));
          resolve(true);
        });
        return function (_x6) {
          return _ref6.apply(this, arguments);
        };
      }());
    })();
  }
  getUnidadesDeMedidaArticulos(idarticulo) {
    var _this9 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const unidadesDeMedida = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this9._ventaGenericasService.getUnidadesDeMedidaArticulos(idarticulo));
      new Promise( /*#__PURE__*/function () {
        var _ref7 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          let um_base; // Asigno una variable global para que cada UM sepa cual es la um base (factor = '1.00')
          _this9.unidades_de_medida = unidadesDeMedida.list.sort((a, b) => a.factor - b.factor).map(unidad => {
            //Convierto en numero
            unidad.factor = parseFloat(unidad.factor);
            // Almaceno solo la um base de un articulo 
            if (unidad.factor === 1) {
              um_base = unidad.um.descripcion;
            }
            return {
              idarticulounidadmedida: unidad.idarticulounidadmedida,
              idunidadmedida: unidad.idunidadmedida,
              descripcion_um: unidad.um.descripcion,
              factor_um: unidad.factor,
              um_base: um_base
            };
          });
          // Autoasigna la primera unidad de medida al control del formulario
          if (_this9.unidades_de_medida.length > 0) {
            _this9.form_carga_articulos.get('unidadmedida').setValue(_this9.unidades_de_medida[0].idarticulounidadmedida);
            _this9.seleccionItem({
              um: _this9.unidades_de_medida[0].idarticulounidadmedida
            });
          }
          resolve(true);
        });
        return function (_x7) {
          return _ref7.apply(this, arguments);
        };
      }());
    })();
  }
  // ################# Metodo de filtrado para inputs autocomplete #################
  /**
  * Esta funcion es para filtrar los artículos según el input que se haya ingresado en el buscador de articulos.
  * @param value
  * @returns
  */
  _filterArticulos(value) {
    const filterValue = value.toString().toLowerCase();
    return this.articulos_list.filter(articulo => {
      const codigo_interno = articulo.codigo_interno.toString().toLowerCase().includes(filterValue);
      const descripcion = articulo.descripcion.toString().toLowerCase().includes(filterValue);
      return codigo_interno || descripcion;
    });
  }
  _filterVendodres(vendedor) {
    const filterValue = vendedor.toString().toLowerCase();
    return this.vendedores.filter(vendedor => vendedor.nombre.toLowerCase().includes(filterValue));
  }
  /**
   *
   * @param item Valor a buscar
   * @param model Modelo donde se retorna la lista de valores encontrados
   * @returns Valores encontrados en la lista
   */
  _filterSelect(item, model) {
    const filterValue = item.toString().toLowerCase();
    return this[`${model}`].filter(item => item.descripcion.toLowerCase().includes(filterValue));
  }
  // ################# Metodos para obtener textos de input #################
  getTextGenerico(option) {
    if (option.RazonSocial || option.razonSocial) return option ? option.RazonSocial || option.razonSocial : '';
    if (option.descripcion) return option ? option.descripcion : '';
    if (option.nick) return option ? `${option.nombre} ${option.apellido}` : '';
  }
  /**
  * Obtenemos la descripcion del articulo seleccionado.
  * @param articulo
  * @returns
  */
  getTextArticulo(articulo) {
    return articulo?.idarticulo ? `${articulo.codigo_interno} - ${articulo.descripcion}` : '';
  }
  /**
  * Este metodo sirve para agregar o quitar las validaciones de requeridos a los campos del formulario de carga de articulos.
  */
  updateFormValidators() {
    if (this.lista_de_articulos.length === 0) {
      // Si la grilla está vacía, hacer que los campos sean requeridos
      this.form_carga_articulos.get('articulo').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required);
      this.form_carga_articulos.get('cantidad').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1)]);
      this.form_carga_articulos.get('unidadmedida').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required);
      this.form_carga_articulos.get('importe_unitario').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required);
      this.form_carga_articulos.get('porcentaje_bonificado').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.required);
    } else {
      // Si hay elementos en la grilla, quitar la validación de requerido
      this.form_carga_articulos.get('articulo').clearValidators();
      this.form_carga_articulos.get('cantidad').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_23__.Validators.min(1));
      this.form_carga_articulos.get('unidadmedida').clearValidators();
      this.form_carga_articulos.get('importe_unitario').clearValidators();
      this.form_carga_articulos.get('porcentaje_bonificado').clearValidators();
    }
    // Asegurarse de que Angular reevalúe las validaciones
    this.form_carga_articulos.get('articulo').updateValueAndValidity();
    this.form_carga_articulos.get('cantidad').updateValueAndValidity();
    this.form_carga_articulos.get('unidadmedida').updateValueAndValidity();
    this.form_carga_articulos.get('importe_unitario').updateValueAndValidity();
    this.form_carga_articulos.get('porcentaje_bonificado').updateValueAndValidity();
  }
  /**
  * Metodo para calcular el valor total entre todos los subtotales de una grilla
  */
  updateTotal() {
    const importe_bonificado = this.lista_de_articulos.reduce((sum, item) => {
      const importe_bonificado = Number(item.importe_bonificado) || 0;
      return sum + importe_bonificado;
    }, 0);
    const importe_no_bonificado = this.lista_de_articulos.reduce((sum, item) => {
      const importe_no_bonificado = Number(item.importe_no_bonificado) || 0;
      return sum + importe_no_bonificado;
    }, 0);
    const importe_iva = this.lista_de_articulos.reduce((sum, item) => {
      const importe_iva = Number(item.importe_iva) || 0;
      return sum + importe_iva;
    }, 0);
    const importe_subtotal = this.lista_de_articulos.reduce((sum, item) => {
      const importe_subtotal = Number(item.importe_subtotal) || 0;
      return sum + importe_subtotal;
    }, 0);
    const total_venta = this.lista_de_articulos.reduce((sum, item) => {
      const subtotal = Number(item.importe_subtotal) || 0;
      return sum + subtotal;
    }, 0);
    this.totales = {
      importe_iva: parseFloat(importe_iva.toFixed(2)),
      importe_bonificado: parseFloat(importe_bonificado.toFixed(2)),
      importe_no_bonificado: parseFloat(importe_no_bonificado.toFixed(2)),
      importe_subtotal: parseFloat(importe_subtotal.toFixed(2))
    };
    this.form.get('total_venta')?.setValue(total_venta, {
      emitEvent: false
    });
  }
  /**
   * Metodo para actualizar el total de la venta basado en el porcentaje de descuento efectivo
   * @param porcentaje_descuento_efectivo
   */
  updateDescuento(porcentaje_descuento_efectivo) {
    this.updateTotal();
    this.totales.importe_bonificado = this.calcularDescuento(this.totales.importe_bonificado, porcentaje_descuento_efectivo);
    this.totales.importe_no_bonificado = this.calcularDescuento(this.totales.importe_no_bonificado, porcentaje_descuento_efectivo);
    this.totales.importe_subtotal = this.calcularDescuento(this.totales.importe_subtotal, porcentaje_descuento_efectivo);
    this.totales.importe_iva = this.calcularDescuento(this.totales.importe_iva, porcentaje_descuento_efectivo);
    // Obtiene el total de la venta
    const total_venta = this.form.get('total_venta').value;
    // Calcula el descuento basado en el porcentaje
    const nuevoTotal = this.calcularDescuento(total_venta, porcentaje_descuento_efectivo);
    // Actualiza el campo total
    this.form.get('total_venta')?.setValue(nuevoTotal >= 0 ? nuevoTotal : this.updateTotal()); // Evita valores negativos
  }
  /**
   *
   * @param total Valor general
   * @param porcentaje_descuento Porcentaje por el cual queremos obtener el valor
   * @returns nuevo total con descuento
   */
  calcularDescuento(total, porcentaje_descuento) {
    const descuento = total * porcentaje_descuento / 100;
    this.importe_desuento = descuento;
    return parseFloat((total - descuento).toFixed(2));
  }
  /**
  * Filtro para buscar en la grilla de articulos
  * @param filterValue
  */
  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /**
   * Metodo para en la edicion setear el porcentaje original si el input esta vacio
   * @param $event
   */
  onBlurInput($event) {
    const input = $event.target;
    const valor = input?.value;
    // Verifica si el valor es null o una cadena vacía
    if (!valor || valor === '') {
      // Asigna un valor por defecto
      this.form.get('porcentaje_descuento_efectivo').setValue(Number(this.venta?.porcentaje_descuento));
    }
  }
  /**
  *
  * @param $event Archivo
  * @param tipo_imagen 0: imagen principal, 1: imagen secundaria
  */
  setImagen($event, tipo_imagen) {
    const imagen_data = $event.target.files[0];
    let size = Math.round(imagen_data.size / 1024); // Convierto el tamano de la imagen a kilobytes
    let nombre_archivo = imagen_data.name; // Encapsulo el nombre del archivo
    let extension_archivo = nombre_archivo.split('.').pop(); // Obtengo la extension del archivo
    this.getBase64(imagen_data).then(imagen_en_base_64 => {
      // Valido el formato del archivo
      if (!this.validExtension.includes('.' + extension_archivo)) {
        return this.alert.info("Formato de archivo no soportado");
      }
      // Encapsulo los valores que me interesan de la imagen
      let data = {
        base64: imagen_en_base_64.toString().split("base64,")[1],
        path: nombre_archivo,
        size: size,
        extension: extension_archivo
      };
      // Si es de tipo_imagen "principal"...
      if (tipo_imagen === 0) {
        // Guardo la informacion en una variable global
        this.adjuntos = [data, ...this.adjuntos];
      }
    });
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
  /**
   * Metodo parametrizado para eliminar los archivos multimedia segun el momento de persistencia
   * @param tipo Tipo de imagen que se quiere eliminar
   * @param file Archivo a eliminar
   */
  removeFile(tipo, file) {
    switch (tipo) {
      // Eliminar imagenes secundarias dadas de alta en la operacion actual
      case 'adjuntos':
        {
          this.adjuntos = this.adjuntos.filter(adjunto => adjunto.path.toLowerCase() != file.path.toLowerCase());
        }
        break;
      default:
        {
          console.error('Ocurrió un error al quitar el adjunto.');
        }
    }
  }
}
AltaEdicionVentaComponent.ɵfac = function AltaEdicionVentaComponent_Factory(t) {
  return new (t || AltaEdicionVentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_service_venta_generica_service__WEBPACK_IMPORTED_MODULE_7__.VentaGenericasService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_8__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_9__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_29__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_29__.ActivatedRoute));
};
AltaEdicionVentaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: AltaEdicionVentaComponent,
  selectors: [["app-alta-edicion-venta"]],
  viewQuery: function AltaEdicionVentaComponent_Query(rf, ctx) {
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
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MAT_DATE_FORMATS,
    useValue: _shared_constants_date_format__WEBPACK_IMPORTED_MODULE_2__.MY_DATE_FORMATS
  }])],
  decls: 10,
  vars: 11,
  consts: [[1, "w-full", "flex", "flex-col", "relative", "mt-4", "overflow-y-auto", "h-full"], [1, "flex", "justify-start", "sm:mb-0", "mx-4"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "w-full", "!border", "border-solid", "xl:w-28", "md:w-20", 3, "click"], [1, "xl:icon-size-5", "icon-size-3", 3, "svgIcon"], [1, "ml-2", "xl:text-xl", "text-sm", "font-normal"], [4, "ngIf"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], ["class", "form-menu p-4", 3, "formGroup", 4, "ngIf"], ["class", "w-full md:flex justify-end md:pb-6 md:px-6 mt-auto", 4, "ngIf"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"], [1, "form-menu", "p-4", 3, "formGroup"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "gap-2", "flex-col", "sm:flex-row"], ["appearance", "fill", 1, "w-full", "sm:w-2/3"], ["matInput", "", "formControlName", "fecha", "readonly", "true", 3, "matDatepicker", "min", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "w-full", "flex"], ["apparance", "fill", 1, "w-3/4"], ["type", "text", "matInput", "", "formControlName", "cliente", 3, "matAutocomplete", "keydown.enter"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "class", "mr-2", 4, "ngIf"], ["autoActiveFirstOption", "", 3, "displayWith"], ["auto_cliente", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], [1, "flex", "w-1/4", "justify-center", "items-center"], ["matTooltip", "A\u00F1adir", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "mt-2", "ml-2", "sm:ml-4", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 16 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 10H10V16H6V10H0V6H6V0H10V6H16V10Z", "fill", "white"], ["apparance", "fill", 1, "w-full", "sm:w-2/3"], ["type", "text", "matInput", "", "formControlName", "vendedor", 3, "matAutocomplete", "keydown.enter"], ["auto_vendedor", "matAutocomplete"], [3, "formGroup", 4, "ngIf"], [1, "mb-3", "w-full"], [1, "flex", "items-center", "gap-2"], ["mat-icon-button", "", "type", "button", "matTooltip", "A\u00F1adir Imagen", 3, "click"], [1, "text-white", "transform", "-rotate-45"], ["id", "fileToUploadImagen", "type", "file", 1, "hidden", 3, "accept", "change"], ["fileInput", ""], ["class", "text-muted text-lg cursor-pointer", 3, "click", 4, "ngIf"], ["class", "mt-4 grid gap-2 p-2 bg-slate-200 rounded-lg max-w-full max-h-56 xl:max-h-56 sm:max-h-18 overflow-y-auto", "style", "grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));", 4, "ngIf"], [3, "formGroup"], [1, "flex", "w-full", "gap-1"], ["apparance", "fill", 1, "w-full", "sm:w-full"], ["type", "text", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete", "ngModelChange"], ["art_carga", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "unidadmedida", 3, "ngModelChange"], ["type", "text", "matInput", "", "formControlName", "detalle", 3, "keydown.enter"], ["apparance", "fill", 1, "w-full", "sm:w-full", 3, "keydown.enter"], ["matInput", "", "type", "number", "formControlName", "cantidad"], [1, "flex", "w-full", "sm:w-1/2", "justify-center", "items-center"], ["appearance", "fill", 1, "w-full", "sm:w-full"], [1, "flex", "items-center"], ["type", "text", "matInput", "", "formControlName", "importe_unitario", "placeholder", "$", 3, "keydown.enter"], [1, "text-xs", "text-gray-500", "italic"], [1, "flex"], ["matTooltip", "Calcular Precio Unitario", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "mt-2", "ml-2", "sm:ml-4", "transition-transform", "transform", "active:scale-95", 3, "click"], ["width", "25", "height", "24", "viewBox", "0 0 25 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M22.0104 0H2.96439C1.46792 0 0.24353 1.2 0.24353 2.66667V21.3333C0.24353 22.8 1.46792 24 2.96439 24H22.0104C23.5069 24 24.7312 22.8 24.7312 21.3333V2.66667C24.7312 1.2 23.5069 0 22.0104 0ZM13.8886 5.41333L15.3307 4L17.2489 5.88L19.1671 4L20.6091 5.41333L18.6909 7.29333L20.6091 9.17333L19.1671 10.5867L17.2489 8.72L15.3307 10.6L13.8886 9.18667L15.8068 7.30667L13.8886 5.41333ZM4.66492 6.29333H11.4671V8.29333H4.66492V6.29333ZM11.8072 17.3333H9.08632V20H7.04567V17.3333H4.32482V15.3333H7.04567V12.6667H9.08632V15.3333H11.8072V17.3333ZM20.65 19H13.8478V17H20.65V19ZM20.65 15.6667H13.8478V13.6667H20.65V15.6667Z", "fill", "white"], ["type", "text", "matInput", "", "formControlName", "porcentaje_bonificado", "placeholder", "%", 3, "keydown.enter"], ["matTooltip", "Agregar", 1, "flex", "items-center", "justify-center", "w-10", "h-10", "rounded-full", "mt-2", "ml-2", "sm:ml-4", "transition-transform", "transform", "active:scale-95", 3, "click"], [1, "search-container", "mt-2", "mb-2", "flex"], [1, "relative", "w-full", "md:w-1/3"], ["matInput", "", "placeholder", "Buscar art\u00EDculo", 1, "w-full", "bg-slate-50", "border", "border-gray-200", "rounded-lg", "shadow-md", "py-2", "px-4", "text-sm", "placeholder-gray-500", "text-gray-700", "transition", "duration-300", 3, "keyup"], [1, "absolute", "inset-y-0", "right-4", "flex", "items-center", "text-gray-400"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 20 20", "fill", "currentColor", 1, "h-5", "w-5"], ["fill-rule", "evenodd", "d", "M12.9 14.32a8 8 0 111.42-1.42l4.39 4.4a1 1 0 11-1.42 1.41l-4.4-4.39zM8 14a6 6 0 100-12 6 6 0 000 12z", "clip-rule", "evenodd"], [1, "overflow-y-auto", "max-h-[300px]", "h-[300px]", "shadow-md", "rounded-lg", "bg-white"], ["mat-table", "", "class", " w-full mt-1 min-h-full", 3, "dataSource", 4, "ngIf"], ["class", "flex justify-center items-center h-full mt-0 bg-white ", 4, "ngIf"], [1, "flex", "w-full", "gap-1", "justify-end", "mt-2"], ["apparance", "fill", 1, "w-1/3", "md:w-1/4", 3, "keydown.enter"], ["matInput", "", "type", "number", "formControlName", "total_venta", "readonly", "true"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 1, "mr-2"], [3, "value", "click"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], ["type", "text", "matInput", "", "formControlName", "descripcion_obra", 3, "keydown.enter"], ["type", "text", "matInput", "", "formControlName", "direccion_obra", 3, "keydown.enter"], ["apparance", "fill", 1, "w-full", "sm:w-3/4"], ["type", "text", "matInput", "", "formControlName", "localidad", 3, "matAutocomplete", "keydown.enter"], ["auto_localidad", "matAutocomplete"], ["apparance", "fill", 1, "w-full", "sm:w-1/3"], ["type", "text", "matInput", "", "formControlName", "tratamiento", 3, "matAutocomplete", "keydown.enter"], ["auto_tratamiento", "matAutocomplete"], [1, "flex", "justify-between", "items-center", "gap-2", "w-1/3"], [1, "flex", "items-center", "space-x-2"], ["formControlName", "acarreo"], ["formControlName", "colocacion"], ["formControlName", "retiro_fabrica"], ["appearance", "fill", 1, "w-full", "sm:w-1/3"], ["matInput", "", "formControlName", "fecha_entrega", "readonly", "true", 3, "matDatepicker", "min"], ["picker_entrega", ""], [1, "text-muted", "text-lg", "cursor-pointer", 3, "click"], [1, "mt-4", "grid", "gap-2", "p-2", "bg-slate-200", "rounded-lg", "max-w-full", "max-h-56", "xl:max-h-56", "sm:max-h-18", "overflow-y-auto", 2, "grid-template-columns", "repeat(auto-fill, minmax(200px, 1fr))"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "gap-2", "px-4", "py-2", "rounded-lg", "text-white"], ["class", "truncate max-w-xs", 4, "ngIf"], ["target", "_blank", "class", "flex items-center truncate max-w-xs", 3, "href", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "truncate", "max-w-xs"], ["target", "_blank", 1, "flex", "items-center", "truncate", "max-w-xs", 3, "href"], [1, "ml-2", "text-white"], [3, "value"], ["class", "font-light", 4, "ngIf"], [1, "font-light"], ["mat-table", "", 1, "w-full", "mt-1", "min-h-full", 3, "dataSource"], ["matColumnDef", "articulo"], ["mat-header-cell", "", "class", "rounded-tl-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["mat-footer-cell", "", "class", "bg-slate-200", 4, "matFooterCellDef"], ["matColumnDef", "unidadmedida"], ["mat-header-cell", "", "class", "text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "text-center", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "importe_unitario", 1, "content-end"], ["mat-footer-cell", "", "class", "text-lg font-bold bg-slate-200", 4, "matFooterCellDef"], ["matColumnDef", "importe_bonificado"], ["matColumnDef", "importe_no_bonificado"], ["matColumnDef", "importe_iva"], ["matColumnDef", "importe_subtotal"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "rounded-tr-lg text-white w-auto", 3, "class", "background", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", "", 1, "rounded-tl-lg", "text-white", "w-auto"], ["mat-cell", "", 1, "w-auto"], ["mat-footer-cell", "", 1, "bg-slate-200"], ["mat-header-cell", "", 1, "text-white", "w-auto"], ["mat-cell", "", 1, "text-center"], ["mat-cell", ""], ["mat-footer-cell", "", 1, "text-lg", "font-bold", "bg-slate-200"], ["mat-header-cell", "", 1, "rounded-tr-lg", "text-white", "w-auto"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""], [1, "flex", "justify-center", "items-center", "h-full", "mt-0", "bg-white"], [1, "text-gray-600", "text-lg"], [1, "w-full", "md:flex", "justify-end", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"]],
  template: function AltaEdicionVentaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AltaEdicionVentaComponent_Template_button_click_2_listener() {
        return ctx.volverPaginaAnterior();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Volver");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AltaEdicionVentaComponent_spinner_component_6_Template, 1, 0, "spinner-component", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AltaEdicionVentaComponent_fuse_alert_7_Template, 2, 4, "fuse-alert", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AltaEdicionVentaComponent_form_8_Template, 109, 51, "form", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AltaEdicionVentaComponent_div_9_Template, 4, 4, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.mostrarSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showAlert);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.mostrarSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatFooterCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatFooterRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatFooterCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatFooterRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_32__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_30__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_34__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_35__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltip, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_37__.MatAutocompleteTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__.MatDatepickerToggle, _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe],
  styles: [".mat-column-cantidad[_ngcontent-%COMP%], .mat-column-importe_unitario[_ngcontent-%COMP%], .mat-column-importe_bonificado[_ngcontent-%COMP%], .mat-column-importe_no_bonificado[_ngcontent-%COMP%], .mat-column-importe_iva[_ngcontent-%COMP%], .mat-column-importe_subtotal[_ngcontent-%COMP%] {\n  text-align: end;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdGEtZWRpY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUksZUFBQTtFQUNBLDZDQUFBO0FBQ0oiLCJmaWxlIjoiYWx0YS1lZGljaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4tY2FudGlkYWQsXHJcbi5tYXQtY29sdW1uLWltcG9ydGVfdW5pdGFyaW8sXHJcbi5tYXQtY29sdW1uLWltcG9ydGVfYm9uaWZpY2FkbyxcclxuLm1hdC1jb2x1bW4taW1wb3J0ZV9ub19ib25pZmljYWRvLFxyXG4ubWF0LWNvbHVtbi1pbXBvcnRlX2l2YSxcclxuLm1hdC1jb2x1bW4taW1wb3J0ZV9zdWJ0b3RhbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAvKiBBcGxpY2Egc29sbyBhIGxhcyBjb2x1bW5hcyBlc3BlY2lmaWNhZGFzICovXHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZ2VuZXJpY2FzL2NvbXBvbmVudHMvYWx0YS1lZGljaW9uL2FsdGEtZWRpY2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0VBTUksZUFBQTtFQUNBLDZDQUFBO0FBQ0o7QUFDQSx3b0JBQXdvQiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLWNhbnRpZGFkLFxyXG4ubWF0LWNvbHVtbi1pbXBvcnRlX3VuaXRhcmlvLFxyXG4ubWF0LWNvbHVtbi1pbXBvcnRlX2JvbmlmaWNhZG8sXHJcbi5tYXQtY29sdW1uLWltcG9ydGVfbm9fYm9uaWZpY2FkbyxcclxuLm1hdC1jb2x1bW4taW1wb3J0ZV9pdmEsXHJcbi5tYXQtY29sdW1uLWltcG9ydGVfc3VidG90YWwge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgLyogQXBsaWNhIHNvbG8gYSBsYXMgY29sdW1uYXMgZXNwZWNpZmljYWRhcyAqL1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 3201:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ventas/genericas/components/bonificado-detalle/bonificado-detalle.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BonificadoDetalleComponent": () => (/* binding */ BonificadoDetalleComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 69941);














class BonificadoDetalleComponent {
  constructor(_empresaService, router, _headerTextService, _searchService, _menuService, dialogo, route) {
    this._empresaService = _empresaService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this._searchService = _searchService;
    this._menuService = _menuService;
    this.dialogo = dialogo;
    this.route = route;
    this.venta_bonificadas = [];
    this.headers = ['Venta', 'Bonificado', 'Fecha', 'Importe Neto', 'Importe Iva', 'Importe Descuento', 'Importe Total'];
    this.columns = ['idventa', 'bonificado', 'fecha', 'importe_neto', 'importe_iva', 'importe_descuento', 'importe_total'];
    this.column_params = ['idventa', 'bonificado', 'fecha', 'importe_neto', 'importe_iva', 'importe_descuento', 'importe_total'];
    this.filtersLike = ['fecha'];
    this.funcionesObjeto = null;
    this.extraParams = '';
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_vta_venta_bonificado_detalles + '?filter[idventa]=' + +this.route.snapshot.paramMap.get('idventa');
    this.default_color = 'border-primary text-primary';
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
    this.filtroBusqueda = '';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    let titulo = {
      custom_title: true,
      titulo: `Venta N°${this.route.snapshot.paramMap.get('idventa')} detalle bonificado `
    };
    this._headerTextService.setCustomTitle(titulo);
  }
  ngOnInit() {
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.debounceTime)(250), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)()).subscribe(value => {
      this.filtroBusqueda = value;
      this.tabla.filters(this.filtroBusqueda);
    });
  }
  volverPaginaAnterior() {
    this.router.navigate(['/ventas']);
  }
  // Este método es llamado cuando el componente es destruido
  ngOnDestroy() {
    this._searchService.unsubscribe();
  }
}
BonificadoDetalleComponent.ɵfac = function BonificadoDetalleComponent_Factory(t) {
  return new (t || BonificadoDetalleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_3__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_4__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_5__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute));
};
BonificadoDetalleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: BonificadoDetalleComponent,
  selectors: [["app-bonificado-detalle"]],
  viewQuery: function BonificadoDetalleComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  inputs: {
    extraParams: "extraParams"
  },
  decls: 8,
  vars: 16,
  consts: [[1, "w-full", "flex", "flex-col", "relative", "mt-4"], [1, "flex", "justify-start", "sm:mb-0", "mx-4"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "w-full", "!border", "border-solid", "md:w-28", 3, "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2", "text-lg", "font-normal"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams"]],
  template: function BonificadoDetalleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function BonificadoDetalleComponent_Template_button_click_2_listener() {
        return ctx.volverPaginaAnterior();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Volver");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "app-tabla-dinamica", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", "heroicons_solid:chevron-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib25pZmljYWRvLWRldGFsbGUuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZ2VuZXJpY2FzL2NvbXBvbmVudHMvYm9uaWZpY2Fkby1kZXRhbGxlL2JvbmlmaWNhZG8tZGV0YWxsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 36005:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/ventas/genericas/components/calcular-unitario/calcular-unitario.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcularUnitarioComponent": () => (/* binding */ CalcularUnitarioComponent)
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
/* harmony import */ var _service_venta_generica_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/venta-generica.service */ 73899);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../@fuse/components/alert/alert.component */ 98214);
















function CalcularUnitarioComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fuse-alert", 13);
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
class CalcularUnitarioComponent {
  constructor(data, _ventaGenericasService, _empresaService, alert, dialogRef) {
    this.data = data;
    this._ventaGenericasService = _ventaGenericasService;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.dialogRef = dialogRef;
    this.columns = ['nombre', 'activo', 'acciones'];
    this.showAlert = false;
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.creadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.editadoExitosamente = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.deposito_default = 0;
    this.title = `Calcular Precio Unitario ${this.data.descripcion}`;
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
      this.deposito_default = empresa.deposito_default;
    });
  }
  ngOnInit() {
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
      articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl({
        value: `${this.data.codigo_interno} | ${this.data.descripcion}`,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required),
      bruto: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required)
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.error('Revise Los Datos Ingresados');
    } else {
      const payload = {
        idarticulo: this.data.idarticulo,
        bruto: this.form.get('bruto').value
      };
      this._ventaGenericasService.calcularPrecioUnitario(payload).subscribe({
        next: data => {
          if (data) {
            this.creadoExitosamente.emit();
            this.onCloseMenu(data);
          }
        }
      });
    }
  }
  onCloseMenu(data) {
    this.dialogRef.close(data);
  }
}
CalcularUnitarioComponent.ɵfac = function CalcularUnitarioComponent_Factory(t) {
  return new (t || CalcularUnitarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_venta_generica_service__WEBPACK_IMPORTED_MODULE_0__.VentaGenericasService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_1__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef));
};
CalcularUnitarioComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: CalcularUnitarioComponent,
  selectors: [["app-calcular-unitario"]],
  outputs: {
    creadoExitosamente: "creadoExitosamente",
    editadoExitosamente: "editadoExitosamente"
  },
  decls: 22,
  vars: 12,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "md:min-w-140", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "bg-white", "shadow-sm", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "articulo", 3, "value"], ["matInput", "", "formControlName", "bruto", 3, "keydown.enter"], [1, "w-full", "md:flex", "md:justify-center", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"]],
  template: function CalcularUnitarioComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalcularUnitarioComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CalcularUnitarioComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 6)(10, "mat-form-field", 7)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Art\u00EDculo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 7)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Bruto");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.enter", function CalcularUnitarioComponent_Template_input_keydown_enter_17_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 10)(19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CalcularUnitarioComponent_Template_button_click_19_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Calcular");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.data.descripcion);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxjdWxhci11bml0YXJpby5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZ2VuZXJpY2FzL2NvbXBvbmVudHMvY2FsY3VsYXItdW5pdGFyaW8vY2FsY3VsYXItdW5pdGFyaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGdMQUFnTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 34071:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ventas/genericas/components/filter-menu/filter-menu.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterMenuComponent": () => (/* binding */ FilterMenuComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ 28288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 54363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _service_venta_generica_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/venta-generica.service */ 73899);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);

















function FilterMenuComponent_mat_datepicker_toggle_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-datepicker-toggle", 22);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r1);
  }
}
function FilterMenuComponent_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.limpiarCasillero("fecha"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FilterMenuComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilterMenuComponent_mat_form_field_23_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_mat_form_field_23_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.limpiarCasillero("cliente"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FilterMenuComponent_mat_form_field_23_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", cliente_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", cliente_r16.descripcion, " ");
  }
}
function FilterMenuComponent_mat_form_field_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FilterMenuComponent_mat_form_field_23_button_2_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 26)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-autocomplete", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FilterMenuComponent_mat_form_field_23_mat_option_8_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.formFilters.get("cliente").value != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx_r4.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, ctx_r4.filteredClientes));
  }
}
function FilterMenuComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilterMenuComponent_mat_form_field_25_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_mat_form_field_25_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.limpiarCasillero("vendedor"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FilterMenuComponent_mat_form_field_25_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const vendedor_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", vendedor_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", vendedor_r22.nombre, " ", vendedor_r22.apellido, " ");
  }
}
function FilterMenuComponent_mat_form_field_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FilterMenuComponent_mat_form_field_25_button_2_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 26)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-autocomplete", 27, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FilterMenuComponent_mat_form_field_25_mat_option_8_Template, 2, 3, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.formFilters.get("vendedor").value != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx_r6.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, ctx_r6.filteredVendedores));
  }
}
function FilterMenuComponent_span_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Tratamiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilterMenuComponent_mat_form_field_27_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_mat_form_field_27_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.limpiarCasillero("tratamiento"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function FilterMenuComponent_mat_form_field_27_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tratamiento_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", tratamiento_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", tratamiento_r28.descripcion, " ");
  }
}
function FilterMenuComponent_mat_form_field_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FilterMenuComponent_mat_form_field_27_button_2_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 26)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-autocomplete", 27, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FilterMenuComponent_mat_form_field_27_mat_option_8_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matAutocomplete", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.formFilters.get("tratamiento").value != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("displayWith", ctx_r8.getTextGenerico);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, ctx_r8.filteredTratamientos));
  }
}
class FilterMenuComponent {
  constructor(data, _empresaService, menuService, datePipe, _ventaGenericaService) {
    this.data = data;
    this._empresaService = _empresaService;
    this.menuService = menuService;
    this.datePipe = datePipe;
    this._ventaGenericaService = _ventaGenericaService;
    this.proveedores = [];
    this.default_color = 'bg-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
  }
  ngOnInit() {
    this.formFilters = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
      filtroFechaInicio: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      filtroFechaFin: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      tratamiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
      vendedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('')
    });
    // Load empresa data
    this._empresaService.getEmpresa();
    this.formFilters.patchValue(this.data.filter);
    this.loadServices();
  }
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  /**
  * Este metodo ejecuta todas las peticiones asincronas al mismo tiempo
  */
  loadServices() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield Promise.all([_this.getClientes(), _this.getVendedores(), _this.getTratamiento()]).then(() => {});
    })();
  }
  resetFilters() {
    this.formFilters.reset({
      filtroFechaInicio: '',
      filtroFechaFin: '',
      tratamiento: -1,
      cliente: -1,
      vendedor: -1
    });
  }
  onCloseMenu(data = null) {
    if (data) {
      data.filtroFechaInicio = this.datePipe.transform(this.formFilters.get('filtroFechaInicio').value, 'yyyy-MM-dd');
      data.filtroFechaFin = this.datePipe.transform(this.formFilters.get('filtroFechaFin').value, 'yyyy-MM-dd');
    }
    this.menuService.close(data);
  }
  getClientes(option) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Clientes = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this2._ventaGenericaService.getClientes(option));
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.clientes = Clientes.list;
          _this2.filteredClientes = _this2.formFilters.get('cliente').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => _this2._filterSelect(value, 'clientes')));
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  getVendedores(option) {
    var _this3 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Vendedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this3._ventaGenericaService.getVendedores(option));
      new Promise( /*#__PURE__*/function () {
        var _ref2 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this3.vendedores = Vendedores['list'];
          _this3.filteredVendedores = _this3.formFilters.get('vendedor').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => _this3._filterVendodres(value)));
          resolve(true);
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    })();
  }
  getTratamiento() {
    var _this4 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const Tratamientos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.firstValueFrom)(_this4._ventaGenericaService.getTratamientos());
      new Promise( /*#__PURE__*/function () {
        var _ref3 = (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this4.tratamientos = Tratamientos['list'];
          _this4.filteredTratamientos = _this4.formFilters.get('tratamiento').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.map)(value => _this4._filterSelect(value, 'tratamientos')));
          resolve(true);
        });
        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }
  getTextGenerico(option) {
    if (option.RazonSocial || option.razonSocial) return option ? option.RazonSocial || option.razonSocial : '';
    if (option.descripcion) return option ? option.descripcion : '';
    if (option.nick) return option ? `${option.nombre} ${option.apellido}` : '';
  }
  /**
   *
   * @param item Valor a buscar
   * @param model Modelo donde se retorna la lista de valores encontrados
   * @returns Valores encontrados en la lista
   */
  _filterSelect(item, model) {
    const filterValue = item.toString().toLowerCase();
    return this[`${model}`].filter(item => item.descripcion.toLowerCase().includes(filterValue));
  }
  _filterVendodres(vendedor) {
    const filterValue = vendedor.toString().toLowerCase();
    return this.vendedores.filter(vendedor => vendedor.nombre.toLowerCase().includes(filterValue));
  }
  /**
  * Funcion para limpiar campos
  */
  limpiarCasillero(input) {
    if (input === 'fecha') {
      this.formFilters.get('filtroFechaInicio').setValue('');
      this.formFilters.get('filtroFechaFin').setValue('');
    }
    if (this.formFilters.get(input)) {
      this.formFilters.get(input).setValue(-1);
    }
  }
}
FilterMenuComponent.ɵfac = function FilterMenuComponent_Factory(t) {
  return new (t || FilterMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_2__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_venta_generica_service__WEBPACK_IMPORTED_MODULE_4__.VentaGenericasService));
};
FilterMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FilterMenuComponent,
  selectors: [["app-filter-menu-ventas"]],
  decls: 35,
  vars: 25,
  consts: [[1, "fixed", "filtroJeds", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 1, "md:hidden", 3, "click"], [1, "text-white"], ["mat-icon-button", "", 3, "click"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "font-semibold", "text-gray-600", "text-base"], [1, "fuse-mat-dense", "fuse-mat-no-subscript", "fuse-mat-rounded-lg", "min-w-64", "mt-2"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Desde", "formControlName", "filtroFechaInicio"], ["matEndDate", "", "placeholder", "Hasta", "formControlName", "filtroFechaFin"], ["matIconSuffix", "", 3, "for", 4, "ngIf"], ["picker", ""], ["matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["class", "font-semibold text-gray-600 text-base", 4, "ngIf"], ["class", "fuse-mat-dense fuse-mat-no-subscript fuse-mat-rounded-lg min-w-64 mt-2", 4, "ngIf"], [1, "w-full", "md:flex", "md:justify-between", "md:pb-4", "md:px-4"], ["mat-flat-button", "", 1, "w-full", "!border", "border-solid", "rounded-none", "md:w-26", "md:rounded-lg", "hidden", "md:block", 3, "click"], [1, "font-medium", "text-base"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-26", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-bold"], ["matIconSuffix", "", 3, "for"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["type", "text", "placeholder", "Seleccione Cliente", "matInput", "", "formControlName", "cliente", 3, "matAutocomplete"], ["matSuffix", "", "mat-icon-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", ""], ["autoActiveFirstOption", "", 3, "displayWith"], ["auto_cliente", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matSuffix", "", "mat-icon-button", "", 1, "mr-2", 3, "click"], [3, "value"], ["type", "text", "placeholder", "Seleccione Vendedor", "matInput", "", "formControlName", "vendedor", 3, "matAutocomplete"], ["auto_vendedor", "matAutocomplete"], ["type", "text", "placeholder", "Seleccione Tratamiento", "matInput", "", "formControlName", "tratamiento", 3, "matAutocomplete"], ["auto_tratamiento", "matAutocomplete"]],
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
        return ctx.onCloseMenu(null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 6)(12, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Rango de fechas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-date-range-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 10)(17, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, FilterMenuComponent_mat_datepicker_toggle_18_Template, 1, 1, "mat-datepicker-toggle", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "mat-date-range-picker", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, FilterMenuComponent_button_21_Template, 3, 0, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, FilterMenuComponent_span_22_Template, 2, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, FilterMenuComponent_mat_form_field_23_Template, 10, 6, "mat-form-field", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, FilterMenuComponent_span_24_Template, 2, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, FilterMenuComponent_mat_form_field_25_Template, 10, 6, "mat-form-field", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, FilterMenuComponent_span_26_Template, 2, 0, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, FilterMenuComponent_mat_form_field_27_Template, 10, 6, "mat-form-field", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 17)(29, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_29_listener() {
        return ctx.resetFilters();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilterMenuComponent_Template_button_click_32_listener() {
        return ctx.onCloseMenu(ctx.formFilters.getRawValue());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Filtrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@expandCollapse", "expanded");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("rangePicker", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.formFilters.get("filtroFechaInicio").value || !ctx.formFilters.get("filtroFechaFin").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("filtroFechaInicio").value || ctx.formFilters.get("filtroFechaFin").value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("cliente"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("cliente"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("vendedor"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("vendedor"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("tratamiento"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formFilters.get("tratamiento"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx.color_primario || "")("border", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__.MatDateRangePicker, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZ2VuZXJpY2FzL2NvbXBvbmVudHMvZmlsdGVyLW1lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__.fuseAnimations
  }
});


/***/ }),

/***/ 12217:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/ventas/genericas/components/venta-genericas.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaGenericasComponent": () => (/* binding */ VentaGenericasComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-menu/filter-menu.component */ 34071);
/* harmony import */ var _service_venta_generica_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/venta-generica.service */ 73899);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/layout/common/search/search.service */ 77374);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/service/app/pwa.service */ 16173);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 83677);





















function VentaGenericasComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 4, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VentaGenericasComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.saveVenta());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "svg", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "path", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "Nueva Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r0.color_primario ? "" : ctx_r0.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("border", ctx_r0.color_primario || "")("color", ctx_r0.color_primario || "");
  }
}
class VentaGenericasComponent {
  constructor(_ventaGenericasService, _empresaService, confirm, alert, dialogo, _searchService, router, _headerTextService, pwaService, _menuService) {
    this._ventaGenericasService = _ventaGenericasService;
    this._empresaService = _empresaService;
    this.confirm = confirm;
    this.alert = alert;
    this.dialogo = dialogo;
    this._searchService = _searchService;
    this.router = router;
    this._headerTextService = _headerTextService;
    this.pwaService = pwaService;
    this._menuService = _menuService;
    // Necesarios para la app
    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('');
    this.default_color = 'border-primary text-primary';
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    // Particulares del modulo
    this.headers = ['', 'Origen', 'Numero', 'Fecha', 'Cliente', 'Vendedor', 'Tratamiento', 'Total', 'Acciones'];
    this.column_params = ['seleccion', 'origen', 'numero_venta', 'fecha', 'cliente', 'vendedor', 'tratamiento', 'importe_total', 'acciones'];
    this.selectedItems = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.funcionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['cliente'];
    this.filter = {
      vendedor: -1,
      cliente: -1,
      tratamiento: -1,
      filtroFechaInicio: '',
      filtroFechaFin: ''
    };
    this.extraParams = '';
    this.parametrosActualizados = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.ventas.view_vta_venta_selects + '?sort=-fecha';
    this.puedeCrear = false;
    this._headerTextService.setTitulo(this.router);
    /**
     * Aca se declaran los botones que iran en la grilla sobre el apartado de acciones.
     */
    this.funcionesObjeto = [{
      nombre_boton: "editar",
      functionName: 'editar',
      iconoAccion: venta => venta.puede_modificar === true ? 'jedstion:editar' : '',
      iconoAccionado: venta => '',
      iconoDeshabilitado: venta => venta.puede_modificar === false ? 'jedstion:editar_disabled' : ''
    }, {
      nombre_boton: "eliminar",
      functionName: 'eliminar',
      iconoAccion: venta => venta.puede_eliminar === true ? 'jedstion:eliminar' : '',
      iconoAccionado: venta => '',
      iconoDeshabilitado: venta => venta.puede_eliminar === false ? 'jedstion:eliminar_disabled' : ''
    }, {
      nombre_boton: "Generar Orden de servicio",
      functionName: 'orden_servicio',
      iconoAccion: venta => 'jedstion:orden_de_produccion',
      iconoAccionado: venta => '',
      iconoDeshabilitado: venta => ''
    }, {
      nombre_boton: "Detalle Bonificado",
      functionName: 'ventas_bonificadas_detalle',
      iconoAccion: venta => venta.puede_modificar === true && venta.tipo_venta === 1 ? 'jedstion:informacion' : '',
      iconoAccionado: venta => '',
      iconoDeshabilitado: venta => venta.puede_modificar === false || venta.tipo_venta === 0 ? 'jedstion:informacion_disabled' : ''
    }];
    // Subscribe to empresa data
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
  }
  ngOnInit() {
    // Load empresa data
    this._empresaService.getEmpresa();
    this.SearchTextSub$ = this._searchService.getSearchText().pipe(
    //Se obtienen los valores que coinciden con lo ingresado en la barra de busqueda
    (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(750), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)()).subscribe(value => {
      this.filtroBusqueda = value;
      this.tabla.filters(this.filtroBusqueda);
    });
    this.FilterEventSub$ = this._searchService.getFilterEvent().subscribe(event => {
      this.onFilterMenu(this._searchService.getFilterOrigin());
    });
  }
  saveVenta() {
    this.router.navigate(['/ventas/alta']);
  }
  updateVenta(event) {
    const id = event.params.data.idventa;
    this.router.navigate(['/ventas/edicion/', id]);
  }
  listadoVentasBonificadas(event) {
    const id = event.params.data.idventa;
    this.router.navigate(['/ventas/venta-detalle/', id]);
  }
  /**
  * Esta funcion elimina un item
  * @param event
  */
  deleteVenta(event) {
    this.confirm.open({
      title: "Eliminar Venta: " + event.params.data.idventa,
      message: `¿Desea eliminar la Venta: ${event.params.data.idventa} -  ${event.params.data.cliente}?`,
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
        this._ventaGenericasService.deleteVenta(event.params.data.idventa).subscribe({
          next: res => {
            // Manejar la respuesta exitosa
            this.alert.success("Venta eliminada con éxito.");
            if (res) {
              this.tabla.renderTabla();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.warning("Esta Venta no puede eliminarse. Tiene elementos asociados.");
          }
        });
      }
    });
  }
  habilitarBoton(valor) {
    this.puedeCrear = valor;
  }
  onFilterMenu(origin) {
    this._menuService.open(_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_2__.FilterMenuComponent, origin._elementRef, {
      filter: this.filter,
      data: this.tabla.getElementosExistentes()
    }).afterClosed().subscribe({
      next: filter => {
        if (filter) {
          this.filter = filter;
          this.extraParams = this.filter.vendedor != -1 ? "filter[idusuario]=" + this.filter.vendedor['codigo'] + '&' : '';
          this.extraParams += this.filter.cliente != -1 ? "filter[idcliente]=" + this.filter.cliente['id'] + '&' : '';
          this.extraParams += this.filter.tratamiento != -1 ? "filter[idtratamiento]=" + this.filter.tratamiento['idtratamiento'] + '&' : '';
          this.extraParams += this.filter.filtroFechaInicio != null ? "filter[fecha][gte]=" + this.filter.filtroFechaInicio + '&' : '';
          this.extraParams += this.filter.filtroFechaFin != null ? "filter[fecha][lte]=" + this.filter.filtroFechaFin + '&' : '';
          this.tabla.filters(this.filtroBusqueda);
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
        if (event.params.data.puede_modificar === false) {
          if (event.params.data.tipo_venta === 1) {
            return this.alert.warning('No se puede editar la venta.');
          } else {
            return this.alert.warning('No se puede editar una venta del sistema anterior.');
          }
        } else {
          this.updateVenta(event);
        }
        break;
      case 'eliminar':
        if (event.params.data.puede_eliminar === false) {
          if (event.params.data.tipo_venta === 1) {
            return this.alert.warning('No se puede eliminar la venta.');
          } else {
            return this.alert.warning('No se puede eliminar una venta del sistema anterior.');
          }
        } else {
          this.deleteVenta(event);
        }
        break;
      case 'orden_servicio':
        this.reporteOrdenServicio(event);
        break;
      case 'ventas_bonificadas_detalle':
        if (event.params.data.tipo_venta === 0) {
          return this.alert.warning('No se puede ver las ventas bonificadas del sistema anterior.');
        } else if (event.params.data.puede_eliminar === false) {
          return this.alert.warning('No tiene permiso para ver el detalle bonificado de una venta.');
        } else {
          this.listadoVentasBonificadas(event);
        }
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
    let payload = null;
    // Si es atraves de presionar el boton de un item
    if (event) {
      // Selecciono el item
      this.selectedItems.push(event.params.data);
    }
    // Si no es atraves de presionar el boton del item Y no hay elementos en el array o la longitud del array es igual a cero
    if (!event && (!this.selectedItems || this.selectedItems.length === 0)) {
      return this.alert.error('Debe seleccionar al menos un Item.');
    } else {
      // Armo el payload para llamar al servicio
      payload = {
        // Creo un objeto con el valor del nombre de la clave y con el valor item con esa clave
        ordenes_de_servicio: this.selectedItems.map(element => {
          let clave = element.tipo_venta === 1 ? 'idventa' : 'idventagenerica';
          return {
            [clave]: element[`${clave}`]
          };
        })
      };
      this._ventaGenericasService.reporteOrdenServicio(payload).subscribe({
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
VentaGenericasComponent.ɵfac = function VentaGenericasComponent_Factory(t) {
  return new (t || VentaGenericasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_service_venta_generica_service__WEBPACK_IMPORTED_MODULE_3__.VentaGenericasService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_6__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](app_layout_common_search_search_service__WEBPACK_IMPORTED_MODULE_7__.SearchService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_8__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_pwa_service__WEBPACK_IMPORTED_MODULE_9__.PwaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_10__.JedsMenuService));
};
VentaGenericasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: VentaGenericasComponent,
  selectors: [["app-venta-generica"]],
  viewQuery: function VentaGenericasComponent_Query(rf, ctx) {
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
  decls: 17,
  vars: 16,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "mb-12", "mt-6"], [1, "absolute", "right-10", "flex", "space-x-4"], ["mat-flat-button", "", "class", "w-full px-6 py-6 !border border-solid rounded-lg md:w-55 md:rounded-lg", 3, "class", "border", "color", "click", 4, "ngIf"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], [1, "flex", "items-center"], ["width", "22", "height", "22", "viewBox", "0 0 26 26", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_535_423)"], ["d", "M20.5568 8.68182H19.4773V3.28409H6.52274V8.68182H5.4432C3.65115 8.68182 2.20456 10.1284 2.20456 11.9205V18.3977H6.52274V22.7159H19.4773V18.3977H23.7955V11.9205C23.7955 10.1284 22.3489 8.68182 20.5568 8.68182ZM8.68183 5.44318H17.3182V8.68182H8.68183V5.44318ZM17.3182 18.3977V20.5568H8.68183V16.2386H17.3182V18.3977ZM19.4773 16.2386V14.0795H6.52274V16.2386H4.36365V11.9205C4.36365 11.3267 4.84945 10.8409 5.4432 10.8409H20.5568C21.1506 10.8409 21.6364 11.3267 21.6364 11.9205V16.2386H19.4773Z"], ["d", "M19.4773 13.5398C20.0735 13.5398 20.5568 13.0564 20.5568 12.4602C20.5568 11.864 20.0735 11.3807 19.4773 11.3807C18.8811 11.3807 18.3977 11.864 18.3977 12.4602C18.3977 13.0564 18.8811 13.5398 19.4773 13.5398Z"], ["id", "clip0_535_423"], ["width", "25.9091", "height", "25.9091", "fill", "currentColor", "transform", "translate(0.0454712 0.0454559)"], [1, "ml-2", "text-lg", "mt-0.5", "hidden", "md:inline"], [1, "pr-2", "pl-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "selectionChange", "functionEmitter", "puedeCrearEmitter"], ["save", ""], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"]],
  template: function VentaGenericasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, VentaGenericasComponent_button_3_Template, 7, 6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function VentaGenericasComponent_Template_button_click_4_listener() {
        return ctx.reporteOrdenServicio();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "svg", 6)(7, "g", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "path", 8)(9, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "defs")(11, "clipPath", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "rect", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "Imprimir");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 13)(16, "app-tabla-dinamica", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function VentaGenericasComponent_Template_app_tabla_dinamica_selectionChange_16_listener($event) {
        return ctx.onSelectionChange($event);
      })("functionEmitter", function VentaGenericasComponent_Template_app_tabla_dinamica_functionEmitter_16_listener($event) {
        return ctx.generarAcciones($event);
      })("puedeCrearEmitter", function VentaGenericasComponent_Template_app_tabla_dinamica_puedeCrearEmitter_16_listener($event) {
        return ctx.habilitarBoton($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.puedeCrear);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleProp"]("border", ctx.color_primario || "")("color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("cache", false)("columnsNames", ctx.headers)("renderType", "client")("columnsParams", ctx.column_params)("endpoint", ctx.env)("functions", ctx.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx.filtersLike)("extraParams", ctx.extraParams);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_0__.TablaDinamicaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZW50YS1nZW5lcmljYXMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZ2VuZXJpY2FzL2NvbXBvbmVudHMvdmVudGEtZ2VuZXJpY2FzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 73899:
/*!****************************************************************************!*\
  !*** ./src/app/modules/ventas/genericas/service/venta-generica.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaGenericasService": () => (/* binding */ VentaGenericasService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);





class VentaGenericasService {
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
  saveVenta(payload) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_ventas}`, payload);
  }
  updateVenta(idventa, payload) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_ventas}` + '/' + idventa, payload);
  }
  deleteVenta(idventa) {
    return this.http.delete(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_ventas}` + '/' + idventa);
  }
  getDatosVenta(idventa) {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_venta_get_datos}` + '?idventa=' + idventa).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getClientes(option) {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.select_clientes}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getVendedores(option) {
    let f = '?sort=RazonSocial&filter[vendedor]=1';
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.login.view_usuarios}${f}`).subscribe(resp => {
      this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getArticulos(idarticulo, filterLike) {
    let f = `?filter[activo]=1&pagination=1&per-page=10&page=1&filter[tipo]=2`;
    if (idarticulo) {
      f += `&filter[idarticulo]=${idarticulo}`;
    } else if (filterLike) {
      f += `&filter[or][0][codigo_interno][like]=${filterLike}&filter[or][1][descripcion][like]=${filterLike}`;
    }
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulos}${f}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => resp)).subscribe(resp => {
      this._authService.accessToken = resp.token, subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getUnidadesDeMedidaArticulos(idarticulo) {
    let f = `?filter[idarticulo]=${idarticulo}`;
    f += `&expand=um`;
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.articulo_unidad_medidas}${f}`).subscribe(resp => {
      // this._authService.accessToken = resp.token;
      subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getLocalidades() {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.localidades}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => resp)).subscribe(resp => {
      this._authService.accessToken = resp.token, subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  getTratamientos() {
    let subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.tratamiento_token}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.map)(resp => resp)).subscribe(resp => {
      this._authService.accessToken = resp.token, subject.next({
        list: resp.result
      });
    });
    return subject.asObservable();
  }
  calcularPrecioUnitario(payload) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_venta_calcular_unitario}`, payload);
  }
  calcularItem(payload) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_venta_calcular_item}`, payload);
  }
}
VentaGenericasService.ɵfac = function VentaGenericasService_Factory(t) {
  return new (t || VentaGenericasService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
VentaGenericasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: VentaGenericasService,
  factory: VentaGenericasService.ɵfac
});


/***/ }),

/***/ 18767:
/*!*******************************************************************!*\
  !*** ./src/app/modules/ventas/genericas/venta-generica.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VentaGenericasModule": () => (/* binding */ VentaGenericasModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _service_venta_generica_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/venta-generica.service */ 73899);
/* harmony import */ var _components_venta_genericas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/venta-genericas.component */ 12217);
/* harmony import */ var _components_alta_edicion_alta_edicion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/alta-edicion/alta-edicion.component */ 43857);
/* harmony import */ var _components_calcular_unitario_calcular_unitario_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/calcular-unitario/calcular-unitario.component */ 36005);
/* harmony import */ var app_modules_administracion_clientes_service_clientes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/modules/administracion/clientes/service/clientes.service */ 12254);
/* harmony import */ var _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/shared-component.module */ 46288);
/* harmony import */ var _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/filter-menu/filter-menu.component */ 34071);
/* harmony import */ var _components_bonificado_detalle_bonificado_detalle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/bonificado-detalle/bonificado-detalle.component */ 3201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 86839);






























const routes = [{
  path: '',
  component: _components_venta_genericas_component__WEBPACK_IMPORTED_MODULE_5__.VentaGenericasComponent
}, {
  path: 'alta',
  component: _components_alta_edicion_alta_edicion_component__WEBPACK_IMPORTED_MODULE_6__.AltaEdicionVentaComponent
}, {
  path: 'edicion/:idventa',
  component: _components_alta_edicion_alta_edicion_component__WEBPACK_IMPORTED_MODULE_6__.AltaEdicionVentaComponent
}, {
  path: 'venta-detalle/:idventa',
  component: _components_bonificado_detalle_bonificado_detalle_component__WEBPACK_IMPORTED_MODULE_11__.BonificadoDetalleComponent
}];
class VentaGenericasModule {}
VentaGenericasModule.ɵfac = function VentaGenericasModule_Factory(t) {
  return new (t || VentaGenericasModule)();
};
VentaGenericasModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: VentaGenericasModule
});
VentaGenericasModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [_service_venta_generica_service__WEBPACK_IMPORTED_MODULE_4__.VentaGenericasService, _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, app_modules_administracion_clientes_service_clientes_service__WEBPACK_IMPORTED_MODULE_8__.ClientesService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_9__.SharedComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](VentaGenericasModule, {
    declarations: [_components_venta_genericas_component__WEBPACK_IMPORTED_MODULE_5__.VentaGenericasComponent, _components_alta_edicion_alta_edicion_component__WEBPACK_IMPORTED_MODULE_6__.AltaEdicionVentaComponent, _components_filter_menu_filter_menu_component__WEBPACK_IMPORTED_MODULE_10__.FilterMenuComponent, _components_calcular_unitario_calcular_unitario_component__WEBPACK_IMPORTED_MODULE_7__.CalcularUnitarioComponent, _components_bonificado_detalle_bonificado_detalle_component__WEBPACK_IMPORTED_MODULE_11__.BonificadoDetalleComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _shared_components_shared_component_module__WEBPACK_IMPORTED_MODULE_9__.SharedComponentModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_ventas_genericas_venta-generica_module_ts.js.map