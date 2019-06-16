import db from '../../database';

export const actionTypes = {
    ADD_PERSON: 'ADD_PERSON',
    UPDATE_PERSON: 'UPDATE_PERSON',
    DELETE_PERSON: 'DELETE_PERSON',
    LOAD_PEOPLE: 'LOAD_PEOPLE',
    LOAD_PERSON: 'LOAD_PERSON'
};

export function loadPeople() {
    return dispatch => {
        db.table('people')
            .toArray()
            .then(people => {
                dispatch({
                    type: actionTypes.LOAD_PEOPLE,
                    people
                });
            });
    };
}

export function getPerson(id = 0) {
    return dispatch => {
        db.table('people')
            .get(id)
            .then(person => {
                dispatch({
                    type: actionTypes.LOAD_PERSON,
                    person
                });
            });
    };
}

export function addPerson(name = '', accessibleDoors = []) {
    return dispatch => {
        const personToAdd = { name, accessibleDoors };
        db.table('people')
            .add(personToAdd)
            .then(id => {
                dispatch({
                    type: actionTypes.ADD_PERSON,
                    person: Object.assign({}, personToAdd, { id })
                });
            });
    };
}

export function deletePerson(id) {
    return dispatch => {
        db.table('people')
            .delete(id)
            .then(() => {
                dispatch({
                    type: actionTypes.DELETE_PERSON,
                    id
                });
            });
    };
}

export function updatePerson(id, name, accessibleDoors) {
    return dispatch => {
        db.table('people')
            .update(id, { name, accessibleDoors })
            .then(() => {
                dispatch({
                    type: actionTypes.UPDATE_PERSON,
                    person: { id, name, accessibleDoors }
                });
            });
    };
}
