(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-edit-module"],{

/***/ "6j2X":
/*!*******************************************!*\
  !*** ./src/app/pages/edit/edit.module.ts ***!
  \*******************************************/
/*! exports provided: EditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageModule", function() { return EditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-routing.module */ "jslT");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.page */ "M7FG");







let EditPageModule = class EditPageModule {
};
EditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"]
        ],
        declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })
], EditPageModule);



/***/ }),

/***/ "M7FG":
/*!*****************************************!*\
  !*** ./src/app/pages/edit/edit.page.ts ***!
  \*****************************************/
/*! exports provided: EditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPage", function() { return EditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit.page.html */ "x3Q4");
/* harmony import */ var _edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.page.scss */ "jSC3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commonfunction.service */ "HifY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let EditPage = class EditPage {
    constructor(auth, CFS, platform) {
        this.auth = auth;
        this.CFS = CFS;
        this.platform = platform;
        this.username = localStorage.getItem('name');
        this.email = localStorage.getItem('email_id');
        this.mobile = localStorage.getItem('mobile_number');
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
EditPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_5__["CommonfunctionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
EditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit',
        template: _raw_loader_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditPage);



/***/ }),

/***/ "jSC3":
/*!*******************************************!*\
  !*** ./src/app/pages/edit/edit.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "jslT":
/*!***************************************************!*\
  !*** ./src/app/pages/edit/edit-routing.module.ts ***!
  \***************************************************/
/*! exports provided: EditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function() { return EditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.page */ "M7FG");




const routes = [
    {
        path: '',
        component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }
];
let EditPageRoutingModule = class EditPageRoutingModule {
};
EditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditPageRoutingModule);



/***/ }),

/***/ "x3Q4":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/edit.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"ion-padding\">\n    <form #registerForm=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-label position=\"floating\" style=\" color: blue;\">Name</ion-label>\n       \n          <ion-input \n          class=\"input\"\n          name=\"username\" \n          ngModel \n          #uname=\"ngModel\" \n          [(ngModel)] = username \n          required \n          placeholder=\"Enter Name\" \n          minlength=\"4\"\n          ></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\" *ngIf=\"uname.touched && !uname.valid\">\n          <ion-text color=\"danger\">\n            <p *ngIf=\"uname.errors.required\">Please enter Name</p>\n            <p *ngIf=\"uname.errors.minlength\">Name should be a minimum of 4 character long</p>\n          </ion-text>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" style=\" color: blue;\">Email ID</ion-label>\n         \n              <ion-input \n              class=\"input\"\n              name=\"email\" \n              ngModel \n              #uemail=\"ngModel\" \n              [(ngModel)] = email \n              required \n              placeholder=\"Enter email\" \n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"uemail.touched && !uemail.valid\">\n              <ion-text color=\"danger\">\n                <p>Please enter email</p>\n              </ion-text>\n              \n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" style=\" color: blue;\">Mobile Number</ion-label>\n        \n              <ion-input \n              class=\"input\"\n              name=\"mobile\" \n              ngModel \n              #umobile=\"ngModel\" \n              [(ngModel)] = mobile \n              required \n              placeholder=\"Enter mobile number\" \n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"umobile.touched && !umobile.valid\">\n              <ion-text color=\"danger\">\n                <p>Please enter mobile number</p>\n              </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" style=\" color: blue;\">New Password</ion-label>\n          \n              <ion-input \n              class=\"input\"\n              name=\"password\" \n              ngModel \n              #upass=\"ngModel\" \n              [(ngModel)] = password \n              required \n              placeholder=\"Enter new password\" \n              type=\"password\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"upass.touched && !upass.valid\">\n              <ion-text color=\"danger\">\n                <p>Please enter new password</p>\n              </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\" style=\" color: blue;\">Re Enter New Password</ion-label>\n         \n              <ion-input \n              class=\"input\"\n              name=\"repassword\" \n              ngModel \n              #uerpass=\"ngModel\" \n              [(ngModel)] = repassword \n              required \n              placeholder=\"Re Enter New Username\" \n              type=\"password\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"uerpass.touched && !uerpass.valid\">\n              <ion-text color=\"danger\">\n                <p>Please re enter new password</p>\n              </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button expand=\"block\" color=\"primary\" [disabled]=\"!registerForm.valid\" (click)=\"signUp()\"> Submit </ion-button>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </form>\n  </div>\n  </ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-edit-edit-module.js.map