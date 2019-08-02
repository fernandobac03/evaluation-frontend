(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-evaluation/app-evaluation.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-evaluation/app-evaluation.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<p>{{persona_id}}</p>\r\n<app-app-individual></app-app-individual>\r\n<button routerLink=\"/end\">Terminar</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-final/app-final.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-final/app-final.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Usted ha finalizado la evaluación, gracias por su colaboración\r\n</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-individual/app-individual.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-individual/app-individual.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Enlaces evaluados: {{num_evaluation}}</p>\r\n<div class=\"maindiv\">\r\n<table class=\"table table-hover\" id=\"tabla\">\r\n  <thead>\r\n  <tr>\r\n    <th style=\"width: 50%; \">Recurso_A</th>\r\n    <th style=\"width: 50%; \">Recurso B</th>\r\n   </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n\r\n  <tr>\r\n    <td>\r\n      <table>\r\n        <tbody>\r\n        <!--<tr>\r\n          <td  style=\"width: 20%; \">{{ datos[0][0]['property']? datos[0][0]['property'] : 's' }}</td>\r\n          <td><a href=\"{{ datos[0][0]['value'] }}\" target=\"_blank\">Link Recurso A </a></td>\r\n        </tr>\r\n        -->\r\n        <tr *ngFor=\"let result of datos[0]\">\r\n          <td>{{result['property']}}</td>\r\n          <td>{{ result['property']=='URL' ? ''  : result['value'] }}\r\n          <a *ngIf=\" result['property']=='URL' \" href=\"{{result['value']}}\" target=\"_blank\">{{result['value']}}</a>\r\n          </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </td>\r\n    <td>\r\n      <table>\r\n        <tbody>\r\n        <!--<tr>\r\n          <td  style=\"width: 20%; \">{{ datos[1][0]['property'] }}</td>\r\n          <td><a href=\"{{ datos[1][0]['value'] }}\" target=\"_blank\">Link Recurso B</a> </td>\r\n        </tr>\r\n        -->\r\n        <tr *ngFor=\"let result of datos[1]\">\r\n          <td>{{ result['property'] }}</td>\r\n          <td>{{ result['property']=='URL' ? ''  : result['value'] }}\r\n            <a *ngIf=\" result['property']=='URL' \" href=\"{{result['value']}}\" target=\"_blank\">{{result['value']}}</a>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </td>\r\n\r\n    <!--<td><a [routerLink]=\"['/edit', pair.id]\" class=\"btn btn-primary\">Edit</a></td>\r\n      <td><a [routerLink]=\"\" class=\"btn btn-danger\">Delete</a></td>-->\r\n  </tr>\r\n  <tr>\r\n    <td colspan=\"2\" align=\"center\">\r\n      <app-app-map></app-app-map>\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td>\r\n      <h4>Seleccione una opcion:</h4>\r\n      <button (click) = \"setDecision('Igual',1, pairs[0].id)\"  value=\"1\">Iguales</button>\r\n      <button (click) = \"setDecision('No son Igual',2, pairs[0].id)\"  value=\"2\">No son Iguales</button>\r\n      <button (click) = \"setDecision('No lo se',3, pairs[0].id)\"  value=\"3\">No lo sé</button>\r\n    </td>\r\n    <td>\r\n    <h4>Opción seleccionada:</h4> {{selected_evaluacion_texto}}\r\n    </td>\r\n  </tr>\r\n  <tr>\r\n    <td >\r\n    <button (click) = \"setEvaluation()\" class=\"btn btn-primary\" routerLink=\"/evaluar\">Enviar</button>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-map/app-map.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-map/app-map.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<button (click)=\"mostrarEnMapa()\">Visualizar Recursos en el Mapa</button>-->\n<div id=\"map\" class=\"map\"></div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-start/app-start.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-start/app-start.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n  <div class=\"starter-template\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-12 mt-5\">\r\n\r\n        <h3>{{ titulo }} </h3>\r\n\r\n        <form [formGroup]=\"formmeta\" (ngSubmit)=\"onSubmit()\">\r\n          <!--<div class=\"form-group\">\r\n            <label>Nombres y Apellidos</label>\r\n            <input type=\"text\" formControlName=\"nya\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nya.errors }\" />\r\n            <div *ngIf=\"submitted && f.nya.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.nya.errors.required\">Por favor, ingresa tus Nombres y Apellidos</div>\r\n            </div>\r\n          </div>-->\r\n\r\n          <div class=\"form-group\">\r\n            <label > Carrera/Escuela</label>\r\n            <select class=\"form-control\" formControlName=\"escuela\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && f.escuela.errors }\">\r\n              <option value=\"\">Seleccionar</option>\r\n              <option value=\"Sistemas\">Sistemas/Ciencias de la Computación</option>\r\n              <option value=\"Civil\">Civil</option>\r\n              <option value=\"Arquitectura\">Arquitectura</option>\r\n              <option value=\"Agronomía\">Agronomía</option>\r\n              <option value=\"Geomática\">Geomática</option>\r\n\r\n            </select>\r\n            <div *ngIf=\"submitted && f.escuela.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.escuela.errors.required\">Por favor, Seleccione su escuela</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label > Edad</label>\r\n            <select class=\"form-control\" formControlName=\"edad\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && f.edad.errors }\">\r\n              <option value=\"\">Seleccionar</option>\r\n              <option value=\"0\">menor que 17</option>\r\n              <option value=\"17\">17</option>\r\n              <option value=\"18\">18</option>\r\n              <option value=\"19\">19</option>\r\n              <option value=\"20\">20</option>\r\n              <option value=\"21\">21</option>\r\n              <option value=\"22\">22</option>\r\n              <option value=\"23\">23</option>\r\n              <option value=\"24\">24</option>\r\n              <option value=\"25\">25</option>\r\n              <option value=\"26\">26</option>\r\n              <option value=\"27\">27</option>\r\n              <option value=\"28\">28</option>\r\n              <option value=\"29\">29</option>\r\n              <option value=\"30\">30</option>\r\n              <option value=\"31\">31</option>\r\n              <option value=\"32\">32</option>\r\n              <option value=\"33\">33</option>\r\n              <option value=\"34\">34</option>\r\n              <option value=\"35\">35</option>\r\n              <option value=\"36\">36</option>\r\n              <option value=\"37\">37</option>\r\n              <option value=\"38\">38</option>\r\n              <option value=\"39\">39</option>\r\n              <option value=\"40\">40</option>\r\n              <option value=\"100\">mayor que 40</option>\r\n\r\n            </select>\r\n            <div *ngIf=\"submitted && f.edad.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.edad.errors.required\">Por favor, Seleccione su edad</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label > Género</label>\r\n            <select class=\"form-control\" formControlName=\"genero\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && f.genero.errors }\">\r\n              <option value=\"\">Seleccionar</option>\r\n              <option value=\"m\">Femenino</option>\r\n              <option value=\"f\">Masculino</option>\r\n            </select>\r\n            <div *ngIf=\"submitted && f.genero.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.genero.errors.required\">Por favor, Seleccione su sexo</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!--\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"text\" formControlName=\"email\" class=\"form-control\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"/>\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.email.errors.required\">El email es obligatorio</div>\r\n              <div *ngIf=\"f.email.errors.email\">Por favor, ingresa tu Email</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Asunto</label>\r\n            <input type=\"text\" formControlName=\"asunto\" class=\"form-control\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.asunto.errors }\"/>\r\n            <div *ngIf=\"submitted && f.asunto.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.asunto.errors.required\">Por favor, ingresa el Asunto</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"postre\"> Postre</label>\r\n            <select class=\"form-control\" formControlName=\"postre\"\r\n                    [ngClass]=\"{ 'is-invalid': submitted && f.postre.errors }\">\r\n              <option value=\"\">Seleccionar</option>\r\n              <option value=\"Crema Volteada\">Crema Volteada</option>\r\n              <option value=\"Gelatina de Fresa\">Gelatina de Fresa</option>\r\n              <option value=\"Keke de Naranja\">Keke de Naranja</option>\r\n              <option value=\"Pie de Manzana\">Pie de Manzana</option>\r\n              <option value=\"Torta de Chocolate\">Torta de Chocolate</option>\r\n\r\n            </select>\r\n            <div *ngIf=\"submitted && f.postre.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.postre.errors.required\">Por favor, Selecciona el Postre</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"mensaje\">Mensaje</label>\r\n            <textarea class=\"form-control\" formControlName=\"mensaje\" rows=\"3\"\r\n                      [ngClass]=\"{ 'is-invalid': submitted && f.mensaje.errors }\"></textarea>\r\n            <div *ngIf=\"submitted && f.mensaje.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.mensaje.errors.required\">Por favor, ingresa el Mensaje ( 6 Caracteres mínimo )</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Continuar</button>\r\n          </div>\r\n        -->\r\n          <div class=\"form-group\">\r\n            <button (click) = \"addPerson(f.escuela.value, f.edad.value, f.genero.value)\" type=\"submit\" class=\"btn btn-primary\"\r\n                    [disabled]=\"formmeta.pristine || formmeta.invalid\" routerLink=\"/evaluar\">\r\n              Continuar\r\n            </button>\r\n\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Evaluación de {{ title }}\r\n  </h1>\r\n  <!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n  -->\r\n</div>\r\n<!--<h4>Soporte: </h4>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"http://linkeddata.ec/\">Silabos</a></h2>\r\n  </li>\r\n</ul>\r\n-->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align: center\">\n<div>\n  <h3>Página no encontrada.</h3>\n</div>\n<div>\n  <h3>Para iniciar una evaluación, por favor diríjase a la siguiente página:</h3>\n    <h3><a href=\"http://linkeddata.ec/appevaluation\">http://linkeddata.ec/appevaluation</a></h3>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-evaluation/app-evaluation.component.css":
/*!*************************************************************!*\
  !*** ./src/app/app-evaluation/app-evaluation.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1ldmFsdWF0aW9uL2FwcC1ldmFsdWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app-evaluation/app-evaluation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/app-evaluation/app-evaluation.component.ts ***!
  \************************************************************/
/*! exports provided: AppEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEvaluationComponent", function() { return AppEvaluationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppEvaluationComponent = /** @class */ (function () {
    function AppEvaluationComponent() {
    }
    AppEvaluationComponent.prototype.ngOnInit = function () {
    };
    AppEvaluationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-evaluation',
            template: __webpack_require__(/*! raw-loader!./app-evaluation.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-evaluation/app-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./app-evaluation.component.css */ "./src/app/app-evaluation/app-evaluation.component.css")]
        })
    ], AppEvaluationComponent);
    return AppEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/app-final/app-final.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-final/app-final.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1maW5hbC9hcHAtZmluYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app-final/app-final.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-final/app-final.component.ts ***!
  \**************************************************/
