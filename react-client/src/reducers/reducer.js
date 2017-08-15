import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import formModelReducer from './formModelReducer.js';

export default combineReducers({
  form: formReducer,
  formModel: formModelReducer
});