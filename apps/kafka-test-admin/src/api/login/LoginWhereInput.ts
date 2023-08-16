import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LoginWhereInput = {
  id?: StringFilter;
  accessKey?: StringNullableFilter;
};
