import { combineReducers } from 'redux';

const initialReducer = (state = []) => state;

const rootReducer = combineReducers({
    people: initialReducer
});
export default rootReducer;
