import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TextField from './components/TextField.jsx';
import Label from './components/Label.jsx';

class Form extends React.Component {

  render() {
    const model = this.props.initialValues;

    return (
      <div style={{ display: "flex", flexDirection: "column"}}>
        <div style={{ display: "flex" }}>
          <Label text={model.inputLabel}/>
          <TextField name="inputValue"/>
        </div>
        <button style={{ width: "250px" }} onClick={this.props.handleSubmit}>Calculate</button>
        <div style={{ display: "flex" }}>
          <Label text={model.resultLabel}/>
          <Label text={model.resultValue || "Undefined"}/>
        </div>
      </div>
    );
  };
}


const mapStateToProps = (state) => {
  return { initialValues: state.formModel, enableReinitialize: true };
};

Form = reduxForm({form: "contact"})(Form);
Form = connect(mapStateToProps)(Form);

export default Form;