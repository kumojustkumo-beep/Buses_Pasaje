const sequelize = require('../config/database');
const Usuario = require('./Usuario');
const Viaje = require('./Viaje');
const Pasaje = require('./Pasaje');

Usuario.hasMany(Pasaje);
Pasaje.belongsTo(Usuario);

Viaje.hasMany(Pasaje);
Pasaje.belongsTo(Viaje);

module.exports = {sequelize, Usuario, Viaje, Pasaje};