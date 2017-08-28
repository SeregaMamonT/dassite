import React from 'react';

import FormContainer from './FormContainer.jsx';
import FunctionForm from './forms/FunctionForm.jsx';

const App = () => {
  let someFunctionalForm = FunctionForm;

  return <FormContainer form={someFunctionalForm}/>;
};

export default App;