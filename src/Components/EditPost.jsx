//EditPost.jsx
import React, {useEffect} from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  TextInput,
  SelectInput,
  required,
} from "react-admin";

import { useFormContext, useForm } from 'react-hook-form';

const validateForm = (value) => {
    console.log('validateForm:', { value });

    return {title: 'Must be over 18'};
}
export const PostEdit = props => (
  <Edit {...props}>
    <SimpleForm mode="onChange" criteriaMode="all" validate={validateForm}>
      <Fields />
    </SimpleForm>
  </Edit>
);


const Fields = props => {
  const { setError, trigger, formState: { errors }, } = useFormContext();

  useEffect(() => {
		console.log('Fields useEffect []');

      setTimeout(async () => {
      // console.warn('useEffect', {  });

      // setError('title', {
      //   message: 'missing name',
      //   type: 'required',
      //   shouldFocus: true,
      // });

        const triggerResult = await trigger();
        console.log('triggerResult:', {triggerResult});
      }, 3000);

	}, [trigger]);

  useEffect(() => {
		console.log('Fields useEffect [errors]', { errors });
	}, [errors]);

  const validate = (value) => {
    console.log('validate:', { value });

    return 'Must be over 18';
}

  return (<>
    <TextInput disabled source="id" key="id" />
      <ReferenceInput source="userId" key="userId" reference="users">
        <SelectInput optionText="name" key="name" />
      </ReferenceInput>
      <TextInput source="title" validate={validate} />
      <TextInput multiline source="body" key="body" />
      </>
  );
}