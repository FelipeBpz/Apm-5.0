const producto = require("../models/producto");

//consultar basico
const productoGet = async (req, res) => {
    const info = await producto.find();
    res.json(info);
}
//añadir elemento
const productoPost = async (req, res) => {
    const { Plataforma, Producto, Cantidad, Descripcion, Costo } = req.body
    const newProducto = new producto({
        Nom_Pla: Plataforma,
        Nom_Pro: Producto,
        Cantidad: Cantidad,
        Descripcion: Descripcion,
        Costo_Und: Costo
    })
    await newProducto.save();
    console.log(newProducto)
    res.json({ msg: "Producto Guardado" });
}
//consultar con id
const productoGetsku = async (req, res) => {
    const gsProducto = await producto.findById(req.params.sku);
    console.log(gsProducto)
    res.json(gsProducto);
}
//actualizar
const productoPut = async (req, res) => {
    const { Plataforma, Producto, Cantidad, Descripcion, Costo } = req.body;
     await producto.findByIdAndUpdate(req.params.sku, {
        Nom_Pla: Plataforma,
        Nom_Pro: Producto,
        Cantidad: Cantidad,
        Descripcion: Descripcion,
        Costo_Und: Costo
    });
    console.log(req.params.sku)
    res.json({ msg: "Producto Actualizado" });
}
//eliminar
const productoDelete =  async(req, res) => {
    await producto.findByIdAndDelete(req.params.sku);
    res.json({ msg: "Producto eliminado" });
}

module.exports = {
    productoGet, productoPost, productoGetsku, productoPut, productoDelete
}