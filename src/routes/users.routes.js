'use strict';
const Router = require('@koa/router');
const { API_VERSION, API_PREFIX, ROOT_API } = require('../config/global');
const User = require('../models/user.model');

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
		// this.getUser('/:id');
		this.getUsers('/');
		this.postCreate('/');
		this.getUser('/:username');
		// this.postCreateUser('/crear');
		// this.putUpdateUser('/:id');
	}
	// getUser(route) {
	// 	this.router.get(route, async (req) => {
	// 		const id = req.request.params.id;
	// 		try {
	// 			const user = await User.findOne({ _id: id });
	// 			if (!user) {
	// 				return res.status(404).send('User not found');
	// 			}

	// 			req.response.set('content-type', mimeType);
	// 			req.response.status = 200;
	// 			req.body = user;
	// 		} catch (error) {
	// 			req.response.status = 500;
	// 			req.body = { errors: 'Bad request', error };
	// 		}
	// 	});
	// }

	getUsers(route) {
		this.router.get(route, async (req) => {
			try {
				const users = await User.findAll();
				if (!users) {
					return res.status(404).send('User not found');
				}

				req.response.status = 200;
				req.body = users;
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

	// postCreateUser(route) {
	// 	this.router.post(route, async (req) => {
	// 		const { nombre, password } = req.request.body;
	// 		try {
	// 			const user = new User({
	// 				nombre,
	// 				password
	// 			});
	// 			const result = await user.save();
	// 			console.log(result);
	// 			req.response.status = 200;
	// 			req.body = result;
	// 		} catch (error) {
	// 			req.response.status = 500;
	// 			req.body = { errors: 'Bad request', error };
	// 		}
	// 	});
	// }

	// putUpdateUser(route) {
	// 	this.router.put(route, async (req) => {
	// 		const { id } = req.request.params;
	// 		const { nombre, password } = req.request.body;
	// 		try {
	// 			const user = await User.updateOne(
	// 				{
	// 					_id: id
	// 				},
	// 				{
	// 					$set: {
	// 						nombre,
	// 						password
	// 					}
	// 				}
	// 			);

	// 			req.response.status = 200;
	// 			req.body = user;
	// 		} catch (error) {
	// 			req.response.status = 500;
	// 			req.body = { errors: 'Bad request', error };
	// 		}
	// 	});
	// }
}

const routerUserss = new Users();
module.exports = routerUserss.getRouter();
