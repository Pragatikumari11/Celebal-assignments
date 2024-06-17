const fs = require('fs');

fs.writeFile('testFile.txt', 'Created with Node.js!', function(error) {
  if (error) {
     console.log("Failed to create file!");
     return error;
  }
  console.log("File created successfully!");
  fs.readFile('testFile.txt', 'utf8', function (error, data) {
    if (error) {
       console.log("Failed to read file!");
       return error;
    }
    console.log(data);
  }); 
});


 