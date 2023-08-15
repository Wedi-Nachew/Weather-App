/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url["default"] : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  "long": 'MMMM do, y',
  medium: 'MMM d, y',
  "short": 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  "long": 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  "short": 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  "long": "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  "short": '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  "short": ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  "short": /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/current_weather.js":
/*!********************************!*\
  !*** ./src/current_weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderCurrentWeatherInfo: () => (/* binding */ renderCurrentWeatherInfo)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");

var renderCurrentWeatherInfo = function renderCurrentWeatherInfo(current, future, locationInfo, unit) {
  var wrapper = document.querySelector(".wrapper");
  var currentWeatherBoard = wrapper.querySelector(".current-weather");
  var location = currentWeatherBoard.querySelector(".location");
  var weatherDescription = currentWeatherBoard.querySelector("div h2");
  var tempAtTheMoment = currentWeatherBoard.querySelector(".current-weather-icon");
  var path = current.condition.icon.match(/\w+(?=.\d+.png$)/) + "/" + current.condition.icon.match(/\d+.png$/);
  location.lastElementChild.textContent = locationInfo.name + ", " + locationInfo.country;
  location.nextElementSibling.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(current.last_updated), "PPPP");
  weatherDescription.textContent = current.condition.text;
  tempAtTheMoment.firstElementChild.src = "weather_icons/".concat(path);
  unit === "Fahrenheit" ? dataInFahrenheit() : dataInCelsius();
  function dataInCelsius() {
    tempAtTheMoment.lastElementChild.textContent = current.temp_c + "ᵒ";
    weatherDescription.nextElementSibling.firstElementChild.textContent = current.feelslike_c + "ᵒ";
    weatherDescription.nextElementSibling.nextElementSibling.textContent = future.forecastday[0].day.mintemp_c + "ᵒ" + " / " + future.forecastday[0].day.maxtemp_c + "ᵒ";
  }
  function dataInFahrenheit() {
    tempAtTheMoment.lastElementChild.textContent = current.temp_f + "ᵒ";
    weatherDescription.nextElementSibling.firstElementChild.textContent = current.feelslike_f + "ᵒ";
    weatherDescription.nextElementSibling.nextElementSibling.textContent = future.forecastday[0].day.mintemp_f + "ᵒ" + " / " + future.forecastday[0].day.maxtemp_f + "ᵒ";
  }
};

/***/ }),

/***/ "./src/daily_weather_forecast.js":
/*!***************************************!*\
  !*** ./src/daily_weather_forecast.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderDailyWeatherForecastForsevenDays: () => (/* binding */ renderDailyWeatherForecastForsevenDays)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _icons_rain_drop_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/rain-drop-svgrepo-com.svg */ "./src/icons/rain-drop-svgrepo-com.svg");


var renderDailyWeatherForecastForsevenDays = function renderDailyWeatherForecastForsevenDays(future, unit) {
  var thisWeekForecast = document.querySelector(".this-week-forecast");
  while (thisWeekForecast.firstChild) {
    thisWeekForecast.removeChild(thisWeekForecast.firstChild);
  }
  future.forecastday.forEach(function (day) {
    var mainContainer = document.createElement("div");
    var dayName = document.createElement("p");
    var subContainer = document.createElement("div");
    var rainDropIcon = document.createElement("img");
    var rainingProbablity = document.createElement("p");
    var predicatedTempIcon = document.createElement("img");
    var predicatedMinMaxTemp = document.createElement("p");
    var path = day.day.condition.icon.match(/\w+(?=.\d+.png$)/) + "/" + day.day.condition.icon.match(/\d+.png$/);
    (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(day.date)) ? dayName.textContent = "Today" : dayName.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(day.date), "EEEE");
    subContainer.className = "daily-chance-of-rain";
    rainDropIcon.src = _icons_rain_drop_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;
    rainingProbablity.textContent = day.day.daily_chance_of_rain + "%";
    predicatedTempIcon.src = "weather_icons/".concat(path);
    unit === "Fahrenheit" ? predicatedMinMaxTemp.textContent = day.day.mintemp_f + "ᵒ " + " / " + day.day.maxtemp_f + "ᵒ" : predicatedMinMaxTemp.textContent = day.day.mintemp_c + "ᵒ " + " / " + day.day.maxtemp_c + "ᵒ";
    subContainer.appendChild(rainDropIcon);
    subContainer.appendChild(rainingProbablity);
    mainContainer.appendChild(dayName);
    mainContainer.appendChild(subContainer);
    mainContainer.appendChild(predicatedTempIcon);
    mainContainer.appendChild(predicatedMinMaxTemp);
    thisWeekForecast.appendChild(mainContainer);
  });
};

/***/ }),

/***/ "./src/hourly_weather_forecast.js":
/*!****************************************!*\
  !*** ./src/hourly_weather_forecast.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHourlyWeatherForecast: () => (/* binding */ renderHourlyWeatherForecast)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _icons_rain_drop_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/rain-drop-svgrepo-com.svg */ "./src/icons/rain-drop-svgrepo-com.svg");


var renderHourlyWeatherForecast = function renderHourlyWeatherForecast(future, unit) {
  var hourlyWeatherForcast = document.querySelector(".hourly-weather-forecast");
  while (hourlyWeatherForcast.firstChild) {
    hourlyWeatherForcast.removeChild(hourlyWeatherForcast.firstChild);
  }
  future.forecastday[0].hour.forEach(function (hour) {
    var mainContainer = document.createElement("div");
    var time = document.createElement("p");
    var predicatedTempIcon = document.createElement("img");
    var predicatedTemp = document.createElement("p");
    var subContainer = document.createElement("div");
    var rainDropIcon = document.createElement("img");
    var rainingProbablity = document.createElement("p");
    var path = hour.condition.icon.match(/\w+(?=.\d+.png$)/) + "/" + hour.condition.icon.match(/\d+.png$/);
    time.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(hour.time), "h aa");
    predicatedTempIcon.src = "weather_icons/".concat(path);
    subContainer.className = "hourly-chance-of-rain";
    rainDropIcon.src = _icons_rain_drop_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;
    rainingProbablity.textContent = hour.chance_of_rain + "%";
    unit === "Fahrenheit" ? predicatedTemp.textContent = hour.temp_f + "ᵒ" : predicatedTemp.textContent = hour.temp_c + "ᵒ";
    subContainer.appendChild(rainDropIcon);
    subContainer.appendChild(rainingProbablity);
    mainContainer.appendChild(time);
    mainContainer.appendChild(predicatedTempIcon);
    mainContainer.appendChild(predicatedTemp);
    mainContainer.appendChild(subContainer);
    hourlyWeatherForcast.appendChild(mainContainer);
  });
};

/***/ }),

/***/ "./src/side_bar_notes.js":
/*!*******************************!*\
  !*** ./src/side_bar_notes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   provideExtraInfo: () => (/* binding */ provideExtraInfo)
/* harmony export */ });

var provideExtraInfo = function provideExtraInfo(current, future, location) {
  var sideBarContent = document.querySelector(".side-bar-content");
  var cityName = sideBarContent.querySelector(".city-name");
  var countryName = sideBarContent.querySelector(".country-name");
  var windSpeed = sideBarContent.querySelector(".wind-speed");
  var uvIndex = sideBarContent.querySelector(".uv-index");
  var humidity = sideBarContent.querySelector(".humidity");
  var sunRise = sideBarContent.querySelector(".sunrise");
  var sunSet = sideBarContent.querySelector(".sunset");
  var timeZone = sideBarContent.querySelector(".time-zone");
  var latitude = sideBarContent.querySelector(".latitude");
  var longitude = sideBarContent.querySelector(".longitude");
  cityName.textContent = location.name;
  countryName.textContent = location.country;
  windSpeed.textContent = current.wind_kph + " km/h ";
  uvIndex.textContent = current.uv;
  humidity.textContent = current.humidity + "%";
  sunRise.textContent = future.forecastday[0].astro.sunrise;
  sunSet.textContent = future.forecastday[0].astro.sunset;
  timeZone.textContent = location.tz_id;
  latitude.textContent = location.lat + "ᵒ N";
  longitude.textContent = location.lon + "ᵒ E";
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/partly-cloud.jpg */ "./src/icons/partly-cloud.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    padding: 0;
    margin: 0;
    width: 100vw;
    font-family: "Ruwudu", serif;
}
.container {
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: #f1f1f1;
}
.main-content,
.this-week-forecast,
.side-bar-content {
    background-color: #fff;
    border-radius: 15px;
}
.header {
    display: flex;
    background-color: rgba(27, 24, 24, 0.85);
    height: 75px;
    color: #fff;
    justify-content: space-between;
    padding: 5px 40px;
    align-items: center;
    position: relative;
}
.header h2 {
    margin-top: 35px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.8rem;
}
.header h2 > img {
    height: 50px;
}

.header > input[type="search"],
.header > input[type="checkbox"] {
    border: none;
    appearance: none;
    outline: none;
    font-size: 100%;
    font-family: "Times New Roman", Times, serif;
}
.header > input[type="search"] {
    height: 32px;
    width: 350px;
    border-radius: 15px;
    padding: 10px;
}
.header > img {
    height: 22px;
    position: absolute;
    left: 66.3%;
    cursor: pointer;
}
.header > img:hover {
    transform: scale(0.9);
}

