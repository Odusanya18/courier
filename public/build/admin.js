(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "./assets/js/admin.js":
/*!****************************!*\
  !*** ./assets/js/admin.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @api-platform/admin */ "./node_modules/@api-platform/admin/lib/index.js");
/* harmony import */ var _api_platform_admin__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_api_platform_admin__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _api_platform_api_doc_parser_lib_hydra_parseHydraDocumentation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation */ "./node_modules/@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation.js");
/* harmony import */ var _api_platform_api_doc_parser_lib_hydra_parseHydraDocumentation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_api_platform_api_doc_parser_lib_hydra_parseHydraDocumentation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _productOrder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./productOrder */ "./assets/js/productOrder.js");
/* harmony import */ var _api_platform_admin_src_docsUtils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @api-platform/admin/src/docsUtils */ "./node_modules/@api-platform/admin/src/docsUtils/index.js");
/* harmony import */ var _authProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./authProvider */ "./assets/js/authProvider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");











function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var fetchHeaders = {
  'Authorization': "Bearer ".concat(localStorage.getItem('token'))
};

var fetchHydra = function fetchHydra(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_api_platform_admin__WEBPACK_IMPORTED_MODULE_12__["fetchHydra"])(url, _objectSpread({}, options, {
    headers: new Headers(fetchHeaders)
  }));
};

var dataProvider = function dataProvider(api) {
  return Object(_api_platform_admin__WEBPACK_IMPORTED_MODULE_12__["hydraClient"])(api, fetchHydra);
};

var apiDocumentationParser = function apiDocumentationParser(entrypoint) {
  return _api_platform_api_doc_parser_lib_hydra_parseHydraDocumentation__WEBPACK_IMPORTED_MODULE_13___default()(entrypoint, {
    headers: new Headers(fetchHeaders)
  }).then(function (_ref) {
    var api = _ref.api;
    Object(_api_platform_admin_src_docsUtils__WEBPACK_IMPORTED_MODULE_15__["replaceResources"])(api.resources, [_productOrder__WEBPACK_IMPORTED_MODULE_14__["ProductOrders"], _productOrder__WEBPACK_IMPORTED_MODULE_14__["Posts"], _productOrder__WEBPACK_IMPORTED_MODULE_14__["Pages"]]);
    return {
      api: api
    };
  }).then(function (_ref2) {
    var api = _ref2.api;
    return {
      api: api
    };
  }, function (result) {
    var api = result.api,
        status = result.status;

    if (status === 401) {
      return Promise.resolve({
        api: api,
        status: status,
        customRoutes: [react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Route"], {
          path: "/",
          render: function render() {
            return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Redirect"], {
              to: "/login"
            });
          }
        })]
      });
    }

    return Promise.resolve(result);
  });
};

var entrypoint = document.getElementById('api-entrypoint').innerText;
react_dom__WEBPACK_IMPORTED_MODULE_11___default.a.render(react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_api_platform_admin__WEBPACK_IMPORTED_MODULE_12__["HydraAdmin"], {
  apiDocumentationParser: apiDocumentationParser,
  dataProvider: dataProvider,
  authProvider: _authProvider__WEBPACK_IMPORTED_MODULE_16__["default"],
  entrypoint: entrypoint
}), document.getElementById('api-platform-admin'));

/***/ }),

/***/ "./assets/js/authProvider.js":
/*!***********************************!*\
  !*** ./assets/js/authProvider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");




// admin/src/authProvider.js
 // Change this to be your own authentication token URI.

var authenticationTokenUri = "/authentication_token";
/* harmony default export */ __webpack_exports__["default"] = (function (type, params) {
  switch (type) {
    case react_admin__WEBPACK_IMPORTED_MODULE_4__["AUTH_LOGIN"]:
      var username = params.username,
          password = params.password;
      var request = new Request(authenticationTokenUri, {
        method: 'POST',
        body: JSON.stringify({
          email: username,
          password: password
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      });
      return fetch(request).then(function (response) {
        if (response.status < 200 || response.status >= 300) throw new Error(response.statusText);
        return response.json();
      }).then(function (_ref) {
        var token = _ref.token;
        localStorage.setItem('token', token); // The JWT token is stored in the browser's local storage

        window.location.replace('/admin');
      });

    case react_admin__WEBPACK_IMPORTED_MODULE_4__["AUTH_LOGOUT"]:
      localStorage.removeItem('token');
      break;

    case react_admin__WEBPACK_IMPORTED_MODULE_4__["AUTH_ERROR"]:
      if (401 === params.status || 403 === params.status) {
        localStorage.removeItem('token');
        return Promise.reject();
      }

      break;

    case react_admin__WEBPACK_IMPORTED_MODULE_4__["AUTH_CHECK"]:
      return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();

    default:
      return Promise.resolve();
  }
});

/***/ }),

