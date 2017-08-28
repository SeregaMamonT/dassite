import React from 'react';

import FormContainer from './FormContainer.jsx';
import FunctionForm from 'forms/function-form/form.jsx';
import controller from 'forms/function-form/controller.js';

const App = () => {
  let someFunctionalForm = FunctionForm;
  let someFunctionalFormController = controller;

  return <FormContainer form={someFunctionalForm} controller={someFunctionalFormController}/>;
};

export default App;