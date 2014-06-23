var express = require("express");  
var app = express();  
app.configure(function(){  
  app.use(express.static(__dirname + '/'));
});
app.listen(3001, "127.0.0.1");
console.log("Server is up and listening on port 3001"); 
