const router = require('express').Router();
const R = require('ramda');

const tableRepository = require('../../repositories/table/tableRepository');
const { defaultTable } = require('../../config/defaultTable');


// tables
router.post('/', (request, response, next) => {
    let newTable = request.body || defaultTable;
    tableRepository.add(R.merge(newTable, request.body))
        .then((table) => response.status(201).send(table))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

router.get('/ids/:ids', (request, response, next) => {
    tableRepository.getByIds(request.params.ids.split(':'))
        .then((tables) => response.status(200).send(tables))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

router.get('/:id', (request, response, next) => {
    tableRepository.getById(request.params.id)
        .then((table) => response.status(200).send(table))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

router.get('/', (request, response, next) => {
    tableRepository.getAll()
        .then((tables) => response.status(200).send(tables))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

router.put('/:id', (request, response, next) => {
    tableRepository.update(request.params.id, request.body)
        .then((table) => response.status(200).send(table))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

router.delete('/:id', (request, response, next) => {
    tableRepository.remove(request.params.id)
        .then(() => response.sendStatus(204))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

// records
router.get('/:id/records', (request, response) => {
    tableRepository.getRecords(request.params.id)
        .then((records) => response.status(200).send(records))
        .catch((err) => response.status(500).send(err));
});

router.get('/:id/records/:recordId', (request, response) => {
    tableRepository.getOneRecord(request.params.id, request.params.recordId)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err));
});

router.post('/:id/records', (request, response, next) => {
    tableRepository.addRecord(request.params.id, request.body)
        .then((result) => response.status(200).send(result))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

router.put('/:id/records', (request, response) => {
    tableRepository.updateRecords(request.params.id, request.body)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err));
});

router.delete('/:id/records/:recordId', (request, response) => {
    tableRepository.pullRecord(request.params.id, request.params.recordId)
        .then((result) => response.send(result))
        .catch((err) => response.sendStatus(500).send(err));
});

// field
router.get('/:id/fields', (request, response) => {
    tableRepository.getFields(request.params.id)
        .then((fields) => response.status(200).send(fields))
        .catch((err) => response.status(500).send(err));
});

router.get('/:id/fields/:fieldId', (request, response) => {
    tableRepository.getOneField(request.params.id, request.params.fieldId)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err));
});

router.post('/:id/fields', (request, response) => {
    tableRepository.addField(request.params.id, request.body)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err));
});

router.put('/:id/fields', (request, response) => {
    tableRepository.updateFields(request.params.id, request.body)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err));
});

router.put('/:id/fields/:fieldId', (request, response) => {
    tableRepository.updateField(request.params.id, request.params.fieldId, request.body)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err));
});

router.delete('/:id/fields/:fieldId', (request, response) => {
    tableRepository.deleteField(request.params.id, request.params.fieldId)
        .then((result) => response.send(result))
        .catch((err) => response.sendStatus(500).send(err));
});

router.delete('/:id/fields', (request, response) => {
    tableRepository.deleteAllFields(request.params.id)
        .then((result) => response.send(result))
        .catch((err) => response.sendStatus(500).send(err));
});

module.exports = router;

