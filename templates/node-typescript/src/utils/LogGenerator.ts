import { Printable } from "../interface/Printable";

export class LogGenerator {
  public static printOut(...objects: Printable[]): void {
    for (const iterator of objects) {
      iterator.showText();
    }
  }
}
