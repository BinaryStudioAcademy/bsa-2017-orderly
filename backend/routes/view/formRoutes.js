const router = require('express').Router();
const formRepository = require('../../repositories/view/formRepositories');

router.get('/:viewId', (request, response) => {
    formRepository.getById(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get form view. ${error}`));
});

router.get('/', (request, response) => {
    formRepository.getAll()
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get form view list. ${error}`));
});

router.post('/', (request, response) => {
    formRepository.add(request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add form view. ${error}`));
});

router.put('/:viewId', (request, response) => {
    formRepository.update(request.params.viewId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update form view. ${error}`));
});

router.delete('/:viewId', (request, response) => {
    formRepository.remove(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete form view. ${error}`));
});

router.post('/:viewId/fields', (request, response) => {
    formRepository.addField(request.params.viewId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add form view field. ${error}`));
});

router.put('/:viewId/fields/:fieldId', (request, response) => {
    formRepository.updateField(request.params.viewId, request.params.fieldId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update form view field. ${error}`));
});

router.delete('/:viewId/fields/:fieldId', (request, response) => {
    formRepository.deleteField(request.params.viewId, request.params.fieldId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete form view field. ${error}`));
});

module.exports = router;
