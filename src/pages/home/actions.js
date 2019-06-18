import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addEvent } from '../events/actions';
import t from '../../translation/index';

toast.configure({
    autoClose: 4000,
    draggable: false,
    position: toast.POSITION.TOP_CENTER
});

export const actionTypes = {
    SET_APP_USER: 'SET_APP_USER'
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
    return dispatch => {
        if (user.name) {
            const doorIds = user.accessibleDoors.map(door => door.id);
            const shouldGrantAccess = doorIds.includes(selectedDoor.id);

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
