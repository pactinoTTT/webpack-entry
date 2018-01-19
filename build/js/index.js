webpackJsonp([1],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(true);
// imports


// module
exports.push([module.i, ".cont .top {\n    color: #FF9302;\n  }\n    .cont .top .bd_logo1 {\n      display: inline-block;\n      width: 540px;\n      height: 258px;\n      background-image: url(" + __webpack_require__(81) + ");\n      background-size: contain;\n    }\n  .cont .bottom {\n    color: #F00000;\n  }", "", {"version":3,"sources":["/Users/tianliang/Desktop/github/webpack-entry/index.pcss"],"names":[],"mappings":"AACE;IACE,eAAe;GAQhB;IAPC;MACE,sBAAsB;MACtB,aAAa;MACb,cAAc;MACd,gDAAgD;MAChD,yBAAyB;KAC1B;EAEH;IACE,eAAe;GAChB","file":"index.pcss","sourcesContent":[".cont {\n  .top {\n    color: #FF9302;\n    .bd_logo1 {\n      display: inline-block;\n      width: 540px;\n      height: 258px;\n      background-image: url(\"../img/21011961F-3.jpg\");\n      background-size: contain;\n    }\n  }\n  .bottom {\n    color: #F00000;\n  }\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(13);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Index = __webpack_require__(79);

var _Index2 = _interopRequireDefault(_Index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Index2.default, null), document.getElementById('app'));

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(80);

var _Seconds = __webpack_require__(37);

var _Seconds2 = _interopRequireDefault(_Seconds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index() {
    return _react2.default.createElement(_Seconds2.default, { title: '\u9996\u9875' });
};

exports.default = Index;

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"sourceMap":true,"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(36)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(23, function() {
			var newContent = __webpack_require__(23);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resource/21011961F-3.jpg";

/***/ })

},[64]);