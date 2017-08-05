const express = require('express');
const bodyParser = require('body-parser');
// const path = require('path');
const morgan = require('morgan');
const app = express();
const router = express.Router();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/index')(router);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use("/api", router);

app.use((request, response, next) => {
    response.sendStatus(404);
});

app.use((error, request, response, next) => {
    console.log(`Error while handling ${request.method} on ${request.originalUrl}: `);
    console.log(error.stack);
    if (!response.statusCode) {
        response.status(error.status || 500);
    }
    response.send();
});

app.listen(2020, () => {
    console.log('Server is started on localhost:2020');
});

module.exports = app;