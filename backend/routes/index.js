const teamRoutes = require('./team/teamRoutes');

module.exports = (router) => {
    router.get('/', (req, res) => {
        res.send('REST API orderly v1.0');
    });

    router.use('/team', teamRoutes);
};
