const express = require('express');
const Pasaje = require('../models/pasaje');
const { verifyAccessToken } = require('../middlewares/auth');

const router = express.Router();
router.use(verifyAccessToken);

router.post('/', async (req, res) => {
  const { viajeId, asiento } = req.body;
  const usuarioId = req.usuario.id;

  const exists = await Pasaje.findOne({ where: { viajeId, asiento } });
  if (exists) return res.status(409).json({ success: false, message: 'Asiento ya ocupado' });

  const pasaje = await Pasaje.create({ viajeId, usuarioId, asiento });
  res.status(201).json({ success: true, data: pasaje });
});

router.get('/', async (req, res) => {
  const pasajes = await Pasaje.findAll({ where: { usuarioId: req.usuario.id } });
  res.json({ success: true, data: pasajes });
});

module.exports = router;