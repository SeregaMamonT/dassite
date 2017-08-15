import {createStore} from 'redux';
import reducer from './reducers/reducer.js';

const initialState = {
  formModel: {
    inputLabel: "Enter your number: ",
    inputValue: 3,
    resultLabel: "Square: "
  }
};

export default createStore(reducer, initialState);