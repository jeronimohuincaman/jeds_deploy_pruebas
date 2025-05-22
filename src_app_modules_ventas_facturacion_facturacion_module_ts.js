"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_ventas_facturacion_facturacion_module_ts"],{

/***/ 78253:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/ventas/facturacion/components/asociar-venta/asociar-venta/asociar-venta.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsociarVentaComponent": () => (/* binding */ AsociarVentaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/facturacion.service */ 21881);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);

















function AsociarVentaComponent_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cliente_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cliente_r3.razonSocial, " ");
  }
}
function AsociarVentaComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 19)(1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cobro_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", cobro_r4.idcobro);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" N\u00B0", cobro_r4.idcobro, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", cobro_r4.fecha, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ($", cobro_r4.importe_real, ") ");
  }
}
class AsociarVentaComponent {
  constructor(data, _empresaService, dialogRef, facturacionService, alert) {
    this.data = data;
    this._empresaService = _empresaService;
    this.dialogRef = dialogRef;
    this.facturacionService = facturacionService;
    this.alert = alert;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    this.default_color = 'bg-primary';
    this.idFactura = this.data.codigo;
    this._empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
  }
  ngOnInit() {
    this._empresaService.getEmpresa();
    this.getClientes();
    this.newForm();
  }
  getClientes(value) {
    let filter = value ? `?filter[razonSocial][like]=${value}` : '';
    this.facturacionService.getClientes(filter).subscribe({
      next: res => {
        this.clientes = res.result;
      }
    });
  }
  getCobros() {
    let filter = `?filter[idcliente]=${this.idCliente}`;
    this.facturacionService.getDatosCobro(filter).subscribe({
      next: res => {
        this.cobros = res.result;
        this.ventaForm.get('pago').enable();
      }
    });
  }
  newForm() {
    this.ventaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''),
      pago: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl({
        value: '',
        disabled: this.data.idcobro ? false : true
      })
    });
    this.initObservadores();
  }
  initObservadores() {
    this.clientesSub = this.ventaForm.get('cliente').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(350), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(' ')).subscribe(value => {
      if (typeof value == 'string') {
        this.getClientes(value);
      } else {
        this.idCliente = value.codigo;
        this.getCobros();
      }
    });
  }
  displayFn(cliente) {
    return cliente && cliente.razonSocial ? cliente.razonSocial : '';
  }
  onCloseMenu(data) {
    this.dialogRef.close(data);
  }
  onSubmit() {
    let pago = this.ventaForm.get('pago').value;
    if (pago && this.idFactura) {
      let payload = {
        idfactura: this.idFactura,
        idcobro: pago
      };
      this.facturacionService.asociarCobro(payload).subscribe({
        next: res => {
          if (res.success == true) {
            this.alert.success(res.message);
            this.onCloseMenu(true);
          } else {
            this.alert.error(res.message);
          }
        }
      });
    }
  }
}
AsociarVentaComponent.ɵfac = function AsociarVentaComponent_Factory(t) {
  return new (t || AsociarVentaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_0__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_facturacion_service__WEBPACK_IMPORTED_MODULE_1__.FacturacionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService));
};
AsociarVentaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AsociarVentaComponent,
  selectors: [["app-asociar-venta"]],
  decls: 28,
  vars: 14,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "md:min-w-140", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "bg-white", "shadow-sm", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [3, "formGroup"], [1, "w-full", "flex", "flex-col"], [1, "font-semibold", "text-[#323639]", "ml-1"], [1, "w-full"], ["type", "text", "placeholder", "Seleccionar cliente", "matInput", "", "formControlName", "cliente", 3, "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "font-semibold", "text-[#323639]"], ["formControlName", "pago"], [1, "w-full", "md:flex", "md:justify-end", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [3, "value"]],
  template: function AsociarVentaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AsociarVentaComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5)(9, "form", 6)(10, "div", 7)(11, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Cliente");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "mat-autocomplete", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AsociarVentaComponent_mat_option_17_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7)(19, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Pago");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AsociarVentaComponent_mat_option_23_Template, 6, 4, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16)(25, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AsociarVentaComponent_Template_button_click_25_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Pago Asociado a Factura ", ctx.idFactura, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.ventaForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("displayWith", ctx.displayFn);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.clientes);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.cobros);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteTrigger],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc29jaWFyLXZlbnRhLmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZmFjdHVyYWNpb24vY29tcG9uZW50cy9hc29jaWFyLXZlbnRhL2Fzb2NpYXItdmVudGEvYXNvY2lhci12ZW50YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 1440:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ventas/facturacion/components/calcular-unitario/calcular-unitario.component.ts ***!
  \********************************************************************************************************/
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
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 26375);
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/facturacion.service */ 21881);
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
  constructor(data, _empresaService, alert, facturacionService, dialogRef) {
    this.data = data;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.facturacionService = facturacionService;
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
      this.facturacionService.calcularPrecioUnitario(payload).subscribe({
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
  return new (t || CalcularUnitarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_0__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_facturacion_service__WEBPACK_IMPORTED_MODULE_2__.FacturacionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef));
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
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxjdWxhci11bml0YXJpby5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZmFjdHVyYWNpb24vY29tcG9uZW50cy9jYWxjdWxhci11bml0YXJpby9jYWxjdWxhci11bml0YXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 26714:
/*!****************************************************************************************************************************!*\
  !*** ./src/app/modules/ventas/facturacion/components/dialog-acciones-factura/dialog-acciones/dialog-acciones.component.ts ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogAccionesComponent": () => (/* binding */ DialogAccionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/facturacion.service */ 21881);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../@fuse/components/alert/alert.component */ 98214);











function DialogAccionesComponent_fuse_alert_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fuse-alert", 11);
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
class DialogAccionesComponent {
  constructor(data, _empresaService, alert, facturacionService, dialogRef) {
    this.data = data;
    this._empresaService = _empresaService;
    this.alert = alert;
    this.facturacionService = facturacionService;
    this.dialogRef = dialogRef;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    this.default_color = 'bg-primary';
    this.title = this.data.title;
    this.descripcion = this.data.descripcion;
    this.idFactura = this.data.codigoFactura;
    this.accion = this.data.accion;
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
  }
  onCloseMenu(data) {
    this.dialogRef.close(data);
  }
  onSubmit() {
    switch (this.accion) {
      case 'delete':
        this.facturacionService.deleteFactura(this.idFactura).subscribe({
          next: res => {
            if (res.success = true) {
              this.alert.success(res.message);
              this.onCloseMenu(true);
            } else {
              this.alert.error(res.errors);
            }
          }
        });
        break;
      case 'generar':
        let filter = `?idfactura=${this.idFactura}`;
        this.facturacionService.generarComprobanteFactura(filter).subscribe({
          next: res => {
            if (res.success == true) {
              this.alert.success(res.message);
              this.onCloseMenu(true);
            } else {
              this.alert.error(res.message);
            }
          }
        });
        break;
    }
  }
}
DialogAccionesComponent.ɵfac = function DialogAccionesComponent_Factory(t) {
  return new (t || DialogAccionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_0__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_facturacion_service__WEBPACK_IMPORTED_MODULE_2__.FacturacionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogRef));
};
DialogAccionesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DialogAccionesComponent,
  selectors: [["app-dialog-acciones"]],
  decls: 15,
  vars: 11,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "md:min-w-140", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "bg-white", "shadow-sm", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], ["class", "fixed top-0 left-0 w-full flex justify-center items-center mt-8 alert-main z-99999", 3, "type", "appearance", 4, "ngIf"], [1, "flex", "flex-col", "w-full", "h-full", "p-4"], [1, "flex", "justify-center", "items-center", 3, "innerHTML"], [1, "w-full", "md:flex", "md:justify-end", "md:pb-6", "md:px-6", "mt-auto"], ["mat-raised-button", "", 1, "w-full", "rounded-none", "md:w-36", "md:rounded-lg", "py-8", "md:py-0", 3, "click"], [1, "text-white", "font-medium", "text-base"], [1, "fixed", "top-0", "left-0", "w-full", "flex", "justify-center", "items-center", "mt-8", "alert-main", "z-99999", 3, "type", "appearance"]],
  template: function DialogAccionesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogAccionesComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, DialogAccionesComponent_fuse_alert_8_Template, 2, 4, "fuse-alert", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogAccionesComponent_Template_button_click_12_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Confirmar");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.descripcion, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.color_primario ? "" : ctx.default_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.color_primario || "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _fuse_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__.FuseAlertComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2ctYWNjaW9uZXMuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZmFjdHVyYWNpb24vY29tcG9uZW50cy9kaWFsb2ctYWNjaW9uZXMtZmFjdHVyYS9kaWFsb2ctYWNjaW9uZXMvZGlhbG9nLWFjY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 20069:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/ventas/facturacion/components/facturas.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacturasComponent": () => (/* binding */ FacturasComponent)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tabla-dinamica/tabla-dinamica.component */ 71549);
