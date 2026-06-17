const express = require('express');
const Viaje = require('../models/viajes');
const { verifyAccessToken } = require('../middlewares/auth');

const router = express.Router();

router.use(verifyAccessToken);

router.get('/', async (req, res) => {
  const viajes = await Viaje.findAll();
  res.json({ success: true, data: viajes });
});

router.post('/', async (req, res) => {
  const viaje = await Viaje.create(req.body);
  res.status(201).json({ success: true, data: viaje });
});

router.get('/:id', async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id);
  if (!viaje) return res.status(404).json({ success: false, message: 'Viaje no encontrado' });
  res.json({ success: true, data: viaje });
});

router.put('/:id', async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id);
  if (!viaje) return res.status(404).json({ success: false, message: 'Viaje no encontrado' });
  await viaje.update(req.body);
  res.json({ success: true, data: viaje });
});

router.delete('/:id', async (req, res) => {
  const viaje = await Viaje.findByPk(req.params.id);
  if (!viaje) return res.status(404).json({ success: false, message: 'Viaje no encontrado' });
  await viaje.destroy();
  res.json({ success: true, message: 'Viaje eliminado' });
});

module.exports = router;