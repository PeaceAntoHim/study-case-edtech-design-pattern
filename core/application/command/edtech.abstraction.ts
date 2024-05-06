export interface EdtechCommandInterface {
  add(userId: string, pathFile: string): Promise<string>;
  signup(name: string, role: string, email: string, password: string): Promise<string>;
  uploadMateri(userId: string, filePath: string): Promise<string>;
}
