import { Module } from "@nestjs/common";
import { LoginModuleBase } from "./base/login.module.base";
import { LoginService } from "./login.service";
import { LoginController } from "./login.controller";
import { LoginResolver } from "./login.resolver";

@Module({
  imports: [LoginModuleBase],
  controllers: [LoginController],
  providers: [LoginService, LoginResolver],
  exports: [LoginService],
})
export class LoginModule {}
