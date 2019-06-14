import db from '../../database';

export const actionTypes = {
    ADD_DOOR: 'ADD_DOOR',
    UPDATE_DOOR: 'UPDATE_DOOR',
    DELETE_DOOR: 'DELETE_DOOR',
    LOAD_DOORS: 'LOAD_DOORS'
};

export function loadDoors() {
    return dispatch => {
        db.table('doors')
            .toArray()
            .then(doors => {
                dispatch({
                    type: actionTypes.LOAD_DOORS,
                    doors
                });
            });
    };
}

export function addDoor(name) {
    return dispatch => {
        const doorToAdd = { name };
        db.table('doors')
            .add(doorToAdd)
            .then(id => {
                dispatch({
                    type: actionTypes.ADD_DOOR,
                    door: Object.assign({}, doorToAdd, { id })
                });
            });
    };
}

export function deleteDoor(id) {
    return dispatch => {
        db.table('doors')
            .delete(id)
            .then(() => {
                dispatch({
                    type: actionTypes.DELETE_DOOR,
                    id
                });
            });
    };
}

export function updateDoor(id, name) {
    return dispatch => {
        db.table('doors')
            .update(id, { name })
            .then(() => {
                dispatch({
                    type: actionTypes.UPDATE_DOOR,
                    door: { id, name }
                });
            });
    };
}
