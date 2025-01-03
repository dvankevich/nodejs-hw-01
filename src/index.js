import fs from 'node:fs/promises';
import { PATH_DB } from './constants/contacts.js';
import { writeContacts } from './utils/writeContacts.js';
import { readContacts } from './utils/readContacts.js';

const deleteFile = async () => {
  console.log('--> спроба видалити файл ', PATH_DB);
  try {
    // Перевірка доступності файлу
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
};

// тестування функцій
// Функція для виконання всіх дій послідовно
const executeSequence = async () => {
  console.log('--> видалення файлу PATH_DB');

  await deleteFile(); // Вилучення файлу

  console.log('--> виклик readContacts() при відсутньому файлі PATH_DB');
  const contacts = await readContacts();
  console.log('Contacts:', contacts);

  //await new Promise((resolve) => setTimeout(resolve, 1000)); // Затримка 1 сек.

  console.log(
    '--> виклик writeContacts() без параметрів має записати в файл PATH_DB значення []',
  );
  await writeContacts(); // Передбачається, що writeContacts - асинхронна функція

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Затримка 1 сек.

  console.log('--> Читання пустого файлу');
  const contactsAfterWrite = await readContacts();
  console.log('Contacts:', contactsAfterWrite);
};

// Виклик функції для виконання
executeSequence();
