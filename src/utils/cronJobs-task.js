const cron = require("node-cron");
const { TaskService } = require("../services/index");
const taskService = new TaskService();

/**
 * 12:00 am
 * This will run job at 12:00 am every day
 * we will check the dueDate and update the priority of task
 */

const setupJobs = async () => {
  cron.schedule("0 0 * * *", async () => {
    console.log(3232);
    const response = await taskService.getAllTasks();
    response.forEach(async (task) => {
      //define two date object variables with dates inside it
      const currentDate = new Date();
      const DueDate = task.dueDate;
      //calculate time difference
      var time_difference = DueDate.getTime() - currentDate.getTime();

      //calculate days difference by dividing total milliseconds in a day and ceil value
      const days_difference = Math.ceil(time_difference / (1000 * 60 * 60 * 24));
        if (days_difference == 0) {
          await taskService.updateTask(task.id, { priority: 0 });
        } else if (days_difference <= 2 && days_difference >= 1) {
          await taskService.updateTask(task.id, { priority: 1 });
        } else if (days_difference <= 4 && days_difference >= 3) {
          await taskService.updateTask(task.id, { priority: 2 });
        } else if (days_difference >= 5) {
          await taskService.updateTask(task.id, { priority: 3 });
        } else { // Due Date Pass
          await taskService.updateTask(task.id, { priority: -1 });
        }
    });
  });
};
module.exports = setupJobs;
