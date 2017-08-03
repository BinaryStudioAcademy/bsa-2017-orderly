var apiResponse = require('express-api-response');
var tableRepository = require('../repositories/tableRepository');

module.exports = function(app) {
	// tables

	app.post('/api/tables', (request, response, next) => {
		tableRepository.add(request.body, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.get('/api/tables/:id', (request, response, next) => {
		tableRepository.getById(request.params.id, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.get('/api/tables', (request, response, next) => {
		tableRepository.getAll((err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);
	
	app.put('/api/tables/:id', (request, response, next) => {
		tableRepository.update(request.params.id, request.body, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.delete('/api/tables/:id', (request, response, next) => {
		tableRepository.delete(request.params.id, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	// records

	app.post('/api/tables/:id/records', (request, response, next) => {
		tableRepository.addRecord(request.params.id, request.body, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.delete('/api/tables/:tableId/records/:recordId', (request, response, next) => {
		tableRepository.deleteRecord(request.params.tableId, request.params.recordId, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.put('/api/tables/:tableId/records/:recordId', (request, response, next) => {
		tableRepository.updateRecord(request.params.tableId, request.params.recordId, request.body, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	// comments

	app.post('/api/tables/:tableId/records/:recordId/comments', (request, response, next) => {
		tableRepository.addComment(request.params.tableId, request.params.recordId, request.body, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.delete('/api/tables/:tableId/records/:recordId/comments/:commentId', (request, response, next) => {
		tableRepository.deleteComment(request.params.tableId, request.params.recordId, request.params.commentId, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	// field

	app.post('/api/tables/:id/fields', (request, response, next) => {
		tableRepository.addField(request.params.id, request.body, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.put('/api/tables/:tableId/fields/:fieldId', (request, response, next) => {
		tableRepository.updateField(request.params.tableId, request.params.fieldId, request.body, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.delete('/api/tables/:tableId/fields/:fieldId', (request, response, next) => {
		tableRepository.deleteField(request.params.tableId, request.params.fieldId, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	// views

	app.post('/api/tables/:tableId/views/:viewId', (request, response, next) => {
		tableRepository.addView(request.params.tableId, request.params.viewId, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);

	app.delete('/api/tables/:tableId/views/:viewId', (request, response, next) => {
		tableRepository.deleteView(request.params.tableId, request.params.viewId, (err, data) => {
			response.data = data;
			response.err = err;
			next();
		});
	}, apiResponse);
};