import { TutorServiceInterface } from "./tutor.abstraction";

export class TutorSevice implements TutorServiceInterface {
  list(): string[] {
    throw new Error("Method not implemented.");
  }
  get(id: string): string {
    throw new Error("Method not implemented.");
  }
  add(): string {
    throw new Error("Method not implemented.");
  }
}