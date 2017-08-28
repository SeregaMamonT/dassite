import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { Flex } from 'grid-styled';

import TextField from './components/TextField.jsx';
import Label from './components/Label.jsx';
import ComboBox from './components/ComboBox.jsx';

import { changeValues } from './reducers/formModelActions';
import FunctionEnum from './enums/function';
import api from './api/index.js';

class Form extends React.Component {
  constructor() {
    super();

    this.renderSquare = this.renderSquare.bind(this);
    this.renderPower = this.renderPower.bind(this);
    this.renderFunction = this.renderFunction.bind(this);
    this.onChangeFunction = this.onChangeFunction.bind(this);
  }

  renderSquare() {
    return (
      <Flex>
        <Label text="Number:"/>
        <TextField name="number"/>
      </Flex>
    );
  }

  renderPower() {
    return (
      <Flex>
        <Label text="Base:"/>
        <TextField name="base"/>
        <Label text="Exponent:"/>
        <TextField name="exponent"/>
      </Flex>
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

  onChangeFunction(event, value) {
    return {
      functionCode: value,
      result: undefined
    };
  }

  render() {
    const model = this.props.initialValues;
    const { controller } = this.props;

    return (
      <Flex direction="column" align="center">
        <ComboBox name="functionCode" enumeration={FunctionEnum} onChange={controller(this.onChangeFunction)}/>

        { this.renderFunction(model.functionCode) }

        <button style={{ width: "250px" }} onClick={this.props.handleSubmit}>Calculate</button>
        <Flex>
          <Label text="Result:"/>
          <Label text={model.result || "Undefined"}/>
        </Flex>
      </Flex>
    );
  };
}

Form = reduxForm({form: "function-form"})(Form);

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: ownProps.formValue,
    initialValues: state.formModel,
    enableReinitialize: true,
  };
};
Form = connect(mapStateToProps)(Form);

// Container for form manipulation

class FormContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeValues = this.handleChangeValues.bind(this);
  }

  handleSubmit(form) {
    const { changeValues } = this.props;

    api.math.post(form).then(result => changeValues(result));
  }

  handleChangeValues(controller) {
    const changeValues = this.props.changeValues;
    return function() {
      const values = controller.apply(null, arguments);
      changeValues(values);
    };
  }

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        controller={this.handleChangeValues}
        formValue={this.props.formValue}
      />
    );
  }
}


const mapDispatchToProps = { changeValues };

export default connect(null, mapDispatchToProps)(FormContainer);