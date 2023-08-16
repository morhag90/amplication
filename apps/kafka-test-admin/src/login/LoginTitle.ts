import { Login as TLogin } from "../api/login/Login";

export const LOGIN_TITLE_FIELD = "accessKey";

export const LoginTitle = (record: TLogin): string => {
  return record.accessKey || String(record.id);
};
