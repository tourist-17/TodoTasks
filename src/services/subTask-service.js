const { subTaskRepository } = require("../repository/index");

class subTaskService {
  constructor() {
    this.subtaskRepository = new subTaskRepository();
  }
  async createsubTask(data) {
    try {
      const subtask = await this.subtaskRepository.createsubTask(data);
      return subtask;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async deletesubTask(subtaskId) {
    try {
      const responce = await this.subtaskRepository.deletesubTask(subtaskId);
      return responce;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async updatesubTask(subtaskId, data) {
    try {
      const subtask = await this.subtaskRepository.updatesubTask(
        subtaskId,
        data
      );
      return subtask;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async getsubTask(subtaskId) {
    try {
      const subtask = await this.subtaskRepository.getsubTask(subtaskId);
      return subtask;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async getAllsubTasks() {
    try {
      const subtask = await this.subtaskRepository.getAllsubTasks();
      return subtask;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
}

module.exports = subTaskService;
