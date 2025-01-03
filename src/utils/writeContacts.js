import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

/**
 * call without parameters write [] to PATH_DB file
 * @param {*} updatedContacts
 */
export const writeContacts = async (updatedContacts) => {
  const data = updatedContacts
    ? JSON.stringify(updatedContacts)
    : JSON.stringify([]);
  console.log('data: ', data);

  try {
    await fs.writeFile(PATH_DB, data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};
