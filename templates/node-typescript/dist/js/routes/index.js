"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AuthorController_1 = require("../controllers/AuthorController");
const bodyParser = require("body-parser");
module.exports = (app) => {
    app.use(bodyParser.json());
    app.get("/author", AuthorController_1.AuthorController.index);
    app.post("/author", AuthorController_1.AuthorController.store);
    app.put("/author/:id", function (req, res) {
        const body = req.body;
        const params = req.params;
        return res
            .status(200)
            .json({ message: "everything is fine in PUT request!", body, params });
    });
    app.delete("/author/:name", function (req, res) {
        const params = req.params;
        return res
            .status(200)
            .json({ message: "everything is fine in DELETE request!", params });
    });
};
