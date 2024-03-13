const fs = require('fs');
const path = require('path');

// Folder path where the text files are located
const folderPath = '/Users/islammohy/Desktop/GitHub/ConcatenateTextFiles/in';

// Read all files in the folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  // Filter out only the text files
  const textFiles = files.filter(file => path.extname(file) === '.txt');

  // Concatenate the contents of all text files
  let concatenatedText = '';
  textFiles.forEach(file => {
    const filePath = path.join(folderPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    concatenatedText += fileContent;
  });

  // Write the concatenated text to output.txt
  const outputPath = path.join(folderPath, 'output.txt');
  fs.writeFileSync(outputPath, concatenatedText, 'utf8');

  console.log('Concatenation completed! Check output.txt');
});
