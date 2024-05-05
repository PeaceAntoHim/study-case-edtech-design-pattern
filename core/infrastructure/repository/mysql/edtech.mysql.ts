import { Prisma, PrismaClient } from "@prisma/client";
import { EdtechRepository } from "../edtech.repository";
import { SHA256 as hash } from "crypto-js";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class EdtechMysqlRepository implements EdtechRepository {
  private _prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>;
  private _hash;
  constructor(prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>) {
    this._prisma = prisma;
    this._hash = hash;
  }

  async insertUser(name: string, role: string, email: string, password: string): Promise<any> {
    const user = await this._prisma.user.create({
      data: { name: name, role: role, email: email, password: this._hash(password).toString() },
    });
    return user;
  }

  async findUser(email: string): Promise<any> {
    const user = await this._prisma.user.findUnique({
      where: { email: email },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        password: true,
      },
    });
    return user;
  }

  findAll(): Promise<string[]> {
    throw new Error("Method not implemented.");
  }

  find(): Promise<string> {
    throw new Error("Method not implemented.");
  }

  insert(): Promise<string> {
    throw new Error("Method not implemented.");
  }
}
