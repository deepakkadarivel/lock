import Dexie from 'dexie';

// Config for testing

// const setGlobalVars = require('indexeddbshim');

// const shim = {};
// setGlobalVars(shim, { checkOrigin: false });
// const { indexedDB, IDBKeyRange } = shim;
// Dexie.dependencies.indexedDB = indexedDB;
// Dexie.dependencies.IDBKeyRange = IDBKeyRange;

const db = new Dexie('lockDb');
db.version(1).stores({
    doors: `++id, name`,
    people: `++id, name`,
    events: `++id, event, time`
});

export default db;
