const mongoose = require('mongoose');

const dbConnection = async () => {
    await mongoose.connect(process.env.DB_HOST)
        .then(() => console.log("DB UP"))
        .catch(err => {
            console.log(`DB down: ${err}`);
            throw new Error('Error en la DB');
        });
}

module.exports = {
    dbConnection
}