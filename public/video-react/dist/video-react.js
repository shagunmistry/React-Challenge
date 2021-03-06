(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["VideoReact"] = factory(require("react"), require("react-dom"));
	else
		root["VideoReact"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_94__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(169);
	__webpack_require__(164);
	module.exports = __webpack_require__(351);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , core      = __webpack_require__(29)
	  , hide      = __webpack_require__(16)
	  , redefine  = __webpack_require__(17)
	  , ctx       = __webpack_require__(30)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;
	
	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };
	
	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(362)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(62)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(4).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(6)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(2)
	  , IE8_DOM_DEFINE = __webpack_require__(128)
	  , toPrimitive    = __webpack_require__(28)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(35)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(23);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11)
	  , createDesc = __webpack_require__(34);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , hide      = __webpack_require__(16)
	  , has       = __webpack_require__(14)
	  , SRC       = __webpack_require__(44)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(29).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , fails   = __webpack_require__(6)
	  , defined = __webpack_require__(23)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(51)
	  , defined = __webpack_require__(23);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(52)
	  , createDesc     = __webpack_require__(34)
	  , toIObject      = __webpack_require__(19)
	  , toPrimitive    = __webpack_require__(28)
	  , has            = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(128)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(14)
	  , toObject    = __webpack_require__(13)
	  , IE_PROTO    = __webpack_require__(83)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(6);
	
	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mediaProperties = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.formatTime = formatTime;
	exports.isVideoChild = isVideoChild;
	exports.mergeAndSortChildren = mergeAndSortChildren;
	exports.deprecatedWarning = deprecatedWarning;
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * @file format-time.js
	 *
	 * Format seconds as a time string, H:MM:SS or M:SS
	 * Supplying a guide (in seconds) will force a number of leading zeros
	 * to cover the length of the guide
	 *
	 * @param  {Number} seconds Number of seconds to be turned into a string
	 * @param  {Number} guide   Number (in seconds) to model the string after
	 * @return {String}         Time formatted as H:MM:SS or M:SS
	 * @private
	 * @function formatTime
	 */
	function formatTime() {
	  var seconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var guide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : seconds;
	
	  var s = Math.floor(seconds % 60);
	  var m = Math.floor(seconds / 60 % 60);
	  var h = Math.floor(seconds / 3600);
	  var gm = Math.floor(guide / 60 % 60);
	  var gh = Math.floor(guide / 3600);
	
	  // handle invalid times
	  if (isNaN(seconds) || seconds === Infinity) {
	    // '-' is false for all relational operators (e.g. <, >=) so this setting
	    // will add the minimum number of fields specified by the guide
	    h = m = s = '-';
	  }
	
	  // Check if we need to show hours
	  h = h > 0 || gh > 0 ? h + ':' : '';
	
	  // If hours are showing, we may need to add a leading zero.
	  // Always show at least one digit of minutes.
	  m = ((h || gm >= 10) && m < 10 ? '0' + m : m) + ':';
	
	  // Check if leading zero is need for seconds
	  s = s < 10 ? '0' + s : s;
	
	  return h + m + s;
	}
	
	// Check if the element belongs to a video element
	// only accept <source />, <track />,
	// <MyComponent isVideoChild />
	// elements
	function isVideoChild(c) {
	  if (c.props && c.props.isVideoChild) {
	    return true;
	  }
	  return c.type === 'source' || c.type === 'track';
	}
	
	// merge default children
	// sort them by `order` property
	// filter them by `disabled` property
	function mergeAndSortChildren(defaultChildren, _children, _parentProps) {
	  var defaultOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	
	  var children = _react2.default.Children.toArray(_children);
	  var parentProps = _extends({}, _parentProps);
	  return children.filter(function (e) {
	    return !e.props.disabled;
	  }).concat(defaultChildren.filter(function (c) {
	    return !children.find(function (component) {
	      return component.type === c.type;
	    });
	  })).map(function (element) {
	    var defaultComponent = defaultChildren.find(function (c) {
	      return c.type === element.type;
	    });
	    delete parentProps.order;
	    var defaultProps = defaultComponent ? defaultComponent.props : {};
	    var props = _extends({}, parentProps, defaultProps, element.props);
	    var e = _react2.default.cloneElement(element, props, element.props.children);
	    return e;
	  }).sort(function (a, b) {
	    return (a.props.order || defaultOrder) - (b.props.order || defaultOrder);
	  });
	}
	
	/**
	 * Temporary utility for generating the warnings
	 */
	function deprecatedWarning(oldMethodCall, newMethodCall) {
	  // eslint-disable-next-line no-console
	  console.warn('WARNING: ' + oldMethodCall + ' will be deprecated soon! Please use ' + newMethodCall + ' instead.');
	}
	
	var mediaProperties = exports.mediaProperties = ['error', 'src', 'srcObject', 'currentSrc', 'crossOrigin', 'networkState', 'preload', 'buffered', 'readyState', 'seeking', 'currentTime', 'duration', 'paused', 'defaultPlaybackRate', 'playbackRate', 'played', 'seekable', 'ended', 'autoplay', 'loop', 'mediaGroup', 'controller', 'controls', 'volume', 'muted', 'defaultMuted', 'audioTracks', 'videoTracks', 'textTracks', 'width', 'height', 'videoWidth', 'videoHeight', 'poster'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(30)
	  , IObject  = __webpack_require__(51)
	  , toObject = __webpack_require__(13)
	  , toLength = __webpack_require__(12)
	  , asc      = __webpack_require__(172);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(1)
	  , core    = __webpack_require__(29)
	  , fails   = __webpack_require__(6);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(8);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(144)
	  , $export = __webpack_require__(1)
	  , shared  = __webpack_require__(62)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(147)));
	
	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};
	
	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(10)){
	  var LIBRARY             = __webpack_require__(37)
	    , global              = __webpack_require__(4)
	    , fails               = __webpack_require__(6)
	    , $export             = __webpack_require__(1)
	    , $typed              = __webpack_require__(63)
	    , $buffer             = __webpack_require__(90)
	    , ctx                 = __webpack_require__(30)
	    , anInstance          = __webpack_require__(36)
	    , propertyDesc        = __webpack_require__(34)
	    , hide                = __webpack_require__(16)
	    , redefineAll         = __webpack_require__(41)
	    , toInteger           = __webpack_require__(35)
	    , toLength            = __webpack_require__(12)
	    , toIndex             = __webpack_require__(43)
	    , toPrimitive         = __webpack_require__(28)
	    , has                 = __webpack_require__(14)
	    , same                = __webpack_require__(141)
	    , classof             = __webpack_require__(50)
	    , isObject            = __webpack_require__(8)
	    , toObject            = __webpack_require__(13)
	    , isArrayIter         = __webpack_require__(75)
	    , create              = __webpack_require__(38)
	    , getPrototypeOf      = __webpack_require__(21)
	    , gOPN                = __webpack_require__(39).f
	    , getIterFn           = __webpack_require__(92)
	    , uid                 = __webpack_require__(44)
	    , wks                 = __webpack_require__(9)
	    , createArrayMethod   = __webpack_require__(26)
	    , createArrayIncludes = __webpack_require__(53)
	    , speciesConstructor  = __webpack_require__(84)
	    , ArrayIterators      = __webpack_require__(93)
	    , Iterators           = __webpack_require__(47)
	    , $iterDetect         = __webpack_require__(59)
	    , setSpecies          = __webpack_require__(42)
	    , arrayFill           = __webpack_require__(68)
	    , arrayCopyWithin     = __webpack_require__(121)
	    , $DP                 = __webpack_require__(11)
	    , $GOPD               = __webpack_require__(20)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';
	
	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });
	
	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });
	
	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });
	
	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };
	
	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };
	
	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };
	
	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };
	
	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };
	
	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };
	
	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };
	
	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };
	
	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };
	
	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });
	
	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };
	
	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };
	
	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };
	
	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };
	
	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };
	
	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };
	
	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }
	
	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });
	
	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }
	
	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });
	
	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);
	
	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }
	
	    O[NAME] = TypedArray;
	
	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);
	
	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });
	
	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);
	
	    $export($export.P, NAME, proto);
	
	    setSpecies(NAME);
	
	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});
	
	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);
	
	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});
	
	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});
	
	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});
	
	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(8)
	  , has      = __webpack_require__(14)
	  , setDesc  = __webpack_require__(11).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(6)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = false;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(2)
	  , dPs         = __webpack_require__(134)
	  , enumBugKeys = __webpack_require__(71)
	  , IE_PROTO    = __webpack_require__(83)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(70)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(73).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(136)
	  , hiddenKeys = __webpack_require__(71).concat('length', 'prototype');
	
	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(136)
	  , enumBugKeys = __webpack_require__(71);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(17);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(4)
	  , dP          = __webpack_require__(11)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(9)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(35)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(9)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(16)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(30)
	  , call        = __webpack_require__(130)
	  , isArrayIter = __webpack_require__(75)
	  , anObject    = __webpack_require__(2)
	  , toLength    = __webpack_require__(12)
	  , getIterFn   = __webpack_require__(92)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(11).f
	  , has = __webpack_require__(14)
	  , TAG = __webpack_require__(9)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , defined = __webpack_require__(23)
	  , fails   = __webpack_require__(6)
	  , spaces  = __webpack_require__(88)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(22)
	  , TAG = __webpack_require__(9)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(22);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(19)
	  , toLength  = __webpack_require__(12)
	  , toIndex   = __webpack_require__(43);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , $export           = __webpack_require__(1)
	  , redefine          = __webpack_require__(17)
	  , redefineAll       = __webpack_require__(41)
	  , meta              = __webpack_require__(33)
	  , forOf             = __webpack_require__(46)
	  , anInstance        = __webpack_require__(36)
	  , isObject          = __webpack_require__(8)
	  , fails             = __webpack_require__(6)
	  , $iterDetect       = __webpack_require__(59)
	  , setToStringTag    = __webpack_require__(48)
	  , inheritIfRequired = __webpack_require__(74);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(16)
	  , redefine = __webpack_require__(17)
	  , fails    = __webpack_require__(6)
	  , defined  = __webpack_require__(23)
	  , wks      = __webpack_require__(9);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(2);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(8)
	  , cof      = __webpack_require__(22)
	  , MATCH    = __webpack_require__(9)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(9)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(37)|| !__webpack_require__(6)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(4)[K];
	});

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(4)
	  , hide   = __webpack_require__(16)
	  , uid    = __webpack_require__(44)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;
	
	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');
	
	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}
	
	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.USER_ACTIVATE = exports.PLAYER_ACTIVATE = exports.FULLSCREEN_CHANGE = exports.OPERATE = undefined;
	exports.handleFullscreenChange = handleFullscreenChange;
	exports.activate = activate;
	exports.userActivate = userActivate;
	exports.play = play;
	exports.pause = pause;
	exports.togglePlay = togglePlay;
	exports.seek = seek;
	exports.forward = forward;
	exports.replay = replay;
	exports.changeRate = changeRate;
	exports.changeVolume = changeVolume;
	exports.mute = mute;
	exports.toggleFullscreen = toggleFullscreen;
	
	var _fullscreen = __webpack_require__(119);
	
	var _fullscreen2 = _interopRequireDefault(_fullscreen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var OPERATE = exports.OPERATE = 'video-react/OPERATE';
	var FULLSCREEN_CHANGE = exports.FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
	var PLAYER_ACTIVATE = exports.PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
	var USER_ACTIVATE = exports.USER_ACTIVATE = 'video-react/USER_ACTIVATE';
	
	function handleFullscreenChange(isFullscreen) {
	  return {
	    type: FULLSCREEN_CHANGE,
	    isFullscreen: isFullscreen
	  };
	}
	
	function activate(activity) {
	  return {
	    type: PLAYER_ACTIVATE,
	    activity: activity
	  };
	}
	
	function userActivate(activity) {
	  return {
	    type: USER_ACTIVATE,
	    activity: activity
	  };
	}
	
	function play() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'play',
	    source: ''
	  };
	
	  this.video.play();
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function pause() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'pause',
	    source: ''
	  };
	
	  this.video.pause();
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function togglePlay() {
	  var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
	    action: 'toggle-play',
	    source: ''
	  };
	
	  this.video.togglePlay();
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	// seek video by time
	function seek(time) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'seek',
	    source: ''
	  };
	
	  this.video.seek(time);
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	// jump forward x seconds
	function forward(seconds) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'forward-' + seconds,
	    source: ''
	  };
	
	  this.video.forward(seconds);
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	// jump back x seconds
	function replay(seconds) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'replay-' + seconds,
	    source: ''
	  };
	
	  this.video.replay(seconds);
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function changeRate(rate) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'change-rate',
	    source: ''
	  };
	
	  this.video.playbackRate = rate;
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function changeVolume(volume) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: 'change-volume',
	    source: ''
	  };
	
	  var v = volume;
	  if (volume < 0) {
	    v = 0;
	  }
	  if (volume > 1) {
	    v = 1;
	  }
	  this.video.volume = v;
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function mute(muted) {
	  var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
	    action: muted ? 'muted' : 'unmuted',
	    source: ''
	  };
	
	  this.video.muted = muted;
	
	  return {
	    type: OPERATE,
	    operation: operation
	  };
	}
	
	function toggleFullscreen(player) {
	  if (_fullscreen2.default.enabled) {
	    if (_fullscreen2.default.isFullscreen) {
	      _fullscreen2.default.exit();
	    } else {
	      _fullscreen2.default.request(this.rootElement);
	    }
	    return {
	      type: OPERATE,
	      operation: {
	        action: 'toggle-fullscreen',
	        source: ''
	      }
	    };
	  }
	
	  return {
	    type: FULLSCREEN_CHANGE,
	    isFullscreen: !player.isFullscreen
	  };
	}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(94);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dom = __webpack_require__(67);
	
	var Dom = _interopRequireWildcard(_dom);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  className: _propTypes2.default.string,
	  onMouseDown: _propTypes2.default.func,
	  onMouseMove: _propTypes2.default.func,
	  stepForward: _propTypes2.default.func,
	  stepBack: _propTypes2.default.func,
	  sliderActive: _propTypes2.default.func,
	  sliderInactive: _propTypes2.default.func,
	  onMouseUp: _propTypes2.default.func,
	  onFocus: _propTypes2.default.func,
	  onBlur: _propTypes2.default.func,
	  onClick: _propTypes2.default.func,
	  getPercent: _propTypes2.default.func,
	  vertical: _propTypes2.default.bool,
	  children: _propTypes2.default.node,
	  label: _propTypes2.default.string,
	  valuenow: _propTypes2.default.string,
	  valuetext: _propTypes2.default.string
	};
	
	var Slider = function (_Component) {
	  _inherits(Slider, _Component);
	
	  function Slider(props, context) {
	    _classCallCheck(this, Slider);
	
	    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props, context));
	
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	    _this.calculateDistance = _this.calculateDistance.bind(_this);
	    _this.getProgress = _this.getProgress.bind(_this);
	    _this.renderChildren = _this.renderChildren.bind(_this);
	
	    _this.state = {
	      active: false
	    };
	    return _this;
	  }
	
	  _createClass(Slider, [{
	    key: 'getProgress',
	    value: function getProgress() {
	      var getPercent = this.props.getPercent;
	
	      if (!getPercent) {
	        return 0;
	      }
	      var progress = getPercent();
	
	      // Protect against no duration and other division issues
	      if (typeof progress !== 'number' || progress < 0 || progress === Infinity) {
	        progress = 0;
	      }
	      return progress;
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown(event) {
	      var onMouseDown = this.props.onMouseDown;
	      // event.preventDefault();
	      // event.stopPropagation();
	
	      document.addEventListener('mousemove', this.handleMouseMove, true);
	      document.addEventListener('mouseup', this.handleMouseUp, true);
	      document.addEventListener('touchmove', this.handleMouseMove, true);
	      document.addEventListener('touchend', this.handleMouseUp, true);
	
	      this.setState({
	        active: true,
	        distance: 0
	      });
	
	      if (this.props.sliderActive) {
	        this.props.sliderActive(event);
	      }
	
	      this.handleMouseMove(event);
	
	      if (onMouseDown) {
	        onMouseDown(event);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var onMouseMove = this.props.onMouseMove;
	
	
	      if (onMouseMove) {
	        onMouseMove(event);
	      }
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp(event) {
	      var onMouseUp = this.props.onMouseUp;
	
	
	      document.removeEventListener('mousemove', this.handleMouseMove, true);
	      document.removeEventListener('mouseup', this.handleMouseUp, true);
	      document.removeEventListener('touchmove', this.handleMouseMove, true);
	      document.removeEventListener('touchend', this.handleMouseUp, true);
	
	      this.setState({
	        active: false
	      });
	
	      if (this.props.sliderInactive) {
	        this.props.sliderInactive(event);
	      }
	
	      if (onMouseUp) {
	        onMouseUp(event);
	      }
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      document.addEventListener('keydown', this.handleKeyPress, true);
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      document.removeEventListener('keydown', this.handleKeyPress, true);
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.preventDefault();
	      // event.stopPropagation();
	      if (this.props.onClick) {
	        this.props.onClick(event);
	      }
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(event) {
	      if (event.which === 37 || event.which === 40) {
	        // Left and Down Arrows
	        event.preventDefault();
	        event.stopPropagation();
	        this.stepBack();
	      } else if (event.which === 38 || event.which === 39) {
	        // Up and Right Arrows
	        event.preventDefault();
	        event.stopPropagation();
	        this.stepForward();
	      }
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      if (this.props.stepForward) {
	        this.props.stepForward();
	      }
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      if (this.props.stepBack) {
	        this.props.stepBack();
	      }
	    }
	  }, {
	    key: 'calculateDistance',
	    value: function calculateDistance(event) {
	      var node = (0, _reactDom.findDOMNode)(this);
	      var position = Dom.getPointerPosition(node, event);
	      if (this.props.vertical) {
	        return position.y;
	      }
	      return position.x;
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var progress = this.getProgress();
	      var percentage = (progress * 100).toFixed(2) + '%';
	      return _react2.default.Children.map(this.props.children, function (child) {
	        return _react2.default.cloneElement(child, { progress: progress, percentage: percentage });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          vertical = _props.vertical,
	          label = _props.label,
	          valuenow = _props.valuenow,
	          valuetext = _props.valuetext;
	
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)(this.props.className, {
	            'video-react-slider-vertical': vertical,
	            'video-react-slider-horizontal': !vertical,
	            'video-react-sliding': this.state.active
	          }, 'video-react-slider'),
	          tabIndex: '0',
	          onMouseDown: this.handleMouseDown,
	          onTouchStart: this.handleMouseDown,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onClick: this.handleClick,
	          'aria-label': label || '',
	          'aria-valuenow': valuenow || '',
	          'aria-valuetext': valuetext || '',
	          'aria-valuemin': 0,
	          'aria-valuemax': 100
	        },
	        this.renderChildren()
	      );
	    }
	  }]);
	
	  return Slider;
	}(_react.Component);
	
	exports.default = Slider;
	
	
	Slider.propTypes = propTypes;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _MenuButton = __webpack_require__(158);
	
	var _MenuButton2 = _interopRequireDefault(_MenuButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  actions: _propTypes2.default.object,
	  rates: _propTypes2.default.array,
	  className: _propTypes2.default.string
	};
	
	var defaultProps = {
	  rates: [2, 1.5, 1.25, 1, 0.5, 0.25]
	};
	
	var PlaybackRateMenuButton = function (_Component) {
	  _inherits(PlaybackRateMenuButton, _Component);
	
	  function PlaybackRateMenuButton(props, context) {
	    _classCallCheck(this, PlaybackRateMenuButton);
	
	    var _this = _possibleConstructorReturn(this, (PlaybackRateMenuButton.__proto__ || Object.getPrototypeOf(PlaybackRateMenuButton)).call(this, props, context));
	
	    _this.handleSelectItem = _this.handleSelectItem.bind(_this);
	    return _this;
	  }
	
	  _createClass(PlaybackRateMenuButton, [{
	    key: 'handleSelectItem',
	    value: function handleSelectItem(index) {
	      var _props = this.props,
	          rates = _props.rates,
	          actions = _props.actions;
	
	      if (index >= 0 && index < rates.length) {
	        actions.changeRate(rates[index]);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          rates = _props2.rates,
	          player = _props2.player;
	
	      var items = rates.map(function (rate) {
	        return {
	          label: rate + 'x',
	          value: rate
	        };
	      });
	      var selectedIndex = rates.indexOf(player.playbackRate) || 0;
	
	      return _react2.default.createElement(
	        _MenuButton2.default,
	        {
	          className: (0, _classnames2.default)('video-react-playback-rate', this.props.className),
	          onSelectItem: this.handleSelectItem,
	          items: items,
	          selectedIndex: selectedIndex
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          'Playback Rate'
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'video-react-playback-rate-value' },
	          player.playbackRate.toFixed(2),
	          'x'
	        )
	      );
	    }
	  }]);
	
	  return PlaybackRateMenuButton;
	}(_react.Component);
	
	PlaybackRateMenuButton.propTypes = propTypes;
	PlaybackRateMenuButton.defaultProps = defaultProps;
	exports.default = PlaybackRateMenuButton;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findElPosition = findElPosition;
	exports.getPointerPosition = getPointerPosition;
	exports.blurNode = blurNode;
	exports.hasClass = hasClass;
	
	var _reactDom = __webpack_require__(94);
	
	/**
	 * Offset Left
	 * getBoundingClientRect technique from
	 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
	 *
	 * @function findElPosition
	 * @param {Element} el Element from which to get offset
	 * @return {Object}
	 */
	function findElPosition(el) {
	  var box = void 0;
	
	  if (el.getBoundingClientRect && el.parentNode) {
	    box = el.getBoundingClientRect();
	  }
	
	  if (!box) {
	    return {
	      left: 0,
	      top: 0
	    };
	  }
	
	  var docEl = document.documentElement;
	  var body = document.body;
	
	  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
	  var scrollLeft = window.pageXOffset || body.scrollLeft;
	  var left = box.left + scrollLeft - clientLeft;
	
	  var clientTop = docEl.clientTop || body.clientTop || 0;
	  var scrollTop = window.pageYOffset || body.scrollTop;
	  var top = box.top + scrollTop - clientTop;
	
	  // Android sometimes returns slightly off decimal values, so need to round
	  return {
	    left: Math.round(left),
	    top: Math.round(top)
	  };
	}
	
	/**
	 * Get pointer position in element
	 * Returns an object with x and y coordinates.
	 * The base on the coordinates are the bottom left of the element.
	 *
	 * @function getPointerPosition
	 * @param {Element} el Element on which to get the pointer position on
	 * @param {Event} event Event object
	 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
	 */
	function getPointerPosition(el, event) {
	  var position = {};
	  var box = findElPosition(el);
	  var boxW = el.offsetWidth;
	  var boxH = el.offsetHeight;
	
	  var boxY = box.top;
	  var boxX = box.left;
	  var pageY = event.pageY;
	  var pageX = event.pageX;
	
	  if (event.changedTouches) {
	    pageX = event.changedTouches[0].pageX;
	    pageY = event.changedTouches[0].pageY;
	  }
	
	  position.y = Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH));
	  position.x = Math.max(0, Math.min(1, (pageX - boxX) / boxW));
	
	  return position;
	}
	
	// blur an element
	function blurNode(reactNode) {
	  var domNode = (0, _reactDom.findDOMNode)(reactNode);
	  if (domNode && domNode.blur) {
	    domNode.blur();
	  }
	}
	
	// check if an element has a class name
	function hasClass(elm, cls) {
	  var classes = elm.className.split(' ');
	  for (var i = 0; i < classes.length; i++) {
	    if (classes[i].toLowerCase() === cls.toLowerCase()) {
	      return true;
	    }
	  }
	  return false;
	}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(13)
	  , toIndex  = __webpack_require__(43)
	  , toLength = __webpack_require__(12);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(11)
	  , createDesc      = __webpack_require__(34);
	
	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8)
	  , document = __webpack_require__(4).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(9)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4).document && document.documentElement;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(8)
	  , setPrototypeOf = __webpack_require__(82).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(47)
	  , ITERATOR   = __webpack_require__(9)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(22);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(38)
	  , descriptor     = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(48)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(16)(IteratorPrototype, __webpack_require__(9)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(37)
	  , $export        = __webpack_require__(1)
	  , redefine       = __webpack_require__(17)
	  , hide           = __webpack_require__(16)
	  , has            = __webpack_require__(14)
	  , Iterators      = __webpack_require__(47)
	  , $iterCreate    = __webpack_require__(77)
	  , setToStringTag = __webpack_require__(48)
	  , getPrototypeOf = __webpack_require__(21)
	  , ITERATOR       = __webpack_require__(9)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ }),
