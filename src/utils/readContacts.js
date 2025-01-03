import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

/**
 *
 * @returns Array or null if error
 */
export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    // console.log('Вміст файлу:', data);
    // console.log('Object', JSON.parse(data));
    return JSON.parse(data); // повертаємо масив
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Файл не існує.');
      return null; // при помилці повертаємо null
    } else {
      console.error('Помилка читання файлу:', err);
      return null; // при помилці повертаємо null
    }
  }
};
