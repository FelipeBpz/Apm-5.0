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

const basicRol = (...rol) => {
    return (req, res, next) => {
        if(!req.tuser){
            return res.status(500).json({
                msg: "por favor validar le token"
            })
        }

        if(!rol.includes(req.tuser.rol)){
            return res.status(401).json({
                msg: `${ req.tuser.nombre } no puede hacer eso`
            })
        }

        next();
    }
}

module.exports= {
    superAmd,
    basicRol
}