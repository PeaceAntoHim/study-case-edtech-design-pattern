export interface EdtechCommandInterface {
  signup(name: string, role: string, email: string, password: string): Promise<string>;
  uploadMateri(userId: string, filePath: string): Promise<string>;
}
