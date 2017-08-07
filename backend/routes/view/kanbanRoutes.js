const router = require('express').Router();
const kanbanRepository = require('../../repositories/view/kanbanRepositories');

router.get('/:viewId', (request, response) => {
    kanbanRepository.getById(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get kanban view. ${error}`));
});

router.get('/', (request, response) => {
    kanbanRepository.getAll()
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get kanban view list. ${error}`));
});

router.post('/', (request, response) => {
    kanbanRepository.add(request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add kanban view. ${error}`));
});

router.put('/:viewId', (request, response) => {
    kanbanRepository.update(request.params.viewId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update kanban view. ${error}`));
});

router.delete('/:viewId', (request, response) => {
    kanbanRepository.remove(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete kanban view. ${error}`));
});

router.post('/:viewId/columns', (request, response) => {
    kanbanRepository.addColumn(request.params.viewId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add kanban view column. ${error}`));
});

router.put('/:viewId/columns/:columnId', (request, response) => {
    kanbanRepository.updateColumn(request.params.viewId, request.params.columnId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update kanban view column. ${error}`));
});

router.delete('/:viewId/columns/:columnId', (request, response) => {
    kanbanRepository.deleteColumn(request.params.viewId, request.params.columnId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete kanban view column. ${error}`));
});

module.exports = router;