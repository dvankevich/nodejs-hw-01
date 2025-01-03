import fs from 'node:fs/promises';
import { PATH_DB, PATH_DB1 } from './constants/contacts.js';
import { writeContacts } from './utils/writeContacts.js';
import { readContacts } from './utils/readContacts.js';

console.log('PATH_DB: ', PATH_DB);
console.log('PATH_DB1: ', PATH_DB1);

// тестування функцій
//
// видаляємо файл зі шляхом PATH_DB, якщо він існує
// console.log('спроба видалити файл ', PATH_DB);
// (async () => {
//   try {
//     // перевірка доступності файлу
//     await fs.access(PATH_DB);
//     console.log(`Файл або каталог '${PATH_DB}' доступний.`);
//     // Видалення файлу
//     await fs.unlink(PATH_DB);
//     console.log(`Файл '${PATH_DB}' успішно видалено.`);
//   } catch (err) {
//     if (err.code === 'ENOENT') {
//       console.log(`Файл або каталог '${PATH_DB}' не існує.`);
//     } else {
//       console.error(
//         `Помилка перевірки доступності файлу або каталогу '${PATH_DB}':`,
//         err,
//       );
//     }
//   }
// })();

// console.log(
//   'виклик writeContacts() без параметрів має записати в файл PATH_DB значення []',
// );
// writeContacts();

// readContacts();
(async () => {
  const contacts = await readContacts();
  console.log('Contacts:', contacts);
})();