/* harmony import */ var _dialog_acciones_factura_dialog_acciones_dialog_acciones_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-acciones-factura/dialog-acciones/dialog-acciones.component */ 26714);
/* harmony import */ var _asociar_venta_asociar_venta_asociar_venta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./asociar-venta/asociar-venta/asociar-venta.component */ 78253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/facturacion.service */ 21881);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 42512);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 69941);

















function FacturasComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FacturasComponent_div_0_Template_mat_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r2.cerrarIFrame());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " arrow_back_ios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FacturasComponent_div_0_Template_span_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r4.cerrarIFrame());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "iframe", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx_r0.safeURL, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeResourceUrl"]);
  }
}
function FacturasComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function FacturasComponent_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.nuevaFactura());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Nueva Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 15)(10, "app-tabla-dinamica", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("functionEmitter", function FacturasComponent_div_1_Template_app_tabla_dinamica_functionEmitter_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.generarAcciones($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r1.color_primario ? "" : ctx_r1.default_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("border", ctx_r1.color_primario || "")("color", ctx_r1.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cache", false)("columnsNames", ctx_r1.headers)("renderType", "ssp")("columnsParams", ctx_r1.column_params)("endpoint", ctx_r1.env)("functions", ctx_r1.funcionesObjeto)("extraClasses", "td.mat-cell border,td.mat-cell border-slate-400")("FiltersLikes", ctx_r1.filtersLike)("extraParams", ctx_r1.extraParams)("acciones", ctx_r1.accionesObjeto)("showMenu", ctx_r1.showMenu);
  }
}
class FacturasComponent {
  constructor(headerTextService, router, facturacionService, empresaService, alert, dialog, sanitizer) {
    this.headerTextService = headerTextService;
    this.router = router;
    this.facturacionService = facturacionService;
    this.empresaService = empresaService;
    this.alert = alert;
    this.dialog = dialog;
    this.sanitizer = sanitizer;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
    this.default_color = 'bg-primary';
    this.column_params = ['fechaEmision', 'tipo', 'num_comprobante', 'puntoVenta', 'cliente_razonsocial', /* 'formaPago', */
    'importeTotal', 'generada', 'acciones'];
    this.headers = ['Fecha', 'Tipo', 'Número', 'Pto. de Venta', 'Cliente', /* 'Forma de Pago', */
    'Total', 'Generada', ''];
    this.funcionesObjeto = null;
    this.accionesObjeto = null;
    this.filtroBusqueda = '';
    this.filtersLike = ['descripcion'];
    this.env = environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_fe_facturas + '?';
    this.extraParams = '';
    this.safeURL = null;
    this.headerTextService.setTitulo(this.router);
  }
  ngOnInit() {
    this.empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    this.funcionesObjeto = [{
      iconoAccion: () => '',
      iconoAccionado: () => '',
      iconoDeshabilitado: () => '',
      visible: () => false
    }];
    this.showMenu = () => true;
    this.accionesObjeto = [{
      nombre_boton: 'Editar',
      functionName: 'editar',
      iconoAccion: factura => factura.generada == 'Si' ? 'jedstion:editar_disabled' : 'jedstion:editar',
      iconoAccionado: () => '',
      iconoDeshabilitado: () => '',
      visible: () => true
    }, {
      nombre_boton: 'Imprimir Factura',
      functionName: 'imprimir_factura',
      iconoAccion: factura => factura.generada != 'Si' ? 'jedstion:imprimir_disabled' : 'jedstion:imprimir',
      iconoAccionado: () => '',
      iconoDeshabilitado: () => '',
      visible: () => true
    }, {
      nombre_boton: 'Asociar Cobro',
      functionName: 'asociar_cobro',
      iconoAccion: factura => factura.idcobro ? 'jedstion:cotizar_disabled' : 'jedstion:cotizar',
      iconoAccionado: () => '',
      iconoDeshabilitado: () => '',
      visible: () => true
    }, {
      nombre_boton: 'Generar Factura',
      functionName: 'generar_factura',
      iconoAccion: factura => factura.generada == 'Si' ? 'jedstion:generar_factura_disabled' : 'jedstion:generar_factura',
      iconoAccionado: () => '',
      iconoDeshabilitado: () => '',
      visible: () => true
    }, {
      nombre_boton: 'Eliminar',
      functionName: 'eliminar',
      iconoAccion: factura => factura.generada == 'Si' ? 'jedstion:eliminar_disabled' : 'jedstion:eliminar',
      iconoAccionado: () => '',
      iconoDeshabilitado: () => '',
      visible: () => true
    }];
  }
  generarAcciones(event) {
    switch (event.name) {
      case 'editar':
        if (event.params.data.generada == 'Si') {
          this.alert.error('La factura fue generada y no puede editarse');
        } else {
          this.editarFactura(event);
        }
        break;
      case 'imprimir_factura':
        if (event.params.data.generada != 'Si') {
          this.alert.error('La factura no puede imprimirse porque no ha sido generada');
        } else {
          this.imprimirFactura(event);
        }
        break;
      case 'asociar_cobro':
        if (event.params.data.idcobro) {
          this.alert.error('La factura ya tiene un cobro asociado');
        } else {
          this.asociarCobro(event);
        }
        break;
      case 'generar_factura':
        if (event.params.data.generada == 'Si') {
          this.alert.error('La factura ya fue generada');
        } else {
          this.generarComprobanteFactura(event);
        }
        break;
      case 'eliminar':
        if (event.params.data.generada == 'Si') {
          this.alert.error('No puede eliminar una factura generada');
        } else {
          this.deleteFactura(event);
        }
        break;
    }
  }
  nuevaFactura() {
    this.router.navigate(['facturas/nueva-factura']);
  }
  editarFactura(event) {
    let codigoFactura = event.params.data.codigo;
    this.router.navigate([`facturas/editar-factura/${codigoFactura}`]);
  }
  deleteFactura(event) {
    let codigoFactura = event.params.data.codigo;
    this.dialog.open(_dialog_acciones_factura_dialog_acciones_dialog_acciones_component__WEBPACK_IMPORTED_MODULE_2__.DialogAccionesComponent, {
      panelClass: 'ayuda-dialog',
      data: {
        codigoFactura: codigoFactura,
        title: 'Eliminar Factura',
        accion: 'delete',
        descripcion: `<span class="font-semibold text-lg">¿Confirma la eliminación de la factura N° ${codigoFactura}? <br>
                    Esta operación es irreversible. ¿Desea continuar?</span>`
      }
    }).afterClosed().subscribe({
      next: res => {
        this.tabla.eventoUpdate();
      }
    });
  }
  generarComprobanteFactura(event) {
    let codigoFactura = event.params.data.codigo;
    this.dialog.open(_dialog_acciones_factura_dialog_acciones_dialog_acciones_component__WEBPACK_IMPORTED_MODULE_2__.DialogAccionesComponent, {
      panelClass: 'ayuda-dialog',
      data: {
        codigoFactura: codigoFactura,
        title: 'Generar Factura',
        accion: 'generar',
        descripcion: `<span class="font-semibold text-lg">¿Confirma la generación de la factura N° ${codigoFactura}? <br>
                    Esta operación es irreversible. ¿Desea continuar?</span>`
      }
    }).afterClosed().subscribe({
      next: res => {
        this.tabla.eventoUpdate();
      }
    });
  }
  asociarCobro(event) {
    let data = event.params.data;
    this.dialog.open(_asociar_venta_asociar_venta_asociar_venta_component__WEBPACK_IMPORTED_MODULE_3__.AsociarVentaComponent, {
      data: data,
      panelClass: 'ayuda-dialog'
    }).afterClosed().subscribe({
      next: res => {
        this.tabla.eventoUpdate();
      }
    });
  }
  imprimirFactura(event) {
    let data = event.params.data;
    let filter = `?id=${data.codigo}&copia=$1`;
    this.facturacionService.imprimirFactura(filter).subscribe({
      next: res => {
        this.base64 = 'data:application/pdf;base64,' + res.result;
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.base64);
      }
    });
  }
  cerrarIFrame() {
    this.safeURL = null;
  }
}
FacturasComponent.ɵfac = function FacturasComponent_Factory(t) {
  return new (t || FacturasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_4__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_facturacion_service__WEBPACK_IMPORTED_MODULE_5__.FacturacionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_6__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_7__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer));
};
FacturasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: FacturasComponent,
  selectors: [["app-facturas"]],
  viewQuery: function FacturasComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.tabla = _t.first);
    }
  },
  decls: 2,
  vars: 2,
  consts: [["class", "w-full h-full flex-col p-2", 4, "ngIf"], ["class", "w-full h-full flex flex-col p-2", 4, "ngIf"], [1, "w-full", "h-full", "flex-col", "p-2"], [1, "flex", "items-center", "h-[10%]"], [1, "cursor-pointer", 3, "click"], [1, "font-semibold", "text-[#65758c]", "cursor-pointer", 3, "click"], ["frameborder", "1", 1, "w-full", "h-[90%]", 3, "src"], [1, "w-full", "h-full", "flex", "flex-col", "p-2"], [1, "w-full", "flex", "justify-end", "px-2"], [1, "w-1/7", "flex", "justify-center", "items-center"], ["mat-flat-button", "", 1, "w-full", "px-6", "py-6", "!border", "border-solid", "rounded-lg", "md:w-55", "md:rounded-lg", 3, "click"], [1, "flex", "item-center"], ["id", "note_plus", "width", "20", "height", "20", "viewBox", "0 0 20 20", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15.8333 10.8333C16.4167 10.8333 16.975 10.9417 17.5 11.125V7.5L12.5 2.5H4.16667C3.24167 2.5 2.5 3.24167 2.5 4.16667V15.8333C2.5 16.7583 3.25 17.5 4.16667 17.5H11.125C10.9417 16.975 10.8333 16.4167 10.8333 15.8333C10.8333 13.075 13.075 10.8333 15.8333 10.8333ZM11.6667 3.75L16.25 8.33333H11.6667V3.75ZM19.1667 15V16.6667H16.6667V19.1667H15V16.6667H12.5V15H15V12.5H16.6667V15H19.1667Z"], [1, "ml-2", "text-lg", "mt-0.5"], [1, "px-2"], [1, "bottom-10", "sm:bottom-0", "table-fixed", "sm:top-2", "w-full", "m-0", 3, "cache", "columnsNames", "renderType", "columnsParams", "endpoint", "functions", "extraClasses", "FiltersLikes", "extraParams", "acciones", "showMenu", "functionEmitter"]],
  template: function FacturasComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, FacturasComponent_div_0_Template, 7, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, FacturasComponent_div_1_Template, 11, 17, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.safeURL);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.safeURL == null);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _shared_components_tabla_dinamica_tabla_dinamica_component__WEBPACK_IMPORTED_MODULE_1__.TablaDinamicaComponent],
  styles: ["[_nghost-%COMP%]  .mat-column-generada .cell-content {\n  padding: 5px 7px;\n  border-radius: 100px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3R1cmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUFEWiIsImZpbGUiOiJmYWN0dXJhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0OjpuZy1kZWVwIHtcclxuICAgIC5tYXQtY29sdW1uLWdlbmVyYWRhIHtcclxuICAgICAgICAuY2VsbC1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZmFjdHVyYWNpb24vY29tcG9uZW50cy9mYWN0dXJhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFUTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBRFo7QUFDQSxvaUJBQW9pQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0OjpuZy1kZWVwIHtcclxuICAgIC5tYXQtY29sdW1uLWdlbmVyYWRhIHtcclxuICAgICAgICAuY2VsbC1jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});


/***/ }),

