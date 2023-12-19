// (A) REQUIRED MODULES
// npm install express peer
const express = require("express"),
      path = require("path"),
      { PeerServer } = require("peer");


// (B) EXPRESS SERVER
// http://localhost/a
// http://localhost/b
const app = express();
      
app.use(express.static('public')); // 'public' should be the name of the directory where your CSS file is located

 
app.get('/', (req, res) => res.status(200).send('Hello World!'));
app.get("/a", (req, res) => res.sendFile(path.join(__dirname, "public/2-peer-a.html")));
app.get("/b", (req, res) => res.sendFile(path.join(__dirname, "public/3-peer-b.html")));
app.listen(8000, () => {
  console.log("Server started at http://localhost:8000");
});
 
// (C) PEER SERVER
// http://localhost:9000/myapp
const peerServer = PeerServer({
  port: 9000,
  path: "/myapp"
});