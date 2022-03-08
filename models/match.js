'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Match.init({
    tournamentId: DataTypes.INTEGER,
    tournamentName: DataTypes.STRING,
    matchNo: DataTypes.STRING,
    tournametLogo: DataTypes.STRING,
    matchTitle: DataTypes.STRING,
    homeTeam: DataTypes.STRING,
    visitorTeam: DataTypes.STRING,
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    venue: DataTypes.STRING,
    homeTeamCardId: DataTypes.INTEGER,
    visitorTeamCardId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Match',
  });
  return Match;
};