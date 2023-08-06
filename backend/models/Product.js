const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true},
  prod_desc:{type:String},
  img: { type: Array, required: true },
  size:{type:Array},
  color:{type:Array},
  price:{type:Number, required:true},
  cat:{type:Array},
},
{timestamps:true}
);
module.exports=mongoose.model("Product",ProductSchema)