 
const registerSocketServer=(server)=>{
    const io=require("socket.io")(server,{
        cors:{
            origin:'*',  //connect from anywhere
            methods:["GET","POST"]
        }
    });

io.on("connection",(socket)=>{
    console.log("user connected");
    console.log(socket.id);


    
})

}

module.exports={
    registerSocketServer,
};