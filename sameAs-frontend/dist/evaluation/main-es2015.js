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

module.exports = "<p>Enlaces evaluados: {{num_evaluation}}</p>\r\n<table class=\"table table-hover\">\r\n  <thead>\r\n  <tr class=\"d-flex\">\r\n    <th>ID</th>\r\n    <th class=\"col-4\">Recurso_A</th>\r\n    <th class=\"col-4\">Recurso B</th>\r\n    <th class=\"col-4\" colspan=\"3\">Seleccione una opción</th>\r\n   </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n  <tr class=\"d-flex\" *ngFor=\"let pair of pairs\">\r\n    <td>{{ pair.id }}</td>\r\n    <td class=\"col-sm-3\"><a href=\"{{ pair.uri_a }}\" target=\"_blank\">Recurso A</a></td>\r\n    <td class=\"col-sm-3\"><a href=\"{{ pair.uri_b }}\" target=\"_blank\">Recurso B</a></td>\r\n    <td><button class=\"opcion\" (click) = \"setDecision('Igual',1, pair.id)\"  value=\"1\">Iguales</button></td>\r\n    <td><button class=\"opcion\" (click) = \"setDecision('No son Igual',2, pair.id)\"  value=\"2\">No son Iguales</button></td>\r\n    <td><button class=\"opcion\" (click) = \"setDecision('No lo se',3, pair.id)\"  value=\"3\">No lo sé</button></td>\r\n    <!--<td><a [routerLink]=\"['/edit', pair.id]\" class=\"btn btn-primary\">Edit</a></td>\r\n      <td><a [routerLink]=\"\" class=\"btn btn-danger\">Delete</a></td>-->\r\n  </tr>\r\n  <tr class=\"d-flex\" >\r\n    <td>\r\n      <table>\r\n        <tbody>\r\n        <tr *ngFor=\"let result of datos[0]\">\r\n          <td>{{ result['property'] }}<td>\r\n          <td class=\"justificado\">{{ result['value'] }} </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </td>\r\n    <td>\r\n      <table>\r\n        <tbody>\r\n        <tr *ngFor=\"let result of datos[1]\">\r\n          <td>{{ result['property'] }}<td>\r\n          <td class=\"justificado\">{{ result['value'] }} </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </td>\r\n    <!--<td><a [routerLink]=\"['/edit', pair.id]\" class=\"btn btn-primary\">Edit</a></td>\r\n      <td><a [routerLink]=\"\" class=\"btn btn-danger\">Delete</a></td>-->\r\n  </tr>\r\n  <tr class=\"d-flex\">\r\n<td>\r\n    <label>Opción seleccionada: {{selected_evaluacion_texto}}</label>\r\n</td>\r\n    </tr>\r\n  <tr>\r\n    <td >\r\n    <button (click) = \"setEvaluation()\" class=\"btn btn-primary\" routerLink=\"/evaluar\">Enviar</button>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppEvaluationComponent = class AppEvaluationComponent {
    ngOnInit() {
    }
};
AppEvaluationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-evaluation',
        template: __webpack_require__(/*! raw-loader!./app-evaluation.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-evaluation/app-evaluation.component.html"),
        styles: [__webpack_require__(/*! ./app-evaluation.component.css */ "./src/app/app-evaluation/app-evaluation.component.css")]
    })
], AppEvaluationComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppFinalComponent = class AppFinalComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppFinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-final',
        template: __webpack_require__(/*! raw-loader!./app-final.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-final/app-final.component.html"),
        styles: [__webpack_require__(/*! ./app-final.component.css */ "./src/app/app-final/app-final.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppFinalComponent);



/***/ }),

/***/ "./src/app/app-individual/app-individual.component.css":
/*!*************************************************************!*\
  !*** ./src/app/app-individual/app-individual.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active {\r\n  background-color: green !important;\r\n}\r\n\r\n#opcion {\r\n  #widows: 10px;\r\n  background: aliceblue;\r\n  text-align: right;\r\n}\r\n\r\n.justificado{\r\n  height: auto;\r\n  width: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWluZGl2aWR1YWwvYXBwLWluZGl2aWR1YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC1pbmRpdmlkdWFsL2FwcC1pbmRpdmlkdWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jb3BjaW9uIHtcclxuICAjd2lkb3dzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcbi5qdXN0aWZpY2Fkb3tcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwcHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jsonld__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonld */ "./node_modules/jsonld/lib/jsonld.js");
/* harmony import */ var jsonld__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonld__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_5__);






