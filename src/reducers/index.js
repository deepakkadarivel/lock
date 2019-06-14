import { combineReducers } from 'redux';
import doorsReducer from '../components/doors/reducer';

const initialReducer = (state = []) => state;

const rootReducer = combineReducers({
    doors: doorsReducer,
    people: initialReducer
});
export default rootReducer;
