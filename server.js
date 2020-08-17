const express=require("express");
const cors=require("cors");
const app=express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.post("/formsubmit",(req,res)=>{

console.log(req.body);
    if(req.body.data=="send1")
    {
        res.json({message:"HEllo",data:["hi"]})
    }

    else  if(req.body.data=="send2"){
        res.json({message:"HEllo",data:["hi","hello"]})
    }
    
    else{
        res.json({message:"HEllo",data:["hi","hello","there"]})
    }


})

// run npm install before the server starts
//node server.js

app.listen("4000",()=>{

    console.log("Server Started");
})