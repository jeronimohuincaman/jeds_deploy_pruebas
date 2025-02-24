"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_ventas_cobranzas_components_calculadora-de-cobros_calculadora-cobros_module_ts"],{

/***/ 87238:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/ventas/cobranzas/components/calculadora-de-cobros/calculadora-cobros.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraCobrosComponent": () => (/* binding */ CalculadoraCobrosComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _services_cobranzas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cobranzas.service */ 86064);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 69941);



















function CalculadoraCobrosComponent_mat_option_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalculadoraCobrosComponent_mat_option_51_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.calcularValores());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const metodo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", metodo_r4.idcobrotipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", metodo_r4.descripcion, " ");
  }
}
function CalculadoraCobrosComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "No hay datos existentes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function CalculadoraCobrosComponent_table_72_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Forma de Cobro");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r7.color_primario ? "" : ctx_r7.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r7.color_primario || "");
  }
}
function CalculadoraCobrosComponent_table_72_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r21.descripcion_forma_cobro, " ");
  }
}
function CalculadoraCobrosComponent_table_72_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Neto a Descontar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r9.color_primario ? "" : ctx_r9.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r9.color_primario || "");
  }
}
function CalculadoraCobrosComponent_table_72_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "$" + item_r22.importe_neto_a_descontar, " ");
  }
}
function CalculadoraCobrosComponent_table_72_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Pago Real (Bruto)");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r11.color_primario ? "" : ctx_r11.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r11.color_primario || "");
  }
}
function CalculadoraCobrosComponent_table_72_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "$" + item_r23.importe_pago_real, " ");
  }
}
function CalculadoraCobrosComponent_table_72_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Intereses");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r13.color_primario ? "" : ctx_r13.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r13.color_primario || "");
  }
}
function CalculadoraCobrosComponent_table_72_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r24.importe_interes != 0 ? "$" + item_r24.importe_interes : "-", " ");
  }
}
function CalculadoraCobrosComponent_table_72_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Descuentos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r15.color_primario ? "" : ctx_r15.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r15.color_primario || "");
  }
}
function CalculadoraCobrosComponent_table_72_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25.importe_descuento != 0 ? "$" + item_r25.importe_descuento : "-", " ");
  }
}
function CalculadoraCobrosComponent_table_72_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Acciones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r17.color_primario ? "" : ctx_r17.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r17.color_primario || "");
  }
}
function CalculadoraCobrosComponent_table_72_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 53)(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalculadoraCobrosComponent_table_72_td_18_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);
      const item_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r27.removeItem(item_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r18.color_primario ? "" : ctx_r18.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r18.color_primario || "");
  }
}
function CalculadoraCobrosComponent_table_72_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 58);
  }
}
function CalculadoraCobrosComponent_table_72_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 59);
  }
}
function CalculadoraCobrosComponent_table_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CalculadoraCobrosComponent_table_72_th_2_Template, 2, 4, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CalculadoraCobrosComponent_table_72_td_3_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](4, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, CalculadoraCobrosComponent_table_72_th_5_Template, 2, 4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, CalculadoraCobrosComponent_table_72_td_6_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](7, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, CalculadoraCobrosComponent_table_72_th_8_Template, 2, 4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, CalculadoraCobrosComponent_table_72_td_9_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](10, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, CalculadoraCobrosComponent_table_72_th_11_Template, 2, 4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CalculadoraCobrosComponent_table_72_td_12_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](13, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CalculadoraCobrosComponent_table_72_th_14_Template, 2, 4, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, CalculadoraCobrosComponent_table_72_td_15_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](16, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CalculadoraCobrosComponent_table_72_th_17_Template, 2, 4, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CalculadoraCobrosComponent_table_72_td_18_Template, 4, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CalculadoraCobrosComponent_table_72_tr_19_Template, 1, 0, "tr", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, CalculadoraCobrosComponent_table_72_tr_20_Template, 1, 0, "tr", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function CalculadoraCobrosComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 62)(13, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalculadoraCobrosComponent_div_73_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r30.imprimirCobros());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "svg", 64)(16, "g", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "path", 66)(18, "path", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "defs")(20, "clipPath", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "rect", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Imprimir");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("TOTAL A DESCONTAR: ", ctx_r3.totalDescontar ? "$" + ctx_r3.totalDescontar : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("TOTAL PAGOS REALES: ", ctx_r3.totalPagosReales ? "$" + ctx_r3.totalPagosReales : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("TOTAL INTERESES: ", ctx_r3.totalIntereses ? "$" + ctx_r3.totalIntereses : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("TOTAL DESCUENTOS: ", ctx_r3.totalDescuentos ? "$" + ctx_r3.totalDescuentos : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("SALDO A PAGAR: ", ctx_r3.saldoPagar ? "$" + ctx_r3.saldoPagar : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r3.color_primario ? "" : ctx_r3.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r3.color_primario || "");
  }
}
class CalculadoraCobrosComponent {
  constructor(alert, router, _cobranzasService, _headerTextService, _empresaService) {
    this.alert = alert;
    this.router = router;
    this._cobranzasService = _cobranzasService;
    this._headerTextService = _headerTextService;
    this._empresaService = _empresaService;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    this.default_color = 'bg-primary';
    this.displayedColumns = ['descripcion_forma_cobro', 'importe_neto_a_descontar', 'importe_pago_real', 'importe_interes', 'importe_descuento', 'acciones'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.token = localStorage.getItem('accessToken');
    this._headerTextService.setTitulo(this.router);
  }
  ngOnInit() {
    this.newForm();
    this.getMetodosCobro();
    this.netoDescontarSub = this.form.get('netoDescontar')?.valueChanges.subscribe(() => {
      this.ultimoModificado = 'netoDescontar';
      if (this.form.get('netoDescontar')?.value) {
        this.form.get('pagoReal').disable({
          emitEvent: false
        });
      } else {
        this.form.get('pagoReal').enable({
          emitEvent: false
        });
      }
      this.calcularValores();
    });
    this.pagoRealSub = this.form.get('pagoReal')?.valueChanges.subscribe(() => {
      this.ultimoModificado = 'pagoReal';
      if (this.form.get('pagoReal')?.value) {
        this.form.get('netoDescontar').disable({
          emitEvent: false
        });
      } else {
        this.form.get('netoDescontar').enable({
          emitEvent: false
        });
      }
      this.calcularValores();
    });
    this.observePorcentajes();
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
      totalVenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      bonificado: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({
        value: 0,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0)]),
      noBonificado: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({
        value: 0,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0)]),
      presupuesto: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({
        value: 0,
        disabled: true
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      saldoDescontar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl({
        value: 0,
        disabled: true
      }),
      metodoCobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(-1, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      netoDescontar: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required),
      pagoReal: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required)
    });
  }
  /* Observa los cambios en los inputs de porcentajes */
  observePorcentajes() {
    this.form.get('totalVenta').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(750)).subscribe(value => {
      this.calcularPorcentajes('total');
    });
    this.form.get('bonificado').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(750)).subscribe(value => {
      this.calcularPorcentajes('bonificado');
    });
    this.form.get('noBonificado').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(750)).subscribe(value => {
      this.calcularPorcentajes('noBonificado');
    });
  }
  /* Calcula los porcentajes de los campos de manera dinamica y calcula
   el presupuesto en base al porcentaje del total de la venta y el porcentaje no bonificado */
  calcularPorcentajes(opcion) {
    let noBonificado = 100 - this.form.get('bonificado').value;
    let bonificado = 100 - this.form.get('noBonificado').value;
    if (this.form.get('bonificado').value > 100 || this.form.get('bonificado').value < 0 || this.form.get('noBonificado').value > 100 || this.form.get('noBonificado').value < 0) {
      this.alert.warning('Los porcentajes no pueden ser mayores a 100 ni menores a 0');
      this.form.get('bonificado').setValue(50, {
        emitEvent: false
      });
      this.form.get('noBonificado').setValue(50, {
        emitEvent: false
      });
      let valorNoBonificado = this.form.get('noBonificado').value * this.form.get('totalVenta').value / 100;
      this.form.get('presupuesto').setValue(valorNoBonificado);
    } else {
      switch (opcion) {
        case 'total':
          this.form.get('bonificado').enable();
          this.form.get('bonificado').setValue(50, {
            emitEvent: false
          });
          this.form.get('noBonificado').enable();
          this.form.get('noBonificado').setValue(50, {
            emitEvent: false
          });
          break;
        case 'bonificado':
          this.form.get('noBonificado').setValue(noBonificado);
          break;
        case 'noBonificado':
          this.form.get('bonificado').setValue(bonificado);
          break;
      }
      let valorNoBonificado = this.form.get('noBonificado').value * this.form.get('totalVenta').value / 100;
      this.form.get('presupuesto').setValue(valorNoBonificado);
    }
  }
  /* Obtiene los Métodos de Cobro disponibles */
  getMetodosCobro() {
    this._cobranzasService.getMetodosCobro(this.token).subscribe({
      next: res => {
        this.metodosCobro = res.result;
      },
      error: err => {
        console.error(err);
      }
    });
  }
  imprimirCobros() {
    if (this.form.get('presupuesto').value && this.dataSource.data.length > 0) {
      let hoy = new Date();
      let payload = {
        cobro: {
          fecha: `${hoy.getFullYear()}-${hoy.getMonth() + 1}-${hoy.getDate()}`,
          presupuesto: this.form.get('presupuesto').value
        },
        items_forma_cobro: this.dataSource.data
      };
      this._cobranzasService.generarReporteCalculadora(this.token, payload).subscribe({
        next: res => {
          window.open(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseRest + '/' + res.path, '_blank');
        },
        error: err => {}
      });
    } else {
      this.alert.warning('Debe completar todos los campos!');
    }
  }
  /* Realiza el cálculo de los valores de Neto a Descontar y
     Pago Real teniendo en cuenta el Método de Pago */
  calcularValores() {
    if (this.form.get(this.ultimoModificado)?.value) {
      if (this.form.get('metodoCobro').value != -1) {
        if (this.form.get('netoDescontar').value || this.form.get('pagoReal').value) {
          let payload = {
            idcobrotipo: this.form.get('metodoCobro').value,
            importe_pago_real: this.ultimoModificado === 'pagoReal' ? this.form.get('pagoReal').value : null,
            importe_neto_a_descontar: this.ultimoModificado === 'netoDescontar' ? this.form.get('netoDescontar').value : null
          };
          this._cobranzasService.calcularImporte(this.token, payload).subscribe({
            next: res => {
              if (res.result) {
                let netoDescontar = res.result.importe_neto_a_descontar ? res.result.importe_neto_a_descontar : null;
                let pagoReal = res.result.importe_pago_real ? res.result.importe_pago_real : null;
                netoDescontar ? this.form.get('netoDescontar').setValue(netoDescontar, {
                  emitEvent: false
                }) : '';
                pagoReal ? this.form.get('pagoReal').setValue(pagoReal, {
                  emitEvent: false
                }) : '';
                this.form.get('pagoReal').enable({
                  emitEvent: false
                });
                this.form.get('netoDescontar').enable({
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
  /* Realiza el cálculo de los valores del detalle de cada item */
  calcularDetalle() {
    this.totalDescontar = this.dataSource.data.reduce((acc, element) => acc + element.importe_neto_a_descontar, 0);
    this.totalPagosReales = this.dataSource.data.reduce((acc, element) => acc + element.importe_pago_real, 0);
    this.totalIntereses = this.dataSource.data.reduce((acc, element) => acc + element.importe_interes, 0);
    this.totalDescuentos = this.dataSource.data.reduce((acc, element) => acc + element.importe_descuento, 0);
    this.saldoPagar = this.form.get('presupuesto').value - this.totalDescontar;
    this.form.get('saldoDescontar').setValue(this.saldoPagar);
    this.form.get('netoDescontar').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max(this.form.get('saldoDescontar').value), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]);
    this.form.get('netoDescontar').updateValueAndValidity();
  }
  /* Carga de Cobros */
  cargarItemCobro() {
    let mismaFormaCobro = this.dataSource.data.find(e => e.idcobrotipo === this.form.get('metodoCobro').value);
    if (mismaFormaCobro) {
      this.alert.warning('No puede agregar dos veces el mismo metodo de cobro');
    } else {
      if (this.form.valid && this.form.get('metodoCobro').value != -1) {
        let payload = {
          idcobrotipo: this.form.get('metodoCobro').value,
          importe_pago_real: this.ultimoModificado === 'pagoReal' ? this.form.get('pagoReal').value : null,
          importe_neto_a_descontar: this.ultimoModificado === 'netoDescontar' ? this.form.get('netoDescontar').value : null
        };
        this._cobranzasService.cargarItemCobroCalculadora(this.token, payload).subscribe({
          next: res => {
            this.dataSource.data = [...this.dataSource.data, res.result];
            this.resetForm();
            this.calcularDetalle();
          },
          error: err => {}
        });
      } else {
        this.alert.warning('Verifique los campos del formulario');
      }
    }
  }
  removeItem(item) {
    this.saldoPagar += item.importe_neto_a_descontar;
    this.dataSource.data = this.dataSource.data.filter(e => e.idcobrotipo != item.idcobrotipo);
    this.calcularDetalle();
  }
  resetForm() {
    this.form.get('metodoCobro').setValue(-1, {
      emitEvent: false
    });
    this.form.get('netoDescontar').setValue(0, {
      emitEvent: false
    });
    this.form.get('pagoReal').setValue(0, {
      emitEvent: false
    });
  }
  ngOnDestroy() {
    this.pagoRealSub.unsubscribe();
    this.netoDescontarSub.unsubscribe();
  }
}
CalculadoraCobrosComponent.ɵfac = function CalculadoraCobrosComponent_Factory(t) {
  return new (t || CalculadoraCobrosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_cobranzas_service__WEBPACK_IMPORTED_MODULE_2__.CobranzasService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_3__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_4__.EmpresaService));
};
CalculadoraCobrosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CalculadoraCobrosComponent,
  selectors: [["app-calculadora-cobros"]],
  decls: 74,
  vars: 9,
  consts: [[1, "w-full", "flex", "flex-col", "relative"], [1, "flex", "flex-col", "items-center", "w-full", "h-full", "py-4", "px-6"], [1, "flex", "flex-col", "items-center", "w-full", 3, "formGroup"], [1, "flex", "w-full", "gap-4"], [1, "w-4/12", "flex", "flex-col"], [1, "font-medium", "text-lg"], ["appearance", "fill"], ["matInput", "", "formControlName", "totalVenta", "type", "number", 1, "pl-1"], ["matPrefix", "", 1, "ml-2"], ["matInput", "", "formControlName", "bonificado", "type", "number"], ["matSuffix", "", 1, "mr-4"], ["matInput", "", "formControlName", "noBonificado", "type", "number"], [1, "flex", "w-full"], [1, "flex", "flex-col", "items-start", "justify-center", "pr-4", "w-1/2"], [1, "flex", "flex-col", "w-2/3"], ["appearance", "fill", 1, "w-full"], ["matInput", "", "formControlName", "presupuesto", "type", "number", 3, "blur"], [1, "flex", "flex-col", "items-end", "justify-center", "pl-4", "w-1/2"], ["matInput", "", "formControlName", "saldoDescontar", "type", "number"], [1, "flex", "w-full", "gap-3"], [1, "flex", "flex-col", "items-center", "justify-center", "w-1/3"], [1, "flex", "flex-col", "w-full"], ["matInput", "", "formControlName", "metodoCobro"], [3, "value"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "w-full", "flex"], ["matInput", "", "formControlName", "netoDescontar", "type", "number"], [1, "flex", "items-center", "justify-center", "gap-3", "w-1/3"], [1, "flex", "flex-col", "w-11/12"], ["matInput", "", "formControlName", "pagoReal", "type", "number"], [1, "flex", "items-center", "justify-center", "w-1/12"], ["mat-icon-button", "", 1, "h-[55px]", 3, "disabled", "click"], ["svgIcon", "jedstion:agregar", 1, "icon-size-[32px]"], ["class", "w-full min-h-[300px] flex justify-center items-center pt-4", 4, "ngIf"], ["mat-table", "", "class", " w-full mt-1", 3, "dataSource", 4, "ngIf"], ["class", "flex flex-col justify-center items-end w-full pt-4", 4, "ngIf"], [3, "value", "click"], [1, "w-full", "min-h-[300px]", "flex", "justify-center", "items-center", "pt-4"], [1, "w-full", "h-full", "flex", "justify-center", "items-center", "rounded-md", "drop-shadow-md", "bg-white"], ["mat-table", "", 1, "w-full", "mt-1", 3, "dataSource"], ["matColumnDef", "descripcion_forma_cobro"], ["mat-header-cell", "", "class", "w-auto text-white rounded-tl-lg", 3, "class", "background-color", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "w-auto", 4, "matCellDef"], ["matColumnDef", "importe_neto_a_descontar"], ["mat-header-cell", "", "class", "w-auto text-white", 3, "class", "background-color", 4, "matHeaderCellDef"], ["matColumnDef", "importe_pago_real"], ["matColumnDef", "importe_interes"], ["matColumnDef", "importe_descuento"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "w-auto text-white rounded-tr-lg", 3, "class", "background-color", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "w-auto", "text-white", "rounded-tl-lg"], ["mat-cell", "", 1, "w-auto"], ["mat-header-cell", "", 1, "w-auto", "text-white"], ["mat-header-cell", "", 1, "w-auto", "text-white", "rounded-tr-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["mat-header-row", ""], ["mat-row", ""], [1, "flex", "flex-col", "justify-center", "items-end", "w-full", "pt-4"], [1, "flex", "w-1/7", "flex-col", "text-left"], [1, "w-1/6", "flex", "items-center", "justify-end", "pt-4"], ["mat-flat-button", "", 1, "flex", "gap-2", "rounded-md", 3, "click"], ["width", "22", "height", "22", "viewBox", "0 0 26 26", "fill", "white", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_535_423)"], ["d", "M20.5568 8.68182H19.4773V3.28409H6.52274V8.68182H5.4432C3.65115 8.68182 2.20456 10.1284 2.20456 11.9205V18.3977H6.52274V22.7159H19.4773V18.3977H23.7955V11.9205C23.7955 10.1284 22.3489 8.68182 20.5568 8.68182ZM8.68183 5.44318H17.3182V8.68182H8.68183V5.44318ZM17.3182 18.3977V20.5568H8.68183V16.2386H17.3182V18.3977ZM19.4773 16.2386V14.0795H6.52274V16.2386H4.36365V11.9205C4.36365 11.3267 4.84945 10.8409 5.4432 10.8409H20.5568C21.1506 10.8409 21.6364 11.3267 21.6364 11.9205V16.2386H19.4773Z"], ["d", "M19.4773 13.5398C20.0735 13.5398 20.5568 13.0564 20.5568 12.4602C20.5568 11.864 20.0735 11.3807 19.4773 11.3807C18.8811 11.3807 18.3977 11.864 18.3977 12.4602C18.3977 13.0564 18.8811 13.5398 19.4773 13.5398Z"], ["id", "clip0_535_423"], ["width", "25.9091", "height", "25.9091", "fill", "currentColor", "transform", "translate(0.0454712 0.0454559)"]],
  template: function CalculadoraCobrosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Total Venta");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "$\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4)(12, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Bonificado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 4)(19, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "No Bonificado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 12)(26, "div", 13)(27, "div", 14)(28, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Presupuesto");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 15)(31, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("blur", function CalculadoraCobrosComponent_Template_input_blur_31_listener() {
        return ctx.calcularDetalle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "$\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 17)(35, "div", 14)(36, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Saldo a Descontar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "$\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 19)(43, "div", 20)(44, "div", 21)(45, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Forma de Cobro");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-form-field", 15)(48, "mat-select", 22)(49, "mat-option", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " Seleccione M\u00E9todo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, CalculadoraCobrosComponent_mat_option_51_Template, 2, 2, "mat-option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 20)(53, "div", 21)(54, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Neto a Descontar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "mat-form-field", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "$\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 27)(61, "div", 28)(62, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Pago Real (Bruto)");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "mat-form-field", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "$\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 30)(69, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CalculadoraCobrosComponent_Template_button_click_69_listener() {
        return ctx.cargarItemCobro();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "mat-icon", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](71, CalculadoraCobrosComponent_div_71_Template, 4, 0, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, CalculadoraCobrosComponent_table_72_Template, 21, 3, "table", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, CalculadoraCobrosComponent_div_73_Template, 24, 9, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.metodosCobro);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.form.get("netoDescontar").value && !ctx.form.get("pagoReal").value && ctx.form.get("metodoCobro").value != -1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.dataSource.data.length > 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.dataSource.data.length > 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon],
  encapsulation: 2
});


/***/ }),

