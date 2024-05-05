export interface EdtechQueryInterface {
  list(): Promise<string[]>;
  get(id: string): Promise<string>;
  login(email: string, password: string): Promise<{ data: { token: string; email: string } }>;
  downloadMateri(userId: string, filePath: string): Promise<string>;
}
