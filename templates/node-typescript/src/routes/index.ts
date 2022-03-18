import { Request, Response, Router } from "express";

const bodyParser = require("body-parser");

module.exports = (app: Router) => {
  app.use(bodyParser.json());

  app.get("/author", (req: Request, res: Response) => {
    return res
      .status(200)
      .json({ message: "everything is fine in GET request!" });
  });

  app.post("/author", function (req: Request, res: Response) {
    const body = req.body;
    return res
      .status(200)
      .json({ message: "everything is fine in POST request!", body });
  });

  app.put("/author/:id", function (req: Request, res: Response) {
    const body = req.body;
    const params = req.params;
    return res
      .status(200)
      .json({ message: "everything is fine in PUT request!", body, params });
  });

  app.delete("/author/:id", function (req: Request, res: Response) {
    const params = req.params;

    return res
      .status(200)
      .json({ message: "everything is fine in PUT request!", params });
  });
};
