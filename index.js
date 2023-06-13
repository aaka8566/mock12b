const express=require("express");
const app=express();
const {connection}=require("./db");
const cors=require("cors");
require("dotenv").config();
const {postingRoute}=require("./Routes/Posting.route");

app.use(cors());
app.use(express.json());
app.use("/posting",postingRoute);

app.get("/",(req,res)=>{
    res.send("hello mock12 ");
})









app.listen(process.env.PORT,async()=>{
try{
await connection;
console.log(`connected to${process.env.PORT}`);
}
catch(err){console.log(err.message);}
})
