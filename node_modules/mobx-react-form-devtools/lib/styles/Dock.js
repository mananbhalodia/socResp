'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

exports.default = {
  dock: (0, _glamor.style)({
    'fontFamily': 'Helvetica Neue',
    '@media (min-width: 0px) and (max-width: 450px)': {
      display: 'none'
    }
  }),
  draggable: (0, _glamor.style)({
    position: 'fixed',
    right: '0px',
    top: '100px'
  })
};
module.exports = exports['default'];