import seamlessImmutable from 'seamless-immutable';
import { actionTypes } from './actions';

const initialState = seamlessImmutable({
    user: {
        name: '',
        accessibleDoors: []
    }
});

export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.SET_APP_USER:
        return state.set('user', action.user);
    default:
        return state;
    }
}
