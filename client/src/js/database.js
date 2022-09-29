import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jate = await openDB('jate', 1);
  const tx = jate.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');

  const request = store.put({ text: content })
  const result = await request;

  console.log('Data updated', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jate = await openDB('jate', 1);
  const tx = jate.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();

  const result = await request;
  console.log('Data fetched', result);
};

initdb();