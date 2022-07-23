const {
    products
} = require('../models/index')
const db = require('../models/index')

const Product = db.products
const Review = db.reviews

//method index
const getAllProducts = async (req, res) => {
    let products = Product.findAll({})
    res.status.send(products)
}

// method create
const addProduct = async (req, res) => {
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
const getOneProducts = async (req, res) => {
    let id = req.params.id
    let products = Product.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(products)
}

//method update 
const updateProducts = async (req, res) => {

    let id = req.params.id
    const product = await Product.update(req.body, {
        where: {
            id: id
        }
    })
    res.status(200).send(product)
}