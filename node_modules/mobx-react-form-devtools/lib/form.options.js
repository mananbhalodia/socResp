'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBoolean2 = require('lodash/isBoolean');

var _isBoolean3 = _interopRequireDefault(_isBoolean2);

var _pickBy2 = require('lodash/pickBy');

var _pickBy3 = _interopRequireDefault(_pickBy2);

var _merge3 = require('lodash/merge');

var _merge4 = _interopRequireDefault(_merge3);

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _mobxReactForm = require('mobx-react-form');

var _mobxReactForm2 = _interopRequireDefault(_mobxReactForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var observer = function observer(form) {
  return function (_ref) {
    var field = _ref.field;
    return form.state.options.set(_defineProperty({}, field.key, field.value));
  };
};

var setProp = function setProp(fields, prop) {
  return (0, _reduce3.default)(fields, function (obj, val, key) {
    return (0, _merge4.default)(obj, _defineProperty({}, key, prop));
  }, {});
};

var setObserversProp = function setObserversProp(form, fields) {
  return setProp(fields, [{ call: observer(form) }]);
};

var setCheckboxProp = function setCheckboxProp(fields) {
  return setProp(fields, 'checkbox');
};

var getBooleanOptions = function getBooleanOptions(form) {
  return (0, _pickBy3.default)(form.state.options.options, _isBoolean3.default);
};

exports.default = function (form) {
  var fields = getBooleanOptions(form);
  var types = setCheckboxProp(fields);
  var observers = setObserversProp(form, fields);

  return new _mobxReactForm2.default({
    fields: fields,
    types: types,
    observers: observers
  });
};

module.exports = exports['default'];