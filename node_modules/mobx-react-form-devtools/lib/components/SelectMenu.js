'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _SelectMenu = require('../styles/SelectMenu');

var _SelectMenu2 = _interopRequireDefault(_SelectMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store,
      handlers = _ref.handlers;
  return _react2.default.createElement(
    'select',
    {
      name: 'mobx-react-form-devtools-select',
      value: store.selected.key,
      onChange: handlers.handleSelect,
      className: _SelectMenu2.default.select
    },
    (0, _map3.default)(store.menu, function ($val, $key) {
      return _react2.default.createElement(
        'option',
        { key: $key, value: $key },
        $val
      );
    })
  );
});
module.exports = exports['default'];