import { Request, Response } from "express";
import { AuthorList } from "../models/AuthorList";
import { Author } from "../models/Author";
import { Status } from "../enums/Status";
import { LogGenerator } from "../utils/LogGenerator";

const authors = new AuthorList();
authors.add(new Author("Cortella"));
authors.add(new Author("Karnal", Status.PENDING));

export class AuthorController {
  static index(req: Request, res: Response): Response {
    LogGenerator.printOut(authors);
    return res.status(200).json(authors.showAll());
  }

  static store(req: Request, res: Response): Response {
    const authorNew = new Author(req.body.name);
    authors.add(authorNew);
    LogGenerator.printOut(authorNew, authors);
    return res.status(200).json(authors.showAll());
  }
}