let AppIndividualComponent = class AppIndividualComponent {
    constructor(appser, router) {
        this.appser = appser;
        this.router = router;
        this.persona_id = '';
        this.selected_evaluacion_texto = '';
        this.querystring = '';
        this.datos = [];
        this.results = [];
        //PARA TRANSFORMAR DATOS DEL JSON RECIBIDO DEL ENDPOINT A JSON-LD
        this.jsonTemplate = ''
            + '   {'
            + ' {0} '
            + '  }';
        this.jsonObjTemplate = '"{0}":"{1}"';
        this.jsonObjIdTemplate = '"{0}":{1}';
        this.jsonIdTemplate = '{ "@id":"{0}" }';
    }
    setDecision(texto, evaluacion, id_par) {
        this.selected_evaluacion_texto = texto;
        this.selected_evaluacion = evaluacion;
        this.selected_id_par = id_par;
    }
    setEvaluation() {
        if (this.persona_id == 'No Persona_ID') {
            alert("No ha ingresado sus datos");
            this.router.navigate(['/iniciar']);
        }
        else {
            if (this.selected_evaluacion_texto != '') {
                var r = confirm("Confirmar?");
                if (r == true) {
                    this.appser.setEvaluation(this.selected_evaluacion, this.persona_id, this.selected_id_par).subscribe(res => {
                        console.log("Response: ");
                        console.log(res['body']);
                    });
                    this.appser.sumEvaluation(this.num_evaluation + 1);
                    this.ngOnInit();
                    this.selected_evaluacion_texto = "";
                }
            }
            else {
                alert("No ha seleccionado una respuesta");
            }
        }
    }
    ngOnInit() {
        this.appser.currentEvaluation.subscribe(num_evaluation => this.num_evaluation = num_evaluation);
        this.appser.currentMessage.subscribe(message => this.persona_id = message);
        this.appser
            .getPairs(1)
            .subscribe(data => {
            this.pairs = data;
            this.loadFullData(this.pairs);
        });
        this.appser.currentdatosPantalla.subscribe(newdata => this.datos = newdata);
    }
    loadFullData(fulldata) {
        const docexample = {
            "http://schema.org/name": "Manu Sporny",
            "http://schema.org/url": { "@id": "http://manu.sporny.org/" },
            "http://schema.org/image": { "@id": "http://manu.sporny.org/images/manu.png" }
        };
        const context = {
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
            dct: 'http://purl.org/dc/terms/'
        };
        this.loadfullDataFromURI(context, fulldata[0]['uri_a'], 1);
        this.loadfullDataFromURI(context, fulldata[0]['uri_b'], 2);
    }
    loadfullDataFromURI(context, uriResource, endpointType) {
        this.querystring = this.appser.stringFormat('Select * where { <{0}> ?p ?o } limit 100', uriResource);
        this.appser.getFromTripleStore(endpointType, this.querystring).subscribe(data => {
            this.fromendpoint = data;
            this.results = this.fromendpoint['body']['results']['bindings'];
            const jsonldStr = JSON.parse(this.from_rdf_to_jsonld(this.results));
            console.log(jsonldStr);
            const datosaux = [];
            // tslint:disable-next-line:only-arrow-functions
            Object(q__WEBPACK_IMPORTED_MODULE_5__["async"])(jsonld__WEBPACK_IMPORTED_MODULE_4__["compact"](jsonldStr, context, function (err, compacted) {
                for (var i in compacted) {
                    if (i != "@context") {
                        var model = {};
                        model['property'] = i;
                        model['value'] = compacted[i]['@id'] ? compacted[i]['@id'] : compacted[i];
                        datosaux.push(model);
                    }
                }
            }));
            this.datos.push(datosaux);
        });
    }
    ngOnChanges(changes) {
        //console.log(changes);
    }
    ngDoCheck() {
        setTimeout(() => {
            console.log("hello");
        }, 1000);
        //console.log('Método DoCheck lanzado');
    }
    from_rdf_to_jsonld(data) {
        console.log(data);
        let cadena = "";
        let ind = 0;
        for (let resource of data) {
            ind++;
            const key = resource['p']['value'];
            const value = resource['o']['value'];
            if (resource['o']['type'] == "literal") //va directamente el objeto
                cadena += this.appser.stringFormat(this.jsonObjTemplate, key, value);
            else //el objeto va de tipo uri con "@id"
                cadena += this.appser.stringFormat(this.jsonObjIdTemplate, key, this.appser.stringFormat(this.jsonIdTemplate, value));
            if (ind < data.length) {
                cadena += ",";
            }
        }
        return this.appser.stringFormat(this.jsonTemplate, cadena);
    }
};
AppIndividualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-individual',
        template: __webpack_require__(/*! raw-loader!./app-individual.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-individual/app-individual.component.html"),
        styles: [__webpack_require__(/*! ./app-individual.component.css */ "./src/app/app-individual/app-individual.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AppIndividualComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_start_app_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-start/app-start.component */ "./src/app/app-start/app-start.component.ts");
/* harmony import */ var _app_evaluation_app_evaluation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-evaluation/app-evaluation.component */ "./src/app/app-evaluation/app-evaluation.component.ts");
/* harmony import */ var _app_final_app_final_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-final/app-final.component */ "./src/app/app-final/app-final.component.ts");






