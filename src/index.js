const bodyParser = require("body-parser");
const express = require("express");
const { PORT } = require("./config/serverConfig");
const app = express();

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server Started at ${PORT}`);
  });
};
setupAndStartServer();
