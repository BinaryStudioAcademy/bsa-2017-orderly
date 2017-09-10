const router = require('express').Router();
const R = require('ramda');
const tableRepository = require('../../repositories/table/tableRepository');
const {defaultTable, defaultViews} = require('../../config/defaultEntities');

const viewReps = {
    grid: require('../../repositories/view/gridRepositories'),
    form: require('../../repositories/view/formRepositories'),
    kanban: require('../../repositories/view/kanbanRepositories'),
    gallery: require('../../repositories/view/galleryRepositories')
};

// tables -------------------------------------
router.post('/', (request, response, next) => {
    let newTable = request.body || defaultTable();
    return Promise.all(
        [
            tableRepository.add(R.merge(newTable, request.body)),
            viewReps['grid'].add(defaultViews['grid'])
        ])
        .then(([table, view]) => tableRepository.addView(table._id, view._id, view.type))
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

// records -------------------------------------
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

// fields -------------------------------------
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

// views -------------------------------------
router.get('/:id/views/:viewId', (request, response) => {
    tableRepository.getView(request.params.id, request.params.viewId)
        .then((tables) => response.status(200).send(tables))
        .catch((error) => response.status(500).send(error));
});

router.get('/:id/views/', (request, response) => {
    tableRepository.getViews(request.params.id)
        .then((tables) => response.status(200).send(tables))
        .catch((error) => response.status(500).send(error));
});

router.get('/:id/views/:viewId/:viewType', (request, response) => {
    tableRepository.getFromView(request.params.viewId, request.params.viewType)
        .then((tables) => response.status(200).send(tables))
        .catch((error) => response.status(500).send(error));
});

router.post('/:id/views', (request, response) => {
    const typeOfView = request.body.viewType;
    viewReps[typeOfView].add(defaultViews[typeOfView])
		.then((view) => tableRepository.addView(request.body.tableId, view._id, view.type))
		.then((result) => response.status(200).send(result))
		.catch((err) => response.status(500).send(err));
});

router.delete('/:id/views/:viewId/:viewType', (request, response) => {
    tableRepository.deleteView(request.params.id, request.params.viewId, request.params.viewType)
        .then((result) => response.status(200).send(result))
        .catch((err) => response.status(500).send(err));
});

// filter table -------------------------------------

router.get('/:id/views/:viewId/fields/filter', (request, response) => {
    tableRepository.filterRecords(request.params.id, request.params.viewId)
        .then((result) => response.status(200).send(result))
        .catch((error) => response.status(500).send(error));
});

router.post('/:id/views/:viewType/:viewId/fields/:fieldId/:fieldIndex/filters', (request, response) => {
    tableRepository.addFilter(
        request.params.id,
        request.params.viewId,
        request.params.viewType,
        request.params.fieldId,
        request.params.fieldIndex)
        .then((result) => response.status(200).send(result))
        .catch((error) => response.status(500).send(error));
});

router.put('/:id/views/:viewType/:viewId/fields/:fieldId/:fieldIndex/filters/:filterId/:condition/:query?', (request, response) => {
    tableRepository.updateFilter(
        request.params.id,
        request.params.viewId,
        request.params.viewType,
        request.params.fieldId,
        request.params.fieldIndex,
        request.params.filterId,
        request.params.condition,
        request.params.query)
        .then((result) => response.status(200).send(result))
        .catch((error) => response.status(500).send(error));
});

router.delete('/:id/views/:viewType/:viewId/filters/:filterId', (request, response) => {
    tableRepository.removeFilter(
        request.params.id,
        request.params.viewId,
        request.params.viewType,
        request.params.filterId)
        .then((result) => response.status(200).send(result))
        .catch((error) => response.status(500).send(error));
});

router.delete('/:id/views/:viewType/:viewId/filters/', (request, response) => {
    tableRepository.removeAllFilters(
        request.params.id,
        request.params.viewId,
        request.params.viewType)
        .then((result) => response.status(200).send(result))
        .catch((error) => response.status(500).send(error));
});

module.exports = router;

