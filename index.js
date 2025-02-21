const express = require('express');
const path = require("path");
const urlRoute  = require('./routes/url');
const app = express();
const PORT = 9000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.text());

app.use("/",urlRoute);

app.use(express.static(__dirname + '/views'));
app.set('view engine', "ejs");
app.set('views', path.resolve("./views"));



app.listen(PORT, () => console.log(`Server Started at port ${PORT}`)); 