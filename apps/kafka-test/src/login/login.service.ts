import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoginServiceBase } from "./base/login.service.base";

@Injectable()
export class LoginService extends LoginServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
