const router = require('express').Router();
const formRoutes = require('./formRoutes');
const kanbanRoutes = require('./kanbanRoutes');

router.use('/form', formRoutes);
router.use('/kanban', kanbanRoutes);

module.exports = router;