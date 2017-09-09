'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function ($actions) {
  return {

    handleOnSizeChange: function handleOnSizeChange(size) {
      $actions.changeDockSize(size);
    },

    handleOnCloseTools: function handleOnCloseTools(e) {
      e.preventDefault();
      $actions.toggleTools('close');
    },

    handleOnOpenTools: function handleOnOpenTools(e) {
      e.preventDefault();
      $actions.toggleTools('open');
    },

    handleOnOpenDoc: function handleOnOpenDoc(e) {
      e.preventDefault();
      var link = 'https://foxhound87.github.io/mobx-react-form/';
      window.open(link, '_blank'); // eslint-disable-line
    },

    handleSelect: function handleSelect(e) {
      $actions.selectForm(e.target.value);
    },

    handleInitialFormSelect: function handleInitialFormSelect(e) {
      e.preventDefault();
      $actions.selectForm(e.target.value);
    },

    handleToggleOptions: function handleToggleOptions(e) {
      e.preventDefault();
      $actions.toggleOptions();
    },

    handleFormOnSubmit: function handleFormOnSubmit(e) {
      e.preventDefault();
      $actions.handleFormControls('submit');
    },

    handleFormOnClear: function handleFormOnClear(e) {
      e.preventDefault();
      $actions.handleFormControls('clear');
    },

    handleFormOnReset: function handleFormOnReset(e) {
      e.preventDefault();
      $actions.handleFormControls('reset');
    }

  };
};

module.exports = exports['default'];