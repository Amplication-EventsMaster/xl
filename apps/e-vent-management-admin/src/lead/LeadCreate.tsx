import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="LAst Name" source="lAstName" />
      </SimpleForm>
    </Create>
  );
};
