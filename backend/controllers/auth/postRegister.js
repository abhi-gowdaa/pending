const User=require('../../models/user');
const bcrypt=require('bcryptjs');
const config = process.env;
const jwt=require('jsonwebtoken')

const postRegister=async (req,res)=>{

    try{
const {username , mail , password }=req.body;

//check if user exists
const userExist=await User.exists({ mail });

if(userExist){
    return res.status(409).send('Email /User already exist ');
}

//encrypt password
const encyptPassword=await bcrypt.hash(password,10);

const user=await User.create({

    mail:mail.toLowerCase(),
    username,
    password:encyptPassword

})

//create jwt token
 const token = jwt.sign(
    {
      userId: user._id,
      mail,
    },
    config.TOKEN_KEY
  );;

res.status(200).json({
    userDetails:{
        mail:user.mail,
        token:token,
        username:user.username
    }

})

    }
    catch(err){
        console.log(err)
    }
};

module.exports=postRegister;