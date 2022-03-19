import { Author } from "./Author";
import { Printable } from "../interface/Printable";

export class AuthorList implements Printable {
  private _list: Array<Author> = [];

  add(author: Author): void {
    this._list.push(author);
  }

  showAll(): ReadonlyArray<Author> {
    return this._list;
  }

  showText(): void {
    console.log("Author full list:", this._list);
  }
}
