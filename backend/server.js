const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require('./routes/index')(router);

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use("./api", router);

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

app.listen(2020, () => {
    console.log('Server is started on localhost:2020');
});

module.exports = app;