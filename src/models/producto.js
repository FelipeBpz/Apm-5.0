const { Schema, model } = require('mongoose');

const proSchema = new Schema({
    Nom_Pla: String,
    Nom_Pro: String,
    Cantidad: String,
    Descripcion: String,
    Costo_Und: String
})

module.exports = model('producto', proSchema);