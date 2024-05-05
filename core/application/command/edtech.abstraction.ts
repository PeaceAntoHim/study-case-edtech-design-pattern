export interface EdtecgCommandInterface {
  list(): string[];
  get(id: string): string;
  login(email: string, password: string): void;
  uploadMateri(userId: string, filePath: string): string;
  downloadMateri(userId: string, filePath: string): string;
}