/* 79 */
/***/ (function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(4)
	  , macrotask = __webpack_require__(89).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(22)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(8)
	  , anObject = __webpack_require__(2);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(30)(Function.call, __webpack_require__(20).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(62)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(2)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(9)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(35)
	  , defined   = __webpack_require__(23);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(58)
	  , defined  = __webpack_require__(23);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(35)
	  , defined   = __webpack_require__(23);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(30)
	  , invoke             = __webpack_require__(57)
	  , html               = __webpack_require__(73)
	  , cel                = __webpack_require__(70)
	  , global             = __webpack_require__(4)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(22)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(4)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , LIBRARY        = __webpack_require__(37)
	  , $typed         = __webpack_require__(63)
	  , hide           = __webpack_require__(16)
	  , redefineAll    = __webpack_require__(41)
	  , fails          = __webpack_require__(6)
	  , anInstance     = __webpack_require__(36)
	  , toInteger      = __webpack_require__(35)
	  , toLength       = __webpack_require__(12)
	  , gOPN           = __webpack_require__(39).f
	  , dP             = __webpack_require__(11).f
	  , arrayFill      = __webpack_require__(68)
	  , setToStringTag = __webpack_require__(48)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;
	
	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};
	
	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};
	
	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};
	
	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};
	
	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};
	
	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };
	
	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };
	
	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }
	
	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(4)
	  , core           = __webpack_require__(29)
	  , LIBRARY        = __webpack_require__(37)
	  , wksExt         = __webpack_require__(143)
	  , defineProperty = __webpack_require__(11).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(50)
	  , ITERATOR  = __webpack_require__(9)('iterator')
	  , Iterators = __webpack_require__(47);
	module.exports = __webpack_require__(29).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(45)
	  , step             = __webpack_require__(131)
	  , Iterators        = __webpack_require__(47)
	  , toIObject        = __webpack_require__(19);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(78)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ }),
