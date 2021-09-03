const express = require("express");
const routes = require("./routes");
const socket = require("./socket");
// necessary to load strategies
require("./auth/strategies");

const app = express();
const server = require("http").createServer(app);
routes(app);
global.io = socket(app, server);

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((error, req, res, next) => {
  console.log("error", error);
  if (error.name === "SequelizeValidationError") {
    res.status(400).json(error);
    return next();
  }

  res.status(error.getStatusCode()).json({ message: error.message });
  return next(error);
});

server.listen(3000, () => console.log("Server Started"));

module.exports = app;
