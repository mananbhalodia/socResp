"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {

  /* map object */
  mapo: function mapo(object, callback) {
    return Object.keys(object).map(function (key) {
      return callback(key, object[key]);
    });
  }

};
module.exports = exports["default"];