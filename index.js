var express = require("express");
var http = require("http");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
    
  });
  app.use(express.static(__dirname + '/'));

  server.listen(process.env.PORT || '5000', () => {
    console.log("Server started at localhost:3000");
  });
