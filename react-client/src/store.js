import {createStore} from 'redux';
import reducer from './reducers/reducer.js';

const initialState = {
  formModel: {
    inputValue: 3,
    functionSelector: "power"
  }
};

export default createStore(reducer, initialState);