const user = require('../models/user');
const Rol = require('../models/rol');

const emailExist = async (email = '') => {
    let newUser = await user.findOne({ email });
    if (newUser) {
        throw new Error('El Email ${email} ya esta registrado');
    }
}

const rolExist = async (rol = '') => {
    let rolInstance = await Rol.findOne({ rol });
    if (!rolInstance) {
        throw new Error(`El rol ${rol} no existente`);
    }
}
const userByIdExists = async (id = '') => {
    let gnlUser = await user.findById(id);
    if(!gnlUser){
        throw new Error(`El id ${ id } no existe`);
    }
}
module.exports = { emailExist, rolExist, userByIdExists }