'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _glamor = require('glamor');

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _ = require('../styles/_.utils');

var _2 = _interopRequireDefault(_);

var _RenderFormData = require('../styles/RenderFormData');

var _RenderFormData2 = _interopRequireDefault(_RenderFormData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _style$controls = _RenderFormData2.default.controls,
    icon = _style$controls.icon,
    iconOptionsActive = _style$controls.iconOptionsActive;
exports.default = (0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store,
      handlers = _ref.handlers;
  return _react2.default.createElement(
    'div',
    { className: (0, _glamor.merge)(_2.default.clearfix) },
    _react2.default.createElement(_reactTooltip2.default, null),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: (0, _glamor.merge)(_2.default.button, _RenderFormData2.default.controls.button),
        onClick: handlers.handleFormOnSubmit,
        'data-tip': 'SUBMIT'
      },
      _react2.default.createElement(_icons2.default.FaDotCircleO, { className: icon })
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: (0, _glamor.merge)(_2.default.button, _RenderFormData2.default.controls.button),
        onClick: handlers.handleFormOnClear,
        'data-tip': 'CLEAR'
      },
      _react2.default.createElement(_icons2.default.FaEraser, { className: icon })
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: (0, _glamor.merge)(_2.default.button, _RenderFormData2.default.controls.button),
        onClick: handlers.handleFormOnReset,
        'data-tip': 'RESET'
      },
      _react2.default.createElement(_icons2.default.FaRefresh, { className: icon })
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: (0, _glamor.merge)(_2.default.button, _RenderFormData2.default.controls.button),
        onClick: handlers.handleToggleOptions,
        'data-tip': 'OPTIONS'
      },
      _react2.default.createElement(_icons2.default.FaCog, { className: (0, _glamor.merge)(icon, store.showOptions && iconOptionsActive) })
    )
  );
});
module.exports = exports['default'];