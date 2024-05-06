export interface EdtechServiceInterface {
  list(): Promise<string[]>;

  get(id: string): Promise<string>;

  add(userId: string, pathFile: string): Promise<string>;

  addUser(name: string, role: string, email: string, password: string): Promise<Record<string, string>>;
  getUser(email: string): Promise<any>;
}
