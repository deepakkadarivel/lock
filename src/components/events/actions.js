import db from '../../database';

export const actionTypes = {
    LOAD_EVENTS: 'LOAD_EVENTS',
    ADD_EVENT: 'ADD_EVENT'
};

export function loadEvents() {
    return dispatch => {
        db.table('events')
            .toArray()
            .then(events => {
                dispatch({
                    type: actionTypes.LOAD_EVENTS,
                    events
                });
            });
    };
}

export function addEvent(event) {
    return dispatch => {
        const eventToAdd = { event, time: new Date() };
        db.table('events')
            .add(eventToAdd)
            .then(id => {
                dispatch({
                    type: actionTypes.ADD_EVENT,
                    event: Object.assign({}, eventToAdd, { id })
                });
            });
    };
}
