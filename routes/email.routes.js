module.exports = app => {
  const User = require("../controllers/email.controller.js");
  app.get("/getEmail/:_id", User.getEmail);
};
