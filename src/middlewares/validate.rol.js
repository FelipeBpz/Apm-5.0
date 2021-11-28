const superAmd = (req, res, next) => {
    if(!req.tuser){
        return res.status(500).json({
            msg: "Ingrese su token para continuar"
        })
    }

    const { nombre, rol } = req.tuser;

    console.log(req.tuser);

    if(rol !== 'Admin'){
        return res.status(401).json({
            msg: `${ nombre } no puedes hacer eso`
        })
    }

    next();
}

const basicRol = (...rols) => {
    return (req, res, next) => {
        if(!req.tuser){
            return res.status(500).json({
                msg: "por favor validar le token"
            })
        }

        if(!rols.includes(req.tuser.rol)){
            return res.status(401).json({
                msg: `${ req.user.name } no puede hacer eso`
            })
        }

        next();
    }
}

module.exports= {
    superAmd,
    basicRol
}