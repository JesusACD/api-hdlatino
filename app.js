'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const db = require('./src/config/database.config');
require('./src/config/database.config');
const routerUserss = require('./src/routes/users.routes');

(async () => {
	try {
		await db.authenticate();
		await db.sync();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
})();

const app = new Koa();
const port = 4000 || 9000;

app.use(require('@koa/cors')())
	.use(bodyParser())
	.use(routerUserss.routes())
	.use(routerUserss.allowedMethods());
app.listen(port);
console.log('Server on port', port);
