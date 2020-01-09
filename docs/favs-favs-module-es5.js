function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favs-favs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/favs/favs.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/favs/favs.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFavsFavsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>favs works!</p>\n";
    /***/
  },

  /***/
  "./src/app/profile/favs/favs-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/profile/favs/favs-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FavsRoutingModule */

  /***/
  function srcAppProfileFavsFavsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavsRoutingModule", function () {
      return FavsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _favs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favs.component */
    "./src/app/profile/favs/favs.component.ts");

    var routes = [{
      path: '',
      component: _favs_component__WEBPACK_IMPORTED_MODULE_3__["FavsComponent"]
    }];

    var FavsRoutingModule = function FavsRoutingModule() {
      _classCallCheck(this, FavsRoutingModule);
    };

    FavsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FavsRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/favs/favs.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/profile/favs/favs.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFavsFavsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZmF2cy9mYXZzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/favs/favs.component.ts":
  /*!************************************************!*\
    !*** ./src/app/profile/favs/favs.component.ts ***!
    \************************************************/

  /*! exports provided: FavsComponent */

  /***/
  function srcAppProfileFavsFavsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavsComponent", function () {
      return FavsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FavsComponent =
    /*#__PURE__*/
    function () {
      function FavsComponent() {
        _classCallCheck(this, FavsComponent);
      }

      _createClass(FavsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FavsComponent;
    }();

    FavsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/favs/favs.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favs.component.scss */
      "./src/app/profile/favs/favs.component.scss")).default]
    })], FavsComponent);
    /***/
  },

  /***/
  "./src/app/profile/favs/favs.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/profile/favs/favs.module.ts ***!
    \*********************************************/

  /*! exports provided: FavsModule */

  /***/
  function srcAppProfileFavsFavsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavsModule", function () {
      return FavsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _favs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favs-routing.module */
    "./src/app/profile/favs/favs-routing.module.ts");
    /* harmony import */


    var _favs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./favs.component */
    "./src/app/profile/favs/favs.component.ts");

    var FavsModule = function FavsModule() {
      _classCallCheck(this, FavsModule);
    };

    FavsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_favs_component__WEBPACK_IMPORTED_MODULE_4__["FavsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _favs_routing_module__WEBPACK_IMPORTED_MODULE_3__["FavsRoutingModule"]]
    })], FavsModule);
    /***/
  }
}]);
//# sourceMappingURL=favs-favs-module-es5.js.map