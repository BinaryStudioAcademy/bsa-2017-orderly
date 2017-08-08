const router = require('express').Router();
const baseRepository = require('../../repositories/base/baseRepository');

router.get('/', (req, res) => {
    baseRepository.getAll().then((bases) => {
        res.send(bases);
    }).catch((err) => {
        res.send(`Can not get base list\n${err}`);
    });
});

router.get('/:id', (req, res) => {
    const baseId = req.params.id;
    baseRepository.getById(baseId).then((base) => {
        if (base) {
            res.send(base);
        } else {
            res.send(`No base with id ${baseId}`);
        }
    }).catch((err) => {
        res.send(`Can not get base ${baseId}\n${err}`);
    });
});

router.post('/', (req, res) => {
    const baseObj = req.body;
    baseRepository.add(baseObj).then((base) => {
        res.send(`Created ${base.name}`);
    }).catch((err) => {
        res.send(`Can not create base ${req.body.name}\n${err}`);
    })
    ;
});

router.delete('/:id', (req, res) => {
    const baseId = req.params.id;
    baseRepository.remove(baseId).then((result) => {
        if (result.n) {
            res.send(`Base  deleted:\n${result}`);
        } else {
            res.send(`No base with ID ${baseId}`);
        }
    }).catch((err) => {
        res.send(`Can not delete base, ${err}`);
    });

});

router.put('/:id', function (req, res) {
    const baseObj = req.body;
    const baseId = req.params.id;
    baseRepository.update(baseId, baseObj).then((result) => {
        if (result) {
            res.send(`Base ${baseId} updated:\n${result}`);
        } else {
            res.send(`No base with ID ${baseId}`);
        }
    }).catch((err) => {
        res.send(`Can not update base ${baseId}\n${err}`);
    });
});

module.exports = router;
