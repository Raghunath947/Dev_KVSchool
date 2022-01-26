(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "aTZN");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "bP1B");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "H+1c":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "TuYN":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>KV School Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n  <div >\n<ion-card style=\"margin-top:25%;background-color:lightgrey\">\n  <div class=\"ion-padding\">\n    <form #loginForm=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\">Login ID</ion-label>\n          \n              <ion-input \n              class=\"input\"\n              name=\"loginid\" \n              ngModel \n              #uid=\"ngModel\" \n              [(ngModel)] = loginid \n              required \n              placeholder=\"Enter Login ID\" \n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"uid.touched && !uid.valid\">\n              <ion-text color=\"danger\">\n                <p>Please enter Login ID</p>\n              </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\"> Password</ion-label>\n          \n       \n              <ion-input \n              class=\"input\"\n              name=\"password\" \n              ngModel \n              #upass=\"ngModel\" \n              [(ngModel)] = password \n              required \n              placeholder=\"Enter password\" \n              type=\"password\"\n              ></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"12\" *ngIf=\"upass.touched && !upass.valid\">\n              <ion-text color=\"danger\">\n                <p>Please enter password</p>\n              </ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-button expand=\"block\" color=\"primary\" [disabled]=\"!loginForm.valid\" (click)=\"signIn()\"> Log In </ion-button>\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n  </form>\n  </div>\n</ion-card>\n</div>\n  </ion-content>\n");

/***/ }),

/***/ "aTZN":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "bP1B");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "bP1B":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "TuYN");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "H+1c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commonfunction.service */ "HifY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









let LoginPage = class LoginPage {
    constructor(auth, CFS, platform, router, loadingCtrl, alertCtrl) {
        this.auth = auth;
        this.CFS = CFS;
        this.platform = platform;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.loginid = '';
        this.password = '';
        this.isLoading = false;
        let isUserLoggedIn = localStorage.getItem('currentUserId');
        if (isUserLoggedIn) {
            this.router.navigateByUrl('/home');
        }
    }
    ngOnInit() {
    }
    signIn() {
        this.platform.ready().then(() => {
            if ((this.password != '') && (this.loginid != '')) {
                console.log('LoginID: ', this.loginid);
                console.log('Password: ', this.password);
                this.isLoading = true;
                this.loadingCtrl
                    .create({ keyboardClose: true, message: 'Logging in...' })
                    .then(loadingEl => {
                    loadingEl.present();
                    this.auth.loginCustomer(this.loginid, this.password).then((response) => {
                        let data = response['data'];
                        if (data['token']) {
                            console.log('Returned Token: ', data['token']);
                            this.auth.getUserData(this.loginid).subscribe((usrData) => {
                                this.userData = usrData['data'][0];
                                console.log('User Data: ', this.userData);
                                let currentUserId = this.userData['unique_id'];
                                let access_level = this.userData['access_level'];
                                let uid = this.userData['login_id'];
                                let name = this.userData['name'];
                                let email = this.userData['email_id'];
                                let mobile = this.userData['mobile_number'];
                                let stuent_class = this.userData['class'];
                                let student_name = this.userData['student_name'];
                                let section = this.userData['section'];
                                let roll_no = this.userData['roll_no'];
                                let recieved_email = this.userData['recieved_email'];
                                let recieved_sms = this.userData['recieved_sms'];
                                let is_class = this.userData['is_class_moderator'];
                                let is_section = this.userData['is_section_moderator'];
                                let home_number = this.userData['home_number'];
                                let register_time = this.userData['registered_at_time'];
                                localStorage.setItem('uniqe_id', currentUserId);
                                localStorage.setItem('uid', uid);
                                localStorage.setItem('access_level', access_level);
                                localStorage.setItem('name', name);
                                localStorage.setItem('student_name', student_name);
                                localStorage.setItem('mobile_number', mobile);
                                localStorage.setItem('section', section);
                                localStorage.setItem('class', stuent_class);
                                localStorage.setItem('roll_no', roll_no);
                                localStorage.setItem('email_id', email);
                                localStorage.setItem('password', this.password);
                                localStorage.setItem('recieved_email', recieved_email);
                                localStorage.setItem('recieved_sms', recieved_sms);
                                localStorage.setItem('is_class_moderator', is_class);
                                localStorage.setItem('is_section_moderator', is_section);
                                localStorage.setItem('home_number', home_number);
                                localStorage.setItem('registered_at_time', register_time);
                                console.log(localStorage.getItem('uid'));
                                console.log(localStorage.getItem('access_level'));
                                console.log(JSON.stringify(localStorage.getItem('email_id')));
                            });
                            loadingEl.dismiss();
                            this.router.navigateByUrl('/home');
                        }
                        else {
                            loadingEl.dismiss();
                            let message = 'Could not logged in. Either connection error or you are not recognized by the server. Try again!';
                            this.showAlert(message);
                        }
                    });
                });
            }
            else {
                this.CFS.presentToast('Please fill up the input fields correctly', true, 'bottom', 2000);
            }
        });
    }
    showAlert(message) {
        this.alertCtrl
            .create({
            header: 'Authentication failed',
            message: message,
            buttons: ['Okay']
        })
            .then(alertEl => alertEl.present());
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_5__["CommonfunctionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map