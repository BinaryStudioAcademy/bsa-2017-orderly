const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = express.Router();
const favicon = require('serve-favicon');
const port = 2020;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(favicon(path.join(__dirname, 'favicon.ico')));

require('./routes/index')(router);
app.use('/api', router);

app.use((req, res, next) => {
    let err = new Error('Route not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log('Server is started on localhost:2020');
});

module.exports = app;
