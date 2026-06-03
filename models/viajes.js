const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Viaje = sequelize.define('Viaje', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  origen: {type: DataTypes.STRING, allowNull: false},
  destino: {type: DataTypes.STRING, allowNull: false},
  fecha: {type: DataTypes.DATE, allowNull: false},
  precio: {type: DataTypes.FLOAT, allowNull: false},
  asientosTotal: {type: DataTypes.INTEGER, defaultValue: 40}
});

module.exports = Viaje;