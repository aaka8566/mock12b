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
        const filter={};const sort={};const page=+(req.query.page); 
        if(req.query.Role){filter.Role={$eq:req.query.Role}}
        if(req.query.postedat){sort.postedat=req.query.postedat}
        if(req.query.page){}
        console.log(req.query);
        try{
            const jobs=await postingModel.find(filter).skip((page-1)*10).limit(10).sort({postedat:sort.postedat});
            res.status(200).send(jobs);
        }
        catch(err){res.status(400).send(err)}
        })  
postingRoute.post("/post",async(req,res)=>{
try{
    const job=await postingModel(req.body);
    await job.save();
    res.status(200).send(job);
}
catch(err){res.status(400).send(err)}
});
module.exports={postingRoute};