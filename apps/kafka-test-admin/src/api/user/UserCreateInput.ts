import { InputJsonValue } from "../../types";
import { MorWhereUniqueInput } from "../mor/MorWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  mor?: MorWhereUniqueInput | null;
};
