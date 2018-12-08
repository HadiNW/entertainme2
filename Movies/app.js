require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const indexRoute = require('./Router')
const cors = require('cors')
const port = process.env.PORT || 3001

const app = express()
mongoose
    .connect('mongodb://localhost/movies', {
         useNewUrlParser: true
    })
    .then(() => {
        console.log('movie database started')
    })
    .catch(err => {
        console.log(err)
    })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRoute)






app.listen(port, () => {
    console.log('Movie Server started on port', port)
})