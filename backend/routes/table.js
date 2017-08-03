const router = require('express').Router();
const tableRepository = require('../repositories/tableRepository');

// tables

router.post('/', (request, response) => {
	tableRepository.add(request.body)
		.then(table => request.status(200).send(table))
		.catch(error => response.sendStatus(400));
});

router.get('/:id', (request, response) => {
	tableRepository.getById(request.params.id)
		.then(table => request.status(200).send(table))
		.catch(error => response.sendStatus(400));
});

router.get('/', (request, response) => {
	tableRepository.getAll()
		.then(tables => request.status(200).send(tables))
		.catch(error => response.sendStatus(400));
});

router.put('/:id', (request, response) => {
	tableRepository.update(request.params.id, request.body)
		.then(table => request.status(200).send(table))
		.catch(error => response.sendStatus(400));
});

router.delete('/:id', (request, response) => {
	tableRepository.delete(request.params.id)
		.then(() => request.status(200))
		.catch(error => response.sendStatus(400));
});

// records

router.post('/:id/records', (request, response) => {
	tableRepository.addRecord(request.params.id, request.body)
		.then(record => request.status(200).send(record))
		.catch(error => response.sendStatus(400));
});

router.delete('/:tableId/records/:recordId', (request, response) => {
	tableRepository.deleteRecord(request.params.tableId, request.params.recordId)
		.then(() => request.status(200))
		.catch(error => response.sendStatus(400));
});

router.put('/:tableId/records/:recordId', (request, response) => {
	tableRepository.updateRecord(request.params.tableId, request.params.recordId, request.body)
		.then(record => request.status(200).send(record))
		.catch(error => response.sendStatus(400));
});

// comments

router.post('/:tableId/records/:recordId/comments', (request, response) => {
	tableRepository.addComment(request.params.tableId, request.params.recordId, request.body)
		.then(comment => request.status(200).send(comment))
		.catch(error => response.sendStatus(400));
});

router.delete('/:tableId/records/:recordId/comments/:commentId', (request, response) => {
	tableRepository.deleteComment(request.params.tableId, request.params.recordId, request.params.commentId)
		.then(() => request.status(200))
		.catch(error => response.sendStatus(400));
});

// field

router.post('/:id/fields', (request, response) => {
	tableRepository.addField(request.params.id, request.body)
		.then(field => request.status(200).send(field))
		.catch(error => response.sendStatus(400));
});

router.put('/:tableId/fields/:fieldId', (request, response) => {
	tableRepository.updateField(request.params.tableId, request.params.fieldId, request.body)
		.then(field => request.status(200).send(field))
		.catch(error => response.sendStatus(400));
});

router.delete('/:tableId/fields/:fieldId', (request, response) => {
	tableRepository.deleteField(request.params.tableId, request.params.fieldId)
		.then(() => request.status(200))
		.catch(error => response.sendStatus(400));
});

// views

router.post('/:tableId/views/:viewId', (request, response) => {
	tableRepository.addView(request.params.tableId, request.params.viewId)
		.then(() => request.status(200))
		.catch(error => response.sendStatus(400));
});

router.delete('/:tableId/views/:viewId', (request, response) => {
	tableRepository.deleteView(request.params.tableId, request.params.viewId)
		.then(() => request.status(200))
		.catch(error => response.sendStatus(400));
});

module.exports = router;