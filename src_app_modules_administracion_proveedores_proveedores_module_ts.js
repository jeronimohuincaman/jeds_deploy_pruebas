"use strict";
(self["webpackChunkfuse"] = self["webpackChunkfuse"] || []).push([["src_app_modules_administracion_proveedores_proveedores_module_ts"],{

/***/ 80316:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/administracion/proveedores/components/proveedores.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedoresComponent: () => (/* binding */ ProveedoresComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _save_save_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save/save.component */ 45261);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_proveedores_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/proveedores.service */ 12851);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/confirmation */ 75012);
/* harmony import */ var _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/service/app/alert.service */ 53019);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sort */ 87963);

var _class;














function ProveedoresComponent_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "CUIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", proveedor_r21.cuit, " ");
  }
}
function ProveedoresComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Raz\u00F3n Social");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", proveedor_r22.RazonSocial, " ");
  }
}
function ProveedoresComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Direcci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", proveedor_r23.Direccion, " ");
  }
}
function ProveedoresComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Localidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", proveedor_r24.localidad_descripcion, " ");
  }
}
function ProveedoresComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", proveedor_r25.telefono, " ");
  }
}
function ProveedoresComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", proveedor_r26.Mail, " ");
  }
}
function ProveedoresComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", proveedor_r27.contacto, " ");
  }
}
function ProveedoresComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Numero de contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const proveedor_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", proveedor_r28.telefono, " ");
  }
}
function ProveedoresComponent_th_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 22)(1, "button", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProveedoresComponent_th_27_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31);
      const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r30.saveProveedor(_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Crear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}