/***/ 11449:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/ventas/facturacion/components/guardar-factura/guardar-factura.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuardarFacturaComponent": () => (/* binding */ GuardarFacturaComponent)
/* harmony export */ });
/* harmony import */ var C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 98977);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 71989);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 443);
/* harmony import */ var _calcular_unitario_calcular_unitario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calcular-unitario/calcular-unitario.component */ 1440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/header-text/header-text.service */ 78978);
/* harmony import */ var _shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/empresa.service */ 66270);
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/facturacion.service */ 21881);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/radio */ 8046);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);

























function GuardarFacturaComponent_div_0_spinner_component_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "spinner-component");
  }
}
function GuardarFacturaComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GuardarFacturaComponent_div_0_spinner_component_1_Template, 1, 0, "spinner-component", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.spinner);
  }
}
function GuardarFacturaComponent_div_1_mat_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cliente_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", cliente_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cliente_r32.razonSocial, " ");
  }
}
function GuardarFacturaComponent_div_1_mat_option_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comprobante_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", comprobante_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", comprobante_r33.Desc, " ");
  }
}
function GuardarFacturaComponent_div_1_mat_option_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const puntoVenta_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", puntoVenta_r34.Nro);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", puntoVenta_r34.Nro, " ");
  }
}
function GuardarFacturaComponent_div_1_mat_option_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const comprobanteAsociado_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", comprobanteAsociado_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", comprobanteAsociado_r35.num_comprobante, " ");
  }
}
function GuardarFacturaComponent_div_1_mat_option_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ventaAsociada_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ventaAsociada_r36.idventa);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ventaAsociada_r36.cliente + " - " + ventaAsociada_r36.fecha + "($" + ventaAsociada_r36.importe_total + ")", " ");
  }
}
function GuardarFacturaComponent_div_1_mat_option_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const articulo_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", articulo_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", articulo_r37.descripcion, " ");
  }
}
function GuardarFacturaComponent_div_1_th_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Detalle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r15.color_primario || "");
  }
}
function GuardarFacturaComponent_div_1_td_145_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.detalle, " ");
  }
}
function GuardarFacturaComponent_div_1_th_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cantidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r17.color_primario || "");
  }
}
function GuardarFacturaComponent_div_1_td_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r39.cantidad, " ");
  }
}
function GuardarFacturaComponent_div_1_th_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Precio Unitario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r19.color_primario || "");
  }
}
function GuardarFacturaComponent_div_1_td_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r40.importe_unitario, "1.2-2"), " ");
  }
}
function GuardarFacturaComponent_div_1_th_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Subtotal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r21.color_primario || "");
  }
}
function GuardarFacturaComponent_div_1_td_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r41.subtotal, "1.2-2"), " ");
  }
}
function GuardarFacturaComponent_div_1_th_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " IVA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r23.color_primario || "");
  }
}
function GuardarFacturaComponent_div_1_td_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", element_r42.subtotal_iva > 0 ? "$" + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 2, element_r42.subtotal_iva, "1.2-2") : "", " ", element_r42.importeIVA > 0 && element_r42.porcentajeIVA ? "(" + _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 5, element_r42.porcentajeIVA, "1.2-2") + "%" + ")" : "", " ");
  }
}
function GuardarFacturaComponent_div_1_th_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r25.color_primario || "");
  }
}
function GuardarFacturaComponent_div_1_td_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r43.total, "1.2-2"), " ");
  }
}
function GuardarFacturaComponent_div_1_th_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 91);
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r27.color_primario || "");
  }
}
function GuardarFacturaComponent_div_1_td_163_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 93)(1, "mat-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GuardarFacturaComponent_div_1_td_163_div_1_Template_mat_icon_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const element_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.removeArticulo(element_r44));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r45.color_primario || "");
  }
}
function GuardarFacturaComponent_div_1_td_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GuardarFacturaComponent_div_1_td_163_div_1_Template, 3, 2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r44.acciones != "");
  }
}
function GuardarFacturaComponent_div_1_tr_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 95);
  }
}
function GuardarFacturaComponent_div_1_tr_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 96);
  }
}
function GuardarFacturaComponent_div_1_span_183_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Falta Facturar: ", ctx_r31.faltaFacturarVista != 0 && ctx_r31.faltaFacturarVista != undefined ? "$" : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 2, ctx_r31.faltaFacturarVista, "1.2-2"), "");
  }
}
const _c0 = function (a0) {
  return {
    "bg-gray-200": a0
  };
};
function GuardarFacturaComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GuardarFacturaComponent_div_1_Template_mat_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " arrow_back_ios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GuardarFacturaComponent_div_1_Template_span_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 9)(8, "div", 10)(9, "div", 11)(10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 13)(14, "mat-datepicker-toggle", 14)(15, "mat-datepicker", null, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 11)(18, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Vto. Para el Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "input", 16)(22, "mat-datepicker-toggle", 14)(23, "mat-datepicker", null, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 11)(26, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Fecha Desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "input", 18)(30, "mat-datepicker-toggle", 14)(31, "mat-datepicker", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 11)(34, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Fecha Hasta");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 20)(38, "mat-datepicker-toggle", 14)(39, "mat-datepicker", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 22)(42, "div", 23)(43, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-autocomplete", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, GuardarFacturaComponent_div_1_mat_option_49_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 29)(51, "div", 30)(52, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 30)(55, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 32)(58, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 32)(61, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 33)(64, "div", 34)(65, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Comprobante");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "mat-form-field")(68, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](69, GuardarFacturaComponent_div_1_mat_option_69_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 36)(71, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Pto. de Venta");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "mat-form-field")(74, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, GuardarFacturaComponent_div_1_mat_option_75_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 38)(77, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 40)(82, "mat-radio-group", 41)(83, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Contado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "mat-radio-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Cuenta Corriente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 43)(88, "div", 44)(89, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Comprobante Asociado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "mat-form-field")(92, "mat-select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](93, GuardarFacturaComponent_div_1_mat_option_93_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 44)(95, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "Venta Asociada");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "mat-form-field")(98, "mat-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, GuardarFacturaComponent_div_1_mat_option_99_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 48)(101, "div", 36)(102, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "Art\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](105, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "mat-autocomplete", 26, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, GuardarFacturaComponent_div_1_mat_option_108_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 36)(110, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](113, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 52)(115, "div", 53)(116, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](117, "Precio Unitario");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](119, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](120, "mat-hint", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](121, "*Sin IVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "div", 56)(123, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GuardarFacturaComponent_div_1_Template_button_click_123_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r53.calcularPrecioUnitario());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](124, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 36)(126, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](129, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](131, "$\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "div", 61)(133, "div", 62)(134, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](137, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "div", 64)(139, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GuardarFacturaComponent_div_1_Template_button_click_139_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r54.addArticulo());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](140, "mat-icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "div", 66)(142, "table", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](143, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](144, GuardarFacturaComponent_div_1_th_144_Template, 2, 2, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](145, GuardarFacturaComponent_div_1_td_145_Template, 2, 1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](146, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](147, GuardarFacturaComponent_div_1_th_147_Template, 2, 2, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](148, GuardarFacturaComponent_div_1_td_148_Template, 2, 1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](149, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](150, GuardarFacturaComponent_div_1_th_150_Template, 2, 2, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](151, GuardarFacturaComponent_div_1_td_151_Template, 3, 4, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](152, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](153, GuardarFacturaComponent_div_1_th_153_Template, 2, 2, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, GuardarFacturaComponent_div_1_td_154_Template, 3, 4, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](155, 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, GuardarFacturaComponent_div_1_th_156_Template, 2, 2, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](157, GuardarFacturaComponent_div_1_td_157_Template, 4, 8, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](158, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](159, GuardarFacturaComponent_div_1_th_159_Template, 2, 2, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](160, GuardarFacturaComponent_div_1_td_160_Template, 3, 4, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](161, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](162, GuardarFacturaComponent_div_1_th_162_Template, 1, 2, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](163, GuardarFacturaComponent_div_1_td_163_Template, 2, 1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](164, GuardarFacturaComponent_div_1_tr_164_Template, 1, 0, "tr", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](165, GuardarFacturaComponent_div_1_tr_165_Template, 1, 0, "tr", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "div", 81)(167, "div", 23)(168, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](171, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 83)(173, "div", 84)(174, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](176, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](179, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](182, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](183, GuardarFacturaComponent_div_1_span_183_Template, 3, 5, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](184, "div", 86)(185, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function GuardarFacturaComponent_div_1_Template_button_click_185_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r55.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](186, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](16);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](24);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](32);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](40);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](48);
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](107);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r1.facturaForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx_r1.displayFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.clientes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Raz\u00F3n Social: ", ctx_r1.facturaForm.get("cliente").value.razonSocial, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Domicilio: ", ctx_r1.facturaForm.get("cliente").value.domicilioFiscal || ctx_r1.facturaForm.get("cliente").value.direccion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("CUIT: ", ctx_r1.facturaForm.get("cliente").value.Cuit != "null" && ctx_r1.facturaForm.get("cliente").value.Cuit != null ? ctx_r1.facturaForm.get("cliente").value.Cuit : "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("IVA: ", ctx_r1.facturaForm.get("cliente").value.condicioniva_descripcion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.comprobantes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.puntosVenta);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.comprobantesAsociados);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.ventasAsociadas);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matAutocomplete", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx_r1.displayFnArticulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.articulos);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r1.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r1.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r1.facturaDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r1.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx_r1.observaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" Subtotal: ", ctx_r1.subtotal != 0 && ctx_r1.subtotal != undefined ? "$" : "", "", ctx_r1.subtotal != 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](176, 44, ctx_r1.subtotal, "1.2-2") : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("IVA: ", ctx_r1.totalIVA > 0 ? "$" : "", "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](179, 47, ctx_r1.totalIVA, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Bruto:", ctx_r1.bruto > 0 ? "$" : "", " ", ctx_r1.bruto != 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](182, 50, ctx_r1.bruto, "1.2-2") : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.cobro);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r1.color_primario || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r1.faltaFacturarVista > 10 || ctx_r1.bruto == 0 && ctx_r1.cobro)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](53, _c0, ctx_r1.faltaFacturarVista > 10 || ctx_r1.bruto == 0 && ctx_r1.cobro));
  }
}
const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'mm/dd/yyyy'
  },
  display: {
    dateInput: 'dd/MM/yyyy',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy'
  }
};
class GuardarFacturaComponent {
  constructor(router, route, textService, empresaService, facturacionService, alert, dialog) {
    this.router = router;
    this.route = route;
    this.textService = textService;
    this.empresaService = empresaService;
    this.facturacionService = facturacionService;
    this.alert = alert;
    this.dialog = dialog;
    this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    this.default_color = 'bg-primary';
    this.fechaActual = new Date();
    this.spinner = false;
    this.bruto = 0;
    this.puntosVenta = [];
    this.comprobantesAsociados = [];
    this.ventasAsociadas = [];
    this.articulos = [];
    this.facturaDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableDataSource([]);
    this.isEdicion = false;
    this.cobro = null;
    this.columns = ['detalle', 'cantidad', 'precio_unitario', 'subtotal', 'iva', 'total', 'acciones'];
    this.textService.setTitulo(this.router);
    if (this.router.url.split('/').includes('guardar-factura')) {
      this.idCobro = Number(this.router.url.split('/')[3].split('?')[0]);
    } else {
      this.idCobro = null;
    }
    if (this.router.url.split('/').includes('editar-factura')) {
      this.idFactura = Number(this.router.url.split('/')[3].split('?')[0]);
      this.isEdicion = true;
    }
  }
  ngOnInit() {
    this.empresaService.empresa$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._unsubscribeAll)).subscribe(empresa => {
      this.color_primario = empresa.color_primario;
      this.color_secundario = empresa.color_secundario;
    });
    if (this.isEdicion == true) {
      this.getDatosFactura().then(res => {
        this.getData().then(res => {
          this.newForm().then(res => {
            this.calcularImportes();
            this.spinner = false;
          });
        });
      });
    } else {
      if (this.idCobro) {
        this.getDatosCobro().then(res => {
          this.getData().then(res => {
            this.newForm().then(res => {
              this.spinner = false;
            });
          });
        });
      } else {
        this.newForm().then(res => {
          this.spinner = false;
        });
        this.getData();
      }
    }
  }
  initObservadores() {
    this.cantidadSub = this.facturaForm.get('cantidad').valueChanges.subscribe(value => {
      if (value > 0) {
        this.calcularImportes();
      } else {
        this.alert.error('La cantidad no puede ser menor a 1');
      }
    });
    this.precioUnitarioSub = this.facturaForm.get('precioUnitario').valueChanges.subscribe(value => {
      if (value > 0) {
        this.calcularImportes();
      } else {
        this.alert.error('El precio unitario no puede ser menor a 1');
      }
    });
    this.articulosSub = this.facturaForm.get('articulo').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(350), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.startWith)(' ')).subscribe(value => {
      if (typeof value == 'string') {
        this.getArticulos(value);
      }
    });
    this.clientesSub = this.facturaForm.get('cliente').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(350)).subscribe(value => {
      if (typeof value == 'string') {
        this.getClientes(value);
      } else {
        this.idcliente = value.codigo;
        this.getVentasAsociadas();
      }
    });
    this.comprobanteComboSub = this.facturaForm.get('comprobante').valueChanges.subscribe(value => {
      if (value != String) {
        this.getUltimoComprobanteAurorizado();
      }
      let isFactura = value.Desc.toLowerCase().split(' ').includes('factura');
      if (isFactura == true) {
        this.facturaForm.get('comprobanteAsociado').setValue('');
        this.facturaForm.get('comprobanteAsociado').disable();
      } else {
        let isCredito = value.Desc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ').includes('credito');
        let isDebito = value.Desc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ').includes('debito');
        if (isCredito == true) {
          let filter = `?filter[cliente]=${this.idcliente}&filter[generada]=1&filter[comprobante_asociado]=false`;
          this.getComprobantesAsociados(filter);
        }
        if (isDebito == true) {
          let filter = `?filter[cliente]=${this.idcliente}&filter[generada]=1&filter[comprobante_asociado]=true`;
          this.getComprobantesAsociados(filter);
        }
        this.facturaForm.get('comprobanteAsociado').setValue('');
        this.facturaForm.get('comprobanteAsociado').enable();
      }
    });
    this.puntoVentaSub = this.facturaForm.get('puntoVenta').valueChanges.subscribe(value => {
      if (value) {
        this.getUltimoComprobanteAurorizado();
      }
    });
  }
  getData() {
    var _this = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const resultados = yield Promise.all([_this.getClientes(), _this.getDatosEmpresa(), _this.getArticulos(' ')]);
      } catch (error) {
        _this.alert.error('Ocurrió un error al cargar los datos');
      }
    })();
  }
  getDatosFactura() {
    this.spinner = true;
    return new Promise((resolve, reject) => {
      let filter = `?id=${this.idFactura}`;
      this.facturacionService.getDatosFactura(filter).subscribe({
        next: res => {
          if (res.success == true) {
            this.factura = res.result.factura;
            this.facturaDataSource.data = res.result.items;
            this.facturaDataSource.data.forEach(item => {
              item.total = item.cantidad * item.importe_unitario;
            });
            this.idcliente = this.factura.cliente;
            resolve();
          }
        }
      });
    });
  }
  newForm() {
    return new Promise((resolve, reject) => {
      this.facturaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({
        fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? this.factura.fechaEmision : this.fechaActual, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        vencimientoPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? this.factura.fechaVencimientoPago : this.fechaActual, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        fechaDesde: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? this.factura.fechaServicioDesde : this.fechaActual, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        fechaHasta: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? this.factura.fechaServicioHasta : this.fechaActual, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
        comprobante: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? this.factura.tipoComprobante : '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({
          value: this.factura ? this.factura.numero : '',
          disabled: true
        }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        puntoVenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? Number(this.factura.puntoVenta) : '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        tipoPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? this.factura.contado : 0, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        comprobanteAsociado: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({
          value: this.factura ? this.factura.comprobante_asociado : '',
          disabled: this.factura?.comprobante_asociado ? false : true
        }),
        ventaAsociada: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? this.factura.idventa : '', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required),
        articulo: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
        cantidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
        precioUnitario: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(''),
        total: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl({
          value: '',
          disabled: true
        }),
        detalle: new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl('')
      });
      this.observaciones = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControl(this.factura ? this.factura.observaciones : ''), this.initObservadores();
      resolve();
    });
  }
  getUltimoComprobanteAurorizado() {
    let tipoComprobante = this.facturaForm.get('comprobante').value.Id;
    let puntoVenta = this.facturaForm.get('puntoVenta').value.toString();
    if (tipoComprobante && puntoVenta) {
      let payload = {
        puntoVenta: puntoVenta,
        tipoComprobante: tipoComprobante
      };
      this.facturacionService.getUltimoComprobanteAutorizado(payload).subscribe({
        next: res => {
          this.ultimoComprobanteAutorizado = res.result.comprobanteNro;
          this.facturaForm.get('numero').setValue(this.ultimoComprobanteAutorizado);
        }
      });
    }
  }
  calcularImportes() {
    let cantidad = this.facturaForm.get('cantidad').value;
    let precioUnitario = this.facturaForm.get('precioUnitario').value;
    let total = cantidad * precioUnitario;
    this.facturaForm.get('total').setValue(total);
    if (this.isEdicion == true) {
      this.facturaDataSource.data.forEach(item => {
        item.subtotal = item.cantidad * item.importe_unitario;
      });
      this.subtotal = Number(this.facturaDataSource.data.reduce((acc, item) => acc + Number(item.subtotal), 0));
      this.totalIVA = this.facturaDataSource.data.reduce((acc, item) => acc + Number(item.subtotal_iva), 0);
      this.bruto = this.facturaDataSource.data.reduce((acc, item) => acc + Number(item.total), 0) + this.totalIVA;
    }
  }
  calcularPrecioUnitario() {
    const articuloSeleccionado = this.facturaForm.get('articulo').value;
    if (!articuloSeleccionado) {
      return this.alert.error('Seleccione un artículo válido');
    }
    this.dialog.open(_calcular_unitario_calcular_unitario_component__WEBPACK_IMPORTED_MODULE_1__.CalcularUnitarioComponent, {
      data: articuloSeleccionado,
      panelClass: 'ayuda-dialog'
    }).afterClosed().subscribe({
      next: res => {
        if (res.success == true) {
          this.facturaForm.get('precioUnitario').setValue(res.result);
        }
      }
    });
  }
  displayFn(cliente) {
    return cliente && cliente.razonSocial ? cliente.razonSocial : '';
  }
  displayFnArticulos(articulo) {
    return articulo && articulo.descripcion ? articulo.descripcion : '';
  }
  getArticulos(value) {
    let filter = `?sort=descripcion&pagination=1&sort=-total_stock&per-page=10&page=0&filter[tipo][in][]=1&filter[tipo][in][]=2` + `&filter[descripcion][like]=${value}`;
    //let filterBusqueda: string = `&filter[descripcion][like]=${value}`;
    this.facturacionService.getArticulos(filter).subscribe({
      next: res => {
        this.articulos = res.result;
      }
    });
  }
  getClientes(value) {
    let filter;
    if (this.isEdicion == true && this.factura || this.cobro && !value) {
      filter = `?filter[codigo]=${this.idcliente}`;
    } else {
      filter = value ? `?filter[razonSocial][like]=${value}` : '';
    }
    this.facturacionService.getClientes(filter).subscribe({
      next: res => {
        this.clientes = res.result;
        if (this.cobro) {
          this.facturaForm.get('cliente').setValue(this.clientes[0]);
          this.getVentasAsociadas();
        }
        if (this.factura && this.isEdicion == true) {
          this.facturaForm.get('cliente').setValue(this.clientes[0]);
        }
      }
    });
  }
  getDatosEmpresa() {
    this.facturacionService.getDatosEmpresa().subscribe({
      next: res => {
        if (res.success == true) {
          this.comprobantes = res.result.comprobantes;
          let comprobantesValidos = ['factura', 'debito', 'credito'];
          this.comprobantes = this.comprobantes.filter(comprobante => comprobantesValidos.some(valid => comprobante.Desc.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').split(' ').includes(valid)));
          if (this.isEdicion == true && this.factura) {
            let comprobanteSeleccionado = this.comprobantes.filter(comprobante => comprobante.Id == this.factura.tipoComprobante);
            this.facturaForm.get('comprobante').setValue(comprobanteSeleccionado[0]);
          }
          this.puntosVenta = res.result.puntosVenta;
        } else {
          this.alert.error(res.mensaje);
        }
      }
    });
  }
  getVentasAsociadas() {
    let filter;
    filter = `?filter[idcliente]=${this.idcliente}`;
    this.facturacionService.getVentasAsociadas(filter).subscribe({
      next: res => {
        this.ventasAsociadas = res.result;
      }
    });
  }
  getComprobantesAsociados(value) {
    let filterUltimoComprobante = value + `?filter[numero]=${this.ultimoComprobanteAutorizado}`;
    this.facturacionService.getComprobantesAsociados(filterUltimoComprobante).subscribe({
      next: res => {
        this.comprobantesAsociados = res.result;
        if (this.isEdicion == true && this.factura.comprobante_asociado) {
          let comprobanteAsociado = this.comprobantesAsociados.filter(comprobanteAsoc => comprobanteAsoc.codigo == this.factura.comprobante_asociado);
          this.facturaForm.get('comprobanteAsociado').setValue(comprobanteAsociado[0]);
        }
      }
    });
  }
  getDatosCobro() {
    this.spinner = true;
    return new Promise((resolve, reject) => {
      let filter = `?filter[idcobro]=${this.idCobro}`;
      this.facturacionService.getDatosCobro(filter).subscribe({
        next: res => {
          this.cobro = res.result[0];
          this.idcliente = this.cobro.idcliente;
          this.faltaFacturarVista = Number(this.cobro.a_facturar); //Para mostrar en la vista
          this.montoFaltaFacturar = Number(this.cobro.a_facturar); //Para calculos
          resolve(true);
        }
      });
    });
  }
  goBack() {
    this.router.navigate(['/facturas']);
  }
  formatDate(date) {
    let fecha = new Date(date);
    let seconds = fecha.getSeconds().toString().padStart(2, '0');
    let minutes = fecha.getMinutes().toString().padStart(2, '0');
    let hours = fecha.getHours().toString().padStart(2, '0');
    let day = fecha.getDate().toString().padStart(2, '0');
    let month = (fecha.getMonth() + 1).toString().padStart(2, '0');
    let year = fecha.getFullYear();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  removeArticulo(articulo) {
    var _this2 = this;
    return (0,C_work_jeds_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.montoFaltaFacturar = (yield _this2.montoFaltaFacturar) + articulo.total;
      _this2.subtotal = (yield _this2.subtotal) - articulo.subtotal;
      _this2.totalIVA = (yield _this2.totalIVA) - articulo.importeIVA;
      _this2.bruto = (yield _this2.subtotal) + _this2.totalIVA;
      if (_this2.cobro) {
        _this2.faltaFacturarVista = _this2.montoFaltaFacturar;
        if (_this2.faltaFacturarVista == 0) {
          _this2.facturaForm.get('articulo').disable();
          _this2.facturaForm.get('cantidad').disable();
          _this2.facturaForm.get('precioUnitario').disable();
          _this2.facturaForm.get('detalle').disable();
        } else {
          _this2.facturaForm.get('articulo').enable();
          _this2.facturaForm.get('cantidad').enable();
          _this2.facturaForm.get('precioUnitario').enable();
          _this2.facturaForm.get('detalle').enable();
        }
      }
      _this2.facturaDataSource.data = _this2.facturaDataSource.data.filter(item => item.idarticulo != articulo.idarticulo);
    })();
  }
  addArticulo() {
    let articulo = this.facturaForm.get('articulo').value;
    let cantidad = this.facturaForm.get('cantidad').value;
    let precioUnitario = this.facturaForm.get('precioUnitario').value;
    let subtotal = cantidad * precioUnitario;
    let porcentajeIVA = Number(articulo.iva_porcentaje);
    let subtotal_iva = porcentajeIVA / 100 * subtotal;
    let detalle = `${articulo.codigo_interno} - ${this.facturaForm.get('detalle').value || articulo.descripcion}`;
    // Se formatean los numeros a 2 decimales (como dice el backendista que hace el back)
    let totalArticulo = Number((subtotal + subtotal_iva).toFixed(2));
    let diferencia = Number(Math.abs(this.faltaFacturarVista - totalArticulo).toFixed(2));
    if (this.cobro && diferencia > 10 && totalArticulo > this.faltaFacturarVista) {
      this.alert.error('El monto total del artículo excede el monto total a facturar.');
      return;
    }
    if (this.facturaDataSource.data.some(itemTabla => itemTabla.idarticulo == articulo.idarticulo)) {
      this.alert.error('No puede agregar el mismo artículo');
      return;
    }
    if (!articulo || !cantidad || !precioUnitario || !subtotal_iva || !porcentajeIVA || !subtotal || !detalle || !totalArticulo) {
      this.alert.error('Revise los campos del artículo');
      return;
    }
    let itemTabla = {
      idarticulo: articulo.idarticulo,
      cantidad: cantidad,
      importe_unitario: precioUnitario,
      subtotal: subtotal,
      porcentajeIVA: porcentajeIVA,
      subtotal_iva: subtotal_iva,
      detalle: detalle,
      total: totalArticulo
    };
    this.facturaDataSource.data = [...this.facturaDataSource.data, itemTabla];
    this.subtotal = this.facturaDataSource.data.reduce((acc, item) => acc + item.subtotal, 0);
    this.totalIVA = this.facturaDataSource.data.reduce((acc, item) => acc + item.subtotal_iva, 0);
    this.bruto = this.facturaDataSource.data.reduce((acc, item) => acc + item.total, 0);
    this.facturaForm.get('total').setValue('');
    this.facturaForm.get('articulo').setValue('');
    this.facturaForm.get('cantidad').setValue('');
    this.facturaForm.get('precioUnitario').setValue('');
    this.facturaForm.get('detalle').setValue('');
    if (this.cobro) {
      this.montoFaltaFacturar = this.montoFaltaFacturar - totalArticulo;
      this.faltaFacturarVista = this.montoFaltaFacturar;
      if (this.faltaFacturarVista == 0) {
        this.facturaForm.get('articulo').disable();
        this.facturaForm.get('cantidad').disable();
        this.facturaForm.get('precioUnitario').disable();
        this.facturaForm.get('detalle').disable();
      } else {
        this.facturaForm.get('articulo').enable();
        this.facturaForm.get('cantidad').enable();
        this.facturaForm.get('precioUnitario').enable();
        this.facturaForm.get('detalle').enable();
      }
    }
  }
  onSubmit() {
    let fechaEmision = this.formatDate(this.facturaForm.get('fecha').value);
    let fechaVencimientoPago = this.formatDate(this.facturaForm.get('vencimientoPago').value);
    let fechaDesde = this.formatDate(this.facturaForm.get('fechaDesde').value);
    let fechaHasta = this.formatDate(this.facturaForm.get('fechaHasta').value);
    if (this.faltaFacturarVista > 10) {
      this.alert.error('La diferencia está fuera del rango permitido');
      return;
    }
    if (this.facturaForm.valid == false) {
      this.alert.error('Verifique los campos del formulario');
      return;
    }
    let payload = {
      factura: {
        fechaEmision: fechaEmision,
        fechaVencimientoPago: fechaVencimientoPago,
        cliente: this.facturaForm.get('cliente').value.codigo,
        tipoComprobante: this.facturaForm.get('comprobante').value.Id,
        puntoVenta: this.facturaForm.get('puntoVenta').value.toString(),
        fechaServicioDesde: fechaDesde,
        fechaServicioHasta: fechaHasta,
        contado: this.facturaForm.get('tipoPago').value,
        comprobante_asociado: this.facturaForm.get('comprobanteAsociado').value.codigo || null,
        observaciones: this.observaciones.value || null,
        idventa: this.facturaForm.get('ventaAsociada').value || null,
        idcobro: this.idCobro || null
        //venta: null, // opcional
        //idventapago: null, // opcional
        //idcobroformapago: null, // opcional
      },

      items: this.facturaDataSource.data
    };
    payload.items.forEach(item => {
      delete item.total;
      delete item.importe_bonificado;
      delete item.importe_total;
      delete item.factura;
      delete item.porcentaje_bonificado;
      delete item.porcentajeIVA;
      delete item.importeIVA;
      delete item.subtotal;
      delete item.idstkarticulo;
      delete item.subtotal_iva;
    });
    if (this.isEdicion == true) {
      payload.items.forEach(item => {
        delete item.total;
        item.idstkarticulo != undefined ? item.idarticulo = item.idstkarticulo : '';
        delete item.importe_bonificado;
        delete item.importe_total;
        delete item.factura;
        delete item.porcentaje_bonificado;
        delete item.porcentajeIVA;
        delete item.importeIVA;
        delete item.subtotal;
        delete item.idstkarticulo;
        delete item.subtotal_iva;
      });
      this.facturacionService.editarFactura(payload, this.idFactura).subscribe({
        next: res => {
          if (res.success = true) {
            this.alert.success(res.mensaje);
            this.router.navigate(['/facturas']);
          } else {
            this.alert.error(res.mensaje);
          }
        }
      });
    } else {
      this.facturacionService.createFactura(payload).subscribe({
        next: res => {
          if (res.success = true) {
            this.alert.success(res.mensaje);
            this.router.navigate(['/facturas']);
          } else {
            this.alert.error(res.mensaje);
          }
        }
      });
    }
  }
  ngOnDestroy() {}
}
GuardarFacturaComponent.ɵfac = function GuardarFacturaComponent_Factory(t) {
  return new (t || GuardarFacturaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_components_header_text_header_text_service__WEBPACK_IMPORTED_MODULE_2__.HeaderTextService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_empresa_service__WEBPACK_IMPORTED_MODULE_3__.EmpresaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_facturacion_service__WEBPACK_IMPORTED_MODULE_4__.FacturacionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
};
GuardarFacturaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: GuardarFacturaComponent,
  selectors: [["app-guardar-factura"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MAT_DATE_FORMATS,
    useValue: MY_DATE_FORMATS
  }])],
  decls: 2,
  vars: 2,
  consts: [["class", "w-full h-full flex justify-center items-center", 4, "ngIf"], ["class", "w-full h-full flex flex-col px-4 py-2 overflow-y-auto inset-0 absolute", 4, "ngIf"], [1, "w-full", "h-full", "flex", "justify-center", "items-center"], [4, "ngIf"], [1, "w-full", "h-full", "flex", "flex-col", "px-4", "py-2", "overflow-y-auto", "inset-0", "absolute"], [1, "w-full", "flex", "justify-start", "items-center", "py-2"], [1, "flex", "items-center"], [1, "cursor-pointer", 3, "click"], [1, "font-semibold", "text-[#65758c]", "cursor-pointer", 3, "click"], [1, "w-full", "flex", "flex-col", "gap-2", 3, "formGroup"], [1, "w-full", "flex", "items-center", "gap-4"], [1, "flex", "flex-col", "w-2/12"], [1, "font-semibold", "text-[#323639]", "ml-1"], ["matInput", "", "formControlName", "fecha", "placeholder", "DD/MM/AAAA", 3, "matDatepicker"], ["matIconSuffix", "", 3, "for"], ["pickerFecha", ""], ["matInput", "", "formControlName", "vencimientoPago", "placeholder", "DD/MM/AAAA", 3, "matDatepicker"], ["pickerPago", ""], ["matInput", "", "formControlName", "fechaDesde", "placeholder", "DD/MM/AAAA", 3, "matDatepicker"], ["pickerDesde", ""], ["matInput", "", "formControlName", "fechaHasta", "placeholder", "DD/MM/AAAA", 3, "matDatepicker"], ["pickerHasta", ""], [1, "flex", "items-center", "w-4/12"], [1, "flex", "flex-col", "w-full"], [1, "w-full"], ["type", "text", "placeholder", "Seleccionar cliente", "matInput", "", "formControlName", "cliente", 3, "matAutocomplete"], [3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "w-full", "items-center", "flex", "gap-4", "pb-2"], [1, "w-4/12"], [1, "font-semibold", "text-lg"], [1, "w-2/12"], [1, "w-full", "flex", "gap-4", "mt-2"], [1, "w-4/12", "flex", "flex-col"], ["formControlName", "comprobante", "placeholder", "Seleccionar comprobante"], [1, "w-3/12", "flex", "flex-col"], ["formControlName", "puntoVenta", "placeholder", "Seleccionar punto de venta"], [1, "w-2/12", "flex", "flex-col"], ["matInput", "", "type", "number", "formControlName", "numero"], [1, "w-3/12", "flex", "justify-center", "items-center", "px-3"], ["formControlName", "tipoPago", 1, "w-full", "flex", "items-center", "gap-2"], [3, "value"], [1, "w-2/3", "flex", "gap-4"], [1, "w-1/2", "flex", "flex-col"], [1, "font-semibold", "text-[#323639]"], ["formControlName", "comprobanteAsociado"], ["formControlName", "ventaAsociada"], [1, "w-full", "flex", "gap-4"], ["type", "text", "placeholder", "Seleccionar art\u00EDculo", "matInput", "", "formControlName", "articulo", 3, "matAutocomplete"], ["autoArticulo", "matAutocomplete"], ["matInput", "", "type", "number", "formControlName", "cantidad", "placeholder", "Ingresar cantidad"], [1, "w-3/12", "flex", "gap-3"], [1, "w-10/12", "flex", "flex-col"], ["matInput", "", "type", "number", "formControlName", "precioUnitario", "placeholder", "Ingresar precio unitario"], [1, "ml-2"], [1, "w-2/12", "flex", "justify-center", "items-center"], ["mat-icon-button", "", 3, "click"], ["svgIcon", "jedstion:cotizar", 1, "icon-size-[40px]"], ["matInput", "", "type", "number", "formControlName", "total"], ["matTextPrefix", ""], [1, "w-full", "flex", "items-center"], [1, "w-11/12", "flex", "flex-col"], ["matInput", "", "formControlName", "detalle", "placeholder", "Ingresar detalle"], [1, "w-1/12", "flex", "justify-center", "items-center"], ["svgIcon", "jedstion:agregar", 1, "icon-size-[40px]"], [1, "w-full", "rounded-br-md", "drop-shadow-lg"], ["mat-table", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "detalle"], ["mat-header-cell", "", "class", "text-white rounded-tl-md", 3, "background-color", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cantidad"], ["mat-header-cell", "", "class", "text-white", 3, "background-color", 4, "matHeaderCellDef"], ["matColumnDef", "precio_unitario"], ["matColumnDef", "subtotal"], ["matColumnDef", "iva"], ["matColumnDef", "total"], ["matColumnDef", "acciones"], ["mat-header-cell", "", "class", "text-white rounded-tr-md", 3, "background-color", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "w-full", "flex", "items-center", "gap-4", "pt-4"], ["matInput", "", "placeholder", "Ingresar observaciones", 3, "formControl"], [1, "w-full", "flex", "justify-end", "items-center"], [1, "w-1/3", "flex", "flex-col", "p-2", "gap-1"], ["class", "font-semibold text-lg", 4, "ngIf"], [1, "w-full", "flex", "justify-end", "items-center", "pt-4"], ["mat-flat-button", "", 1, "rounded-md", "text-white", 3, "disabled", "ngClass", "click"], ["mat-header-cell", "", 1, "text-white", "rounded-tl-md"], ["mat-cell", ""], ["mat-header-cell", "", 1, "text-white"], ["mat-header-cell", "", 1, "text-white", "rounded-tr-md"], ["class", "flex justify-center", 4, "ngIf"], [1, "flex", "justify-center"], [1, "cursor-pointer", "hover:bg-gray-200", "p-5", "rounded-full", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function GuardarFacturaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, GuardarFacturaComponent_div_0_Template, 2, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, GuardarFacturaComponent_div_1_Template, 187, 55, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.spinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.spinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteTrigger, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__.MatRadioButton, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerToggle, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DecimalPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWFyZGFyLWZhY3R1cmEuY29tcG9uZW50LnNjc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92ZW50YXMvZmFjdHVyYWNpb24vY29tcG9uZW50cy9ndWFyZGFyLWZhY3R1cmEvZ3VhcmRhci1mYWN0dXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});


/***/ }),

