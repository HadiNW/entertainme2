require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const indexRoute = require('./Router')
const cors = require('cors')
const port = process.env.PORT || 3002
const app = express()
mongoose
    .connect('mongodb://localhost/tv-series', {
         useNewUrlParser: true
    })
    .then(() => {
        console.log('TV series database started')
    })
    .catch(err => {
        console.log(err)
    })

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/', indexRoute)






app.listen(port, () => {
    console.log('TV Series Server started on port', port)
})