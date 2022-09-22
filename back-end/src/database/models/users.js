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
    foreignKey: 'user_id', as: 'users'
  })

  User.hasMany(model.Sales, {
    foreignKey: 'seller_id', as: 'seller'
  })
};

module.exports = User


