'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('viajes', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      origen: { type: Sequelize.STRING(100), allowNull: false },
      destino: { type: Sequelize.STRING(100), allowNull: false },
      fecha: { type: Sequelize.DATE, allowNull: false },
      precio: { type: Sequelize.FLOAT, allowNull: false },
      asientosTotal: { type: Sequelize.INTEGER, defaultValue: 40 },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('viajes');
  }
};