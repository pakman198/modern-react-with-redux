import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import authReducer from './authReducer';
import streamReducer from './streamReducers';

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
  streams: streamReducer
});