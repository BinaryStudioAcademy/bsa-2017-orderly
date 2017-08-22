module.exports = (router) => {
    router.use('/user', require('./user/user'));
    router.use('/view', require('./view'));
    router.use('/team', require('./team/teamRoutes'));
    router.use('/tables', require('./table/table'));
    router.use('/base', require('./base/baseRoutes'));
    router.use('/files', require('./uploadFiles/uploadFilesRoutes'));
};