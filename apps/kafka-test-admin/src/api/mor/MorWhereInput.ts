import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MorWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
  name?: StringNullableFilter;
};
