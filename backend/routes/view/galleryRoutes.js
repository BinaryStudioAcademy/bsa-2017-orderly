const router = require('express').Router();
const galleryRepository = require('../../repositories/view/galleryRepositories');

router.get('/:viewId', (request, response) => {
    galleryRepository.getById(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get form view. ${error}`));
});

router.get('/', (request, response) => {
    galleryRepository.getAll()
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get form view list. ${error}`));
});

router.post('/', (request, response) => {
    galleryRepository.add(request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add form view. ${error}`));
});

router.put('/:viewId', (request, response) => {
    galleryRepository.update(request.params.viewId, request.body)
        .then((data) => response.status(200).send( data))
        .catch((error) => response.status(400).send(`Can not update form view. ${error}`));
});

router.delete('/:viewId', (request, response) => {
    galleryRepository.remove(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete form view. ${error}`));
});

router.post('/:viewId/config', (request, response) => {
    galleryRepository.addRecordsConfig(request.params.viewId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add form view field. ${error}`));
});
 
router.put('/:viewId/config/:configId', (request, response) => {
    galleryRepository.updateRecordsConfig(request.params.viewId, request.params.configId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update form view field. ${error}`));
});

router.delete('/:viewId/config/:configId', (request, response) => {
    galleryRepository.deleteRecordsConfig(request.params.viewId, request.params.configId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete form view field. ${error}`));
});

module.exports = router;
