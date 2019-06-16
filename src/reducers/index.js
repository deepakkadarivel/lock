import { combineReducers } from 'redux';
import doorsReducer from '../components/doors/reducer';
import peopleReducer from '../components/people/reducer';
import homeReducer from '../components/home/reducer';
import eventsReducer from '../components/events/reducer';

const rootReducer = combineReducers({
    doors: doorsReducer,
    people: peopleReducer,
    home: homeReducer,
    events: eventsReducer
});
export default rootReducer;
