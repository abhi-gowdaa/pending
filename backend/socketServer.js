const authSocket=require("./middleware/authSocket");
const newConnectionHandler=require("./socketHandler/newConnectionHandler")
const disConnectHandler=require("./socketHandler/disConnectHandler")


const registerSocketServer=(server)=>{
    const io=require("socket.io")(server,{
        cors:{
            origin:'*',  //connect from anywhere
            methods:["GET","POST"]
        }
    });

io.use((socket,next)=>{   //middleware check token valdation , returs user ifo to socket as sockey.user it cointains userid, mailid, token experation
    authSocket(socket,next)
});

io.on("connection",(socket)=>{
    
    console.log("user connected");
    console.log(socket.id);
    newConnectionHandler(socket , io); //send id's to store in server store
    // new connection handler save connected user info

    socket.on("disconnect",()=>{
        disConnectHandler(socket);
    });
});

};

module.exports={
    registerSocketServer,
};