const express = require('express');
const router = express.Router();
const tableRepository = require('../../repositories/table/tableRepository');
const formRepository = require('../../repositories/view/formRepositories');

router.get('/:tableId/:viewId', (request, response) => {
    formRepository.getById(request.params.viewId)
        .then((data) => response.status(200).send(data))
        .catch((error) => response.status(400).send(`Can not get form view. ${error}`));
});

router.get('/:tableId', (request, response) => {
    tableRepository.getById(request.params.tableId)
        .then((table) => response.status(200).send(table))
        .catch((error) => response.status(400).send(`Can not get form view. ${error}`));
});

router.put('/:tableId', (request, response) => {
    tableRepository.update(request.params.tableId, request.body)
        .then((table) => response.status(200).send(table))
        .catch((error) => response.status(400).send(`Can not get form view. ${error}`));
});

module.exports = router;