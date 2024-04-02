const jwt=require('jsonwebtoken');
 

const config=process.env;


const verifyTokenSocket=(socket , next)=>{
    const token=socket.handshake.auth?.token;
 
    try{
    
        const decoded=jwt.verify(token,config.TOKEN_KEY);
        socket.user = decoded; //add to socket.user can access info  through "socket.user" keyword
        // console.log(decoded) this ounntput =>{
        //   userId: '660b7b548539edb63b52165d',
        //   mail: 'b@gmail.com',
        //   iat: 1712028698,
        //   exp: 1712115098
        // }

    }catch(err){
  const socketError=new Error('NOT_AUTHORIZED');
  return next(socketError);
    }

   next();
}

module.exports=verifyTokenSocket;