const connectedUserStore=new Map();

//user id is the id created by monho db ,ie -> dbase _id 

const addNewConnectedUser=({ socketId,userId })=>{

    connectedUserStore.set(socketId,{userId});
    console.log("new connected user");
    console.log(connectedUserStore);
}

const removeConnectedUser=(socketId)=>{

    if(connectedUserStore.has(socketId)){
        connectedUserStore.delete(socketId);
        console.log("new connected user");
        console.log(connectedUserStore);
    }
}

module.exports= {
    addNewConnectedUser,
    removeConnectedUser,
};