const db = require('../models/index')

const Review = db.reviews;


//1. Add Review

const addReview = async (req, res) => {

    const id = req.params.id

    let data = {
        product_id: id,
        rating: req.body.rating,
        description: req.body.description
    }

    await Review.create(data).then((data) => {
        res.send({
            "message": "data added"
        })
    })

}

// 2. Get All Reviews

const getAllReviews = async (req, res) => {

    const reviews = await Review.findAll({}).then((data) => {
        return data
    })
    res.status(200).send(reviews)

}

module.exports = {
    addReview,
    getAllReviews
}