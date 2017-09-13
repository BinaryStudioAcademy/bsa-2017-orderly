import io from 'socket.io-client';
import AppConfig from '../config';
const socket = io(AppConfig.host);

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


const tableAddSuccess = (callback) => {
	socket.on('table:add:success', table => {
		console.log(table, '<------ from socket')
		callback(table)
	})
}



export {
    emitTableCoworker,
    emitSwitchTableCoworker,
    onGetCoworkersList,
    connect,
    disconnect,
	tableAddSuccess
};