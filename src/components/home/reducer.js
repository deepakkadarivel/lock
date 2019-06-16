import seamlessImmutable from 'seamless-immutable';
import { actionTypes } from './actions';

const initialState = seamlessImmutable({
    user: {
        name: '',
        accessibleDoors: []
    },
    shouldGrantAccess: false
});

export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.SET_APP_USER:
        return state.set('user', action.user);

    case actionTypes.CHECK_ACCESS.IS_LOADING:
        return state.setIn(['access', 'isLoading'], action.isLoading);

    case actionTypes.CHECK_ACCESS.SHOULD_GRANT:
        return state.set('shouldGrantAccess', action.shouldGrantAccess);
    default:
        return state;
    }
}
