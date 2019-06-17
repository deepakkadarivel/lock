import React from 'react';
import { create } from 'react-test-renderer';
import Dialog from './index';

describe('Dialog component', () => {
    test('Renders Dialog component', () => {
        const component = create(
            <Dialog
                header="test form header"
                form={
                    <form onSubmit={() => {}}>
                        <input type="text" name="name" />
                    </form>
                }
            />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
