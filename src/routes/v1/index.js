const express = require("express");
const TaskController = require("../../controllers/task-controller");
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

module.exports = router;
