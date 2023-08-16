import { InputJsonValue } from "../../types";
import { MorWhereUniqueInput } from "../mor/MorWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  mor?: MorWhereUniqueInput | null;
};
