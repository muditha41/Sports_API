'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tournamentId: {
        type: Sequelize.INTEGER
      },
      tournamentName: {
        type: Sequelize.STRING
      },
      matchNo: {
        type: Sequelize.STRING
      },
      matchTitle: {
        type: Sequelize.STRING
      },
      homeTeam: {
        type: Sequelize.STRING
      },
      visitorTeam: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      venue: {
        type: Sequelize.STRING
      },
      homeTeamCardId: {
        type: Sequelize.INTEGER
      },
      visitorTeamCardId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Matches');
  }
};