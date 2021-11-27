const { Schema, model } = require('mongoose');

const userSchema = Schema({
    nombre: {
        type: String,
        required: [true, '**** Db: Nombre Requerido']
    },
    email: {
        type: String,
        required: [true, '**** Db: Email Requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, '**** Db: Pass Requerido']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true
    },

    status: {
    type: Boolean,
    require: true,
    default: true
}
});

userSchema.methods.toJSON = function () {
    const { __v, _id, password, ...user } = this.toObject();
    user.userId = _id;
    return user;
}
module.exports = model('user', userSchema);