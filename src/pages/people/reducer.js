import seamlessImmutable from 'seamless-immutable';
import { actionTypes } from './actions';

const initialState = seamlessImmutable({
    people: [],
    selectdPerson: { name: '', accessibleDoors: [] }
});

export default function(state = initialState, action) {
    switch (action.type) {
    case actionTypes.LOAD_PEOPLE:
        return state.set('people', action.people);
    case actionTypes.LOAD_PERSON:
        return state.set(
            'selectdPerson',
            action.person || initialState.selectdPerson
        );
    case actionTypes.ADD_PERSON:
        return state.set('people', [...state.people, action.person]);
    case actionTypes.UPDATE_PERSON: {
        const personToUpdate = state.people.find(
            person => person.id === action.person.id
        );
        return state.set('people', [
            ...state.people.filter(
                person => person.id !== action.person.id
            ),
            Object.assign({}, personToUpdate, action.person)
        ]);
    }
    case actionTypes.DELETE_PERSON:
        return state.set(
            'people',
            state.people.filter(person => person.id !== action.id)
        );
    default:
        return state;
    }
}
