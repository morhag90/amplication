import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LoginService } from "./login.service";
import { LoginControllerBase } from "./base/login.controller.base";

@swagger.ApiTags("logins")
@common.Controller("logins")
export class LoginController extends LoginControllerBase {
  constructor(protected readonly service: LoginService) {
    super(service);
  }
}