const routes = [
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
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                onSameUrlNavigation: 'reload'
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");




let AppStartComponent = class AppStartComponent {
    constructor(formBuilder, appser) {
        this.formBuilder = formBuilder;
        this.appser = appser;
        this.submitted = false;
        this.titulo = 'Por Favor, responde las siguientes preguntas para continuar';
    }
    addPerson(escuela, edad, genero) {
        this.appser.addPerson(escuela, edad, genero).subscribe(res => { console.log("Response: "); console.log(res['body']); this.appser.changeMessage(res['body']['persona_id']); }
        /*res => { console.log("Response: ")}*/
        );
    }
    ngOnInit() {
        this.appser.currentEvaluation.subscribe(num_evaluation => this.num_evaluation = num_evaluation);
        this.formmeta = this.formBuilder.group({
            escuela: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            edad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            genero: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            /*email: ['', [Validators.required, Validators.email]],
            mensaje: ['', [Validators.required, Validators.minLength(6)]]
             */
        });
    }
    get f() { return this.formmeta.controls; }
    onSubmit() {
        this.submitted = true;
        if (this.formmeta.invalid) {
            return;
        }
        /*alert('Mensaje Enviado !');*/
    }
};
AppStartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-start',
        template: __webpack_require__(/*! raw-loader!./app-start.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-start/app-start.component.html"),
        styles: [__webpack_require__(/*! ./app-start.component.css */ "./src/app/app-start/app-start.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
], AppStartComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Links SameAs';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_start_app_start_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-start/app-start.component */ "./src/app/app-start/app-start.component.ts");
/* harmony import */ var _app_evaluation_app_evaluation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-evaluation/app-evaluation.component */ "./src/app/app-evaluation/app-evaluation.component.ts");
/* harmony import */ var _app_individual_app_individual_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-individual/app-individual.component */ "./src/app/app-individual/app-individual.component.ts");
/* harmony import */ var _app_final_app_final_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-final/app-final.component */ "./src/app/app-final/app-final.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _app_start_app_start_component__WEBPACK_IMPORTED_MODULE_9__["AppStartComponent"],
            _app_evaluation_app_evaluation_component__WEBPACK_IMPORTED_MODULE_10__["AppEvaluationComponent"],
            _app_individual_app_individual_component__WEBPACK_IMPORTED_MODULE_11__["AppIndividualComponent"],
            _app_final_app_final_component__WEBPACK_IMPORTED_MODULE_12__["AppFinalComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AppService = class AppService {
    constructor(http) {
        this.http = http;
        /*baseuri = 'http://192.168.100.6:5000';*/
        this.baseuri = 'http://201.159.223.25:8081';
        this.geoecuri = 'http://linkeddata.ec/repositories/test'; /*-> Será tipo 1*/
        this.dbpediauri = 'http://dbpedia.org/sparql'; /*-> Será tipo 2*/
        this.endpointuri = this.geoecuri;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('No Persona_ID');
        this.currentMessage = this.messageSource.asObservable();
        this.numSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this.currentEvaluation = this.numSource.asObservable();
        this.datosPantalla = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.currentdatosPantalla = this.datosPantalla.asObservable();
    }
    addPerson(escuela, edad, genero) {
        const obj = {
            escuela,
            edad,
            genero
        };
        console.log('Request: ');
        console.log(obj);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            observe: 'response',
        };
        return this.http.post(this.baseuri + `/geolinkeddata/service/storage/add`, obj, httpOptions);
    }
    getPairs(param) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('param', param);
        return this
            .http
            .get(this.baseuri + '/geolinkeddata/service/storage/get', { params });
    }
    setEvaluation(evaluacion, id_persona, id_par) {
        const obj = {
            evaluacion,
            id_persona,
            id_par
        };
        console.log('Request: ');
        console.log(obj);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            }),
            observe: 'response',
        };
        return this.http.post(this.baseuri + '/geolinkeddata/service/storage/addevaluation', obj, httpOptions);
    }
    getFromTripleStore(endpointType, param) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/ld+json'
        });
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('query', param).set('Content-Type', 'x-www-form-urlencoded; charset=UTF-8');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                Accept: 'application/sparql-results+json'
            }),
            observe: 'response',
        };
        if (endpointType == 1)
            return this.http.post(this.geoecuri, params, httpOptions);
        else if (endpointType == 2)
            return this.http.post(this.dbpediauri, params, httpOptions);
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
    sumEvaluation(num_evaluation) {
        this.numSource.next(num_evaluation);
    }
    datosPantallaF(newdata) {
        this.datosPantalla.next(newdata);
    }
    stringFormat(...args) {
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
    }
};
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map