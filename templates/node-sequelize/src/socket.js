module.exports = (app, server) => {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  const io = require("socket.io")(server);

  io.on("connection", (socket) => {
    console.log(`socket connected with id ${socket.id}`);
  });

  return io;
};
