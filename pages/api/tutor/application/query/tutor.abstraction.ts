export interface TutorQueryInterface {
  list(): string[];
  get(id: string): string;
}