/*! exports provided: AppFinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFinalComponent", function() { return AppFinalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppFinalComponent = /** @class */ (function () {
    function AppFinalComponent() {
    }
    AppFinalComponent.prototype.ngOnInit = function () {
    };
    AppFinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-final',
            template: __webpack_require__(/*! raw-loader!./app-final.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-final/app-final.component.html"),
            styles: [__webpack_require__(/*! ./app-final.component.css */ "./src/app/app-final/app-final.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppFinalComponent);
    return AppFinalComponent;
}());



/***/ }),

/***/ "./src/app/app-individual/app-individual.component.css":
/*!*************************************************************!*\
  !*** ./src/app/app-individual/app-individual.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\r\n  background-color: green !important;\r\n}\r\n\r\n.maindiv{\r\n  padding: 3%;\r\n}\r\n\r\ntable{\r\n  table-layout: fixed;\r\n  width: 100%;\r\n\r\n}\r\n\r\nth, td {\r\n  border: 1px solid darkgray;\r\n  word-wrap: break-word;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWluZGl2aWR1YWwvYXBwLWluZGl2aWR1YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXOztBQUViOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FwcC1pbmRpdmlkdWFsL2FwcC1pbmRpdmlkdWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbmRpdntcclxuICBwYWRkaW5nOiAzJTtcclxufVxyXG50YWJsZXtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxudGgsIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JheTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app-individual/app-individual.component.ts":
/*!************************************************************!*\
  !*** ./src/app/app-individual/app-individual.component.ts ***!
  \************************************************************/
