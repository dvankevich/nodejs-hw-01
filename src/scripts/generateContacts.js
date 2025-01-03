import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

//npm run generate

const generateContacts = async (number) => {
  const contacts = await fs.readFile(PATH_DB);
  console.log('contacts', contacts);

  console.log(createFakeContact());
};

generateContacts(5);
