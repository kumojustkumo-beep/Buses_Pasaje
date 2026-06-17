const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define('Usuario', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(120), allowNull: false },
  email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
  passwordHash: { type: DataTypes.STRING(255), allowNull: false }
});

Usuario.hashPassword = async (password) => bcrypt.hash(password, 10);
Usuario.prototype.validatePassword = async function(password) {
  return bcrypt.compare(password, this.passwordHash);
};

module.exports = Usuario;