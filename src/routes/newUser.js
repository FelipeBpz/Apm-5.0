const { Router } = require('express');
const { check } = require('express-validator');

const { emailExist, rolExist, userByIdExists } = require('../helpers/req.validators')
const { validateData } = require('../middlewares');
const router = Router();

const {
    userGet,
    // userGetsku,
    userPost,
    userPut,
    userDelete
} = require('../controllers/controller.user')

router.route('/')
    .get(userGet)

    .post([check('nombre', 'Campo Obligatorio').notEmpty(),
    check('password', 'La contraseña debe tener minimo 6 digitos').isLength({ min: 6 }),
    check('email', 'Correo no valido').isEmail(),
    check('email').custom(emailExist),
    check('rol').custom(rolExist),
        validateData], userPost)

router.route('/:id')
    //  .get(userGetsku)
    .put([check('nombre', 'Campo Obligatorio').notEmpty(),
    check('id', 'Id no valido').isMongoId(),
    check('id').custom(userByIdExists),
        validateData], userPut)

    .delete([check('id', 'Id no valido').isMongoId(),
    check('id').custom(userByIdExists),
        validateData], userDelete)

module.exports = router;