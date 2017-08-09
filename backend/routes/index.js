module.exports = (router) => {
    router.use('/view', require('./view'));
    router.use('/team', require('./team/teamRoutes'));
    router.use('/tables', require('./table'));
    router.use('/base', require('./base/baseRoutes'));
    router.use('/baseIcon', require('./base/baseIconRoutes'));
};