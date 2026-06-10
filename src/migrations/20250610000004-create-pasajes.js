'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pasajes', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      viajeId: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { model: 'viajes', key: 'id' },
        onDelete: 'CASCADE'
      },
      usuarioId: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onDelete: 'CASCADE'
      },
      asiento: { type: Sequelize.INTEGER, allowNull: false },
      estado: { type: Sequelize.STRING, defaultValue: 'reservado' },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('pasajes');
  }
};
