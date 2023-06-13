const express = require('express');
const postingRoute=express.Router();
const {postingModel}=require("../Models/Posting.model.js");
const cors=require("cors");
postingRoute.use(cors());
postingRoute.get("/",async(req,res)=>{
    try{
        res.status(200).send("job");
    }
    catch(err){res.status(400).send(err)}
    })
    postingRoute.get("/jobs",async(req,res)=>{
        try{
            const jobs=await postingModel.find();
            res.status(200).send(jobs);
        }
        catch(err){res.status(400).send(err)}
        })  
postingRoute.post("/post",async(req,res)=>{
try{
    const job=await postingModel(req.body);
    job.save();
    res.status(200).send(job);
}
catch(err){res.status(400).send(err)}
});
module.exports={postingRoute};