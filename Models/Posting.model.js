const mongoose=require("mongoose");
const postingSchema=mongoose.Schema({
     "Company name":String,
     "City":String,
     "Location":String,
     "Role" :String,
     "Level" :String,
 "Position" :String,
    "Language" :String,
     "Contract" :String
});
const postingModel=mongoose.model("posting",postingSchema);
module.exports={postingModel};