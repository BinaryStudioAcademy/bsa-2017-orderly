const router = require('express').Router();
const R = require('ramda')
const tableRepository = require('../repositories/tableRepository');
const fieldRepository = require('../repositories/fieldRepository');
const recordRepository = require('../repositories/recordRepository').recordRepository;
const commentRepository = require('../repositories/recordRepository').commentRepository;

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

router.post('/:id/records', (request, response, next) => {     // R.curry - обычное каррирование, позволяет отложенно вызывать
	recordRepository.add(request.body)													// функцию в зависимости от наличия аргументов
		// r => tableRepository.updateRecord(request.params.id, r)
		.then(R.curry(tableRepository.updateRecord)(request.params.id))  // здесь в tableRepository.updateRecord сначала передается tableRepository.updateRecord
		.then(table => response.status(200).send(table))						// а потом то, что приходит из функции recordRepository.add
		.catch(error => {response.status(400); next(error)});
});

router.get('/records/:id', (request, response, next) => {
	recordRepository.getById(request.params.id)
		.then(record => response.status(200).send(record))
		.catch(error => {response.status(400); next(error)});
});

router.get('/:id/records', (request, response, next) => {
	tableRepository.getById(request.params.id)
		// t => recordRepository.getByIds(t.records)
        .then(R.compose(recordRepository.getByIds, R.prop('records'))) // R.compose(func2, func1) - вызовет сначала func1 потом передаст результат выполнения
		.then(records => response.status(200).send(records))						// в func2 и вернет его. R.prop('records) - берет значение в поле records объекта, который
		.catch(error => {response.status(400); next(error)});						// возвращает tableRepository.getById
});

router.delete('/:tableId/records/:recordId', (request, response, next) => {
	tableRepository.pullRecord(request.params.tableId, request.params.recordId)
		.then(() => recordRepository.remove(request.params.recordId))
		.then(() => response.sendStatus(204))
		.catch(error => {response.status(400); next(error)});
});

router.put('/records/:recordId', (request, response, next) => {
	recordRepository.update(request.params.recordId, request.body)
		.then(record => response.status(200).send(record))
		.catch(error => {response.status(400); next(error)});
});

// comments

router.post('/records/:recordId/comments', (request, response, next) => {
	commentRepository.add(request.body)
		.then(R.curry(recordRepository.addComment)(request.params.recordId))
		.then(record => response.status(200).send(record))
		.catch(error => {response.status(400); next(error)});
});

router.delete('/records/:recordId/comments/:commentId', (request, response, next) => {
	recordRepository.pullComment(request.params.recordId, request.params.commentId)
		.then(() => commentRepository.remove(request.params.commentId))
		.then(() => response.sendStatus(204))
		.catch(error => {response.status(400); next(error)});
});

// field

router.post('/:id/fields', (request, response, next) => {
	fieldRepository.add(request.body)
		.then(R.curry(tableRepository.addField)(request.params.id))
		.then(table => response.status(200).send(table))
		.catch(error => {response.status(400); next(error)});
});

router.put('/fields/:fieldId', (request, response, next) => {
	fieldRepository.update(request.params.fieldId, request.body)
		.then(field => response.status(200).send(field))
		.catch(error => {response.status(400); next(error)});
});

router.get('/fields/:id', (request, response, next) => {
	fieldRepository.getById(request.params.id)
		.then(field => response.status(200).send(field))
		.catch(error => {response.status(400); next(error)});
});

router.get('/:id/fields', (request, response, next) => {
	tableRepository.getById(request.params.id)
		.then(R.compose(fieldRepository.getByIds, R.prop('fields')))
		.then(fields => response.status(200).send(fields))
		.catch(error => {response.status(400); next(error)});
});

router.delete('/:tableId/fields/:fieldId', (request, response, next) => {
	tableRepository.pullField(request.params.tableId, request.params.fieldId)
		.then(() => fieldRepository.remove(request.params.fieldId))
		.then(() => response.sendStatus(204))
		.catch(error => {response.status(400); next(error)});
});

// views

router.put('/:tableId/views/:viewId', (request, response, next) => {
	tableRepository.linkView(request.params.tableId, request.params.viewId)
		.then(() => request.status(200))
		.catch(error => {response.status(400); next(error)});
});

router.delete('/:tableId/views/:viewId', (request, response, next) => {
	tableRepository.unlinkView(request.params.tableId, request.params.viewId)
		.then(() => request.status(204))
		.catch(error => {response.status(400); next(error)});
});

module.exports = router;

