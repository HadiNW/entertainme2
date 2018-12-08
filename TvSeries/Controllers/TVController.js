const TV = require('../Models/TV')

class TVController {
    static create(req, res) {
        TV
            .create({
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            })
            .then(_ => {
                res.status(200).json({
                    message: 'success created a TV series'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static getAll(req, res) {
        TV
            .find()
            .then(movies => {
                res.status(200).json(movies)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static delete(req, res) {
        TV
            .findByIdAndDelete(req.params.id)
            .then(movie => {
                res.status(200).json({
                    message: 'Success deleted a TV series'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static update(req, res) {
        TV
            .findByIdAndUpdate(req.params.id, {
                title: req.body.title,
                overview: req.body.overview,
                poster_path: req.body.poster_path,
                popularity: req.body.popularity,
                tag: req.body.tag
            })
            .then(_ => {
                res.status(200).json({
                    message: 'success updated a TV series'
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = TVController