/***/ 2915:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ventas/cobranzas/components/calculadora-de-cobros/calculadora-cobros.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculadoraCobrosModule": () => (/* binding */ CalculadoraCobrosModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _calculadora_de_cobros_calculadora_cobros_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calculadora-de-cobros/calculadora-cobros.component */ 87238);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _services_cobranzas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cobranzas.service */ 86064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 86839);

























const routes = [{
  path: '',
  component: _calculadora_de_cobros_calculadora_cobros_component__WEBPACK_IMPORTED_MODULE_4__.CalculadoraCobrosComponent
}];
class CalculadoraCobrosModule {}
CalculadoraCobrosModule.ɵfac = function CalculadoraCobrosModule_Factory(t) {
  return new (t || CalculadoraCobrosModule)();
};
CalculadoraCobrosModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: CalculadoraCobrosModule
});
CalculadoraCobrosModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_5__.FuseConfirmationService, _services_cobranzas_service__WEBPACK_IMPORTED_MODULE_6__.CobranzasService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CalculadoraCobrosModule, {
    declarations: [_calculadora_de_cobros_calculadora_cobros_component__WEBPACK_IMPORTED_MODULE_4__.CalculadoraCobrosComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_21__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_3__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__.MatDialogModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_23__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

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
//# sourceMappingURL=src_app_modules_ventas_cobranzas_components_calculadora-de-cobros_calculadora-cobros_module_ts.js.map