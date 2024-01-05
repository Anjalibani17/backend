require('dotenv').config()
const express = require('express')
//similar to import express from express
const app = express();

const port = 3000;
//like math.pi ,we can use app.method (like get etc)
//path and callback fun 
app.get('/', (req, res) => {
  res.send('Hello World!') //call back 
});
//suppose we want to send msg on path /abc
app.get("/abc",(req,res)=>{
  res.send("this is abc path");

})
app.get("/login",(req,res)=>{
  res.send("<h1>log-in</h1>")
})
app.get
//process.env.port is used to access port variable from env file 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});