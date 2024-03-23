const { subTaskService } = require("../services/index");
const subtaskService = new subTaskService();
/**
 * POST
 * data -> req.body
 */
// console.log('ad jk');
const create = async (req, res) => {
  try {
    const subtask = await subtaskService.createsubTask(req.body);
    return res.status(201).json({
      data: subtask,
      success: true,
      message: "Successfully created a subtask",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a subtask",
      err: error,
    });
  }
};

// DELETE -> /subtask/:id
// so you will get id in request params
const destroy = async (req, res) => {
  try {
    await subtaskService.deletesubTask(req.params.id);
    return res.status(200).json({
      data: [1],
      success: true,
      message: "Successfully deleted a subtask",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the subtask",
      err: error,
    });
  }
};
// PATCH ->/subtask/:id -> req.body
const update = async (req, res) => {
  try {
    console.log(req.params.id);
    const subtask = await subtaskService.updatesubTask(req.params.id, req.body);
    return res.status(200).json({
      data: subtask,
      success: true,
      message: "Successfully updated a subtask",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the subtask",
      err: error,
    });
  }
};
// GET -> subtask/:id
const get = async (req, res) => {
  try {
    const response = await subtaskService.getsubTask(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a subtask",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the subtask",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const subtasks = await subtaskService.getAllsubTasks(req.query);
    return res.status(200).json({
      data: subtasks,
      success: true,
      message: "Successfully fetched filtered subtasks",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the subtask",
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
