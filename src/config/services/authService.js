const { Op } = require('sequelize');
const db = require('../models');
const tokenService = require('./tokenService');

const { Usuario, RefreshToken } = db;

const issueTokens = async (usuario, meta = {}) => {
  const opaqueRefresh = tokenService.generateOpaqueRefreshToken();
  const session = await RefreshToken.create({
    usuarioId: usuario.id,
    tokenHash: tokenService.hashToken(opaqueRefresh),
    userAgent: meta.userAgent || null,
    ip: meta.ip || null,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  const accessToken = tokenService.signAccessToken(usuario);
  const refreshTokenJwt = tokenService.signRefreshToken(usuario, session.id);

  return {
    accessToken,
    refreshToken: `${refreshTokenJwt}.${opaqueRefresh}`,
    expiresIn: '15m',
    sessionId: session.id,
  };
};

const parseRefreshToken = (refreshToken) => {
  const lastDot = refreshToken.lastIndexOf('.');
  if (lastDot === -1) throw new Error('Refresh token inválido');
  return {
    jwtPart: refreshToken.slice(0, lastDot),
    opaquePart: refreshToken.slice(lastDot + 1)
  };
};

const findActiveSession = async (refreshToken) => {
  const { jwtPart, opaquePart } = parseRefreshToken(refreshToken);
  const payload = tokenService.verifyRefreshToken(jwtPart);

  const session = await RefreshToken.findByPk(payload.sid);
  if (!session || session.usuarioId !== payload.sub) throw new Error('Sesión no encontrada');

  const hash = tokenService.hashToken(opaquePart);
  if (session.tokenHash !== hash) throw new Error('Sesión inválida');

  const usuario = await Usuario.findByPk(payload.sub);
  if (!usuario) throw new Error('Usuario no encontrado');

  return { usuario, session };
};

const refreshTokens = async (refreshToken) => {
  const { usuario, session } = await findActiveSession(refreshToken);
  await session.update({ revokedAt: new Date() });
  return issueTokens(usuario);
};

module.exports = {
  issueTokens,
  refreshTokens,
  findActiveSession
};