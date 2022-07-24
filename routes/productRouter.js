const productController = require('../controllers/productController.js')

const router = require('express').Router()

router.get('/allProduct', productController.index)
router.post('/addProduct', productController.addProduct)
router.get('/publishedProduct', productController.published)

router.get('/:id', productController.show)
router.put('/:id', productController.update)
router.delete('/:id', productController.destroy)

module.exports = router