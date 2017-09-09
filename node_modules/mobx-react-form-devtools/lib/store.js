'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobx = require('mobx');

var _ = require('./styles/_.theme');

var _2 = _interopRequireDefault(_);

var _form = require('./form.options');

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobx.observable)({
  theme: _2.default,
  showOptions: false,
  open: false,
  forms: {},
  menu: {},
  select: {},
  selected: {
    key: null,
    form: null
  },
  dock: {
    visible: true,
    fluid: false,
    size: 350,
    position: 'right',
    mode: 'none',
    style: {
      background: _2.default.base00
    }
  },
  get formOptions() {
    return (0, _form2.default)(this.selected.form);
  }
});
module.exports = exports['default'];