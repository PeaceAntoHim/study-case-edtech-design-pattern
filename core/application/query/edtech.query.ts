import { EdtechServiceInterface } from "@/core/domain/edtech.abstraction";
import { EdtechQueryInterface } from "./edtech.abstraction";
import { INVALID_INPUT, NOT_FOUND } from "@/core/constant/edtech.constant";

export class EdtechQuery implements EdtechQueryInterface {
  private _service;
  constructor(edtechService: EdtechServiceInterface) {
    this._service = edtechService;
  }
  async list(): Promise<string[]> {
    return await this._service.list();
  }
  async get(id: string): Promise<string> {
    return await this._service.get(id);
  }
  async login(email: string, password: string): Promise<any> {
    if (!email || !password) {
      return `Login - ${INVALID_INPUT}`;
    }

    const user = await this._service.getUser(email);
    if (!user) {
      return `Login ${NOT_FOUND}`;
    }

    return {
      token: Math.random().toString(36),
      email: user.email,
      role: user.role,
    };
  }

  async downloadMateri(userId: string, filePath: string): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
