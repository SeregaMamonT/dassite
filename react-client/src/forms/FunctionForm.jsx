import React from 'react';

import { Flex } from 'grid-styled';

import TextField from '../components/TextField.jsx';
import Label from '../components/Label.jsx';
import ComboBox from '../components/ComboBox.jsx';

import FunctionEnum from '../enums/function';

class FunctionForm extends React.Component {
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

export default FunctionForm;