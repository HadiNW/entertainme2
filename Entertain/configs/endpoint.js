// const movieEndpoint = 'http://localhost:3001'
// module.exports = movieEndpoint
// module.exports = const tvEndpoint = 'http://localhost:3001'

module.exports = {
    endPoint: {
        movieEndpoint: process.env.MOVIE_END_POINT || 'http://localhost:3001',
        tvEndpoint: process.env.TV_END_POINT || 'http://localhost:3002'
    }
} 