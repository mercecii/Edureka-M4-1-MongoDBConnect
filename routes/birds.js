var express  = require('express')
var router = express.Router()
// middleware that is specific to this router
router.use((req,res,next)=>{
    console.log('Time',Date.now());
    next();
})




// Define the home Page route
router.get('/',(req,res)=>{
    res.send('Birds home page')
})
// Define the about route
router.get('/about',(req,res)=>{
    res.send('about Birds')
})

module.exports = router;