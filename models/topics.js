'use strict';
module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define('topics', {
    name: DataTypes.STRING
  });

  Topics.associate = function(models) {
    Topics.belongsTo(models.users);
    Topics.hasMany(models.messages);
  };

  return Topics;
};