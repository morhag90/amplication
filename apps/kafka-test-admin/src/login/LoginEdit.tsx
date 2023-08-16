import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const LoginEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="access-key" source="accessKey" />
      </SimpleForm>
    </Edit>
  );
};