/*! exports provided: AppIndividualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppIndividualComponent", function() { return AppIndividualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jsonld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonld */ "./node_modules/jsonld/lib/jsonld.js");
/* harmony import */ var jsonld__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonld__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_map_app_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-map/app-map.component */ "./src/app/app-map/app-map.component.ts");








var AppIndividualComponent = /** @class */ (function () {
    function AppIndividualComponent(appser, mapc, router) {
        this.appser = appser;
        this.mapc = mapc;
        this.router = router;
        this.persona_id = '';
        this.selected_evaluacion_texto = '';
        this.querystring = '';
        this.datos = [];
        this.datosgeo = [];
        this.labels = [];
    }
    AppIndividualComponent.prototype.setDecision = function (texto, evaluacion, id_par) {
        this.selected_evaluacion_texto = texto;
        this.selected_evaluacion = evaluacion;
        this.selected_id_par = id_par;
    };
    AppIndividualComponent.prototype.setEvaluation = function () {
        if (this.persona_id == 'No Persona_ID') {
            alert("No ha ingresado sus datos");
            this.router.navigate(['/iniciar']);
        }
        else {
            if (this.selected_evaluacion_texto != '') {
                this.appser.setEvaluation(this.selected_evaluacion, this.persona_id, this.selected_id_par).subscribe(function (res) {
                    console.log("Response: ");
                    console.log(res['body']);
                });
                this.appser.sumEvaluation(this.num_evaluation + 1);
                this.iniciar();
                this.mapc.clearMap();
                this.selected_evaluacion_texto = '';
            }
            else {
                alert("No ha seleccionado una respuesta");
            }
        }
    };
    AppIndividualComponent.prototype.ngOnInit = function () {
        this.iniciar();
        this.mapc.iniciar();
        this.mapc.clearMap();
    };
    AppIndividualComponent.prototype.iniciar = function () {
        var _this = this;
        this.datos = [];
        this.labels = [];
        this.datosgeo = [];
        this.appser.currentEvaluation.subscribe(function (num_evaluation) { return _this.num_evaluation = num_evaluation; });
        this.appser.currentMessage.subscribe(function (message) { return _this.persona_id = message; });
        this.appser
            .getPairs(1)
            .subscribe(function (data) {
            _this.pairs = data;
            _this.loadFullData(_this.pairs);
        });
    };
    AppIndividualComponent.prototype.loadFullData = function (fulldata) {
        var paraconexion;
        paraconexion = this.getSelectedEndpointData(fulldata[0]['uri_a']);
        this.loadfullDataFromURI(paraconexion[0], paraconexion[1], paraconexion[2], paraconexion[3], paraconexion[4]);
        paraconexion = this.getSelectedEndpointData(fulldata[0]['uri_b']);
        this.loadfullDataFromURI(paraconexion[0], paraconexion[1], paraconexion[2], paraconexion[3], paraconexion[4]);
    };
    AppIndividualComponent.prototype.getSelectedEndpointData = function (uri) {
        var context = {
            foaf: 'http://xmlns.com/foaf/0.1/',
            rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
            geoec: 'http://linkeddata.ec/ontology#',
            geo: 'http://www.opengis.net/ont/geosparql#',
            schema: 'http://schema.org/',
            rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
            dbpedia: 'http://dbpedia.org/ontology/',
            dbpediaproperty: 'http://dbpedia.org/property/',
            wgs84: 'http://www.w3.org/2003/01/geo/wgs84_pos#',
            owl: 'http://www.w3.org/2002/07/owl#sameAs',
            prov: 'http://www.w3.org/ns/prov#',
            geoecresource: 'http://linkeddata.ec/resource/',
            dct: 'http://purl.org/dc/terms/',
            lgdorg: 'http://linkedgeodata.org/ontology/'
        };
        var prefix = ''
            + ' PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> '
            + ' PREFIX geoec: <http://linkeddata.ec/ontology#> '
            + ' PREFIX geo: <http://www.opengis.net/ont/geosparql#> '
            + ' PREFIX schema: <http://schema.org/> '
            + ' PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> '
            + ' PREFIX dbpedia: <http://dbpedia.org/ontology/> '
            + ' PREFIX dbpediaproperty: <http://dbpedia.org/property/> '
            + ' PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#> '
            + ' PREFIX owl: <http://www.w3.org/2002/07/owl#> '
            + ' PREFIX prov: <http://www.w3.org/ns/prov#> '
            + ' PREFIX geoecresource: <http://linkeddata.ec/resource/>'
            + ' PREFIX dct: <http://purl.org/dc/terms/> '
            + ' PREFIX lgdorg: <http://linkedgeodata.org/ontology/>';
        var geoecQuery = prefix + ' CONSTRUCT { ' +
            ' <{0}> rdfs:label ?label. ' +
            ' <{0}> rdf:type ?types. ' +
            ' <{0}> geo:asWKT ?wkt. ' +
            '} ' +
            'WHERE { ' +
            ' <{0}> rdfs:label ?label. ' +
            ' OPTIONAL { ' +
            '   <{0}> rdf:type ?types. ' +
            '   <{0}> geo:hasDefaultGeometry  ?geo. ' +
            '   ?geo geo:asWKT ?wkt. }' +
            ' FILTER ( lang(?label) = "es" ) .' +
            ' } limit 100 ';
        var dbpediaQuery = prefix + ' CONSTRUCT { ' +
            ' <{0}> rdfs:label ?label. ' +
            ' <{0}> rdf:type ?types. ' +
            ' <{0}> dbpedia:abstract ?abstract.' +
            ' <{0}> dbpedia:country ?country.' +
            ' <{0}> wgs84:geometry ?geo. ' +
            '} ' +
            ' WHERE { ' +
            ' <{0}> rdfs:label ?label. ' +
            ' Optional { <{0}> rdf:type ?types. }' +
            ' Optional { <{0}> dbpedia:abstract ?abstract. }' +
            ' Optional { <{0}> dbpedia:country ?country. }' +
            ' Optional { <{0}> wgs84:geometry ?geo. } ' +
            ' FILTER ( lang(?label) = "es" || lang(?abstract) = "en" ) .' +
            ' FILTER ( lang(?abstract) = "es" || lang(?abstract) = "en" ) .' +
            '} limit 100 ';
        var ignQuery = prefix + ' CONSTRUCT { ' +
            ' <{0}> rdfs:label ?label. ' +
            ' <{0}> rdf:type ?types. ' +
            ' <{0}> geo:asWKT ?wkt. ' +
            '} ' +
            'WHERE { ' +
            ' OPTIONAL { <{0}> dct:title ?label. FILTER ( lang(?label) = "es" ) . }' +
            ' OPTIONAL { <{0}> rdf:type ?types. }' +
            ' OPTIONAL { <{0}> geo:hasGeometry  ?geo. ' +
            '             ?geo geo:asWKT ?wkt. }' +
            ' } limit 100 ';
        var lgdorgQuery = prefix + ' CONSTRUCT { ' +
            ' <{0}> rdfs:label ?label. ' +
            ' <{0}> lgdorg:source ?source. ' +
            ' <{0}> rdf:type ?types. ' +
            ' <{0}> geo:asWKT ?wkt. ' +
            '} ' +
            'WHERE { ' +
            ' OPTIONAL { <{0}> rdfs:label ?label. FILTER ( lang(?label) = "es" ) } ' +
            ' OPTIONAL {  <{0}> rdf:type ?types. }' +
            ' OPTIONAL {  <{0}> lgdorg:source ?source. }' +
            ' OPTIONAL {  <{0}> <http://geovocab.org/geometry#geometry>  ?geo. ' +
            '             ?geo geo:asWKT ?wkt. }' +
            ' } limit 100 ';
        var data = [];
        if (uri.includes('linkeddata.ec')) {
            data.push(uri);
            data.push(prefix);
            data.push(context);
            data.push(geoecQuery);
            data.push(1);
        }
        if (uri.includes('dbpedia')) {
            data.push(uri);
            data.push(prefix);
            data.push(context);
            data.push(dbpediaQuery);
            data.push(2);
        }
        if (uri.includes('ign')) {
            data.push(uri);
            data.push(prefix);
            data.push(context);
            data.push(ignQuery);
            data.push(3);
        }
        if (uri.includes('linkedgeodata')) {
            data.push(uri);
            data.push(prefix);
            data.push(context);
            data.push(lgdorgQuery);
            data.push(4);
        }
        return data;
    };
    AppIndividualComponent.prototype.loadfullDataFromURI = function (uriResource, prefix, context, query, endpointType) {
        var _this = this;
        this.querystring = this.appser.stringFormat(query, uriResource);
        this.appser.getFromTripleStore(endpointType, this.querystring).subscribe(function (results) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var datosaux, datosauxgeo, modelId, dataFromJLD, compacted, i, model, value;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.fromendpoint = results;
                        datosaux = [];
                        datosauxgeo = '';
                        modelId = {};
                        modelId['property'] = 'URL';
                        modelId['value'] = uriResource;
                        datosaux.push(modelId);
                        return [4 /*yield*/, jsonld__WEBPACK_IMPORTED_MODULE_4__["compact"](this.fromendpoint, context)];
                    case 1:
                        // @ts-ignore
                        dataFromJLD = _a.sent();
                        compacted = dataFromJLD['@graph'] ? dataFromJLD['@graph'] : dataFromJLD;
                        for (i in compacted) {
                            if (i !== '@context') {
                                model = {};
                                model['property'] = i;
                                value = compacted[i]['@id'] ? compacted[i]['@id'] : compacted[i]['@value'] ? compacted[i]['@value'] : compacted[i];
                                model['value'] = value;
                                if (model['property'] != '@type') {
                                    model['value'] = Object(util__WEBPACK_IMPORTED_MODULE_5__["isArray"])(model['value']) ? model['value'][0]['@value'] : model['value'];
                                }
                                datosaux.push(model);
                                if (model['property'] == "geo:asWKT" || model['property'] == "wgs84:geometry") {
                                    datosauxgeo = model['value'];
                                    console.log(datosauxgeo);
                                    this.mapc.prepareFeature(model['value']);
                                    this.mapc.drawFeature();
                                }
                                if (model['property'] == "rdfs:label") {
                                    this.labels.push(model['value'].toUpperCase());
                                }
                            }
                        }
                        // jsonld.compact(this.fromendpoint, context, function (err, compacted) {
                        //   compacted = compacted['@graph'] ? compacted['@graph'] : compacted
                        //   for (const i in compacted) {
                        //     if (i != "@context") {
                        //       var model = {};
                        //       model['property'] = i;
                        //       model['value'] = compacted[i]['@id'] ? compacted[i]['@id'] : compacted[i]['@value'] ? compacted[i]['@value'] : compacted[i];
                        //       datosaux.push(model);
                        //       if (model['property'] == "geo:asWKT" || model['property'] == "wgs84:geometry") {
                        //         console.log(model['value'])
                        //         datosauxgeo = model['value'];
                        //         console.log(datosauxgeo)
                        //       }
                        //     }
                        //   }
                        // });
                        this.datosgeo.push(datosauxgeo);
                        this.datos.push(datosaux);
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AppIndividualComponent.prototype.ngOnChanges = function (changes) {
        //console.log(changes);
    };
    AppIndividualComponent.prototype.ngDoCheck = function () {
        setTimeout(function () {
            //console.log(" ");
        }, 1000);
        //console.log('Método DoCheck lanzado');
    };
    AppIndividualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-individual',
            template: __webpack_require__(/*! raw-loader!./app-individual.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-individual/app-individual.component.html"),
            styles: [__webpack_require__(/*! ./app-individual.component.css */ "./src/app/app-individual/app-individual.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _app_map_app_map_component__WEBPACK_IMPORTED_MODULE_6__["AppMapComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppIndividualComponent);
    return AppIndividualComponent;
}());



/***/ }),

