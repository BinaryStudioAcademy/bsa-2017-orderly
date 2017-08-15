const router = require('express').Router();
const R = require('ramda');
const tableRepository = require('../../repositories/table/tableRepository');

// tables

router.post('/', (request, response, next) => {
    tableRepository.add(request.body)
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

// records

router.post('/:id/records', (request, response, next) => {
    tableRepository.update(request.params.id, request.body)
        .then((table) => response.status(200).send(table))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

// router.get('/records/:id', (request, response, next) => {
//     recordRepository.getById(request.params.id)
//         .then((record) => response.status(200).send(record))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.get('/:id/records', (request, response, next) => {
//     tableRepository.getById(request.params.id)
//         .then((data) => {
// 	        // return R.compose(recordRepository.getByIds, R.prop('records'))
// 	        return recordRepository.getByIds(R.map(recordId => recordId.toString())(data.records))
//         } )
//         .then((records) => {
// 	        response.status(200).send(records)
//         } )
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.delete('/:tableId/records/:recordId', (request, response, next) => {
//     tableRepository.pullRecord(request.params.tableId, request.params.recordId)
//         .then(() => recordRepository.remove(request.params.recordId))
//         .then(() => response.sendStatus(204))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.put('/records/:recordId', (request, response, next) => {
//     recordRepository.update(request.params.recordId, request.body)
//         .then((record) => response.status(200).send(record))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// comments

// router.post('/records/:recordId/comments', (request, response, next) => {
//     commentRepository.add(request.body)
//         .then(R.curry(recordRepository.addComment)(request.params.recordId))
//         .then((record) => response.status(200).send(record))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.delete('/records/:recordId/comments/:commentId', (request, response, next) => {
//     recordRepository.pullComment(request.params.recordId, request.params.commentId)
//         .then(() => commentRepository.remove(request.params.commentId))
//         .then(() => response.sendStatus(204))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// field

// router.post('/:id/fields', (request, response, next) => {
//     fieldRepository.add(request.body)
//         .then(R.curry(tableRepository.addField)(request.params.id))
//         .then((table) => response.status(200).send(table))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.put('/fields/:fieldId', (request, response, next) => {
//     fieldRepository.update(request.params.fieldId, request.body)
//         .then((field) => response.status(200).send(field))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.get('/fields/:id', (request, response, next) => {
//     fieldRepository.getById(request.params.id)
//         .then((field) => response.status(200).send(field))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.get('/:id/fields', (request, response, next) => {
//     tableRepository.getById(request.params.id)
//         .then(R.compose(fieldRepository.getByIds, R.prop('fields')))
//         .then((fields) => response.status(200).send(fields))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.delete('/:tableId/fields/:fieldId', (request, response, next) => {
//     tableRepository.pullField(request.params.tableId, request.params.fieldId)
//         .then(() => fieldRepository.remove(request.params.fieldId))
//         .then(() => response.sendStatus(204))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// views

// router.put('/:tableId/views/:viewId', (request, response, next) => {
//     tableRepository.linkView(request.params.tableId, request.params.viewId)
//         .then(() => response.sendStatus(200))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

// router.delete('/:tableId/views/:viewId', (request, response, next) => {
//     tableRepository.unlinkView(request.params.tableId, request.params.viewId)
//         .then(() => response.sendStatus(204))
//         .catch((error) => {
//             response.status(400);
//             next(error);
//         });
// });

module.exports = router;