/* 94 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_94__;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleLoadStart = handleLoadStart;
	exports.handleCanPlay = handleCanPlay;
	exports.handleWaiting = handleWaiting;
	exports.handleCanPlayThrough = handleCanPlayThrough;
	exports.handlePlaying = handlePlaying;
	exports.handlePlay = handlePlay;
	exports.handlePause = handlePause;
	exports.handleEnd = handleEnd;
	exports.handleSeeking = handleSeeking;
	exports.handleSeeked = handleSeeked;
	exports.handleDurationChange = handleDurationChange;
	exports.handleTimeUpdate = handleTimeUpdate;
	exports.handleVolumeChange = handleVolumeChange;
	exports.handleProgressChange = handleProgressChange;
	exports.handleRateChange = handleRateChange;
	exports.handleSuspend = handleSuspend;
	exports.handleAbort = handleAbort;
	exports.handleEmptied = handleEmptied;
	exports.handleStalled = handleStalled;
	exports.handleLoadedMetaData = handleLoadedMetaData;
	exports.handleLoadedData = handleLoadedData;
	exports.handleResize = handleResize;
	exports.handleError = handleError;
	exports.handleSeekingTime = handleSeekingTime;
	exports.handleEndSeeking = handleEndSeeking;
	var LOAD_START = exports.LOAD_START = 'video-react/LOAD_START';
	var CAN_PLAY = exports.CAN_PLAY = 'video-react/CAN_PLAY';
	var WAITING = exports.WAITING = 'video-react/WAITING';
	var CAN_PLAY_THROUGH = exports.CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
	var PLAYING = exports.PLAYING = 'video-react/PLAYING';
	var PLAY = exports.PLAY = 'video-react/PLAY';
	var PAUSE = exports.PAUSE = 'video-react/PAUSE';
	var END = exports.END = 'video-react/END';
	var SEEKING = exports.SEEKING = 'video-react/SEEKING';
	var SEEKED = exports.SEEKED = 'video-react/SEEKED';
	var SEEKING_TIME = exports.SEEKING_TIME = 'video-react/SEEKING_TIME';
	var END_SEEKING = exports.END_SEEKING = 'video-react/END_SEEKING';
	var DURATION_CHANGE = exports.DURATION_CHANGE = 'video-react/DURATION_CHANGE';
	var TIME_UPDATE = exports.TIME_UPDATE = 'video-react/TIME_UPDATE';
	var VOLUME_CHANGE = exports.VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
	var PROGRESS_CHANGE = exports.PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
	var RATE_CHANGE = exports.RATE_CHANGE = 'video-react/RATE_CHANGE';
	var SUSPEND = exports.SUSPEND = 'video-react/SUSPEND';
	var ABORT = exports.ABORT = 'video-react/ABORT';
	var EMPTIED = exports.EMPTIED = 'video-react/EMPTIED';
	var STALLED = exports.STALLED = 'video-react/STALLED';
	var LOADED_META_DATA = exports.LOADED_META_DATA = 'video-react/LOADED_META_DATA';
	var LOADED_DATA = exports.LOADED_DATA = 'video-react/LOADED_DATA';
	var RESIZE = exports.RESIZE = 'video-react/RESIZE';
	var ERROR = exports.ERROR = 'video-react/ERROR';
	
	function handleLoadStart(videoProps) {
	  return {
	    type: LOAD_START,
	    videoProps: videoProps
	  };
	}
	
	function handleCanPlay(videoProps) {
	  return {
	    type: CAN_PLAY,
	    videoProps: videoProps
	  };
	}
	
	function handleWaiting(videoProps) {
	  return {
	    type: WAITING,
	    videoProps: videoProps
	  };
	}
	
	function handleCanPlayThrough(videoProps) {
	  return {
	    type: CAN_PLAY_THROUGH,
	    videoProps: videoProps
	  };
	}
	
	function handlePlaying(videoProps) {
	  return {
	    type: PLAYING,
	    videoProps: videoProps
	  };
	}
	
	function handlePlay(videoProps) {
	  return {
	    type: PLAY,
	    videoProps: videoProps
	  };
	}
	
	function handlePause(videoProps) {
	  return {
	    type: PAUSE,
	    videoProps: videoProps
	  };
	}
	
	function handleEnd(videoProps) {
	  return {
	    type: END,
	    videoProps: videoProps
	  };
	}
	
	function handleSeeking(videoProps) {
	  return {
	    type: SEEKING,
	    videoProps: videoProps
	  };
	}
	
	function handleSeeked(videoProps) {
	  return {
	    type: SEEKED,
	    videoProps: videoProps
	  };
	}
	
	function handleDurationChange(videoProps) {
	  return {
	    type: DURATION_CHANGE,
	    videoProps: videoProps
	  };
	}
	
	function handleTimeUpdate(videoProps) {
	  return {
	    type: TIME_UPDATE,
	    videoProps: videoProps
	  };
	}
	
	function handleVolumeChange(videoProps) {
	  return {
	    type: VOLUME_CHANGE,
	    videoProps: videoProps
	  };
	}
	
	function handleProgressChange(videoProps) {
	  return {
	    type: PROGRESS_CHANGE,
	    videoProps: videoProps
	  };
	}
	
	function handleRateChange(videoProps) {
	  return {
	    type: RATE_CHANGE,
	    videoProps: videoProps
	  };
	}
	
	function handleSuspend(videoProps) {
	  return {
	    type: SUSPEND,
	    videoProps: videoProps
	  };
	}
	
	function handleAbort(videoProps) {
	  return {
	    type: ABORT,
	    videoProps: videoProps
	  };
	}
	
	function handleEmptied(videoProps) {
	  return {
	    type: EMPTIED,
	    videoProps: videoProps
	  };
	}
	
	function handleStalled(videoProps) {
	  return {
	    type: STALLED,
	    videoProps: videoProps
	  };
	}
	
	function handleLoadedMetaData(videoProps) {
	  return {
	    type: LOADED_META_DATA,
	    videoProps: videoProps
	  };
	}
	
	function handleLoadedData(videoProps) {
	  return {
	    type: LOADED_DATA,
	    videoProps: videoProps
	  };
	}
	
	function handleResize(videoProps) {
	  return {
	    type: RESIZE,
	    videoProps: videoProps
	  };
	}
	
	function handleError(videoProps) {
	  return {
	    type: ERROR,
	    videoProps: videoProps
	  };
	}
	
	function handleSeekingTime(time) {
	  return {
	    type: SEEKING_TIME,
	    time: time
	  };
	}
	
	function handleEndSeeking(time) {
	  return {
	    type: END_SEEKING,
	    time: time
	  };
	}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  manager: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	var Bezel = function (_Component) {
	  _inherits(Bezel, _Component);
	
	  function Bezel(props, context) {
	    _classCallCheck(this, Bezel);
	
	    var _this = _possibleConstructorReturn(this, (Bezel.__proto__ || Object.getPrototypeOf(Bezel)).call(this, props, context));
	
	    _this.timer = null;
	    props.manager.subscribeToOperationStateChange(_this.handleStateChange.bind(_this));
	
	    _this.state = {
	      hidden: true,
	      operation: {}
	    };
	    return _this;
	  }
	
	  _createClass(Bezel, [{
	    key: 'handleStateChange',
	    value: function handleStateChange(state, prevState) {
	      var _this2 = this;
	
	      if (state.count !== prevState.count && state.operation.source === 'shortcut') {
	        if (this.timer) {
	          // previous animation is not finished
	          clearTimeout(this.timer); // cancel it
	          this.timer = null;
	        }
	
	        // show it
	        // update operation
	        this.setState({
	          hidden: false,
	          count: state.count,
	          operation: state.operation
	        });
	
	        // hide it after 0.5s
	        this.timer = setTimeout(function () {
	          _this2.setState({
	            hidden: true
	          });
	          _this2.timer = null;
	        }, 500);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      // only displays for shortcut so far
	      if (this.state.operation.source !== 'shortcut') {
	        return null;
	      }
	      var style = this.state.hidden ? {
	        display: 'none'
	      } : null;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-bezel': true,
	            'video-react-bezel-animation': this.state.count % 2 === 0,
	            'video-react-bezel-animation-alt': this.state.count % 2 === 1
	          }, this.props.className),
	          style: style,
	          role: 'status',
	          'aria-label': this.state.operation.action
	        },
	        _react2.default.createElement('div', {
	          className: (0, _classnames2.default)('video-react-bezel-icon', 'video-react-bezel-icon-' + this.state.operation.action)
	        })
	      );
	    }
	  }]);
	
	  return Bezel;
	}(_react.Component);
	
	exports.default = Bezel;
	
	
	Bezel.propTypes = propTypes;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _propTypes2.default.object,
	  player: _propTypes2.default.object,
	  position: _propTypes2.default.string,
	  className: _propTypes2.default.string
	};
	
	var defaultProps = {
	  position: 'left'
	};
	
	var BigPlayButton = function (_Component) {
	  _inherits(BigPlayButton, _Component);
	
	  function BigPlayButton(props, context) {
	    _classCallCheck(this, BigPlayButton);
	
	    var _this = _possibleConstructorReturn(this, (BigPlayButton.__proto__ || Object.getPrototypeOf(BigPlayButton)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(BigPlayButton, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var actions = this.props.actions;
	
	      actions.play();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          player = _props.player,
	          position = _props.position;
	
	      if (player.hasStarted || !player.currentSrc) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'button',
	        {
	          className: (0, _classnames2.default)('video-react-big-play-button', 'video-react-big-play-button-' + position, this.props.className),
	          type: 'button',
	          'aria-live': 'polite',
	          tabIndex: '0',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          'Play Video'
	        )
	      );
	    }
	  }]);
	
	  return BigPlayButton;
	}(_react.Component);
	
	exports.default = BigPlayButton;
	
	
	BigPlayButton.propTypes = propTypes;
	BigPlayButton.defaultProps = defaultProps;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  tagName: _propTypes2.default.string.isRequired,
	  onClick: _propTypes2.default.func.isRequired,
	  onFocus: _propTypes2.default.func,
	  onBlur: _propTypes2.default.func,
	  className: _propTypes2.default.string
	};
	
	var defaultProps = {
	  tagName: 'div'
	};
	
	var ClickableComponent = function (_Component) {
	  _inherits(ClickableComponent, _Component);
	
	  function ClickableComponent(props, context) {
	    _classCallCheck(this, ClickableComponent);
	
	    var _this = _possibleConstructorReturn(this, (ClickableComponent.__proto__ || Object.getPrototypeOf(ClickableComponent)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleKeypress = _this.handleKeypress.bind(_this);
	    return _this;
	  }
	
	  _createClass(ClickableComponent, [{
	    key: 'handleKeypress',
	    value: function handleKeypress(event) {
	      // Support Space (32) or Enter (13) key operation to fire a click event
	      if (event.which === 32 || event.which === 13) {
	        event.preventDefault();
	        this.handleClick(event);
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var onClick = this.props.onClick;
	
	      onClick(event);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      document.addEventListener('keydown', this.handleKeypress);
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      document.removeEventListener('keydown', this.handleKeypress);
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var Tag = this.props.tagName;
	      var props = _extends({}, this.props);
	      delete props.tagName;
	      delete props.className;
	      return _react2.default.createElement(Tag, _extends({
	        className: (0, _classnames2.default)(this.props.className),
	        role: 'button',
	        tabIndex: '0',
	        onClick: this.handleClick,
	        onFocus: this.handleFocus,
	        onBlur: this.handleBlur
	      }, props));
	    }
	  }]);
	
	  return ClickableComponent;
	}(_react.Component);
	
	exports.default = ClickableComponent;
	
	
	ClickableComponent.propTypes = propTypes;
	ClickableComponent.defaultProps = defaultProps;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LoadingSpinner;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	function LoadingSpinner(_ref) {
	  var player = _ref.player,
	      className = _ref.className;
	
	  if (!player.hasStarted || !player.seeking && !player.waiting) {
	    return null;
	  }
	
	  return _react2.default.createElement('div', {
	    className: (0, _classnames2.default)('video-react-loading-spinner', className)
	  });
	}
	
	LoadingSpinner.propTypes = propTypes;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  poster: _propTypes2.default.string,
	  player: _propTypes2.default.object,
	  actions: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	function PosterImage(_ref) {
	  var poster = _ref.poster,
	      player = _ref.player,
	      actions = _ref.actions,
	      className = _ref.className;
	
	  if (!poster || player.hasStarted) {
	    return null;
	  }
	
	  return _react2.default.createElement('div', {
	    className: (0, _classnames2.default)('video-react-poster', className),
	    style: {
	      backgroundImage: 'url("' + poster + '")'
	    },
	    onClick: function onClick() {
	      if (player.paused) {
	        actions.play();
	      }
	    }
	  });
	}
	
	PosterImage.propTypes = propTypes;
	
	exports.default = PosterImage;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _dom = __webpack_require__(67);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  manager: _propTypes2.default.object,
	  actions: _propTypes2.default.object,
	  player: _propTypes2.default.object,
	  shortcuts: _propTypes2.default.array
	};
	
	var Shortcut = function (_Component) {
	  _inherits(Shortcut, _Component);
	
	  function Shortcut(props, context) {
	    _classCallCheck(this, Shortcut);
	
	    var _this = _possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).call(this, props, context));
	
	    _this.defaultShortcuts = [{
	      keyCode: 32, // spacebar
	      handle: _this.togglePlay
	    }, {
	      keyCode: 75, // k
	      handle: _this.togglePlay
	    }, {
	      keyCode: 70, // f
	      handle: _this.toggleFullscreen
	    }, {
	      keyCode: 37, // Left arrow
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.replay(5, {
	          action: 'replay-5',
	          source: 'shortcut'
	        }); // Go back 5 seconds
	      }
	    }, {
	      keyCode: 74, // j
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.replay(10, {
	          action: 'replay-10',
	          source: 'shortcut'
	        }); // Go back 10 seconds
	      }
	    }, {
	      keyCode: 39, // Right arrow
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.forward(5, {
	          action: 'forward-5',
	          source: 'shortcut'
	        }); // Go forward 5 seconds
	      }
	    }, {
	      keyCode: 76, // l
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.forward(10, {
	          action: 'forward-10',
	          source: 'shortcut'
	        }); // Go forward 10 seconds
	      }
	    }, {
	      keyCode: 36, // Home
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        actions.seek(0); // Go to beginning of video
	      }
	    }, {
	      keyCode: 35, // End
	      handle: function handle(player, actions) {
	        if (!player.hasStarted) {
	          return;
	        }
	        // Go to end of video
	        actions.seek(player.duration);
	      }
	    }, {
	      keyCode: 38, // Up arrow
	      handle: function handle(player, actions) {
	        // Increase volume 5%
	        var v = player.volume + 0.05;
	        if (v > 1) {
	          v = 1;
	        }
	        actions.changeVolume(v, {
	          action: 'volume-up',
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 40, // Down arrow
	      handle: function handle(player, actions) {
	        // Decrease volume 5%
	        var v = player.volume - 0.05;
	        if (v < 0) {
	          v = 0;
	        }
	        var action = v > 0 ? 'volume-down' : 'volume-off';
	        actions.changeVolume(v, {
	          action: action,
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 190, // Shift + >
	      shift: true,
	      handle: function handle(player, actions) {
	        // Increase speed
	        var playbackRate = player.playbackRate;
	        if (playbackRate >= 1.5) {
	          playbackRate = 2;
	        } else if (playbackRate >= 1.25) {
	          playbackRate = 1.5;
	        } else if (playbackRate >= 1.0) {
	          playbackRate = 1.25;
	        } else if (playbackRate >= 0.5) {
	          playbackRate = 1.0;
	        } else if (playbackRate >= 0.25) {
	          playbackRate = 0.5;
	        } else if (playbackRate >= 0) {
	          playbackRate = 0.25;
	        }
	        actions.changeRate(playbackRate, {
	          action: 'fast-forward',
	          source: 'shortcut'
	        });
	      }
	    }, {
	      keyCode: 188, // Shift + <
	      shift: true,
	      handle: function handle(player, actions) {
	        // Decrease speed
	        var playbackRate = player.playbackRate;
	        if (playbackRate <= 0.5) {
	          playbackRate = 0.25;
	        } else if (playbackRate <= 1.0) {
	          playbackRate = 0.5;
	        } else if (playbackRate <= 1.25) {
	          playbackRate = 1.0;
	        } else if (playbackRate <= 1.5) {
	          playbackRate = 1.25;
	        } else if (playbackRate <= 2) {
	          playbackRate = 1.5;
	        }
	        actions.changeRate(playbackRate, {
	          action: 'fast-rewind',
	          source: 'shortcut'
	        });
	      }
	    }];
	
	    _this.shortcuts = [].concat(_toConsumableArray(_this.defaultShortcuts));
	
	    _this.mergeShortcuts = _this.mergeShortcuts.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Shortcut, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.mergeShortcuts();
	      document.addEventListener('keydown', this.handleKeyPress);
	      document.addEventListener('click', this.handleClick);
	      document.addEventListener('dblclick', this.handleDoubleClick);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (prevProps.shortcuts !== this.props.shortcuts) {
	        this.mergeShortcuts();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('keydown', this.handleKeyPress);
	    }
	
	    // merge the shortcuts from props
	
	  }, {
	    key: 'mergeShortcuts',
	    value: function mergeShortcuts() {
	      var gradeShortcut = function gradeShortcut(s) {
	        var score = 0;
	        var ps = ['ctrl', 'shift', 'alt'];
	        ps.forEach(function (key) {
	          if (s[key]) {
	            score++;
	          }
	        });
	        return score;
	      };
	
	      var shortcuts = (this.props.shortcuts || []).filter(function (s) {
	        return s.keyCode && s.handle && typeof s.handle === 'function';
	      });
	
	      this.shortcuts = [].concat(_toConsumableArray(shortcuts), _toConsumableArray(this.defaultShortcuts)).sort(function (a, b) {
	        return gradeShortcut(b) - gradeShortcut(a);
	      });
	    }
	  }, {
	    key: 'togglePlay',
	    value: function togglePlay(player, actions) {
	      if (player.paused) {
	        actions.play({
	          action: 'play',
	          source: 'shortcut'
	        });
	      } else {
	        actions.pause({
	          action: 'pause',
	          source: 'shortcut'
	        });
	      }
	    }
	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen(player, actions) {
	      actions.toggleFullscreen(player);
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      if (!player.isActive) {
	        return;
	      }
	      if (document.activeElement && ((0, _dom.hasClass)(document.activeElement, 'video-react-control') || (0, _dom.hasClass)(document.activeElement, 'video-react-menu-button-active'
	      // || hasClass(document.activeElement, 'video-react-slider')
	      ) || (0, _dom.hasClass)(document.activeElement, 'video-react-big-play-button'))) {
	        return;
	      }
	
	      var keyCode = e.keyCode || e.which;
	      var ctrl = e.ctrlKey || e.metaKey;
	      var shift = e.shiftKey;
	      var alt = e.altKey;
	
	      var shortcut = this.shortcuts.find(function (s) {
	        if (!s.keyCode || s.keyCode - keyCode !== 0) {
	          return false;
	        }
	        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
	          return false;
	        }
	        return true;
	      });
	
	      if (shortcut) {
	        shortcut.handle(player, actions);
	        e.preventDefault();
	      }
	    }
	
	    // only if player is active and player is ready
	
	  }, {
	    key: 'canBeClicked',
	    value: function canBeClicked(player, e) {
	      if (!player.isActive || e.target.nodeName !== 'VIDEO' || player.readyState !== 4) {
	        return false;
	      }
	      return true;
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(e) {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions;
	
	      if (!this.canBeClicked(player, e)) {
	        return;
	      }
	      this.togglePlay(player, actions);
	      // e.preventDefault();
	    }
	  }, {
	    key: 'handleDoubleClick',
	    value: function handleDoubleClick(e) {
	      var _props3 = this.props,
	          player = _props3.player,
	          actions = _props3.actions;
	
	      if (!this.canBeClicked(player, e)) {
	        return;
	      }
	      this.toggleFullscreen(player, actions);
	      // e.preventDefault();
	    }
	
	    // this component dose not render anything
	    // it's just for the key down event
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return Shortcut;
	}(_react.Component);
	
	exports.default = Shortcut;
	
	
	Shortcut.propTypes = propTypes;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(151);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _propTypes2.default.object,
	  player: _propTypes2.default.object,
	  children: _propTypes2.default.any,
	  startTime: _propTypes2.default.number,
	  loop: _propTypes2.default.bool,
	  muted: _propTypes2.default.bool,
	  autoPlay: _propTypes2.default.bool,
	  playsInline: _propTypes2.default.bool,
	  src: _propTypes2.default.string,
	  poster: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	  preload: _propTypes2.default.oneOf(['auto', 'metadata', 'none']),
	  crossOrigin: _propTypes2.default.string,
	
	  onLoadStart: _propTypes2.default.func,
	  onWaiting: _propTypes2.default.func,
	  onCanPlay: _propTypes2.default.func,
	  onCanPlayThrough: _propTypes2.default.func,
	  onPlaying: _propTypes2.default.func,
	  onEnded: _propTypes2.default.func,
	  onSeeking: _propTypes2.default.func,
	  onSeeked: _propTypes2.default.func,
	  onPlay: _propTypes2.default.func,
	  onPause: _propTypes2.default.func,
	  onProgress: _propTypes2.default.func,
	  onDurationChange: _propTypes2.default.func,
	  onError: _propTypes2.default.func,
	  onSuspend: _propTypes2.default.func,
	  onAbort: _propTypes2.default.func,
	  onEmptied: _propTypes2.default.func,
	  onStalled: _propTypes2.default.func,
	  onLoadedMetadata: _propTypes2.default.func,
	  onLoadedData: _propTypes2.default.func,
	  onTimeUpdate: _propTypes2.default.func,
	  onRateChange: _propTypes2.default.func,
	  onVolumeChange: _propTypes2.default.func,
	  onResize: _propTypes2.default.func
	};
	
	var defaultProps = {
	  preload: 'auto'
	};
	
	var Video = function (_Component) {
	  _inherits(Video, _Component);
	
	  function Video(props) {
	    _classCallCheck(this, Video);
	
	    var _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));
	
	    _this.video = null; // the html5 video
	    _this.play = _this.play.bind(_this);
	    _this.pause = _this.pause.bind(_this);
	    _this.seek = _this.seek.bind(_this);
	    _this.forward = _this.forward.bind(_this);
	    _this.replay = _this.replay.bind(_this);
	    _this.toggleFullscreen = _this.toggleFullscreen.bind(_this);
	    _this.getProperties = _this.getProperties.bind(_this);
	    _this.renderChildren = _this.renderChildren.bind(_this);
	    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
	    _this.handleCanPlay = _this.handleCanPlay.bind(_this);
	    _this.handleCanPlayThrough = _this.handleCanPlayThrough.bind(_this);
	    _this.handlePlay = _this.handlePlay.bind(_this);
	    _this.handlePlaying = _this.handlePlaying.bind(_this);
	    _this.handlePause = _this.handlePause.bind(_this);
	    _this.handleEnded = _this.handleEnded.bind(_this);
	    _this.handleWaiting = _this.handleWaiting.bind(_this);
	    _this.handleSeeking = _this.handleSeeking.bind(_this);
	    _this.handleSeeked = _this.handleSeeked.bind(_this);
	    _this.handleFullscreenChange = _this.handleFullscreenChange.bind(_this);
	    _this.handleError = _this.handleError.bind(_this);
	    _this.handleSuspend = _this.handleSuspend.bind(_this);
	    _this.handleAbort = _this.handleAbort.bind(_this);
	    _this.handleEmptied = _this.handleEmptied.bind(_this);
	    _this.handleStalled = _this.handleStalled.bind(_this);
	    _this.handleLoadedMetaData = _this.handleLoadedMetaData.bind(_this);
	    _this.handleLoadedData = _this.handleLoadedData.bind(_this);
	    _this.handleTimeUpdate = _this.handleTimeUpdate.bind(_this);
	    _this.handleRateChange = _this.handleRateChange.bind(_this);
	    _this.handleVolumeChange = _this.handleVolumeChange.bind(_this);
	    _this.handleDurationChange = _this.handleDurationChange.bind(_this);
	    _this.handleProgress = (0, _lodash2.default)(_this.handleProgress.bind(_this), 250);
	    _this.handleKeypress = _this.handleKeypress.bind(_this);
	    return _this;
	  }
	
	  _createClass(Video, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.forceUpdate(); // make sure the children can get the video property
	    }
	
	    // get all video properties
	
	  }, {
	    key: 'getProperties',
	    value: function getProperties() {
	      var _this2 = this;
	
	      if (!this.video) {
	        return null;
	      }
	
	      return _utils.mediaProperties.reduce(function (properties, key) {
	        properties[key] = _this2.video[key];
	        return properties;
	      }, {});
	    }
	
	    // get playback rate
	
	  }, {
	    key: 'play',
	
	
	    // play the video
	    value: function play() {
	      this.video.play();
	    }
	
	    // pause the video
	
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.video.pause();
	    }
	
	    // Change the video source and re-load the video:
	
	  }, {
	    key: 'load',
	    value: function load() {
	      this.video.load();
	    }
	
	    // Add a new text track to the video
	
	  }, {
	    key: 'addTextTrack',
	    value: function addTextTrack() {
	      var _video;
	
	      (_video = this.video).addTextTrack.apply(_video, arguments);
	    }
	
	    // Check if your browser can play different types of video:
	
	  }, {
	    key: 'canPlayType',
	    value: function canPlayType() {
	      var _video2;
	
	      (_video2 = this.video).canPlayType.apply(_video2, arguments);
	    }
	
	    // toggle play
	
	  }, {
	    key: 'togglePlay',
	    value: function togglePlay() {
	      if (this.video.paused) {
	        this.play();
	      } else {
	        this.pause();
	      }
	    }
	
	    // seek video by time
	
	  }, {
	    key: 'seek',
	    value: function seek(time) {
	      try {
	        this.video.currentTime = time;
	      } catch (e) {
	        // console.log(e, 'Video is not ready.')
	      }
	    }
	
	    // jump forward x seconds
	
	  }, {
	    key: 'forward',
	    value: function forward(seconds) {
	      this.seek(this.video.currentTime + seconds);
	    }
	
	    // jump back x seconds
	
	  }, {
	    key: 'replay',
	    value: function replay(seconds) {
	      this.forward(-seconds);
	    }
	
	    // enter or exist full screen
	
	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      actions.toggleFullscreen(player);
	    }
	
	    // Fired when the user agent
	    // begins looking for media data
	
	  }, {
	    key: 'handleLoadStart',
	    value: function handleLoadStart() {
	      var _props2 = this.props,
	          actions = _props2.actions,
	          onLoadStart = _props2.onLoadStart;
	
	      actions.handleLoadStart(this.getProperties());
	      if (onLoadStart) {
	        onLoadStart.apply(undefined, arguments);
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handleCanPlay',
	    value: function handleCanPlay() {
	      var _props3 = this.props,
	          actions = _props3.actions,
	          onCanPlay = _props3.onCanPlay;
	
	
	      actions.handleCanPlay(this.getProperties());
	
	      if (onCanPlay) {
	        onCanPlay.apply(undefined, arguments);
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handleCanPlayThrough',
	    value: function handleCanPlayThrough() {
	      var _props4 = this.props,
	          actions = _props4.actions,
	          onCanPlayThrough = _props4.onCanPlayThrough;
	
	      actions.handleCanPlayThrough(this.getProperties());
	
	      if (onCanPlayThrough) {
	        onCanPlayThrough.apply(undefined, arguments);
	      }
	    }
	
	    // A handler for events that
	    // signal that waiting has ended
	
	  }, {
	    key: 'handlePlaying',
	    value: function handlePlaying() {
	      var _props5 = this.props,
	          actions = _props5.actions,
	          onPlaying = _props5.onPlaying;
	
	      actions.handlePlaying(this.getProperties());
	
	      if (onPlaying) {
	        onPlaying.apply(undefined, arguments);
	      }
	    }
	
	    // Fired whenever the media has been started
	
	  }, {
	    key: 'handlePlay',
	    value: function handlePlay() {
	      var _props6 = this.props,
	          actions = _props6.actions,
	          onPlay = _props6.onPlay;
	
	      actions.handlePlay(this.getProperties());
	
	      if (onPlay) {
	        onPlay.apply(undefined, arguments);
	      }
	    }
	
	    // Fired whenever the media has been paused
	
	  }, {
	    key: 'handlePause',
	    value: function handlePause() {
	      var _props7 = this.props,
	          actions = _props7.actions,
	          onPause = _props7.onPause;
	
	      actions.handlePause(this.getProperties());
	
	      if (onPause) {
	        onPause.apply(undefined, arguments);
	      }
	    }
	
	    // Fired when the duration of
	    // the media resource is first known or changed
	
	  }, {
	    key: 'handleDurationChange',
	    value: function handleDurationChange() {
	      var _props8 = this.props,
	          actions = _props8.actions,
	          onDurationChange = _props8.onDurationChange;
	
	      actions.handleDurationChange(this.getProperties());
	
	      if (onDurationChange) {
	        onDurationChange.apply(undefined, arguments);
	      }
	    }
	
	    // Fired while the user agent
	    // is downloading media data
	
	  }, {
	    key: 'handleProgress',
	    value: function handleProgress() {
	      var _props9 = this.props,
	          actions = _props9.actions,
	          onProgress = _props9.onProgress;
	
	      if (this.video) {
	        actions.handleProgressChange(this.getProperties());
	      }
	
	      if (onProgress) {
	        onProgress.apply(undefined, arguments);
	      }
	    }
	
	    // Fired when the end of the media resource
	    // is reached (currentTime == duration)
	
	  }, {
	    key: 'handleEnded',
	    value: function handleEnded() {
	      var _props10 = this.props,
	          loop = _props10.loop,
	          player = _props10.player,
	          actions = _props10.actions,
	          onEnded = _props10.onEnded;
	
	      if (loop) {
	        this.seek(0);
	        this.play();
	      } else if (!player.paused) {
	        this.pause();
	      }
	      actions.handleEnd(this.getProperties());
	
	      if (onEnded) {
	        onEnded.apply(undefined, arguments);
	      }
	    }
	
	    // Fired whenever the media begins waiting
	
	  }, {
	    key: 'handleWaiting',
	    value: function handleWaiting() {
	      var _props11 = this.props,
	          actions = _props11.actions,
	          onWaiting = _props11.onWaiting;
	
	      actions.handleWaiting(this.getProperties());
	
	      if (onWaiting) {
	        onWaiting.apply(undefined, arguments);
	      }
	    }
	
	    // Fired whenever the player
	    // is jumping to a new time
	
	  }, {
	    key: 'handleSeeking',
	    value: function handleSeeking() {
	      var _props12 = this.props,
	          actions = _props12.actions,
	          onSeeking = _props12.onSeeking;
	
	      actions.handleSeeking(this.getProperties());
	
	      if (onSeeking) {
	        onSeeking.apply(undefined, arguments);
	      }
	    }
	
	    // Fired when the player has
	    // finished jumping to a new time
	
	  }, {
	    key: 'handleSeeked',
	    value: function handleSeeked() {
	      var _props13 = this.props,
	          actions = _props13.actions,
	          onSeeked = _props13.onSeeked;
	
	      actions.handleSeeked(this.getProperties());
	
	      if (onSeeked) {
	        onSeeked.apply(undefined, arguments);
	      }
	    }
	
	    // Handle Fullscreen Change
	
	  }, {
	    key: 'handleFullscreenChange',
	    value: function handleFullscreenChange() {}
	
	    // Fires when the browser is
	    // intentionally not getting media data
	
	  }, {
	    key: 'handleSuspend',
	    value: function handleSuspend() {
	      var _props14 = this.props,
	          actions = _props14.actions,
	          onSuspend = _props14.onSuspend;
	
	      actions.handleSuspend(this.getProperties());
	      if (onSuspend) {
	        onSuspend.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the loading of an audio/video is aborted
	
	  }, {
	    key: 'handleAbort',
	    value: function handleAbort() {
	      var _props15 = this.props,
	          actions = _props15.actions,
	          onAbort = _props15.onAbort;
	
	      actions.handleAbort(this.getProperties());
	      if (onAbort) {
	        onAbort.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the current playlist is empty
	
	  }, {
	    key: 'handleEmptied',
	    value: function handleEmptied() {
	      var _props16 = this.props,
	          actions = _props16.actions,
	          onEmptied = _props16.onEmptied;
	
	      actions.handleEmptied(this.getProperties());
	      if (onEmptied) {
	        onEmptied.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the browser is trying to
	    // get media data, but data is not available
	
	  }, {
	    key: 'handleStalled',
	    value: function handleStalled() {
	      var _props17 = this.props,
	          actions = _props17.actions,
	          onStalled = _props17.onStalled;
	
	      actions.handleStalled(this.getProperties());
	
	      if (onStalled) {
	        onStalled.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the browser has loaded
	    // meta data for the audio/video
	
	  }, {
	    key: 'handleLoadedMetaData',
	    value: function handleLoadedMetaData() {
	      var _props18 = this.props,
	          actions = _props18.actions,
	          onLoadedMetadata = _props18.onLoadedMetadata,
	          startTime = _props18.startTime;
	
	
	      if (startTime && startTime > 0) {
	        this.video.currentTime = startTime;
	      }
	
	      actions.handleLoadedMetaData(this.getProperties());
	
	      if (onLoadedMetadata) {
	        onLoadedMetadata.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the browser has loaded
	    // the current frame of the audio/video
	
	  }, {
	    key: 'handleLoadedData',
	    value: function handleLoadedData() {
	      var _props19 = this.props,
	          actions = _props19.actions,
	          onLoadedData = _props19.onLoadedData;
	
	      actions.handleLoadedData(this.getProperties());
	
	      if (onLoadedData) {
	        onLoadedData.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the current
	    // playback position has changed
	
	  }, {
	    key: 'handleTimeUpdate',
	    value: function handleTimeUpdate() {
	      var _props20 = this.props,
	          actions = _props20.actions,
	          onTimeUpdate = _props20.onTimeUpdate;
	
	      actions.handleTimeUpdate(this.getProperties());
	
	      if (onTimeUpdate) {
	        onTimeUpdate.apply(undefined, arguments);
	      }
	    }
	
	    /**
	     * Fires when the playing speed of the audio/video is changed
	     */
	
	  }, {
	    key: 'handleRateChange',
	    value: function handleRateChange() {
	      var _props21 = this.props,
	          actions = _props21.actions,
	          onRateChange = _props21.onRateChange;
	
	      actions.handleRateChange(this.getProperties());
	
	      if (onRateChange) {
	        onRateChange.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when the volume has been changed
	
	  }, {
	    key: 'handleVolumeChange',
	    value: function handleVolumeChange() {
	      var _props22 = this.props,
	          actions = _props22.actions,
	          onVolumeChange = _props22.onVolumeChange;
	
	      actions.handleVolumeChange(this.getProperties());
	
	      if (onVolumeChange) {
	        onVolumeChange.apply(undefined, arguments);
	      }
	    }
	
	    // Fires when an error occurred
	    // during the loading of an audio/video
	
	  }, {
	    key: 'handleError',
	    value: function handleError() {
	      var _props23 = this.props,
	          actions = _props23.actions,
	          onError = _props23.onError;
	
	      actions.handleError(this.getProperties());
	      if (onError) {
	        onError.apply(undefined, arguments);
	      }
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {
	      var _props24 = this.props,
	          actions = _props24.actions,
	          onResize = _props24.onResize;
	
	      actions.handleResize(this.getProperties());
	      if (onResize) {
	        onResize.apply(undefined, arguments);
	      }
	    }
	  }, {
	    key: 'handleKeypress',
	    value: function handleKeypress() {}
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _this3 = this;
	
	      var props = _extends({}, this.props, {
	        video: this.video
	      });
	
	      // to make sure the children can get video property
	      if (!this.video) {
	        return null;
	      }
	
	      // only keep <source />, <track />, <MyComponent isVideoChild /> elements
	      return _react2.default.Children.toArray(this.props.children).filter(_utils.isVideoChild).map(function (c) {
	        var cprops = void 0;
	        if (typeof c.type === 'string') {
	          // add onError to <source />
	          if (c.type === 'source') {
	            cprops = _extends({}, c.props);
	            var preOnError = cprops.onError;
	            cprops.onError = function () {
	              if (preOnError) {
	                preOnError.apply(undefined, arguments);
	              }
	              _this3.handleError.apply(_this3, arguments);
	            };
	          }
	        } else {
	          cprops = props;
	        }
	        return _react2.default.cloneElement(c, cprops);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props25 = this.props,
	          loop = _props25.loop,
	          poster = _props25.poster,
	          preload = _props25.preload,
	          src = _props25.src,
	          autoPlay = _props25.autoPlay,
	          playsInline = _props25.playsInline,
	          muted = _props25.muted,
	          crossOrigin = _props25.crossOrigin;
	
	
	      return _react2.default.createElement(
	        'video',
	        {
	          className: (0, _classnames2.default)('video-react-video', this.props.className),
	          crossOrigin: crossOrigin,
	          ref: function ref(c) {
	            _this4.video = c;
	          },
	          muted: muted,
	          preload: preload,
	          loop: loop,
	          playsInline: playsInline,
	          autoPlay: autoPlay,
	          poster: poster,
	          src: src,
	          onLoadStart: this.handleLoadStart,
	          onWaiting: this.handleWaiting,
	          onCanPlay: this.handleCanPlay,
	          onCanPlayThrough: this.handleCanPlayThrough,
	          onPlaying: this.handlePlaying,
	          onEnded: this.handleEnded,
	          onSeeking: this.handleSeeking,
	          onSeeked: this.handleSeeked,
	          onPlay: this.handlePlay,
	          onPause: this.handlePause,
	          onProgress: this.handleProgress,
	          onDurationChange: this.handleDurationChange,
	          onError: this.handleError,
	          onSuspend: this.handleSuspend,
	          onAbort: this.handleAbort,
	          onEmptied: this.handleEmptied,
	          onStalled: this.handleStalled,
	          onLoadedMetadata: this.handleLoadedMetaData,
	          onLoadedData: this.handleLoadedData,
	          onTimeUpdate: this.handleTimeUpdate,
	          onRateChange: this.handleRateChange,
	          onVolumeChange: this.handleVolumeChange
	        },
	        this.renderChildren()
	      );
	    }
	  }, {
	    key: 'playbackRate',
	    get: function get() {
	      return this.video.playbackRate;
	    }
	
	    // set playback rate
	    // speed of video
	    ,
	    set: function set(rate) {
	      this.video.playbackRate = rate;
	    }
	  }, {
	    key: 'muted',
	    get: function get() {
	      return this.video.muted;
	    },
	    set: function set(val) {
	      this.video.muted = val;
	    }
	  }, {
	    key: 'volume',
	    get: function get() {
	      return this.video.volume;
	    },
	    set: function set(val) {
	      if (val > 1) {
	        val = 1;
	      }
	      if (val < 0) {
	        val = 0;
	      }
	      this.video.volume = val;
	    }
	
	    // video width
	
	  }, {
	    key: 'videoWidth',
	    get: function get() {
	      return this.video.videoWidth;
	    }
	
	    // video height
	
	  }, {
	    key: 'videoHeight',
	    get: function get() {
	      return this.video.videoHeight;
	    }
	  }]);
	
	  return Video;
	}(_react.Component);
	
	exports.default = Video;
	
	
	Video.propTypes = propTypes;
	Video.defaultProps = defaultProps;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ProgressControl = __webpack_require__(111);
	
	var _ProgressControl2 = _interopRequireDefault(_ProgressControl);
	
	var _PlayToggle = __webpack_require__(110);
	
	var _PlayToggle2 = _interopRequireDefault(_PlayToggle);
	
	var _ForwardControl = __webpack_require__(104);
	
	var _ForwardControl2 = _interopRequireDefault(_ForwardControl);
	
	var _ReplayControl = __webpack_require__(112);
	
	var _ReplayControl2 = _interopRequireDefault(_ReplayControl);
	
	var _FullscreenToggle = __webpack_require__(106);
	
	var _FullscreenToggle2 = _interopRequireDefault(_FullscreenToggle);
	
	var _RemainingTimeDisplay = __webpack_require__(117);
	
	var _RemainingTimeDisplay2 = _interopRequireDefault(_RemainingTimeDisplay);
	
	var _CurrentTimeDisplay = __webpack_require__(115);
	
	var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);
	
	var _DurationDisplay = __webpack_require__(116);
	
	var _DurationDisplay2 = _interopRequireDefault(_DurationDisplay);
	
	var _TimeDivider = __webpack_require__(118);
	
	var _TimeDivider2 = _interopRequireDefault(_TimeDivider);
	
	var _VolumeMenuButton = __webpack_require__(114);
	
	var _VolumeMenuButton2 = _interopRequireDefault(_VolumeMenuButton);
	
	var _PlaybackRateMenuButton = __webpack_require__(66);
	
	var _PlaybackRateMenuButton2 = _interopRequireDefault(_PlaybackRateMenuButton);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  children: _propTypes2.default.any,
	  autoHide: _propTypes2.default.bool,
	  disableDefaultControls: _propTypes2.default.bool,
	  className: _propTypes2.default.string
	};
	
	var defaultProps = {
	  autoHide: true
	};
	
	var ControlBar = function (_Component) {
	  _inherits(ControlBar, _Component);
	
	  function ControlBar(props) {
	    _classCallCheck(this, ControlBar);
	
	    var _this = _possibleConstructorReturn(this, (ControlBar.__proto__ || Object.getPrototypeOf(ControlBar)).call(this, props));
	
	    _this.getDefaultChildren = _this.getDefaultChildren.bind(_this);
	    _this.getFullChildren = _this.getFullChildren.bind(_this);
	    return _this;
	  }
	
	  _createClass(ControlBar, [{
	    key: 'getDefaultChildren',
	    value: function getDefaultChildren() {
	      return [_react2.default.createElement(_PlayToggle2.default, _extends({}, this.props, {
	        key: 'play-toggle',
	        order: 1
	      })), _react2.default.createElement(_VolumeMenuButton2.default, _extends({}, this.props, {
	        key: 'volume-menu-button',
	        order: 4
	      })), _react2.default.createElement(_CurrentTimeDisplay2.default, _extends({}, this.props, {
	        key: 'current-time-display',
	        order: 5.1
	      })), _react2.default.createElement(_TimeDivider2.default, _extends({}, this.props, {
	        key: 'time-divider',
	        order: 5.2
	      })), _react2.default.createElement(_DurationDisplay2.default, _extends({}, this.props, {
	        key: 'duration-display',
	        order: 5.3
	      })), _react2.default.createElement(_ProgressControl2.default, _extends({}, this.props, {
	        key: 'progress-control',
	        order: 6
	      })), _react2.default.createElement(_FullscreenToggle2.default, _extends({}, this.props, {
	        key: 'fullscreen-toggle',
	        order: 8
	      }))];
	    }
	  }, {
	    key: 'getFullChildren',
	    value: function getFullChildren() {
	      return [_react2.default.createElement(_PlayToggle2.default, _extends({}, this.props, {
	        key: 'play-toggle',
	        order: 1
	      })), _react2.default.createElement(_ReplayControl2.default, _extends({}, this.props, {
	        key: 'replay-control',
	        order: 2
	      })), _react2.default.createElement(_ForwardControl2.default, _extends({}, this.props, {
	        key: 'forward-control',
	        order: 3
	      })), _react2.default.createElement(_VolumeMenuButton2.default, _extends({}, this.props, {
	        key: 'volume-menu-button',
	        order: 4
	      })), _react2.default.createElement(_CurrentTimeDisplay2.default, _extends({}, this.props, {
	        key: 'current-time-display',
	        order: 5
	      })), _react2.default.createElement(_TimeDivider2.default, _extends({}, this.props, {
	        key: 'time-divider',
	        order: 6
	      })), _react2.default.createElement(_DurationDisplay2.default, _extends({}, this.props, {
	        key: 'duration-display',
	        order: 7
	      })), _react2.default.createElement(_ProgressControl2.default, _extends({}, this.props, {
	        key: 'progress-control',
	        order: 8
	      })), _react2.default.createElement(_RemainingTimeDisplay2.default, _extends({}, this.props, {
	        key: 'remaining-time-display',
	        order: 9
	      })), _react2.default.createElement(_PlaybackRateMenuButton2.default, _extends({}, this.props, {
	        rates: [1, 1.25, 1.5, 2],
	        key: 'playback-rate',
	        order: 10
	      })), _react2.default.createElement(_FullscreenToggle2.default, _extends({}, this.props, {
	        key: 'fullscreen-toggle',
	        order: 11
	      }))];
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren() {
	      var children = _react2.default.Children.toArray(this.props.children);
	      var defaultChildren = this.props.disableDefaultControls ? [] : this.getDefaultChildren();
	      return (0, _utils.mergeAndSortChildren)(defaultChildren, children, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          autoHide = _props.autoHide,
	          className = _props.className;
	
	      var children = this.getChildren();
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)('video-react-control-bar', {
	            'video-react-control-bar-auto-hide': autoHide,
	            className: className
	          })
	        },
	        children
	      );
	    }
	  }]);
	
	  return ControlBar;
	}(_react.Component);
	
	exports.default = ControlBar;
	
	
	ControlBar.propTypes = propTypes;
	ControlBar.defaultProps = defaultProps;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ForwardReplayControl = __webpack_require__(105);
	
	var _ForwardReplayControl2 = _interopRequireDefault(_ForwardReplayControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Pass mode into parent function
	exports.default = (0, _ForwardReplayControl2.default)('forward');

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _propTypes2.default.object,
	  className: _propTypes2.default.string,
	  seconds: _propTypes2.default.oneOf([5, 10, 30])
	};
	
	var defaultProps = {
	  seconds: 10
	};
	
	exports.default = function (mode) {
	  var ForwardReplayControl = function (_Component) {
	    _inherits(ForwardReplayControl, _Component);
	
	    function ForwardReplayControl(props, context) {
	      _classCallCheck(this, ForwardReplayControl);
	
	      var _this = _possibleConstructorReturn(this, (ForwardReplayControl.__proto__ || Object.getPrototypeOf(ForwardReplayControl)).call(this, props, context));
	
	      _this.handleClick = _this.handleClick.bind(_this);
	      return _this;
	    }
	
	    _createClass(ForwardReplayControl, [{
	      key: 'handleClick',
	      value: function handleClick() {
	        var _props = this.props,
	            actions = _props.actions,
	            seconds = _props.seconds;
	        // Depends mode to implement different actions
	
	        if (mode === 'forward') {
	          actions.forward(seconds);
	        } else {
	          actions.replay(seconds);
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        var _this2 = this,
	            _classNames;
	
	        var _props2 = this.props,
	            seconds = _props2.seconds,
	            className = _props2.className;
	
	        return _react2.default.createElement(
	          'button',
	          {
	            ref: function ref(c) {
	              _this2.button = c;
	            },
	            className: (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, 'video-react-icon-' + mode + '-' + seconds, true), _defineProperty(_classNames, 'video-react-' + mode + '-control', true), _classNames), 'video-react-control video-react-button video-react-icon'),
	            onClick: this.handleClick
	          },
	          _react2.default.createElement(
	            'span',
	            { className: 'video-react-control-text' },
	            mode + ' ' + seconds + ' seconds'
	          )
	        );
	      }
	    }]);
	
	    return ForwardReplayControl;
	  }(_react.Component);
	
	  ForwardReplayControl.propTypes = propTypes;
	  ForwardReplayControl.defaultProps = defaultProps;
	  return ForwardReplayControl;
	};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _propTypes2.default.object,
	  player: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	var FullscreenToggle = function (_Component) {
	  _inherits(FullscreenToggle, _Component);
	
	  function FullscreenToggle(props, context) {
	    _classCallCheck(this, FullscreenToggle);
	
	    var _this = _possibleConstructorReturn(this, (FullscreenToggle.__proto__ || Object.getPrototypeOf(FullscreenToggle)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(FullscreenToggle, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      actions.toggleFullscreen(player);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          player = _props2.player,
	          className = _props2.className;
	
	      return _react2.default.createElement(
	        'button',
	        {
	          className: (0, _classnames2.default)(className, {
	            'video-react-icon-fullscreen-exit': player.isFullscreen,
	            'video-react-icon-fullscreen': !player.isFullscreen
	          }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon'),
	          ref: function ref(c) {
	            _this2.button = c;
	          },
	          type: 'button',
	          tabIndex: '0',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          'Non-Fullscreen'
	        )
	      );
	    }
	  }]);
	
	  return FullscreenToggle;
	}(_react.Component);
	
	exports.default = FullscreenToggle;
	
	
	FullscreenToggle.propTypes = propTypes;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = LoadProgressBar;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  duration: _propTypes2.default.number,
	  buffered: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	// Shows load progress
	function LoadProgressBar(_ref) {
	  var buffered = _ref.buffered,
	      duration = _ref.duration,
	      className = _ref.className;
	
	  if (!buffered || !buffered.length) {
	    return null;
	  }
	  var bufferedEnd = buffered.end(buffered.length - 1);
	  var style = {};
	
	  if (bufferedEnd > duration) {
	    bufferedEnd = duration;
	  }
	
	  // get the percent width of a time compared to the total end
	  function percentify(time, end) {
	    var percent = time / end || 0; // no NaN
	    return (percent >= 1 ? 1 : percent) * 100 + '%';
	  }
	
	  // the width of the progress bar
	  style.width = percentify(bufferedEnd, duration);
	
	  var parts = [];
	
	  // add child elements to represent the individual buffered time ranges
	  for (var i = 0; i < buffered.length; i++) {
	    var start = buffered.start(i);
	    var end = buffered.end(i);
	    // set the percent based on the width of the progress bar (bufferedEnd)
	    var part = _react2.default.createElement('div', {
	      style: {
	        left: percentify(start, bufferedEnd),
	        width: percentify(end - start, bufferedEnd)
	      },
	      key: 'part-' + i
	    });
	    parts.push(part);
	  }
	
	  if (parts.length === 0) {
	    parts = null;
	  }
	
	  return _react2.default.createElement(
	    'div',
	    {
	      style: style,
	      className: (0, _classnames2.default)('video-react-load-progress', className)
	    },
	    _react2.default.createElement(
	      'span',
	      { className: 'video-react-control-text' },
	      _react2.default.createElement(
	        'span',
	        null,
	        'Loaded'
	      ),
	      ': 0%'
	    ),
	    parts
	  );
	}
	
	LoadProgressBar.propTypes = propTypes;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function MouseTimeDisplay(_ref) {
	  var duration = _ref.duration,
	      mouseTime = _ref.mouseTime,
	      className = _ref.className;
	
	  if (!mouseTime.time) {
	    return null;
	  }
	
	  var time = (0, _utils.formatTime)(mouseTime.time, duration);
	
	  return _react2.default.createElement('div', {
	    className: (0, _classnames2.default)('video-react-mouse-display', className),
	    style: {
	      left: mouseTime.position + 'px'
	    },
	    'data-current-time': time
	  });
	}
	
	MouseTimeDisplay.propTypes = {
	  duration: _propTypes2.default.number,
	  mouseTime: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	exports.default = MouseTimeDisplay;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = PlayProgressBar;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  currentTime: _propTypes2.default.number,
	  duration: _propTypes2.default.number,
	  percentage: _propTypes2.default.string,
	  className: _propTypes2.default.string
	};
	
	// Shows play progress
	function PlayProgressBar(_ref) {
	  var currentTime = _ref.currentTime,
	      duration = _ref.duration,
	      percentage = _ref.percentage,
	      className = _ref.className;
	
	  return _react2.default.createElement(
	    'div',
	    {
	      'data-current-time': (0, _utils.formatTime)(currentTime, duration),
	      className: (0, _classnames2.default)('video-react-play-progress video-react-slider-bar', className),
	      style: {
	        width: percentage
	      }
	    },
	    _react2.default.createElement(
	      'span',
	      { className: 'video-react-control-text' },
	      _react2.default.createElement(
	        'span',
	        null,
	        'Progress'
	      ),
	      ': ',
	      percentage
	    )
	  );
	}
	
	PlayProgressBar.propTypes = propTypes;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _propTypes2.default.object,
	  player: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	var PlayToggle = function (_Component) {
	  _inherits(PlayToggle, _Component);
	
	  function PlayToggle(props, context) {
	    _classCallCheck(this, PlayToggle);
	
	    var _this = _possibleConstructorReturn(this, (PlayToggle.__proto__ || Object.getPrototypeOf(PlayToggle)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(PlayToggle, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          actions = _props.actions,
	          player = _props.player;
	
	      if (player.paused) {
	        actions.play();
	      } else {
	        actions.pause();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          player = _props2.player,
	          className = _props2.className;
	
	      var controlText = player.paused ? 'Play' : 'Pause';
	
	      return _react2.default.createElement(
	        'button',
	        {
	          ref: function ref(c) {
	            _this2.button = c;
	          },
	          className: (0, _classnames2.default)(className, {
	            'video-react-play-control': true,
	            'video-react-control': true,
	            'video-react-button': true,
	            'video-react-paused': player.paused,
	            'video-react-playing': !player.paused
	          }),
	          tabIndex: '0',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'span',
	          { className: 'video-react-control-text' },
	          controlText
	        )
	      );
	    }
	  }]);
	
	  return PlayToggle;
	}(_react.Component);
	
	exports.default = PlayToggle;
	
	
	PlayToggle.propTypes = propTypes;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(94);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _dom = __webpack_require__(67);
	
	var Dom = _interopRequireWildcard(_dom);
	
	var _SeekBar = __webpack_require__(113);
	
	var _SeekBar2 = _interopRequireDefault(_SeekBar);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	var ProgressControl = function (_Component) {
	  _inherits(ProgressControl, _Component);
	
	  function ProgressControl(props, context) {
	    _classCallCheck(this, ProgressControl);
	
	    var _this = _possibleConstructorReturn(this, (ProgressControl.__proto__ || Object.getPrototypeOf(ProgressControl)).call(this, props, context));
	
	    _this.state = {
	      mouseTime: {
	        time: null,
	        position: 0
	      }
	    };
	
	    _this.handleMouseMoveThrottle = _this.handleMouseMove.bind(_this);
	    return _this;
	  }
	
	  _createClass(ProgressControl, [{
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      if (!event.pageX) {
	        return;
	      }
	      var duration = this.props.player.duration;
	
	      var node = (0, _reactDom.findDOMNode)(this.seekBar);
	      var newTime = Dom.getPointerPosition(node, event).x * duration;
	      var position = event.pageX - Dom.findElPosition(node).left;
	
	      this.setState({
	        mouseTime: {
	          time: newTime,
	          position: position
	        }
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var className = this.props.className;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          onMouseMove: this.handleMouseMoveThrottle,
	          className: (0, _classnames2.default)('video-react-progress-control video-react-control', className)
	        },
	        _react2.default.createElement(_SeekBar2.default, _extends({
	          mouseTime: this.state.mouseTime,
	          ref: function ref(c) {
	            _this2.seekBar = c;
	          }
	        }, this.props))
	      );
	    }
	  }]);
	
	  return ProgressControl;
	}(_react.Component);
	
	exports.default = ProgressControl;
	
	
	ProgressControl.propTypes = propTypes;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ForwardReplayControl = __webpack_require__(105);
	
	var _ForwardReplayControl2 = _interopRequireDefault(_ForwardReplayControl);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Pass mode into parent function
	exports.default = (0, _ForwardReplayControl2.default)('replay');

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Slider = __webpack_require__(65);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _PlayProgressBar = __webpack_require__(109);
	
	var _PlayProgressBar2 = _interopRequireDefault(_PlayProgressBar);
	
	var _LoadProgressBar = __webpack_require__(107);
	
	var _LoadProgressBar2 = _interopRequireDefault(_LoadProgressBar);
	
	var _MouseTimeDisplay = __webpack_require__(108);
	
	var _MouseTimeDisplay2 = _interopRequireDefault(_MouseTimeDisplay);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  mouseTime: _propTypes2.default.object,
	  actions: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	var SeekBar = function (_Component) {
	  _inherits(SeekBar, _Component);
	
	  function SeekBar(props, context) {
	    _classCallCheck(this, SeekBar);
	
	    var _this = _possibleConstructorReturn(this, (SeekBar.__proto__ || Object.getPrototypeOf(SeekBar)).call(this, props, context));
	
	    _this.getPercent = _this.getPercent.bind(_this);
	    _this.getNewTime = _this.getNewTime.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    return _this;
	  }
	
	  _createClass(SeekBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {}
	
	    /**
	     * Get percentage of video played
	     *
	     * @return {Number} Percentage played
	     * @method getPercent
	     */
	
	  }, {
	    key: 'getPercent',
	    value: function getPercent() {
	      var _props$player = this.props.player,
	          currentTime = _props$player.currentTime,
	          seekingTime = _props$player.seekingTime,
	          duration = _props$player.duration;
	
	      var time = seekingTime || currentTime;
	      var percent = time / duration;
	      return percent >= 1 ? 1 : percent;
	    }
	  }, {
	    key: 'getNewTime',
	    value: function getNewTime(event) {
	      var duration = this.props.player.duration;
	
	      var distance = this.slider.calculateDistance(event);
	      var newTime = distance * duration;
	
	      // Don't let video end while scrubbing.
	      return newTime === duration ? newTime - 0.1 : newTime;
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown() {
	      var _props = this.props,
	          actions = _props.actions,
	          player = _props.player;
	
	      this.videoWasPlaying = !player.paused;
	      actions.pause();
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp(event) {
	      var actions = this.props.actions;
	
	      var newTime = this.getNewTime(event);
	      // Set new time (tell video to seek to new time)
	      actions.seek(newTime);
	      if (this.videoWasPlaying) {
	        actions.play();
	      }
	      actions.handleEndSeeking(newTime);
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var actions = this.props.actions;
	
	      var newTime = this.getNewTime(event);
	      actions.handleSeekingTime(newTime);
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      var actions = this.props.actions;
	
	      actions.forward(5);
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      var actions = this.props.actions;
	
	      actions.replay(5);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props,
	          _props2$player = _props2.player,
	          currentTime = _props2$player.currentTime,
	          seekingTime = _props2$player.seekingTime,
	          duration = _props2$player.duration,
	          buffered = _props2$player.buffered,
	          mouseTime = _props2.mouseTime;
	
	      var time = seekingTime || currentTime;
	
	      return _react2.default.createElement(
	        _Slider2.default,
	        {
	          ref: function ref(input) {
	            _this2.slider = input;
	          },
	          label: 'video progress bar',
	          className: (0, _classnames2.default)('video-react-progress-holder', this.props.className),
	          valuenow: (this.getPercent() * 100).toFixed(2),
	          valuetext: (0, _utils.formatTime)(time, duration),
	          onMouseDown: this.handleMouseDown,
	          onMouseMove: this.handleMouseMove,
	          onMouseUp: this.handleMouseUp,
	          getPercent: this.getPercent,
	          stepForward: this.stepForward,
	          stepBack: this.stepBack
	        },
	        _react2.default.createElement(_LoadProgressBar2.default, {
	          buffered: buffered,
	          currentTime: time,
	          duration: duration
	        }),
	        _react2.default.createElement(_MouseTimeDisplay2.default, {
	          duration: duration,
	          mouseTime: mouseTime
	        }),
	        _react2.default.createElement(_PlayProgressBar2.default, {
	          currentTime: time,
	          duration: duration
	        })
	      );
	    }
	  }]);
	
	  return SeekBar;
	}(_react.Component);
	
	exports.default = SeekBar;
	
	
	SeekBar.propTypes = propTypes;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _PopupButton = __webpack_require__(161);
	
	var _PopupButton2 = _interopRequireDefault(_PopupButton);
	
	var _VolumeBar = __webpack_require__(162);
	
	var _VolumeBar2 = _interopRequireDefault(_VolumeBar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  actions: _propTypes2.default.object,
	  vertical: _propTypes2.default.bool,
	  className: _propTypes2.default.string,
	  alwaysShowVolume: _propTypes2.default.bool
	};
	
	var defaultProps = {
	  vertical: false
	};
	
	var VolumeMenuButton = function (_Component) {
	  _inherits(VolumeMenuButton, _Component);
	
	  function VolumeMenuButton(props, context) {
	    _classCallCheck(this, VolumeMenuButton);
	
	    var _this = _possibleConstructorReturn(this, (VolumeMenuButton.__proto__ || Object.getPrototypeOf(VolumeMenuButton)).call(this, props, context));
	
	    _this.state = {
	      active: false
	    };
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    return _this;
	  }
	
	  _createClass(VolumeMenuButton, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      actions.mute(!player.muted);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      this.setState({
	        active: true
	      });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      this.setState({
	        active: false
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          vertical = _props2.vertical,
	          player = _props2.player,
	          className = _props2.className;
	
	      var inline = !vertical;
	      var level = this.volumeLevel;
	      return _react2.default.createElement(
	        _PopupButton2.default,
	        {
	          className: (0, _classnames2.default)(className, {
	            'video-react-volume-menu-button-vertical': vertical,
	            'video-react-volume-menu-button-horizontal': !vertical,
	            'video-react-vol-muted': player.muted,
	            'video-react-vol-0': level === 0 && !player.muted,
	            'video-react-vol-1': level === 1,
	            'video-react-vol-2': level === 2,
	            'video-react-vol-3': level === 3,
	            'video-react-slider-active': this.props.alwaysShowVolume || this.state.active,
	            'video-react-lock-showing': this.props.alwaysShowVolume || this.state.active
	          }, 'video-react-volume-menu-button'),
	          onClick: this.handleClick,
	          inline: inline
	        },
	        _react2.default.createElement(_VolumeBar2.default, _extends({
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur
	        }, this.props))
	      );
	    }
	  }, {
	    key: 'volumeLevel',
	    get: function get() {
	      var _props$player = this.props.player,
	          volume = _props$player.volume,
	          muted = _props$player.muted;
	
	      var level = 3;
	      if (volume === 0 || muted) {
	        level = 0;
	      } else if (volume < 0.33) {
	        level = 1;
	      } else if (volume < 0.67) {
	        level = 2;
	      }
	      return level;
	    }
	  }]);
	
	  return VolumeMenuButton;
	}(_react.Component);
	
	VolumeMenuButton.propTypes = propTypes;
	VolumeMenuButton.defaultProps = defaultProps;
	exports.default = VolumeMenuButton;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	function CurrentTimeDisplay(_ref) {
	  var _ref$player = _ref.player,
	      currentTime = _ref$player.currentTime,
	      duration = _ref$player.duration,
	      className = _ref.className;
	
	  var formattedTime = (0, _utils.formatTime)(currentTime, duration);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: (0, _classnames2.default)('video-react-current-time video-react-time-control video-react-control', className)
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-current-time-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Current Time '
	      ),
	      formattedTime
	    )
	  );
	}
	
	CurrentTimeDisplay.propTypes = propTypes;
	
	exports.default = CurrentTimeDisplay;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	function DurationDisplay(_ref) {
	  var duration = _ref.player.duration,
	      className = _ref.className;
	
	  var formattedTime = (0, _utils.formatTime)(duration);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: (0, _classnames2.default)(className, 'video-react-duration video-react-time-control video-react-control')
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-duration-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Duration Time '
	      ),
	      formattedTime
	    )
	  );
	}
	
	DurationDisplay.propTypes = propTypes;
	
	exports.default = DurationDisplay;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  className: _propTypes2.default.string
	};
	
	function RemainingTimeDisplay(_ref) {
	  var _ref$player = _ref.player,
	      currentTime = _ref$player.currentTime,
	      duration = _ref$player.duration,
	      className = _ref.className;
	
	  var remainingTime = duration - currentTime;
	  var formattedTime = (0, _utils.formatTime)(remainingTime);
	  return _react2.default.createElement(
	    'div',
	    {
	      className: (0, _classnames2.default)('video-react-remaining-time video-react-time-control video-react-control', className)
	    },
	    _react2.default.createElement(
	      'div',
	      {
	        className: 'video-react-remaining-time-display',
	        'aria-live': 'off'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: 'video-react-control-text' },
	        'Remaining Time '
	      ),
	      '-',
	      formattedTime
	    )
	  );
	}
	
	RemainingTimeDisplay.propTypes = propTypes;
	
	exports.default = RemainingTimeDisplay;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = TimeDivider;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  separator: _propTypes2.default.string,
	  className: _propTypes2.default.string
	};
	
	function TimeDivider(_ref) {
	  var separator = _ref.separator,
	      className = _ref.className;
	
	  var separatorText = separator || '/';
	  return _react2.default.createElement(
	    'div',
	    {
	      className: (0, _classnames2.default)('video-react-time-control video-react-time-divider', className),
	      dir: 'ltr'
	    },
	    _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'span',
	        null,
	        separatorText
	      )
	    )
	  );
	}
	
	TimeDivider.propTypes = propTypes;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Fullscreen = function () {
	  function Fullscreen() {
	    _classCallCheck(this, Fullscreen);
	  }
	
	  _createClass(Fullscreen, [{
	    key: 'request',
	    value: function request(elm) {
	      if (elm.requestFullscreen) {
	        elm.requestFullscreen();
	      } else if (elm.webkitRequestFullscreen) {
	        elm.webkitRequestFullscreen();
	      } else if (elm.mozRequestFullScreen) {
	        elm.mozRequestFullScreen();
	      } else if (elm.msRequestFullscreen) {
	        elm.msRequestFullscreen();
	      }
	    }
	  }, {
	    key: 'exit',
	    value: function exit() {
	      if (document.exitFullscreen) {
	        document.exitFullscreen();
	      } else if (document.webkitExitFullscreen) {
	        document.webkitExitFullscreen();
	      } else if (document.mozCancelFullScreen) {
	        document.mozCancelFullScreen();
	      } else if (document.msExitFullscreen) {
	        document.msExitFullscreen();
	      }
	    }
	  }, {
	    key: 'addEventListener',
	    value: function addEventListener(handler) {
	      document.addEventListener('fullscreenchange', handler);
	      document.addEventListener('webkitfullscreenchange', handler);
	      document.addEventListener('mozfullscreenchange', handler);
	      document.addEventListener('MSFullscreenChange', handler);
	    }
	  }, {
	    key: 'removeEventListener',
	    value: function removeEventListener(handler) {
	      document.removeEventListener('fullscreenchange', handler);
	      document.removeEventListener('webkitfullscreenchange', handler);
	      document.removeEventListener('mozfullscreenchange', handler);
	      document.removeEventListener('MSFullscreenChange', handler);
	    }
	  }, {
	    key: 'isFullscreen',
	    get: function get() {
	      return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
	    }
	  }, {
	    key: 'enabled',
	    get: function get() {
	      return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
	    }
	  }]);
	
	  return Fullscreen;
	}();
	
	exports.default = new Fullscreen();

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(22);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(13)
	  , toIndex  = __webpack_require__(43)
	  , toLength = __webpack_require__(12);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(46);
	
	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(15)
	  , toObject  = __webpack_require__(13)
	  , IObject   = __webpack_require__(51)
	  , toLength  = __webpack_require__(12);
	
	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(15)
	  , isObject   = __webpack_require__(8)
	  , invoke     = __webpack_require__(57)
	  , arraySlice = [].slice
	  , factories  = {};
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};
	
	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(11).f
	  , create      = __webpack_require__(38)
	  , redefineAll = __webpack_require__(41)
	  , ctx         = __webpack_require__(30)
	  , anInstance  = __webpack_require__(36)
	  , defined     = __webpack_require__(23)
	  , forOf       = __webpack_require__(46)
	  , $iterDefine = __webpack_require__(78)
	  , step        = __webpack_require__(131)
	  , setSpecies  = __webpack_require__(42)
	  , DESCRIPTORS = __webpack_require__(10)
	  , fastKey     = __webpack_require__(33).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(50)
	  , from    = __webpack_require__(122);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(41)
	  , getWeak           = __webpack_require__(33).getWeak
	  , anObject          = __webpack_require__(2)
	  , isObject          = __webpack_require__(8)
	  , anInstance        = __webpack_require__(36)
	  , forOf             = __webpack_require__(46)
	  , createArrayMethod = __webpack_require__(26)
	  , $has              = __webpack_require__(14)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(10) && !__webpack_require__(6)(function(){
	  return Object.defineProperty(__webpack_require__(70)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(8)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(2);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ }),
/* 131 */
/***/ (function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ }),
/* 132 */
/***/ (function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(40)
	  , gOPS     = __webpack_require__(61)
	  , pIE      = __webpack_require__(52)
	  , toObject = __webpack_require__(13)
	  , IObject  = __webpack_require__(51)
	  , $assign  = Object.assign;
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(6)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(11)
	  , anObject = __webpack_require__(2)
	  , getKeys  = __webpack_require__(40);
	
	module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(19)
	  , gOPN      = __webpack_require__(39).f
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(14)
	  , toIObject    = __webpack_require__(19)
	  , arrayIndexOf = __webpack_require__(53)(false)
	  , IE_PROTO     = __webpack_require__(83)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(40)
	  , toIObject = __webpack_require__(19)
	  , isEnum    = __webpack_require__(52).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(39)
	  , gOPS     = __webpack_require__(61)
	  , anObject = __webpack_require__(2)
	  , Reflect  = __webpack_require__(4).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(4).parseFloat
	  , $trim       = __webpack_require__(49).trim;
	
	module.exports = 1 / $parseFloat(__webpack_require__(88) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(4).parseInt
	  , $trim     = __webpack_require__(49).trim
	  , ws        = __webpack_require__(88)
	  , hex       = /^[\-+]?0[xX]/;
	
	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(12)
	  , repeat   = __webpack_require__(87)
	  , defined  = __webpack_require__(23);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(9);

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(125);
	
	// 23.1 Map Objects
	module.exports = __webpack_require__(54)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(10) && /./g.flags != 'g')__webpack_require__(11).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(56)
	});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(125);
	
	// 23.2 Set Objects
	module.exports = __webpack_require__(54)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(26)(0)
	  , redefine     = __webpack_require__(17)
	  , meta         = __webpack_require__(33)
	  , assign       = __webpack_require__(133)
	  , weak         = __webpack_require__(127)
	  , isObject     = __webpack_require__(8)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;
	
	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};
	
	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};
	
	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(54)('WeakMap', wrapper, methods, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ }),
