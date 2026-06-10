const tokenService = require('../services/tokenService');
const Usuario = require('../models/usuario');

const verifyAccessToken = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ success: false, message: 'Token requerido' });
  try {
    const payload = tokenService.verifyAccess(auth.slice(7));
    const user = await Usuario.findByPk(payload.sub);
    if (!user) return res.status(401).json({ success: false, message: 'Usuario invalido' });
    req.usuario = user;
    next();
  } catch {
    res.status(401).json({ success: false, message: 'Token inválido' });
  }
};

module.exports = { verifyAccessToken };
