import { Mor as TMor } from "../api/mor/Mor";

export const MOR_TITLE_FIELD = "name";

export const MorTitle = (record: TMor): string => {
  return record.name || String(record.id);
};
