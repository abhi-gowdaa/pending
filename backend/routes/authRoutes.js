const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

// first we hv to create schema for validation

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

// first it goes to validator.body to verify , if true thn goes to postRegister
router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);

//validator.body middleware automatically uses the data in req.body 
//and validates it against the provided schema.

router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

// test route to verify if our middleware is working
router.get("/test", auth, (req, res) => {
  res.send("request passed");
});

//https://chat.openai.com/share/3e24e3dc-65cf-4e21-bc14-d3a20da72e9f  //for use of validator

// router.post('/login',(req,res)=>{

//     res.send(' login route')
// })

module.exports = router;
