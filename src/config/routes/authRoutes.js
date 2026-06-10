const express = require('express');
const Usuario = require('../models/usuario');
const tokenService = require('../services/tokenService');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { nombre, email, password } = req.body;
  const exists = await Usuario.findOne({ where: { email } });
  if (exists) return res.status(409).json({ success: false, message: 'Email ya existe' });
  const passwordHash = await Usuario.hashPassword(password);
  const user = await Usuario.create({ nombre, email, passwordHash });
  res.status(201).json({ success: true, data: { id: user.id, nombre: user.nombre, email: user.email } });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await Usuario.findOne({ where: { email } });
  if (!user || !(await user.validatePassword(password))) return res.status(401).json({ success: false, message: 'Credenciales invalidas' });
  const accessToken = tokenService.signAccess(user);
  const refreshToken = tokenService.signRefresh(user, 1); // simplify sid
  res.json({ success: true, data: { accessToken, refreshToken } });
});

router.get('/me', require('../middlewares/auth').verifyAccessToken, (req, res) => {
  res.json({ success: true, data: { id: req.usuario.id, nombre: req.usuario.nombre, email: req.usuario.email } });
});

module.exports = router;