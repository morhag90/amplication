import * as graphql from "@nestjs/graphql";
import { LoginResolverBase } from "./base/login.resolver.base";
import { Login } from "./base/Login";
import { LoginService } from "./login.service";

@graphql.Resolver(() => Login)
export class LoginResolver extends LoginResolverBase {
  constructor(protected readonly service: LoginService) {
    super(service);
  }
}
