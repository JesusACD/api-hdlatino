'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database.config');

const User = db.define(
	'User',
	{
		// Model attributes are defined here
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		alias: {
			type: DataTypes.STRING
			// allowNull defaults to true
		},
		id_wordpress: {
			type: DataTypes.TINYINT
		},
		id_paste: {
			type: DataTypes.TINYINT
		}
	},
	{
		// Other model options go here
	}
);

module.exports = User;
