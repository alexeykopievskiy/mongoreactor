// @flow
import { combineReducers } from 'redux';
import connect from './connect'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  connect,
  form: formReducer
});

export default rootReducer;
