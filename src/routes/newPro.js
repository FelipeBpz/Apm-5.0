const { Router } = require('express');
const router = Router();

const {
        productoGet,
        productoGetsku,
        productoPost,
        productoPut,
        productoDelete
    } = require('../controllers/controller.producto')

router.route('/')
    .get(productoGet)
    .post(productoPost)

router.route('/:sku')
    .get(productoGetsku)
    .put(productoPut)
    .delete(productoDelete)

module.exports = router;