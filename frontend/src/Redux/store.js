import { createStore, combineReducers } from 'redux';
import contactReducer from './reducers/contactReducer';
import authenticationReducer from './reducers/authenticationReducer';
const rootReducer = combineReducers({
  authentication: authenticationReducer,
  formData: contactReducer,
});

const store = createStore(rootReducer);

export default store;
