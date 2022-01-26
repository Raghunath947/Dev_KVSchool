(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-post-post-module"],{

/***/ "C63a":
/*!*******************************************!*\
  !*** ./src/app/pages/post/post.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "CX4s":
/*!***************************************************!*\
  !*** ./src/app/pages/post/post-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PostPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageRoutingModule", function() { return PostPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post.page */ "cxgS");




const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_3__["PostPage"]
    }
];
let PostPageRoutingModule = class PostPageRoutingModule {
};
PostPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PostPageRoutingModule);



/***/ }),

/***/ "ElmB":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/post/post.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Post Discussions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\">\n          <p>Select Category(*):</p>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n          <ion-select value=\"Category\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ion-select-option value=\"0\">--Select--</ion-select-option>\n            <ion-select-option value=\"academics\">1.Academics</ion-select-option>\n            <ion-select-option value=\"infrastructure\">2.Infrastructure</ion-select-option>\n            <ion-select-option value=\"co-curricular\">3.Co-curricular Activities</ion-select-option>\n            <ion-select-option value=\"sports\">4.Sports & Games</ion-select-option>\n            <ion-select-option value=\"suggestion\">5. Suggestion</ion-select-option>\n            <ion-select-option value=\"cleanliness\">6. Cleanliness</ion-select-option>\n            <ion-select-option value=\"corporalPunishment\">7. Corporal Punishment</ion-select-option>\n            <ion-select-option value=\"behaviouralIssues\">8. Behavioural issues</ion-select-option>\n            <ion-select-option value=\"others\">9.Others</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <p>Subject(*):</p>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-input value=\"subject\" placeholder=\"Subject\"></ion-input>\n          </ion-item>\n         \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <p>Description(*):</p>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n            <ion-textarea placeholder=\"Description\" value=\"description\"></ion-textarea>\n          </ion-item>\n        \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <p>Attach files:</p>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n\n            \n              <ion-icon lazy=\"true\" slot=\"start\" name=\"file\"></ion-icon>\n              \n              <input type=\"file\" (change)=\"loadFromDevice($event)\" id=\"file-input\"\n                accept=\"*\">\n            \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <p>Post Visibility:</p></ion-col>\n        <ion-col size=\"12\">\n          <ion-item>\n          <ion-select value=\"postVisiblity\" okText=\"Okay\" cancelText=\"Dismiss\">\n            <ion-select-option value=\"allteachersAllSection\">All teachers of all section of your child's class</ion-select-option>\n            <ion-select-option value=\"teachers\">Teacher(s)/Section representative of ypur child's section</ion-select-option>\n            <ion-select-option value=\"allParents\">All parents of your child section</ion-select-option>\n            <ion-select-option value=\"allParentsSelectedSection\">All parents of selected sections of your child class</ion-select-option>\n          </ion-select>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\"></ion-col>\n        <ion-col size=\"12\"></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-button>Send</ion-button>\n        </ion-col>\n        <ion-col size=\"12\"></ion-col>\n      </ion-row>\n    </ion-grid>\n    \n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "cxgS":
/*!*****************************************!*\
  !*** ./src/app/pages/post/post.page.ts ***!
  \*****************************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post.page.html */ "ElmB");
/* harmony import */ var _post_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.page.scss */ "C63a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PostPage = class PostPage {
    constructor() {
    }
    ngOnInit() {
    }
    loadFromDevice(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = () => {
            // get the blob of the image:
            let blob = new Blob([new Uint8Array(reader.result)]);
            // create blobURL, such that we could use it in an image element:
            let blobURL = URL.createObjectURL(blob);
        };
        reader.onerror = (error) => {
            //handle errors
        };
    }
    ;
};
PostPage.ctorParameters = () => [];
PostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post',
        template: _raw_loader_post_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostPage);



/***/ }),

/***/ "gDdP":
/*!*******************************************!*\
  !*** ./src/app/pages/post/post.module.ts ***!
  \*******************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-routing.module */ "CX4s");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "cxgS");







let PostPageModule = class PostPageModule {
};
PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _post_routing_module__WEBPACK_IMPORTED_MODULE_5__["PostPageRoutingModule"]
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
    })
], PostPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-post-post-module.js.map