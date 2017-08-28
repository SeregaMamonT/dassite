import React from 'react';
import { connect } from 'react-redux';
import FormContainer from './Form.jsx';

const App = (props) => {
  return <FormContainer formValue={props.formValue}/>;
};

const mapStateToProps = (state) => {
  return {
    formValue: state.formModel
  }
};

export default connect(mapStateToProps)(App);