const router = require('express').Router();
const baseIconRepository = require('../../repositories/base/baseIconRepository');

router.get('/', (req, res) => {
    baseIconRepository.getAll().then((icons) => {
        res.send(icons);
    }).catch((err) => {
        res.send(`Can not get icons list\n${err}`);
    });
});

router.get('/:id', (req, res) => {
    baseIconRepository.getById(req.params.id).then((icon) => {
        res.send(icon);
    }).catch((err) => {
        res.send(`Can not get icon ${req.params.id}\n${err}`);
    });
});

router.post('/', (req, res) => {
    const iconObj = req.body;
    baseIconRepository.add(iconObj).then((icon) => {
        res.send(`Created ${icon.name}`);
    }).catch((err) => {
        res.send(`Can not create icon ${req.body.name}\n${err}`);
    })
    ;
});

router.delete('/:id', (req, res) => {
    baseIconRepository.remove(req.params.id).then((result) => {
        res.send(`Icon ${req.params.id} deleted:\n${result}`);
    }).catch((err) => {
        res.send(`Can not delete icon, ${err}`);
    });

});

router.put('/:id', function (req, res) {
    const iconObj = req.body;
    baseIconRepository.update(req.params.id, iconObj).then((result) => {
        res.send(`Icon ${req.params.id} updated:\n${result}`);
    }).catch((err) => {
        res.send(`Can not update icon ${req.params.id}\n${err}`);
    });
});

module.exports = router;
