const express=require("express")

const app=express()
var arr=[]
app.get("/",function(req,res){
    arr.push(req.query.fruit)
    res.send(arr)
   
})
app.listen(5000,function(){
    console.log("Server has Strated")
})