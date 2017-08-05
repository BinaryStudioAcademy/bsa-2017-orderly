function dbConnectionHandler() {
    const mongoose = require('mongoose');
    const config = require('../config/db');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.uri, config.opts);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection db error: '));
    db.once('open', () => {
        console.log('connection to db is success!');
    });
}

module.exports = new dbConnectionHandler();
