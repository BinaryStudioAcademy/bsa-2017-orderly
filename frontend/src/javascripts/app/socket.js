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
		callback(table)
	})
}

const shareDeleteTable = (callback) => {
	socket.on('table:delete:success', tableId => {
		callback(tableId)
	})
}

const shareUpdateTable = (callback) => {
	socket.on('table:update:success', changedTable => {
		callback(changedTable)
	})
}

const shareAddingNewRecord = (callback) => {
	socket.on('record:add:success', table => {
		callback(table)
	})
}

const sharingUpdateFieldMeta = (callback) => {
	socket.on('field:update:meta:success', table => {
		callback(table)
	})
}

const sharingRemoveField = (callback) => {
	socket.on('field:delete:success', table => {
		callback(table)
	})
}

const sharingRemoveRecord = (callback) => {
	socket.on('record:delete:success', table => {
		callback(table)
	})
}



export {
	sharingRemoveRecord,
	sharingRemoveField,
	sharingUpdateFieldMeta,
	shareAddingNewRecord,
    emitTableCoworker,
    emitSwitchTableCoworker,
    onGetCoworkersList,
    connect,
    disconnect,
	tableAddSuccess,
	shareDeleteTable,
	shareUpdateTable
};