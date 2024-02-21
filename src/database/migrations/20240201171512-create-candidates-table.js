
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('candidates', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      birth: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      curriculum: {
        type:Sequelize.STRING,
      },
      password: {
        type:Sequelize.STRING,
        allowNull:false
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      bio: Sequelize.TEXT,
      phone: Sequelize.STRING,
      open_to_work: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('candidates')
  }
};