import {createStore} from 'redux';
import reducer from './reducers/reducer.js';

const initialState = {
  formModel: {
    number: 3,
    base: 2,
    exponent: 5,
    functionSelector: "power"
  }
};

export default createStore(reducer, initialState);