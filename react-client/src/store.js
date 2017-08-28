import {createStore} from 'redux';
import reducer from 'reducers/reducer.js';

const initialState = {
  formModel: {
  }
};

export default createStore(reducer, initialState);