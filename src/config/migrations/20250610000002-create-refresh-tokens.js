'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('refresh_tokens', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      usuarioId: { 
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onDelete: 'CASCADE'
      },
      tokenHash: { type: Sequelize.STRING(64), allowNull: false, unique: true },
      userAgent: { type: Sequelize.STRING(512) },
      ip: { type: Sequelize.STRING(45) },
      expiresAt: { type: Sequelize.DATE, allowNull: false },
      revokedAt: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('refresh_tokens');
  }
};