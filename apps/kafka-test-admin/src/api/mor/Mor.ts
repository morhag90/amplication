import { User } from "../user/User";

export type Mor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Array<User>;
  name: string | null;
};
