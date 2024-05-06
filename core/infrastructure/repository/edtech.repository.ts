export interface EdtechRepository {
  findAll(): Promise<any>;
  find(id: string): Promise<string>;
  insert(userId: string, pathFile: string): Promise<string>;
  insertUser(name: string, role: string, email: string, password: string): Promise<string>;
  findUser(email: string): Promise<string>;
}
