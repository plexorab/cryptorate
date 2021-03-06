const getUri = () => {
	return `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
}

const getOptions = () => {
	const options = {
		authSource: process.env.DB_AUTHDB,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	return options;
}

module.exports = {
	getUri,
	getOptions,
};