import React from 'react';
import { Field } from 'redux-form';

class ComboBox extends React.Component {
  render() {
    const { value, onChange } = this.props.input;
    const { enumeration } = this.props;

    return (
      <select value={value} onChange={onChange}>
        {
          Object.values(enumeration).map((item) => {
            return <option key={item.code} value={item.code}>{item.description}</option>
          })
        }
      </select>
    );
  }
}

export default (props) => {
  return (
    <Field name={props.name} component={ComboBox} {...props} />
  );
};
