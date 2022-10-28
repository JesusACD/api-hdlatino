const Images = require('./images.model');
const User = require('./user.model');

// User.hasMany(Images);
// Images.belongsTo(User);

module.exports = {
	User,
	Images
};
