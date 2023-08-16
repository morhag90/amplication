import { JsonValue } from "type-fest";
import { Mor } from "../mor/Mor";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  mor?: Mor | null;
};
