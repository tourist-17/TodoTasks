const { TaskRepository } = require("../repository/index");

class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }
  async createTask(data) {
    try {
      const task = await this.taskRepository.createTask(data);
      return task;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async deleteTask(taskId) {
    try {
      const responce = await this.taskRepository.deleteTask(taskId);
      return responce;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async updateTask(taskId, data) {
    try {
      const task = await this.taskRepository.updateTask(taskId, data);
      return task;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async getTask(taskId) {
    try {
      const task = await this.taskRepository.getTask(taskId);
      return task;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
  async getAllTasks(filter) {
    try {
      const task = await this.taskRepository.getAllTasks(filter);
      return task;
    } catch (error) {
      console.log("Something went wrong in the service layer");
      throw error;
    }
  }
}

module.exports = TaskService;
