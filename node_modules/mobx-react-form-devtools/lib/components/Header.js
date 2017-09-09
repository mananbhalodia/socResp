'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _glamor = require('glamor');

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _ = require('../styles/_.utils');

var _2 = _interopRequireDefault(_);

var _Header = require('../styles/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store,
      handlers = _ref.handlers;
  return _react2.default.createElement(
    'div',
    { className: (0, _glamor.merge)(_Header2.default.heading, !store.open && _2.default.hidden) },
    _react2.default.createElement(
      'div',
      { className: _2.default.left },
      _react2.default.createElement(
        'b',
        { className: _Header2.default.hli },
        'MOBX-REACT-FORM'
      ),
      _react2.default.createElement(
        'b',
        { className: _Header2.default.hlb },
        'DEVTOOLS'
      )
    ),
    _react2.default.createElement(
      'button',
      {
        className: (0, _glamor.merge)(_2.default.button, _Header2.default.btn),
        onClick: handlers.handleOnCloseTools,
        'data-tip': 'CLOSE'
      },
      _react2.default.createElement(_icons2.default.FaChevronCircleRight, { className: _Header2.default.icon })
    ),
    _react2.default.createElement(
      'button',
      {
        className: (0, _glamor.merge)(_2.default.button, _Header2.default.btn),
        onClick: handlers.handleOnOpenDoc,
        'data-tip': 'DOCS'
      },
      _react2.default.createElement(_icons2.default.FaBook, { className: _Header2.default.icon })
    )
  );
});
module.exports = exports['default'];