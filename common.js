"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["common"],{

/***/ 86064:
/*!************************************************************************!*\
  !*** ./src/app/modules/ventas/cobranzas/services/cobranzas.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CobranzasService": () => (/* binding */ CobranzasService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33765);
/* harmony import */ var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth/auth.service */ 88951);




class CobranzasService {
  constructor(http, _authService) {
    this.http = http;
    this._authService = _authService;
  }
  getItemEdicion(token, params) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.get_datos + params, {
      headers: token
    });
  }
  getMetodosCobro(token) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_cobro_tipo, {
      headers: token
    });
  }
  calcularImporte(token, payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.calcular_importe, payload, {
      headers: token
    });
  }
  calcularInteres(token, payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.calcular_interes, payload, {
      headers: token
    });
  }
  cargarItemCobroCalculadora(token, payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.cargar_item_cobro_calculadora, payload, {
      headers: token
    });
  }
  cargarItemCobro(token, payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.cargar_item_cobro, payload, {
      headers: token
    });
  }
  cargarItemFormaCobro(token, payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.cargar_forma_cobro, payload, {
      headers: token
    });
  }
  nuevaCobranza(token, payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_cobros, payload, {
      headers: token
    });
  }
  editarCobranza(token, idcobro, payload) {
    return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_cobros + `/${idcobro}`, payload, {
      headers: token
    });
  }
  deleteCobranza(token, idcobro) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_cobros + `/${idcobro}`, {
      headers: token
    });
  }
  generarReporteCalculadora(token, payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.generar_reporte_calculadora, payload, {
      headers: token
    });
  }
  generarReporteCobro(token, params) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.generar_reporte_cobro + params, {
      headers: token
    });
  }
  getClientes(token, filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_cliente + filter, {
      headers: token
    });
  }
  getVentaPendiente(token, filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_vta_venta_pendiente + filter, {
      headers: token
    });
  }
  getBancos(token) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.fondos_bancos, {
      headers: token
    });
  }
}
CobranzasService.ɵfac = function CobranzasService_Factory(t) {
  return new (t || CobranzasService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};
CobranzasService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CobranzasService,
  factory: CobranzasService.ɵfac
});


/***/ })

}]);
//# sourceMappingURL=common.js.map