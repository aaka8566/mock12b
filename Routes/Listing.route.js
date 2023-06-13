const express = require('express');
const listingRoute=express.Router();


listingRoute.get("/",async(req,res)=>{
    try{
        const job=await 
        res.status(200).send("job");
    }
    catch(err){res.status(400).send(err)}
    })
listingRoute.patch("/edit",async(req,res)=>{
try{
    const job=await postingModel(req.body);
    job.save();
    res.status(200).send(job);
}
catch(err){res.status(400).send(err)}
});
listingRoute.delete("/delete",async(req,res)=>{
    try{
        const job=await postingModel(req.body);
        job.save();
        res.status(200).send(job);
    }
    catch(err){res.status(400).send(err)}
    });
module.exports={listingRoute};