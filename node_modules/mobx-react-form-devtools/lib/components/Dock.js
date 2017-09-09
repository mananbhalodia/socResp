'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _glamor = require('glamor');

var _reactDock = require('react-dock');

var _reactDock2 = _interopRequireDefault(_reactDock);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Draggable = require('./Draggable');

var _Draggable2 = _interopRequireDefault(_Draggable);

var _SelectInitialForm = require('./SelectInitialForm');

var _SelectInitialForm2 = _interopRequireDefault(_SelectInitialForm);

var _RenderFormData = require('./RenderFormData');

var _RenderFormData2 = _interopRequireDefault(_RenderFormData);

var _ = require('../styles/_.utils');

var _2 = _interopRequireDefault(_);

var _Dock = require('../styles/Dock');

var _Dock2 = _interopRequireDefault(_Dock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.observer)(function (_ref) {
  var store = _ref.store,
      handlers = _ref.handlers;
  return _react2.default.createElement(
    'div',
    { className: _Dock2.default.dock },
    _react2.default.createElement(_reactTooltip2.default, null),
    _react2.default.createElement(
      _reactDock2.default,
      {
        defaultSize: store.open ? store.dock.size : 0,
        size: store.open ? store.dock.size : 0,
        onSizeChange: handlers.handleOnSizeChange,
        position: store.dock.position,
        fluid: store.dock.fluid,
        isVisible: store.dock.visible,
        dimMode: store.dock.mode,
        dockStyle: store.dock.style
      },
      _react2.default.createElement(
        'div',
        { className: (0, _glamor.merge)(_Dock2.default.draggable, store.open && _2.default.hidden) },
        _react2.default.createElement(_Draggable2.default, { handlers: handlers })
      ),
      _react2.default.createElement(_Header2.default, { store: store, handlers: handlers }),
      store.selected.form && store.selected.key ? _react2.default.createElement(_RenderFormData2.default, { store: store, handlers: handlers }) : _react2.default.createElement(_SelectInitialForm2.default, { store: store, handlers: handlers })
    )
  );
});
module.exports = exports['default'];