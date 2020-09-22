"use strict";

const global = require('./global');
const express = require('express')
const app = express();

// Database
const MongoClient = require('mongodb').MongoClient;
const mongourl = 'mongodb://127.0.0.1:27017/'

// For reading JSON Payloads from client
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())


// Routes
const birds = require('./routes/birds')
app.use('/birds',birds)
const movie  = require('./routes/movie')
app.use('/movie',movie)



const port = 3300;


// Start the Server IFF mongo is connected  
MongoClient.connect(mongourl,{ useUnifiedTopology: true },(err,client)=>{
    if(err){
        console.log(err);
        throw err;
    }
    app.listen(port,()=>{
        global.db = client.db('classdatabase')
        console.log(`Server running on port ${port}`);
    });
});

