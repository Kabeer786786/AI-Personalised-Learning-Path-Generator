const { spawn } = require('child_process');
const express = require('express');
// const { myHandler } = require("../controllers/url");
const fs = require("fs");
const app = express();
app.use(express.text());
const router = express.Router();
let msg = '';

// Redirect the given url
router.get('/chatbot', async (req,res)=>{
    return res.render('chatbot');
})
router.post('/result',async (req, res) => {
    // Step 4: Access the data sent from the client-side
    const data = req.body;
    msg = data;
    // const data = "This is the content to be written to the text file.";
    // console.log(data);
    // Step 3: Use fs.writeFile to write the data to a file
    fs.writeFile('output.txt', data, (err) => {
    if (err) {
        console.error("Error writing to file", err);
    } else {
        console.log("File written successfully");
        // return res.redirect('/myresult'); 
        
    }
    });
    // Log the received data
    // console.log('Data received from client:', receivedData);

    // Step 5: Send a response back to the client
    // res.json({ message: 'Data received successfully!', receivedData });
});
router.get('/my',(req,res) => {
    return res.render('result');
})

router.get('/pythonresult', async (req,res) => {

    const pythonProcess = spawn('python', ['script.py', 'Hello from nodejs']);

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python output: ${data}`);
    });

    pythonProcess.stderr.on('data', (data)=>{
        console.log(`Error : ${data}`);
    });

    pythonProcess.on('close', (code)=>{
        console.log(`Python script finishsed with code ${code}`);
    });
})

router.get('/generate', (req, res) => {
    // const filePath = "D:/node js codes/Hackathon_BVRIT/response.html";
    return res.render('response');
    // fs.readFile(filePath, 'utf8', (err, data) => {
    //     if (err) {
    //         console.error('Error reading the file:', err);
    //         return res.status(500).send('Error reading the file');
    //     }
    //     res.render('result', { fileContent: data });
    // });
 
});
router.get('/myresult', async (req,res) => {
    return res.redirect('/generate');
})
router.get('/home', async (req,res) => {
    return res.render('home');
})
router.get('/', async (req,res) => {
    return res.render('home');
})
module.exports = router;