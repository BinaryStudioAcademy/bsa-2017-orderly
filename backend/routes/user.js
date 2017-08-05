let userRepository = require('../repositories/userRepository');

module.exports = function (app) {
    app.get('/api/users/:id', function (req, res, next) {
        userRepository.getById(req.params.id, function (err, data) {
            res.data = data;
            res.err = err;
            next();
        });
    });
};
