import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);

      let responseText = 'This is the list of our students\n';
      
      // Sort fields alphabetically (case insensitive)
      const sortedFields = Object.keys(students).sort((a, b) => 
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      sortedFields.forEach(field => {
        const studentList = students[field];
        responseText += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
      });

      response.status(200).send(responseText);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const databasePath = process.argv[2];
      const students = await readDatabase(databasePath);

      const studentList = students[major] || [];
      response.status(200).send(`List: ${studentList.join(', ')}`);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
