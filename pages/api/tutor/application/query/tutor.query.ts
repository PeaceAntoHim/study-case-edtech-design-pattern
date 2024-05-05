import { TutorQueryInterface } from "./tutor.abstraction";

export class TutorQuery implements TutorQueryInterface {
  list(): string[] {
    throw new Error("Method not implemented.");
  }
  get(id: string): string {
    throw new Error("Method not implemented.");
  }

}