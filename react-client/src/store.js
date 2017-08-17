import {createStore} from 'redux';
import reducer from './reducers/reducer.js';
import FunctionEnum from './enums/function.js';

const initialState = {
  formModel: {
    number: 3,
    base: 2,
    exponent: 5,
    functionCode: FunctionEnum.POWER.code
  }
};

export default createStore(reducer, initialState);