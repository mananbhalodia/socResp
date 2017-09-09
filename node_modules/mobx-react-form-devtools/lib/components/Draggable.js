'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _glamor = require('glamor');

var _reactDraggable = require('react-draggable');

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

var _ = require('../styles/_.utils');

var _2 = _interopRequireDefault(_);

var _Draggable = require('../styles/Draggable');

var _Draggable2 = _interopRequireDefault(_Draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.observer)(function (_ref) {
  var handlers = _ref.handlers;
  return _react2.default.createElement(
    _reactDraggable2.default,
    {
      axis: 'y',
      handle: '.devtools-handle-drag',
      zIndex: 99999999999,
      defaultPosition: { x: 0, y: 0 }
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: _Draggable2.default.draggable },
        _react2.default.createElement(
          'div',
          { className: 'devtools-handle-drag', 'data-tip': 'DRAG' },
          _react2.default.createElement(_icons2.default.FaBars, { className: (0, _glamor.merge)(_Draggable2.default.icon, _Draggable2.default.dragIcon) })
        ),
        _react2.default.createElement(
          'button',
          {
            className: (0, _glamor.merge)(_2.default.button, _Draggable2.default.btn),
            onClick: handlers.handleOnOpenTools,
            'data-tip': 'OPEN'
          },
          _react2.default.createElement(_icons2.default.FaChevronLeft, { className: _Draggable2.default.icon })
        ),
        _react2.default.createElement(
          'button',
          {
            className: (0, _glamor.merge)(_2.default.button, _Draggable2.default.btn),
            onClick: handlers.handleOnOpenDoc,
            'data-tip': 'DOCS'
          },
          _react2.default.createElement(_icons2.default.FaBook, { className: _Draggable2.default.icon })
        )
      )
    )
  );
});
module.exports = exports['default'];