function ProveedoresComponent_td_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20)(1, "button", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProveedoresComponent_td_28_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const proveedor_r32 = restoredCtx.$implicit;
      const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.updateProveedor(_r33, proveedor_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 25, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProveedoresComponent_td_28_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const proveedor_r32 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.deleteProveedor(proveedor_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ProveedoresComponent_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 30);
  }
}
function ProveedoresComponent_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 31);
  }
}
class ProveedoresComponent {
  constructor(proveedoresService, menu, confirm, alert) {
    this.proveedoresService = proveedoresService;
    this.menu = menu;
    this.confirm = confirm;
    this.alert = alert;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource();
    this.columns = ['cuit', 'razon_social', 'direccion', 'localidad', 'telefono', 'email', 'contacto', 'numero_contacto', 'acciones'];
    // MatPaginator atributos
    this.totalRows = 0;
    this.pageSize = 25;
    this.currentPage = 0;
    this.pageSizeOptions = [5, 10, 25, 50, 100];
  }
  ngOnInit() {
    this.getProveedores();
  }
  /**
   * Esta funcion escucha el cambio de orden de la tabla
   */
  _sortChange($event) {
    if ($event) {
      if ($event.direction == 'desc') {
        this.sortValue = $event.direction;
      } else if ($event.direction == 'asc') {
        this.sortValue == $event.direction;
      } else {
        this.sortValue = 'asc';
      }
    }
    this.getProveedores(this.sortValue);
  }
  /**
   *  -Funcion en el componente.-
   * - Funcion que comunica el componente con los servicios.
   * - Espera que se consulten los proveedores del backend para almacenarlos en una variable.
   * - Teniendo la respuesta del backend en una variable, llama a la funcion 'getDataproveedores' pasandole por parametro los proveedores.
   */
  getProveedores(sort) {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //Le envia el filtro al servicio y recibe como respuesta los proveedores paginados con los valores que seteamos antes del constructor.
      const proveedores = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.firstValueFrom)(_this.proveedoresService.getProveedores({
        pagination: 1,
        perpage: _this.pageSize,
        currentPage: _this.currentPage + 1,
        sort
      }));
      _this.getDataProveedores(proveedores);
    })();
  }
  /**
   *  -Funcion en el componente-
   * - Esta funcion toma los datos que se la pasan por parametro para crear una tabla con AngularMaterial.
   * @param data Aca se almacenan los proveedores.
   */
  getDataProveedores(data) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.proveedores = data.list;
          if (!!_this2.paginator) {
            _this2.paginator.pageIndex = _this2.currentPage;
            _this2.paginator.length = data['totalCount'];
          }
          _this2.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTableDataSource(_this2.proveedores);
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  /**
   * -Funcion en el componente-
   * * Setea la nueva cantidad de items que se quiere mostrar por pagina a las variables del componente y asi actualizar la pagina con la nueva cantidad.
   * @param event Es la modificacion en el template de cuantos items se quiere mostrar por pagina.
   */
  actualizarPagina(event) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.getProveedores();
  }
  /**
   * Funcion en el componente
   * - Esta funcion guarda un Proveedor.
   * @param documentRef
   */
  saveProveedor(documentRef) {
    this.menu.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, documentRef._elementRef, {
      panelClass: "my-panel"
    }).afterClosed().subscribe({
      next: response => {
        if (response) {
          this._sortChange();
        }
      }
    });
  }
  /**
   * Funcion en el componente
   * - Esta funcion actualiza un Proveedor.
   * @param documentRef
   * @param Proveedor
   */
  updateProveedor(documentRef, Proveedor) {
    this.menu.open(_save_save_component__WEBPACK_IMPORTED_MODULE_1__.SaveComponent, documentRef._elementRef, Proveedor).afterClosed().subscribe({
      next: response => {
        if (response) {
          this._sortChange();
        }
      }
    });
  }
  /**
   * Funcion en el componente
   * - Esta funcion elimina un Proveedor.
   * @param documentRef
   * @param Proveedor
   */
  deleteProveedor(Proveedor) {
    this.confirm.open({
      title: `Eliminar Proveedor`,
      message: `¿Desea eliminar el Proveedor: "${Proveedor.RazonSocial}"?`,
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
        this.proveedoresService.deleteProveedor(Proveedor.Codigo).subscribe({
          next: data => {
            // Manejar la respuesta exitosa
            this.alert.success("Proveedor eliminado con éxito.");
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
_class = ProveedoresComponent;
_class.ɵfac = function ProveedoresComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_proveedores_service__WEBPACK_IMPORTED_MODULE_2__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_fuse_services_confirmation__WEBPACK_IMPORTED_MODULE_4__.FuseConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_5__.AppAlertService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-proveedores"]],
  viewQuery: function ProveedoresComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 33,
  vars: 8,
  consts: [[1, "w-full"], ["mat-table", "", "matSort", "", 1, "w-full", "mt-1", "mb-18", "shadow-lg", "mr-2", "ml-2", 3, "dataSource", "matSortChange"], ["matColumnDef", "cuit"], ["class", "bg-slate-300 shadow-sm", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "razon_social"], ["mat-sort-header", "", "sortActionDescription", "Sort by razon social", "class", "bg-slate-300", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "direccion"], ["class", "bg-slate-300", "mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "localidad"], ["matColumnDef", "telefono"], ["matColumnDef", "email"], ["matColumnDef", "contacto"], ["matColumnDef", "numero_contacto"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 1, "fixed", "bottom-0", "w-full", "z-50", 3, "length", "pageIndex", "pageSize", "pageSizeOptions", "page"], ["paginator", ""], ["mat-header-cell", "", 1, "bg-slate-300", "shadow-sm"], ["mat-cell", ""], ["mat-sort-header", "", "sortActionDescription", "Sort by razon social", "mat-header-cell", "", 1, "bg-slate-300"], ["mat-header-cell", "", 1, "bg-slate-300"], ["mat-button", "", 1, "bg-blue-500", "text-white", "rounded-md", 3, "click"], ["save", ""], ["mat-icon-button", "", 3, "click"], ["edit", ""], [1, "text-cyan-700"], ["delete", ""], ["color", "warn"], ["mat-header-row", ""], ["mat-row", ""]],
  template: function ProveedoresComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "table", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function ProveedoresComponent_Template_table_matSortChange_1_listener($event) {
        return ctx._sortChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProveedoresComponent_th_3_Template, 2, 0, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ProveedoresComponent_td_4_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProveedoresComponent_th_6_Template, 2, 0, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ProveedoresComponent_td_7_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ProveedoresComponent_th_9_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProveedoresComponent_td_10_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ProveedoresComponent_th_12_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ProveedoresComponent_td_13_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ProveedoresComponent_th_15_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ProveedoresComponent_td_16_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ProveedoresComponent_th_18_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ProveedoresComponent_td_19_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](20, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ProveedoresComponent_th_21_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ProveedoresComponent_td_22_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](23, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ProveedoresComponent_th_24_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ProveedoresComponent_td_25_Template, 2, 1, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](26, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ProveedoresComponent_th_27_Template, 4, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ProveedoresComponent_td_28_Template, 9, 0, "td", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ProveedoresComponent_tr_29_Template, 1, 0, "tr", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ProveedoresComponent_tr_30_Template, 1, 0, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-paginator", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function ProveedoresComponent_Template_mat_paginator_page_31_listener($event) {
        return ctx.actualizarPagina($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx.totalRows)("pageIndex", ctx.currentPage)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_12__.MatSortHeader],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 45261:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/administracion/proveedores/components/save/save.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaveComponent: () => (/* binding */ SaveComponent)
/* harmony export */ });
/* harmony import */ var E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 60331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75043);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _service_proveedores_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/proveedores.service */ 12851);
/* harmony import */ var app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/service/app/alert.service */ 53019);
/* harmony import */ var _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/service/app/menu.service */ 17588);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);

var _class;














function SaveComponent_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const localidad_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", localidad_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", localidad_r2.descripcion, " - ", localidad_r2.provincia0.descripcion, " ");
  }
}
class SaveComponent {
  constructor(data, proveedoresService, alert, menu) {
    this.data = data;
    this.proveedoresService = proveedoresService;
    this.alert = alert;
    this.menu = menu;
    this.columns = ['cuit', 'razon_social', 'direccion', 'localidad', 'telefono', 'email', 'contacto', 'numero_contacto', 'acciones'];
    this.localidades = [];
    this.proveedor = this.data ? this.data : null;
    this.title = this.proveedor?.Codigo ? 'Editar Proveedor' : 'Nuevo Proveedor';
  }
  ngOnInit() {
    this.newForm();
    this.getLocalidades();
  }
  newForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      cuit: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.proveedor ? this.proveedor.cuit : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(11)]),
      razon_social: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.proveedor ? this.proveedor.RazonSocial : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.proveedor ? this.proveedor.Direccion : '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      localidad: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.proveedor ? this.proveedor.Mail : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.proveedor ? this.proveedor.telefono : ''),
      contacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.proveedor ? this.proveedor.contacto : ''),
      mail_alternativo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(this.proveedor?.mail_alternativo ? this.proveedor.mail_alternativo : '')
    });
  }
  /**
  *  -Funcion en el componente.-
  * - Funcion que comunica el componente con los servicios.
  * - Espera que se consulten los proveedores del backend para almacenarlos en una variable.
  * - Teniendo la respuesta del backend en una variable, llama a la funcion 'getDataLocalidades' pasandole por parametro las localidades.
  */
  getLocalidades() {
    var _this = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const filter = '?expand=provincia0';
      const localidades = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.firstValueFrom)(_this.proveedoresService.getLocalidades(filter));
      yield _this.getDataLocalidades(localidades);
    })();
  }
  /**
   * Le asigna la respuesta del backend a data.
   * @param data
   */
  getDataLocalidades(data) {
    var _this2 = this;
    return (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      new Promise( /*#__PURE__*/function () {
        var _ref = (0,E_515731145_jedstion_source_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this2.localidades = data;
          _this2.filteredLocalidades = _this2.form.get('localidad').valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(value => _this2._filterLocalidades(value)));
          if (_this2.proveedor && _this2.localidades) {
            const localidad = _this2.localidades.filter(localidad => localidad.codigo == _this2.proveedor.Localidad);
            _this2.form.get('localidad').setValue(localidad[0]);
          }
          resolve(true);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  _filterLocalidades(localidad) {
    const filterValue = localidad.toString().toLowerCase();
    return this.localidades.filter(localidad => localidad.descripcion.toLowerCase().includes(filterValue));
  }
  getTextLocalidad(option) {
    return option ? option.descripcion + ' - ' + option.provincia0.descripcion : '';
  }
  onSubmit() {
    if (!this.form.valid) {
      return this.alert.warning('Revise Los Datos Ingresados');
    } else {
      this.proveedor = {
        ...this.proveedor,
        RazonSocial: this.form.get('razon_social').value,
        Localidad: this.form.get('localidad').value.codigo,
        cuit: this.form.get('cuit').value,
        Direccion: this.form.get('direccion').value,
        Mail: this.form.get('email').value,
        telefono: this.form.get('telefono').value,
        contacto: this.form.get('contacto').value,
        mail_alternativo: this.form.get('mail_alternativo').value
      };
      if (this.proveedor.Codigo) {
        this.proveedoresService.updateProveedor(this.proveedor).subscribe({
          next: data => {
            if (data) {
              this.menu.close(data);
            }
          }
        });
      } else {
        this.proveedoresService.saveProveedor(this.proveedor).subscribe({
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
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"]('MENU_DATA'), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_proveedores_service__WEBPACK_IMPORTED_MODULE_1__.ProveedoresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](app_shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_3__.JedsMenuService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-save-proveedor"]],
  decls: 52,
  vars: 7,
  consts: [[1, "fixed", "inset-0", "bg-white", "dark:bg-slate-900", "shadow-lg", "overflow-hidden", "overflow-y-auto", "sm:rounded-2xl", "md:min-w-[50rem]", "sm:w-90", "sm:min-w-90", "flex-col", "flex", "sm:inset-auto", "max-h-screen", "sm:static"], [1, "w-full", "px-4", "py-4", "bg-primary", "flex", "justify-between", "items-center"], [1, "text-white", "font-bold", "text-lg"], ["mat-icon-button", "", 3, "click"], [1, "text-white"], [1, "flex", "flex-col", "w-full", "h-full", "p-4", "form-menu", 3, "formGroup"], [1, "flex"], ["appearance", "outline", 1, "w-2/5", "pr-2"], ["matInput", "", "formControlName", "cuit"], ["appearance", "outline", 1, "w-3/5", "pl-2"], ["matInput", "", "formControlName", "razon_social"], ["appearance", "outline", 1, "w-3/5", "pr-2"], ["matInput", "", "formControlName", "direccion"], ["appearance", "outline", 1, "w-2/5"], ["type", "text", "matInput", "", "formControlName", "localidad", "formControlName", "localidad", 3, "matAutocomplete"], ["autoActiveFirstOption", "", 3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "telefono"], ["matInput", "", "formControlName", "email"], ["matInput", "", "formControlName", "mail_alternativo"], ["appearance", "outline", 1, "w-2/5", "pl-2"], ["matInput", "", "formControlName", "contacto"], [1, "w-full", "md:flex", "justify-center", "pb-4", "md:px-4"], ["mat-raised-button", "", "color", "accent", 1, "rounded-sm", 3, "click"], [3, "value"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 5)(9, "div", 6)(10, "mat-form-field", 7)(11, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "N\u00B0 CUIT (ej: 30123456789) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 9)(15, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Raz\u00F3n Social ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6)(19, "mat-form-field", 11)(20, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Direcci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-form-field", 13)(24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Seleccionar localidad ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-autocomplete", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, SaveComponent_mat_option_29_Template, 2, 3, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 6)(32, "mat-form-field", 7)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Telefono (ej: 2995452331)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-form-field", 9)(37, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 6)(41, "mat-form-field", 11)(42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Email Alternativo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-form-field", 21)(46, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Contacto");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 23)(50, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SaveComponent_Template_button_click_50_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " Guardar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.getTextLocalidad);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 5, ctx.filteredLocalidades));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});


/***/ }),

/***/ 9751:
/*!**************************************************************************!*\
  !*** ./src/app/modules/administracion/proveedores/proveedores.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedoresModule: () => (/* binding */ ProveedoresModule)
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
/* harmony import */ var _components_proveedores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/proveedores.component */ 80316);
/* harmony import */ var _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/save/save.component */ 45261);
/* harmony import */ var _service_proveedores_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/proveedores.service */ 12851);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ 99892);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
var _class;






















const routes = [{
  path: '',
  component: _components_proveedores_component__WEBPACK_IMPORTED_MODULE_3__.ProveedoresComponent
}];
class ProveedoresModule {}
_class = ProveedoresModule;
_class.ɵfac = function ProveedoresModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  providers: [_service_proveedores_service__WEBPACK_IMPORTED_MODULE_5__.ProveedoresService, _shared_service_app_menu_service__WEBPACK_IMPORTED_MODULE_1__.JedsMenuService, _shared_service_app_alert_service__WEBPACK_IMPORTED_MODULE_2__.AppAlertService],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes), _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ProveedoresModule, {
    declarations: [_components_proveedores_component__WEBPACK_IMPORTED_MODULE_3__.ProveedoresComponent, _components_save_save_component__WEBPACK_IMPORTED_MODULE_4__.SaveComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelectModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIconModule, _fuse_components_alert__WEBPACK_IMPORTED_MODULE_0__.FuseAlertComponent, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltipModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__.MatAutocompleteModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
  });
})();

