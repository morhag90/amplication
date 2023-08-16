import * as graphql from "@nestjs/graphql";
import { MorResolverBase } from "./base/mor.resolver.base";
import { Mor } from "./base/Mor";
import { MorService } from "./mor.service";

@graphql.Resolver(() => Mor)
export class MorResolver extends MorResolverBase {
  constructor(protected readonly service: MorService) {
    super(service);
  }
}
