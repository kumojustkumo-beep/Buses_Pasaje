const express = require('express');
const authRoutes = require('./authRoutes');
const viajeRoutes = require('./viajeRoutes');

const router = express.Router();

router.get('/health', (req, res) => res.json({ status: 'ok' }));
router.use('/auth', authRoutes);
router.use('/viajes', viajeRoutes);

module.exports = router;