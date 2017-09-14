import io from 'socket.io-client';
import API from '../config';
const socket = io(API.host);

const emitTableCoworker = (user, tableId, tables) => {
    return socket.emit('client-upload-table', user, tableId);
};

const emitSwitchTableCoworker = (user, tableId) => {
    socket.connect();
    return socket.emit('client-change-table', user, tableId);
};

const onGetCoworkersList = (callback) => {
    socket.on('server-get-coworkers-list', function (coworkersByTables) {
        callback(coworkersByTables);
    });
};

const connect = () => {
    return socket.connect();
};

const disconnect = () => {
    return socket.disconnect();
};

export {
    emitTableCoworker,
    emitSwitchTableCoworker,
    onGetCoworkersList,
    connect,
    disconnect
};