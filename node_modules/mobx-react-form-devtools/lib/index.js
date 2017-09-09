'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobx = require('mobx');

var _Dock = require('./components/Dock');

var _Dock2 = _interopRequireDefault(_Dock);

var _FormOptions = require('./components/FormOptions');

var _FormOptions2 = _interopRequireDefault(_FormOptions);

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _handlers = require('./handlers');

var _handlers2 = _interopRequireDefault(_handlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $actions = (0, _actions2.default)(_store2.default);
var $handlers = (0, _handlers2.default)($actions);

(0, _mobx.observe)(_store2.default.dock, 'size', (0, _mobx.action)(function (change) {
  var w = window.innerWidth; // eslint-disable-line
  if (change.newValue >= w) _store2.default.dock.size = w;
  if (change.newValue < 350) _store2.default.dock.size = 350;
}));

exports.default = {

  theme: $actions.theme,

  open: $actions.open,

  register: $actions.registerForm,

  select: $actions.selectForm,

  UI: function UI() {
    return _react2.default.createElement(_Dock2.default, { store: _store2.default, handlers: $handlers });
  },

  Options: function Options() {
    return _react2.default.createElement(_FormOptions2.default, { form: _store2.default.formOptions });
  }

};
module.exports = exports['default'];