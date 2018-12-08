require('dotenv').config()
const express = require('express');
const app = express()
const indexRoute = require('./Router')
const cors = require('cors');
const redis = require('redis');
const client = redis.createClient();
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', indexRoute)


client.on('connect', (err) => {
    err ? console.log('connection error:', err) : console.log('Connected to Redis')
});

app.listen(port, () => {
    console.log('Entertain Server Started on port', port)
})