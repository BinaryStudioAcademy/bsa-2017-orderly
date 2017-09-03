module.exports = function (io) {
    io.on('connection', function (socket) {
        let currentUser;
        const coworkersService = require('./coworkersService');

        socket.on('client-upload-table', function (user, tableId) {
            currentUser = user;
            coworkersService.addCoworker(user, tableId, (data) => {
                io.emit('server-get-coworkers-list', data);
            });
        });

        socket.on('client-change-table', function (user, tableId) {
            coworkersService.coworkerChangeTable(user, tableId, (data) => {
                io.emit('server-get-coworkers-list', data);
            });
        });

        socket.on('disconnect', function () {
            coworkersService.removeCoworker(currentUser,(data) => {
                io.emit('server-get-coworkers-list', data);
            });
        });
    });
};