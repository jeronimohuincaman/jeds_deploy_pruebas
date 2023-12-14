"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_administracion_tratamientos_tratamientos_module_ts"],{

/***/ 21814:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/administracion/tratamientos/components/save/save.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_tratamientos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/tratamientos.service */ 44991);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 86515);
var _class;












class SaveComponent {
  constructor(data, tratamientosService, alert, menu) {
    this.data = data;
    this.tratamientosService = tratamientosService;
    this.alert = alert;
    this.menu = menu;
    this.columns = ['nombre', 'activo', 'acciones'];
    this.tratamiento = this.data ? this.data : null;
  }
  ngOnInit() {
    this.newForm();
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.tratamiento ? this.tratamiento.descripcion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      activo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.tratamiento ? this.tratamiento.activo : 1)
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      this.tratamiento = {
        ...this.tratamiento,
        descripcion: this.form.get('nombre').value,
        activo: this.form.get('activo').value
      };
      if (this.tratamiento.idtratamiento) {
        this.tratamientosService.updateTratamiento(this.tratamiento).subscribe({
          next: data => {
            if (data) {
              this.menu.close(data);
            }
          }
        });
      } else {
        this.tratamientosService.saveTratamiento(this.tratamiento).subscribe({
          next: data => {
            if (data) {
              this.menu.close(data);
            }
          }
        });
      }
    }
  }
  onCloseMenu() {
    this.menu.close(false);
  }
}
_class = SaveComponent;
_class.ɵfac = function SaveComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_tratamientos_service__WEBPACK_IMPORTED_MODULE_0__.TratamientosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_1__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_2__.JedsMenuService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-save-tratamiento"]],
  decls: 24,
  vars: 3,
  consts: [[1, "fixed", "inset-0", "sm:static", "max-h-screen", "sm:inset-auto", "flex", "flex-col", "sm:min-w-90", "sm:w-90", "sm:rounded-2xl", "overflow-y-auto", "overflow-hidden", "shadow-lg", "bg-white", "dark:bg-slate-900"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "nombre"], ["formControlName", "activo"], [3, "value"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "rounded-sm", 3, "click"]],
  template: function SaveComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nuevo Tratamiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div")(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_5_listener() {
        return ctx.onCloseMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 5)(9, "mat-form-field", 6)(10, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nombre");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-form-field", 6)(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Activo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-select", 8)(17, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "No");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Si");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 10)(22, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_22_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", 1);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 15737:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/administracion/tratamientos/components/tratamientos.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TratamientosComponent: () => (/* binding */ TratamientosComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save/save.component */ 21814);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_tratamientos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/tratamientos.service */ 44991);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 87963);

var _class;












function TratamientosComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TratamientosComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tratamiento_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tratamiento_r8.descripcion, " ");
  }
}
function TratamientosComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Activo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function TratamientosComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tratamiento_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tratamiento_r9.activo ? "Si" : "No", " ");
  }
}
function TratamientosComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 12)(1, "button", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TratamientosComponent_th_9_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12);
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r11.saveTratamiento(_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function TratamientosComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 11)(1, "button", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TratamientosComponent_td_10_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const tratamiento_r13 = restoredCtx.$implicit;
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.updateTratamiento(_r14, tratamiento_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 15, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TratamientosComponent_td_10_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const tratamiento_r13 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.deleteTratamiento(tratamiento_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function TratamientosComponent_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 20);
  }
}
function TratamientosComponent_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 21);
  }
}
class TratamientosComponent {
  constructor(tratamientosService, menu, confirm, alert) {
    this.tratamientosService = tratamientosService;
    this.menu = menu;
    this.confirm = confirm;
    this.alert = alert;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.columns = ['nombre', 'activo', 'acciones'];
  }
  ngOnInit() {
    this.getTratamientos();
  }
  /**
   * Esta funcion escucha el cambio de orden de la tabla
   */
  _sortChange($event) {
    $event ? this.sortValue = $event.direction : '';
    this.getTratamientos(this.sortValue);
  }
  /**
   *  -Funcion en el componente.-
   * - Funcion que comunica el componente con los servicios.
   * - Espera que se consulten los tratamientos del backend para almacenarlos en una variable.
   * - Teniendo la respuesta del backend en una variable, llama a la funcion 'getDataTratamientos' pasandole por parametro los tratamientos.
   */
  getTratamientos(filter) {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const sort = filter;
      const tratamientos = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this.tratamientosService.getTratamientos(sort));
      _this.getDataTratamientos(tratamientos);
    })();
  }
  /**
   *  -Funcion en el componente-
   * - Esta funcion toma los datos que se la pasan por parametro para crear una tabla con AngularMaterial.
   * @param data Aca se almacenan los tratamientos.
   */
  getDataTratamientos(data) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.tratamientos = data;
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(_this2.tratamientos);
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * Funcion en el componente
   * - Esta funcion guarda un tratamiento.
   * @param documentRef
   */
  saveTratamiento(documentRef) {
    this.menu.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, documentRef._elementRef, {}).afterClosed().subscribe({
      next: response => {
        if (response) {
          this._sortChange();
        }
      }
    });
  }
  /**
   * Funcion en el componente
   * - Esta funcion actualiza un tratamiento.
   * @param documentRef
   * @param tratamiento
   */
  updateTratamiento(documentRef, tratamiento) {
    this.menu.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, documentRef._elementRef, tratamiento).afterClosed().subscribe({
      next: response => {
        if (response) {
          this._sortChange();
        }
      }
    });
  }
  /**
   * Funcion en el componente
   * - Esta funcion elimina un tratamiento.
   * @param documentRef
   * @param tratamiento
   */
  deleteTratamiento(tratamiento) {
    this.confirm.open({
      title: `Eliminar tratamiento`,
      message: `¿Desea eliminar el tratamiento: "${tratamiento.descripcion}"?`,
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
        this.tratamientosService.deleteTratamiento(tratamiento.idtratamiento).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("tratamiento eliminado con éxito.");
            if (res) {
              this._sortChange();
            }
          },
          error: error => {
            // Manejar el error
            console.error('Error en el servicio:', error);
            this.alert.error("Este articulo no puede eliminarse. Está asociado a pedidos de materiales.");
          }
        });
      }
    });
  }
}
_class = TratamientosComponent;
_class.ɵfac = function TratamientosComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_tratamientos_service__WEBPACK_IMPORTED_MODULE_2__.TratamientosService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-tratamientos"]],
  decls: 13,
  vars: 4,
  consts: [[1, "w-full"], ["mat-table", "", "matSort", "", 1, "w-full", "mt-1", "mb-18", "shadow-lg", "mr-2", "ml-2", 3, "dataSource", "matSortChange"], ["matColumnDef", "nombre", 1, "bg-slate-300"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by nombre", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "activo"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by nombre"], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-button", "", 1, "bg-blue-500", "text-white", "rounded-md", 3, "click"], ["save", ""], ["mat-icon-button", "", 3, "click"], ["edit", ""], [1, "text-cyan-700"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function TratamientosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function TratamientosComponent_Template_table_matSortChange_1_listener($event) {
        return ctx._sortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TratamientosComponent_th_3_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TratamientosComponent_td_4_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, TratamientosComponent_th_6_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, TratamientosComponent_td_7_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, TratamientosComponent_th_9_Template, 4, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, TratamientosComponent_td_10_Template, 9, 0, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, TratamientosComponent_tr_11_Template, 1, 0, "tr", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, TratamientosComponent_tr_12_Template, 1, 0, "tr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortHeader],
  encapsulation: 2
});


