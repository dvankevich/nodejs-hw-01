import fs from 'node:fs/promises';
import { PATH_DB, PATH_DB1 } from './constants/contacts.js';
import { writeContacts } from './utils/writeContacts.js';
import { readContacts } from './utils/readContacts.js';

console.log('PATH_DB: ', PATH_DB);
console.log('PATH_DB1: ', PATH_DB1);

//https://byby.dev/sleep-in-nodejs
const sleep = (millis) => {
  console.log('delay', millis, 'millis');

  const stop = new Date().getTime();
  while (new Date().getTime() < stop + millis) {
    // Пустий оператор, нічого не виконується
  }
};

// тестування функцій
//
// видаляємо файл зі шляхом PATH_DB, якщо він існує
console.log('--> спроба видалити файл ', PATH_DB);
(async () => {
  try {
    // перевірка доступності файлу
    await fs.access(PATH_DB);
    console.log(`Файл або каталог '${PATH_DB}' доступний.`);
    // Видалення файлу
    await fs.unlink(PATH_DB);
    console.log(`Файл '${PATH_DB}' успішно видалено.`);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(`Файл або каталог '${PATH_DB}' не існує.`);
    } else {
      console.error(
        `Помилка перевірки доступності файлу або каталогу ${PATH_DB}:`,
        err,
      );
    }
  }
})();

sleep(2000); // Затримка 2 сек.

console.log('--> виклик readContacts() при відсутньому файлі PATH_DB');
(async () => {
  const contacts = await readContacts();
  console.log('Contacts:', contacts);
})();

sleep(1000); // Затримка 1 сек.

console.log(
  '--> виклик writeContacts() без параметрів має записати в файл PATH_DB значення []',
);
writeContacts();

sleep(1000); // Затримка 1 сек.

console.log('--> Читання пустого файлу');

(async () => {
  const contacts = await readContacts();
  console.log('Contacts:', contacts);
})();