/***/ "./assets/js/productOrder.js":
/*!***********************************!*\
  !*** ./assets/js/productOrder.js ***!
  \***********************************/
/*! exports provided: PostEdit, ProductOrders, Posts, Pages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEdit", function() { return PostEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOrders", function() { return ProductOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pages", function() { return Pages; });
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_admin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-admin */ "./node_modules/react-admin/esm/index.js");
/* harmony import */ var ra_input_rich_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ra-input-rich-text */ "./node_modules/ra-input-rich-text/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");




function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var addStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])({
  width: {
    width: '100%'
  },
  h5: {
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    width: '100%'
  }
});
var entrypoint = document.getElementById('api-entrypoint').innerText;
var currentIndex = 0;

var upload = function upload(value, previousValue, allValues) {
  if (value && value.rawFile instanceof File) {
    var body = new FormData();
    body.append('file', value.rawFile);
    var resp = fetch("".concat(entrypoint, "/media_objects"), {
      body: body,
      method: 'POST'
    }).then(function (response) {
      return response.json();
    });
    return resp.then(function (data) {
      allValues.products[currentIndex].image = data.id;
      currentIndex++;
      return data.id;
    });
  }

  return value.src;
};

var PostTitle = function PostTitle(_ref) {
  var record = _ref.record;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, record ? "\"".concat(record.title, "\"") : '');
};

var PostCreate = function PostCreate(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["Create"], props, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["SimpleForm"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    source: "title",
    validation: {
      required: true
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["LongTextInput"], {
    source: "description",
    validation: {
      required: true
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ra_input_rich_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: "content",
    validation: {
      required: true
    }
  })));
};

var PostEdit = function PostEdit(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["Edit"], _extends({
    title: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(PostTitle, null)
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["SimpleForm"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["DisabledInput"], {
    label: "Id",
    source: "id"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    source: "title",
    validation: {
      required: true
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["LongTextInput"], {
    source: "description",
    validation: {
      required: true
    }
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ra_input_rich_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    source: "content",
    validation: {
      required: true
    }
  })));
};

var ProductOrderCreate = function ProductOrderCreate(props) {
  var classes = addStyles(props);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["Create"], props, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["SimpleForm"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
    className: classes.h5
  }, "Welcome to our new order form , please read instructions very well before proceeding \u2013 This form is meant for you to copy and paste link from 1688, taobao, tmall etc with full description for us to work your quotation \u2013 Please kindly drop link you know your capacity can pay, don\u2019t drop too many link and later later ask us to adjust because we are working with time.. \u2013 We want to reduce the rate of unserious clients, submitting multiple forms, etc.so you are to pay a sum of N3,000 commitment fee before submitting your form, without this payment we will not attend to your form NOTE: THIS MONEY IS REFUNDABLE WHEN YOU PROCEED AND PAY YOUR ORDER you will substrate it when you are to pay for your order and IT NOT REFUNDABLE WHEN YOU FAIL TO PROCEED AND PAY FOR YOUR ORDER.. (click here for payment details)"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
    className: classes.h5
  }, "The bank account name you pay us from must be same as your fullname, third party transfer , paga, sms code transfer not accepted, direct bank payment and mobile transfer only"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    className: classes.width,
    source: "fullname",
    label: "Full Name"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    className: classes.width,
    source: "phoneNumber",
    label: "Phone Number"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    className: classes.width,
    source: "email",
    label: "Email"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    className: classes.width,
    source: "additionalNote",
    label: "Additional Notes"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["ArrayInput"], {
    source: "products"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["SimpleFormIterator"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    source: "name"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    source: "link"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["ImageInput"], {
    accept: "image/*",
    multiple: false,
    source: "image",
    normalize: upload
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["ImageField"], {
    source: "src"
  }))))))));
};

var ProductOrderEdit = function ProductOrderEdit(props) {
  var classes = addStyles(props);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["Edit"], props, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["SimpleForm"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
    className: classes.h5
  }, "Welcome to our new order form , please read instructions very well before proceeding \u2013 This form is meant for you to copy and paste link from 1688, taobao, tmall etc with full description for us to work your quotation \u2013 Please kindly drop link you know your capacity can pay, don\u2019t drop too many link and later later ask us to adjust because we are working with time.. \u2013 We want to reduce the rate of unserious clients, submitting multiple forms, etc.so you are to pay a sum of N3,000 commitment fee before submitting your form, without this payment we will not attend to your form NOTE: THIS MONEY IS REFUNDABLE WHEN YOU PROCEED AND PAY YOUR ORDER you will substrate it when you are to pay for your order and IT NOT REFUNDABLE WHEN YOU FAIL TO PROCEED AND PAY FOR YOUR ORDER.. (click here for payment details)"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h5", {
    className: classes.h5
  }, "The bank account name you pay us from must be same as your fullname, third party transfer , paga, sms code transfer not accepted, direct bank payment and mobile transfer only"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    className: classes.width,
    source: "fullname",
    label: "Full Name"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    className: classes.width,
    source: "phoneNumber",
    label: "Phone Number"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    className: classes.width,
    source: "email",
    label: "Email"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    className: classes.width,
    source: "additionalNote",
    label: "Additional Notes"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["ArrayInput"], {
    source: "products"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["SimpleFormIterator"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    source: "name"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["TextInput"], {
    source: "link"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["ImageInput"], {
    accept: "image/*",
    multiple: false,
    source: "image",
    normalize: upload
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_admin__WEBPACK_IMPORTED_MODULE_4__["ImageField"], {
    source: "src"
  }))))))));
};

