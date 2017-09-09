'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _ = require('./_.theme');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  icon: (0, _glamor.style)({
    color: _2.default.base0A
  }),
  btn: (0, _glamor.style)({
    'margin': 0,
    'width': '100%',
    'color': _2.default.base04,
    'display': 'block',
    'padding': '15px 30px',
    'fontSize': '16px',
    'textAlign': 'left',
    'letterSpacing': '3px',
    ':hover': {
      background: _2.default.base01
    }
  })
};
module.exports = exports['default'];