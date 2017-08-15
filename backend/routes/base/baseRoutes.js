const router = require('express').Router();
const baseRepository = require('../../repositories/base/baseRepository');

router.get('/', (req, res) => {
    baseRepository.getAll().then((bases) => {
        res.status(200).send(bases);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.get('/:id', (req, res) => {
    baseRepository.getById(req.params.id).then((base) => {
        res.status(base ? 200 : 400).send(base);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post('/', (req, res) => {
    baseRepository.add(req.body).then((base) => {
        res.status(200).send(base);
    }).catch((err) => {
        res.status(500).send(err);
    })
    ;
});

router.delete('/:id', (req, res) => {
    baseRepository.remove(req.params.id).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });

});

router.put('/:id', function (req, res) {
    baseRepository.update(req.params.id, req.body).then((result) => {
        res.status(result ? 200 : 400).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.put('/:id/tables/:tableId', (req, res) => {
    baseRepository.addTable(req.params.id, req.params.tableId)
        .then((result) => res.status(result ? 200 : 400).send(result))
        .catch((err) => res.status(500).send(err));
});

module.exports = router;
