import { LoginWhereInput } from "./LoginWhereInput";
import { LoginOrderByInput } from "./LoginOrderByInput";

export type LoginFindManyArgs = {
  where?: LoginWhereInput;
  orderBy?: Array<LoginOrderByInput>;
  skip?: number;
  take?: number;
};
