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

module.exports = "<div class=\"container bg-default\">\n  <h2>Add Product Form</h2>\n    <div class=\"form-group\">\n      <label for=\"productname\">Product Name</label>\n      <input type=\"text\" [(ngModel)] =\"productname\" class=\"form-control\" placeholder=\"Enter productname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"price\">Product Price:</label>\n      <input type=\"number\" [(ngModel)]=\"productprice\" class=\"form-control\" placeholder=\"Enter Product Price\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"pwd\">Discount:</label>\n      <input type=\"number\" [(ngModel)]=\"productdiscount\" class=\"form-control\" placeholder=\"Enter discount\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"desc\">Product Description</label>\n      <input type=\"text\" [(ngModel)]=\"productdiscription\" class=\"form-control\" placeholder=\"Enter product discription\">\n    </div>\n      <div class=\"form-group\">\n      <label for=\"desc\">Product Image</label>\n      <input type=\"text\" [(ngModel)]=\"productimage\" class=\"form-control\" placeholder=\"Enter product Image URL\">\n    </div>\n    <button  (click)=addproduct() class=\"btn btn-primary\">Add Product</button>\n</div>\n"

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

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isCartEmpty\" class=\"alert alert-danger\">\nYour cart is empty\n</div>\n\n<div *ngFor = \"let item of cartitems\" class=\"card\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n      <img style=\"height:50px ; width:50px\" src={{item.productimage}} class=\"card-img-top\" alt=\"...\">\n    <h5 class=\"card-title\">{{item.productname}}</h5>\n    <p class=\"card-text\">{{item.productprice}}</p>\n  </div>\n  <button (click)=\"remove(item)\" value={{item.productid}} class=\"btn btn-danger\">Remove</button>\n</div>\n<h3>Total Price: {{totalPrice}}</h3>\n<a *ngIf=\"!isCartEmpty\" class=\"btn btn-primary\" routerLink=\"/checkout\">Checkout</a>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 order-md-2 mb-4\">\n          <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n            <span class=\"text-muted\">Your cart</span>\n            <span class=\"badge badge-secondary badge-pill\">{{totalItems}}</span>\n          </h4>\n          <ul class=\"list-group mb-3\" >\n\n            <li *ngFor= \"let item of cartitems\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\n              <div>\n                <h6 class=\"my-0\">{{item.productname}}</h6>\n                <small class=\"text-muted\">x {{item.quantity}}</small>\n              </div>\n              <span class=\"text-muted\">{{item.productprice}}</span>\n            </li>\n\n            <li class=\"list-group-item d-flex justify-content-between\">\n              <span>Total (Rs)</span>\n              <strong >{{totalPrice}}</strong>\n            </li>\n          </ul>\n\n          <form class=\"card p-2\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Promo code\">\n              <div class=\"input-group-append\">\n                <button type=\"submit\" class=\"btn btn-secondary\">Redeem</button>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-8 order-md-1\">\n          <h4 class=\"mb-3\">Billing address</h4>\n\n            <div class=\"row\">\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"firstName\">First name</label>\n                <input type=\"text\" [(ngModel)] =\"firstname\"  class=\"form-control\" id=\"firstName\" placeholder=\"\" value=\"\" required>\n\n              </div>\n              <div class=\"col-md-6 mb-3\">\n                <label for=\"lastName\">Last name</label>\n                <input type=\"text\" [(ngModel)] =\"lastname\" class=\"form-control\" id=\"lastName\" placeholder=\"\" value=\"\" required>\n\n              </div>\n            </div>\n\n\n\n\n            <div class=\"mb-3\">\n              <label for=\"address\">Address</label>\n              <input type=\"text\" [(ngModel)] =\"add1\" class=\"form-control\" id=\"address\" placeholder=\"Enter complete address\" required>\n\n            </div>\n\n            <div class=\"mb-3\">\n              <label for=\"address2\">Address 2 <span class=\"text-muted\">(Optional)</span></label>\n              <input type=\"text\" [(ngModel)] =\"street\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\">\n            </div>\n\n              <div class=\"mb-3\">\n              <label for=\"address2\">Mobile Number</label>\n              <input type=\"text\" [(ngModel)] =\"mobile\" class=\"form-control\" id=\"mobile\" placeholder=\"Mobile number\">\n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-5 mb-3\">\n                <label for=\"country\">State</label>\n                 <input type=\"text\" [(ngModel)] =\"state\" class=\"form-control\" id=\"state\" placeholder=\"Country\">\n\n              </div>\n              <div class=\"col-md-4 mb-3\">\n                <label for=\"state\">City</label>\n               <input type=\"text\" [(ngModel)] =\"city\" class=\"form-control\" id=\"city\" placeholder=\"State\">\n\n              </div>\n              <div class=\"col-md-3 mb-3\">\n                <label for=\"zip\">Zip</label>\n                <input type=\"text\" [(ngModel)] =\"pincode\" class=\"form-control\" id=\"zip\" placeholder=\"\" required>\n\n              </div>\n            </div>\n            <hr class=\"mb-4\">\n\n            <h4 class=\"mb-3\">Payment</h4>\n\n            <div class=\"d-block my-3\">\n              <div class=\"custom-control custom-radio\">\n                <input id=\"cod\" name=\"paymentMethod\" type=\"radio\" class=\"custom-control-input\" checked required>\n                <label class=\"custom-control-label\" for=\"credit\">COD</label>\n              </div>\n\n\n            </div>\n            <hr class=\"mb-4\">\n            <button (click)=placeOrder() class=\"btn btn-primary btn-lg btn-block\" >Continue to checkout</button>\n\n        </div>\n      </div>\n\n    </div>\n"

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

