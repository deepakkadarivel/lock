import React from 'react';
import { create } from 'react-test-renderer';
import Form from './index';

describe('Form component', () => {
    test('Renders Form component', () => {
        const component = create(
            <Form toggleDialog={() => {}} handleSubmit={() => {}}>
                <input type="text" name="name" />
            </Form>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
