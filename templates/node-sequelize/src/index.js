const express = require("express");
const routes = require("./routes");
// necessary to load strategies
require("./auth/strategies");

const app = express();
routes(app);

/**
 * connection by socket
 */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log(`socket connected with id ${socket.id}`);
});

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((error, req, res, next) => {
  if (error.name === "SequelizeValidationError") {
    res.status(400).json(error);
    return next();
  }

  res.status(error.getStatusCode()).json({ message: error.message });
  return next(error);
});

server.listen(3000, () => console.log("Server Started"));

module.exports = app;
