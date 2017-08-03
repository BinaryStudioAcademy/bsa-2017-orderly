const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');

module.exports = function(app) {
	return {
		userRoutes: userRoutes(app)
	};
};