/* 148 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var validateFormat = function validateFormat(format) {};
	
	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(148);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (true) {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    };
	
	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }
	
	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }
	
	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }
	
	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}
	
	module.exports = warning;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;
	
	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};
	
	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	
	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;
	
	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }
	
	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }
	
	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;
	
	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }
	
	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;
	
	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }
	
	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }
	
	  function trailingEdge(time) {
	    timerId = undefined;
	
	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }
	
	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }
	
	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }
	
	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);
	
	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;
	
	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}
	
	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide `options` to indicate whether `func`
	 * should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;
	
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = throttle;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

	var root = __webpack_require__(358);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	
	module.exports = ReactPropTypesSecret;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _createStore = __webpack_require__(363);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _reducers = __webpack_require__(165);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	var _player = __webpack_require__(64);
	
	var playerActions = _interopRequireWildcard(_player);
	
	var _video = __webpack_require__(95);
	
	var videoActions = _interopRequireWildcard(_video);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Manager = function () {
	  function Manager() {
	    _classCallCheck(this, Manager);
	
	    this.store = (0, _createStore2.default)(_reducers2.default);
	
	    this.video = null;
	    this.rootElement = null;
	  }
	
	  _createClass(Manager, [{
	    key: 'getActions',
	    value: function getActions() {
	      var manager = this;
	      var dispatch = this.store.dispatch;
	
	      var actions = _extends({}, playerActions, videoActions);
	
	      function bindActionCreator(actionCreator) {
	        return function () {
	          // eslint-disable-next-line prefer-rest-params
	          var action = actionCreator.apply(manager, arguments);
	          if (typeof action !== 'undefined') {
	            dispatch(action);
	          }
	        };
	      }
	
	      return Object.keys(actions).filter(function (key) {
	        return typeof actions[key] === 'function';
	      }).reduce(function (boundActions, key) {
	        boundActions[key] = bindActionCreator(actions[key]);
	        return boundActions;
	      }, {});
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.store.getState();
	    }
	
	    // subscribe state change
	
	  }, {
	    key: 'subscribeToStateChange',
	    value: function subscribeToStateChange(listener, getState) {
	      if (!getState) {
	        getState = this.getState.bind(this);
	      }
	
	      var prevState = getState();
	
	      var handleChange = function handleChange() {
	        var state = getState();
	        if (state === prevState) {
	          return;
	        }
	        var prevStateCopy = prevState;
	        prevState = state;
	        listener(state, prevStateCopy);
	      };
	
	      return this.store.subscribe(handleChange);
	    }
	
	    // subscribe to operation state change
	
	  }, {
	    key: 'subscribeToOperationStateChange',
	    value: function subscribeToOperationStateChange(listener) {
	      var _this = this;
	
	      return this.subscribeToStateChange(listener, function () {
	        return _this.getState().operation;
	      });
	    }
	
	    // subscribe to player state change
	
	  }, {
	    key: 'subscribeToPlayerStateChange',
	    value: function subscribeToPlayerStateChange(listener) {
	      var _this2 = this;
	
	      return this.subscribeToStateChange(listener, function () {
	        return _this2.getState().player;
	      });
	    }
	  }]);
	
	  return Manager;
	}();
	
	exports.default = Manager;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _lodash = __webpack_require__(151);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Manager = __webpack_require__(154);
	
	var _Manager2 = _interopRequireDefault(_Manager);
	
	var _BigPlayButton = __webpack_require__(97);
	
	var _BigPlayButton2 = _interopRequireDefault(_BigPlayButton);
	
	var _LoadingSpinner = __webpack_require__(99);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _PosterImage = __webpack_require__(100);
	
	var _PosterImage2 = _interopRequireDefault(_PosterImage);
	
	var _Video = __webpack_require__(102);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	var _Bezel = __webpack_require__(96);
	
	var _Bezel2 = _interopRequireDefault(_Bezel);
	
	var _Shortcut = __webpack_require__(101);
	
	var _Shortcut2 = _interopRequireDefault(_Shortcut);
	
	var _ControlBar = __webpack_require__(103);
	
	var _ControlBar2 = _interopRequireDefault(_ControlBar);
	
	var _browser = __webpack_require__(168);
	
	var browser = _interopRequireWildcard(_browser);
	
	var _utils = __webpack_require__(25);
	
	var _fullscreen = __webpack_require__(119);
	
	var _fullscreen2 = _interopRequireDefault(_fullscreen);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  children: _propTypes2.default.any,
	
	  width: _propTypes2.default.number,
	  height: _propTypes2.default.number,
	  fluid: _propTypes2.default.bool,
	  muted: _propTypes2.default.bool,
	  playsInline: _propTypes2.default.bool,
	  aspectRatio: _propTypes2.default.string,
	  className: _propTypes2.default.string,
	
	  startTime: _propTypes2.default.number,
	  loop: _propTypes2.default.bool,
	  autoPlay: _propTypes2.default.bool,
	  src: _propTypes2.default.string,
	  poster: _propTypes2.default.string,
	  preload: _propTypes2.default.oneOf(['auto', 'metadata', 'none']),
	
	  onLoadStart: _propTypes2.default.func,
	  onWaiting: _propTypes2.default.func,
	  onCanPlay: _propTypes2.default.func,
	  onCanPlayThrough: _propTypes2.default.func,
	  onPlaying: _propTypes2.default.func,
	  onEnded: _propTypes2.default.func,
	  onSeeking: _propTypes2.default.func,
	  onSeeked: _propTypes2.default.func,
	  onPlay: _propTypes2.default.func,
	  onPause: _propTypes2.default.func,
	  onProgress: _propTypes2.default.func,
	  onDurationChange: _propTypes2.default.func,
	  onError: _propTypes2.default.func,
	  onSuspend: _propTypes2.default.func,
	  onAbort: _propTypes2.default.func,
	  onEmptied: _propTypes2.default.func,
	  onStalled: _propTypes2.default.func,
	  onLoadedMetadata: _propTypes2.default.func,
	  onLoadedData: _propTypes2.default.func,
	  onTimeUpdate: _propTypes2.default.func,
	  onRateChange: _propTypes2.default.func,
	  onVolumeChange: _propTypes2.default.func
	};
	
	var defaultProps = {
	  fluid: true,
	  muted: false,
	  playsInline: false,
	  aspectRatio: 'auto'
	};
	
	var Player = function (_Component) {
	  _inherits(Player, _Component);
	
	  function Player(props) {
	    _classCallCheck(this, Player);
	
	    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, props));
	
	    _this.controlsHideTimer = null;
	
	    _this.video = null; // the Video component
	    _this.manager = new _Manager2.default();
	    _this.actions = _this.manager.getActions();
	    _this.manager.subscribeToPlayerStateChange(_this.handleStateChange.bind(_this));
	
	    _this.getStyle = _this.getStyle.bind(_this);
	    _this.handleResize = _this.handleResize.bind(_this);
	    _this.getChildren = _this.getChildren.bind(_this);
	    _this.handleMouseMove = (0, _lodash2.default)(_this.handleMouseMove.bind(_this), 250);
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    _this.startControlsTimer = _this.startControlsTimer.bind(_this);
	    _this.handleFullScreenChange = _this.handleFullScreenChange.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    return _this;
	  }
	
	  _createClass(Player, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleResize();
	      window.addEventListener('resize', this.handleResize);
	
	      _fullscreen2.default.addEventListener(this.handleFullScreenChange);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      // Remove event listener
	      window.addEventListener('resize', this.handleResize);
	      _fullscreen2.default.removeEventListener(this.handleFullScreenChange);
	      if (this.controlsHideTimer) {
	        window.clearTimeout(this.controlsHideTimer);
	      }
	    }
	  }, {
	    key: 'getDefaultChildren',
	    value: function getDefaultChildren(props, fullProps) {
	      var _this2 = this;
	
	      return [_react2.default.createElement(_Video2.default, _extends({
	        ref: function ref(c) {
	          _this2.video = c;
	          _this2.manager.video = _this2.video;
	        },
	        key: 'video',
	        order: 0.0
	      }, fullProps)), _react2.default.createElement(_PosterImage2.default, _extends({
	        key: 'poster-image',
	        order: 1.0
	      }, props)), _react2.default.createElement(_LoadingSpinner2.default, _extends({
	        key: 'loading-spinner',
	        order: 2.0
	      }, props)), _react2.default.createElement(_Bezel2.default, _extends({
	        key: 'bezel',
	        order: 3.0
	      }, props)), _react2.default.createElement(_BigPlayButton2.default, _extends({
	        key: 'big-play-button',
	        order: 4.0
	      }, props)), _react2.default.createElement(_ControlBar2.default, _extends({
	        key: 'control-bar',
	        order: 5.0
	      }, props)), _react2.default.createElement(_Shortcut2.default, _extends({
	        key: 'shortcut',
	        order: 99.0
	      }, props))];
	    }
	  }, {
	    key: 'getChildren',
	    value: function getChildren(props) {
	      var propsWithoutChildren = _extends({}, props, {
	        children: null
	      });
	      var children = _react2.default.Children.toArray(this.props.children).filter(function (e) {
	        return !(0, _utils.isVideoChild)(e);
	      });
	      var defaultChildren = this.getDefaultChildren(propsWithoutChildren, props);
	      return (0, _utils.mergeAndSortChildren)(defaultChildren, children, propsWithoutChildren);
	    }
	  }, {
	    key: 'getStyle',
	    value: function getStyle() {
	      var fluid = this.props.fluid;
	
	      var _manager$getState = this.manager.getState(),
	          player = _manager$getState.player;
	
	      var style = {};
	      var width = void 0;
	      var height = void 0;
	      var aspectRatio = void 0;
	
	      // The aspect ratio is either used directly or to calculate width and height.
	      if (this.props.aspectRatio !== undefined && this.props.aspectRatio !== 'auto') {
	        // Use any aspectRatio that's been specifically set
	        aspectRatio = this.props.aspectRatio;
	      } else if (player.videoWidth) {
	        // Otherwise try to get the aspect ratio from the video metadata
	        aspectRatio = player.videoWidth + ':' + player.videoHeight;
	      } else {
	        // Or use a default. The video element's is 2:1, but 16:9 is more common.
	        aspectRatio = '16:9';
	      }
	
	      // Get the ratio as a decimal we can use to calculate dimensions
	      var ratioParts = aspectRatio.split(':');
	      var ratioMultiplier = ratioParts[1] / ratioParts[0];
	
	      if (this.props.width !== undefined) {
	        // Use any width that's been specifically set
	        width = this.props.width;
	      } else if (this.props.height !== undefined) {
	        // Or calulate the width from the aspect ratio if a height has been set
	        width = this.props.height / ratioMultiplier;
	      } else {
	        // Or use the video's metadata, or use the video el's default of 300
	        width = player.videoWidth || 400;
	      }
	
	      if (this.props.height !== undefined) {
	        // Use any height that's been specifically set
	        height = this.props.height;
	      } else {
	        // Otherwise calculate the height from the ratio and the width
	        height = width * ratioMultiplier;
	      }
	
	      if (fluid) {
	        style.paddingTop = ratioMultiplier * 100 + '%';
	      } else {
	        style.width = width + 'px';
	        style.height = height + 'px';
	      }
	
	      return style;
	    }
	
	    // get redux state
	    // { player, operation }
	
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.manager.getState();
	    }
	
	    // get playback rate
	
	  }, {
	    key: 'play',
	
	
	    // play the video
	    value: function play() {
	      this.video.play();
	    }
	
	    // pause the video
	
	  }, {
	    key: 'pause',
	    value: function pause() {
	      this.video.pause();
	    }
	
	    // Change the video source and re-load the video:
	
	  }, {
	    key: 'load',
	    value: function load() {
	      this.video.load();
	    }
	
	    // Add a new text track to the video
	
	  }, {
	    key: 'addTextTrack',
	    value: function addTextTrack() {
	      var _video;
	
	      (_video = this.video).addTextTrack.apply(_video, arguments);
	    }
	
	    // Check if your browser can play different types of video:
	
	  }, {
	    key: 'canPlayType',
	    value: function canPlayType() {
	      var _video2;
	
	      (_video2 = this.video).canPlayType.apply(_video2, arguments);
	    }
	
	    // seek video by time
	
	  }, {
	    key: 'seek',
	    value: function seek(time) {
	      this.video.seek(time);
	    }
	
	    // jump forward x seconds
	
	  }, {
	    key: 'forward',
	    value: function forward(seconds) {
	      this.video.forward(seconds);
	    }
	
	    // jump back x seconds
	
	  }, {
	    key: 'replay',
	    value: function replay(seconds) {
	      this.video.replay(seconds);
	    }
	
	    // enter or exist full screen
	
	  }, {
	    key: 'toggleFullscreen',
	    value: function toggleFullscreen() {
	      this.video.toggleFullscreen();
	    }
	
	    // subscribe to player state change
	
	  }, {
	    key: 'subscribeToStateChange',
	    value: function subscribeToStateChange(listener) {
	      this.manager.subscribeToPlayerStateChange(listener);
	    }
	
	    // player resize
	
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {}
	  }, {
	    key: 'handleFullScreenChange',
	    value: function handleFullScreenChange() {
	      this.actions.handleFullscreenChange(_fullscreen2.default.isFullscreen);
	    }
	  }, {
	    key: 'handleMouseDown',
	    value: function handleMouseDown() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown() {
	      this.startControlsTimer();
	    }
	  }, {
	    key: 'startControlsTimer',
	    value: function startControlsTimer() {
	      var _this3 = this;
	
	      this.actions.userActivate(true);
	      clearTimeout(this.controlsHideTimer);
	      this.controlsHideTimer = setTimeout(function () {
	        _this3.actions.userActivate(false);
	      }, 3000);
	    }
	  }, {
	    key: 'handleStateChange',
	    value: function handleStateChange(state, prevState) {
	      if (state.isFullscreen !== prevState.isFullscreen) {
	        this.handleResize();
	      }
	      this.forceUpdate(); // re-render
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      this.actions.activate(true);
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      this.actions.activate(false);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var fluid = this.props.fluid;
	
	      var _manager$getState2 = this.manager.getState(),
	          player = _manager$getState2.player;
	
	      var paused = player.paused,
	          hasStarted = player.hasStarted,
	          waiting = player.waiting,
	          seeking = player.seeking,
	          isFullscreen = player.isFullscreen,
	          userActivity = player.userActivity;
	
	      var props = _extends({}, this.props, {
	        player: player,
	        actions: this.actions,
	        manager: this.manager,
	        store: this.manager.store,
	        video: this.video ? this.video.video : null
	      });
	      var children = this.getChildren(props);
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-controls-enabled': true,
	            'video-react-has-started': hasStarted,
	            'video-react-paused': paused,
	            'video-react-playing': !paused,
	            'video-react-waiting': waiting,
	            'video-react-seeking': seeking,
	            'video-react-fluid': fluid,
	            'video-react-fullscreen': isFullscreen,
	            'video-react-user-inactive': !userActivity,
	            'video-react-user-active': userActivity,
	            'video-react-workinghover': !browser.IS_IOS
	          }, 'video-react', this.props.className),
	          style: this.getStyle(),
	          ref: function ref(c) {
	            _this4.manager.rootElement = c;
	          },
	          onTouchStart: this.handleMouseDown,
	          onMouseDown: this.handleMouseDown,
	          onMouseMove: this.handleMouseMove,
	          onKeyDown: this.handleKeyDown,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          tabIndex: '-1'
	        },
	        children
	      );
	    }
	  }, {
	    key: 'playbackRate',
	    get: function get() {
	      return this.video.playbackRate;
	    }
	
	    // set playback rate
	    // speed of video
	    ,
	    set: function set(rate) {
	      this.video.playbackRate = rate;
	    }
	  }, {
	    key: 'muted',
	    get: function get() {
	      return this.video.muted;
	    },
	    set: function set(val) {
	      this.video.muted = val;
	    }
	  }, {
	    key: 'volume',
	    get: function get() {
	      return this.video.volume;
	    },
	    set: function set(val) {
	      this.video.volume = val;
	    }
	
	    // video width
	
	  }, {
	    key: 'videoWidth',
	    get: function get() {
	      return this.video.videoWidth;
	    }
	
	    // video height
	
	  }, {
	    key: 'videoHeight',
	    get: function get() {
	      return this.video.videoHeight;
	    }
	  }]);
	
	  return Player;
	}(_react.Component);
	
	exports.default = Player;
	
	
	Player.propTypes = propTypes;
	Player.defaultProps = defaultProps;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PlaybackRateMenuButton = __webpack_require__(66);
	
	var _PlaybackRateMenuButton2 = _interopRequireDefault(_PlaybackRateMenuButton);
	
	var _utils = __webpack_require__(25);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PlaybackRate = function (_Component) {
	  _inherits(PlaybackRate, _Component);
	
	  function PlaybackRate(props, context) {
	    _classCallCheck(this, PlaybackRate);
	
	    var _this = _possibleConstructorReturn(this, (PlaybackRate.__proto__ || Object.getPrototypeOf(PlaybackRate)).call(this, props, context));
	
	    (0, _utils.deprecatedWarning)('PlaybackRate', 'PlaybackRateMenuButton');
	    return _this;
	  }
	
	  _createClass(PlaybackRate, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_PlaybackRateMenuButton2.default, this.props);
	    }
	  }]);
	
	  return PlaybackRate;
	}(_react.Component);
	
	exports.default = PlaybackRate;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  children: _propTypes2.default.any
	};
	
	var Menu = function (_Component) {
	  _inherits(Menu, _Component);
	
	  function Menu(props, context) {
	    _classCallCheck(this, Menu);
	
	    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Menu, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.preventDefault();
	      // event.stopPropagation();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'video-react-menu video-react-lock-showing',
	          role: 'presentation',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'ul',
	          { className: 'video-react-menu-content' },
	          this.props.children
	        )
	      );
	    }
	  }]);
	
	  return Menu;
	}(_react.Component);
	
	exports.default = Menu;
	
	
	Menu.propTypes = propTypes;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Menu = __webpack_require__(157);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _MenuItem = __webpack_require__(159);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _ClickableComponent = __webpack_require__(98);
	
	var _ClickableComponent2 = _interopRequireDefault(_ClickableComponent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  inline: _propTypes2.default.bool,
	  items: _propTypes2.default.array,
	  className: _propTypes2.default.string,
	  onSelectItem: _propTypes2.default.func,
	  children: _propTypes2.default.any,
	  selectedIndex: _propTypes2.default.number
	};
	
	var MenuButton = function (_Component) {
	  _inherits(MenuButton, _Component);
	
	  function MenuButton(props, context) {
	    _classCallCheck(this, MenuButton);
	
	    var _this = _possibleConstructorReturn(this, (MenuButton.__proto__ || Object.getPrototypeOf(MenuButton)).call(this, props, context));
	
	    _this.state = {
	      active: false,
	      activateIndex: props.selectedIndex || 0
	    };
	
	    _this.commitSelection = _this.commitSelection.bind(_this);
	    _this.activateMenuItem = _this.activateMenuItem.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.renderMenu = _this.renderMenu.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleUpArrow = _this.handleUpArrow.bind(_this);
	    _this.handleDownArrow = _this.handleDownArrow.bind(_this);
	    _this.handleEscape = _this.handleEscape.bind(_this);
	    _this.handleReturn = _this.handleReturn.bind(_this);
	    _this.handleTab = _this.handleTab.bind(_this);
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.handleSelectItem = _this.handleSelectItem.bind(_this);
	    _this.handleIndexChange = _this.handleIndexChange.bind(_this);
	    return _this;
	  }
	
	  // componentDidUpdate(prevProps) {
	  // }
	
	  _createClass(MenuButton, [{
	    key: 'commitSelection',
	    value: function commitSelection(index) {
	      this.setState({
	        activateIndex: index,
	        active: false
	      });
	      this.handleIndexChange(index);
	    }
	  }, {
	    key: 'activateMenuItem',
	    value: function activateMenuItem(index) {
	      this.setState({
	        activateIndex: index
	      });
	      this.handleIndexChange(index);
	    }
	  }, {
	    key: 'handleIndexChange',
	    value: function handleIndexChange(index) {
	      var onSelectItem = this.props.onSelectItem;
	
	      onSelectItem(index);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      this.setState({
	        active: !this.state.active
	      });
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus() {
	      document.addEventListener('keydown', this.handleKeyPress);
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur() {
	      this.setState({
	        active: false
	      });
	      document.removeEventListener('keydown', this.handleKeyPress);
	    }
	  }, {
	    key: 'handleUpArrow',
	    value: function handleUpArrow(e) {
	      var items = this.props.items;
	
	      if (this.state.active) {
	        e.preventDefault();
	        var newIndex = this.state.activateIndex - 1;
	        if (newIndex < 0) {
	          newIndex = items.length ? items.length - 1 : 0;
	        }
	        this.activateMenuItem(newIndex);
	      }
	    }
	  }, {
	    key: 'handleDownArrow',
	    value: function handleDownArrow(e) {
	      var items = this.props.items;
	
	      if (this.state.active) {
	        e.preventDefault();
	        var newIndex = this.state.activateIndex + 1;
	        if (newIndex >= items.length) {
	          newIndex = 0;
	        }
	        this.activateMenuItem(newIndex);
	      }
	    }
	  }, {
	    key: 'handleTab',
	    value: function handleTab(e) {
	      if (this.state.active) {
	        e.preventDefault();
	        this.commitSelection(this.state.activateIndex);
	      }
	    }
	  }, {
	    key: 'handleReturn',
	    value: function handleReturn(e) {
	      e.preventDefault();
	      if (this.state.active) {
	        this.commitSelection(this.state.activateIndex);
	      } else {
	        this.setState({
	          active: true
	        });
	      }
	    }
	  }, {
	    key: 'handleEscape',
	    value: function handleEscape() {
	      this.setState({
	        active: false,
	        activateIndex: 0
	      });
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(event) {
	      // Escape (27) key
	      if (event.which === 27) {
	        this.handleEscape(event);
	      } else if (event.which === 9) {
	        // Tab (9) key
	        this.handleTab(event);
	      } else if (event.which === 13) {
	        // Enter (13) key
	        this.handleReturn(event);
	      } else if (event.which === 38) {
	        // Up (38) key
	        this.handleUpArrow(event);
	      } else if (event.which === 40) {
	        // Down (40) key press
	        this.handleDownArrow(event);
	      }
	    }
	  }, {
	    key: 'handleSelectItem',
	    value: function handleSelectItem(i) {
	      this.commitSelection(i);
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      var _this2 = this;
	
	      if (!this.state.active) {
	        return null;
	      }
	
	      var items = this.props.items;
	
	      return _react2.default.createElement(
	        _Menu2.default,
	        null,
	        items.map(function (item, i) {
	          return _react2.default.createElement(_MenuItem2.default, {
	            item: item,
	            index: i,
	            onSelectItem: _this2.handleSelectItem,
	            activateIndex: _this2.state.activateIndex,
	            key: 'item-' + i++
	          });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var _props = this.props,
	          inline = _props.inline,
	          className = _props.className;
	
	
	      return _react2.default.createElement(
	        _ClickableComponent2.default,
	        {
	          className: (0, _classnames2.default)(className, {
	            'video-react-menu-button-inline': !!inline,
	            'video-react-menu-button-popup': !inline,
	            'video-react-menu-button-active': this.state.active
	          }, 'video-react-control video-react-button video-react-menu-button'),
	          role: 'presentation',
	          tabIndex: '0',
	          ref: function ref(c) {
	            _this3.menuButton = c;
	          },
	          onClick: this.handleClick,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur
	        },
	        this.props.children,
	        this.renderMenu()
	      );
	    }
	  }]);
	
	  return MenuButton;
	}(_react.Component);
	
	exports.default = MenuButton;
	
	
	MenuButton.propTypes = propTypes;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  item: _propTypes2.default.object,
	  index: _propTypes2.default.number,
	  activateIndex: _propTypes2.default.number,
	  onSelectItem: _propTypes2.default.func
	};
	
	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);
	
	  function MenuItem(props, context) {
	    _classCallCheck(this, MenuItem);
	
	    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(MenuItem, [{
	    key: 'handleClick',
	    value: function handleClick() {
	      var _props = this.props,
	          index = _props.index,
	          onSelectItem = _props.onSelectItem;
	
	      onSelectItem(index);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          item = _props2.item,
	          index = _props2.index,
	          activateIndex = _props2.activateIndex;
	
	      return _react2.default.createElement(
	        'li',
	        {
	          className: (0, _classnames2.default)({
	            'video-react-menu-item': true,
	            'video-react-selected': index === activateIndex
	          }),
	          onClick: this.handleClick
	        },
	        item.label,
	        _react2.default.createElement('span', { className: 'video-react-control-text' })
	      );
	    }
	  }]);
	
	  return MenuItem;
	}(_react.Component);
	
	exports.default = MenuItem;
	
	
	MenuItem.propTypes = propTypes;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  player: _propTypes2.default.object,
	  children: _propTypes2.default.any
	};
	
	var Popup = function (_Component) {
	  _inherits(Popup, _Component);
	
	  function Popup(props, context) {
	    _classCallCheck(this, Popup);
	
	    var _this = _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(Popup, [{
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.preventDefault();
	      // event.stopPropagation();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'video-react-menu',
	          onClick: this.handleClick
	        },
	        _react2.default.createElement(
	          'div',
	          { className: 'video-react-menu-content' },
	          children
	        )
	      );
	    }
	  }]);
	
	  return Popup;
	}(_react.Component);
	
	exports.default = Popup;
	
	
	Popup.propTypes = propTypes;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = PopupButton;
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _ClickableComponent = __webpack_require__(98);
	
	var _ClickableComponent2 = _interopRequireDefault(_ClickableComponent);
	
	var _Popup = __webpack_require__(160);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  inline: _propTypes2.default.bool,
	  onClick: _propTypes2.default.func.isRequired,
	  onFocus: _propTypes2.default.func,
	  onBlur: _propTypes2.default.func,
	  className: _propTypes2.default.string
	};
	
	var defaultProps = {
	  inline: true
	};
	
	function PopupButton(props) {
	  var inline = props.inline,
	      className = props.className;
	
	  var ps = _extends({}, props);
	  delete ps.children;
	  delete ps.inline;
	  delete ps.className;
	  return _react2.default.createElement(
	    _ClickableComponent2.default,
	    _extends({
	      className: (0, _classnames2.default)(className, {
	        'video-react-menu-button-inline': !!inline,
	        'video-react-menu-button-popup': !inline
	      }, 'video-react-control video-react-button video-react-menu-button')
	    }, ps),
	    _react2.default.createElement(_Popup2.default, props)
	  );
	}
	
	PopupButton.propTypes = propTypes;
	PopupButton.defaultProps = defaultProps;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Slider = __webpack_require__(65);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _VolumeLevel = __webpack_require__(163);
	
	var _VolumeLevel2 = _interopRequireDefault(_VolumeLevel);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var propTypes = {
	  actions: _propTypes2.default.object,
	  player: _propTypes2.default.object,
	  className: _propTypes2.default.string,
	  onFocus: _propTypes2.default.func,
	  onBlur: _propTypes2.default.func
	};
	
	var VolumeBar = function (_Component) {
	  _inherits(VolumeBar, _Component);
	
	  function VolumeBar(props, context) {
	    _classCallCheck(this, VolumeBar);
	
	    var _this = _possibleConstructorReturn(this, (VolumeBar.__proto__ || Object.getPrototypeOf(VolumeBar)).call(this, props, context));
	
	    _this.state = {
	      percentage: '0%'
	    };
	
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handlePercentageChange = _this.handlePercentageChange.bind(_this);
	    _this.checkMuted = _this.checkMuted.bind(_this);
	    _this.getPercent = _this.getPercent.bind(_this);
	    _this.stepForward = _this.stepForward.bind(_this);
	    _this.stepBack = _this.stepBack.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  _createClass(VolumeBar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'getPercent',
	    value: function getPercent() {
	      var player = this.props.player;
	
	      if (player.muted) {
	        return 0;
	      }
	      return player.volume;
	    }
	  }, {
	    key: 'checkMuted',
	    value: function checkMuted() {
	      var _props = this.props,
	          player = _props.player,
	          actions = _props.actions;
	
	      if (player.muted) {
	        actions.mute(false);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(event) {
	      var actions = this.props.actions;
	
	      this.checkMuted();
	      var distance = this.slider.calculateDistance(event);
	      actions.changeVolume(distance);
	    }
	  }, {
	    key: 'stepForward',
	    value: function stepForward() {
	      var _props2 = this.props,
	          player = _props2.player,
	          actions = _props2.actions;
	
	      this.checkMuted();
	      actions.changeVolume(player.volume + 0.1);
	    }
	  }, {
	    key: 'stepBack',
	    value: function stepBack() {
	      var _props3 = this.props,
	          player = _props3.player,
	          actions = _props3.actions;
	
	      this.checkMuted();
	      actions.changeVolume(player.volume - 0.1);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(e) {
	      if (this.props.onFocus) {
	        this.props.onFocus(e);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      if (this.props.onBlur) {
	        this.props.onBlur(e);
	      }
	    }
	  }, {
	    key: 'handlePercentageChange',
	    value: function handlePercentageChange(percentage) {
	      if (percentage !== this.state.percentage) {
	        this.setState({
	          percentage: percentage
	        });
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      event.stopPropagation();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props4 = this.props,
	          player = _props4.player,
	          className = _props4.className;
	
	
	      var volume = (player.volume * 100).toFixed(2);
	      return _react2.default.createElement(
	        _Slider2.default,
	        _extends({
	          ref: function ref(c) {
	            _this2.slider = c;
	          },
	          label: 'volume level',
	          valuenow: volume,
	          valuetext: volume + '%',
	          onMouseMove: this.handleMouseMove,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onClick: this.handleClick,
	          sliderActive: this.handleFocus,
	          sliderInactive: this.handleBlur,
	          getPercent: this.getPercent,
	          onPercentageChange: this.handlePercentageChange,
	          stepForward: this.stepForward,
	          stepBack: this.stepBack,
	          className: (0, _classnames2.default)(className, 'video-react-volume-bar video-react-slider-bar')
	        }, this.props),
	        _react2.default.createElement(_VolumeLevel2.default, this.props)
	      );
	    }
	  }]);
	
	  return VolumeBar;
	}(_react.Component);
	
	VolumeBar.propTypes = propTypes;
	
	exports.default = VolumeBar;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(7);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  percentage: _propTypes2.default.string,
	  vertical: _propTypes2.default.bool,
	  className: _propTypes2.default.string
	};
	
	var defaultProps = {
	  percentage: '100%',
	  vertical: false
	};
	
	function VolumeLevel(_ref) {
	  var percentage = _ref.percentage,
	      vertical = _ref.vertical,
	      className = _ref.className;
	
	  var style = {};
	  if (vertical) {
	    style.height = percentage;
	  } else {
	    style.width = percentage;
	  }
	
	  return _react2.default.createElement(
	    'div',
	    {
	      className: (0, _classnames2.default)(className, 'video-react-volume-level'),
	      style: style
	    },
	    _react2.default.createElement('span', { className: 'video-react-control-text' })
	  );
	}
	
	VolumeLevel.propTypes = propTypes;
	VolumeLevel.defaultProps = defaultProps;
	exports.default = VolumeLevel;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PlaybackRate = exports.PlaybackRateMenuButton = exports.VolumeMenuButton = exports.TimeDivider = exports.DurationDisplay = exports.CurrentTimeDisplay = exports.RemainingTimeDisplay = exports.MouseTimeDisplay = exports.LoadProgressBar = exports.PlayProgressBar = exports.Slider = exports.SeekBar = exports.ProgressControl = exports.FullscreenToggle = exports.ReplayControl = exports.ForwardControl = exports.PlayToggle = exports.ControlBar = exports.Shortcut = exports.Bezel = exports.PosterImage = exports.LoadingSpinner = exports.BigPlayButton = exports.Video = exports.Player = undefined;
	
	var _Player = __webpack_require__(155);
	
	var _Player2 = _interopRequireDefault(_Player);
	
	var _Video = __webpack_require__(102);
	
	var _Video2 = _interopRequireDefault(_Video);
	
	var _BigPlayButton = __webpack_require__(97);
	
	var _BigPlayButton2 = _interopRequireDefault(_BigPlayButton);
	
	var _LoadingSpinner = __webpack_require__(99);
	
	var _LoadingSpinner2 = _interopRequireDefault(_LoadingSpinner);
	
	var _PosterImage = __webpack_require__(100);
	
	var _PosterImage2 = _interopRequireDefault(_PosterImage);
	
	var _Slider = __webpack_require__(65);
	
	var _Slider2 = _interopRequireDefault(_Slider);
	
	var _Bezel = __webpack_require__(96);
	
	var _Bezel2 = _interopRequireDefault(_Bezel);
	
	var _Shortcut = __webpack_require__(101);
	
	var _Shortcut2 = _interopRequireDefault(_Shortcut);
	
	var _ControlBar = __webpack_require__(103);
	
	var _ControlBar2 = _interopRequireDefault(_ControlBar);
	
	var _PlayToggle = __webpack_require__(110);
	
	var _PlayToggle2 = _interopRequireDefault(_PlayToggle);
	
	var _ForwardControl = __webpack_require__(104);
	
	var _ForwardControl2 = _interopRequireDefault(_ForwardControl);
	
	var _ReplayControl = __webpack_require__(112);
	
	var _ReplayControl2 = _interopRequireDefault(_ReplayControl);
	
	var _FullscreenToggle = __webpack_require__(106);
	
	var _FullscreenToggle2 = _interopRequireDefault(_FullscreenToggle);
	
	var _ProgressControl = __webpack_require__(111);
	
	var _ProgressControl2 = _interopRequireDefault(_ProgressControl);
	
	var _SeekBar = __webpack_require__(113);
	
	var _SeekBar2 = _interopRequireDefault(_SeekBar);
	
	var _PlayProgressBar = __webpack_require__(109);
	
	var _PlayProgressBar2 = _interopRequireDefault(_PlayProgressBar);
	
	var _LoadProgressBar = __webpack_require__(107);
	
	var _LoadProgressBar2 = _interopRequireDefault(_LoadProgressBar);
	
	var _MouseTimeDisplay = __webpack_require__(108);
	
	var _MouseTimeDisplay2 = _interopRequireDefault(_MouseTimeDisplay);
	
	var _VolumeMenuButton = __webpack_require__(114);
	
	var _VolumeMenuButton2 = _interopRequireDefault(_VolumeMenuButton);
	
	var _PlaybackRateMenuButton = __webpack_require__(66);
	
	var _PlaybackRateMenuButton2 = _interopRequireDefault(_PlaybackRateMenuButton);
	
	var _PlaybackRate = __webpack_require__(156);
	
	var _PlaybackRate2 = _interopRequireDefault(_PlaybackRate);
	
	var _RemainingTimeDisplay = __webpack_require__(117);
	
	var _RemainingTimeDisplay2 = _interopRequireDefault(_RemainingTimeDisplay);
	
	var _CurrentTimeDisplay = __webpack_require__(115);
	
	var _CurrentTimeDisplay2 = _interopRequireDefault(_CurrentTimeDisplay);
	
	var _DurationDisplay = __webpack_require__(116);
	
	var _DurationDisplay2 = _interopRequireDefault(_DurationDisplay);
	
	var _TimeDivider = __webpack_require__(118);
	
	var _TimeDivider2 = _interopRequireDefault(_TimeDivider);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Player = _Player2.default;
	exports.Video = _Video2.default;
	exports.BigPlayButton = _BigPlayButton2.default;
	exports.LoadingSpinner = _LoadingSpinner2.default;
	exports.PosterImage = _PosterImage2.default;
	exports.Bezel = _Bezel2.default;
	exports.Shortcut = _Shortcut2.default;
	exports.ControlBar = _ControlBar2.default;
	exports.PlayToggle = _PlayToggle2.default;
	exports.ForwardControl = _ForwardControl2.default;
	exports.ReplayControl = _ReplayControl2.default;
	exports.FullscreenToggle = _FullscreenToggle2.default;
	exports.ProgressControl = _ProgressControl2.default;
	exports.SeekBar = _SeekBar2.default;
	exports.Slider = _Slider2.default;
	exports.PlayProgressBar = _PlayProgressBar2.default;
	exports.LoadProgressBar = _LoadProgressBar2.default;
	exports.MouseTimeDisplay = _MouseTimeDisplay2.default;
	exports.RemainingTimeDisplay = _RemainingTimeDisplay2.default;
	exports.CurrentTimeDisplay = _CurrentTimeDisplay2.default;
	exports.DurationDisplay = _DurationDisplay2.default;
	exports.TimeDivider = _TimeDivider2.default;
	exports.VolumeMenuButton = _VolumeMenuButton2.default;
	exports.PlaybackRateMenuButton = _PlaybackRateMenuButton2.default;
	exports.PlaybackRate = _PlaybackRate2.default; // import '../styles/scss/video-react.scss';

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments[1];
	
	  return {
	    player: (0, _player2.default)(state.player, action),
	    operation: (0, _operation2.default)(state.operation, action)
	  };
	};
	
	var _player = __webpack_require__(167);
	
	var _player2 = _interopRequireDefault(_player);
	
	var _operation = __webpack_require__(166);
	
	var _operation2 = _interopRequireDefault(_operation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = operation;
	
	var _player = __webpack_require__(64);
	
	var initialState = {
	  count: 0,
	  operation: {
	    action: '',
	    source: ''
	  }
	};
	
	function operation() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _player.OPERATE:
	      return _extends({}, state, {
	        count: state.count + 1,
	        operation: _extends({}, state.operation, action.operation)
	      });
	    default:
	      return state;
	  }
	}

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = video;
	
	var _video = __webpack_require__(95);
	
	var _player = __webpack_require__(64);
	
	var initialState = {
	  currentSrc: null,
	  duration: 0,
	  currentTime: 0,
	  seekingTime: 0,
	  buffered: null,
	  waiting: true,
	  seeking: false,
	  paused: true,
	  autoPaused: false,
	  ended: false,
	  playbackRate: 1,
	  muted: false,
	  volume: 1,
	  readyState: 0,
	  networkState: 0,
	  videoWidth: 0,
	  videoHeight: 0,
	  hasStarted: false,
	  userActivity: true,
	  isActive: false,
	  isFullscreen: false
	};
	
	function video() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case _player.USER_ACTIVATE:
	      return _extends({}, state, {
	        userActivity: action.activity
	      });
	    case _player.PLAYER_ACTIVATE:
	      return _extends({}, state, {
	        isActive: action.activity
	      });
	    case _player.FULLSCREEN_CHANGE:
	      return _extends({}, state, {
	        isFullscreen: !!action.isFullscreen
	      });
	    case _video.SEEKING_TIME:
	      return _extends({}, state, {
	        seekingTime: action.time
	      });
	    case _video.END_SEEKING:
	      return _extends({}, state, {
	        seekingTime: 0
	      });
	    case _video.LOAD_START:
	      return _extends({}, state, action.videoProps, {
	        hasStarted: false,
	        ended: false
	      });
	    case _video.CAN_PLAY:
	      return _extends({}, state, action.videoProps, {
	        waiting: false
	      });
	    case _video.WAITING:
	      return _extends({}, state, action.videoProps, {
	        waiting: true
	      });
	    case _video.CAN_PLAY_THROUGH:
	    case _video.PLAYING:
	      return _extends({}, state, action.videoProps, {
	        waiting: false
	      });
	    case _video.PLAY:
	      return _extends({}, state, action.videoProps, {
	        ended: false,
	        paused: false,
	        autoPaused: false,
	        waiting: false,
	        hasStarted: true
	      });
	    case _video.PAUSE:
	      return _extends({}, state, action.videoProps, {
	        paused: true
	      });
	    case _video.END:
	      return _extends({}, state, action.videoProps, {
	        ended: true
	      });
	    case _video.SEEKING:
	      return _extends({}, state, action.videoProps, {
	        seeking: true
	      });
	    case _video.SEEKED:
	      return _extends({}, state, action.videoProps, {
	        seeking: false
	      });
	    case _video.DURATION_CHANGE:
	    case _video.TIME_UPDATE:
	    case _video.VOLUME_CHANGE:
	    case _video.PROGRESS_CHANGE:
	    case _video.RATE_CHANGE:
	    case _video.SUSPEND:
	    case _video.ABORT:
	    case _video.EMPTIED:
	    case _video.STALLED:
	    case _video.LOADED_META_DATA:
	    case _video.LOADED_DATA:
	    case _video.RESIZE:
	    case _video.ERROR:
	      return _extends({}, state, action.videoProps);
	    default:
	      return state;
	  }
	}

/***/ }),
/* 168 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var USER_AGENT = typeof window !== 'undefined' && window.navigator ? window.navigator.userAgent : '';
	// const webkitVersionMap = (/AppleWebKit\/([\d.]+)/i).exec(USER_AGENT);
	// const appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;
	
	/*
	 * Device is an iPhone
	 *
	 * @type {Boolean}
	 * @constant
	 * @private
	 */
	var IS_IPAD = exports.IS_IPAD = /iPad/i.test(USER_AGENT);
	
	// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
	// to identify iPhones, we need to exclude iPads.
	// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
	var IS_IPHONE = exports.IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
	var IS_IPOD = exports.IS_IPOD = /iPod/i.test(USER_AGENT);
	var IS_IOS = exports.IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	__webpack_require__(350);
	
	__webpack_require__(364);
	
	__webpack_require__(170);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;
	
	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}
	
	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);
	
	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(179);
	module.exports = __webpack_require__(29).RegExp.escape;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(8)
	  , isArray  = __webpack_require__(76)
	  , SPECIES  = __webpack_require__(9)('species');
	
	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(171);
	
	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(2)
	  , toPrimitive = __webpack_require__(28)
	  , NUMBER      = 'number';
	
	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(40)
	  , gOPS    = __webpack_require__(61)
	  , pIE     = __webpack_require__(52);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(40)
	  , toIObject = __webpack_require__(19);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(177)
	  , invoke    = __webpack_require__(57)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);

