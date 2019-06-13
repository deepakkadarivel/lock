import React from 'react';
import { create } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Links from './index';

describe('Links component', () => {
    test('Renders Links component', () => {
        const component = create(
            <Router>
                <Links />
            </Router>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
