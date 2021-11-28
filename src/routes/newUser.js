const { Router } = require('express');
const { check } = require('express-validator');

const { emailExist, rolExist, userByIdExists  } = require('../helpers/req.validators');
const { validateData, validateJWT, superAmd, basicRol } = require('../middlewares');
const router = Router();

const {
    userGet,
    //userGetId,
    userPost,
    userLogin,
    userPut,
    userDelete,
    
} = require('../controllers/controller.user')

router.route('/')
    .get( [validateJWT,basicRol('Admin', 'Vendor')
        ], userGet)

    .post([check('nombre', 'Campo Obligatorio').notEmpty(),
    check('password', 'La contraseña debe tener minimo 6 digitos').isLength({ min: 6 }),
    check('email', 'Correo no valido').isEmail(),
    check('email').custom(emailExist),
    check('rol').custom(rolExist),
        validateData], userPost)

router.route('/login')
    .post([
        check('email', 'Correo no Valido').isEmail(),
        check('password', 'Pass Obligatoria').notEmpty(),
        validateData], userLogin)

router.route('/:id')
    //.get(userGetId)
    .put([check('nombre', 'Campo Obligatorio').notEmpty(),
    check('id', 'Id no valido').isMongoId(),
    check('id').custom(userByIdExists),
        validateData], userPut)

    .delete([check('id', 'Id no valido').isMongoId(),
    check('id').custom(userByIdExists),
        validateData, validateJWT, superAmd], userDelete)

module.exports = router;