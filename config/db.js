const mongoose = require('mongoose');
require('dotenv').config();


function connectDB() {

    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true,
        useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database connected');
    
    }).catch(err => {
        console.log('COnnection failed');
    })
}

module.exports = connectDB;