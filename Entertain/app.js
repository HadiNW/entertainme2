const express = require('express');
const app = express()
const indexRoute = require('./Router')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', indexRoute)


app.listen(3000, () => {
    console.log('Entertain Server Started')
})