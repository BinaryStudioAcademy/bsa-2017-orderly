module.exports = function (io) {
    io.on('connection', function (socket) {
        const coworkersService = require('./coworkersService');

        socket.on('client-upload-table', function (user, tableId) {
            coworkersService.addCoworker(user, tableId, (data) => {
                io.emit('server-get-coworkers-list', data);
            });
        });

        socket.on('disconnect', function (userId, tableId) {
            coworkersService.removeCoworker(userId, tableId, () => {
                //
            });
        });
    });
};