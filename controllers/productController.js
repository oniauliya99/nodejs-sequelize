const {
    products
} = require('../models/index')
const db = require('../models/index')

const Product = db.products
const Review = db.reviews

//method index
const index = async (req, res) => {
    let products = Product.findAll({})
    res.status(200).send(products)
}

// method create
const addProduct = async (req, res) => {
    console.log(req.body)
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published
    }
    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

//method show
const show = async (req, res) => {
    let id = req.params.id
    let products = Product.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(products)
}

//method update 
const update = async (req, res) => {

    let id = req.params.id
    const product = await Product.update(req.body, {
        where: {
            id: id
        }
    })
    res.status(200).send(product)
}

//method destroy
const destroy = async (req, res) => {

    let id = req.params.id
    await Product.destroy({
        where: {
            id: id
        }
    })
    res.status(200).send("product is deleted")
}

//method published
const published = async (req, res) => {

    const product = await Product.findAll({
        where: {
            published: true
        }
    })
    res.status(200).send(product)
}

module.exports = {
    index,
    show,
    addProduct,
    update,
    destroy,
    published
}