/***/ }),

/***/ 12851:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/administracion/proveedores/service/proveedores.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedoresService: () => (/* binding */ ProveedoresService)
/* harmony export */ });
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 54860);
var _class;




class ProveedoresService {
  constructor(http) {
    this.http = http;
  }
  /**
   * -Funcion en el servicio-
   * - Esta funcion retorna los proveedores.
   * - Configura los filtros para el paginado.
   * @param filter
   * @returns proveedores
   */
  getProveedores(filter) {
    //Se aplican filtro, o no, para el paginado.
    let f = '?';
    f += filter?.sort == 'desc' ? `sort=-RazonSocial&` : '';
    f += filter?.pagination ? 'pagination=1&' : '';
    f += filter?.perpage ? 'per-page=' + filter.perpage + '&' : '';
    f += filter?.currentPage ? 'page=' + filter.currentPage + '&' : '';
    var subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.view_proveedores}${f}`, {
      observe: 'response'
    }).subscribe(resp => {
      subject.next({
        'list': resp.body,
        'totalPages': resp.headers.get('x-pagination-page-count'),
        'totalCount': resp.headers.get('x-pagination-total-count')
      });
    });
    return subject.asObservable();
  }
  getProveedor(idp) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.view_proveedores}/${idp}`);
  }
  /**
   * Funcion en el servicio
   * - Esta funcion retorna los localidades .
   * @returns localidades
   */
  getLocalidades(filter) {
    return this.http.get(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.localidades}${filter} `);
  }
  /**
   * Funcion en el Servicio
   * @param proveedor
   * @returns Un proveedor nuevo
   */
  saveProveedor(proveedor) {
    return this.http.post(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.proveedores}`, proveedor);
  }
  /**
   * Funcion en el servicio
   * @param proveedor
   * @returns proveedor actualizado
   */
  updateProveedor(proveedor) {
    return this.http.put(`${environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.proveedores}` + '/' + proveedor.Codigo, proveedor);
  }
  /**
   * Funcion en el servicio
   * @param codigoProveedor
   * @returns Elimina el proveedor
   */
  deleteProveedor(codigoProveedor) {
    return this.http.delete(environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.administracion.proveedores + '/' + codigoProveedor);
  }
}
_class = ProveedoresService;
_class.ɵfac = function ProveedoresService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac
});


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
//# sourceMappingURL=src_app_modules_administracion_proveedores_proveedores_module_ts.js.map