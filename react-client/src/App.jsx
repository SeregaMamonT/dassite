import React from 'react';
import { connect } from 'react-redux';

import Form from './Form.jsx';

const App = (props) => {
  return (
    <Form onSubmit={(value) => {
      fetch("rest/math/square/" + value.inputValue)
      .then(res => res.text())
      .then(text => {
        props.submit(value, text);
      });
    }}
    />
  );
};

const mapDispatchToProps = {
  submit: (form, result) => {
    return {
      type: "HANDLE_RESPONSE",
      value: result
    };
  }
};

export default connect(null, mapDispatchToProps)(App);