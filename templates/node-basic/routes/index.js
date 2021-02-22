const bodyParser = require("body-parser");

module.exports = (app) => {
  app.use(bodyParser.json());

  app.get("/author", (req, res) => {
    return res
      .status(200)
      .json({ message: "everything is fine in GET request!" });
  });

  app.post("/author", function (req, res) {
    const body = req.body;
    return res
      .status(200)
      .json({ message: "everything is fine in POST request!", body });
  });

  app.put("/author/:id", function (req, res) {
    const body = req.body;
    const params = req.params;
    return res
      .status(200)
      .json({ message: "everything is fine in PUT request!", body, params });
  });

  app.delete("/author/:id", function (req, res) {
    const params = req.params;

    return res
      .status(200)
      .json({ message: "everything is fine in PUT request!", params });
  });
};
