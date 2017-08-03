// const userRoutes = require('./userRoutes');

module.exports = function(router) {
	// userRoutes(router);
	router.use('/api/tables', require('./table'));
};
