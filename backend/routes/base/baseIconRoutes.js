const router = require('express').Router();
const baseIconRepository = require('../../repositories/base/baseIconRepository');

router.get('/', (req, res) => {
    baseIconRepository.getAll().then((icons) => {
        res.status(200).send(icons);
    }).catch((err) => {
        res.status(500).send(`Can not get icons list\n${err}`);
    });
});

router.get('/:id', (req, res) => {
    const iconId = req.params.id;
    baseIconRepository.getById(iconId).then((icon) => {
        if (icon) {
            res.status(200).send(icon);
        } else {
            res.status(400).send(`No icon with id ${iconId}`);
        }
    }).catch((err) => {
        res.status(500).send(`Can not get icon ${iconId}\n${err}`);
    });
});

router.post('/', (req, res) => {
    const iconObj = req.body;
    baseIconRepository.add(iconObj).then((icon) => {
        res.status(200).send(`Created ${icon.name}`);
    }).catch((err) => {
        res.status(500).send(`Can not create icon ${req.body.name}\n${err}`);
    })
    ;
});

router.delete('/:id', (req, res) => {
    const iconId = req.params.id;
    baseIconRepository.remove(iconId).then((result) => {
        if (result.n) {
            res.status(200).send(`Icon deleted:\n${result}`);
        } else {
            res.status(400).send(`No icon with ID ${iconId}`);
        }
    }).catch((err) => {
        res.status(500).send(`Can not delete icon:\n${err}`);
    });

});

router.put('/:id', function (req, res) {
    const iconObj = req.body;
    const iconId = req.params.id;
    baseIconRepository.update(iconId, iconObj).then((result) => {
        if (result) {
            res.status(200).send(`Icon ${iconId} updated:\n${result}`);
        } else {
            res.status(400).send(`No icon with ID ${iconId}`);
        }
    }).catch((err) => {
        res.status(500).send(`Can not update icon ${iconId}\n${err}`);
    });
});

module.exports = router;
    