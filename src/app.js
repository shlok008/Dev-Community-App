const express = require("express");

const app=express();

app.use('/',(req,res)=>{
    res.send('Hello from the server.');
    })
app.listen(3000, ()=>{console.log('Server is Successfully started on Port 3000');})