.header > input[type="checkbox"] {
    width: 60px;
    padding: 10px 0;
    background-color: #d4d4d4;
    border-radius: 20px;
    cursor: pointer;
}
.header > span.circular-shape {
    height: 23px;
    width: 23px;
    border-radius: 50%;
    position: absolute;
    right: 75px;
    background-color: #fff;
    cursor: pointer;
    border: 3px solid #d4d4d4;
}
.header > span.C {
    position: absolute;
    top: 33px;
    right: 83.5px;
    font-size: 1rem;
    cursor: pointer;
    color: #171313df;
    z-index: 10;
}
.header > span.F {
    position: absolute;
    top: 33px;
    right: 47.5px;
    font-size: 1rem;
    color: #000;
    cursor: pointer;
    z-index: 10;
}
.header > input[type="checkbox"]:checked {
    background-color: rgba(12, 182, 12, 0.951);
}
.header > input[type="checkbox"]:checked ~ span.circular-shape {
    right: 37px;
    background-color: #fff;
    border: 3px solid rgba(12, 182, 12, 0.951);
}
.header > input[type="checkbox"]:checked ~ span.F {
    right: 45px;
}
.header > input[type="checkbox"]:checked + span.C {
    right: 82px;
    color: #fff;
    top: 33px;
}
.header > .error-handler {
    position: absolute;
    left: 43.5%;
    bottom: -20px;
    z-index: 99;
}
.wrapper {
    display: grid;
    grid-template-columns: 65% 35%;
    padding: 20px 110px;
    gap: 25px;
    position: relative;
}
.main-content {
    display: flex;
    flex-direction: column;
}
.current-weather {
    display: flex;
    flex-grow: 1;
    padding: 15px 10px;
    justify-content: space-between;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    height: 200px;
    background-size: cover;
    background-color: black;
    object-fit: cover;
}
.location {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    margin-bottom: 0;
}
.current-weather .location > img {
    height: 28px;
    width: auto;
    transform: translateY(10%);
}
.current-weather .location > p {
    margin-bottom: 0;
}
.current-weather > div:first-child > p {
    margin-top: -15px;
    color: #000000bd;
    margin-left: 10px;
}
.current-weather-icon {
    margin-top: -50px;
    display: flex;
    align-items: center;
}
.current-weather-icon img {
    height: 68px;
    /* backdrop-filter: blur(3px); */
    background-color: transparent;
    width: auto;
}
.current-weather .current-weather-icon h1 {
    font-weight: 500;
    margin-top: 60px;
    font-size: 3.1rem;
    color: #000000ca;
}
.current-weather h2 {
    font-size: 1.8rem;
    margin-bottom: 0;
    font-weight: 500;
    color: #000000da;
    margin-top: 33px;
    width: clamp(4ch, 13ch, 17ch);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.current-weather div:last-child p {
    font-size: 1.2rem;
    margin-top: 25px;
}
.current-weather div:last-child p:last-child {
    margin-top: -10px;
}
.hourly-weather-forecast {
    display: flex;
    overflow-x: scroll;
    padding: 20px;
    gap: 15px;
}
.hourly-weather-forecast > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px dotted gray;
    padding-right: 15px;
}
.hourly-chance-of-rain > img,
.daily-chance-of-rain > img {
    height: 18px;
    transform: translateY(-21%);
}
.hourly-chance-of-rain,
.daily-chance-of-rain {
    display: inline-flex;
    align-items: center;
}
.hourly-weather-forecast div.hourly-chance-of-rain > p,
.this-week-forecast div.daily-chance-of-rain > p {
    font-size: 16px;
    font-weight: 400;
}
.side-bar-content {
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
    gap: -5px;
}
.side-bar-content > div {
    display: flex;
    justify-content: space-between;
    height: 60px;
}
.side-bar-content p > img {
    height: 20px;
}
.side-bar-content div p:first-of-type {
    display: inline-flex;
    gap: 10px;
}
.side-bar-content div p {
    font-size: 18px;
}
.this-week-forecast {
    display: flex;
    grid-column: span 2;
    padding: 20px;
}
.this-week-forecast > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1px dotted gray;
    margin: 0;
    padding-right: 10px;
    flex-grow: 1;
}
.this-week-forecast > div:last-child,
.hourly-weather-forecast > div:last-child {
    border: none;
}
.hourly-weather-forecast p:first-of-type,
.this-week-forecast p:first-of-type {
    font-size: 1.2rem;
    font-weight: 500;
}
.loader-container {
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
}
.loader {
    height: 250px;
    width: auto;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,YAAY;IACZ,4BAA4B;AAChC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,yBAAyB;AAC7B;AACA;;;IAGI,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,wCAAwC;IACxC,YAAY;IACZ,WAAW;IACX,8BAA8B;IAC9B,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,iBAAiB;AACrB;AACA;IACI,YAAY;AAChB;;AAEA;;IAEI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,4CAA4C;AAChD;AACA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,eAAe;AACnB;AACA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;AACnB;AACA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,sBAAsB;IACtB,eAAe;IACf,yBAAyB;AAC7B;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,eAAe;IACf,eAAe;IACf,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,kBAAkB;IAClB,SAAS;IACT,aAAa;IACb,eAAe;IACf,WAAW;IACX,eAAe;IACf,WAAW;AACf;AACA;IACI,0CAA0C;AAC9C;AACA;IACI,WAAW;IACX,sBAAsB;IACtB,0CAA0C;AAC9C;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,WAAW;IACX,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,WAAW;AACf;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,SAAS;IACT,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;IAC9B,yDAA+C;IAC/C,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,WAAW;IACX,0BAA0B;AAC9B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,gCAAgC;IAChC,6BAA6B;IAC7B,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;IAChB,6BAA6B;IAC7B,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,mBAAmB;AACvB;AACA;;IAEI,YAAY;IACZ,2BAA2B;AAC/B;AACA;;IAEI,oBAAoB;IACpB,mBAAmB;AACvB;AACA;;IAEI,eAAe;IACf,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;AACA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,oBAAoB;IACpB,SAAS;AACb;AACA;IACI,eAAe;AACnB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,6BAA6B;IAC7B,SAAS;IACT,mBAAmB;IACnB,YAAY;AAChB;AACA;;IAEI,YAAY;AAChB;AACA;;IAEI,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,OAAO;IACP,MAAM;IACN,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,WAAW;AACf","sourcesContent":["body {\n    padding: 0;\n    margin: 0;\n    width: 100vw;\n    font-family: \"Ruwudu\", serif;\n}\n.container {\n    display: flex;\n    flex-direction: column;\n    margin: 0;\n    background-color: #f1f1f1;\n}\n.main-content,\n.this-week-forecast,\n.side-bar-content {\n    background-color: #fff;\n    border-radius: 15px;\n}\n.header {\n    display: flex;\n    background-color: rgba(27, 24, 24, 0.85);\n    height: 75px;\n    color: #fff;\n    justify-content: space-between;\n    padding: 5px 40px;\n    align-items: center;\n    position: relative;\n}\n.header h2 {\n    margin-top: 35px;\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    font-size: 1.8rem;\n}\n.header h2 > img {\n    height: 50px;\n}\n\n.header > input[type=\"search\"],\n.header > input[type=\"checkbox\"] {\n    border: none;\n    appearance: none;\n    outline: none;\n    font-size: 100%;\n    font-family: \"Times New Roman\", Times, serif;\n}\n.header > input[type=\"search\"] {\n    height: 32px;\n    width: 350px;\n    border-radius: 15px;\n    padding: 10px;\n}\n.header > img {\n    height: 22px;\n    position: absolute;\n    left: 66.3%;\n    cursor: pointer;\n}\n.header > img:hover {\n    transform: scale(0.9);\n}\n\n.header > input[type=\"checkbox\"] {\n    width: 60px;\n    padding: 10px 0;\n    background-color: #d4d4d4;\n    border-radius: 20px;\n    cursor: pointer;\n}\n.header > span.circular-shape {\n    height: 23px;\n    width: 23px;\n    border-radius: 50%;\n    position: absolute;\n    right: 75px;\n    background-color: #fff;\n    cursor: pointer;\n    border: 3px solid #d4d4d4;\n}\n.header > span.C {\n    position: absolute;\n    top: 33px;\n    right: 83.5px;\n    font-size: 1rem;\n    cursor: pointer;\n    color: #171313df;\n    z-index: 10;\n}\n.header > span.F {\n    position: absolute;\n    top: 33px;\n    right: 47.5px;\n    font-size: 1rem;\n    color: #000;\n    cursor: pointer;\n    z-index: 10;\n}\n.header > input[type=\"checkbox\"]:checked {\n    background-color: rgba(12, 182, 12, 0.951);\n}\n.header > input[type=\"checkbox\"]:checked ~ span.circular-shape {\n    right: 37px;\n    background-color: #fff;\n    border: 3px solid rgba(12, 182, 12, 0.951);\n}\n.header > input[type=\"checkbox\"]:checked ~ span.F {\n    right: 45px;\n}\n.header > input[type=\"checkbox\"]:checked + span.C {\n    right: 82px;\n    color: #fff;\n    top: 33px;\n}\n.header > .error-handler {\n    position: absolute;\n    left: 43.5%;\n    bottom: -20px;\n    z-index: 99;\n}\n.wrapper {\n    display: grid;\n    grid-template-columns: 65% 35%;\n    padding: 20px 110px;\n    gap: 25px;\n    position: relative;\n}\n.main-content {\n    display: flex;\n    flex-direction: column;\n}\n.current-weather {\n    display: flex;\n    flex-grow: 1;\n    padding: 15px 10px;\n    justify-content: space-between;\n    background-image: url(./icons/partly-cloud.jpg);\n    height: 200px;\n    background-size: cover;\n    background-color: black;\n    object-fit: cover;\n}\n.location {\n    display: flex;\n    align-items: center;\n    font-size: 1.7rem;\n    margin-bottom: 0;\n}\n.current-weather .location > img {\n    height: 28px;\n    width: auto;\n    transform: translateY(10%);\n}\n.current-weather .location > p {\n    margin-bottom: 0;\n}\n.current-weather > div:first-child > p {\n    margin-top: -15px;\n    color: #000000bd;\n    margin-left: 10px;\n}\n.current-weather-icon {\n    margin-top: -50px;\n    display: flex;\n    align-items: center;\n}\n.current-weather-icon img {\n    height: 68px;\n    /* backdrop-filter: blur(3px); */\n    background-color: transparent;\n    width: auto;\n}\n.current-weather .current-weather-icon h1 {\n    font-weight: 500;\n    margin-top: 60px;\n    font-size: 3.1rem;\n    color: #000000ca;\n}\n.current-weather h2 {\n    font-size: 1.8rem;\n    margin-bottom: 0;\n    font-weight: 500;\n    color: #000000da;\n    margin-top: 33px;\n    width: clamp(4ch, 13ch, 17ch);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.current-weather div:last-child p {\n    font-size: 1.2rem;\n    margin-top: 25px;\n}\n.current-weather div:last-child p:last-child {\n    margin-top: -10px;\n}\n.hourly-weather-forecast {\n    display: flex;\n    overflow-x: scroll;\n    padding: 20px;\n    gap: 15px;\n}\n.hourly-weather-forecast > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-right: 1px dotted gray;\n    padding-right: 15px;\n}\n.hourly-chance-of-rain > img,\n.daily-chance-of-rain > img {\n    height: 18px;\n    transform: translateY(-21%);\n}\n.hourly-chance-of-rain,\n.daily-chance-of-rain {\n    display: inline-flex;\n    align-items: center;\n}\n.hourly-weather-forecast div.hourly-chance-of-rain > p,\n.this-week-forecast div.daily-chance-of-rain > p {\n    font-size: 16px;\n    font-weight: 400;\n}\n.side-bar-content {\n    display: flex;\n    flex-direction: column;\n    padding: 10px 30px;\n    gap: -5px;\n}\n.side-bar-content > div {\n    display: flex;\n    justify-content: space-between;\n    height: 60px;\n}\n.side-bar-content p > img {\n    height: 20px;\n}\n.side-bar-content div p:first-of-type {\n    display: inline-flex;\n    gap: 10px;\n}\n.side-bar-content div p {\n    font-size: 18px;\n}\n.this-week-forecast {\n    display: flex;\n    grid-column: span 2;\n    padding: 20px;\n}\n.this-week-forecast > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-right: 1px dotted gray;\n    margin: 0;\n    padding-right: 10px;\n    flex-grow: 1;\n}\n.this-week-forecast > div:last-child,\n.hourly-weather-forecast > div:last-child {\n    border: none;\n}\n.hourly-weather-forecast p:first-of-type,\n.this-week-forecast p:first-of-type {\n    font-size: 1.2rem;\n    font-weight: 500;\n}\n.loader-container {\n    position: absolute;\n    width: 100%;\n    height: 100vh;\n    left: 0;\n    top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #fff;\n}\n.loader {\n    height: 250px;\n    width: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/icons/Spinner.gif":
/*!*******************************!*\
  !*** ./src/icons/Spinner.gif ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Spinner..gif";

/***/ }),

