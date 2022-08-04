const express = require("express");
const jsonData =require("./data")

const app = express();

app.get('/user1',function(req,res){
    // res.json(JSON.stringify({name:"rohit",class:"10th"}));
    // res.send("hello world");
    
    // res.write("<h1>HELLO H1</h1>");

    res.json(jsonData.rohit.json1);
})

app.get('/user2',function(req,res){
    res.json(jsonData.rohit.json2);
})
// res.end();
app.listen(3002);