'use strict';
const Router = require('@koa/router');
const { API_VERSION, API_PREFIX, ROOT_API } = require('../config/global');
const fetch = require('node-fetch');
const fs = require('fs');
const mime = require('mime-types');
const path = require('path');
const { filtrar, numRamdon } = require('../utils/filtro.js');
const { generateTemplate } = require('../utils/functions.js');
const { createPost } = require('../api/apiWP.js');

/*------------------------------------------------------------------------ */

class MoviesRoutes {
	router;

	constructor() {
		this.router = new Router({
			prefix: `/${API_PREFIX}/${API_VERSION}/users`
		});
		this.routes();
	}

	getRouter = () => this.router;

	routes() {
		this.postPosterCalidad('/poster');
		this.getPoster('/poster/:img');
		this.postCrearPost('/post');
	}

	postPosterCalidad(route) {
		this.router.post(route, async (req) => {
			const { img, calidad, idioma, resolucion, extra } =
				req.request.body;
			sharp.cache(false);
			try {
				const poster = filtrar(calidad, idioma, resolucion, extra);
				const num = numRamdon(1, 100);
				const path1 = path.resolve(
					__dirname,
					'../processed_images/p1.jpg'
				);
				const path2 = path.resolve(
					__dirname,
					`../processed_images/${num}final.jpg`
				);
				const plantilla = path.resolve(
					__dirname,
					'../plantillas/' + poster
				);
				console.log('path1', path1);
				const image = await fetch(img);
				const imageBuffer = await image.buffer();

				await sharp(imageBuffer)
					.resize({
						width: 878,
						height: 1315
					})
					.toFile(path1);

				await sharp(path1)
					.composite([{ input: plantilla, left: 0, top: 0 }]) // Marco
					.toFile(path2); // imagen salida

				const mimeType = mime.lookup(path2);
				const src = fs.createReadStream(path2);

				req.response.set('content-type', mimeType);
				req.response.status = 200;
				req.body = {
					poster: `${ROOT_API}/users/poster/${num}final.jpg`
				};
			} catch (error) {
				console.log(error);
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}
	getPoster(route) {
		this.router.get(route, async (req) => {
			const img = req.request.params.img;
			try {
				const path1 = path.resolve(
					__dirname,
					'../processed_images/' + img
				);
				const mimeType = mime.lookup(path1);
				const src = fs.createReadStream(path1);

				req.response.set('content-type', mimeType);
				req.response.status = 200;
				req.body = src;
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
			}
		});
	}
	postCrearPost(route) {
		this.router.post(route, async (req) => {
			console.log(req.request.body);
			const {
				Calidad,
				Code,
				Extra,
				Formato,
				FormatoAudio,
				Idioma,
				OtrosSubs,
				PesoArchivo,
				Resolucion,
				Subtitulos,
				aporteExclusivo,
				captura1,
				captura2,
				captura3,
				captura4,
				captura5,
				creditos,
				enlaceFree,
				enlaceVip,
				masInfo,
				misServidores,
				miscategoriasfull,
				mititle,
				mistags,
				uploader,
				urlposter,
				urlpostergenerado,
				original_title,
				publicarOBorrador
			} = req.request.body;

			try {
				const template = generateTemplate(req.request.body);
				const resul = await createPost({
					title: mititle,
					content: template,
					status: publicarOBorrador || 'pending',
					tags: mistags || [],
					categories: miscategoriasfull
				});
				req.response.set('Content-Type', 'text/html charset=utf-8');
				req.response.status = 200;
				req.body = { resul };
			} catch (error) {
				req.response.status = 500;
				req.body = { errors: 'Bad request', error };
				console.log(error);
			}
		});
	}
}

const routerUsers = new MoviesRoutes();
module.exports = routerUsers.getRouter();
