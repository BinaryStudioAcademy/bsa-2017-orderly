const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const router = express.Router();
const passport = require('passport');
const favicon = require('serve-favicon');
const cors = require('cors');
const port = 2020;

app.use(morgan('combined'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '5mb'}));
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(passport.initialize());

const localSignupStrategy = require('./passport/localSignUp');
const localLoginStrategy = require('./passport/localLogin');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use(cors());

const authCheckMiddleware = require('./middleware/authCheck');
app.use('/api', authCheckMiddleware);
app.use('/auth', require('./routes/auth/auth'));

require('./routes/index')(router);
app.use('/api', router);
app.use('/files', require('./routes/uploadFiles/uploadFilesRoutes'));

app.use((request, response) => {
    response.sendStatus(404);
});

app.use((error, request, response) => {
    console.log(`Error while handling ${request.method} on ${request.originalUrl}: `);
    console.log(error.stack);
    if (!response.statusCode) {
        response.status(error.status || 500);
    }
    response.send();
});

const server = app.listen(port, () => {
    console.log('Server is started on localhost:2020');
});

const io = require('socket.io').listen(server);
const coworkers = require("./socketModules/coworkersSocket")(io);

module.exports = app;