/***/ "./src/icons/clear-sky.jpg":
/*!*********************************!*\
  !*** ./src/icons/clear-sky.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/clear-sky..jpg";

/***/ }),

/***/ "./src/icons/cloudy.jpg":
/*!******************************!*\
  !*** ./src/icons/cloudy.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/cloudy..jpg";

/***/ }),

/***/ "./src/icons/magnifying-glass-10-svgrepo-com.svg":
/*!*******************************************************!*\
  !*** ./src/icons/magnifying-glass-10-svgrepo-com.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/magnifying-glass-10-svgrepo-com..svg";

/***/ }),

/***/ "./src/icons/partly-cloud.jpg":
/*!************************************!*\
  !*** ./src/icons/partly-cloud.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/partly-cloud..jpg";

/***/ }),

/***/ "./src/icons/rain-drop-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/icons/rain-drop-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/rain-drop-svgrepo-com..svg";

/***/ }),

/***/ "./src/icons/rain.jpg":
/*!****************************!*\
  !*** ./src/icons/rain.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/rain..jpg";

/***/ }),

/***/ "./src/icons/stormy-rain.jpg":
/*!***********************************!*\
  !*** ./src/icons/stormy-rain.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/stormy-rain..jpg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_clear_sky_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/clear-sky.jpg */ "./src/icons/clear-sky.jpg");
/* harmony import */ var _icons_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/cloudy.jpg */ "./src/icons/cloudy.jpg");
/* harmony import */ var _icons_partly_cloud_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/partly-cloud.jpg */ "./src/icons/partly-cloud.jpg");
/* harmony import */ var _icons_rain_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/rain.jpg */ "./src/icons/rain.jpg");
/* harmony import */ var _icons_stormy_rain_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/stormy-rain.jpg */ "./src/icons/stormy-rain.jpg");
/* harmony import */ var _icons_Spinner_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/Spinner.gif */ "./src/icons/Spinner.gif");
/* harmony import */ var _icons_magnifying_glass_10_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/magnifying-glass-10-svgrepo-com.svg */ "./src/icons/magnifying-glass-10-svgrepo-com.svg");
/* harmony import */ var _daily_weather_forecast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./daily_weather_forecast */ "./src/daily_weather_forecast.js");
/* harmony import */ var _current_weather__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./current_weather */ "./src/current_weather.js");
/* harmony import */ var _hourly_weather_forecast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hourly_weather_forecast */ "./src/hourly_weather_forecast.js");
/* harmony import */ var _side_bar_notes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./side_bar_notes */ "./src/side_bar_notes.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