/***/ }),

/***/ 44991:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/administracion/tratamientos/service/tratamientos.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TratamientosService: () => (/* binding */ TratamientosService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);
var _class;



class TratamientosService {
  constructor(http) {
    this.http = http;
  }
  /**
   * Funcion en el servicio
   * - Esta funcion retorna los tratamientos activos.
   * @returns tratamientos activos
   */
  getTratamientos(filter) {
    let f = '?';
    f += filter == 'desc' ? 'sort=-descripcion' : 'sort=descripcion';
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.tratamientos}${f}`);
  }
  /**
   * Funcion en el Servicio
   * @param tratamiento
   * @returns Un tratamiento nuevo
   */
  saveTratamiento(tratamiento) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.tratamientos}`, tratamiento);
  }
  /**
   * Funcion en el servicio
   * @param tratamiento
   * @returns tratamiento actualizado
   */
  updateTratamiento(tratamiento) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.tratamientos}` + '/' + tratamiento.idtratamiento, tratamiento);
  }
  /**
   * Funcion en el servicio
   * @param idtratamiento
   * @returns Elimina el tratamiento
   */
  deleteTratamiento(idtratamiento) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.tratamientos + '/' + idtratamiento);
  }
}
_class = TratamientosService;
_class.ɵfac = function TratamientosService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});


/***/ }),

/***/ 34875:
/*!****************************************************************************!*\
  !*** ./src/app/modules/administracion/tratamientos/tratamientos.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TratamientosModule: () => (/* binding */ TratamientosModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/components/alert */ 98184);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _components_tratamientos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tratamientos.component */ 15737);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 21814);
/* harmony import */ var _service_tratamientos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/tratamientos.service */ 44991);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;




















const routes = [{
  path: '',
  component: _components_tratamientos_component__WEBPACK_IMPORTED_MODULE_3__.TratamientosComponent
}];
class TratamientosModule {}
_class = TratamientosModule;
_class.ɵfac = function TratamientosModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_service_tratamientos_service__WEBPACK_IMPORTED_MODULE_5__.TratamientosService, _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TratamientosModule, {
    declarations: [_components_tratamientos_component__WEBPACK_IMPORTED_MODULE_3__.TratamientosComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 60331:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 31967);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 58559);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 71670:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ })

}]);
//# sourceMappingURL=src_app_modules_administracion_tratamientos_tratamientos_module_ts.js.map