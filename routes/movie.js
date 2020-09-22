const global = require('./../global');
const express  = require('express')
const router = express.Router()
// middleware that is specific to this router
router.use((req,res,next)=>{
    console.log('Movies Time ',Date.now());
    next();
})


router.post('/',(req,res)=>{
    global.db.collection('movie').insertOne(req.body,(err,result)=>{
        if(!err){
            res.send("data inserted");
        }
        else{
            console.log("Error in Inserting Data in movie");
            res.send("Error in Inserting Data in movie");
        }
    });
});

router.get('/',(req,res)=>{
    global.db.collection('movie').find().toArray((err,result)=>{
        if(!err){
            res.send(result);
        }
        else{
            console.log("Error Reading data from movie collection");
            res.send("Error Reading data from movie collection");
        }
    });
});

router.put('/',(req,res)=>{
    let updatedObj = {
        "title":req.body.title,
        "producer":req.body.producer,
        "director":req.body.director
    };
        global.db.collection('movie').findOneAndUpdate({"title":req.body.title},{$set:updatedObj},
    {upsert:true},(err,result)=>{
        if(!err){
            res.send(result);
        }
        else{
            res.send("Error in updating")

        }
    })
});

router.delete('/',(req,res)=>{
    let testObj = {
        "title":req.body.title,
        "producer":req.body.producer,
        "director":req.body.director
    };
    global.db.collection('movie').findOneAndDelete(testObj,(err,result)=>{
        if(!err){
            res.send("Deleted");
        }
        else{
            res.send(err)
        }
    })
})


module.exports =router