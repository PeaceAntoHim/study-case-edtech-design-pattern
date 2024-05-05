export interface EdtechRepository {
  findAll(): Promise<string[]>;
  find(id: string): Promise<string>;
  insert(pathFile: string): Promise<string>;
  insertUser(name: string, role: string, email: string, password: string): Promise<string>;
  findUser(email: string): Promise<string>;
}
