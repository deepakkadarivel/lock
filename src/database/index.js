import Dexie from 'dexie';

const db = new Dexie('lockDb');
db.version(1).stores({
    doors: `++id, name`,
    people: `++id, name`,
    events: `++id, event, time`
});

export default db;
