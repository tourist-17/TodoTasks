const axios = require("axios");
const { AUTH_SERVICE_PATH } = require("../config/serverConfig");
const validateCreateTask = async (req, res, next) => {

  let fetchAuthRequestURL = `${AUTH_SERVICE_PATH}/api/v1/isAuthenticated`;
  try {
    const response = axios.get(fetchAuthRequestURL, {
    headers: {
      "x-access-token": req.headers["x-access-token"],
    },
  });
  if (response.data.success !== true) {
    return res.status(404).json({
      data: {},
      success: false,
      message: "Invalid request body for create Task",
      err: "Unauthorised User",
    });
  }
  next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorised User",
    });
  }
};

module.exports = { validateCreateTask };
