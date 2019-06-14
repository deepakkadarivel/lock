import React from 'react';
import { create } from 'react-test-renderer';
import Fab from './index';

describe('Fab component', () => {
    test('Renders Fab component', () => {
        const component = create(<Fab onClick={() => {}} icon="add" />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