module.exports = "<nav class=\"navbar navbar-expand-lg navba-dark bg-dark text-light\">\n  <a class=\"navbar-brand text-light\" href=\"#\">{{projectname | uppercase}} </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link text-light\" routerLink=\"/home\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-light\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle text-light\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Manage\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" routerLink=\"/addproduct\">Add Product</a>\n          <a class=\"dropdown-item\" routerLink=\"/signup\">Signup</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link text-light\" routerLink=\"/cart\">Cart</a>\n      </li>\n    </ul>\n    <div *ngIf=\"isUserLoggedin\">\n    <a class=\"btn btn-default\">Welcome {{ userName }}</a>\n       <button class=\"btn btn-outline-light my-2 my-sm-0\" (click) =\"logout()\"  routerLink=\"/\">Logout</button>\n    </div>\n    <div *ngIf=\"!isUserLoggedin\">\n\n       <button class=\"btn btn-outline-light my-2 my-sm-0\"   routerLink=\"/login\">Login</button>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orderdetails/orderdetails.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orderdetails/orderdetails.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 order-md-6 mb-6\">\n          <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n            <span class=\"text-muted\">Order Details</span>\n            <span class=\"badge badge-secondary badge-pill\">{{totalItems}}</span>\n          </h4>\n          <ul class=\"list-group mb-6\" >\n            <li *ngFor= \"let order of orders\" class=\"list-group-item d-flex justify-content-between lh-condensed\">\n              <div class=\"row\">\n              <div>\n                <h6 class=\"my-0\">Order No: {{order.id}}</h6>\n                <small class=\"my-0\">Total Items: {{order.items.length}}</small><br/>\n                 <small>Total Price: {{order.totalprice}}</small>\n              </div>\n              <div class=\"col-sm-6\" style=\"float:left\">\n               <ul class=\"list-group\">\n               <li *ngFor= \"let item of order.items\" class=\"list-group-item\">\n                <div>\n                <h6 class=\"my-0\">{{item.productname}}</h6>\n                <small>{{item.productprice}}</small>\n              </div>\n               </li>\n               </ul>\n              </div>\n              </div>\n            </li>\n\n          </ul>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/productdetails/productdetails.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/productdetails/productdetails.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\" padding:20px \">\n\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n\n          <img src={{product.image}} alt=\"no image available\" style= \"width: 416px; height: 416px\" ><br>\n          <div *ngIf=\"productalreadyincart\">\n<button  class=\"btn btn-outline-info col-md-5 disabled\" style=\"padding: 10px\">Already in Cart</button>\n</div>\n\n<button  class=\"btn btn-outline-info col-md-5\" style=\"padding: 10px\" (click)=\"addToCart()\">Add to Cart</button>\n\n\n<!--\n          <button  class=\"btn btn-outline-info col-md-5\" style=\"padding: 10px\" (click)=\"addToCart()\"  >Add to Cart</button>\n          -->\n\n          <button class=\"btn btn-outline-success col-md-5\" style=\"padding: 10px\" (click)=\"buyNow()\">Buy now</button>\n           <button style=\"float:left;\" class=\"btn btn-outline-primary col-md-5\" style=\"padding: 10px\" (click)=\"goToCart()\">Go to Cart</button>\n      </div>\n      <div class=\"col-md-6\">\n\n          <table>\n          <tr>\n                  <td><h3>Product status {{productalreadyincart}}</h3></td>\n              </tr>\n              <tr>\n                  <td><h3>{{product.productname}}</h3></td>\n              </tr>\n              <tr>\n                  <td><h3>{{product.productprice}}</h3></td>\n              </tr>\n              <tr>\n\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>No cost EMI ₹8,000/month. Standard EMI also availableView Plans</td></tr>\n\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span> Bank Offer10% Instant Discount* with Axis Bank Credit and Debit CardsT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Bank Offer10% off* with Axis Bank Buzz Credit CardT&C</td></tr>\n              <tr>\n                  <td><span><img src=\"https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90\" width=\"18\" height=\"18\" class=\"_3Amlen\" ></span>Free 16GB SD Card & Camera Bag with this DSLR</td></tr>\n              <tr><td class=\"row\"><span class=\"col-md-4\">Seller</span>\n                  <span class=\"col-md-4\"> RetailNet</span>\n              </td></tr>\n              <tr>\n                  <td class=\"row\">\n                      <span class=\"col-md-4\">Highlights</span>\n\n                      <td><span class=\"col-md-4\"></span><ul><li>Effective Pixels: 24.2 MP</li>\n                          <li><span class=\"col-md-4\">Sensor Type: CMOS</span></li>\n                          <li><span class=\"col-md-4\"></span>WiFi Available</li>\n                          <li><span class=\"col-md-4\"></span>1080p at 60p + Time-Lapse</li></ul>\n\n                  </td></tr>\n          </table>\n      </div>\n  </div>\n\n</div >\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 18rem;\">\n<a routerLink=\"/productdetails/{{product.productid}}\">\n  <img src=\"data:image/jpeg;base64,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\" class=\"card-img-top\" alt=\"...\">\n  </a>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{product.productname}}</h5>\n    <p class=\"card-text\">{{product.productprice}}</p>\n    <p class=\"card-text\">{{product.productdiscription}}</p>\n    <a routerLink=\"/productdetails/{{product.productid}}\" class=\"btn btn-primary\">Show Details</a>\n\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// var apiurl = "http://localhost:7000/api/addproduct";
var apiurl = "/api/addproduct";
let AddproductComponent = class AddproductComponent {
    constructor(router, http, toastr) {
        this.router = router;
        this.http = http;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.productname = "";
        this.productprice = null;
        this.productdiscount = null;
        this.productdiscription = "";
    }
    addproduct() {
        var requestobj = {
            productname: this.productname,
            productprice: this.productprice,
            productdiscount: this.productdiscount,
            productdiscription: this.productdiscription
        };
        console.log(requestobj);
        this.http.post(apiurl, requestobj).subscribe((response) => {
            console.log("response from addproduct ", response);
            if (response['code'] == 200) {
                this.router.navigate(['/']);
            }
            else {
                this.toastr.error("Product not added");
            }
        }, (error) => {
            console.log("Error to add product ", error);
        });
    }
};
AddproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addproduct',
        template: __webpack_require__(/*! raw-loader!./addproduct.component.html */ "./node_modules/raw-loader/index.js!./src/app/addproduct/addproduct.component.html"),
        styles: [__webpack_require__(/*! ./addproduct.component.css */ "./src/app/addproduct/addproduct.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], AddproductComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AdminComponent);



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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productdetails/productdetails.component */ "./src/app/productdetails/productdetails.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orderdetails/orderdetails.component */ "./src/app/orderdetails/orderdetails.component.ts");














const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'product', component: _products_products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"] },
    { path: 'addproduct', component: _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_9__["AddproductComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"] },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordComponent"] },
    { path: 'orderdetails', component: _orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_13__["OrderdetailsComponent"] },
    { path: 'productdetails/:id', component: _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_10__["ProductdetailsComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/app/common.service.ts");




//var apiurl = "http://localhost:7000/allproducts";
// var apiurl = "/api/allproducts";
var cartapi = "/api/getcart";
// var cartapi = 'http://localhost:7000/api/allcartitems';
let AppComponent = class AppComponent {
    constructor(http, commonservice) {
        this.http = http;
        this.commonservice = commonservice;
        this.title = 'ang1';
        this.products = [];
        if (localStorage.email) {
            var requestObj = {
                email: localStorage.email
            };
            this.http.post(cartapi, requestObj)
                .subscribe((response) => {
                console.log('response from cart api');
                this.commonservice.cartitems = response["data"];
            }, (error) => {
                console.log("error from cart api");
            });
        }
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
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
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _discount_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./discount.pipe */ "./src/app/discount.pipe.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./orderdetails/orderdetails.component */ "./src/app/orderdetails/orderdetails.component.ts");
























let AppModule = class AppModule {
};
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
            _productdetails_productdetails_component__WEBPACK_IMPORTED_MODULE_19__["ProductdetailsComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_20__["CartComponent"],
            _discount_pipe__WEBPACK_IMPORTED_MODULE_21__["DiscountPipe"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_22__["CheckoutComponent"],
            _orderdetails_orderdetails_component__WEBPACK_IMPORTED_MODULE_23__["OrderdetailsComponent"]
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



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






// var cartapi = "http://localhost:7000/api/allcartitems";
var cartapi = "/api/allcartitems";
// var removefromcartapi = "http://localhost:7000/api/removefromcart";
var removefromcartapi = "/api/removefromcart";
let CartComponent = class CartComponent {
    constructor(router, toastr, http, commonservice) {
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.commonservice = commonservice;
        this.cartitems = [];
        this.isCartEmpty = true;
        this.totalPrice = 0;
        if (!localStorage.email) {
            this.router.navigate(['/']);
        }
        else {
            if (this.commonservice.cartitems.length > 0) {
                this.cartitems = this.commonservice.cartitems;
                this.isCartEmpty = false;
                this.cartitems.forEach((each) => {
                    console.log("product price", each.productprice);
                    this.totalPrice = this.totalPrice + each.productprice;
                });
            }
            else {
                this.http.post(cartapi, { email: localStorage.email })
                    .subscribe((response) => {
                    this.cartitems = response["data"];
                    this.commonservice.cartitems = response["data"];
                    if (this.cartitems.length > 0) {
                        this.isCartEmpty = false;
                        this.cartitems.forEach((each) => {
                            this.totalPrice = this.totalPrice + each.productprice;
                        });
                    }
                }, (error) => {
                    console.log("error here");
                });
            }
        }
    }
    ngOnInit() {
    }
    remove(item) {
        var robj = {
            email: localStorage.email,
            productid: item.productid
        };
        console.log("request to remove ", robj);
        this.http.post(removefromcartapi, robj)
            .subscribe((response) => {
            var index = this.cartitems.indexOf(item);
            console.log(index);
            this.commonservice.cartitems.splice(index, 1);
            console.log("response ", response);
            this.toastr.success("Removed from cart");
            this.totalPrice -= item.productprice;
        });
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], CartComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






// var cartapi = "http://localhost:7000/api/allcartitems";
var cartapi = "/api/allcartitems";
// var placeorderapi = "http://localhost:7000/api/createorder";
var placeorderapi = "/api/createorder";
// var clearcartapi = "http://localhost:7000/api/clearcart";
var clearcartapi = "/api/clearcart";
let CheckoutComponent = class CheckoutComponent {
    constructor(router, toastr, http, commonservice) {
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.commonservice = commonservice;
        this.cartitems = [];
        this.totalPrice = 0;
        this.totalItems = 0;
        this.firstname = "";
        this.lastname = "";
        this.add1 = "";
        this.street = "";
        this.city = "";
        this.mobile = "";
        this.state = "";
        this.pincode = "";
        if (!localStorage.email) {
            this.router.navigate(['/']);
        }
        else {
            if (this.commonservice.cartitems.length > 0) {
                this.totalItems = this.commonservice.cartitems.length;
                this.cartitems = this.commonservice.cartitems;
                this.cartitems.forEach((each) => {
                    this.totalPrice = this.totalPrice + each.productprice;
                });
            }
            else {
                this.http.post(cartapi, { email: localStorage.email })
                    .subscribe((response) => {
                    this.cartitems = response["data"];
                    this.commonservice.cartitems = response["data"];
                    if (this.cartitems.length > 0) {
                        this.totalItems = this.commonservice.cartitems.length;
                        this.cartitems.forEach((each) => {
                            this.totalPrice = this.totalPrice + each.productprice;
                        });
                    }
                }, (error) => {
                    console.log("error here ", error);
                });
            }
        }
    }
    ngOnInit() {
    }
    placeOrder() {
        var requestObj = {
            email: localStorage.email,
            totalprice: this.totalPrice,
            firstname: this.firstname,
            lastname: this.lastname,
            add1: this.add1,
            street: this.street,
            mobile: this.mobile,
            state: this.state,
            city: this.city,
            pincode: this.pincode,
            items: this.cartitems
        };
        console.log(requestObj);
        this.http.post(placeorderapi, requestObj)
            .subscribe((response) => {
            console.log("response from placing order ", response);
            this.toastr.success("Order Placed Success");
            if (response["code"] == 200) {
                this.clearCart();
                this.commonservice.cartitems = [];
                this.router.navigate(['/orderdetails']);
            }
        }, (error) => {
            console.log("Error from placeing order ", error);
        });
    }
    clearCart() {
        this.http.post(clearcartapi, { email: localStorage.email })
            .subscribe((response) => {
            if (response["code"] == 200) {
                return true;
            }
            else {
                return false;
            }
        }, (error) => {
        });
    }
};
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], CheckoutComponent);



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommonService = class CommonService {
    constructor() {
        this.products = [];
        this.cartitems = [];
    }
};
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CommonService);



/***/ }),

/***/ "./src/app/discount.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/discount.pipe.ts ***!
  \**********************************/
/*! exports provided: DiscountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountPipe", function() { return DiscountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiscountPipe = class DiscountPipe {
    transform(value, args) {
        return "Rs." + (value * value);
    }
};
DiscountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'discount'
    })
], DiscountPipe);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotpasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/index.js!./src/app/forgotpassword/forgotpassword.component.html"),
        styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForgotpasswordComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



// var apiurl = "http://localhost:7000/api/allproducts";
var apiurl = "/api/allproducts";
let HomeComponent = class HomeComponent {
    constructor(http) {
        this.http = http;
        this.http.get(apiurl).subscribe((response) => {
            this.products = response["data"];
            this.products.image = "data:image/jpeg;base64,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";
        }, (error) => {
            console.log("Error in getting products ", error);
        });
    }
    ngOnInit() {
        this.products = null;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], HomeComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");





// const loginapi = "http://localhost:7000/api/login";
const loginapi = "/api/login";
let LoginComponent = class LoginComponent {
    constructor(toastr, router, http) {
        this.toastr = toastr;
        this.router = router;
        this.http = http;
    }
    login() {
        var requestobj = {
            email: this.email,
            password: this.password
        };
        this.http.post(loginapi, requestobj).subscribe((response) => {
            if (response["code"] == 200) {
                localStorage.email = response["data"]["email"];
                localStorage.name = response["data"]["name"];
                localStorage.wallet = response["data"]["wallet"];
                localStorage.role = response["data"]["role"];
                this.router.navigate(['/']);
            }
            else {
                this.toastr.error('Invalid Login');
            }
        }, (error) => {
            this.toastr.error('Some Error occured');
        });
    }
    ngOnInit() {
        this.email = "";
        this.password = "";
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], LoginComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() {
        this.userName = "";
        this.isUserLoggedin = true;
        if (localStorage.email) {
            this.isUserLoggedin = true;
        }
        else {
            this.isUserLoggedin = false;
        }
    }
    ngOnInit() {
        this.projectname = "COER Project";
        this.userName = "";
    }
    logout() {
        this.isUserLoggedin = false;
        localStorage.clear();
    }
    ngDoCheck() {
        if (localStorage.email) {
            this.isUserLoggedin = true;
            this.userName = localStorage.name;
        }
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



/***/ }),

/***/ "./src/app/orderdetails/orderdetails.component.css":
/*!*********************************************************!*\
  !*** ./src/app/orderdetails/orderdetails.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyZGV0YWlscy9vcmRlcmRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/orderdetails/orderdetails.component.ts":
/*!********************************************************!*\
  !*** ./src/app/orderdetails/orderdetails.component.ts ***!
  \********************************************************/
/*! exports provided: OrderdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsComponent", function() { return OrderdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






// var getorderdetailsapi = "http://localhost:7000/api/orderdetails";
var getorderdetailsapi = "/api/orderdetails";
let OrderdetailsComponent = class OrderdetailsComponent {
    constructor(router, toastr, http, commonservice) {
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.commonservice = commonservice;
        this.orderitems = [];
        this.orders = [];
        this.http.post(getorderdetailsapi, { email: localStorage.email })
            .subscribe((response) => {
            this.orders = response["data"];
            console.log("orders are ", this.orders);
        }, (error) => {
            console.log("error here ", error);
        });
    }
    ngOnInit() {
    }
};
OrderdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderdetails',
        template: __webpack_require__(/*! raw-loader!./orderdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/orderdetails/orderdetails.component.html"),
        styles: [__webpack_require__(/*! ./orderdetails.component.css */ "./src/app/orderdetails/orderdetails.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
], OrderdetailsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");






