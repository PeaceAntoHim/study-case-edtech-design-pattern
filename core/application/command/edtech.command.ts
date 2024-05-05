import { TutorServiceInterface } from "../../domain/edtech.abstraction";
import { EdtecgCommandInterface } from "./edtech.abstraction";

export class TutorCommand implements EdtecgCommandInterface {
  private _service;
  constructor(tutorService: TutorServiceInterface) {
    this._service = tutorService;
  }
  downloadMateri(userId: string, filePath: string): string {
    throw new Error("Method not implemented.");
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
