export interface TutorServiceInterface {
  list(): string[];

  get(id: string): string;

  add(): string;
}
