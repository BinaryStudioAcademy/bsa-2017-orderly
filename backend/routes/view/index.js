const router = require('express').Router();
const formRoutes = require('./formRoutes');
const kanbanRoutes = require('./kanbanRoutes');
const gridRoutes = require('./gridRoutes');
const galleryRoutes = require('./galleryRoutes');
const generalRoutes = require('./general');

router.use('/form', formRoutes);
router.use('/kanban', kanbanRoutes);
router.use('/grid', gridRoutes);
router.use('/gallery', galleryRoutes);
router.use('/general', generalRoutes);

module.exports = router;