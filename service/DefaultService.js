'use strict';


/**
 *
 * numero Integer 
 * returns response-body
 **/
exports.documentDELETE = function (numero) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "document": {
        "numero": 81544670,
        "nombre": "Laura",
        "apellido": "Martinez",
        "fechaNacimiento": "1999-07-20",
        "sexo": "Femenino",
        "nacionalidad": "Argentina"
      },
      "description": "Documento creado exitosamente."
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * numero Integer 
 * returns response-body
 **/
exports.documentGET = function (numero) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "document": {
        "numero": 81544670,
        "nombre": "Laura",
        "apellido": "Martinez",
        "fechaNacimiento": "1999-07-20",
        "sexo": "Femenino",
        "nacionalidad": "Argentina"
      },
      "description": "Documento creado exitosamente."
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * body Request-body 
 * returns response-body
 **/
exports.documentPOST = function (body) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "document": {
        "numero": 81544670,
        "nombre": "Laura",
        "apellido": "Martinez",
        "fechaNacimiento": "1999-07-20",
        "sexo": "Femenino",
        "nacionalidad": "Argentina"
      },
      "description": "Documento creado exitosamente."
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * numero Integer 
 * returns response-body
 **/
exports.documentPUT = function (numero) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "document": {
        "numero": 81544670,
        "nombre": "Laura",
        "apellido": "Martinez",
        "fechaNacimiento": "1999-07-20",
        "sexo": "Femenino",
        "nacionalidad": "Argentina"
      },
      "description": "Documento creado exitosamente."
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

