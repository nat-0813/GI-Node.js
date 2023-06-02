const fs = require('fs');

// Get the file path from command-line arguments
const filePath = process.argv[2];

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err.message);
    return;
  }
  
  const newlineCount = data.split('\n').length - 1;
  console.log(newlineCount);
});