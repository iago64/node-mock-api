'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.documentDELETE = function documentDELETE (req, res, next, numero) {
  Default.documentDELETE(numero)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentGET = function documentGET (req, res, next, numero) {
  Default.documentGET(numero)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentPOST = function documentPOST (req, res, next, body) {
  Default.documentPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.documentPUT = function documentPUT (req, res, next, numero) {
  Default.documentPUT(numero)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
