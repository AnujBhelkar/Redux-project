import { combineReducers } from 'redux';
import { authentication } from './_reducers/login.reducer';
import { registration } from "./_reducers/registration.reducer";
export default combineReducers(
    authentication,
    registration
)