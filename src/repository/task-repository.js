const { Task } = require("../models/index.js");
const { Op } = require("sequelize");
class TaskRepository {
  async createTask(data) {
    try {
      const task = await Task.create(data);
      return task;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async deleteTask(taskId) {
    try {
      await Task.destroy({
        where: {
          id: taskId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async updateTask(taskId, data) {
    // data is object {status : "Done"}
    try {
      const task = await Task.findByPk(taskId);
      if (data.status) task.status = data.status;
      if (data.priority) task.priority = data.priority;
      if (data.dueDate) task.dueDate = data.dueDate;
      await task.save();
      return task;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async getTask(taskId) {
    try {
      const task = await Task.findByPk(taskId);
      return task;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async getAllTasks(filter) {
    // filter can be empty also
    try {
      // filter by title
      if (filter && filter.title) {
        const tasks = await Task.findAll({
          where: {
            title: {
              [Op.startsWith]: filter.title,
            },
          },
        });
        return tasks;
      }
      // filter by priority
      if (filter && filter.priority) {
        const tasks = await Task.findAll({
          where: {
            priority: {
              [Op.startsWith]: filter.priority,
            },
          },
        });
        return tasks;
      }
      // filter by dyeDate
      if (filter && filter.dueDate) {
        const tasks = await Task.findAll({
          where: {
            dueDate: {
              [Op.startsWith]: filter.dueDate,
            },
          },
        });
        return tasks;
      }

      const tasks = await Task.findAll();
      return tasks;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
}

module.exports = TaskRepository;
