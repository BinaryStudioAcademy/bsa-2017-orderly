const router = require('express').Router();
const formRepository = require('../../repositories/view/formRepositories');

router.get('/:viewId', (request, response) => {
    formRepository.getById(request.params.viewId)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.get('/', (request, response) => {
    formRepository.getAll()
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.post('/', (request, response) => {
    formRepository.add(request.body)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.put('/:viewId', (request, response) => {
    formRepository.update(request.params.viewId, request.body)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.delete('/:viewId', (request, response) => {
    formRepository.deleteForm(request.params.viewId)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.post('/:viewId/fields', (request, response) => {
    formRepository.addField(request.params.viewId, request.body)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400))
});

router.put('/:viewId/fields/:fieldId', (request, response) => {
    formRepository.updateField(request.params.viewId, request.params.fieldId, request.body)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.delete('/:viewId/fields/:fieldId', (request, response) => {
    formRepository.deleteField(request.params.viewId, request.params.fieldId,)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

module.exports = router;
