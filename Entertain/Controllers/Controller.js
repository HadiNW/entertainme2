const axios = require('axios')
const {endPoint} = require('../configs/endpoint')
const {movieEndpoint, tvEndpoint} = endPoint
const redis = require('redis')
const client = redis.createClient()

class Controller  {

    static getAllUseRedis(req, res) {
        client.get('movies-and-tv', (err, response) => {
            if(err) {
                res.status(500).json(err);
                throw err;
            }
            if(response) {
                res.status(200).json(JSON.parse(response));
            } else {
                Controller.getAll(res)
            }

        })
    }
    
    static async getAll(res) {
        console.log('get All')
       try {
            const moviesRes =  await axios.get(movieEndpoint+'/movies')
            const movies = await moviesRes.data
            const tvRes = await axios.get(tvEndpoint+'/tv')
            const tv = await tvRes.data
            const response = {
                movies,
                tv
            }
            client.set('movies-and-tv', JSON.stringify(response), 'EX', 60);

            if(res) {
                res.status(200).json(response)
            }           
       }
       catch(err){
            console.log('getAll without redis err', err)
            res.status(500).json(err)
       }
    }

    static createMovie(req, res) {
        console.log(req.body)
        axios({
            method: 'POST',
            url: `${movieEndpoint}/movies`,
            data: {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            }
        })
        .then(({data}) => {
            console.log(data, '===DTAAA=====')
            Controller.getAll()
            res.status(201).json(data)
        })
        .catch(err => {
            console.log('create movie errors', err)
            res.status(500).json(err)
        })
    }

    static createTV(req, res) {
        axios({
            method: 'POST',
            url: `${tvEndpoint}/tv`,
            data: {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            }
        })
        .then(({data}) => {
            Controller.getAll()
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }




}

module.exports = Controller

