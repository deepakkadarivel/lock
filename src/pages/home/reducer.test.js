import seamlessImmutable from 'seamless-immutable';

import reducer from './reducer';
import { actionTypes } from './actions';

describe('Home Reducer', () => {
    const initialState = seamlessImmutable({
        user: {
            name: '',
            accessibleDoors: []
        }
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it(`should handle ${actionTypes.SET_APP_USER}`, () => {
        const user = {
            is: 1,
            name: 'user one',
            accessibleDoors: [{ id: 1, name: 'door 1' }]
        };
        const expectedState = {
            user
        };

        expect(
            reducer(initialState, {
                type: actionTypes.SET_APP_USER,
                user
            })
        ).toEqual(expectedState);
    });
});