/***/ }),
/* 178 */
/***/ (function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(1)
	  , $re     = __webpack_require__(178)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(121)});
	
	__webpack_require__(45)('copyWithin');

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $every  = __webpack_require__(26)(4);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Array', {fill: __webpack_require__(68)});
	
	__webpack_require__(45)('fill');

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $filter = __webpack_require__(26)(2);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(1)
	  , $find   = __webpack_require__(26)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(45)(KEY);

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(1)
	  , $find   = __webpack_require__(26)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(45)(KEY);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(1)
	  , $forEach = __webpack_require__(26)(0)
	  , STRICT   = __webpack_require__(24)([].forEach, true);
	
	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(30)
	  , $export        = __webpack_require__(1)
	  , toObject       = __webpack_require__(13)
	  , call           = __webpack_require__(130)
	  , isArrayIter    = __webpack_require__(75)
	  , toLength       = __webpack_require__(12)
	  , createProperty = __webpack_require__(69)
	  , getIterFn      = __webpack_require__(92);
	
	$export($export.S + $export.F * !__webpack_require__(59)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(1)
	  , $indexOf      = __webpack_require__(53)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(24)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Array', {isArray: __webpack_require__(76)});

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(1)
	  , toIObject = __webpack_require__(19)
	  , arrayJoin = [].join;
	
	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(51) != Object || !__webpack_require__(24)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(1)
	  , toIObject     = __webpack_require__(19)
	  , toInteger     = __webpack_require__(35)
	  , toLength      = __webpack_require__(12)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;
	
	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(24)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $map    = __webpack_require__(26)(1);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(1)
	  , createProperty = __webpack_require__(69);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(6)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $reduce = __webpack_require__(123);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $reduce = __webpack_require__(123);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(1)
	  , html       = __webpack_require__(73)
	  , cof        = __webpack_require__(22)
	  , toIndex    = __webpack_require__(43)
	  , toLength   = __webpack_require__(12)
	  , arraySlice = [].slice;
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(6)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $some   = __webpack_require__(26)(3);
	
	$export($export.P + $export.F * !__webpack_require__(24)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(1)
	  , aFunction = __webpack_require__(15)
	  , toObject  = __webpack_require__(13)
	  , fails     = __webpack_require__(6)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];
	
	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(24)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(42)('Array');

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(1)
	  , fails   = __webpack_require__(6)
	  , getTime = Date.prototype.getTime;
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(1)
	  , toObject    = __webpack_require__(13)
	  , toPrimitive = __webpack_require__(28);
	
	$export($export.P + $export.F * __webpack_require__(6)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(9)('toPrimitive')
	  , proto        = Date.prototype;
	
	if(!(TO_PRIMITIVE in proto))__webpack_require__(16)(proto, TO_PRIMITIVE, __webpack_require__(173));

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(17)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(1);
	
	$export($export.P, 'Function', {bind: __webpack_require__(124)});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(8)
	  , getPrototypeOf = __webpack_require__(21)
	  , HAS_INSTANCE   = __webpack_require__(9)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(11).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(11).f
	  , createDesc = __webpack_require__(34)
	  , has        = __webpack_require__(14)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(1)
	  , log1p   = __webpack_require__(132)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(1)
	  , $asinh  = Math.asinh;
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(1)
	  , $atanh  = Math.atanh;
	
	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(1)
	  , sign    = __webpack_require__(80);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(1)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(1)
	  , $expm1  = __webpack_require__(79);
	
	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(1)
	  , sign      = __webpack_require__(80)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(1)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(1)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(6)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(132)});

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {sign: __webpack_require__(80)});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(1)
	  , expm1   = __webpack_require__(79)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(6)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(1)
	  , expm1   = __webpack_require__(79)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(4)
	  , has               = __webpack_require__(14)
	  , cof               = __webpack_require__(22)
	  , inheritIfRequired = __webpack_require__(74)
	  , toPrimitive       = __webpack_require__(28)
	  , fails             = __webpack_require__(6)
	  , gOPN              = __webpack_require__(39).f
	  , gOPD              = __webpack_require__(20).f
	  , dP                = __webpack_require__(11).f
	  , $trim             = __webpack_require__(49).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(38)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(10) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(17)(global, NUMBER, $Number);
	}

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(1)
	  , _isFinite = __webpack_require__(4).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(129)});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(1)
	  , isInteger = __webpack_require__(129)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(1)
	  , $parseFloat = __webpack_require__(139);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , $parseInt = __webpack_require__(140);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , toInteger    = __webpack_require__(35)
	  , aNumberValue = __webpack_require__(120)
	  , repeat       = __webpack_require__(87)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';
	
	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};
	
	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(6)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , $fails       = __webpack_require__(6)
	  , aNumberValue = __webpack_require__(120)
	  , $toPrecision = 1..toPrecision;
	
	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(1);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(133)});

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(38)});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperties: __webpack_require__(134)});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperty: __webpack_require__(11).f});

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(8)
	  , meta     = __webpack_require__(33).onFreeze;
	
	__webpack_require__(27)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(19)
	  , $getOwnPropertyDescriptor = __webpack_require__(20).f;
	
	__webpack_require__(27)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(27)('getOwnPropertyNames', function(){
	  return __webpack_require__(135).f;
	});

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(13)
	  , $getPrototypeOf = __webpack_require__(21);
	
	__webpack_require__(27)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(8);
	
	__webpack_require__(27)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(8);
	
	__webpack_require__(27)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(8);
	
	__webpack_require__(27)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(1);
	$export($export.S, 'Object', {is: __webpack_require__(141)});

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(13)
	  , $keys    = __webpack_require__(40);
	
	__webpack_require__(27)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(8)
	  , meta     = __webpack_require__(33).onFreeze;
	
	__webpack_require__(27)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(8)
	  , meta     = __webpack_require__(33).onFreeze;
	
	__webpack_require__(27)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(1);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(82).set});

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(50)
	  , test    = {};
	test[__webpack_require__(9)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(17)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(1)
	  , $parseFloat = __webpack_require__(139);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , $parseInt = __webpack_require__(140);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(37)
	  , global             = __webpack_require__(4)
	  , ctx                = __webpack_require__(30)
	  , classof            = __webpack_require__(50)
	  , $export            = __webpack_require__(1)
	  , isObject           = __webpack_require__(8)
	  , aFunction          = __webpack_require__(15)
	  , anInstance         = __webpack_require__(36)
	  , forOf              = __webpack_require__(46)
	  , speciesConstructor = __webpack_require__(84)
	  , task               = __webpack_require__(89).set
	  , microtask          = __webpack_require__(81)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(9)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(41)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(48)($Promise, PROMISE);
	__webpack_require__(42)(PROMISE);
	Wrapper = __webpack_require__(29)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(59)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(1)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(2)
	  , rApply    = (__webpack_require__(4).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(6)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(1)
	  , create     = __webpack_require__(38)
	  , aFunction  = __webpack_require__(15)
	  , anObject   = __webpack_require__(2)
	  , isObject   = __webpack_require__(8)
	  , fails      = __webpack_require__(6)
	  , bind       = __webpack_require__(124)
	  , rConstruct = (__webpack_require__(4).Reflect || {}).construct;
	
	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});
	
	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(11)
	  , $export     = __webpack_require__(1)
	  , anObject    = __webpack_require__(2)
	  , toPrimitive = __webpack_require__(28);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(6)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(1)
	  , gOPD     = __webpack_require__(20).f
	  , anObject = __webpack_require__(2);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(1)
	  , anObject = __webpack_require__(2);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(77)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(20)
	  , $export  = __webpack_require__(1)
	  , anObject = __webpack_require__(2);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(1)
	  , getProto = __webpack_require__(21)
	  , anObject = __webpack_require__(2);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(20)
	  , getPrototypeOf = __webpack_require__(21)
	  , has            = __webpack_require__(14)
	  , $export        = __webpack_require__(1)
	  , isObject       = __webpack_require__(8)
	  , anObject       = __webpack_require__(2);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(1)
	  , anObject      = __webpack_require__(2)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(138)});

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(1)
	  , anObject           = __webpack_require__(2)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(1)
	  , setProto = __webpack_require__(82);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(11)
	  , gOPD           = __webpack_require__(20)
	  , getPrototypeOf = __webpack_require__(21)
	  , has            = __webpack_require__(14)
	  , $export        = __webpack_require__(1)
	  , createDesc     = __webpack_require__(34)
	  , anObject       = __webpack_require__(2)
	  , isObject       = __webpack_require__(8);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(4)
	  , inheritIfRequired = __webpack_require__(74)
	  , dP                = __webpack_require__(11).f
	  , gOPN              = __webpack_require__(39).f
	  , isRegExp          = __webpack_require__(58)
	  , $flags            = __webpack_require__(56)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(6)(function(){
	  re2[__webpack_require__(9)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(17)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(42)('RegExp');

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(55)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(55)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(55)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(55)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(58)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(145);
	var anObject    = __webpack_require__(2)
	  , $flags      = __webpack_require__(56)
	  , DESCRIPTORS = __webpack_require__(10)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];
	
	var define = function(fn){
	  __webpack_require__(17)(RegExp.prototype, TO_STRING, fn, true);
	};
	
	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(6)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(18)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(18)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(18)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(18)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(1)
	  , $at     = __webpack_require__(85)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(1)
	  , toLength  = __webpack_require__(12)
	  , context   = __webpack_require__(86)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(72)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(18)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(18)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(18)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(1)
	  , toIndex        = __webpack_require__(43)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(1)
	  , context  = __webpack_require__(86)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(72)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(18)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(85)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(78)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(18)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(1)
	  , toIObject = __webpack_require__(19)
	  , toLength  = __webpack_require__(12);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(87)
	});

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(18)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(1)
	  , toLength    = __webpack_require__(12)
	  , context     = __webpack_require__(86)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(72)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(18)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(18)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(18)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(49)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(4)
	  , has            = __webpack_require__(14)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(1)
	  , redefine       = __webpack_require__(17)
	  , META           = __webpack_require__(33).KEY
	  , $fails         = __webpack_require__(6)
	  , shared         = __webpack_require__(62)
	  , setToStringTag = __webpack_require__(48)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(9)
	  , wksExt         = __webpack_require__(143)
	  , wksDefine      = __webpack_require__(91)
	  , keyOf          = __webpack_require__(175)
	  , enumKeys       = __webpack_require__(174)
	  , isArray        = __webpack_require__(76)
	  , anObject       = __webpack_require__(2)
	  , toIObject      = __webpack_require__(19)
	  , toPrimitive    = __webpack_require__(28)
	  , createDesc     = __webpack_require__(34)
	  , _create        = __webpack_require__(38)
	  , gOPNExt        = __webpack_require__(135)
	  , $GOPD          = __webpack_require__(20)
	  , $DP            = __webpack_require__(11)
	  , $keys          = __webpack_require__(40)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};
	
	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};
	
	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });
	
	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(39).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(52).f  = $propertyIsEnumerable;
	  __webpack_require__(61).f = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(37)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	
	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});
	
	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);
	
	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);
	
	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});
	
	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});
	
	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(1)
	  , $typed       = __webpack_require__(63)
	  , buffer       = __webpack_require__(90)
	  , anObject     = __webpack_require__(2)
	  , toIndex      = __webpack_require__(43)
	  , toLength     = __webpack_require__(12)
	  , isObject     = __webpack_require__(8)
	  , ArrayBuffer  = __webpack_require__(4).ArrayBuffer
	  , speciesConstructor = __webpack_require__(84)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';
	
	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});
	
	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});
	
	$export($export.P + $export.U + $export.F * __webpack_require__(6)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});
	
	__webpack_require__(42)(ARRAY_BUFFER);

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1);
	$export($export.G + $export.W + $export.F * !__webpack_require__(63).ABV, {
	  DataView: __webpack_require__(90).DataView
	});

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(32)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(127);
	
	// 23.4 WeakSet Objects
	__webpack_require__(54)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(1)
	  , $includes = __webpack_require__(53)(true);
	
	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(45)('includes');

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(1)
	  , microtask = __webpack_require__(81)()
	  , process   = __webpack_require__(4).process
	  , isNode    = __webpack_require__(22)(process) == 'process';
	
	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(1)
	  , cof     = __webpack_require__(22);
	
	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(1);
	
	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(126)('Map')});

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(1);
	
	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(1)
	  , toObject        = __webpack_require__(13)
	  , aFunction       = __webpack_require__(15)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(60), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(1)
	  , toObject        = __webpack_require__(13)
	  , aFunction       = __webpack_require__(15)
	  , $defineProperty = __webpack_require__(11);
	
	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(10) && $export($export.P + __webpack_require__(60), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(1)
	  , $entries = __webpack_require__(137)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(1)
	  , ownKeys        = __webpack_require__(138)
	  , toIObject      = __webpack_require__(19)
	  , gOPD           = __webpack_require__(20)
	  , createProperty = __webpack_require__(69);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(1)
	  , toObject                 = __webpack_require__(13)
	  , toPrimitive              = __webpack_require__(28)
	  , getPrototypeOf           = __webpack_require__(21)
	  , getOwnPropertyDescriptor = __webpack_require__(20).f;
	
	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(60), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(1)
	  , toObject                 = __webpack_require__(13)
	  , toPrimitive              = __webpack_require__(28)
	  , getPrototypeOf           = __webpack_require__(21)
	  , getOwnPropertyDescriptor = __webpack_require__(20).f;
	
	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(10) && $export($export.P + __webpack_require__(60), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(1)
	  , $values = __webpack_require__(137)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(1)
	  , global      = __webpack_require__(4)
	  , core        = __webpack_require__(29)
	  , microtask   = __webpack_require__(81)()
	  , OBSERVABLE  = __webpack_require__(9)('observable')
	  , aFunction   = __webpack_require__(15)
	  , anObject    = __webpack_require__(2)
	  , anInstance  = __webpack_require__(36)
	  , redefineAll = __webpack_require__(41)
	  , hide        = __webpack_require__(16)
	  , forOf       = __webpack_require__(46)
	  , RETURN      = forOf.RETURN;
	
	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};
	
	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};
	
	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};
	
	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};
	
	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};
	
	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});
	
	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};
	
	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});
	
	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};
	
	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});
	
	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});
	
	hide($Observable.prototype, OBSERVABLE, function(){ return this; });
	
	$export($export.G, {Observable: $Observable});
	
	__webpack_require__(42)('Observable');

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(31)
	  , anObject                  = __webpack_require__(2)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(2)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;
	
	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(146)
	  , from                    = __webpack_require__(122)
	  , metadata                = __webpack_require__(31)
	  , anObject                = __webpack_require__(2)
	  , getPrototypeOf          = __webpack_require__(21)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};
	
	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(2)
	  , getPrototypeOf         = __webpack_require__(21)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};
	
	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(31)
	  , anObject                = __webpack_require__(2)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;
	
	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(2)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;
	
	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(2)
	  , getPrototypeOf         = __webpack_require__(21)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};
	
	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(31)
	  , anObject               = __webpack_require__(2)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;
	
	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(31)
	  , anObject                  = __webpack_require__(2)
	  , aFunction                 = __webpack_require__(15)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;
	
	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(1);
	
	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(126)('Set')});

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(1)
	  , $at     = __webpack_require__(85)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(1)
	  , defined     = __webpack_require__(23)
	  , toLength    = __webpack_require__(12)
	  , isRegExp    = __webpack_require__(58)
	  , getFlags    = __webpack_require__(56)
	  , RegExpProto = RegExp.prototype;
	
	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};
	
	__webpack_require__(77)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});
	
	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(1)
	  , $pad    = __webpack_require__(142);
	
	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(1)
	  , $pad    = __webpack_require__(142);
	
	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(49)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(49)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(91)('asyncIterator');

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(91)('observable');

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(1);
	
	$export($export.S, 'System', {global: __webpack_require__(4)});

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(93)
	  , redefine      = __webpack_require__(17)
	  , global        = __webpack_require__(4)
	  , hide          = __webpack_require__(16)
	  , Iterators     = __webpack_require__(47)
	  , wks           = __webpack_require__(9)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(1)
	  , $task   = __webpack_require__(89);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(4)
	  , $export    = __webpack_require__(1)
	  , invoke     = __webpack_require__(57)
	  , partial    = __webpack_require__(176)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(299);
	__webpack_require__(238);
	__webpack_require__(240);
	__webpack_require__(239);
	__webpack_require__(242);
	__webpack_require__(244);
	__webpack_require__(249);
	__webpack_require__(243);
	__webpack_require__(241);
	__webpack_require__(251);
	__webpack_require__(250);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(245);
	__webpack_require__(237);
	__webpack_require__(248);
	__webpack_require__(252);
	__webpack_require__(253);
	__webpack_require__(205);
	__webpack_require__(207);
	__webpack_require__(206);
	__webpack_require__(255);
	__webpack_require__(254);
	__webpack_require__(225);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(208);
	__webpack_require__(209);
	__webpack_require__(210);
	__webpack_require__(211);
	__webpack_require__(212);
	__webpack_require__(213);
	__webpack_require__(214);
	__webpack_require__(215);
	__webpack_require__(216);
	__webpack_require__(217);
	__webpack_require__(218);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(221);
	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(286);
	__webpack_require__(291);
	__webpack_require__(298);
	__webpack_require__(289);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(287);
	__webpack_require__(292);
	__webpack_require__(294);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(279);
	__webpack_require__(280);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(288);
	__webpack_require__(290);
	__webpack_require__(293);
	__webpack_require__(295);
	__webpack_require__(296);
	__webpack_require__(297);
	__webpack_require__(200);
	__webpack_require__(202);
	__webpack_require__(201);
	__webpack_require__(204);
	__webpack_require__(203);
	__webpack_require__(189);
	__webpack_require__(187);
	__webpack_require__(193);
	__webpack_require__(190);
	__webpack_require__(196);
	__webpack_require__(198);
	__webpack_require__(186);
	__webpack_require__(192);
	__webpack_require__(183);
	__webpack_require__(197);
	__webpack_require__(181);
	__webpack_require__(195);
	__webpack_require__(194);
	__webpack_require__(188);
	__webpack_require__(191);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(185);
	__webpack_require__(184);
	__webpack_require__(199);
	__webpack_require__(93);
	__webpack_require__(271);
	__webpack_require__(276);
	__webpack_require__(145);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(256);
	__webpack_require__(144);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(311);
	__webpack_require__(300);
	__webpack_require__(301);
	__webpack_require__(306);
	__webpack_require__(309);
	__webpack_require__(310);
	__webpack_require__(304);
	__webpack_require__(307);
	__webpack_require__(305);
	__webpack_require__(308);
	__webpack_require__(302);
	__webpack_require__(303);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(261);
	__webpack_require__(264);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(270);
	__webpack_require__(269);
	__webpack_require__(312);
	__webpack_require__(338);
	__webpack_require__(341);
	__webpack_require__(340);
	__webpack_require__(342);
	__webpack_require__(343);
	__webpack_require__(339);
	__webpack_require__(344);
	__webpack_require__(345);
	__webpack_require__(323);
	__webpack_require__(326);
	__webpack_require__(322);
	__webpack_require__(320);
	__webpack_require__(321);
	__webpack_require__(324);
	__webpack_require__(325);
	__webpack_require__(315);
	__webpack_require__(337);
	__webpack_require__(346);
	__webpack_require__(314);
	__webpack_require__(316);
	__webpack_require__(318);
	__webpack_require__(317);
	__webpack_require__(319);
	__webpack_require__(328);
	__webpack_require__(329);
	__webpack_require__(331);
	__webpack_require__(330);
	__webpack_require__(333);
	__webpack_require__(332);
	__webpack_require__(334);
	__webpack_require__(335);
	__webpack_require__(336);
	__webpack_require__(313);
	__webpack_require__(327);
	__webpack_require__(349);
	__webpack_require__(348);
	__webpack_require__(347);
	module.exports = __webpack_require__(29);

