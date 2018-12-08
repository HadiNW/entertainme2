const Movie = require('../Models/Movie')

class MovieController {

    static create(req, res) {
        Movie
            .create({
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            })
            .then(_ => {
                res.status(200).json({
                    message: 'success created a movie'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getAll(req, res) {
        Movie
            .find()
            .then(movies => {
                res.status(200).json(movies)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        Movie
            .findByIdAndDelete(req.params.id)
            .then(movie => {
                res.status(200).json({
                    message: 'Success deleted a movie'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        Movie
            .findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            })
            .then(_ => {
                res.status(200).json({
                    message: 'success updated a movie'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = MovieController