"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class subTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Task, {
        foreignKey: "taskId",
        onDelete: "CASCADE",
      });
    }
  }
  subTask.init(
    {
      taskId: { type: DataTypes.INTEGER, allowNull: false },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ["InComplete", "Completed"],
        defaultValue: "InComplete",
      },
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "subTask",
    }
  );
  return subTask;
};
