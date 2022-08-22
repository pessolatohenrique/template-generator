const bodyParser = require("body-parser");
const { AuthorController } = require("../controllers");
const { AuthorValidator } = require("../middlewares");
const { User } = require("../models");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.get("/author", AuthorController.index);
  app.post("/author", [AuthorValidator.validate()], AuthorController.store);
  app.put("/author/:id", AuthorController.update);
  app.delete("/author/:id", AuthorController.delete);
};
