const express=require('express');
const router=express.Router();
const authControllers=require('../controllers/auth/authControllers')

// Handle GET request to '/api/register' (for testing purposes)

router.post('/register' ,authControllers.controllers.postRegister);

// Handle GET request to '/api/login' (for testing purposes)

router.post('/login',authControllers.controllers.postLogin)


// router.post('/login',(req,res)=>{

//     res.send(' login route')
// })

module.exports=router;

