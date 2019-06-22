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

/***/ "./node_modules/raw-loader/index.js!./src/app/addproduct/addproduct.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/addproduct/addproduct.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-default\">\n  <h2>Add Product Form</h2>\n    <div class=\"form-group\">\n      <label for=\"productname\">Product Name</label>\n      <input type=\"text\" [(ngModel)] =\"productname\" class=\"form-control\" placeholder=\"Enter productname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"price\">Product Price:</label>\n      <input type=\"number\" [(ngModel)]=\"productprice\" class=\"form-control\" placeholder=\"Enter Product Price\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Discount:</label>\n      <input type=\"number\" [(ngModel)]=\"productdiscount\" class=\"form-control\" placeholder=\"Enter discount\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"desc\">Product Description</label>\n      <input type=\"text\" [(ngModel)]=\"productdiscription\" class=\"form-control\" placeholder=\"Enter product discription\">\n    </div>\n    <button  (click)=addproduct() class=\"btn btn-primary\">Add Product</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forgotpassword/forgotpassword.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forgotpassword works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-slider></app-slider>\n\n<h1>Products</h1>\n<div class=\"row\">\n<app-products *ngFor=\"let product of products\" [product]=\"product\" class=\"col-md-4\"></app-products>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Login Form</h2>\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input [(ngModel)]=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input [(ngModel)] =\"password\" type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\">\n    </div>\n\n    <button (click)=login() class=\"btn btn-primary\">Submit</button>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navba-dark bg-dark text-light\">\n  <a class=\"navbar-brand text-light\" href=\"#\">{{projectname}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link text-light\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-light\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle text-light\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Manage\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/addproduct\">Add Product</a>\n          <a class=\"dropdown-item\" routerLink=\"/signup\">Signup</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Disabled</a>\n      </li>\n    </ul>\n    <div *ngIf=\"isUserLoggedin\">\n    <a class=\"btn btn-default\">Welcome {{ userName }}</a>\n       <button class=\"btn btn-outline-light my-2 my-sm-0\" (click) =\"logout()\"  routerLink=\"/\">Logout</button>\n    </div>\n    <div *ngIf=\"!isUserLoggedin\">\n\n       <button class=\"btn btn-outline-light my-2 my-sm-0\"   routerLink=\"/login\">Login</button>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/productdetails/productdetails.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productdetails/productdetails.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" padding:20px \">\n\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n\n                      <img src=\"data:image/jpeg;base64,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\" alt=\"image not avilable\" style= \"width: 416px; height: 416px\" ><br>\n                      <button  class=\"btn btn-outline-info col-md-5\" style=\"padding: 10px\" (click)=\"addToCart()\"  >Add to Cart</button>\n                      <button class=\"btn btn-outline-success col-md-5\" style=\"padding: 10px\" >Buy now</button>\n                  </div>\n                  <div class=\"col-md-6\">\n\n                      <table>\n                          <tr>\n                              <td><h3>MacBook Pro </h3></td>\n                          </tr>\n                          <tr>\n                              <td><h3>Rs. 225000</h3></td>\n                          </tr>\n                          <tr>\n\n                              <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>\n\n                          <tr>\n                              <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>\n                          <tr>\n                              <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>\n                          <tr>\n                              <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>\n                          <tr><td class=\"row\"><span class=\"col-md-4\">Seller</span>\n                              <span class=\"col-md-4\"> RetailNet</span>\n                          </td></tr>\n                          <tr>\n                              <td class=\"row\">\n                                  <span class=\"col-md-4\">Highlights</span>\n\n                                  <td><span class=\"col-md-4\"></span><ul><li>Effective Pixels: 24.2 MP</li>\n                                      <li><span class=\"col-md-4\">Sensor Type: CMOS</span></li>\n                                      <li><span class=\"col-md-4\"></span>WiFi Available</li>\n                                      <li><span class=\"col-md-4\"></span>1080p at 60p + Time-Lapse</li></ul>\n\n                              </td></tr>\n                      </table>\n                  </div>\n              </div>\n\n          </div >\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n  <img src=\"data:image/jpeg;base64,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\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{product.productname}}</h5>\n    <p class=\"card-text\">{{product.productprice}}</p>\n    <p class=\"card-text\">{{product.productdiscription}}</p>\n    <a routerLink=\"/productdetails/{{product.productid}}\" class=\"btn btn-primary\">Buy Now</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container bg-default\">\n  <h2>Signup Form</h2>\n    <div class=\"form-group\">\n      <label for=\"fname\">Full Name</label>\n      <input type=\"text\" [(ngModel)] =\"fname\" class=\"form-control\" placeholder=\"Enter fullname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email:</label>\n      <input type=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Enter email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Password:</label>\n      <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Enter password\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Mobile No:</label>\n      <input type=\"number\" [(ngModel)]=\"phone\" class=\"form-control\" placeholder=\"Enter mobile number\">\n    </div>\n\n    <button  (click)=signup() class=\"btn btn-primary\">Submit</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/slider/slider.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slider/slider.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <!-- Indicators -->\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n  </ul>\n\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"./assets/images/slide1.jpg\" class=\"img-fluid\" alt=\"Los Angeles\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"./assets/images/slide2.jpg\" class=\"img-fluid\" alt=\"Chicago\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"./assets/images/slide3.jpg\" class=\"img-fluid\" alt=\"New York\">\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n\n</div>\n"

