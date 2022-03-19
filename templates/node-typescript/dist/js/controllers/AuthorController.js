"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorController = void 0;
const AuthorList_1 = require("../models/AuthorList");
const Author_1 = require("../models/Author");
const Status_1 = require("../enums/Status");
const LogGenerator_1 = require("../utils/LogGenerator");
const authors = new AuthorList_1.AuthorList();
authors.add(new Author_1.Author("Cortella"));
authors.add(new Author_1.Author("Karnal", Status_1.Status.PENDING));
class AuthorController {
    static index(req, res) {
        LogGenerator_1.LogGenerator.printOut(authors);
        return res.status(200).json(authors.showAll());
    }
    static store(req, res) {
        const authorNew = new Author_1.Author(req.body.name);
        authors.add(authorNew);
        LogGenerator_1.LogGenerator.printOut(authorNew, authors);
        return res.status(200).json(authors.showAll());
    }
}
exports.AuthorController = AuthorController;
