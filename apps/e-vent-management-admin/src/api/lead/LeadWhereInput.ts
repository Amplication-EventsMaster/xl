import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LeadWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lAstName?: StringNullableFilter;
};
