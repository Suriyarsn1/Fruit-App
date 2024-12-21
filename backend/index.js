const express=require("express")
const cors=require("cors")

const app=express()
app.use=(cors())

var arr=[]
app.get("/addfruit",function(req,res){
    arr.push(req.query.fruit)
    res.send(arr)
   
})
app.listen(5000,function(){
    console.log("Server has Strated")
})
