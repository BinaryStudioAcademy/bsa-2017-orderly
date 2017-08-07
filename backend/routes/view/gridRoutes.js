const router = require('express').Router();
const gridRepository = require('../../repositories/view/gridRepositories');

router.get('/:viewId', (request, response) => {
    gridRepository.getById(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get grid view. ${error}`));
});

router.get('/', (request, response) => {
    gridRepository.getAll()
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get grid view list. ${error}`));
});

router.post('/', (request, response) => {
    gridRepository.add(request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add grid view. ${error}`));
});

router.put('/:viewId', (request, response) => {
    gridRepository.update(request.params.viewId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update grid view. ${error}`));
});

router.delete('/:viewId', (request, response) => {
    gridRepository.remove(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete grid view. ${error}`));
});

router.post('/:viewId/fields', (request, response) => {
    gridRepository.addField(request.params.viewId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add grid view field. ${error}`));
});

router.put('/:viewId/fields/:fieldId', (request, response) => {
    gridRepository.updateField(request.params.viewId, request.params.fieldId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update grid view field. ${error}`));
});

router.put('/:viewId/fields/:fieldId', (request, response) => {
    gridRepository.updateField(request.params.viewId, request.params.fieldId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update grid view field. ${error}`));
});

router.delete('/:viewId/fields/:fieldId', (request, response) => {
    gridRepository.deleteField(request.params.viewId, request.params.fieldId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete form view field. ${error}`));
});

module.exports = router;

