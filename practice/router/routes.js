
const express = require('express');
const router  = express.Router();

router.get('/getdata',(req,res,next)=>{
    res.end('<h1>getdata</h1> \n');
})



router.get('/senddata',(req,res,next)=>{
    res.end('<h1>senddata</h1> \n');
})



router.get('/deletedata',(req,res,next)=>{
    res.end('<h1>deletedata</h1> \n');
})

module.exports = router;