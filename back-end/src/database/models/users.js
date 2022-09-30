'use strict';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
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

User.associate = (model) => {
  User.hasMany(model.Sales, {
    foreignKey: 'userId', as: 'users'
  })

  User.hasMany(model.Sales, {
    foreignKey: 'sellerId', as: 'seller'
  })
};

module.exports = User


