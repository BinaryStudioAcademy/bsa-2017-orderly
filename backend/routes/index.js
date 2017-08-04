const userRoutes = require('./userRoutes');
const viewRoutes = require('./view');

module.exports = function(app) {
	return {
		userRoutes: userRoutes(app),
        viewRoutes: viewRoutes(app)
	};
};
