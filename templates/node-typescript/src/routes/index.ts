import { Request, Response, Router } from "express";
import { AuthorController } from "../controllers/AuthorController";

const bodyParser = require("body-parser");

module.exports = (app: Router) => {
  app.use(bodyParser.json());

  app.get("/author", AuthorController.index);

  app.post("/author", AuthorController.store);

  app.put("/author/:id", function (req: Request, res: Response) {
    const body = req.body;
    const params = req.params;
    return res
      .status(200)
      .json({ message: "everything is fine in PUT request!", body, params });
  });

  app.delete("/author/:name", function (req: Request, res: Response) {
    const params = req.params;

    return res
      .status(200)
      .json({ message: "everything is fine in DELETE request!", params });
  });
};
