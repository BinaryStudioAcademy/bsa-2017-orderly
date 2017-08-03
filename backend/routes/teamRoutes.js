var apiResponse = require('express-api-response');
var teamRepository = require('../repositories/teamRepository');

module.exports = function(app) {
    app.get('/api/teams/:id', function(req, res, next) {
        teamRepository.getById(req.params.id, function(err, data) {
            if(!err) {
                res.data = data;
                res.json(res.data);
            } else {
                res.err = err;
                res.status(400);
                res.end();
            }
        });
    }, apiResponse);

    app.get('/api/teams/', function(req, res, next) {
        teamRepository.getAll(req.body, function(err, data) {
            if(!err) {
                res.data = data;
                res.json(res.data);
            } else {
                res.err = err;
                res.status(400);
                res.end();
            }
        });
    }, apiResponse);

    app.post('/api/teams/', function(req, res, next) {
        const objTeam = {
            "id": req.body.id,
            "owner": req.body.owner,
            "name": req.body.name,
            "collaborators": req.body.collaborators,
            "bases": req.body.bases
        };
        teamRepository.addTeam(objTeam, function(err, data) {
            res.data = data.rows[0];
            res.json(res.data);

        });
    }, apiResponse);

    app.delete('/api/teams/:id', function(req, res, next) {
        teamRepository.findOneAndDelete(Number(req.params.id), function(err, data) {
            if(!err) {
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    }, apiResponse);

    app.put('/api/teams/:id', function(req, res, next) {
        const objTeam = req.body;
        teamRepository.findOneAndUpdate(Number(req.params.id), objTeam, function(err, data) {
            if(!err) {
                res.json(res.data);
            } else {
                res.status(400);
                res.end();
            }
        });
    }, apiResponse);
};