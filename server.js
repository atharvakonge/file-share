const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// Create static folder 
// This helps to avoid mime type error
// As by default express has a mime type text/html
// And while loading css file it considers the same
// When we use static folder it considers css file as stylesheet
app.use(express.static('public'));

// Middle ware to read json data
app.use(express.json());


const connectDB = require('./config/db');

connectDB();

// Template Engine

app.set('views', path.join(__dirname , '/views'));
app.set('view engine', 'ejs');

// Routes

// Route for upload
app.use('/api/files', require('./routes/files'));

// Route for download page
app.use('/files', require('./routes/show'));

// Route to download file
app.use('/files/download', require('./routes/download'));


app.listen( PORT, () => {

    console.log(`Listening on port ${PORT}`);
})

