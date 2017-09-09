'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _ = require('./_.theme');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  btn: (0, _glamor.style)({
    float: 'right',
    margin: '-3px'
  }),
  icon: (0, _glamor.style)({
    'fontSize': '22px',
    'color': _2.default.base0B,
    'paddingRight': '10px',
    ':hover': {
      color: _2.default.base0A
    }
  }),
  hli: (0, _glamor.style)({
    color: _2.default.base0D,
    paddingLeft: '25px'
  }),
  hlb: (0, _glamor.style)({
    color: _2.default.base09,
    paddingLeft: '10px'
  }),
  heading: (0, _glamor.style)({
    fontSize: '14px',
    background: _2.default.base00,
    color: _2.default.base00,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    padding: '14px 0 13px 0',
    margin: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 99
  })
};
module.exports = exports['default'];