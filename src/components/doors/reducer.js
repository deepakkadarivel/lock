import seamlessImmutable from 'seamless-immutable';
import { actionTypes } from './actions';

const initialState = seamlessImmutable({
    doors: []
});

export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.LOAD_DOORS:
        return state.set('doors', action.doors);
    case actionTypes.ADD_DOOR:
        return state.set('doors', [...state.doors, action.door]);
    case actionTypes.UPDATE_DOOR: {
        const doorToUpdate = state.doors.find(
            door => door.id === action.door.id
        );
        return state.set('doors', [
            ...state.doors.filter(door => door.id !== action.door.id),
            Object.assign({}, doorToUpdate, action.door)
        ]);
    }
    case actionTypes.DELETE_DOOR:
        return state.set(
            'doors',
            state.doors.filter(door => door.id !== action.id)
        );
    default:
        return state;
    }
}
