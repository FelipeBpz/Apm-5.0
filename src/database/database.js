const mongoose = require('mongoose');

const dbConnection = async () => {
    await mongoose.connect('mongodb://localhost:27017/ApmDB')
        .then(() => console.log("DB UP"))
        .catch(err => {
            console.log(`DB down: ${err}`);
            throw new Error('Error en la DB');
        });
}

module.exports = {
    dbConnection
}