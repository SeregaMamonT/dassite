import React from 'react';
import { Field } from 'redux-form';

const TextField = (props) => {
  return (
    <Field name={props.name} component="input" type="text" />
  );
};

export default TextField;