/***/ 74642:
/*!******************************************************************!*\
  !*** ./src/app/modules/ventas/facturacion/facturacion.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacturacionModule": () => (/* binding */ FacturacionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 86477);
/* harmony import */ var _components_guardar_factura_guardar_factura_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/guardar-factura/guardar-factura.component */ 11449);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 86679);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 69542);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ 42556);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 83677);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 7672);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 76844);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 67486);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 98750);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 69941);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 4322);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/radio */ 8046);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 56508);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 95096);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 83348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ 46322);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ 52423);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/components/alert */ 17483);
/* harmony import */ var _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/tabla-dinamica/tabla-dinamica.module */ 11711);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/confirmation */ 25377);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/app/alert.service */ 26375);
/* harmony import */ var _shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/jeds-menu.service */ 92078);
/* harmony import */ var _services_facturacion_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/facturacion.service */ 21881);
/* harmony import */ var _components_facturas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/facturas.component */ 20069);
/* harmony import */ var _components_calcular_unitario_calcular_unitario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calcular-unitario/calcular-unitario.component */ 1440);
/* harmony import */ var _components_dialog_acciones_factura_dialog_acciones_dialog_acciones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dialog-acciones-factura/dialog-acciones/dialog-acciones.component */ 26714);
/* harmony import */ var _components_asociar_venta_asociar_venta_asociar_venta_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/asociar-venta/asociar-venta/asociar-venta.component */ 78253);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 86839);






























