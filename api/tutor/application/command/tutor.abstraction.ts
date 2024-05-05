export interface TutorCommandInterface {
  list(): string[];
  get(id: string): string;
  login(email: string, password: string): void;
  uploadMateri(userId: string, filePath: string): string;
}
