const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')


const app = express()

const corsOption = {
    origin: 'http://localhost' // url front end
}

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res) => {
    res.render('index', {
        layout: 'main',
    })
})


//middleware
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
const router = require('./routes/productRouter.js')
app.use('/api/product', router)

//testing api

//PORT
const PORT = process.env.PORT || 8080

//Server

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})