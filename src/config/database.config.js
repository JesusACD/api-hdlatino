const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)

// password cpanel bn&c;zvWV%;i
const db = new Sequelize('hncjeodg_hdlatino_app_post', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
	/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

module.exports = db;
