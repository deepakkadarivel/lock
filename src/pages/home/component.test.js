import React from 'react';
import { create } from 'react-test-renderer';
import Home from './component';

describe('Home Comoponent', () => {
    const doors = [
        { id: 1, name: 'door one' },
        { id: 2, name: 'door two' },
        { id: 3, name: 'door two' }
    ];
    const user = {
        id: 1,
        name: 'user one',
        accessibleDoors: doors
    };
    const props = {
        loadPeople: () => {},
        loadDoors: () => {},
        setAppUser: () => {},
        checkAccess: () => {},
        people: [user],
        doors,
        user: {}
    };

    test('Render Home compoent', () => {
        const component = create(<Home {...props} />);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
