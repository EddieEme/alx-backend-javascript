import fs from 'fs';
import path from 'path';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data.trim().split('\n').slice(1); // Skip header
      const studentsByField = {};

      lines.forEach(line => {
        const [firstname, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });

      resolve(studentsByField);
    });
  });
};

export default readDatabase;
