const validateData = require('./validate.data');
const validateJWT = require('./validate.jwt');
const validateRol = require('./validate.rol');

module.exports = {
    ...validateData,
    ...validateJWT,
    ...validateRol
}