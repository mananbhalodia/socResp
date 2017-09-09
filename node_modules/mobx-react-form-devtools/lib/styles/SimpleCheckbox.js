'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _ = require('./_.theme');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  label: (0, _glamor.style)({
    'display': 'block',
    'fontSize': '15px',
    'padding': '0 0 0 20px',
    'margin': '0',
    'color': _2.default.base04,
    ':hover': {
      color: _2.default.base0B
    }
  }),
  input: (0, _glamor.style)({
    margin: '0 5px 0 0'
  })
};
module.exports = exports['default'];