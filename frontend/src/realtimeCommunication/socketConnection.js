// socketConnection.js
import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  if (!socket) {
    socket = io("http://localhost:5002/", {
      auth: {
        token: jwtToken,
      },
    });

    socket.on("connect", () => {
      console.log("Successfully connected with socket.io server");
      console.log(socket.id);
    });
  }

  return socket;
};

// this have 2 client id so wrong
// import io from "socket.io-client";

// let socket = null;
// export const connectWithSocketServer=(userDetails)=>{

//    socket=io("http://localhost:5002/");

//  socket.on("connect" ,()=>{
//     console.log(" sucessfully connected with socket.io server");
//     console.log(socket.id);
//  });

// }
