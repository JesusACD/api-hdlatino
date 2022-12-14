'use strict';
const Router = require('@koa/router');
const { API_VERSION, API_PREFIX, ROOT_API } = require('../config/global');

const { User } = require('../models/indexDB');
const { Images } = require('../models/indexDB');

/*------------------------------------------------------------------------ */

class Users {
	router;

	constructor() {
		this.router = new Router({
			prefix: `/${API_PREFIX}/${API_VERSION}/users`
		});
		this.routes();
	}

	getRouter = () => this.router;

	routes() {
		this.getImages('/images');
		this.postSubirImages('/images');
		this.deleteImages('/images');
		this.postCreate('/');
		this.getUser('/:username');
		this.putUpdate('/:id');
		this.getUsers('/');
	}

	getUsers(route) {
		this.router.get(route, async (req) => {
			console.log('holaaaaa');
			try {
				const users = await User.findAll();
				if (!users) {
					return req.status(404).send('User not found');
				}

				req.response.status = 200;
				req.body = users;
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}
	getImages(route) {
		this.router.get(route, async (req) => {
			try {
				const images = await Images.findAll();
				console.log('iamges', images);
				if (!images) {
					req.response.status = 404;
					req.body = { error: 'images not found' };
				}

				req.response.status = 200;
				req.body = images;
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}

	postSubirImages(route) {
		this.router.post(route, async (req) => {
			const { url, name } = req.request.body;
			try {
				const images = await Images.create({
					url,
					name
				});

				req.response.status = 200;
				req.body = { status: 'ok' };
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}
	deleteImages(route) {
		this.router.delete(route, async (req) => {
			const { id } = req.request.body;
			try {
				const image = await Images.destroy({ where: { id } });
				console.log('images', image);

				if (image === 0) {
					req.response.status = 403;
					req.body = {
						status: 'ok',
						message: 'No se encontro la imagen'
					};
					return;
				}

				req.response.status = 200;
				req.body = { status: 'ok' };
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}

	getUser(route) {
		this.router.get(route, async (req) => {
			const { username } = req.request.params;
			try {
				const user = await User.findOne({ where: { username } });
				if (!user) {
					return res.status(404).send('User not found');
				}

				req.response.status = 200;
				req.body = user;
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}

	putUpdate(route) {
		this.router.put(route, async (req) => {
			const { username, password, alias, id_wordpress, id_paste } =
				req.request.body;
			const { id } = req.request.params;

			if (!id) {
				return req.status(404).send('User not found');
			}
			try {
				const users = await User.upsert({
					id,
					...req.request.body
				});
				if (!users) {
					return req.status(404).send('User not found');
				}

				req.response.status = 200;
				req.body = users;
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}
	postCreate(route) {
		this.router.post(route, async (req) => {
			const { username, password, alias, id_wordpress, id_paste } =
				req.request.body;
			try {
				const users = await User.create({
					username,
					password,
					alias,
					id_wordpress,
					id_paste
				});
				if (!users) {
					return req.status(404).send('User not found');
				}

				req.response.status = 200;
				req.body = users;
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}
}

const routerUserss = new Users();
module.exports = routerUserss.getRouter();
