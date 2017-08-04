const router = require('express').Router();
const kanbanRepository = require('../../repositories/view/kanbanRepositories');

router.get('/:viewId', (request, response) => {
    kanbanRepository.getById(request.params.viewId)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.get('/', (request, response) => {
    kanbanRepository.getAll()
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.post('/', (request, response) => {
    kanbanRepository.add(request.body)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.delete('/:viewId/columns/:columnId', (request, response) => {
    kanbanRepository.deleteColumn(request.params.viewId, request.params.columnId,)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.put('/:viewId', (request, response) => {
    kanbanRepository.update(request.params.viewId, request.body)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.delete('/:viewId', (request, response) => {
    kanbanRepository.deleteKanban(request.params.viewId)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

router.post('/:viewId/columns', (request, response) => {
    kanbanRepository.addColumn(request.params.viewId, request.body)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400))
});

router.put('/:viewId/columns/:columnId', (request, response) => {
    kanbanRepository.updateColumn(request.params.viewId, request.params.columnId, request.body)
        .then(data => response.status(200).send(data))
        .catch(error => response.sendStatus(400));
});

module.exports = router;