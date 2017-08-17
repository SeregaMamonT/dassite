import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import TextField from './components/TextField.jsx';
import Label from './components/Label.jsx';
import ComboBox from './components/ComboBox.jsx';

import { handleResult, changeFunction } from './reducers/formModelActions';
import FunctionEnum from './enums/function';
import api from './api/index.js';

class Form extends React.Component {
  constructor() {
    super();

    this.renderSquare = this.renderSquare.bind(this);
    this.renderPower = this.renderPower.bind(this);
    this.renderFunction = this.renderFunction.bind(this);
  }

  renderSquare() {
    return (
      <div style={{ display: "flex" }}>
        <Label text="Number:"/>
        <TextField name="number"/>
      </div>
    );
  }

  renderPower() {
    return (
      <div style={{ display: "flex" }}>
        <Label text="Base:"/>
        <TextField name="base"/>
        <Label text="Exponent:"/>
        <TextField name="exponent"/>
      </div>
    );
  }

  renderFunction(type) {
    switch (type) {
      case "square":
        return this.renderSquare();
      case "power":
        return this.renderPower();
    }
  }

  render() {
    const model = this.props.initialValues;

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <ComboBox name="functionCode" enumeration={FunctionEnum} onChange={this.props.onFunctionChanged}/>

        { this.renderFunction(this.props.functionCode) }

        <button style={{ width: "250px" }} onClick={this.props.handleSubmit}>Calculate</button>
        <div style={{ display: "flex" }}>
          <Label text="Result:"/>
          <Label text={model.result || "Undefined"}/>
        </div>
      </div>
    );
  };
}

Form = reduxForm({form: "function-form"})(Form);
const selector = formValueSelector("function-form");

const mapStateToProps = (state) => {
  return {
    initialValues: state.formModel,
    enableReinitialize: true,
    functionCode: selector(state, "functionCode")
  };
};
Form = connect(mapStateToProps)(Form);

// Container for form manipulation

class FormContainer extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(form) {
    const { handleResult } = this.props;

    switch (form.functionCode) {
      case 'square':
        api.math.fetchSquare(form.number)
          .then(result => handleResult(form, result));
        return;
      case 'power':
        api.math.fetchPower(form.base, form.exponent)
          .then(result => handleResult(form, result));
        return;
    }
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        onFunctionChanged={(e, value, oldValue) => this.props.changeFunction(value)}
      />
    );
  }
}


const mapDispatchToProps = { handleResult, changeFunction };

export default connect(null, mapDispatchToProps)(FormContainer);