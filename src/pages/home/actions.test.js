import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { toast } from 'react-toastify';
import * as actions from '../events/actions';
import { actionTypes, setAppUser, checkAccess } from './actions';
import t from '../../translation';

let state;
let store;

describe('home actions', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    beforeEach(() => {
        state = {
            home: {
                user: {
                    id: 1,
                    name: 'test user',
                    accessibleDoors: [
                        { name: 'test door one', id: 1 },
                        { name: 'test door two', id: 2 }
                    ]
                },
                shouldGrantAccess: false
            }
        };
        store = mockStore(state);
    });

    const toastSuccessSpy = jest.spyOn(toast, 'success');
    const toastErrorSpy = jest.spyOn(toast, 'error');
    const toastInfoSpy = jest.spyOn(toast, 'info');
    const eventSpy = jest.spyOn(actions, 'addEvent');

    it('setAppUser', () => {
        const { user } = state.home;

        const expectedActions = [
            {
                type: actionTypes.SET_APP_USER,
                user
            }
        ];

        store.dispatch(setAppUser(user));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('should grant access for a valid user', () => {
        const { user } = state.home;

        const selectedDoor = { name: 'test door one', id: 1 };

        const message = `${t('grantedAccessFor')} ${selectedDoor.name}`;

        store.dispatch(checkAccess(selectedDoor, user));
        expect(toastSuccessSpy).toHaveBeenCalledWith(message);
        expect(eventSpy).toHaveBeenCalledWith(`${user.name}, ${message}`);
    });

    it('should deny access for a invalid user', () => {
        const { user } = state.home;

        const selectedDoor = { name: 'test door three', id: 3 };

        const message = `${t('deniedAccessFor')} ${selectedDoor.name}`;

        store.dispatch(checkAccess(selectedDoor, user));
        expect(toastErrorSpy).toHaveBeenCalledWith(message);
        expect(eventSpy).toHaveBeenCalledWith(`${user.name}, ${message}`);
    });

    it('should show info to select a user when not selected', () => {
        const selectedDoor = { name: 'test door three', id: 3 };

        store.dispatch(checkAccess(selectedDoor, {}));
        expect(toastInfoSpy).toHaveBeenCalledWith(t('selectUser'));
    });
});
