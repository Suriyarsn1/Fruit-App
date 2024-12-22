const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/fruits").then(function(){
    console.log("db connected...")
}).catch(function(){
    console.log("db not connect")
})

const Sweet=mongoose.model("Sweet",{
    name:String
},"sweet")

app.get("/fruitlist",function(req,res){
    Sweet.find().then(function(retdata){
       
        res.send(retdata)
       }).catch(function(){
        console.log("sorry")
       })

app.post("/addfruit",function(req,res){

    const newFruit= new Sweet(
        {
            name:req.body.newfruit
        } 
    )
   
    newFruit.save().then(()=>console.log("saved sucessfully"))
    .catch(()=>console.log("Sorry not saved"))
})

   
})
app.listen(5000,function(){
    console.log("Server has Strated")
})
