const express= require("express");
const app= express();
require("./model/index")

app.get("/",(req,res)=>{
    res.send("i am live");
})


app.listen(3000, ()=>{
    console.log("server running Port no. at 3000");
})