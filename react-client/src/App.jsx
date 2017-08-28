import React from 'react';

import Form from './Form.jsx';
import FormContainer from './FormContainer.jsx';

const App = () => {
  let someFunctionalForm = Form;

  return <FormContainer form={someFunctionalForm}/>;
};

export default App;