'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

exports.default = {
  clearfix: (0, _glamor.style)({
    overflow: 'auto',
    zoom: 1
  }),
  hidden: (0, _glamor.style)({
    display: 'none !important'
  }),
  left: (0, _glamor.style)({
    float: 'left'
  }),
  rigth: (0, _glamor.style)({
    float: 'right'
  }),
  button: (0, _glamor.style)({
    border: 0,
    margin: 0,
    padding: 0,
    cursor: 'pointer',
    background: 'transparent'
  })
};
module.exports = exports['default'];