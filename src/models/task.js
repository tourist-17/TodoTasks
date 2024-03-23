"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.subTask, {
        foreignKey: "taskId",
      });
    }
  }
  Task.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      dueDate: { type: DataTypes.DATE, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      priority: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 3 },
      status: {
        type: DataTypes.ENUM,
        values: ["Todo", "InProcess", "Done"],
        defaultValue: "Todo",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Task",
    }
  );
  return Task;
};
