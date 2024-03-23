const express = require("express");
const TaskController = require("../../controllers/task-controller");
const subTaskController = require("../../controllers/subTask-controller");
const router = express.Router();

router.post("/task", TaskController.create);
router.delete("/task/:id", TaskController.destroy);
router.get("/task/:id", TaskController.get);
router.get("/task", TaskController.getAll);
router.patch("/task/:id", TaskController.update);

// router.post(
//   "/tasks",
//   taskMiddlewares.validaeCreateTask,
//   TaskController.create
// );

router.post("/subtask", subTaskController.create);
router.delete("/subtask/:id", subTaskController.destroy);
router.get("/subtask/:id", subTaskController.get);
router.get("/subtask", subTaskController.getAll);
router.patch("/subtask/:id", subTaskController.update);
module.exports = router;
