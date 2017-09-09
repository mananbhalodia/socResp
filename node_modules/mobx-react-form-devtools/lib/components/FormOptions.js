'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require('mobx-react');

var _SimpleCheckbox = require('./SimpleCheckbox');

var _SimpleCheckbox2 = _interopRequireDefault(_SimpleCheckbox);

var _FormOptions = require('../styles/FormOptions');

var _FormOptions2 = _interopRequireDefault(_FormOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _mobxReact.observer)(function (_ref) {
  var form = _ref.form;
  return _react2.default.createElement(
    'form',
    { onSubmit: form.onSubmit },
    _react2.default.createElement(
      'h4',
      { className: _FormOptions2.default.h4 },
      'FORM OPTIONS'
    ),
    form.map(function (field) {
      return _react2.default.createElement(_SimpleCheckbox2.default, { field: field, key: field.key });
    })
  );
});
module.exports = exports['default'];