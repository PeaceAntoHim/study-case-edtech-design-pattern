import { EdtechServiceInterface } from "../../domain/edtech.abstraction";
import { EdtechCommandInterface } from "./edtech.abstraction";

export class EdtechCommand implements EdtechCommandInterface {
  private _service;
  constructor(edtechService: EdtechServiceInterface) {
    this._service = edtechService;
  }

  async add(userId: string, pathFile: string): Promise<string> {
    const user = await this._service.getUser(userId);
    if (!user) {
      return "User tidak di temukan";
    }

    if (user.role != "tutor") {
      return "Bad Request Auth";
    }

    const material = await this._service.add(userId, pathFile);

    return material;
  }

  async signup(name: string, role: string, email: string, password: string): Promise<string> {
    const user = await this._service.addUser(name, role, email, password);
    return `Welcome ${user.name} please login with this email: ${user.email}`;
  }

  async uploadMateri(userId: string, filePath: string): Promise<string> {
    const materi = await this.add(userId, filePath);

    return materi;
  }
}
