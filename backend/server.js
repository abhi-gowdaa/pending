const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const  SocketServer  = require("./socketServer");
const friendInvitationRoutes=require("./routes/friendInvitationRoutes")

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(express.json());
app.use(cors());

//login register route
app.use("/api/auth", authRoutes);

//friend request route
app.use("/api/friend-invitation",friendInvitationRoutes)


//testing
app.get("/apii", (req, res) => {
  res.send("hii");
});





const server = http.createServer(app);
SocketServer.registerSocketServer(server);



main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  //  await mongoose.connect('mongodb://127.0.0.1:27017/todolistDB');

  server.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
}
