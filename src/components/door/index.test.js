import React from 'react';
import { create } from 'react-test-renderer';
import Door from './index';

describe('Door component', () => {
    test('Renders Door component', () => {
        const component = create(<Door text="door name" onClick={() => {}} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
