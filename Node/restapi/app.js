let express = require('express');
let app = express();
let port = 9500;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let bodyParser = require('body-parser');
let mongoUrl = "mongodb://localhost:27017";
let db;

app.get('/',(req,res) => {
    res.send('')
})

app.get('/Category',(req,res) => {
    db.collection('Category').find(). toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
 

app.get('/brands',(req,res) => {
    db.collection('brands').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})




MongoClient.connect(mongoUrl,{userNewUrlParser:true},(err,dc) => {
    if(err) console.log('Error while connecting');
    db = dc.db('Project Olx');
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`)
    })  
})