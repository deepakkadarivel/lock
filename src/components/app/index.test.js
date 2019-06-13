import React from 'react';
import { create } from 'react-test-renderer';
import App from './index';

describe('App component', () => {
    test('Renders App component', () => {
        const component = create(<App />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
