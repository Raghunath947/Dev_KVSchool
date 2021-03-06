(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-view-view-module"],{

/***/ "Bi9S":
/*!***************************************************!*\
  !*** ./src/app/pages/view/view-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageRoutingModule", function() { return ViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.page */ "lvi1");




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_3__["ViewPage"]
    }
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewPageRoutingModule);



/***/ }),

/***/ "UGwD":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/view/view.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>View Discussions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-item>\n    <ion-label>Select Type</ion-label>\n    <ion-select value=\"View\" okText=\"Okay\" cancelText=\"Dismiss\">\n      <ion-select-option value=\"all\">All</ion-select-option>\n      <ion-select-option value=\"public\">Public posts</ion-select-option>\n      <ion-select-option value=\"postByMe\">Initiated by me</ion-select-option>\n      <ion-select-option value=\"postMarkedToMe\">Marked to me</ion-select-option>\n   \n      <ion-select-option value=\"postMarkedToMyClass\">Marked to my class/sections</ion-select-option>\n      <ion-select-option value=\"postByOthers\">By other parents</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-card>\n</ion-content>\n");

/***/ }),

/***/ "UKpm":
/*!*******************************************!*\
  !*** ./src/app/pages/view/view.module.ts ***!
  \*******************************************/
/*! exports provided: ViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-routing.module */ "Bi9S");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view.page */ "lvi1");







let ViewPageModule = class ViewPageModule {
};
ViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _view_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewPageRoutingModule"]
        ],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_6__["ViewPage"]]
    })
], ViewPageModule);



/***/ }),

/***/ "jCxU":
/*!*******************************************!*\
  !*** ./src/app/pages/view/view.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "lvi1":
/*!*****************************************!*\
  !*** ./src/app/pages/view/view.page.ts ***!
  \*****************************************/
/*! exports provided: ViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPage", function() { return ViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./view.page.html */ "UGwD");
/* harmony import */ var _view_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.page.scss */ "jCxU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ViewPage = class ViewPage {
    constructor() { }
    ngOnInit() {
    }
};
ViewPage.ctorParameters = () => [];
ViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-view',
        template: _raw_loader_view_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_view_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewPage);



/***/ })

}]);
//# sourceMappingURL=pages-view-view-module.js.map