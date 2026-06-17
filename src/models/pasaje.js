const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pasaje = sequelize.define('Pasaje', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  viajeId: { type: DataTypes.INTEGER, allowNull: false },
  usuarioId: { type: DataTypes.INTEGER, allowNull: false },
  asiento: { type: DataTypes.INTEGER, allowNull: false },
  estado: { type: DataTypes.STRING, defaultValue: 'reservado' }
});

module.exports = Pasaje;