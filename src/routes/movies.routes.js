const Router = require('@koa/router');
const { validarToken } = require('../library/token');
const { API_VERSION } = require('../config/global');
const Movie = require('../models/movie.model');
const RelUserMovies = require('../models/user-movies.model');
const {
	schemaMovieRegister,
	schemaGetMovie,
	schemaDeleteMovie
} = require('../middlewares/schemas/data.schema');
const { validateData } = require('../middlewares/data.middlewares');
const compose = require('koa-compose');

class MoviesRoutes {
	router;

	constructor() {
		this.router = new Router({
			prefix: `/${process.env.API_PREFIX}/${API_VERSION}/movies`
		});
		this.routes();
	}

	getRouter = () => this.router;

	routes() {
		this.getListMovies('/');
		this.postRegisterMovie('/');
		this.postDeleteMovie('/delete-movie');
		this.getMovie('/:id');
		// this.postUpdateMovie('/:id/update');
		// this.getDisabledUser('/disable/:id');
	}
	getMovie(route) {
		const middlewares = [validarToken, validateData(schemaGetMovie)];
		this.router.get(route, compose(middlewares), async (req) => {
			const { id } = req.params;
			const { userId } = req.request.user;

			try {
				const listMovies = await RelUserMovies.findOne({
					user: userId,
					movie: id
				}).populate('movie');
				req.response.status = 200;
				req.body = { data: listMovies };
				return;
			} catch (err) {
				req.response.status = 500;
				req.body = { errors: { error: err } };
			}
		});
	}
	getListMovies(route) {
		this.router.get(route, validarToken, async (req) => {
			const { userId } = req.request.user;

			try {
				const listMovies = await RelUserMovies.find(
					{
						user: userId
					}
					// { _id: 0, nombreprueba: 0 }
				).populate('movie');
				req.response.status = 200;
				// req.body = { list: listMovies.map((e) => e.movie) };
				req.body = { list: listMovies };
				return;
			} catch (err) {
				req.response.status = 500;
				req.body = { errors: { error: err } };
			}
		});
	}

	postRegisterMovie(route) {
		const middlewares = [validarToken, validateData(schemaMovieRegister)];
		this.router.post(route, compose(middlewares), async (req) => {
			const {
				mov_title,
				mov_description,
				mov_calidad,
				mov_idioma,
				mov_tmdb,
				mov_links
			} = req.request.body;
			const { userId } = req.request.user;
			try {
				const createMovie = await new Movie({
					mov_title,
					mov_description,
					mov_calidad,
					mov_idioma,
					mov_tmdb,
					mov_links,
					user: userId
				}).save();

				const rel = await new RelUserMovies({
					nombreprueba: 'nombreprueba',
					movie: createMovie._id,
					user: userId
				}).save();

				req.response.status = 200;
				req.body = {
					id: createMovie._id,
					mov_title,
					message: 'Movie created succsessfully',
					rel
				};
			} catch (error) {
				req.response.status = 500;
				req.body = {
					error,
					message: 'error when creating the movie'
				};
			}
		});
	}

	postDeleteMovie(route) {
		const middlewares = [validarToken, validateData(schemaDeleteMovie)];
		this.router.post(route, compose(middlewares), async (req) => {
			const { id_movie } = req.request.body;
			const { userId } = req.request.user;
			try {
				const user = await RelUserMovies.countDocuments({
					movie: id_movie,
					user: userId
				});
				// queda pendiente el borrar una movie

				if (user > 0) {
					const rel = await RelUserMovies.findOne({
						movie: id_movie,
						user: userId
					})
						.deleteOne()
						.exec();
					const movie = await Movie.findById(id_movie)
						.deleteOne()
						.exec();
				} else {
					throw new Error('Error, no match user client no exist');
				}

				req.response.status = 200;
				req.body = {
					rel
				};
			} catch (error) {
				req.response.status = 500;
				req.body = {
					error,
					message: 'error when creating the movie'
				};
			}
		});
	}
}

const routerMovies = new MoviesRoutes();
module.exports = routerMovies.getRouter();
