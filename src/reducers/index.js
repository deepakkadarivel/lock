import { combineReducers } from 'redux';
import doorsReducer from '../pages/doors/reducer';
import peopleReducer from '../pages/people/reducer';
import homeReducer from '../pages/home/reducer';
import eventsReducer from '../pages/events/reducer';

const rootReducer = combineReducers({
    doors: doorsReducer,
    people: peopleReducer,
    home: homeReducer,
    events: eventsReducer
});
export default rootReducer;
