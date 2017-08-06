const router = require('express').Router();
const galleryRepository = require('../../repositories/view/galleryRepositories');

router.get('/:viewId', (request, response) => {
    galleryRepository.getById(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get gallery view. ${error}`));
});

router.get('/', (request, response) => {
    galleryRepository.getAll()
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get gallery view list. ${error}`));
});

router.post('/', (request, response) => {
    galleryRepository.add(request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add gallery view. ${error}`));
});

router.put('/:viewId', (request, response) => {
    galleryRepository.update(request.params.viewId, request.body)
        .then((data) => response.status(200).send( data))
        .catch((error) => response.status(400).send(`Can not update gallery view. ${error}`));
});

router.delete('/:viewId', (request, response) => {
    galleryRepository.remove(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete gallery view. ${error}`));
});

router.post('/:viewId/records', (request, response) => {
    galleryRepository.addRecords(request.params.viewId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not add gallery view config. ${error}`));
});
 
router.put('/:viewId/records/:recordsId', (request, response) => {
    galleryRepository.updateRecords(request.params.viewId, request.params.configId, request.body)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not update gallery view config. ${error}`));
});

router.delete('/:viewId/records/:recordsId', (request, response) => {
    galleryRepository.deleteRecords(request.params.viewId, request.params.configId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not delete gallery view config. ${error}`));
});

module.exports = router;
