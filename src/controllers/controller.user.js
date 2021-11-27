const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const user = require("../models/user");

//consultar basico
const userGet = async (req = request, res = response) => {
    const { limit = 6, page = 1 } = req.query;
    const query = { status: true };
    const skip = limit * (page - 1);
    const [info, totalUsers] = await Promise.all([
        user.find(query)
            .skip(Number(skip))
            .limit(Number(limit)),
        user.countDocuments(query)
    ]);

    res.json({
        info,
        totalUsers
    });
}
//añadir elemento
const userPost = async (req, res) => {

    const { nombre, email, password, rol } = req.body
    const newUser = new user({
        nombre,
        email,
        password,
        rol
    })

    //encriptado
    const salt = bcrypt.genSaltSync();
    newUser.password = bcrypt.hashSync(password, salt);

    await newUser.save();
    console.log(newUser)
    res.json({ msg: "user Guardado" });
}
//consultar con id
/*const userGetsku = async (req, res) => {
    const gsProducto = await user.findById(req.params.sku);
    console.log(gsProducto)
    res.json(gsProducto);
}*/
//actualizar
const userPut = async (req, res) => {
    const { id } = req.params;
    const { _id, password, ...data } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        data.password = bcrypt.hashSync(password, salt);
    }

    const upUser = await user.findByIdAndUpdate(id, data, { new: true });

    res.json(upUser);
}
//eliminar
const userDelete = async (req, res) => {
    const { id } = req.params;

    //eliminacion total
    //const delUser = await user.findByIdAndDelete(id);
    //eliminacion parcial
    const delUser = await user.findByIdAndUpdate(id, { status: false });
    res.json(delUser);
}

module.exports = {
    userGet, userPost,/* userGetsku,*/ userPut, userDelete
}