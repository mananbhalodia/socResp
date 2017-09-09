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
    fontSize: '15px'
  }),
  dragIcon: (0, _glamor.style)({
    fontSize: '22px',
    color: _2.default.base04
  }),
  draggable: (0, _glamor.style)({
    padding: '5px 5px 7px 5px',
    background: _2.default.base00,
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px'
  }),
  btn: (0, _glamor.style)({
    'display': 'block',
    'width': '20px',
    'height': '20px',
    'padding': 0,
    'margin': '4px 0 0 1px',
    'background': _2.default.base0B,
    'borderRadius': '2px',
    ':hover': {
      background: _2.default.base0A
    }
  })
};
module.exports = exports['default'];