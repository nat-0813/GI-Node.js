const fs = require('fs');

// Get the file path from command-line arguments
const filePath = process.argv[2];

// Read the file synchronously
try {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const newlineCount = fileContent.split('\n').length - 1;
  console.log(newlineCount);
} catch (error) {
  console.error('Error:', error.message);
}