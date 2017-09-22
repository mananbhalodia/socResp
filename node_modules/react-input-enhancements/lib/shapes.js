'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ITEM_OR_STRING = exports.ITEM = undefined;

var _react = require('react');

var shape = _react.PropTypes.shape;
var oneOfType = _react.PropTypes.oneOfType;
var string = _react.PropTypes.string;
var any = _react.PropTypes.any;
var ITEM = exports.ITEM = shape({
  text: string,
  label: any,
  value: any
});

var ITEM_OR_STRING = exports.ITEM_OR_STRING = oneOfType([ITEM, string]);