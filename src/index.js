const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
const app = express();
const db = require("./models/index");
const taskJobs = require("./utils/cronJobs-task");
const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", ApiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server Started at ${PORT}`);
    //  db.sequelize.sync({ alter: true });
    // console.log(taskJobs());
    taskJobs();
  });
};
setupAndStartServer();