var unit = "Celsius";
var city = "Seattle";
var getCurrentWeather = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(city) {
    var errorHandler, forecastWeatherResponse, parsedForecastWeather, currentWeather, forecastWeather, locationDetails;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          errorHandler = document.querySelector(".error-handler");
          _context.prev = 1;
          _context.next = 4;
          return fetch("https://api.weatherapi.com/v1/forecast.json?key=75d0fc888d5f466b885144654231108&q=".concat(city, "&days=7&aqi=no&alerts=no"), {
            mode: "cors"
          });
        case 4:
          forecastWeatherResponse = _context.sent;
          _context.next = 7;
          return forecastWeatherResponse.json();
        case 7:
          parsedForecastWeather = _context.sent;
          currentWeather = parsedForecastWeather.current;
          forecastWeather = parsedForecastWeather.forecast;
          locationDetails = parsedForecastWeather.location;
          setWeatherDescribingBackground(parsedForecastWeather.current.condition.text);
          errorHandler.textContent = "";
          (0,_current_weather__WEBPACK_IMPORTED_MODULE_9__.renderCurrentWeatherInfo)(currentWeather, forecastWeather, locationDetails, unit);
          (0,_side_bar_notes__WEBPACK_IMPORTED_MODULE_11__.provideExtraInfo)(currentWeather, forecastWeather, locationDetails);
          (0,_hourly_weather_forecast__WEBPACK_IMPORTED_MODULE_10__.renderHourlyWeatherForecast)(forecastWeather, unit);
          (0,_daily_weather_forecast__WEBPACK_IMPORTED_MODULE_8__.renderDailyWeatherForecastForsevenDays)(forecastWeather, unit);
          currentWeather.temp_c ? hideShowLoader("hidden") : hideShowLoader("visible");
          _context.next = 23;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](1);
          errorHandler.textContent = "⚠︎ Location not found";
        case 23:
          getUserSearchLocation().adjustSearchingElements(_icons_magnifying_glass_10_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_7__, "black", "");
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 20]]);
  }));
  return function getCurrentWeather(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getUserSearchLocation = function getUserSearchLocation() {
  var searchIcon = document.querySelector(".magnifying-glass");
  searchIcon.addEventListener("click", function () {
    city = searchIcon.previousElementSibling.value;
    getCurrentWeather(city, unit);
    adjustSearchingElements(_icons_Spinner_gif__WEBPACK_IMPORTED_MODULE_6__, "rgba(0,0,0,.5)", city);
  });
  var adjustSearchingElements = function adjustSearchingElements(icon, color, value) {
    searchIcon.src = icon;
    searchIcon.previousElementSibling.style.color = color;
    searchIcon.previousElementSibling.value = value;
  };
  return {
    adjustSearchingElements: adjustSearchingElements
  };
};
var setWeatherDescribingBackground = function setWeatherDescribingBackground(condition) {
  var currentWeather = document.querySelector(".current-weather");
  if (/rain/i.test(condition) && /storm/i.test(condition)) {
    currentWeather.style.cssText = "background-image: url(".concat(_icons_stormy_rain_jpg__WEBPACK_IMPORTED_MODULE_5__, ")");
  } else if (/cloud/i.test(condition) || /overcast/i.test(condition)) {
    currentWeather.style.cssText = "background-image: url(".concat(_icons_cloudy_jpg__WEBPACK_IMPORTED_MODULE_2__, ")");
  } else if (/rain/i.test(condition)) {
    currentWeather.style.cssText = "background-image: url(".concat(_icons_rain_jpg__WEBPACK_IMPORTED_MODULE_4__, ")");
  } else {
    currentWeather.style.cssText = "background-image: url(".concat(_icons_partly_cloud_jpg__WEBPACK_IMPORTED_MODULE_3__, ")");
  }
};
var changeTempUnit = function changeTempUnit() {
  var checkBox = document.querySelector("[type='checkbox']");
  var circularSwitch = document.querySelector(".circular-shape");
  checkBox.checked = false;
  var clickEvents = function clickEvents() {
    checkBox.addEventListener("click", function () {
      if (checkBox.checked) {
        unit = "Fahrenheit";
      } else {
        unit = "Celsius";
      }
      getCurrentWeather(city, unit);
    });
    circularSwitch.addEventListener("click", function () {
      checkBox.click();
    });
    circularSwitch.nextElementSibling.addEventListener("click", function () {
      checkBox.click();
    });
    circularSwitch.previousElementSibling.addEventListener("click", function () {
      checkBox.click();
    });
  };
  clickEvents();
};
var hideShowLoader = function hideShowLoader(value) {
  var loader = document.querySelector(".loader-container");
  loader.style.visibility = value;
};
document.addEventListener("DOMContentLoaded", function () {
  getCurrentWeather(city);
  getUserSearchLocation();
  changeTempUnit();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFL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QUUsWUFBTTtNQUM5RE0sUUFBUSxDQUFDSSxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDLENBQUM7SUFDRkgsY0FBYyxDQUFDTixzQkFBc0IsQ0FBQ0QsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07TUFDbEVNLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUVERCxXQUFXLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBQ0QsSUFBTWYsY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFJclYsS0FBSyxFQUFLO0VBQzlCLElBQU1zVyxNQUFNLEdBQUczTyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztFQUMxRDBPLE1BQU0sQ0FBQ1IsS0FBSyxDQUFDUyxVQUFVLEdBQUd2VyxLQUFLO0FBQ25DLENBQUM7QUFDRDJILFFBQVEsQ0FBQ2dPLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaERyQixpQkFBaUIsQ0FBQ0QsSUFBSSxDQUFDO0VBQ3ZCa0IscUJBQXFCLENBQUMsQ0FBQztFQUN2QlMsY0FBYyxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jdXJyZW50X3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGFpbHlfd2VhdGhlcl9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ob3VybHlfd2VhdGhlcl9mb3JlY2FzdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zaWRlX2Jhcl9ub3Rlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuZXhwb3J0IGNvbnN0IHJlbmRlckN1cnJlbnRXZWF0aGVySW5mbyA9IChcbiAgICBjdXJyZW50LFxuICAgIGZ1dHVyZSxcbiAgICBsb2NhdGlvbkluZm8sXG4gICAgdW5pdFxuKSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckJvYXJkID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLmN1cnJlbnQtd2VhdGhlclwiKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGN1cnJlbnRXZWF0aGVyQm9hcmQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBjdXJyZW50V2VhdGhlckJvYXJkLnF1ZXJ5U2VsZWN0b3IoXCJkaXYgaDJcIik7XG4gICAgY29uc3QgdGVtcEF0VGhlTW9tZW50ID0gY3VycmVudFdlYXRoZXJCb2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICBcIi5jdXJyZW50LXdlYXRoZXItaWNvblwiXG4gICAgKTtcblxuICAgIGNvbnN0IHBhdGggPVxuICAgICAgICBjdXJyZW50LmNvbmRpdGlvbi5pY29uLm1hdGNoKC9cXHcrKD89LlxcZCsucG5nJCkvKSArXG4gICAgICAgIFwiL1wiICtcbiAgICAgICAgY3VycmVudC5jb25kaXRpb24uaWNvbi5tYXRjaCgvXFxkKy5wbmckLyk7XG5cbiAgICBsb2NhdGlvbi5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID1cbiAgICAgICAgbG9jYXRpb25JbmZvLm5hbWUgKyBcIiwgXCIgKyBsb2NhdGlvbkluZm8uY291bnRyeTtcbiAgICBsb2NhdGlvbi5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBmb3JtYXQoXG4gICAgICAgIG5ldyBEYXRlKGN1cnJlbnQubGFzdF91cGRhdGVkKSxcbiAgICAgICAgXCJQUFBQXCJcbiAgICApO1xuICAgIHdlYXRoZXJEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgdGVtcEF0VGhlTW9tZW50LmZpcnN0RWxlbWVudENoaWxkLnNyYyA9IGB3ZWF0aGVyX2ljb25zLyR7cGF0aH1gO1xuICAgIHVuaXQgPT09IFwiRmFocmVuaGVpdFwiID8gZGF0YUluRmFocmVuaGVpdCgpIDogZGF0YUluQ2Vsc2l1cygpO1xuXG4gICAgZnVuY3Rpb24gZGF0YUluQ2Vsc2l1cygpIHtcbiAgICAgICAgdGVtcEF0VGhlTW9tZW50Lmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPSBjdXJyZW50LnRlbXBfYyArIFwi4bWSXCI7XG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5uZXh0RWxlbWVudFNpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgY3VycmVudC5mZWVsc2xpa2VfYyArIFwi4bWSXCI7XG4gICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbi5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIGZ1dHVyZS5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jICtcbiAgICAgICAgICAgIFwi4bWSXCIgK1xuICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICBmdXR1cmUuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYyArXG4gICAgICAgICAgICBcIuG1klwiO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkYXRhSW5GYWhyZW5oZWl0KCkge1xuICAgICAgICB0ZW1wQXRUaGVNb21lbnQubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudCA9IGN1cnJlbnQudGVtcF9mICsgXCLhtZJcIjtcblxuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24ubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIGN1cnJlbnQuZmVlbHNsaWtlX2YgKyBcIuG1klwiO1xuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24ubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBmdXR1cmUuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZiArXG4gICAgICAgICAgICBcIuG1klwiICtcbiAgICAgICAgICAgIFwiIC8gXCIgK1xuICAgICAgICAgICAgZnV0dXJlLmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2YgK1xuICAgICAgICAgICAgXCLhtZJcIjtcbiAgICB9XG59O1xuIiwiaW1wb3J0IHsgZm9ybWF0LCBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcmFpbkRyb3AgZnJvbSBcIi4vaWNvbnMvcmFpbi1kcm9wLXN2Z3JlcG8tY29tLnN2Z1wiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyRGFpbHlXZWF0aGVyRm9yZWNhc3RGb3JzZXZlbkRheXMgPSAoZnV0dXJlLCB1bml0KSA9PiB7XG4gICAgY29uc3QgdGhpc1dlZWtGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGhpcy13ZWVrLWZvcmVjYXN0XCIpO1xuICAgIHdoaWxlICh0aGlzV2Vla0ZvcmVjYXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpc1dlZWtGb3JlY2FzdC5yZW1vdmVDaGlsZCh0aGlzV2Vla0ZvcmVjYXN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBmdXR1cmUuZm9yZWNhc3RkYXkuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBkYXlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJhaW5Ecm9wSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNvbnN0IHJhaW5pbmdQcm9iYWJsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHByZWRpY2F0ZWRUZW1wSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNvbnN0IHByZWRpY2F0ZWRNaW5NYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHBhdGggPVxuICAgICAgICAgICAgZGF5LmRheS5jb25kaXRpb24uaWNvbi5tYXRjaCgvXFx3Kyg/PS5cXGQrLnBuZyQpLykgK1xuICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgZGF5LmRheS5jb25kaXRpb24uaWNvbi5tYXRjaCgvXFxkKy5wbmckLyk7XG5cbiAgICAgICAgaXNUb2RheShuZXcgRGF0ZShkYXkuZGF0ZSkpXG4gICAgICAgICAgICA/IChkYXlOYW1lLnRleHRDb250ZW50ID0gXCJUb2RheVwiKVxuICAgICAgICAgICAgOiAoZGF5TmFtZS50ZXh0Q29udGVudCA9IGZvcm1hdChuZXcgRGF0ZShkYXkuZGF0ZSksIFwiRUVFRVwiKSk7XG5cbiAgICAgICAgc3ViQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGFpbHktY2hhbmNlLW9mLXJhaW5cIjtcbiAgICAgICAgcmFpbkRyb3BJY29uLnNyYyA9IHJhaW5Ecm9wO1xuICAgICAgICByYWluaW5nUHJvYmFibGl0eS50ZXh0Q29udGVudCA9IGRheS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4gKyBcIiVcIjtcbiAgICAgICAgcHJlZGljYXRlZFRlbXBJY29uLnNyYyA9IGB3ZWF0aGVyX2ljb25zLyR7cGF0aH1gO1xuXG4gICAgICAgIHVuaXQgPT09IFwiRmFocmVuaGVpdFwiXG4gICAgICAgICAgICA/IChwcmVkaWNhdGVkTWluTWF4VGVtcC50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgICAgICBkYXkuZGF5Lm1pbnRlbXBfZiArIFwi4bWSIFwiICsgXCIgLyBcIiArIGRheS5kYXkubWF4dGVtcF9mICsgXCLhtZJcIilcbiAgICAgICAgICAgIDogKHByZWRpY2F0ZWRNaW5NYXhUZW1wLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgICAgICAgIGRheS5kYXkubWludGVtcF9jICsgXCLhtZIgXCIgKyBcIiAvIFwiICsgZGF5LmRheS5tYXh0ZW1wX2MgKyBcIuG1klwiKTtcblxuICAgICAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQocmFpbkRyb3BJY29uKTtcbiAgICAgICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHJhaW5pbmdQcm9iYWJsaXR5KTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlOYW1lKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZWRpY2F0ZWRUZW1wSWNvbik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJlZGljYXRlZE1pbk1heFRlbXApO1xuICAgICAgICB0aGlzV2Vla0ZvcmVjYXN0LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHJhaW5Ecm9wIGZyb20gXCIuL2ljb25zL3JhaW4tZHJvcC1zdmdyZXBvLWNvbS5zdmdcIjtcblxuZXhwb3J0IGNvbnN0IHJlbmRlckhvdXJseVdlYXRoZXJGb3JlY2FzdCA9IChmdXR1cmUsIHVuaXQpID0+IHtcbiAgICBjb25zdCBob3VybHlXZWF0aGVyRm9yY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIFwiLmhvdXJseS13ZWF0aGVyLWZvcmVjYXN0XCJcbiAgICApO1xuICAgIHdoaWxlIChob3VybHlXZWF0aGVyRm9yY2FzdC5maXJzdENoaWxkKSB7XG4gICAgICAgIGhvdXJseVdlYXRoZXJGb3JjYXN0LnJlbW92ZUNoaWxkKGhvdXJseVdlYXRoZXJGb3JjYXN0LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBmdXR1cmUuZm9yZWNhc3RkYXlbMF0uaG91ci5mb3JFYWNoKChob3VyKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHByZWRpY2F0ZWRUZW1wSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNvbnN0IHByZWRpY2F0ZWRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHJhaW5Ecm9wSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGNvbnN0IHJhaW5pbmdQcm9iYWJsaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHBhdGggPVxuICAgICAgICAgICAgaG91ci5jb25kaXRpb24uaWNvbi5tYXRjaCgvXFx3Kyg/PS5cXGQrLnBuZyQpLykgK1xuICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgaG91ci5jb25kaXRpb24uaWNvbi5tYXRjaCgvXFxkKy5wbmckLyk7XG5cbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGZvcm1hdChuZXcgRGF0ZShob3VyLnRpbWUpLCBcImggYWFcIik7XG4gICAgICAgIHByZWRpY2F0ZWRUZW1wSWNvbi5zcmMgPSBgd2VhdGhlcl9pY29ucy8ke3BhdGh9YDtcbiAgICAgICAgc3ViQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiaG91cmx5LWNoYW5jZS1vZi1yYWluXCI7XG4gICAgICAgIHJhaW5Ecm9wSWNvbi5zcmMgPSByYWluRHJvcDtcbiAgICAgICAgcmFpbmluZ1Byb2JhYmxpdHkudGV4dENvbnRlbnQgPSBob3VyLmNoYW5jZV9vZl9yYWluICsgXCIlXCI7XG5cbiAgICAgICAgdW5pdCA9PT0gXCJGYWhyZW5oZWl0XCJcbiAgICAgICAgICAgID8gKHByZWRpY2F0ZWRUZW1wLnRleHRDb250ZW50ID0gaG91ci50ZW1wX2YgKyBcIuG1klwiKVxuICAgICAgICAgICAgOiAocHJlZGljYXRlZFRlbXAudGV4dENvbnRlbnQgPSBob3VyLnRlbXBfYyArIFwi4bWSXCIpO1xuXG4gICAgICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZChyYWluRHJvcEljb24pO1xuICAgICAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQocmFpbmluZ1Byb2JhYmxpdHkpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWUpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZWRpY2F0ZWRUZW1wSWNvbik7XG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJlZGljYXRlZFRlbXApO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkNvbnRhaW5lcik7XG4gICAgICAgIGhvdXJseVdlYXRoZXJGb3JjYXN0LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgIH0pO1xufTtcbiIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuZXhwb3J0IGNvbnN0IHByb3ZpZGVFeHRyYUluZm8gPSAoY3VycmVudCwgZnV0dXJlLCBsb2NhdGlvbikgPT4ge1xuICAgIGNvbnN0IHNpZGVCYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhci1jb250ZW50XCIpO1xuICAgIGNvbnN0IGNpdHlOYW1lID0gc2lkZUJhckNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LW5hbWVcIik7XG4gICAgY29uc3QgY291bnRyeU5hbWUgPSBzaWRlQmFyQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNvdW50cnktbmFtZVwiKTtcbiAgICBjb25zdCB3aW5kU3BlZWQgPSBzaWRlQmFyQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIik7XG4gICAgY29uc3QgdXZJbmRleCA9IHNpZGVCYXJDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXYtaW5kZXhcIik7XG4gICAgY29uc3QgaHVtaWRpdHkgPSBzaWRlQmFyQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5XCIpO1xuICAgIGNvbnN0IHN1blJpc2UgPSBzaWRlQmFyQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnJpc2VcIik7XG4gICAgY29uc3Qgc3VuU2V0ID0gc2lkZUJhckNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5zdW5zZXRcIik7XG4gICAgY29uc3QgdGltZVpvbmUgPSBzaWRlQmFyQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtem9uZVwiKTtcbiAgICBjb25zdCBsYXRpdHVkZSA9IHNpZGVCYXJDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGF0aXR1ZGVcIik7XG4gICAgY29uc3QgbG9uZ2l0dWRlID0gc2lkZUJhckNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5sb25naXR1ZGVcIik7XG5cbiAgICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uLm5hbWU7XG4gICAgY291bnRyeU5hbWUudGV4dENvbnRlbnQgPSBsb2NhdGlvbi5jb3VudHJ5O1xuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGN1cnJlbnQud2luZF9rcGggKyBcIiBrbS9oIFwiO1xuICAgIHV2SW5kZXgudGV4dENvbnRlbnQgPSBjdXJyZW50LnV2O1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gY3VycmVudC5odW1pZGl0eSArIFwiJVwiO1xuICAgIHN1blJpc2UudGV4dENvbnRlbnQgPSBmdXR1cmUuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcbiAgICBzdW5TZXQudGV4dENvbnRlbnQgPSBmdXR1cmUuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuICAgIHRpbWVab25lLnRleHRDb250ZW50ID0gbG9jYXRpb24udHpfaWQ7XG4gICAgbGF0aXR1ZGUudGV4dENvbnRlbnQgPSBsb2NhdGlvbi5sYXQgKyBcIuG1kiBOXCI7XG4gICAgbG9uZ2l0dWRlLnRleHRDb250ZW50ID0gbG9jYXRpb24ubG9uICsgXCLhtZIgRVwiO1xufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ljb25zL3BhcnRseS1jbG91ZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBmb250LWZhbWlseTogXCJSdXd1ZHVcIiwgc2VyaWY7XG59XG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG4ubWFpbi1jb250ZW50LFxuLnRoaXMtd2Vlay1mb3JlY2FzdCxcbi5zaWRlLWJhci1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDI0LCAyNCwgMC44NSk7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXIgaDIge1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xufVxuLmhlYWRlciBoMiA+IGltZyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaGVhZGVyID4gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcbi5oZWFkZXIgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG4uaGVhZGVyID4gaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uaGVhZGVyID4gaW1nIHtcbiAgICBoZWlnaHQ6IDIycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDY2LjMlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXIgPiBpbWc6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuLmhlYWRlciA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyID4gc3Bhbi5jaXJjdWxhci1zaGFwZSB7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICAgIHdpZHRoOiAyM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDc1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Q0ZDRkNDtcbn1cbi5oZWFkZXIgPiBzcGFuLkMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDMzcHg7XG4gICAgcmlnaHQ6IDgzLjVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjMTcxMzEzZGY7XG4gICAgei1pbmRleDogMTA7XG59XG4uaGVhZGVyID4gc3Bhbi5GIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzM3B4O1xuICAgIHJpZ2h0OiA0Ny41cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcbn1cbi5oZWFkZXIgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMiwgMTgyLCAxMiwgMC45NTEpO1xufVxuLmhlYWRlciA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gc3Bhbi5jaXJjdWxhci1zaGFwZSB7XG4gICAgcmlnaHQ6IDM3cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDEyLCAxODIsIDEyLCAwLjk1MSk7XG59XG4uaGVhZGVyID4gaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBzcGFuLkYge1xuICAgIHJpZ2h0OiA0NXB4O1xufVxuLmhlYWRlciA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgc3Bhbi5DIHtcbiAgICByaWdodDogODJweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0b3A6IDMzcHg7XG59XG4uaGVhZGVyID4gLmVycm9yLWhhbmRsZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0My41JTtcbiAgICBib3R0b206IC0yMHB4O1xuICAgIHotaW5kZXg6IDk5O1xufVxuLndyYXBwZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NSUgMzUlO1xuICAgIHBhZGRpbmc6IDIwcHggMTEwcHg7XG4gICAgZ2FwOiAyNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jdXJyZW50LXdlYXRoZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5sb2NhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY3VycmVudC13ZWF0aGVyIC5sb2NhdGlvbiA+IGltZyB7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xufVxuLmN1cnJlbnQtd2VhdGhlciAubG9jYXRpb24gPiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmN1cnJlbnQtd2VhdGhlciA+IGRpdjpmaXJzdC1jaGlsZCA+IHAge1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwYmQ7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uY3VycmVudC13ZWF0aGVyLWljb24ge1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jdXJyZW50LXdlYXRoZXItaWNvbiBpbWcge1xuICAgIGhlaWdodDogNjhweDtcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB3aWR0aDogYXV0bztcbn1cbi5jdXJyZW50LXdlYXRoZXIgLmN1cnJlbnQtd2VhdGhlci1pY29uIGgxIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgZm9udC1zaXplOiAzLjFyZW07XG4gICAgY29sb3I6ICMwMDAwMDBjYTtcbn1cbi5jdXJyZW50LXdlYXRoZXIgaDIge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzAwMDAwMGRhO1xuICAgIG1hcmdpbi10b3A6IDMzcHg7XG4gICAgd2lkdGg6IGNsYW1wKDRjaCwgMTNjaCwgMTdjaCk7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmN1cnJlbnQtd2VhdGhlciBkaXY6bGFzdC1jaGlsZCBwIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmN1cnJlbnQtd2VhdGhlciBkaXY6bGFzdC1jaGlsZCBwOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmhvdXJseS13ZWF0aGVyLWZvcmVjYXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGdhcDogMTVweDtcbn1cbi5ob3VybHktd2VhdGhlci1mb3JlY2FzdCA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkIGdyYXk7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5ob3VybHktY2hhbmNlLW9mLXJhaW4gPiBpbWcsXG4uZGFpbHktY2hhbmNlLW9mLXJhaW4gPiBpbWcge1xuICAgIGhlaWdodDogMThweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIxJSk7XG59XG4uaG91cmx5LWNoYW5jZS1vZi1yYWluLFxuLmRhaWx5LWNoYW5jZS1vZi1yYWluIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvdXJseS13ZWF0aGVyLWZvcmVjYXN0IGRpdi5ob3VybHktY2hhbmNlLW9mLXJhaW4gPiBwLFxuLnRoaXMtd2Vlay1mb3JlY2FzdCBkaXYuZGFpbHktY2hhbmNlLW9mLXJhaW4gPiBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5zaWRlLWJhci1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGdhcDogLTVweDtcbn1cbi5zaWRlLWJhci1jb250ZW50ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDYwcHg7XG59XG4uc2lkZS1iYXItY29udGVudCBwID4gaW1nIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4uc2lkZS1iYXItY29udGVudCBkaXYgcDpmaXJzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBnYXA6IDEwcHg7XG59XG4uc2lkZS1iYXItY29udGVudCBkaXYgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRoaXMtd2Vlay1mb3JlY2FzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4udGhpcy13ZWVrLWZvcmVjYXN0ID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkb3R0ZWQgZ3JheTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG4udGhpcy13ZWVrLWZvcmVjYXN0ID4gZGl2Omxhc3QtY2hpbGQsXG4uaG91cmx5LXdlYXRoZXItZm9yZWNhc3QgPiBkaXY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLmhvdXJseS13ZWF0aGVyLWZvcmVjYXN0IHA6Zmlyc3Qtb2YtdHlwZSxcbi50aGlzLXdlZWstZm9yZWNhc3QgcDpmaXJzdC1vZi10eXBlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmxvYWRlci1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmxvYWRlciB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICB3aWR0aDogYXV0bztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lB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QkFBa0I7SUFDbEIsYUFBYTtJQUNiLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxZQUFZO0lBQ1osMkJBQTJCO0FBQy9CO0FBQ0E7O0lBRUksb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksWUFBWTtBQUNoQjtBQUNBOztJQUVJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLE9BQU87SUFDUCxNQUFNO0lBQ04sYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSdXd1ZHVcXFwiLCBzZXJpZjtcXG59XFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG59XFxuLm1haW4tY29udGVudCxcXG4udGhpcy13ZWVrLWZvcmVjYXN0LFxcbi5zaWRlLWJhci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjcsIDI0LCAyNCwgMC44NSk7XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNXB4IDQwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmhlYWRlciBoMiB7XFxuICAgIG1hcmdpbi10b3A6IDM1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuLmhlYWRlciBoMiA+IGltZyB7XFxuICAgIGhlaWdodDogNTBweDtcXG59XFxuXFxuLmhlYWRlciA+IGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdLFxcbi5oZWFkZXIgPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVGltZXMgTmV3IFJvbWFuXFxcIiwgVGltZXMsIHNlcmlmO1xcbn1cXG4uaGVhZGVyID4gaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuLmhlYWRlciA+IGltZyB7XFxuICAgIGhlaWdodDogMjJweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA2Ni4zJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaGVhZGVyID4gaW1nOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4uaGVhZGVyID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhlYWRlciA+IHNwYW4uY2lyY3VsYXItc2hhcGUge1xcbiAgICBoZWlnaHQ6IDIzcHg7XFxuICAgIHdpZHRoOiAyM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDc1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2Q0ZDRkNDtcXG59XFxuLmhlYWRlciA+IHNwYW4uQyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzM3B4O1xcbiAgICByaWdodDogODMuNXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICMxNzEzMTNkZjtcXG4gICAgei1pbmRleDogMTA7XFxufVxcbi5oZWFkZXIgPiBzcGFuLkYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMzNweDtcXG4gICAgcmlnaHQ6IDQ3LjVweDtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuLmhlYWRlciA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIsIDE4MiwgMTIsIDAuOTUxKTtcXG59XFxuLmhlYWRlciA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCB+IHNwYW4uY2lyY3VsYXItc2hhcGUge1xcbiAgICByaWdodDogMzdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgxMiwgMTgyLCAxMiwgMC45NTEpO1xcbn1cXG4uaGVhZGVyID4gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gc3Bhbi5GIHtcXG4gICAgcmlnaHQ6IDQ1cHg7XFxufVxcbi5oZWFkZXIgPiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBzcGFuLkMge1xcbiAgICByaWdodDogODJweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRvcDogMzNweDtcXG59XFxuLmhlYWRlciA+IC5lcnJvci1oYW5kbGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiA0My41JTtcXG4gICAgYm90dG9tOiAtMjBweDtcXG4gICAgei1pbmRleDogOTk7XFxufVxcbi53cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2NSUgMzUlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDExMHB4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1haW4tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jdXJyZW50LXdlYXRoZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pY29ucy9wYXJ0bHktY2xvdWQuanBnKTtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4ubG9jYXRpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmN1cnJlbnQtd2VhdGhlciAubG9jYXRpb24gPiBpbWcge1xcbiAgICBoZWlnaHQ6IDI4cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAlKTtcXG59XFxuLmN1cnJlbnQtd2VhdGhlciAubG9jYXRpb24gPiBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmN1cnJlbnQtd2VhdGhlciA+IGRpdjpmaXJzdC1jaGlsZCA+IHAge1xcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcXG4gICAgY29sb3I6ICMwMDAwMDBiZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5jdXJyZW50LXdlYXRoZXItaWNvbiB7XFxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY3VycmVudC13ZWF0aGVyLWljb24gaW1nIHtcXG4gICAgaGVpZ2h0OiA2OHB4O1xcbiAgICAvKiBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG4uY3VycmVudC13ZWF0aGVyIC5jdXJyZW50LXdlYXRoZXItaWNvbiBoMSB7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi10b3A6IDYwcHg7XFxuICAgIGZvbnQtc2l6ZTogMy4xcmVtO1xcbiAgICBjb2xvcjogIzAwMDAwMGNhO1xcbn1cXG4uY3VycmVudC13ZWF0aGVyIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGNvbG9yOiAjMDAwMDAwZGE7XFxuICAgIG1hcmdpbi10b3A6IDMzcHg7XFxuICAgIHdpZHRoOiBjbGFtcCg0Y2gsIDEzY2gsIDE3Y2gpO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmN1cnJlbnQtd2VhdGhlciBkaXY6bGFzdC1jaGlsZCBwIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxufVxcbi5jdXJyZW50LXdlYXRoZXIgZGl2Omxhc3QtY2hpbGQgcDpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XFxufVxcbi5ob3VybHktd2VhdGhlci1mb3JlY2FzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG4uaG91cmx5LXdlYXRoZXItZm9yZWNhc3QgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkIGdyYXk7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxufVxcbi5ob3VybHktY2hhbmNlLW9mLXJhaW4gPiBpbWcsXFxuLmRhaWx5LWNoYW5jZS1vZi1yYWluID4gaW1nIHtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIxJSk7XFxufVxcbi5ob3VybHktY2hhbmNlLW9mLXJhaW4sXFxuLmRhaWx5LWNoYW5jZS1vZi1yYWluIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob3VybHktd2VhdGhlci1mb3JlY2FzdCBkaXYuaG91cmx5LWNoYW5jZS1vZi1yYWluID4gcCxcXG4udGhpcy13ZWVrLWZvcmVjYXN0IGRpdi5kYWlseS1jaGFuY2Utb2YtcmFpbiA+IHAge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5zaWRlLWJhci1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICBnYXA6IC01cHg7XFxufVxcbi5zaWRlLWJhci1jb250ZW50ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcbi5zaWRlLWJhci1jb250ZW50IHAgPiBpbWcge1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5zaWRlLWJhci1jb250ZW50IGRpdiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG4uc2lkZS1iYXItY29udGVudCBkaXYgcCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLnRoaXMtd2Vlay1mb3JlY2FzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi50aGlzLXdlZWstZm9yZWNhc3QgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZG90dGVkIGdyYXk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG4udGhpcy13ZWVrLWZvcmVjYXN0ID4gZGl2Omxhc3QtY2hpbGQsXFxuLmhvdXJseS13ZWF0aGVyLWZvcmVjYXN0ID4gZGl2Omxhc3QtY2hpbGQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcbi5ob3VybHktd2VhdGhlci1mb3JlY2FzdCBwOmZpcnN0LW9mLXR5cGUsXFxuLnRoaXMtd2Vlay1mb3JlY2FzdCBwOmZpcnN0LW9mLXR5cGUge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmxvYWRlci1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4ubG9hZGVyIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNsZWFyU2t5IGZyb20gXCIuL2ljb25zL2NsZWFyLXNreS5qcGdcIjtcbmltcG9ydCBjbG91ZHkgZnJvbSBcIi4vaWNvbnMvY2xvdWR5LmpwZ1wiO1xuaW1wb3J0IHBhcnRseUNsb3VkIGZyb20gXCIuL2ljb25zL3BhcnRseS1jbG91ZC5qcGdcIjtcbmltcG9ydCByYWlueSBmcm9tIFwiLi9pY29ucy9yYWluLmpwZ1wiO1xuaW1wb3J0IHN0b3JteVJhaW4gZnJvbSBcIi4vaWNvbnMvc3Rvcm15LXJhaW4uanBnXCI7XG5pbXBvcnQgc3Bpbm5lciBmcm9tIFwiLi9pY29ucy9TcGlubmVyLmdpZlwiO1xuaW1wb3J0IG1hZ25pZnlpbmdHbGFzcyBmcm9tIFwiLi9pY29ucy9tYWduaWZ5aW5nLWdsYXNzLTEwLXN2Z3JlcG8tY29tLnN2Z1wiO1xuaW1wb3J0IHsgcmVuZGVyRGFpbHlXZWF0aGVyRm9yZWNhc3RGb3JzZXZlbkRheXMgfSBmcm9tIFwiLi9kYWlseV93ZWF0aGVyX2ZvcmVjYXN0XCI7XG5pbXBvcnQgeyByZW5kZXJDdXJyZW50V2VhdGhlckluZm8gfSBmcm9tIFwiLi9jdXJyZW50X3dlYXRoZXJcIjtcbmltcG9ydCB7IHJlbmRlckhvdXJseVdlYXRoZXJGb3JlY2FzdCB9IGZyb20gXCIuL2hvdXJseV93ZWF0aGVyX2ZvcmVjYXN0XCI7XG5pbXBvcnQgeyBwcm92aWRlRXh0cmFJbmZvIH0gZnJvbSBcIi4vc2lkZV9iYXJfbm90ZXNcIjtcblxubGV0IHVuaXQgPSBcIkNlbHNpdXNcIjtcbmxldCBjaXR5ID0gXCJTZWF0dGxlXCI7XG5cbmNvbnN0IGdldEN1cnJlbnRXZWF0aGVyID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgICBjb25zdCBlcnJvckhhbmRsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yLWhhbmRsZXJcIik7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RXZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT03NWQwZmM4ODhkNWY0NjZiODg1MTQ0NjU0MjMxMTA4JnE9JHtjaXR5fSZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ub2AsXG4gICAgICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBwYXJzZWRGb3JlY2FzdFdlYXRoZXIgPSBhd2FpdCBmb3JlY2FzdFdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gcGFyc2VkRm9yZWNhc3RXZWF0aGVyLmN1cnJlbnQ7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0V2VhdGhlciA9IHBhcnNlZEZvcmVjYXN0V2VhdGhlci5mb3JlY2FzdDtcbiAgICAgICAgY29uc3QgbG9jYXRpb25EZXRhaWxzID0gcGFyc2VkRm9yZWNhc3RXZWF0aGVyLmxvY2F0aW9uO1xuXG4gICAgICAgIHNldFdlYXRoZXJEZXNjcmliaW5nQmFja2dyb3VuZChcbiAgICAgICAgICAgIHBhcnNlZEZvcmVjYXN0V2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0XG4gICAgICAgICk7XG4gICAgICAgIGVycm9ySGFuZGxlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIHJlbmRlckN1cnJlbnRXZWF0aGVySW5mbyhcbiAgICAgICAgICAgIGN1cnJlbnRXZWF0aGVyLFxuICAgICAgICAgICAgZm9yZWNhc3RXZWF0aGVyLFxuICAgICAgICAgICAgbG9jYXRpb25EZXRhaWxzLFxuICAgICAgICAgICAgdW5pdFxuICAgICAgICApO1xuICAgICAgICBwcm92aWRlRXh0cmFJbmZvKGN1cnJlbnRXZWF0aGVyLCBmb3JlY2FzdFdlYXRoZXIsIGxvY2F0aW9uRGV0YWlscyk7XG4gICAgICAgIHJlbmRlckhvdXJseVdlYXRoZXJGb3JlY2FzdChmb3JlY2FzdFdlYXRoZXIsIHVuaXQpO1xuICAgICAgICByZW5kZXJEYWlseVdlYXRoZXJGb3JlY2FzdEZvcnNldmVuRGF5cyhmb3JlY2FzdFdlYXRoZXIsIHVuaXQpO1xuICAgICAgICBjdXJyZW50V2VhdGhlci50ZW1wX2NcbiAgICAgICAgICAgID8gaGlkZVNob3dMb2FkZXIoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIDogaGlkZVNob3dMb2FkZXIoXCJ2aXNpYmxlXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGVycm9ySGFuZGxlci50ZXh0Q29udGVudCA9IFwi4pqg77iOIExvY2F0aW9uIG5vdCBmb3VuZFwiO1xuICAgIH1cbiAgICBnZXRVc2VyU2VhcmNoTG9jYXRpb24oKS5hZGp1c3RTZWFyY2hpbmdFbGVtZW50cyhcbiAgICAgICAgbWFnbmlmeWluZ0dsYXNzLFxuICAgICAgICBcImJsYWNrXCIsXG4gICAgICAgIFwiXCJcbiAgICApO1xufTtcblxuY29uc3QgZ2V0VXNlclNlYXJjaExvY2F0aW9uID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hZ25pZnlpbmctZ2xhc3NcIik7XG5cbiAgICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNpdHkgPSBzZWFyY2hJY29uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcudmFsdWU7XG4gICAgICAgIGdldEN1cnJlbnRXZWF0aGVyKGNpdHksIHVuaXQpO1xuICAgICAgICBhZGp1c3RTZWFyY2hpbmdFbGVtZW50cyhzcGlubmVyLCBcInJnYmEoMCwwLDAsLjUpXCIsIGNpdHkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRqdXN0U2VhcmNoaW5nRWxlbWVudHMgPSAoaWNvbiwgY29sb3IsIHZhbHVlKSA9PiB7XG4gICAgICAgIHNlYXJjaEljb24uc3JjID0gaWNvbjtcbiAgICAgICAgc2VhcmNoSWNvbi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHNlYXJjaEljb24ucHJldmlvdXNFbGVtZW50U2libGluZy52YWx1ZSA9IHZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBhZGp1c3RTZWFyY2hpbmdFbGVtZW50cyB9O1xufTtcblxuY29uc3Qgc2V0V2VhdGhlckRlc2NyaWJpbmdCYWNrZ3JvdW5kID0gKGNvbmRpdGlvbikgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJyZW50LXdlYXRoZXJcIik7XG4gICAgaWYgKC9yYWluL2kudGVzdChjb25kaXRpb24pICYmIC9zdG9ybS9pLnRlc3QoY29uZGl0aW9uKSkge1xuICAgICAgICBjdXJyZW50V2VhdGhlci5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3N0b3JteVJhaW59KWA7XG4gICAgfSBlbHNlIGlmICgvY2xvdWQvaS50ZXN0KGNvbmRpdGlvbikgfHwgL292ZXJjYXN0L2kudGVzdChjb25kaXRpb24pKSB7XG4gICAgICAgIGN1cnJlbnRXZWF0aGVyLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7Y2xvdWR5fSlgO1xuICAgIH0gZWxzZSBpZiAoL3JhaW4vaS50ZXN0KGNvbmRpdGlvbikpIHtcbiAgICAgICAgY3VycmVudFdlYXRoZXIuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtyYWlueX0pYDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50V2VhdGhlci5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3BhcnRseUNsb3VkfSlgO1xuICAgIH1cbn07XG5cbmNvbnN0IGNoYW5nZVRlbXBVbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIlt0eXBlPSdjaGVja2JveCddXCIpO1xuICAgIGNvbnN0IGNpcmN1bGFyU3dpdGNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXJjdWxhci1zaGFwZVwiKTtcbiAgICBjaGVja0JveC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjbGlja0V2ZW50cyA9ICgpID0+IHtcbiAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGVja0JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdW5pdCA9IFwiRmFocmVuaGVpdFwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bml0ID0gXCJDZWxzaXVzXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRDdXJyZW50V2VhdGhlcihjaXR5LCB1bml0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNpcmN1bGFyU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjaGVja0JveC5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2lyY3VsYXJTd2l0Y2gubmV4dEVsZW1lbnRTaWJsaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjaGVja0JveC5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICAgICAgY2lyY3VsYXJTd2l0Y2gucHJldmlvdXNFbGVtZW50U2libGluZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY2hlY2tCb3guY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNsaWNrRXZlbnRzKCk7XG59O1xuY29uc3QgaGlkZVNob3dMb2FkZXIgPSAodmFsdWUpID0+IHtcbiAgICBjb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlci1jb250YWluZXJcIik7XG4gICAgbG9hZGVyLnN0eWxlLnZpc2liaWxpdHkgPSB2YWx1ZTtcbn07XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgZ2V0Q3VycmVudFdlYXRoZXIoY2l0eSk7XG4gICAgZ2V0VXNlclNlYXJjaExvY2F0aW9uKCk7XG4gICAgY2hhbmdlVGVtcFVuaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJjb25jYXQiLCJsZW5ndGgiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYSIsImRlZHVwZSIsInN1cHBvcnRzIiwibGF5ZXIiLCJ1bmRlZmluZWQiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiayIsImlkIiwiX2siLCJwdXNoIiwidXJsIiwib3B0aW9ucyIsIlN0cmluZyIsIl9fZXNNb2R1bGUiLCJ0ZXN0Iiwic2xpY2UiLCJoYXNoIiwibmVlZFF1b3RlcyIsInJlcGxhY2UiLCJjc3NNYXBwaW5nIiwiYnRvYSIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiYWRkTGVhZGluZ1plcm9zIiwibnVtYmVyIiwidGFyZ2V0TGVuZ3RoIiwic2lnbiIsIm91dHB1dCIsIk1hdGgiLCJhYnMiLCJkZWZhdWx0TG9jYWxlIiwiZGVmYXVsdE9wdGlvbnMiLCJnZXREZWZhdWx0T3B0aW9ucyIsInNldERlZmF1bHRPcHRpb25zIiwibmV3T3B0aW9ucyIsImdldFVUQ0RheU9mWWVhciIsImdldFVUQ0lTT1dlZWsiLCJnZXRVVENJU09XZWVrWWVhciIsImdldFVUQ1dlZWsiLCJnZXRVVENXZWVrWWVhciIsImxpZ2h0Rm9ybWF0dGVycyIsImRheVBlcmlvZEVudW0iLCJhbSIsInBtIiwibWlkbmlnaHQiLCJub29uIiwibW9ybmluZyIsImFmdGVybm9vbiIsImV2ZW5pbmciLCJuaWdodCIsImZvcm1hdHRlcnMiLCJHIiwiZGF0ZSIsInRva2VuIiwibG9jYWxpemUiLCJlcmEiLCJnZXRVVENGdWxsWWVhciIsIndpZHRoIiwieSIsInNpZ25lZFllYXIiLCJ5ZWFyIiwib3JkaW5hbE51bWJlciIsInVuaXQiLCJZIiwic2lnbmVkV2Vla1llYXIiLCJ3ZWVrWWVhciIsInR3b0RpZ2l0WWVhciIsIlIiLCJpc29XZWVrWWVhciIsInUiLCJRIiwicXVhcnRlciIsImNlaWwiLCJnZXRVVENNb250aCIsImNvbnRleHQiLCJxIiwiTSIsIm1vbnRoIiwiTCIsInciLCJ3ZWVrIiwiSSIsImlzb1dlZWsiLCJkIiwiZ2V0VVRDRGF0ZSIsIkQiLCJkYXlPZlllYXIiLCJFIiwiZGF5T2ZXZWVrIiwiZ2V0VVRDRGF5IiwiZGF5IiwiZSIsImxvY2FsRGF5T2ZXZWVrIiwid2Vla1N0YXJ0c09uIiwiYyIsImlzb0RheU9mV2VlayIsImEiLCJob3VycyIsImdldFVUQ0hvdXJzIiwiZGF5UGVyaW9kRW51bVZhbHVlIiwiZGF5UGVyaW9kIiwidG9Mb3dlckNhc2UiLCJiIiwiQiIsImgiLCJIIiwiSyIsIm0iLCJnZXRVVENNaW51dGVzIiwicyIsImdldFVUQ1NlY29uZHMiLCJTIiwiWCIsIl9sb2NhbGl6ZSIsIm9yaWdpbmFsRGF0ZSIsIl9vcmlnaW5hbERhdGUiLCJ0aW1lem9uZU9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0IiwiZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzIiwiZm9ybWF0VGltZXpvbmUiLCJ4IiwiTyIsImZvcm1hdFRpbWV6b25lU2hvcnQiLCJ6IiwidCIsInRpbWVzdGFtcCIsImZsb29yIiwiZ2V0VGltZSIsIlQiLCJvZmZzZXQiLCJkaXJ0eURlbGltaXRlciIsImFic09mZnNldCIsIm1pbnV0ZXMiLCJkZWxpbWl0ZXIiLCJ0b1VwcGVyQ2FzZSIsIm51bWJlck9mRGlnaXRzIiwibWlsbGlzZWNvbmRzIiwiZ2V0VVRDTWlsbGlzZWNvbmRzIiwiZnJhY3Rpb25hbFNlY29uZHMiLCJwb3ciLCJkYXRlTG9uZ0Zvcm1hdHRlciIsInBhdHRlcm4iLCJmb3JtYXRMb25nIiwidGltZUxvbmdGb3JtYXR0ZXIiLCJ0aW1lIiwiZGF0ZVRpbWVMb25nRm9ybWF0dGVyIiwibWF0Y2hSZXN1bHQiLCJtYXRjaCIsImRhdGVQYXR0ZXJuIiwidGltZVBhdHRlcm4iLCJkYXRlVGltZUZvcm1hdCIsImRhdGVUaW1lIiwibG9uZ0Zvcm1hdHRlcnMiLCJwIiwiUCIsImdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMiLCJ1dGNEYXRlIiwiRGF0ZSIsIlVUQyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsInNldFVUQ0Z1bGxZZWFyIiwidG9EYXRlIiwicmVxdWlyZWRBcmdzIiwiTUlMTElTRUNPTkRTX0lOX0RBWSIsImRpcnR5RGF0ZSIsImFyZ3VtZW50cyIsInNldFVUQ01vbnRoIiwic2V0VVRDSG91cnMiLCJzdGFydE9mWWVhclRpbWVzdGFtcCIsImRpZmZlcmVuY2UiLCJzdGFydE9mVVRDSVNPV2VlayIsInN0YXJ0T2ZVVENJU09XZWVrWWVhciIsIk1JTExJU0VDT05EU19JTl9XRUVLIiwiZGlmZiIsInJvdW5kIiwiZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciIsInN0YXJ0T2ZOZXh0WWVhciIsImZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIiLCJzdGFydE9mVGhpc1llYXIiLCJzdGFydE9mVVRDV2VlayIsInN0YXJ0T2ZVVENXZWVrWWVhciIsInRvSW50ZWdlciIsIl9yZWYiLCJfcmVmMiIsIl9yZWYzIiwiX29wdGlvbnMkZmlyc3RXZWVrQ29uIiwiX29wdGlvbnMkbG9jYWxlIiwiX29wdGlvbnMkbG9jYWxlJG9wdGlvIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMiIsImZpcnN0V2Vla0NvbnRhaW5zRGF0ZSIsImxvY2FsZSIsIlJhbmdlRXJyb3IiLCJmaXJzdFdlZWtPZk5leHRZZWFyIiwiZmlyc3RXZWVrT2ZUaGlzWWVhciIsInByb3RlY3RlZERheU9mWWVhclRva2VucyIsInByb3RlY3RlZFdlZWtZZWFyVG9rZW5zIiwiaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiIsImluZGV4T2YiLCJpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4iLCJ0aHJvd1Byb3RlY3RlZEVycm9yIiwiZm9ybWF0IiwiaW5wdXQiLCJyZXF1aXJlZCIsImFyZ3MiLCJUeXBlRXJyb3IiLCJzZXRVVENEYXRlIiwiZm91cnRoT2ZKYW51YXJ5IiwiX29wdGlvbnMkd2Vla1N0YXJ0c09uIiwiZmlyc3RXZWVrIiwiZGlydHlOdW1iZXIiLCJOYU4iLCJOdW1iZXIiLCJpc05hTiIsImFkZE1pbGxpc2Vjb25kcyIsImRpcnR5QW1vdW50IiwiYW1vdW50IiwiaXNWYWxpZCIsInN1Yk1pbGxpc2Vjb25kcyIsImZvcm1hdHRpbmdUb2tlbnNSZWdFeHAiLCJsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImVzY2FwZWRTdHJpbmdSZWdFeHAiLCJkb3VibGVRdW90ZVJlZ0V4cCIsInVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwIiwiZGlydHlGb3JtYXRTdHIiLCJfcmVmNCIsIl9vcHRpb25zJGxvY2FsZTIiLCJfb3B0aW9ucyRsb2NhbGUyJG9wdGkiLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJfb3B0aW9ucyRsb2NhbGUzIiwiX29wdGlvbnMkbG9jYWxlMyRvcHRpIiwiX2RlZmF1bHRPcHRpb25zJGxvY2FsMyIsIl9kZWZhdWx0T3B0aW9ucyRsb2NhbDQiLCJmb3JtYXRTdHIiLCJmb3JtYXR0ZXJPcHRpb25zIiwicmVzdWx0Iiwic3Vic3RyaW5nIiwiZmlyc3RDaGFyYWN0ZXIiLCJsb25nRm9ybWF0dGVyIiwiY2xlYW5Fc2NhcGVkU3RyaW5nIiwiZm9ybWF0dGVyIiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyIsIm1hdGNoZWQiLCJfdHlwZW9mIiwiaXNEYXRlIiwidmFsdWUiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwic3RhcnRPZkRheSIsImlzU2FtZURheSIsImRpcnR5RGF0ZUxlZnQiLCJkaXJ0eURhdGVSaWdodCIsImRhdGVMZWZ0U3RhcnRPZkRheSIsImRhdGVSaWdodFN0YXJ0T2ZEYXkiLCJpc1RvZGF5Iiwibm93IiwiYnVpbGRGb3JtYXRMb25nRm4iLCJkZWZhdWx0V2lkdGgiLCJmb3JtYXRzIiwiYnVpbGRMb2NhbGl6ZUZuIiwiZGlydHlJbmRleCIsInZhbHVlc0FycmF5IiwiZm9ybWF0dGluZ1ZhbHVlcyIsImRlZmF1bHRGb3JtYXR0aW5nV2lkdGgiLCJfZGVmYXVsdFdpZHRoIiwiX3dpZHRoIiwidmFsdWVzIiwiaW5kZXgiLCJhcmd1bWVudENhbGxiYWNrIiwiYnVpbGRNYXRjaEZuIiwic3RyaW5nIiwibWF0Y2hQYXR0ZXJuIiwibWF0Y2hQYXR0ZXJucyIsImRlZmF1bHRNYXRjaFdpZHRoIiwibWF0Y2hlZFN0cmluZyIsInBhcnNlUGF0dGVybnMiLCJkZWZhdWx0UGFyc2VXaWR0aCIsImtleSIsIkFycmF5IiwiaXNBcnJheSIsImZpbmRJbmRleCIsImZpbmRLZXkiLCJ2YWx1ZUNhbGxiYWNrIiwicmVzdCIsIm9iamVjdCIsInByZWRpY2F0ZSIsImhhc093blByb3BlcnR5IiwiYXJyYXkiLCJidWlsZE1hdGNoUGF0dGVybkZuIiwicGFyc2VSZXN1bHQiLCJwYXJzZVBhdHRlcm4iLCJmb3JtYXREaXN0YW5jZUxvY2FsZSIsImxlc3NUaGFuWFNlY29uZHMiLCJvbmUiLCJvdGhlciIsInhTZWNvbmRzIiwiaGFsZkFNaW51dGUiLCJsZXNzVGhhblhNaW51dGVzIiwieE1pbnV0ZXMiLCJhYm91dFhIb3VycyIsInhIb3VycyIsInhEYXlzIiwiYWJvdXRYV2Vla3MiLCJ4V2Vla3MiLCJhYm91dFhNb250aHMiLCJ4TW9udGhzIiwiYWJvdXRYWWVhcnMiLCJ4WWVhcnMiLCJvdmVyWFllYXJzIiwiYWxtb3N0WFllYXJzIiwiZm9ybWF0RGlzdGFuY2UiLCJjb3VudCIsInRva2VuVmFsdWUiLCJhZGRTdWZmaXgiLCJjb21wYXJpc29uIiwiZGF0ZUZvcm1hdHMiLCJmdWxsIiwibWVkaXVtIiwidGltZUZvcm1hdHMiLCJkYXRlVGltZUZvcm1hdHMiLCJmb3JtYXRSZWxhdGl2ZUxvY2FsZSIsImxhc3RXZWVrIiwieWVzdGVyZGF5IiwidG9kYXkiLCJ0b21vcnJvdyIsIm5leHRXZWVrIiwiZm9ybWF0UmVsYXRpdmUiLCJfZGF0ZSIsIl9iYXNlRGF0ZSIsIl9vcHRpb25zIiwiZXJhVmFsdWVzIiwibmFycm93IiwiYWJicmV2aWF0ZWQiLCJ3aWRlIiwicXVhcnRlclZhbHVlcyIsIm1vbnRoVmFsdWVzIiwiZGF5VmFsdWVzIiwiZGF5UGVyaW9kVmFsdWVzIiwiZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyIsInJlbTEwMCIsIm1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4iLCJwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuIiwibWF0Y2hFcmFQYXR0ZXJucyIsInBhcnNlRXJhUGF0dGVybnMiLCJhbnkiLCJtYXRjaFF1YXJ0ZXJQYXR0ZXJucyIsInBhcnNlUXVhcnRlclBhdHRlcm5zIiwibWF0Y2hNb250aFBhdHRlcm5zIiwicGFyc2VNb250aFBhdHRlcm5zIiwibWF0Y2hEYXlQYXR0ZXJucyIsInBhcnNlRGF5UGF0dGVybnMiLCJtYXRjaERheVBlcmlvZFBhdHRlcm5zIiwicGFyc2VEYXlQZXJpb2RQYXR0ZXJucyIsInBhcnNlSW50IiwiY29kZSIsInNldEhvdXJzIiwiYXJndW1lbnQiLCJhcmdTdHIiLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwic3RhY2siLCJyZW5kZXJDdXJyZW50V2VhdGhlckluZm8iLCJjdXJyZW50IiwiZnV0dXJlIiwibG9jYXRpb25JbmZvIiwid3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1cnJlbnRXZWF0aGVyQm9hcmQiLCJsb2NhdGlvbiIsIndlYXRoZXJEZXNjcmlwdGlvbiIsInRlbXBBdFRoZU1vbWVudCIsInBhdGgiLCJjb25kaXRpb24iLCJpY29uIiwibGFzdEVsZW1lbnRDaGlsZCIsInRleHRDb250ZW50IiwibmFtZSIsImNvdW50cnkiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJsYXN0X3VwZGF0ZWQiLCJ0ZXh0IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzcmMiLCJkYXRhSW5GYWhyZW5oZWl0IiwiZGF0YUluQ2Vsc2l1cyIsInRlbXBfYyIsImZlZWxzbGlrZV9jIiwiZm9yZWNhc3RkYXkiLCJtaW50ZW1wX2MiLCJtYXh0ZW1wX2MiLCJ0ZW1wX2YiLCJmZWVsc2xpa2VfZiIsIm1pbnRlbXBfZiIsIm1heHRlbXBfZiIsInJhaW5Ecm9wIiwicmVuZGVyRGFpbHlXZWF0aGVyRm9yZWNhc3RGb3JzZXZlbkRheXMiLCJ0aGlzV2Vla0ZvcmVjYXN0IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiZm9yRWFjaCIsIm1haW5Db250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiZGF5TmFtZSIsInN1YkNvbnRhaW5lciIsInJhaW5Ecm9wSWNvbiIsInJhaW5pbmdQcm9iYWJsaXR5IiwicHJlZGljYXRlZFRlbXBJY29uIiwicHJlZGljYXRlZE1pbk1heFRlbXAiLCJjbGFzc05hbWUiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsImFwcGVuZENoaWxkIiwicmVuZGVySG91cmx5V2VhdGhlckZvcmVjYXN0IiwiaG91cmx5V2VhdGhlckZvcmNhc3QiLCJob3VyIiwicHJlZGljYXRlZFRlbXAiLCJjaGFuY2Vfb2ZfcmFpbiIsInByb3ZpZGVFeHRyYUluZm8iLCJzaWRlQmFyQ29udGVudCIsImNpdHlOYW1lIiwiY291bnRyeU5hbWUiLCJ3aW5kU3BlZWQiLCJ1dkluZGV4IiwiaHVtaWRpdHkiLCJzdW5SaXNlIiwic3VuU2V0IiwidGltZVpvbmUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIndpbmRfa3BoIiwidXYiLCJhc3RybyIsInN1bnJpc2UiLCJzdW5zZXQiLCJ0el9pZCIsImxhdCIsImxvbiIsIm9iaiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiT3AiLCJoYXNPd24iLCJkZWZpbmVQcm9wZXJ0eSIsImRlc2MiLCIkU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yU3ltYm9sIiwiYXN5bmNJdGVyYXRvciIsInRvU3RyaW5nVGFnU3ltYm9sIiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJlcnIiLCJ3cmFwIiwiaW5uZXJGbiIsIm91dGVyRm4iLCJzZWxmIiwidHJ5TG9jc0xpc3QiLCJwcm90b0dlbmVyYXRvciIsIkdlbmVyYXRvciIsImdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJDb250aW51ZVNlbnRpbmVsIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsIkl0ZXJhdG9yUHJvdG90eXBlIiwiZ2V0UHJvdG8iLCJnZXRQcm90b3R5cGVPZiIsIk5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlIiwiR3AiLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiZG9uZSIsImRlbGVnYXRlIiwiZGVsZWdhdGVSZXN1bHQiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJtZXRob2ROYW1lIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yTWV0aG9kIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiZ2VuRnVuIiwiY3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwiaXRlciIsImtleXMiLCJ2YWwiLCJyZXZlcnNlIiwicG9wIiwic2tpcFRlbXBSZXNldCIsInByZXYiLCJjaGFyQXQiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJfbmV4dCIsIl90aHJvdyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJjbGVhclNreSIsImNsb3VkeSIsInBhcnRseUNsb3VkIiwicmFpbnkiLCJzdG9ybXlSYWluIiwic3Bpbm5lciIsIm1hZ25pZnlpbmdHbGFzcyIsImNpdHkiLCJnZXRDdXJyZW50V2VhdGhlciIsIl9jYWxsZWUiLCJlcnJvckhhbmRsZXIiLCJmb3JlY2FzdFdlYXRoZXJSZXNwb25zZSIsInBhcnNlZEZvcmVjYXN0V2VhdGhlciIsImN1cnJlbnRXZWF0aGVyIiwiZm9yZWNhc3RXZWF0aGVyIiwibG9jYXRpb25EZXRhaWxzIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImZldGNoIiwibW9kZSIsImpzb24iLCJmb3JlY2FzdCIsInNldFdlYXRoZXJEZXNjcmliaW5nQmFja2dyb3VuZCIsImhpZGVTaG93TG9hZGVyIiwidDAiLCJnZXRVc2VyU2VhcmNoTG9jYXRpb24iLCJhZGp1c3RTZWFyY2hpbmdFbGVtZW50cyIsIl94Iiwic2VhcmNoSWNvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwiY29sb3IiLCJzdHlsZSIsImNzc1RleHQiLCJjaGFuZ2VUZW1wVW5pdCIsImNoZWNrQm94IiwiY2lyY3VsYXJTd2l0Y2giLCJjaGVja2VkIiwiY2xpY2tFdmVudHMiLCJjbGljayIsImxvYWRlciIsInZpc2liaWxpdHkiXSwic291cmNlUm9vdCI6IiJ9