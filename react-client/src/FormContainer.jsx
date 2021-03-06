import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { changeValues } from './reducers/formModelActions';
import api from './api/index.js';

function connectRedux(Form) {
  Form = reduxForm({form: "function-form"})(Form);

  const mapStateToProps = (state) => {
    return {
      initialValues: state.formModel,
      enableReinitialize: true,
    };
  };
  return connect(mapStateToProps)(Form);
}

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
    const { changeValues } = this.props;
    return function() {
      const values = controller.apply(null, arguments);
      changeValues(values);
    };
  }

  render() {
    const FunctionalForm = connectRedux(this.props.form);

    return (
      <FunctionalForm
        onSubmit={this.handleSubmit}
        controller={this.handleChangeValues}
        formValue={this.props.formValue}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formValue: state.formModel
  }
};

const mapDispatchToProps = { changeValues };

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);