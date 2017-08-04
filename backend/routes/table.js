const router = require('express').Router();
const tableRepository = require('../repositories/tableRepository');

// tables

router.post('/', (request, response, next) => {
	tableRepository.add(request.body)
		.then(table => response.status(201).send(table))
		.catch(error => {response.status(400); next(error)});
});

router.get('/:id', (request, response, next) => {
	tableRepository.getById(request.params.id)
		.then(table => response.status(200).send(table))
		.catch(error => {response.status(400); next(error)});
});

router.get('/', (request, response, next) => {
	tableRepository.getAll()
		.then(tables => response.status(200).send(tables))
		.catch(error => {response.status(400); next(error)});
});

router.put('/:id', (request, response, next) => {
	tableRepository.update(request.params.id, request.body)
		.then(table => response.status(200).send(table))
		.catch(error => {response.status(400); next(error)});
});

router.delete('/:id', (request, response, next) => {
	tableRepository.remove(request.params.id)
		.then(() => response.sendStatus(204))
		.catch(error => {response.status(400); next(error)});
});

// records

router.post('/:id/records', (request, response, next) => {
	tableRepository.addRecord(request.params.id, request.body)
		.then(record => response.status(200).send(record))
		.catch(error => {response.status(400); next(error)});
});

router.get('/:tableId/records/:recordId', (request, response, next) => {
	tableRepository.getRecordById(request.params.tableId, request.params.recordId)
		.then(record => response.status(200).send(record))
		.catch(error => {response.status(400); next(error)});
});

router.get('/:id/records', (request, response, next) => {
	tableRepository.getAllRecordsByTableId(request.params.id)
		.then(records => response.status(200).send(records))
		.catch(error => {response.status(400); next(error)});
});

router.delete('/:tableId/records/:recordId', (request, response, next) => {
	tableRepository.deleteRecord(request.params.tableId, request.params.recordId)
		.then(() => response.status(204))
		.catch(error => {response.status(400); next(error)});
});

router.put('/:tableId/records/:recordId', (request, response, next) => {
	tableRepository.updateRecord(request.params.tableId, request.params.recordId, request.body)
		.then(record => response.status(200).send(record))
		.catch(error => {response.status(400); next(error)});
});

// comments

router.post('/:tableId/records/:recordId/comments', (request, response, next) => {
	tableRepository.addComment(request.params.tableId, request.params.recordId, request.body)
		.then(comment => response.status(200).send(comment))
		.catch(error => {response.status(400); next(error)});
});

router.delete('/:tableId/records/:recordId/comments/:commentId', (request, response, next) => {
	tableRepository.deleteComment(request.params.tableId, request.params.recordId, request.params.commentId)
		.then(() => response.status(204))
		.catch(error => {response.status(400); next(error)});
});

// field

router.post('/:id/fields', (request, response, next) => {
	tableRepository.addField(request.params.id, request.body)
		.then(field => response.status(200).send(field))
		.catch(error => {response.status(400); next(error)});
});

router.put('/:tableId/fields/:fieldId', (request, response, next) => {
	tableRepository.updateField(request.params.tableId, request.params.fieldId, request.body)
		.then(field => response.status(200).send(field))
		.catch(error => {response.status(400); next(error)});
});

router.delete('/:tableId/fields/:fieldId', (request, response, next) => {
	tableRepository.deleteField(request.params.tableId, request.params.fieldId)
		.then(() => response.status(204))
		.catch(error => {response.status(400); next(error)});
});

// views

router.post('/:tableId/views/:viewId', (request, response, next) => {
	tableRepository.addView(request.params.tableId, request.params.viewId)
		.then(() => request.status(200))
		.catch(error => {response.status(400); next(error)});
});

router.delete('/:tableId/views/:viewId', (request, response, next) => {
	tableRepository.deleteView(request.params.tableId, request.params.viewId)
		.then(() => request.status(204))
		.catch(error => {response.status(400); next(error)});
});

module.exports = router;

