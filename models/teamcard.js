'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeamCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TeamCard.init({
    matchId: DataTypes.INTEGER,
    matchName: DataTypes.STRING,
    teamId: DataTypes.INTEGER,
    teamName: DataTypes.STRING,
    logo: DataTypes.STRING,
    p1: DataTypes.STRING,
    p2: DataTypes.STRING,
    p3: DataTypes.STRING,
    p4: DataTypes.STRING,
    p5: DataTypes.STRING,
    p6: DataTypes.STRING,
    p7: DataTypes.STRING,
    p8: DataTypes.STRING,
    p9: DataTypes.STRING,
    p10: DataTypes.STRING,
    p11: DataTypes.STRING,
    p12: DataTypes.STRING,
    p13: DataTypes.STRING,
    p14: DataTypes.STRING,
    p15: DataTypes.STRING,
    p16: DataTypes.STRING,
    p17: DataTypes.STRING,
    p18: DataTypes.STRING,
    p19: DataTypes.STRING,
    p20: DataTypes.STRING,
    p21: DataTypes.STRING,
    p22: DataTypes.STRING,
    p23: DataTypes.STRING,
    p24: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TeamCard',
  });
  return TeamCard;
};