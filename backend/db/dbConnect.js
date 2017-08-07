function dbConnectionHandler() {
    const mongoose = require('mongoose');
    const config = require('../config/db');

    mongoose.Promise = global.Promise;
    mongoose.connect(config.uri, config.opts);

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection db error: '));
    db.once('open', () => {
        console.log(`Connection to MongoDB by URL '${config.uri}' successfully obtained`);
    });
}

module.exports = new dbConnectionHandler();