import path from 'node:path';

const pathToWorkDir = path.join(process.cwd());
export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');

// https://nodejs.org/api/path.html#pathresolvepaths
export const PATH_DB1 = path.resolve('src', 'db', 'db.json');
