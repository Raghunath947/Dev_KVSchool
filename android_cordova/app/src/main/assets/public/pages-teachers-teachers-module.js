(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teachers-teachers-module"],{

/***/ "2R0U":
/*!*************************************************!*\
  !*** ./src/app/pages/teachers/teachers.page.ts ***!
  \*************************************************/
/*! exports provided: TeachersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersPage", function() { return TeachersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_teachers_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./teachers.page.html */ "qdBK");
/* harmony import */ var _teachers_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teachers.page.scss */ "nB58");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/commonfunction.service */ "HifY");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "WXJz");








let TeachersPage = class TeachersPage {
    constructor(storage, auth, CFS, platform) {
        this.storage = storage;
        this.auth = auth;
        this.CFS = CFS;
        this.platform = platform;
        this.teacherData = [];
        this.term = '';
        this.uid = localStorage.getItem('uid');
        //this.access_level=localStorage.getItem('access_level');
        // if(this.teacherData==null || this.teacherData.length==0|| this.teacherData==undefined){
        this.auth.getTeacherLists(this.uid, this.access_level).subscribe((tData) => {
            this.teacherData = tData['data'];
            this.searchItem = this.teacherData['data'];
            console.log('Teacher Data: ', this.teacherData);
            // localStorage.setItem('teacherData',this.teacherData);
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.search.setFocus();
        });
    }
    _ionChange(event) {
        const val = event.target.value;
        this.searchItem = this.teacherData['data'];
        if (val && val.trim() != '') {
            this.searchItem = this.searchItem.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase() > -1));
            });
            console.log(this.searchItem);
        }
    }
};
TeachersPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_services_commonfunction_service__WEBPACK_IMPORTED_MODULE_5__["CommonfunctionService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] }
];
TeachersPage.propDecorators = {
    search: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['search', { static: false },] }]
};
TeachersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-teachers',
        template: _raw_loader_teachers_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_teachers_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TeachersPage);



/***/ }),

/***/ "4SBX":
/*!***********************************************************!*\
  !*** ./src/app/pages/teachers/teachers-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: TeachersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersPageRoutingModule", function() { return TeachersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _teachers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./teachers.page */ "2R0U");




const routes = [
    {
        path: '',
        component: _teachers_page__WEBPACK_IMPORTED_MODULE_3__["TeachersPage"]
    }
];
let TeachersPageRoutingModule = class TeachersPageRoutingModule {
};
TeachersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeachersPageRoutingModule);



/***/ }),

/***/ "J7az":
/*!***************************************************!*\
  !*** ./src/app/pages/teachers/teachers.module.ts ***!
  \***************************************************/
/*! exports provided: TeachersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersPageModule", function() { return TeachersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _teachers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./teachers-routing.module */ "4SBX");
/* harmony import */ var _teachers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teachers.page */ "2R0U");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");








let TeachersPageModule = class TeachersPageModule {
};
TeachersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _teachers_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeachersPageRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"]
        ],
        declarations: [_teachers_page__WEBPACK_IMPORTED_MODULE_6__["TeachersPage"]]
    })
], TeachersPageModule);



/***/ }),

/***/ "cZdB":
/*!**************************************************************************!*\
  !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
  \**************************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");



class Ng2SearchPipe {
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    transform(items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    }
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    static filter(items, term) {
        const /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (let /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    }
}
Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) { return new (t || Ng2SearchPipe)(); };
Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: Ng2SearchPipe, pure: false });
Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Ng2SearchPipe, factory: Ng2SearchPipe.ɵfac });
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter',
                pure: false
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

class Ng2SearchPipeModule {
}
Ng2SearchPipeModule.ɵfac = function Ng2SearchPipeModule_Factory(t) { return new (t || Ng2SearchPipeModule)(); };
Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Ng2SearchPipeModule });
Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = () => [];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, { declarations: [Ng2SearchPipe], exports: [Ng2SearchPipe] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng2-search-filter.js.map

/***/ }),

/***/ "nB58":
/*!***************************************************!*\
  !*** ./src/app/pages/teachers/teachers.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("b {\n  color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0ZWFjaGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoidGVhY2hlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYntcclxuICAgIGNvbG9yOnB1cnBsZVxyXG59Il19 */");

/***/ }),

/***/ "qdBK":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/teachers/teachers.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>List of Teachers</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content style=\"background-color:lightblue\">\n<ion-card>\n  <ion-searchbar placeholder=\"Search\" [(ngModel)]='term' animated=\"true\" ></ion-searchbar>\n</ion-card>\n<div *ngIf=\"teacherData!=null\">\n<ion-list  *ngFor=\"let p of searchItem | filter: term \" style=\"padding:0.5%;\">\n  \n    <ion-card style=\"padding: 1%;color: blue;margin:1%;background-color: lightgrey;\">\n\n    <p>\n      <ion-label><b>Name:</b> {{ p.name }}</ion-label>\n    </p>\n    <ion-label><b>Section:</b> {{ p.section }}</ion-label>\n    </ion-card>\n  \n  \n\n</ion-list>\n</div>  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-teachers-teachers-module.js.map