// var addtocartapi = "http://localhost:7000/api/addtocart";
var addtocartapi = "/api/addtocart";
// var getcartapi = "http://localhost:7000/api/allcartitems";
var getcartapi = "/api/allcartitems";
let ProductdetailsComponent = class ProductdetailsComponent {
    constructor(http, router, toastr, currentroute, commonservice) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.currentroute = currentroute;
        this.commonservice = commonservice;
        this.product = [];
        this.productalreadyincart = false;
        console.log("current route ki detail", this.currentroute.snapshot);
        var productid = this.currentroute.snapshot.params.id;
        // var apiurl = "http://localhost:7000/api/getproduct/" + productid
        var apiurl = "/api/getproduct/" + productid;
        this.http.get(apiurl).subscribe((response) => {
            console.log("response from get product api", response);
            this.product = response["data"];
            if (this.commonservice.cartitems.length > 0) {
                this.http.post(getcartapi, { email: localStorage.email })
                    .subscribe((response) => {
                    console.log("response body ", response["data"]);
                    this.commonservice.cartitems = response["data"];
                    this.commonservice.cartitems.forEach((each) => {
                        if (each.productid == this.product["id"]) {
                            this.productalreadyincart = true;
                        }
                    });
                }, (error) => {
                    console.log("error in getting product", error);
                });
            }
        }, (error) => {
            console.log("error in getting product details", error);
        });
    }
    goToCart() {
        if (localStorage.email) {
            this.router.navigate(['/cart']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    addToCart() {
        if (localStorage.email) {
            var robj = {
                email: localStorage.email,
                productname: this.product["productname"],
                productprice: this.product["productprice"],
                // productimage:this.product["productimage"],
                productid: this.product["productid"]
            };
            this.http.post(addtocartapi, robj).subscribe((response) => {
                if (response["code"] = 200) {
                    this.toastr.success("added to cart");
                    //commonservice
                    this.commonservice.cartitems.push(response["data"]);
                    this.productalreadyincart = true;
                }
            }, (error) => {
                this.toastr.error("error in adding to cart", error);
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    buyNow() {
        if (localStorage.email) {
            if (!this.productalreadyincart) {
                this.addToCart();
            }
            this.router.navigate(['/cart']);
        }
        else {
            this.router.navigate(['/login']);
        }
    }
    ngOnInit() {
    }
};
ProductdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-productdetails',
        template: __webpack_require__(/*! raw-loader!./productdetails.component.html */ "./node_modules/raw-loader/index.js!./src/app/productdetails/productdetails.component.html"),
        styles: [__webpack_require__(/*! ./productdetails.component.css */ "./src/app/productdetails/productdetails.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], ProductdetailsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsComponent = class ProductsComponent {
    ngOnInit() {
    }
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
    })
], ProductsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");




// var apiurl = "http://localhost:7000/api/signup";
var apiurl = "/api/signup";
let SignupComponent = class SignupComponent {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.email = "";
        this.fname = "";
        this.password = "";
        this.phone = "";
    }
    signup() {
        var requestobj = {
            email: this.email,
            name: this.fname,
            password: this.password,
            phone: this.phone
        };
        console.log(requestobj);
        this.http.post(apiurl, requestobj).subscribe((response) => {
            console.log("response from signup ", response);
            this.toastr.success("Signup Success");
        }, (error) => {
            console.log("Error from signup ", error);
        });
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
], SignupComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/slider/slider.component.html"),
        styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/slider/slider.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SliderComponent);



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

module.exports = __webpack_require__(/*! C:\Users\Dhanesh\Desktop\mean5\ang1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map