const router=require("express").Router();

const { verifyAdmin, verifyTokauth, verifyToken } = require("./verifyToken");
const Cart=require("../models/Cart");
//create
router.post("/",verifyToken, async (req,res)=>{
    const newCart=new Cart(req.body);
    try{
        const savedCart= await newCart.save();
        res.status(200).json(savedCart);
 
    }catch(err){
        res.status(500).json(err);
    }
});
//update 
router.put("/:id",verifyTokauth, async (req,res)=>{
    try{
        const UpdatedCart=await Cart.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true});
        res.status(200).json(UpdatedCart);



    }catch(err){
        res.status(500).json(err);      
    }
});
// delete
router.delete("/:id", verifyTokauth, async(req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//get user cart
router.get("/find/:userid",verifyTokauth,async (req,res)=>{
    try{
        const cart=await Cart.findOne({userId:req.params.userid});
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all 
router.get("/",verifyAdmin,async(req,res)=>{
    try{
        const carts=await Cart.find();

        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports=router;
