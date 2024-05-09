// const jwt = require("jsonwebtoken");
// const config = process.env;

// //permit next func in any file to execute
// const verifyToken = (req, res, next) => {
//   let token = req.body.token || req.query.token || req.headers["authorization"];

//   if (!token) {
//     return res.status(403).send(" token required for authentication");
//   }
//   try {
//     token = token.replace(/^Bearer\s+/, ""); //to remove bearer(header)

//     const decoded = jwt.verify(token, config.TOKEN_KEY);
//     req.user = decoded; //we combine decode(token) to all the requests from user
//   } 
//   catch (err) {
//     return res.status(401).send(" invalid token");
//   }

//   return next();
// };

// module.exports = verifyToken;

const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded; //stores mail which can be accesed globally
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }

  return next();
};

module.exports = verifyToken;
