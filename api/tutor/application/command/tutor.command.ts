import { TutorServiceInterface } from "../../domain/tutor.abstraction";
import { TutorCommandInterface } from "./tutor.abstraction";

export class TutorCommand implements TutorCommandInterface {
  private _service;
  constructor(tutorService: TutorServiceInterface) {
    this._service = tutorService;
  }
  get(id: string): string {
    throw new Error("Method not implemented.");
  }

  list(): string[] {
    throw new Error("Method not implemented.");
  }

  login(): void {
    throw new Error("Method not implemented.");
  }

  uploadMateri(): string {
    throw new Error("Method not implemented.");
  }
}
