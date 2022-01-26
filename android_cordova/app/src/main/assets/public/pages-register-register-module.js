(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "+mX6":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "gnlj");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "/al4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>\n      Sign up\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"ion-padding\">\n  <form #registerForm=\"ngForm\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <p>Enter Username</p>\n      </ion-col>\n      <ion-col size=\"12\">\n        <ion-input \n        class=\"input\"\n        name=\"username\" \n        ngModel \n        #uname=\"ngModel\" \n        [(ngModel)] = username \n        required \n        placeholder=\"Enter Username\" \n        minlength=\"6\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"12\" *ngIf=\"uname.touched && !uname.valid\">\n        <ion-text color=\"danger\">\n          <p *ngIf=\"uname.errors.required\">Please enter Username</p>\n          <p *ngIf=\"uname.errors.minlength\">Username should be a minimum of 6 character long</p>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col size=\"12\">\n          <p>Enter Email</p>\n        </ion-col>\n        <ion-col size=\"12\">\n            <ion-input \n            class=\"input\"\n            name=\"email\" \n            ngModel \n            #uemail=\"ngModel\" \n            [(ngModel)] = email \n            required \n            placeholder=\"Enter email\" \n            ></ion-input>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"uemail.touched && !uemail.valid\">\n            <ion-text color=\"danger\">\n              <p>Please enter email</p>\n            </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <p>Enter Password</p>\n        </ion-col>\n        <ion-col size=\"12\">\n            <ion-input \n            class=\"input\"\n            name=\"password\" \n            ngModel \n            #upass=\"ngModel\" \n            [(ngModel)] = password \n            required \n            placeholder=\"Enter password\" \n            type=\"password\"\n            ></ion-input>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"upass.touched && !upass.valid\">\n            <ion-text color=\"danger\">\n              <p>Please enter password</p>\n            </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <p>Re Enter Password</p>\n        </ion-col>\n        <ion-col size=\"12\">\n            <ion-input \n            class=\"input\"\n            name=\"repassword\" \n            ngModel \n            #uerpass=\"ngModel\" \n            [(ngModel)] = repassword \n            required \n            placeholder=\"Re Enter Username\" \n            type=\"password\"\n            ></ion-input>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"uerpass.touched && !uerpass.valid\">\n            <ion-text color=\"danger\">\n              <p>Please re enter password</p>\n            </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button expand=\"block\" color=\"primary\" [disabled]=\"!registerForm.valid\" (click)=\"signUp()\"> Sign Up </ion-button>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</form>\n</div>\n</ion-content>\n");

/***/ }),

/***/ "fQjJ":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "fhSy":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "+mX6");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "gnlj");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "gnlj":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "/al4");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "fQjJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commonfunction.service */ "HifY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let RegisterPage = class RegisterPage {
    constructor(auth, CFS, platform) {
        this.auth = auth;
        this.CFS = CFS;
        this.platform = platform;
        this.username = '';
        this.email = '';
        this.password = '';
        this.repassword = '';
    }
    ngOnInit() {
    }
    signUp() {
        this.platform.ready().then(() => {
            if ((this.username != '') &&
                (this.password != '') &&
                (this.repassword != '') &&
                (this.password == this.repassword) &&
                (this.CFS.validateEmail(this.email))) {
                console.log('Username: ', this.username);
                console.log('Email: ', this.email);
                console.log('Password: ', this.password);
                this.auth.registerCustomer(this.email, this.username, this.password).then((response) => {
                    if (response['error']) {
                        this.CFS.presentToast(response['error'].message, true, 'bottom', 2000);
                    }
                    else {
                        this.CFS.presentToast('Registration successful, You may login now', true, 'bottom', 2000);
                    }
                });
            }
            else {
                this.CFS.presentToast('Please fill up the forms correctly', true, 'bottom', 2000);
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_5__["CommonfunctionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module.js.map