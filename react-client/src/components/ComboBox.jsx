import React from 'react';
import { Field } from 'redux-form';

class ComboBox extends React.Component {
  render() {
    const { value, onChange } = this.props.input;
    return (
      <select value={value} onChange={onChange}>
        {
          this.props.values.map((item) => {
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
