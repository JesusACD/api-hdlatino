'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database.config');
const User = require('./user.model');

const Images = db.define(
	'Images',
	{
		// Model attributes are defined here
		url: {
			type: DataTypes.STRING
			// allowNull defaults to true
		},
		name: {
			type: DataTypes.STRING
		}
	},
	{
		// Other model options go here
	}
);

module.exports = Images;
