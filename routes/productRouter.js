const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController.js')

const router = require('express').Router()

router.get('/allProduct', productController.index)
router.post('/addProduct', productController.addProduct)
router.get('/publishedProduct', productController.published)

router.get('/:id', productController.show)
router.put('/:id', productController.update)
router.delete('/:id', productController.destroy)

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get product Reviews
// router.get('/getProductReviews/:id', productController.getProductReviews)

module.exports = router