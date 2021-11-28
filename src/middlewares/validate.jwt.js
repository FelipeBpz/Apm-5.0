const {request, response } = require ('express-validator');
const jwt = require('jsonwebtoken')

const user = require('../models/user');

const validateJWT = async (req = request, res= response, next)=>{
    const vtoken = req.header("token-BS");
    if(!vtoken){
        return res.status(401).json({
            msm: "Requiere Autenticacion"
        })
    }
    try{
        const{ userId }=jwt.verify(vtoken, process.env.TK_PASSWORD);
        const tuser = await user.findById(userId);
        if(!tuser){
            return res.status(401).json({
                msg : "Tkn Invalido"
            })
        }
        req.tuser = tuser;
        next();
    }
    catch(err){
        res.status(401).json({
            msg : "Tkn Fail"
        })
    }
}

module.exports={validateJWT}