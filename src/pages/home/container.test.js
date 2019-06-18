import React from 'react';
import seamlessImmutable from 'seamless-immutable';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import HomeContainer from './container';

import Home from './component';

jest.mock('./component');

describe('<HomeComponent />', () => {
    const state = seamlessImmutable({
        doors: { doors: [], selectedDoor: { name: '' } },
        people: {
            people: [],
            selectdPerson: { name: '', accessibleDoors: [] }
        },
        home: {
            user: {
                name: '',
                accessibleDoors: []
            },
            shouldGrantAccess: false
        },
        events: {
            events: []
        }
    });
    const store = configureMockStore()(state);

    let container;
    let component;
    let componentProps;

    beforeEach(() => {
        Home.mockImplementation(() => {
            return {
                render() {
                    return <div />;
                }
            };
        });

        const wrapper = mount(
            <Provider store={store}>
                <HomeContainer />
            </Provider>
        );

        container = wrapper.find(HomeContainer);
        component = wrapper.find('Home');
        componentProps = component.props();
    });

    it('renders the SeriesContainer', () => {
        expect(container.length).toBe(1);
        expect(component.length).toBe(1);
    });

    describe('mapStateToProps', () => {
        it('sets state value as prop to home component', () => {
            expect(componentProps.doors).toEqual(state.doors.doors);
            expect(componentProps.user).toEqual(state.home.user);
            expect(componentProps.shouldGrantAccess).toEqual(
                state.home.shouldGrantAccess
            );
        });
    });
});
