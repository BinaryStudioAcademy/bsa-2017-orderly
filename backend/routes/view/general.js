const router = require('express').Router();
const formRepository = require('../../repositories/view/formRepositories');
const galleryRepository = require('../../repositories/view/galleryRepositories');
const gridRepository = require('../../repositories/view/gridRepositories');
const kanbanRepository = require('../../repositories/view/kanbanRepositories');


router.get('/tables/views/ids/:ids', (request, response, next) => {
    Promise.all(
        [
            gridRepository.getByIds(request.params.ids.split(':')),
            formRepository.getByIds(request.params.ids.split(':')),
            galleryRepository.getByIds(request.params.ids.split(':')),
            kanbanRepository.getByIds(request.params.ids.split(':'))
        ])
        .then(([...views]) => response.status(200).send(views))
        .catch((error) => {
            response.status(400);
            next(error);
        });
})

module.exports = router;