import { addEvent } from '../events/actions';

export const actionTypes = {
    SET_APP_USER: 'SET_APP_USER',
    CHECK_ACCESS: 'CHECK_ACCESS',
    SET_EVENT: 'SET_EVENT'
};

export function setAppUser(user) {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_APP_USER,
            user
        });
    };
}

export function checkAccess(selectedDoor, user) {
    const doorIds = user.accessibleDoors.map(door => door.id);
    const shouldGrantAccess = doorIds.includes(selectedDoor.id);
    return dispatch => {
        dispatch({
            type: actionTypes.CHECK_ACCESS,
            shouldGrantAccess
        });

        const message = shouldGrantAccess ? 'Granted access' : 'Denied access';

        dispatch(
            addEvent(
                `${user.name} has been ${message} for : ${selectedDoor.name}`
            )
        );
    };
}
