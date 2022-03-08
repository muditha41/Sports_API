'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Player.init({
    jersey_no: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    second_name: DataTypes.STRING,
    age: DataTypes.STRING,
    height: DataTypes.STRING,
    weight: DataTypes.STRING,
    image: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};