const express = require("express");
const app = express();
const routes = require("./routes");
require("dotenv").config();

app.listen(3000, () => {
  console.log("Server Started");
  console.log("Example from dotenv: ", process.env.DB_USER);
});

routes(app);

module.exports = app;