/***/ "./src/app/app-map/app-map.component.css":
/*!***********************************************!*\
  !*** ./src/app/app-map/app-map.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map{\r\n  width: 70%;\r\n  height: 25%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLW1hcC9hcHAtbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLW1hcC9hcHAtbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwe1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app-map/app-map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/app-map/app-map.component.ts ***!
  \**********************************************/
/*! exports provided: AppMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMapComponent", function() { return AppMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_Collection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Collection.js */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_layer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer.js */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_source_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source.js */ "./node_modules/ol/source.js");
/* harmony import */ var ol_format_WKT_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/format/WKT.js */ "./node_modules/ol/format/WKT.js");
/* harmony import */ var ol_style_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/style.js */ "./node_modules/ol/style.js");
/* harmony import */ var ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/interaction/Draw.js */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var ol_proj__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_interaction_Select_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/interaction/Select.js */ "./node_modules/ol/interaction/Select.js");
/* harmony import */ var ol_events_condition_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/events/condition.js */ "./node_modules/ol/events/condition.js");














var AppMapComponent = /** @class */ (function () {
    function AppMapComponent(appser) {
        this.appser = appser;
        this.latitude = -1.00;
        this.longitude = -79.00;
        this.features = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
        this.current_shape = "point";
        this.fill = new ol_style_js__WEBPACK_IMPORTED_MODULE_9__["Fill"]({
            color: 'rgba(180, 145, 4,0.6)'
        });
        this.stroke = new ol_style_js__WEBPACK_IMPORTED_MODULE_9__["Stroke"]({
            color: '#b49104',
            width: 5
        });
        // text = new style.Text({
        //   font: '12px Calibri,sans-serif',
        //   fill: new Fill({ color: '#000' }),
        //   stroke: new Stroke({
        //     color: '#fff', width: 2
        //   }),
        //   // get the text from the feature - `this` is ol.Feature
        //   // and show only under certain resolution
        //   text: 'algo'
        // })
        this.styles = [
            new ol_style_js__WEBPACK_IMPORTED_MODULE_9__["Style"]({
                image: new ol_style_js__WEBPACK_IMPORTED_MODULE_9__["Circle"]({
                    fill: this.fill,
                    stroke: this.stroke,
                    //text: this.text,
                    radius: 7
                }),
                fill: this.fill,
                stroke: this.stroke
            })
        ];
        this.format = new ol_format_WKT_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
        this.select = null; // ref to currently selected interaction
        // select interaction working on "pointermove"
        this.selectPointerMove = new ol_interaction_Select_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
            condition: ol_events_condition_js__WEBPACK_IMPORTED_MODULE_13__["pointerMove"]
        });
    }
    AppMapComponent.prototype.ngOnChanges = function (changes) {
        this.changeInteraction();
    };
    AppMapComponent.prototype.ngOnInit = function () {
    };
    AppMapComponent.prototype.iniciar = function () {
        this.createVector();
        this.raster = new ol_layer_js__WEBPACK_IMPORTED_MODULE_6__["Tile"]({
            source: new ol_source_js__WEBPACK_IMPORTED_MODULE_7__["OSM"]()
        });
        this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
            layers: [this.raster, this.vector],
            target: 'map',
            view: new ol_View_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
                center: Object(ol_proj__WEBPACK_IMPORTED_MODULE_11__["fromLonLat"])([this.longitude, this.latitude]),
                zoom: 7
            })
        });
        //this.setCenter();
    };
    AppMapComponent.prototype.setCenter = function () {
        var view = this.map.getView();
        view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
        view.setZoom(7);
    };
    AppMapComponent.prototype.addInteraction = function (shape) {
        this.draw = new ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
            features: this.features,
            type: /** @type {ol.geom.GeometryType} */ shape
        });
        this.map.addInteraction(this.draw);
    };
    AppMapComponent.prototype.createVector = function () {
        this.vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_6__["Vector"]({
            source: new ol_source_js__WEBPACK_IMPORTED_MODULE_7__["Vector"]({ features: this.features }),
            style: this.styles
        });
    };
    AppMapComponent.prototype.prepareFeature = function (WKT) {
        var newFeature;
        if (!WKT || WKT === '') {
            console.log('No WKT String');
            return;
        }
        else {
            if (WKT.startsWith('<http://www.opengis.net/def/crs/EPSG/0/4326>')) {
                console.log('Eliminando prefix en WKT');
                WKT = WKT.substr(45);
            }
            try {
                newFeature = this.format.readFeature(WKT.toString());
            }
            catch (err) {
                console.log("No Read WKT ");
            }
        }
        if (!newFeature) {
            console.log('Geometria no ha sido recuperada correctamente');
            return;
        }
        else {
            this.map.removeLayer(this.vector);
            newFeature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
            this.features.push(newFeature);
        }
    };
    AppMapComponent.prototype.drawFeature = function () {
        this.vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_6__["Vector"]({
            source: new ol_source_js__WEBPACK_IMPORTED_MODULE_7__["Vector"]({ features: this.features }),
            style: this.styles
        });
        //this.selectGeom(this.current_shape);
        this.map.addLayer(this.vector);
        var derived_feature = this.features.getArray()[0];
        var extent = derived_feature.getGeometry().getExtent();
        var minx = derived_feature.getGeometry().getExtent()[0];
        var miny = derived_feature.getGeometry().getExtent()[1];
        var maxx = derived_feature.getGeometry().getExtent()[2];
        var maxy = derived_feature.getGeometry().getExtent()[3];
        var centerx = (minx + maxx) / 2;
        var centery = (miny + maxy) / 2;
        this.map.setView(new ol_View_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
            center: [minx, miny],
            zoom: 15
        }));
        //this.map.getView().fit(extent, this.map.getSize());
    };
    AppMapComponent.prototype.changeInteraction = function () {
        if (this.select !== null) {
            this.map.removeInteraction(this.select);
        }
        this.select = this.selectPointerMove;
        if (this.select !== null) {
            this.map.addInteraction(this.select);
            this.select.on('select', function (e) {
                console.log("clik en el Feature");
            });
        }
    };
    //   plotWKT(WKTA, WKTB) { //para dibujar dos geometrías al mismo tiempo--- no se utiliza
    //     let newFeatureA;
    //     let newFeatureB;
    //     console.log('Geometría A')
    //     console.log(WKTA)
    //     console.log('Geometría B')
    //     console.log(WKTB)
    //
    //     if (!WKTA || WKTA === '') {
    //       console.log('No WKTA String')
    //       return;
    //     } else {
    //       if (!WKTA.startsWith('POINT')){
    //       console.log('Eliminando prefix en WKTA')
    //       WKTA = WKTA.substr(45);
    //       }
    //       try {
    //       newFeatureA = this.format.readFeature(WKTA.toString());
    //       } catch (err) {
    //         console.log("No Read WKT A")
    //       }
    //     }
    //     if (!WKTB || WKTB === '') {
    //       console.log('No WKTB String')
    //       return;
    //     } else {
    //       if (!WKTB.startsWith('POINT')){
    //         console.log('Eliminando prefix en WKTB')
    //         WKTB = WKTB.substr(45);
    //       }
    //       try {
    //         newFeatureB = this.format.readFeature(WKTB.toString());
    //       } catch (err) {
    //         console.log("No Read WKT B")
    //       }
    //     }
    //     this.features.clear();
    //     if (!newFeatureA) {
    //     console.log('Geometria A no ha sido recuperada correctamente')
    //     return;
    //   } else {
    //       this.map.removeLayer(this.vector);
    //       newFeatureA.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    //     this.features.push(newFeatureA);
    //   }
    //     if (!newFeatureB) {
    //       console.log('Geometría B no ha sido recuperada correctamente')
    //       return;
    //     } else {
    //       this.map.removeLayer(this.vector);
    //       newFeatureB.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    //       this.features.push(newFeatureB);
    //     }
    //   this.vector = new ol.layer.Vector({
    //     source: new ol.source.Vector({features: this.features}),
    //     style: this.styles
    //   });
    //   this.selectGeom(this.current_shape);
    //   this.map.addLayer(this.vector);
    //   var derived_feature = this.features.getArray()[0];
    //   var extent = derived_feature.getGeometry().getExtent();
    //   var minx = derived_feature.getGeometry().getExtent()[0];
    //   var miny = derived_feature.getGeometry().getExtent()[1];
    //   var maxx = derived_feature.getGeometry().getExtent()[2];
    //   var maxy = derived_feature.getGeometry().getExtent()[3];
    //   var centerx = (minx + maxx) / 2;
    //   var centery = (miny + maxy) / 2;
    //    this.map.setView(new ol.View({
    //        center: [minx, miny],
    //        zoom: 13
    //      })
    //    );
    //   //this.map.getView().fit(extent, this.map.getSize());
    // }
    // mostrarEnMapa() {
    //     this.appser.currentWKTs.subscribe(WKTs =>  {
    //      const wktA = WKTs[0];
    //      const wktB = WKTs[1];
    //      this.plotWKT(wktA, wktB);
    //     });
    //   }
    AppMapComponent.prototype.clearMap = function () {
        this.features.clear();
        this.map.removeLayer(this.vector);
        this.features.clear();
        this.vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_6__["Vector"]({
            source: new ol_source_js__WEBPACK_IMPORTED_MODULE_7__["Vector"]({ features: this.features }),
            style: this.styles
        });
        //this.selectGeom(this.current_shape);
        this.map.addLayer(this.vector);
    };
    AppMapComponent.prototype.selectGeom = function (shape) {
        this.current_shape = shape;
        this.map.removeInteraction(this.draw);
        this.addInteraction(shape);
    };
    AppMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-map',
            template: __webpack_require__(/*! raw-loader!./app-map.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-map/app-map.component.html"),
            styles: [__webpack_require__(/*! ./app-map.component.css */ "./src/app/app-map/app-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], AppMapComponent);
    return AppMapComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_start_app_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-start/app-start.component */ "./src/app/app-start/app-start.component.ts");
