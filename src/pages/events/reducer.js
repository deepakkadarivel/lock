import seamlessImmutable from 'seamless-immutable';
import { actionTypes } from './actions';

const initialState = seamlessImmutable({
    events: []
});

export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.LOAD_EVENTS:
        return state.set('events', action.events);
    case actionTypes.ADD_EVENT:
        return state.set('events', [...state.events, action.event]);
    default:
        return state;
    }
}
