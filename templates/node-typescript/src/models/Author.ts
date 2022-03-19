import { Status } from "../enums/Status";
import { Printable } from "../interface/Printable";

export class Author implements Printable {
  public readonly _name: string;
  public readonly _status: Status;

  constructor(name: string, status: Status = Status.ACTIVE) {
    this._name = name;
    this._status = status;
  }

  showText(): void {
    console.log(`Author ${this._name} with status ${this._status}`);
  }
}