/***/ }),
/* 351 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(152),
	    getRawTag = __webpack_require__(355),
	    objectToString = __webpack_require__(356);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ }),
/* 353 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(357);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(152);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ }),
/* 356 */
/***/ (function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ }),
/* 357 */
/***/ (function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(353);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ }),
/* 359 */
/***/ (function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(352),
	    getPrototype = __webpack_require__(354),
	    isObjectLike = __webpack_require__(359);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
	    funcToString.call(Ctor) == objectCtorString;
	}
	
	module.exports = isPlainObject;


/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	if (true) {
	  var invariant = __webpack_require__(149);
	  var warning = __webpack_require__(150);
	  var ReactPropTypesSecret = __webpack_require__(153);
	  var loggedTypeFailures = {};
	}
	
	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	
	          var stack = getStack ? getStack() : '';
	
	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}
	
	module.exports = checkPropTypes;


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(148);
	var invariant = __webpack_require__(149);
	var warning = __webpack_require__(150);
	
	var ReactPropTypesSecret = __webpack_require__(153);
	var checkPropTypes = __webpack_require__(361);
	
	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }
	
	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */
	
	  var ANONYMOUS = '<<anonymous>>';
	
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker
	  };
	
	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/
	
	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	
	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	
	    return chainedCheckType;
	  }
	
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }
	
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	
	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }
	
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }
	
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	
	        return true;
	      default:
	        return false;
	    }
	  }
	
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }
	
	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }
	
	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	
	    return false;
	  }
	
	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }
	
	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }
	
	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }
	
	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	
	  return ReactPropTypes;
	};


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports['default'] = createStore;
	
	var _isPlainObject = __webpack_require__(360);
	
	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);
	
	var _symbolObservable = __webpack_require__(365);
	
	var _symbolObservable2 = _interopRequireDefault(_symbolObservable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [preloadedState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, preloadedState, enhancer) {
	  var _ref2;
	
	  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = preloadedState;
	    preloadedState = undefined;
	  }
	
	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }
	
	    return enhancer(createStore)(reducer, preloadedState);
	  }
	
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = preloadedState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;
	
	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all state changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }
	
	    var isSubscribed = true;
	
	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	
	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2['default'])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }
	
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }
	
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  /**
	   * Interoperability point for observable/reactive libraries.
	   * @returns {observable} A minimal observable of state changes.
	   * For more information, see the observable proposal:
	   * https://github.com/zenparsing/es-observable
	   */
	  function observable() {
	    var _ref;
	
	    var outerSubscribe = subscribe;
	    return _ref = {
	      /**
	       * The minimal observable subscription method.
	       * @param {Object} observer Any object that can be used as an observer.
	       * The observer object should have a `next` method.
	       * @returns {subscription} An object with an `unsubscribe` method that can
	       * be used to unsubscribe the observable from the store, and prevent further
	       * emission of values from the observable.
	       */
	      subscribe: function subscribe(observer) {
	        if (typeof observer !== 'object') {
	          throw new TypeError('Expected the observer to be an object.');
	        }
	
	        function observeState() {
	          if (observer.next) {
	            observer.next(getState());
	          }
	        }
	
	        observeState();
	        var unsubscribe = outerSubscribe(observeState);
	        return { unsubscribe: unsubscribe };
	      }
	    }, _ref[_symbolObservable2['default']] = function () {
	      return this;
	    }, _ref;
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return _ref2 = {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  }, _ref2[_symbolObservable2['default']] = observable, _ref2;
	}

/***/ }),
/* 364 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    if (typeof global.process === "object" && global.process.domain) {
	      invoke = global.process.domain.bind(invoke);
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(366);


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ponyfill = __webpack_require__(367);
	
	var _ponyfill2 = _interopRequireDefault(_ponyfill);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var root; /* global window */
	
	
	if (typeof self !== 'undefined') {
	  root = self;
	} else if (typeof window !== 'undefined') {
	  root = window;
	} else if (typeof global !== 'undefined') {
	  root = global;
	} else if (true) {
	  root = module;
	} else {
	  root = Function('return this')();
	}
	
	var result = (0, _ponyfill2['default'])(root);
	exports['default'] = result;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(368)(module)))

/***/ }),
/* 367 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = symbolObservablePonyfill;
	function symbolObservablePonyfill(root) {
		var result;
		var _Symbol = root.Symbol;
	
		if (typeof _Symbol === 'function') {
			if (_Symbol.observable) {
				result = _Symbol.observable;
			} else {
				result = _Symbol('observable');
				_Symbol.observable = result;
			}
		} else {
			result = '@@observable';
		}
	
		return result;
	};

/***/ }),
/* 368 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ })
/******/ ])
});
;
//# sourceMappingURL=video-react.js.map