const express = require('express')
const layout = require('express-layout')
const cors = require('cors')


const app = express()

const corsOption = {
    origin: 'https://localhost:8081'
}

//middleware
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//testing api
app.get('/', (req, res) => {
    res.json({
        message: "Hello from api"
    })
})
//PORT
const PORT = process.env.PORT || 8080

//Server

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})