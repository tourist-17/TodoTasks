const { TaskService } = require("../services/index");
const taskService = new TaskService();
/**
 * POST
 * data -> req.body
 */
// console.log('ad jk');
const create = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    return res.status(201).json({
      data: task,
      success: true,
      message: "Successfully created a task",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a task",
      err: error,
    });
  }
};

// DELETE -> /task/:id
// so you will get id in request params
const destroy = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    return res.status(200).json({
      data: [1],
      success: true,
      message: "Successfully deleted a task",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the task",
      err: error,
    });
  }
};
// PATCH ->/task/:id -> req.body
const update = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    return res.status(200).json({
      data: task,
      success: true,
      message: "Successfully updated a task",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the task",
      err: error,
    });
  }
};
// GET -> task/:id
const get = async (req, res) => {
  try {
    const response = await taskService.getTask(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a task",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the task",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks(req.query);
    return res.status(200).json({
      data: tasks,
      success: true,
      message: "Successfully fetched filtered tasks",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the task",
      err: error,
    });
  }
};
module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
