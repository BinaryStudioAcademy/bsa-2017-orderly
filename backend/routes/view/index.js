const router = require('express').Router();
const formRoutes = require('./formRoutes');
const kanbanRoutes = require('./kanbanRoutes');
const gridRoutes = require('./gridRoutes');
const galleryRoutes = require('./galleryRoutes');

router.use('/form', formRoutes);
router.use('/kanban', kanbanRoutes);
router.use('/grid', gridRoutes);
router.use('/gallery', galleryRoutes);

module.exports = router;