import React from 'react';
import { create } from 'react-test-renderer';
import Card from './index';

describe('Card component', () => {
    test('Renders Card component', () => {
        const component = create(
            <Card
                text="card test content"
                subText="card sub test content"
                icon="add"
                onClick={() => {}}
                onDelete={() => {}}
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
