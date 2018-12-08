require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const indexRoute = require('./Router')
const cors = require('cors')
const port = process.env.PORT || 3002
const app = express()

const mongodUri = `mongodb://${process.env.MLAB_USERNAME}:${process.env.MLAB_PASSWORD}@ds129454.mlab.com:29454/tv`
mongoose
    .connect(mongodUri, {
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