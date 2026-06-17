const express = require('express');
const authRoutes = require('./authRoutes');
const viajeRoutes = require('./viajeRoutes');
const pasajeRoutes = require('./pasajeRoutes');

const router = express.Router();

router.get('/health', (req, res) => res.json({ status: 'ok' }));
router.use('/auth', authRoutes);
router.use('/viajes', viajeRoutes);
router.use('/pasajes', pasajeRoutes);

module.exports = router;