/***/ }),

/***/ "./src/app/addproduct/addproduct.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHByb2R1Y3QvYWRkcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addproduct/addproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.ts ***!
  \****************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





// var apiurl = "http://localhost:7000/addproduct";
var apiurl = "/api/addproduct";
var AddproductComponent = /** @class */ (function () {
    function AddproductComponent(router, http, toastr) {
        this.router = router;
        this.http = http;
        this.toastr = toastr;
    }
    AddproductComponent.prototype.ngOnInit = function () {
        this.productname = "";
        this.productprice = null;
        this.productdiscount = null;
        this.productdiscription = "";
    };
    AddproductComponent.prototype.addproduct = function () {
        var _this = this;
        var requestobj = {
            productname: this.productname,
            productprice: this.productprice,
            productdiscount: this.productdiscount,
            productdiscription: this.productdiscription
        };
        console.log(requestobj);
        this.http.post(apiurl, requestobj).subscribe(function (response) {
            console.log("response from addproduct ", response);
            if (response['code'] == 200) {
                _this.router.navigate(['/']);
            }
            else {
                _this.toastr.error("Product not added");
            }
        }, function (error) {
            console.log("Error to add product ", error);
        });
    };
    AddproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addproduct',
            template: __webpack_require__(/*! raw-loader!./addproduct.component.html */ "./node_modules/raw-loader/index.js!./src/app/addproduct/addproduct.component.html"),
            styles: [__webpack_require__(/*! ./addproduct.component.css */ "./src/app/addproduct/addproduct.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AddproductComponent);
    return AddproductComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'product', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'addproduct', component: _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_9__["AddproductComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"] },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordComponent"] },
    { path: 'productdetails/:id', component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_10__["ProductdetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// var apiurl = "http://localhost:7000/allproducts";
var apiurl = "/api/allproducts";
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        var _this = this;
        this.http = http;
        this.title = 'ang1';
        this.products = null;
        this.http.get(apiurl).subscribe(function (response) {
            console.log(response);
            _this.products = response["data"];
        }, function (error) {
            console.log("error in getting products");
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/slider/slider.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_12__["SliderComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
                _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_15__["AddproductComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_17__["AdminComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_18__["ForgotpasswordComponent"],
                _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_19__["ProductdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent() {
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// var apiurl = "http://localhost:7000/allproducts";
var apiurl = "/api/allproducts";
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        var _this = this;
        this.http = http;
        this.http.get(apiurl).subscribe(function (response) {
            _this.products = response["data"];
            _this.products.image = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAQDw8PDw8PDxAPDw8PDw8PDw8QFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OFxAQGCsdHR0tKysrKy4tMC0tKystLS0tKystLS0tLSstLSstLS0rLS0rLS0tKy03Nzc3Ny0tKystK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAgMGBwEEBQj/xABSEAABAwIBBAwICwMJCQAAAAABAAIDBBEhBQcSMQYTMjRBUWFxcrKz0SIzc3SRk7G0FBUkUlR1gYOhwdIXQqIjRFNiZJLT4eIlNWOChJSkwsP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIEAwX/xAAlEQEAAgIBAwQCAwAAAAAAAAAAAQIDESEEEjEiMjNRE4FBYXH/2gAMAwEAAhEDEQA/ALxQha0+UIIzZ80TDxPkY0/iUGyhc85box/Oqf10fek/H9F9LpvXxd6DpIXN+P6L6XTevi70fH9F9LpvXx96DpIXN+P6L6XTevi71kZeovpdN6+LvQdFC0mZYpXYNqacniE0Z/NbjXAi4NwdRGIKDKEIQCEIQCELBNtaDKE1BUxvvoPY/RNnaDmu0TrsbainUAhCEAhCEAhCZlqo2bqRjek5rfageQtT4yp/6eH1jO9HxnT/ANPD61neg2llafxrTfSIPWs70fGtN9Ig9azvQbiFp/GlN9Ih9azvSvjKn/p4fWM70G0haza+A6pojzSM71sNcDiDccYxCAQhCCus6uWqq8WT6B7mVE7ow9zDou0ZC4NbpcAsx7iRwMK5VDmvjDRt9ZK+S13GOOIC/O9rieddrLcA+OoXnEkxHm0aWqH/ALH0qSaS3Wu4brEIO7NZRnXU1Xopv8NI/ZPR/Sar0Uv+Gp4HJbSr2w9O2FKbNs3k9FGZ6WR9TC3xjXRR7dGPn+CLObq4AR7IzsYyBVZRm2uA6MTQDNO6MaEXG3V4TuIBekXLXc3iwCdqxiiZVsM1lMBjV1ZPCQKZo+wbXgsfsupfpdZ/43+GrBlCaUmNOumDHMeEDfmvp7YVlWDxkU5Ho0FqZDfXZCro2y1Lp8nzBx1WbYEaQLNTXtBDrjWAVY6iucCnD4qdp/enez7HU0wKyzn6ekUmYjS2AVlNUu4Z0G+wJ1R84IQhAKKZxw51NDCHOY2oq4oZCxxa4sLXutcYjFoUrUSzgVDB8AjLgHvr4y1l/CcGxyXI5rhBDczADKmWJsum0U8+liSXObV2a9x4ToEK31WWbRgFW8gAXjrxgLaqyO3tVmoBCEIBCEIIXnEyvJHFJHG90bWQ7bMY3FkjtIuEcbXDFoOg8kixsAOFUJNlGV5JLhc47kE+k4n7Vdec5n8jWO4TFC37AJCOsVRBVgOmrfx/wt7kg1knzj+CbcUgqodNZJ88pBq5PnlIAudYHKTYJDrXsHBx5L/mEU4auT5x/BY+Ev8AnfgEysFRD3wt4/e/BqnWbXZLUxSvtI9wjbpmLSJjljFy5mhqDrDBwsb8YwVfFSzNqL1bhwGOx/FB6bjeHAOBuHAEHjBxBWExkptoIBxQxj+AIUVDNkBtlaD/AJfdqldfTXF2TG2VYOdnu1SukHL3xRuHtTw2hInY3rQa+62Y5AFq0NtxMyLIfxoecFhqstSQJlbEgTD1Jh2Y5Juo5s23FL50OwmUiUd2bbil86/+Eq8l6j45WfTbhnQb7E4mqY+Azh8BuI1ak6j44QhCAVb5y2uOUcim50RNNccGkWix57XVkKv85G/Mk+cv6hSBqZtd9O6GUPfIlZarTNpvp3Qyj75ErLQCEIQCEIQV7nQ3vV9CPqvVCq+c55+T1fIyMHk8B6oYqwEuSClFIKqETOsPT+S0RINsZo33Tb357LaqtQ5S78lpmEtfGTeznNIvwjS/yKK3SsIKwiAlSzNoflZ6HeokpZm032eh3qK9LZM8RD5KPqBCMmeIh8lH1AhQQXZW7/acPOz3apW1JPYAca5+y4N+M4iDiXRh2N7EU1R6MCEVEuOC7MEbq9KTw6EdQAEptVjdcd8lk/EHHgsAF7TSG4s7MFWTr1Lejfcci41PC53DZdeIWAvr5Fz3iI8NwxItWQraeFrSBebpxSZuo9s1PgUvnQ7CVSAqObM9zS+dDsJV4zHL2z/FZZ+TmFsMTTrbFG024w0BbCbptwzoN9icR8YIQhAKvM5Mg+HZIbwmeQj7G4+1WGq+zk5Pe6syRUAfycVTJE84WBkZdvDf9w8CQNbNtvp3Qyh75ErKVYZsaZjKp5a2xdHXg4k3Aq4rKz0AhCEAhCEFcZymEQVxP7wicObabe0FUSVfWdHe9X0I+q9UIVYCSUgpbk2SqjXrr2YBckuIAGJJwwWa/I1XSywtqoXwmQsewPA8JukMRb2Jx98CCWua4PY4Y6LhqK38s5cqqx8clXMJXQhwiDW6LWl1tJ3HfAehZ5VziklF1grQFLM2m/D0O9REqW5s99nod6D0xk3xMPko+qEJOSSPg8GibjaY7EG4I0BwoWRXGyr/AHnzzs9zlRJxJOy91spffs9zlTMkpHCu/pvY1E8OzkWlhkEzpQ921MDtFmu97WHGVIqfJVK4nQMjgI2yX08C1xcPT4JUZ2I1Qe6oYWyODmNB2pmmR4V7lTCljYHyStZO3bmtBjcywaQXXcBwX0iSvLPa0WmNpFvo3T00Rj0wx9g0OA02ucRa9sOFPNhiLi0aRtGJCQRazr6I5zY+hLo/5JujZ7gAALRBpwFsba01SFsYe1sdQdJxNzGTYWsGjkAsAufctbn7IpY4pI9s0XhuiHjw2kkEX4NRTW0xuY8hr2ua1jrOLSLO1auYp+jYI49r0ZS3QDAdpDTYNtc21lYdG2ON4Y17WkNwLLNDhYaXJfD0KxvbVb235cqSEKKbNBZtL50OwlUvLgQols53NL52OwlVvHDuvaZx2hZ1E8OijcNTo2EcxaE+tXJXiIPIx9QLaXm+YEIQgFF9nu4ovrGHs5VKFF9nu4ovrGHs5UHCzfb6+5r/AHyJWKq6zfb6+5r/AHyJWKgEIQgEIQgrnOc8GnrB81sQPPtbj+YVDEq9s5fiK/7rsVRBVgYKbKWU25VCSUgldXIxYBUvdHHKY6bSjbK0uYH7dE29gRwOK2KuYRulDYYA19KxwvC6IgO0HbnSON3WOP7o4kHBWLrF1hFBUuzY78PQ71ECVLs2O/D0O9B6R2OC1HS+bw9QIRsd3nS+bw9QIWRXuzqMNyiwgnw5I3nk+TTNsPQuRWT2XTzmyaNdCeWLsZ1G5Z8cV9HpI9H7ed7a4SvYHj8M8Mx3ij8MBx0fD/q425lM5ZiYoTYtbtzg46c2i5oZJZ2lutEm1vsVSUOWJqd94JTHpWa7RtiL6sVKqnZJVCDTE79LQDv3e5ZzYLWvuGsU7if6TmtiDhTlunZ0jWEsfKBoFjjjY8dsSlVFODUQ7uxZKXWfIG3btejcA24/xVSv2bVoIHwmS56J/JdrJmySpk0Sap7cMQ62PoC8p6W8fy1We7wsOiqPDnY4nS20loN9ztbNXJe60KPep0jd+1x6d3yON8L6QdqN76lGKjZXI12iJXHDWbWWxT5ZmlGi6UuB12IIWfwWjl61py6htbBRLZwcKXzsdjKpUHYKJ7N9VL52OxlUv4dk/Hb/ABadI0COMDABjQBxANCeTdPuGdFvsTi8HzghCEAovs93FF9Yw9nKpQovs93FF9Yw9nKgj2blxNUb8EeUB9gq4lZKrXNtvp3Qyh75ErKQCEIQCEIQV1nQaBT1hA1sjJ5ToOHsAVBlX7nS3tV+Tj6r1QJKsDDimyUpxSHKodpaox6dmseHs0HNeCQRpB3ARwtCJ61zr3awEjRJBkJ0b3t4TjxLXKQUVhYKCsIBS7Nkflh6HeogSpdmxPyw9DvUHpfIsWhTU7ASQ2CIXOs+AEJzJviIfJR9QIUFU52nWq4ulF2M6iD5rqXZ3HWq4uHwouxnUDmkHKF9HpZ9H7c+X3Nx8oIH48YPAV1smVYmgfGDdzA5tjhgb6PsUVfLxLobHq0sktbA7pwwItqXRPK451LYMbgHNMfhDW7/AD4ls0zpNEFrhYAggHG66+UNGSF7RrLbg8o1alG6RsrZIWlpBc5oOjfHEYkcybevb2yeZOXN0uUg86mGQaSQNY5l3XuXA4Wwww4ta16fI8ZBa5oAksbjCxupPk2jbE2zRojivcXXje3Dqx0mJbEQP72B/BRrZuPBpfO29jKpS5RXZvuaXztvYyrkv4dNvjstWm3DOg32JxNU24Z0G+xOrnfOCEIQCi+z3cUX1hD2cqlCi+z3cUX1hD2cqCO5tt9O6GUPfIlZSrXNtvp3Qyh75ErKQCEIQCEIQV3nS3tV+Tj6r15/V/5097Vfk4+q9UAVYCXJDilFNlVGCUgrJSSisErBKCkoBS/Nhvw9DvUPUvzX78PQ70Hp3JviYfJR9QIRk3xMPko+oELIqLPKSKqK3zoeynVfSyX1qfZ6nWqYulF2UyrmR67enn0sTG5K2618E5SV2gdWJ4VpOKQHLp7k7EuyRXY+E7Xqx4FJ6SRuvC4VbUM7i8WwFxdS+mqwG6+da8t47a4lLaepBIauvBMoNk2uu846vwUsopweHgGK8b1dlLbdclRXZxuaXzxvYyqSseoxs3dhSj+2N7KVc144l63n0Stim3DOi32JxNU24Z0G+xOrmfPCEIQCi2z3cUX1jD2cqlKi2z3cUX1hD2cqCPZtt9O6GUffIlZSrXNtvp3Qyj75ErKQCEIQCEIQV1nT3tV+Tj6r15/Kv/Orvar8nH1Xrz8VYGHJslKKQVQkpBSnJBKDBWEFYJQBUvzYH5Yeh3qHkqXZr9+nod6D1Bk3xMPko+oFhZyZ4iHyUfUCFkU7nt3zFzxdlMq3eVY2e/fMXPF2cyrZ5C7MHtCHLAasJQXRDMtqlcGrYOUHG1sACudpIYSSt7ZiHepq55IA1E4kayp1kme1hyDhVc0UgDgeK2A4VK8lVNruJx1nk4gpPL3xW1KcNqQFwNmL7tpfPG9lIkU9ffFx1auVc3L1Vp/Bcf503D7uReGWuqy6r23SV5U24Z0G+xOpqn3DOi32J1cDiCEIQCi+z3cUX1jD2cqlCi+z3cUX1jD2cqCOZtt9O6GUffIlZarTNtvp3Qyj75ErLQCEIQCEIQVznV3tV+Tj6r159K9BZ1d7Vfk4+q9efCrAS5IKUUgqhJSCUolIcgwSsIWCUGCphmu34eh3qHqX5rd+Hod6D1Dk3xEPko+oELGTfEQ+Sj6gQsims+R+Uxc8XZyqs1ZOfR3ymP7rs5VV73ldnT+1YOl4CQ6RM3QF7pqGwHJ1rlqhyzpq7NOjDLbFdGLKOFuDhUfDylNckSRwlkGUARa+rgWZpdKSnscNvHDw6DlGI5iNR1rfydKTNAP+KD/CVjL7Jb7+NPUtNuGdBvsTiaptwzoN9idXzmAhYWUAovs93FF9Yw9nKpQovs93FF9Yw9nKgjubbfTuhlH3yJWUq1zbb6d0Mo++RKykAhCEAhCEFc51t7Vfk4+q9eeyV6Dzrb2q/Jx9V689FWBhxSCUolIJVGHA2vY2JtextfivxpDgbXsbHUeA/an2Vj2gBthy2xtcm3Ncn0rD66Qm5IN+C2GtBqlYSnuuSeM3SCgzdS/Ncflp6Heocpjmt36eh3rI9RZM8RD5KPqBCMm+Ih8lH1AhBSWfN/yto4to/GOVVk5Wnn+yXIx7Kpoux4ibfikj08Pta8+hU/8ADm8IP2Lpw3rEalW04pBetU1jeX8Fj4W3lXt+Wn2NsOS2FaQrG8voShXM5fQFfyU+zbdCdaueK9n9b0BONylHxO9AT8lPtHSY1bdGdGWI8TyfQxy4oyswcDj9gXT2KwS5QrYoYm7q7RjqvunHmbcrGXLWazESj1hS7hnQb7E6kxtAAA1AADmCUuJQhCEAovs93FF9Yw9nKpQonnGmbHDSyPNmR10T3uOprRHLiUEfzan5W7oZQ98jVmKo8ztZt1QX/OpquQcz64W/AK3EAhCEAhCEFb51j8mq+SOI/wAL156JXoXOxCQyW4syqgZExxwbt8ZkIjJ4C4SYcegRrsvPTwQbEEHiIsfQrASU25KJSCVQlySSsuKQSgLpJKLrF1kCmOa0/LD0O9Qy6mebSF5ncWNJkkbtUDeGSVwNgOQayeAAoPUWTPEQ+Rj6gQnKSHa42MGIYxrAeiAPyWUCK6iinjdFNGyWN4s5kjQ5p+wqH1WajI8hJEEkd+COV1vsDr2U4Qgr/wDY/kj5s/rGfpSTmdyRxTj7yP8AQrCQgrs5nMk/2j+/F+hH7G8k/wBo/vxfoViIQV4MzmSeKo/vxfoWf2O5I+bP6xn6VYSEEAjzQZHBvtczuQygD8AFJ8gbF6GgBFJTsiLhZz8XSOHEXuubcl12EIBCEIBCEIBauUsnw1MToZ42yRPFnMdqK2kIOFsc2J0eTy80zHNL8PCeXaLb30G8QvjzruoQgEIQgEIQgYrKSKZjopo2SxPGi+ORoexw4iDgVE6vNhkmS9oZYr8EVRMxo5m3sFM0IIE/NJko/Sh/1Lj7QmzmgyVx1fr/APSrBQgr52aDJR+lDmn72pIzO5J46v17f0qw0IK9dmdySfpQ5p/9KP2O5I4qr/uD+QVhIQQKPNFkcEHa6g8hqZQD6CpJkLYrQUJJpaaOJ5GiZMXylvEXuu63JddlCAQhCAQUIQCEIQYWUIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCEIQCwhCACFlCDBQhCACyhCAKEIQCEIQf/9k=";
        }, function (error) {
            console.log("Error in getting products ", error);
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.products = null;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





// const loginapi = "http://localhost:7000/login";
var loginapi = "/api/login";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, router, http) {
        this.toastr = toastr;
        this.router = router;
        this.http = http;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var requestobj = {
            email: this.email,
            password: this.password
        };
        this.http.post(loginapi, requestobj).subscribe(function (response) {
            if (response["code"] == 200) {
                localStorage.email = response["data"]["email"];
                localStorage.name = response["data"]["name"];
                localStorage.wallet = response["data"]["wallet"];
                localStorage.role = response["data"]["role"];
                _this.router.navigate(['/']);
            }
            else {
                _this.toastr.error('Invalid Login');
            }
        }, function (error) {
            _this.toastr.error('Some Error occured');
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.email = "";
        this.password = "";
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.isUserLoggedin = true;
        if (localStorage.email) {
            this.isUserLoggedin = true;
        }
        else {
            this.isUserLoggedin = false;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.projectname = "COER Project";
        this.userName = "";
    };
    NavbarComponent.prototype.logout = function () {
        this.isUserLoggedin = false;
        localStorage.clear();
    };
    NavbarComponent.prototype.ngDoCheck = function () {
        if (localStorage.email) {
            this.isUserLoggedin = true;
            this.userName = localStorage.name;
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/productdetails/productdetails.component.css":
/*!*************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RkZXRhaWxzL3Byb2R1Y3RkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/productdetails/productdetails.component.ts":
/*!************************************************************!*\
  !*** ./src/app/productdetails/productdetails.component.ts ***!
  \************************************************************/
/*! exports provided: ProductdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsComponent", function() { return ProductdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductdetailsComponent = /** @class */ (function () {
    function ProductdetailsComponent() {
    }
    ProductdetailsComponent.prototype.ngOnInit = function () {
    };
    ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productdetails',
            template: __webpack_require__(/*! raw-loader!./productdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/productdetails/productdetails.component.html"),
            styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/productdetails/productdetails.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductdetailsComponent);
    return ProductdetailsComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductsComponent.prototype, "product", void 0);
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




// var apiurl = "http://localhost:7000/signup";
var apiurl = "/api/signup";
var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.email = "";
        this.fname = "";
        this.password = "";
        this.phone = "";
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var requestobj = {
            email: this.email,
            name: this.fname,
            password: this.password,
            phone: this.phone
        };
        console.log(requestobj);
        this.http.post(apiurl, requestobj).subscribe(function (response) {
            console.log("response from signup ", response);
            _this.toastr.success("Signup Success");
        }, function (error) {
            console.log("Error from signup ", error);
        });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/slider/slider.component.css":
/*!*********************************************!*\
  !*** ./src/app/slider/slider.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/slider/slider.component.ts":
/*!********************************************!*\
  !*** ./src/app/slider/slider.component.ts ***!
  \********************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/slider/slider.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Dhanesh\Desktop\mean5\ang1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map