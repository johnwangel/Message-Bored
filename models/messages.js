'use strict';
module.exports = function(sequelize, DataTypes) {
  var Messages = sequelize.define('messages', {
    name: DataTypes.STRING
  });

  Messages.associate = function(models) {
    Messages.belongsTo(models.topics);
    Messages.belongsTo(models.users);
  };
  return Messages;
};