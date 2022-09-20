'use strict';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  })
  return User;
}

module.exports = User


