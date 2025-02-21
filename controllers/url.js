const fs = require('fs');

async function myHandler(req,res) {
    // Step 1: Import the 'fs' module 
    
    // Step 2: Define the data you want to write
    const data = "This is the content to be written to the text file.";

    // Step 3: Use fs.writeFile to write the data to a file
    fs.writeFile('output.txt', data, (err) => {
    if (err) {
        console.error("Error writing to file", err);
    } else {
        console.log("File written successfully");
    }
    });

}


module.exports = myHandler;