const routes = [{
  path: '',
  component: _components_facturas_component__WEBPACK_IMPORTED_MODULE_7__.FacturasComponent
}, {
  path: 'guardar-factura/:id',
  component: _components_guardar_factura_guardar_factura_component__WEBPACK_IMPORTED_MODULE_0__.GuardarFacturaComponent
}, {
  path: 'nueva-factura',
  component: _components_guardar_factura_guardar_factura_component__WEBPACK_IMPORTED_MODULE_0__.GuardarFacturaComponent
}, {
  path: 'editar-factura/:id',
  component: _components_guardar_factura_guardar_factura_component__WEBPACK_IMPORTED_MODULE_0__.GuardarFacturaComponent
}];
class FacturacionModule {}
FacturacionModule.ɵfac = function FacturacionModule_Factory(t) {
  return new (t || FacturacionModule)();
};
FacturacionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: FacturacionModule
});
FacturacionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  providers: [_shared_service_app_jeds_menu_service__WEBPACK_IMPORTED_MODULE_5__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_4__.AppAlertService, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe, _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_3__.FuseConfirmationService, _services_facturacion_service__WEBPACK_IMPORTED_MODULE_6__.FacturacionService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_1__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](FacturacionModule, {
    declarations: [_components_facturas_component__WEBPACK_IMPORTED_MODULE_7__.FacturasComponent, _components_guardar_factura_guardar_factura_component__WEBPACK_IMPORTED_MODULE_0__.GuardarFacturaComponent, _components_calcular_unitario_calcular_unitario_component__WEBPACK_IMPORTED_MODULE_8__.CalcularUnitarioComponent, _components_dialog_acciones_factura_dialog_acciones_dialog_acciones_component__WEBPACK_IMPORTED_MODULE_9__.DialogAccionesComponent, _components_asociar_venta_asociar_venta_asociar_venta_component__WEBPACK_IMPORTED_MODULE_10__.AsociarVentaComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_1__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__.MatAutocompleteModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckboxModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _shared_components_tabla_dinamica_tabla_dinamica_module__WEBPACK_IMPORTED_MODULE_2__.TablaDinamicaModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialogModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_27__.MatRadioModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 21881:
/*!****************************************************************************!*\
  !*** ./src/app/modules/ventas/facturacion/services/facturacion.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacturacionService": () => (/* binding */ FacturacionService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 86839);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33765);



class FacturacionService {
  constructor(http) {
    this.http = http;
  }
  calcularPrecioUnitario(payload) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.vta_venta_calcular_unitario}`, payload);
  }
  getClientes(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.clientes + filter);
  }
  getDatosEmpresa() {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.get_datos_empresa);
  }
  getVentasAsociadas(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_vta_ventas + filter);
  }
  getArticulos(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.stock.view_articulos + filter);
  }
  getComprobantesAsociados(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_fe_facturas + filter);
  }
  getUltimoComprobanteAutorizado(payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.ultimo_comprobante_autorizado, payload);
  }
  getFacturas(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_fe_facturas + filter);
  }
  getDatosFactura(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.get_datos_factura + filter);
  }
  createFactura(payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.fe_facturas, payload);
  }
  editarFactura(payload, idFactura) {
    return this.http.put(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.fe_facturas + '/' + idFactura, payload);
  }
  deleteFactura(codigoFactura) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.fe_facturas + '/' + codigoFactura);
  }
  generarComprobanteFactura(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.generar_comprobante_factura + filter);
  }
  imprimirFactura(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.reporte_comprobante_pdf + filter);
  }
  getDatosCobro(filter) {
    return this.http.get(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.view_vta_cobros + filter);
  }
  asociarCobro(payload) {
    return this.http.post(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.ventas.asociar_cobro, payload);
  }
}
FacturacionService.ɵfac = function FacturacionService_Factory(t) {
  return new (t || FacturacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
FacturacionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FacturacionService,
  factory: FacturacionService.ɵfac,
  providedIn: 'root'
});


/***/ })

}]);
//# sourceMappingURL=src_app_modules_ventas_facturacion_facturacion_module_ts.js.map