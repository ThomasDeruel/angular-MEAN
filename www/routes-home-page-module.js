(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes-home-page-module"],{

/***/ "./src/app/components/merchant-card/merchant-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/merchant-card/merchant-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{merchant.name}}</h3>\n<ul>\n<li>{{merchant.infos.address}}</li>\n  <li>{{merchant.infos.city}}</li>\n  <li>{{merchant.infos.code}}</li>  \n</ul>"

/***/ }),

/***/ "./src/app/components/merchant-card/merchant-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/merchant-card/merchant-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: MerchantCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantCardComponent", function() { return MerchantCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MerchantCardComponent = /** @class */ (function () {
    function MerchantCardComponent() {
    }
    MerchantCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MerchantCardComponent.prototype, "merchant", void 0);
    MerchantCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-merchant-card',
            template: __webpack_require__(/*! ./merchant-card.component.html */ "./src/app/components/merchant-card/merchant-card.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MerchantCardComponent);
    return MerchantCardComponent;
}());



/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.html":
/*!***********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"categoriesCollectionSlug\" class=\"categoryList\">\r\n  <li\r\n    *ngFor=\"let item of categoriesCollection\"\r\n    [textContent]=\"item.name\"\r\n    [class]=\"item.slug\"\r\n    (click)=\"sortMerchant(item.slug)\"\r\n    [ngClass]=\"{'active': item.slug === activeCategory}\"\r\n    >\r\n  </li>\r\n</ul>\r\n\r\n<ul *ngIf=\"marchantCollection\">\r\n  <li *ngFor=\"let item of marchantCollection\">\r\n    <app-merchant-card [merchant]=\"item.content\" [ngClass]=\"item.category.slug\"></app-merchant-card>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/routes/home-page/home-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/home-page/home-page.component.ts ***!
  \*********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_merchant_merchant_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/merchant/merchant.service */ "./src/app/services/merchant/merchant.service.ts");



var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(
    // on Inject notre class = on l'instancie
    MerchantService) {
        var _this = this;
        this.MerchantService = MerchantService;
        this.getMerchantList = function () {
            _this.MerchantService.readAllItems()
                .then(function (apiResponse) {
                _this.marchantCollection = apiResponse.data;
                _this.marchantCollectionRaw = apiResponse.data;
                _this.getMerchantCategories(apiResponse.data);
            })
                .catch(function (apiResponse) { return console.log(apiResponse); });
        };
        this.getMerchantCategories = function (data) {
            data.map(function (item) {
                item.category.isActive = false;
                if (_this.categoriesCollectionSlug.indexOf(item.category.slug) === -1) {
                    _this.categoriesCollectionSlug.push(item.category.slug);
                    _this.categoriesCollection.push(item.category);
                }
            });
            console.log(_this.categoriesCollection);
            console.log(_this.categoriesCollectionSlug);
        };
        this.sortMerchant = function (cat) {
            _this.activeCategory = cat;
            console.log(cat);
            var tempArray = [];
            _this.marchantCollectionRaw.map(function (item) {
                if (item.category.slug === cat) {
                    tempArray.push(item);
                }
            });
            _this.marchantCollection = tempArray;
        };
        this.categoriesCollection = [];
        this.categoriesCollectionSlug = [];
        this.activeCategory = "all";
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.getMerchantList();
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/routes/home-page/home-page.component.html"),
            providers: [_services_merchant_merchant_service__WEBPACK_IMPORTED_MODULE_2__["MerchantService"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_merchant_merchant_service__WEBPACK_IMPORTED_MODULE_2__["MerchantService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/routes/home-page/module.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/module.ts ***!
  \********************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");
/* harmony import */ var _components_merchant_card_merchant_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/merchant-card/merchant-card.component */ "./src/app/components/merchant-card/merchant-card.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./router */ "./src/app/routes/home-page/router.ts");

/*
Imports
*/
// Angular


// Inner



//
/*
Definition
*/
var Module = /** @class */ (function () {
    //
    /*
    Export
    */
    function Module() {
    }
    Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"], _components_merchant_card_merchant_card_component__WEBPACK_IMPORTED_MODULE_4__["MerchantCardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                // Ajouter le router dans la tableau des imports
                _router__WEBPACK_IMPORTED_MODULE_5__["Routing"]
            ]
        })
        //
        /*
        Export
        */
    ], Module);
    return Module;
}());

;
//


/***/ }),

/***/ "./src/app/routes/home-page/router.ts":
/*!********************************************!*\
  !*** ./src/app/routes/home-page/router.ts ***!
  \********************************************/
/*! exports provided: Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page.component */ "./src/app/routes/home-page/home-page.component.ts");


//
/*
Definition
*/
var route = [
    {
        path: '',
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_1__["HomePageComponent"]
    }
];
//
/*
Export
*/
var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(route);
//


/***/ }),

/***/ "./src/app/services/merchant/merchant.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/merchant/merchant.service.ts ***!
  \*******************************************************/
/*! exports provided: MerchantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantService", function() { return MerchantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var MerchantService = /** @class */ (function () {
    function MerchantService(HttpClient) {
        var _this = this;
        this.HttpClient = HttpClient;
        // TODO: créer la fonction
        this.readAllItems = function () {
            return _this.HttpClient.get(_this.apiUrl + "/merchant/")
                .toPromise().then(_this.getData).catch(_this.handleError);
        };
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    /*public authenticate = (): Promise<any> => {
  
    }*/
    MerchantService.prototype.getData = function (res) {
        return res || {};
    };
    ;
    MerchantService.prototype.handleError = function (err) {
        return Promise.reject(err.error);
    };
    ;
    MerchantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MerchantService);
    return MerchantService;
}());



/***/ })

}]);
//# sourceMappingURL=routes-home-page-module.js.map