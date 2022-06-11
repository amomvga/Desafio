"use strict";

import { Model } from "sequelize";

interface UserAttributes {
  id: number;
  userName: string;
  email: string;
  password: string;
}

module.exports = (sequelize, DataTypes) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    userName!: string;
    email!: string;
    password!: string;

    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
