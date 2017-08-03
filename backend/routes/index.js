const userRoutes = require('./userRoutes');
const tableRoutes = require('./tableRoutes');

module.exports = function(app) {
	return {
		userRoutes: userRoutes(app),
		tableRoutes: tableRoutes(app)
	};
};
