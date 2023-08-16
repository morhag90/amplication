import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MorService } from "./mor.service";
import { MorControllerBase } from "./base/mor.controller.base";

@swagger.ApiTags("mors")
@common.Controller("mors")
export class MorController extends MorControllerBase {
  constructor(protected readonly service: MorService) {
    super(service);
  }
}
