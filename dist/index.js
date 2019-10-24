
  /*!
  * fetools v1.0.0
  * (c) 2019-2019
  * https://github.com/iyolee/fetools
  * Released under the MIT License.
  */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var whichType$ = function (value) {
    var _toString = Object.prototype.toString;
    var type = _toString.call(value).split(' ')[1].replace(']', '');
    return type.toLowerCase();
};
var isType$ = function (type, value) {
    return type === whichType$(value);
};

var isArray$ = function (val) {
    return isType$('array', val);
};

exports.isArray$ = isArray$;
