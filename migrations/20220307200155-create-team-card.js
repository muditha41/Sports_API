'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TeamCards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matchId: {
        type: Sequelize.INTEGER
      },
      matchName: {
        type: Sequelize.STRING
      },
      teamId: {
        type: Sequelize.INTEGER
      },
      teamName: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      p1: {
        type: Sequelize.STRING
      },
      p2: {
        type: Sequelize.STRING
      },
      p3: {
        type: Sequelize.STRING
      },
      p4: {
        type: Sequelize.STRING
      },
      p5: {
        type: Sequelize.STRING
      },
      p6: {
        type: Sequelize.STRING
      },
      p7: {
        type: Sequelize.STRING
      },
      p8: {
        type: Sequelize.STRING
      },
      p9: {
        type: Sequelize.STRING
      },
      p10: {
        type: Sequelize.STRING
      },
      p11: {
        type: Sequelize.STRING
      },
      p12: {
        type: Sequelize.STRING
      },
      p13: {
        type: Sequelize.STRING
      },
      p14: {
        type: Sequelize.STRING
      },
      p15: {
        type: Sequelize.STRING
      },
      p16: {
        type: Sequelize.STRING
      },
      p17: {
        type: Sequelize.STRING
      },
      p18: {
        type: Sequelize.STRING
      },
      p19: {
        type: Sequelize.STRING
      },
      p20: {
        type: Sequelize.STRING
      },
      p21: {
        type: Sequelize.STRING
      },
      p22: {
        type: Sequelize.STRING
      },
      p23: {
        type: Sequelize.STRING
      },
      p24: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TeamCards');
  }
};