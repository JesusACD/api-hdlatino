const axios = require('axios');

module.exports.createPost = async (post) => {
	const headers = {
		'Content-Type': 'application/json',
		Authorization: 'Basic SmVzdXMxMjM6eDVuc3hYcUlrQ0NDTjU1UVAqMXlqZ3ZG'
	};

	const { data } = await axios.post(
		'https://vip.hdlatino.us/wp-json/wp/v2/posts',
		post,
		{
			headers
		}
	);

	return data;
};
