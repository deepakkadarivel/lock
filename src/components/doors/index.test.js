import React from 'react';
import { create } from 'react-test-renderer';
import Doors from './index';

describe('Doors component', () => {
    test('Renders door component', () => {
        const component = create(<Doors />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
