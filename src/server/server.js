const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/database')

class Server {
    // configuracion
    constructor() {
        this.app = express();
        this.port = 4000;
        
        this.initDB();
        this.middlewares();
        this.routes();
    }

    async initDB() {
        await dbConnection();
    }
    // middlewares

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    //routes

    routes() {
        this.app.use('/api/producto', require('../routes/newPro'));
        this.app.use('/api/user', require('../routes/newUser'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server UP')
        });
    }

}

module.exports = Server;