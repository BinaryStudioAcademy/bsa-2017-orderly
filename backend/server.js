const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// что-то не так зарекваирилось, не находит роут /api/teams/.
// Я начинал с POST, так как определил в репозитории для него addTeam
require('./routes/index')(router);

app.get('/', function (req, res) {
  res.send('Hello World!')
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