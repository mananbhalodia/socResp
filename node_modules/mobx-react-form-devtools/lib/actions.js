'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _merge2 = require('lodash/merge');

var _merge3 = _interopRequireDefault(_merge2);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _mobx = require('mobx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function ($store) {
  return {

    open: (0, _mobx.action)(function (flag) {
      return (0, _set3.default)($store, 'open', flag);
    }),

    theme: (0, _mobx.action)(function (theme) {
      return (0, _merge3.default)($store.theme, theme);
    }),

    selectForm: (0, _mobx.action)(function (key) {
      (0, _map3.default)($store.select, function ($val, $key) {
        return (0, _set3.default)($store.select, $key, false);
      });
      (0, _set3.default)($store.select, key, true);
      (0, _set3.default)($store.selected, 'key', key);
      (0, _set3.default)($store.selected, 'form', $store.forms[key]);
    }),

    registerForm: (0, _mobx.action)(function (forms) {
      (0, _merge3.default)($store.forms, forms);
      (0, _map3.default)(forms, function ($form, $key) {
        return (0, _set3.default)($store.select, $key, false);
      });
      (0, _map3.default)(forms, function ($form, $key) {
        return (0, _set3.default)($store.menu, $key, $form.name || $key);
      });
    }),

    toggleTools: (0, _mobx.action)(function (toggle) {
      var $flag = void 0;
      if (toggle === 'open') $flag = true;
      if (toggle === 'close') $flag = false;
      (0, _set3.default)($store, 'open', $flag);
    }),

    toggleOptions: (0, _mobx.action)(function () {
      (0, _set3.default)($store, 'showOptions', !$store.showOptions);
    }),

    changeDockSize: (0, _mobx.action)(function (size) {
      (0, _set3.default)($store.dock, 'size', size);
    }),

    handleFormControls: (0, _mobx.action)(function (type) {
      switch (type) {
        case 'submit':
          $store.selected.form.submit();break;
        case 'clear':
          $store.selected.form.clear();break;
        case 'reset':
          $store.selected.form.reset();break;
        default:
          $store.selected.form.submit();
      }
    })

  };
};

module.exports = exports['default'];