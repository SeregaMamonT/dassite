import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import TextField from './components/TextField.jsx';
import Label from './components/Label.jsx';
import ComboBox from './components/ComboBox.jsx';

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
        <TextField name="inputValue"/>
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
    const functionEnum = [
      { code: "square", description: "Square"},
      { code: "power", description: "Power"},
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column"}}>
        <ComboBox name="functionSelector" values={functionEnum}/>

        { this.renderFunction(model.functionSelector) }

        <button style={{ width: "250px" }} onClick={this.props.handleSubmit}>Calculate</button>
        <div style={{ display: "flex" }}>
          <Label text="Result:"/>
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