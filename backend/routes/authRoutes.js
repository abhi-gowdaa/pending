const express=require('express');
const router=express.Router();

// Handle GET request to '/api/register' (for testing purposes)

router.post('/register' ,(req , res)=>{
    res.send('register route')
});

// Handle GET request to '/api/login' (for testing purposes)

router.post('/login',(req,res)=>{

    res.send(' login route')
})

module.exports=router;

