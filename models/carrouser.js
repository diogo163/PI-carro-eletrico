'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarroUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CarroUser.belongsTo(models.user);
    }
  }
  CarroUser.init({
    placa: DataTypes.STRING,
    modelo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CarroUser',
  });
  return CarroUser;
};