var ProductOrders = {
  name: 'product_orders',
  create: ProductOrderCreate,
  edit: ProductOrderEdit
};
var Posts = {
  name: 'posts',
  create: PostCreate,
  edit: PostEdit
};
var Pages = {
  name: 'pages',
  create: PostCreate,
  edit: PostEdit
};

/***/ }),

/***/ 1:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!*************************************!*\
  !*** rdf-canonize-native (ignored) ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** xmldom (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!*************************!*\
  !*** request (ignored) ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./assets/js/admin.js","runtime","vendors~admin"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2F1dGhQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcHJvZHVjdE9yZGVyLmpzIiwid2VicGFjazovLy92ZXJ0eCAoaWdub3JlZCkiLCJ3ZWJwYWNrOi8vL3JkZi1jYW5vbml6ZS1uYXRpdmUgKGlnbm9yZWQpIiwid2VicGFjazovLy94bWxkb20gKGlnbm9yZWQpIiwid2VicGFjazovLy9yZXF1ZXN0IChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vaHR0cCAoaWdub3JlZCkiXSwibmFtZXMiOlsiZmV0Y2hIZWFkZXJzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoSHlkcmEiLCJ1cmwiLCJvcHRpb25zIiwiYmFzZUZldGNoSHlkcmEiLCJoZWFkZXJzIiwiSGVhZGVycyIsImRhdGFQcm92aWRlciIsImFwaSIsImh5ZHJhQ2xpZW50IiwiYXBpRG9jdW1lbnRhdGlvblBhcnNlciIsImVudHJ5cG9pbnQiLCJwYXJzZUh5ZHJhRG9jdW1lbnRhdGlvbiIsInRoZW4iLCJyZXBsYWNlUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwiUHJvZHVjdE9yZGVycyIsIlBvc3RzIiwiUGFnZXMiLCJyZXN1bHQiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImN1c3RvbVJvdXRlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJSZWFjdERPTSIsInJlbmRlciIsImF1dGhQcm92aWRlciIsImF1dGhlbnRpY2F0aW9uVG9rZW5VcmkiLCJ0eXBlIiwicGFyYW1zIiwiQVVUSF9MT0dJTiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyZXF1ZXN0IiwiUmVxdWVzdCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJmZXRjaCIsInJlc3BvbnNlIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsInRva2VuIiwic2V0SXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVwbGFjZSIsIkFVVEhfTE9HT1VUIiwicmVtb3ZlSXRlbSIsIkFVVEhfRVJST1IiLCJyZWplY3QiLCJBVVRIX0NIRUNLIiwiYWRkU3R5bGVzIiwibWFrZVN0eWxlcyIsIndpZHRoIiwiaDUiLCJmb250RmFtaWx5IiwiY3VycmVudEluZGV4IiwidXBsb2FkIiwidmFsdWUiLCJwcmV2aW91c1ZhbHVlIiwiYWxsVmFsdWVzIiwicmF3RmlsZSIsIkZpbGUiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3AiLCJkYXRhIiwicHJvZHVjdHMiLCJpbWFnZSIsImlkIiwic3JjIiwiUG9zdFRpdGxlIiwicmVjb3JkIiwidGl0bGUiLCJQb3N0Q3JlYXRlIiwicHJvcHMiLCJyZXF1aXJlZCIsIlBvc3RFZGl0IiwiUHJvZHVjdE9yZGVyQ3JlYXRlIiwiY2xhc3NlcyIsIlByb2R1Y3RPcmRlckVkaXQiLCJuYW1lIiwiY3JlYXRlIiwiZWRpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxZQUFZLEdBQUc7QUFBQyxvQ0FBMkJDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUEzQjtBQUFELENBQXJCOztBQUNBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEdBQUQ7QUFBQSxNQUFNQyxPQUFOLHVFQUFnQixFQUFoQjtBQUFBLFNBQXVCQyx1RUFBYyxDQUFDRixHQUFELG9CQUNqREMsT0FEaUQ7QUFFcERFLFdBQU8sRUFBRSxJQUFJQyxPQUFKLENBQVlSLFlBQVo7QUFGMkMsS0FBckM7QUFBQSxDQUFuQjs7QUFJQSxJQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxHQUFHO0FBQUEsU0FBSUMsd0VBQVcsQ0FBQ0QsR0FBRCxFQUFNUCxVQUFOLENB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QztBQUFsQixJQURKLEVBRUksMkRBQUMscURBQUQ7QUFBVyxVQUFNLEVBQUM7QUFBbEIsSUFGSixFQUdJLDJEQUFDLHNEQUFEO0FBQVksVUFBTSxFQUFDLFNBQW5CO0FBQTZCLFlBQVEsRUFBRSxLQUF2QztBQUE4QyxVQUFNLEVBQUMsT0FBckQ7QUFBNkQsYUFBUyxFQUFFSTtBQUF4RSxLQUNJLDJEQUFDLHNEQUFEO0FBQVksVUFBTSxFQUFDO0FBQW5CLElBREosQ0FISixDQURKLENBREosQ0FYSixDQVBKLENBREosQ0FESjtBQW1DSCxDQXRDRDs7QUF3Q08sSUFBTWhELGFBQWEsR0FBRztBQUN6QndFLE1BQUksRUFBRSxnQkFEbUI7QUFFekJDLFFBQU0sRUFBRUosa0JBRmlCO0FBR3pCSyxNQUFJLEVBQUVIO0FBSG1CLENBQXRCO0FBTUEsSUFBTXRFLEtBQUssR0FBRztBQUNqQnVFLE1BQUksRUFBRSxPQURXO0FBRWpCQyxRQUFNLEVBQUVSLFVBRlM7QUFHakJTLE1BQUksRUFBRU47QUFIVyxDQUFkO0FBTUEsSUFBTWxFLEtBQUssR0FBRztBQUNqQnNFLE1BQUksRUFBRSxPQURXO0FBRWpCQyxRQUFNLEVBQUVSLFVBRlM7QUFHakJTLE1BQUksRUFBRU47QUFIVyxDQUFkLEM7Ozs7Ozs7Ozs7O0FDMUpQLGU7Ozs7Ozs7Ozs7O0FDQUEsZTs7Ozs7Ozs7Ozs7QUNBQSxlOzs7Ozs7Ozs7OztBQ0FBLGU7Ozs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJhZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEh5ZHJhQWRtaW4sIGh5ZHJhQ2xpZW50LCBmZXRjaEh5ZHJhIGFzIGJhc2VGZXRjaEh5ZHJhICB9IGZyb20gJ0BhcGktcGxhdGZvcm0vYWRtaW4nO1xuaW1wb3J0IHBhcnNlSHlkcmFEb2N1bWVudGF0aW9uIGZyb20gJ0BhcGktcGxhdGZvcm0vYXBpLWRvYy1wYXJzZXIvbGliL2h5ZHJhL3BhcnNlSHlkcmFEb2N1bWVudGF0aW9uJztcbmltcG9ydCB7IFByb2R1Y3RPcmRlcnMsIFBvc3RzLCBQYWdlcyB9IGZyb20gJy4vcHJvZHVjdE9yZGVyJ1xuaW1wb3J0IHtyZXBsYWNlUmVzb3VyY2VzfSBmcm9tIFwiQGFwaS1wbGF0Zm9ybS9hZG1pbi9zcmMvZG9jc1V0aWxzXCI7XG5pbXBvcnQgYXV0aFByb3ZpZGVyIGZyb20gJy4vYXV0aFByb3ZpZGVyJztcbmltcG9ydCB7IFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5cbmNvbnN0IGZldGNoSGVhZGVycyA9IHsnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gfTtcbmNvbnN0IGZldGNoSHlkcmEgPSAodXJsLCBvcHRpb25zID0ge30pID0+IGJhc2VGZXRjaEh5ZHJhKHVybCwge1xuICAgIC4uLm9wdGlvbnMsXG4gICAgaGVhZGVyczogbmV3IEhlYWRlcnMoZmV0Y2hIZWFkZXJzKSxcbn0pO1xuY29uc3QgZGF0YVByb3ZpZGVyID0gYXBpID0+IGh5ZHJhQ2xpZW50KGFwaSwgZmV0Y2hIeWRyYSk7XG5jb25zdCBhcGlEb2N1bWVudGF0aW9uUGFyc2VyID0gZW50cnlwb2ludCA9PlxuICAgIHBhcnNlSHlkcmFEb2N1bWVudGF0aW9uKGVudHJ5cG9pbnQsIHtcbiAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMoZmV0Y2hIZWFkZXJzKSxcbiAgICAgICAgfSkudGhlbigoeyBhcGkgfSkgPT4ge1xuICAgICAgICByZXBsYWNlUmVzb3VyY2VzKGFwaS5yZXNvdXJjZXMsIFtQcm9kdWN0T3JkZXJzLCBQb3N0cywgUGFnZXNdKTtcbiAgICAgICAgcmV0dXJuIHsgYXBpIH07XG4gICAgfSkudGhlbihcbiAgICAgICAgKHsgYXBpIH0pID0+ICh7IGFwaSB9KSxcbiAgICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXBpLCBzdGF0dXMgfSA9IHJlc3VsdDtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBhcGksXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tUm91dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiByZW5kZXI9eygpID0+IDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+fSAvPixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICk7XG5cbmNvbnN0IGVudHJ5cG9pbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBpLWVudHJ5cG9pbnQnKS5pbm5lclRleHQ7XG5cblJlYWN0RE9NLnJlbmRlcig8SHlkcmFBZG1pbiBhcGlEb2N1bWVudGF0aW9uUGFyc2VyPXthcGlEb2N1bWVudGF0aW9uUGFyc2VyfSBkYXRhUHJvdmlkZXI9e2RhdGFQcm92aWRlcn0gYXV0aFByb3ZpZGVyPXthdXRoUHJvdmlkZXJ9IGVudHJ5cG9pbnQ9e2VudHJ5cG9pbnR9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcGktcGxhdGZvcm0tYWRtaW4nKSk7XG4iLCIvLyBhZG1pbi9zcmMvYXV0aFByb3ZpZGVyLmpzXHJcbmltcG9ydCB7IEFVVEhfTE9HSU4sIEFVVEhfTE9HT1VULCBBVVRIX0VSUk9SLCBBVVRIX0NIRUNLIH0gZnJvbSAncmVhY3QtYWRtaW4nO1xyXG5cclxuLy8gQ2hhbmdlIHRoaXMgdG8gYmUgeW91ciBvd24gYXV0aGVudGljYXRpb24gdG9rZW4gVVJJLlxyXG5jb25zdCBhdXRoZW50aWNhdGlvblRva2VuVXJpID0gYC9hdXRoZW50aWNhdGlvbl90b2tlbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAodHlwZSwgcGFyYW1zKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIEFVVEhfTE9HSU46XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBwYXJhbXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChhdXRoZW50aWNhdGlvblRva2VuVXJpLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2gocmVxdWVzdClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgMjAwIHx8IHJlc3BvbnNlLnN0YXR1cyA+PSAzMDApIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoeyB0b2tlbiB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pOyAvLyBUaGUgSldUIHRva2VuIGlzIHN0b3JlZCBpbiB0aGUgYnJvd3NlcidzIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2FkbWluJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2FzZSBBVVRIX0xPR09VVDpcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIEFVVEhfRVJST1I6XHJcbiAgICAgICAgICAgIGlmICg0MDEgPT09IHBhcmFtcy5zdGF0dXMgfHwgNDAzID09PSBwYXJhbXMuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBBVVRIX0NIRUNLOlxyXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVqZWN0KCk7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QXJyYXlJbnB1dCwgQ3JlYXRlLCBJbWFnZUZpZWxkLCBJbWFnZUlucHV0LCBTaW1wbGVGb3JtLCBTaW1wbGVGb3JtSXRlcmF0b3IsIFRleHRJbnB1dCwgTG9uZ1RleHRJbnB1dCwgRWRpdCwgRGlzYWJsZWRJbnB1dCB9IGZyb20gJ3JlYWN0LWFkbWluJztcclxuaW1wb3J0IFJpY2hUZXh0SW5wdXQgZnJvbSAncmEtaW5wdXQtcmljaC10ZXh0JztcclxuXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XHJcblxyXG5jb25zdCBhZGRTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuICAgIHdpZHRoOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfSxcclxuICAgIGg1IDoge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiXFxcIlJvYm90b1xcXCIsIFxcXCJIZWx2ZXRpY2FcXFwiLCBcXFwiQXJpYWxcXFwiLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGVudHJ5cG9pbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBpLWVudHJ5cG9pbnQnKS5pbm5lclRleHQ7XHJcblxyXG5sZXQgY3VycmVudEluZGV4ID0gMDtcclxuXHJcbmNvbnN0IHVwbG9hZCA9ICh2YWx1ZSwgcHJldmlvdXNWYWx1ZSwgYWxsVmFsdWVzKSA9PiB7XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUucmF3RmlsZSBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICBjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgYm9keS5hcHBlbmQoJ2ZpbGUnLCB2YWx1ZS5yYXdGaWxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGZldGNoKGAke2VudHJ5cG9pbnR9L21lZGlhX29iamVjdHNgLCB7IGJvZHksIG1ldGhvZDogJ1BPU1QnIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwLnRoZW4oZGF0YSA9PiB7YWxsVmFsdWVzLnByb2R1Y3RzW2N1cnJlbnRJbmRleF0uaW1hZ2UgPSBkYXRhLmlkOyBjdXJyZW50SW5kZXgrKzsgcmV0dXJuIGRhdGEuaWR9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWUuc3JjO1xyXG59O1xyXG5cclxuY29uc3QgUG9zdFRpdGxlID0gKHsgcmVjb3JkIH0pID0+IHtcclxuICAgIHJldHVybiA8c3Bhbj57cmVjb3JkID8gYFwiJHtyZWNvcmQudGl0bGV9XCJgIDogJyd9PC9zcGFuPjtcclxufTtcclxuXHJcbmNvbnN0IFBvc3RDcmVhdGUgPSBwcm9wcyA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDcmVhdGUgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPFNpbXBsZUZvcm0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dElucHV0IHNvdXJjZT1cInRpdGxlXCIgdmFsaWRhdGlvbj17eyByZXF1aXJlZDogdHJ1ZSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPExvbmdUZXh0SW5wdXQgc291cmNlPVwiZGVzY3JpcHRpb25cIiB2YWxpZGF0aW9uPXt7IHJlcXVpcmVkOiB0cnVlIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8UmljaFRleHRJbnB1dCBzb3VyY2U9XCJjb250ZW50XCIgdmFsaWRhdGlvbj17eyByZXF1aXJlZDogdHJ1ZSB9fSAvPlxyXG4gICAgICAgICAgICA8L1NpbXBsZUZvcm0+XHJcbiAgICAgICAgPC9DcmVhdGU+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdEVkaXQgPSAocHJvcHMpID0+IChcclxuICAgIDxFZGl0IHRpdGxlPXs8UG9zdFRpdGxlIC8+fSB7Li4ucHJvcHN9PlxyXG4gICAgICAgIDxTaW1wbGVGb3JtPlxyXG4gICAgICAgICAgICA8RGlzYWJsZWRJbnB1dCBsYWJlbD1cIklkXCIgc291cmNlPVwiaWRcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dElucHV0IHNvdXJjZT1cInRpdGxlXCIgdmFsaWRhdGlvbj17eyByZXF1aXJlZDogdHJ1ZSB9fSAvPlxyXG4gICAgICAgICAgICA8TG9uZ1RleHRJbnB1dCBzb3VyY2U9XCJkZXNjcmlwdGlvblwiIHZhbGlkYXRpb249e3sgcmVxdWlyZWQ6IHRydWUgfX0gLz5cclxuICAgICAgICAgICAgPFJpY2hUZXh0SW5wdXQgc291cmNlPVwiY29udGVudFwiIHZhbGlkYXRpb249e3sgcmVxdWlyZWQ6IHRydWUgfX0gLz5cclxuICAgICAgICA8L1NpbXBsZUZvcm0+XHJcbiAgICA8L0VkaXQ+XHJcbik7XHJcblxyXG5jb25zdCBQcm9kdWN0T3JkZXJDcmVhdGUgPSBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBjbGFzc2VzID0gYWRkU3R5bGVzKHByb3BzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDcmVhdGUgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPFNpbXBsZUZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtjbGFzc2VzLmg1fT5XZWxjb21lIHRvIG91ciBuZXcgb3JkZXIgZm9ybSAsIHBsZWFzZSByZWFkIGluc3RydWN0aW9ucyB2ZXJ5IHdlbGwgYmVmb3JlIHByb2NlZWRpbmdcclxuICAgICAgICAgICAgICAgICAgICDigJNcdFRoaXMgZm9ybSBpcyBtZWFudCBmb3IgeW91IHRvIGNvcHkgYW5kIHBhc3RlIGxpbmsgZnJvbSAxNjg4LCB0YW9iYW8sIHRtYWxsIGV0YyB3aXRoIGZ1bGwgZGVzY3JpcHRpb24gZm9yIHVzIHRvIHdvcmsgeW91ciBxdW90YXRpb25cclxuICAgICAgICAgICAgICAgICAgICDigJNcdFBsZWFzZSBraW5kbHkgZHJvcCBsaW5rIHlvdSBrbm93IHlvdXIgY2FwYWNpdHkgY2FuIHBheSwgZG9u4oCZdCBkcm9wIHRvbyBtYW55IGxpbmsgYW5kIGxhdGVyIGxhdGVyIGFzayB1cyB0byBhZGp1c3QgYmVjYXVzZSB3ZSBhcmUgd29ya2luZyB3aXRoIHRpbWUuLlxyXG4gICAgICAgICAgICAgICAgICAgIOKAk1x0V2Ugd2FudCB0byByZWR1Y2UgdGhlIHJhdGUgb2YgdW5zZXJpb3VzIGNsaWVudHMsIHN1Ym1pdHRpbmcgbXVsdGlwbGUgZm9ybXMsIGV0Yy5zbyB5b3UgYXJlIHRvIHBheSBhIHN1bSBvZiBOMywwMDAgY29tbWl0bWVudCBmZWUgYmVmb3JlIHN1Ym1pdHRpbmcgeW91ciBmb3JtLCB3aXRob3V0IHRoaXMgcGF5bWVudCB3ZSB3aWxsIG5vdCBhdHRlbmQgdG8geW91ciBmb3JtIE5PVEU6IFRISVMgTU9ORVkgSVMgUkVGVU5EQUJMRSBXSEVOIFlPVSBQUk9DRUVEIEFORCBQQVkgWU9VUiBPUkRFUiB5b3Ugd2lsbCBzdWJzdHJhdGUgaXQgd2hlbiB5b3UgYXJlIHRvIHBheSBmb3IgeW91ciBvcmRlciBhbmQgSVQgTk9UIFJFRlVOREFCTEUgV0hFTiBZT1UgRkFJTCBUTyBQUk9DRUVEIEFORCBQQVkgRk9SIFlPVVIgT1JERVIuLiAoY2xpY2sgaGVyZSBmb3IgcGF5bWVudCBkZXRhaWxzKTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtjbGFzc2VzLmg1fT5UaGUgYmFuayBhY2NvdW50IG5hbWUgeW91IHBheSB1cyBmcm9tIG11c3QgYmUgc2FtZSBhcyB5b3VyIGZ1bGxuYW1lLCB0aGlyZCBwYXJ0eSB0cmFuc2ZlciAsIHBhZ2EsIHNtcyBjb2RlIHRyYW5zZmVyIG5vdCBhY2NlcHRlZCwgZGlyZWN0IGJhbmsgcGF5bWVudCBhbmQgbW9iaWxlIHRyYW5zZmVyIG9ubHk8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLndpZHRofSBzb3VyY2U9XCJmdWxsbmFtZVwiIGxhYmVsPVwiRnVsbCBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBjbGFzc05hbWU9e2NsYXNzZXMud2lkdGh9IHNvdXJjZT1cInBob25lTnVtYmVyXCIgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLndpZHRofSBzb3VyY2U9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLndpZHRofSBzb3VyY2U9XCJhZGRpdGlvbmFsTm90ZVwiIGxhYmVsPVwiQWRkaXRpb25hbCBOb3Rlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycmF5SW5wdXQgc291cmNlPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1wbGVGb3JtSXRlcmF0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBzb3VyY2U9XCJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0IHNvdXJjZT1cImxpbmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZUlucHV0IGFjY2VwdD1cImltYWdlLypcIiBtdWx0aXBsZT17ZmFsc2V9IHNvdXJjZT1cImltYWdlXCIgbm9ybWFsaXplPXt1cGxvYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VGaWVsZCBzb3VyY2U9XCJzcmNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZUlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaW1wbGVGb3JtSXRlcmF0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXJyYXlJbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NpbXBsZUZvcm0+XHJcbiAgICAgICAgPC9DcmVhdGU+XHJcbiAgICApO1xyXG59O1xyXG5cclxuY29uc3QgUHJvZHVjdE9yZGVyRWRpdCA9IHByb3BzID0+IHtcclxuICAgIGNvbnN0IGNsYXNzZXMgPSBhZGRTdHlsZXMocHJvcHMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEVkaXQgey4uLnByb3BzfT5cclxuICAgICAgICAgICAgPFNpbXBsZUZvcm0+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtjbGFzc2VzLmg1fT5XZWxjb21lIHRvIG91ciBuZXcgb3JkZXIgZm9ybSAsIHBsZWFzZSByZWFkIGluc3RydWN0aW9ucyB2ZXJ5IHdlbGwgYmVmb3JlIHByb2NlZWRpbmdcclxuICAgICAgICAgICAgICAgICAgICDigJNcdFRoaXMgZm9ybSBpcyBtZWFudCBmb3IgeW91IHRvIGNvcHkgYW5kIHBhc3RlIGxpbmsgZnJvbSAxNjg4LCB0YW9iYW8sIHRtYWxsIGV0YyB3aXRoIGZ1bGwgZGVzY3JpcHRpb24gZm9yIHVzIHRvIHdvcmsgeW91ciBxdW90YXRpb25cclxuICAgICAgICAgICAgICAgICAgICDigJNcdFBsZWFzZSBraW5kbHkgZHJvcCBsaW5rIHlvdSBrbm93IHlvdXIgY2FwYWNpdHkgY2FuIHBheSwgZG9u4oCZdCBkcm9wIHRvbyBtYW55IGxpbmsgYW5kIGxhdGVyIGxhdGVyIGFzayB1cyB0byBhZGp1c3QgYmVjYXVzZSB3ZSBhcmUgd29ya2luZyB3aXRoIHRpbWUuLlxyXG4gICAgICAgICAgICAgICAgICAgIOKAk1x0V2Ugd2FudCB0byByZWR1Y2UgdGhlIHJhdGUgb2YgdW5zZXJpb3VzIGNsaWVudHMsIHN1Ym1pdHRpbmcgbXVsdGlwbGUgZm9ybXMsIGV0Yy5zbyB5b3UgYXJlIHRvIHBheSBhIHN1bSBvZiBOMywwMDAgY29tbWl0bWVudCBmZWUgYmVmb3JlIHN1Ym1pdHRpbmcgeW91ciBmb3JtLCB3aXRob3V0IHRoaXMgcGF5bWVudCB3ZSB3aWxsIG5vdCBhdHRlbmQgdG8geW91ciBmb3JtIE5PVEU6IFRISVMgTU9ORVkgSVMgUkVGVU5EQUJMRSBXSEVOIFlPVSBQUk9DRUVEIEFORCBQQVkgWU9VUiBPUkRFUiB5b3Ugd2lsbCBzdWJzdHJhdGUgaXQgd2hlbiB5b3UgYXJlIHRvIHBheSBmb3IgeW91ciBvcmRlciBhbmQgSVQgTk9UIFJFRlVOREFCTEUgV0hFTiBZT1UgRkFJTCBUTyBQUk9DRUVEIEFORCBQQVkgRk9SIFlPVVIgT1JERVIuLiAoY2xpY2sgaGVyZSBmb3IgcGF5bWVudCBkZXRhaWxzKTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtjbGFzc2VzLmg1fT5UaGUgYmFuayBhY2NvdW50IG5hbWUgeW91IHBheSB1cyBmcm9tIG11c3QgYmUgc2FtZSBhcyB5b3VyIGZ1bGxuYW1lLCB0aGlyZCBwYXJ0eSB0cmFuc2ZlciAsIHBhZ2EsIHNtcyBjb2RlIHRyYW5zZmVyIG5vdCBhY2NlcHRlZCwgZGlyZWN0IGJhbmsgcGF5bWVudCBhbmQgbW9iaWxlIHRyYW5zZmVyIG9ubHk8L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLndpZHRofSBzb3VyY2U9XCJmdWxsbmFtZVwiIGxhYmVsPVwiRnVsbCBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBjbGFzc05hbWU9e2NsYXNzZXMud2lkdGh9IHNvdXJjZT1cInBob25lTnVtYmVyXCIgbGFiZWw9XCJQaG9uZSBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLndpZHRofSBzb3VyY2U9XCJlbWFpbFwiIGxhYmVsPVwiRW1haWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgY2xhc3NOYW1lPXtjbGFzc2VzLndpZHRofSBzb3VyY2U9XCJhZGRpdGlvbmFsTm90ZVwiIGxhYmVsPVwiQWRkaXRpb25hbCBOb3Rlc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycmF5SW5wdXQgc291cmNlPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1wbGVGb3JtSXRlcmF0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dCBzb3VyY2U9XCJuYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0IHNvdXJjZT1cImxpbmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZUlucHV0IGFjY2VwdD1cImltYWdlLypcIiBtdWx0aXBsZT17ZmFsc2V9IHNvdXJjZT1cImltYWdlXCIgbm9ybWFsaXplPXt1cGxvYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VGaWVsZCBzb3VyY2U9XCJzcmNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JbWFnZUlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaW1wbGVGb3JtSXRlcmF0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQXJyYXlJbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1NpbXBsZUZvcm0+XHJcbiAgICAgICAgPC9FZGl0PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0T3JkZXJzID0ge1xyXG4gICAgbmFtZTogJ3Byb2R1Y3Rfb3JkZXJzJyxcclxuICAgIGNyZWF0ZTogUHJvZHVjdE9yZGVyQ3JlYXRlLFxyXG4gICAgZWRpdDogUHJvZHVjdE9yZGVyRWRpdFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RzID0ge1xyXG4gICAgbmFtZTogJ3Bvc3RzJyxcclxuICAgIGNyZWF0ZTogUG9zdENyZWF0ZSxcclxuICAgIGVkaXQ6IFBvc3RFZGl0XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUGFnZXMgPSB7XHJcbiAgICBuYW1lOiAncGFnZXMnLFxyXG4gICAgY3JlYXRlOiBQb3N0Q3JlYXRlLFxyXG4gICAgZWRpdDogUG9zdEVkaXRcclxufTsiLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9