/* harmony import */ var _app_evaluation_app_evaluation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-evaluation/app-evaluation.component */ "./src/app/app-evaluation/app-evaluation.component.ts");
/* harmony import */ var _app_final_app_final_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-final/app-final.component */ "./src/app/app-final/app-final.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");







var routes = [
    {
        path: 'iniciar',
        component: _app_start_app_start_component__WEBPACK_IMPORTED_MODULE_3__["AppStartComponent"]
    },
    {
        path: 'evaluar',
        component: _app_evaluation_app_evaluation_component__WEBPACK_IMPORTED_MODULE_4__["AppEvaluationComponent"]
    },
    {
        path: 'end',
        component: _app_final_app_final_component__WEBPACK_IMPORTED_MODULE_5__["AppFinalComponent"]
    },
    {
        path: '',
        redirectTo: 'iniciar',
        pathMatch: 'full'
    },
    { path: '404', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
    { path: '**', redirectTo: '/404' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: 'reload'
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-start/app-start.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-start/app-start.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC1zdGFydC9hcHAtc3RhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app-start/app-start.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-start/app-start.component.ts ***!
  \**************************************************/
/*! exports provided: AppStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStartComponent", function() { return AppStartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");




var AppStartComponent = /** @class */ (function () {
    function AppStartComponent(formBuilder, appser) {
        this.formBuilder = formBuilder;
        this.appser = appser;
        this.submitted = false;
        this.titulo = 'Por Favor, responde las siguientes preguntas para continuar';
    }
    AppStartComponent.prototype.addPerson = function (escuela, edad, genero) {
        var _this = this;
        this.appser.addPerson(escuela, edad, genero).subscribe(function (res) { console.log("Response: "); console.log(res['body']); _this.appser.changeMessage(res['body']['persona_id']); }
        /*res => { console.log("Response: ")}*/
        );
    };
    AppStartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appser.currentEvaluation.subscribe(function (num_evaluation) { return _this.num_evaluation = num_evaluation; });
        this.formmeta = this.formBuilder.group({
            escuela: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            edad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            genero: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            /*email: ['', [Validators.required, Validators.email]],
            mensaje: ['', [Validators.required, Validators.minLength(6)]]
             */
        });
    };
    Object.defineProperty(AppStartComponent.prototype, "f", {
        get: function () { return this.formmeta.controls; },
        enumerable: true,
        configurable: true
    });
    AppStartComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.formmeta.invalid) {
            return;
        }
        /*alert('Mensaje Enviado !');*/
    };
    AppStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-start',
            template: __webpack_require__(/*! raw-loader!./app-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-start/app-start.component.html"),
            styles: [__webpack_require__(/*! ./app-start.component.css */ "./src/app/app-start/app-start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], AppStartComponent);
    return AppStartComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Links SameAs';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_start_app_start_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-start/app-start.component */ "./src/app/app-start/app-start.component.ts");
/* harmony import */ var _app_evaluation_app_evaluation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-evaluation/app-evaluation.component */ "./src/app/app-evaluation/app-evaluation.component.ts");
/* harmony import */ var _app_individual_app_individual_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-individual/app-individual.component */ "./src/app/app-individual/app-individual.component.ts");
/* harmony import */ var _app_final_app_final_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-final/app-final.component */ "./src/app/app-final/app-final.component.ts");
/* harmony import */ var _app_map_app_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-map/app-map.component */ "./src/app/app-map/app-map.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _app_start_app_start_component__WEBPACK_IMPORTED_MODULE_9__["AppStartComponent"],
                _app_evaluation_app_evaluation_component__WEBPACK_IMPORTED_MODULE_10__["AppEvaluationComponent"],
                _app_individual_app_individual_component__WEBPACK_IMPORTED_MODULE_11__["AppIndividualComponent"],
                _app_final_app_final_component__WEBPACK_IMPORTED_MODULE_12__["AppFinalComponent"],
                _app_map_app_map_component__WEBPACK_IMPORTED_MODULE_13__["AppMapComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], _app_map_app_map_component__WEBPACK_IMPORTED_MODULE_13__["AppMapComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        /*baseuri = 'http://192.168.100.6:5000';*/
        this.baseuri = 'http://201.159.223.25:8081';
        this.geoecuri = 'http://linkeddata.ec/repositories/test'; /*-> Será tipo 1*/
        this.dbpediauri = 'http://dbpedia.org/sparql'; /*-> Será tipo 2*/
        this.ignes = 'http://linkeddata.ec/repositories/ignEs'; /*-> Será tipo 3*/
        this.lgdorg = 'http://linkedgeodata.org/sparql'; /*-> Será tipo 4*/
        this.endpointuri = this.geoecuri;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('No Persona_ID');
        this.currentMessage = this.messageSource.asObservable();
        this.numSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.currentEvaluation = this.numSource.asObservable();
        this.wkts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.currentWKTs = this.wkts.asObservable();
        this.wktA = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('No wkt');
        this.currentWKTA = this.wktA.asObservable();
    }
    AppService.prototype.addPerson = function (escuela, edad, genero) {
        var obj = {
            escuela: escuela,
            edad: edad,
            genero: genero
        };
        console.log('Request: ');
        console.log(obj);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            observe: 'response',
        };
        return this.http.post(this.baseuri + "/geolinkeddata/service/storage/add", obj, httpOptions);
    };
    AppService.prototype.getPairs = function (param) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('param', param);
        return this
            .http
            .get(this.baseuri + '/geolinkeddata/service/storage/get', { params: params });
    };
    AppService.prototype.setEvaluation = function (evaluacion, id_persona, id_par) {
        var obj = {
            evaluacion: evaluacion,
            id_persona: id_persona,
            id_par: id_par
        };
        console.log('Request: ');
        console.log(obj);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            observe: 'response',
        };
        return this.http.post(this.baseuri + '/geolinkeddata/service/storage/addevaluation', obj, httpOptions);
    };
    AppService.prototype.getFromTripleStore = function (endpointType, param) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/x-www-form-urlencoded',
            Accept: 'application/ld+json'
        });
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('query', param);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Accept: 'application/ld+json'
            }),
            observe: 'response',
        };
        if (endpointType == 1) {
            return this.http.get(this.geoecuri, { params: params, headers: headers });
        }
        else if (endpointType == 2) {
            return this.http.get(this.dbpediauri, { params: params, headers: headers });
        }
        else if (endpointType == 3) {
            return this.http.get(this.ignes, { params: params, headers: headers });
        }
        else if (endpointType == 4) {
            return this.http.get(this.lgdorg, { params: params, headers: headers });
        }
    };
    AppService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    AppService.prototype.sumEvaluation = function (num_evaluation) {
        this.numSource.next(num_evaluation);
    };
    AppService.prototype.setWKTs = function (wktsvalues) {
        this.wkts.next(wktsvalues);
    };
    AppService.prototype.setnewWKTA = function (wktvalueA) {
        this.wktA.next(wktvalueA);
    };
    AppService.prototype.stringFormat = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // The string containing the format items (e.g. "{0}")
        // will and always has to be the first argument.
        var theString = args[0];
        // start with the second argument (i = 1)
        for (var i = 1; i < args.length; i++) {
            // "gm" = RegEx options for Global search (more than one instance)
            // and for Multiline search
            var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
            theString = theString.replace(regEx, args[i]);
        }
        return theString;
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fernando\Documents\NetBeansProjects\heuristicas\evaluation-frontend\sameAs-frontend\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** rdf-canonize-native (ignored) ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!*************************!*\
  !*** request (ignored) ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map