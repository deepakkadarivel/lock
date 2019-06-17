import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEvent } from '../events/actions';
import t from '../../translation';

toast.configure({
    autoClose: 4000,
    draggable: false,
    position: toast.POSITION.TOP_CENTER
});

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
        if (user.name) {
            dispatch({
                type: actionTypes.CHECK_ACCESS,
                shouldGrantAccess
            });

            let message = '';

            if (shouldGrantAccess) {
                message = `${t('grantedAccessFor')} ${selectedDoor.name}`;
                toast.success(message);
            } else {
                message = `${t('deniedAccessFor')} ${selectedDoor.name}`;
                toast.error(message);
            }

            dispatch(addEvent(`${user.name}, ${message}`));
        } else {
            toast.info(t('selectUser'));
        }
    };
}
