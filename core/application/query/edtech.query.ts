import { EdtechQueryInterface } from "./edtech.abstraction";

export class EdtechQuery implements EdtechQueryInterface {
  list(): string[] {
    throw new Error("Method not implemented.");
  }
  get(id: string): string {
    throw new Error("Method not implemented.");
  }
}
