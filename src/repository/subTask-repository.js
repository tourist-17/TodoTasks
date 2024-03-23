const { subTask } = require("../models/index.js");
class subTaskRepository {
  async createsubTask(data) {
    try {
      const subtask = await subTask.create(data);
      return subtask;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async deletesubTask(subtaskId) {
    try {
      await subTask.destroy({
        where: {
          id: subtaskId,
        },
      });
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async updatesubTask(subtaskId, data) {
    // data is object {status : "Done"}
    try {
      const subtask = await subTask.findByPk(subtaskId);
      if (data.status) subtask.status = data.status;
      await subtask.save();
      return subtask;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async getsubTask(subtaskId) {
    try {
      const subtask = await subTask.findByPk(subtaskId);
      return subtask;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
  async getAllsubTasks() {
    // filter can be empty also
    try {
      const tasks = await subTask.findAll();
      return tasks;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw error;
    }
  }
}

module.exports = subTaskRepository;
