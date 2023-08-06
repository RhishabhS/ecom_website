const router=require("express").Router();
const { verifyAdmin, verifyTokauth, verifyToken } = require("./verifyToken");
const Order=require("../models/Order");
const { ServerApiVersion } = require("mongodb");
//create
router.post("/",verifyToken, async (req,res)=>{
    const newOrder=new Order(req.body);
    try{
        const savedOrder= await newOrder.save();
        res.status(200).json(savedOrder);

    }catch(err){
        res.status(500).json(err);
    }
});
//update 
router.put("/:id",verifyAdmin, async (req,res)=>{
    try{
        const UpdatedOrder=await Order.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true});
        res.status(200).json(UpdatedOrder);



    }catch(err){
        res.status(500).json(err);      
    }
});
// delete
router.delete("/:id", verifyTokauth, async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Cart has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//get user orders
router.get("/find/:userid",verifyTokauth,async (req,res)=>{
    try{
        const orders=await Order.find({userId:req.params.userid});
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all 
router.get("/",verifyAdmin,async(req,res)=>{
    try{
        const orders=await Order.find();

        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

//get monthly income
router.get("/income",verifyAdmin,async (req,res)=>{
    try{
        const date=new Date();
        const lastMonth= new Date(date.setMonth(date.getMonth()-1));
        const llastMonth=new Date(date.setMonth(lastMonth.getMonth()-1));
        try{
            const income=await Order.aggregate([
                {$match: {
                    createdAt:{$gte: llastMonth},
                }},
                {$project:{
                    month:{
                        $month:"$createdAt"
                    },
                    sales:"$amount"
                }},
                {
                    $group:{
                        _id:"$month",
                        total: {$sum:"$sales"},
                    }
                }
            ]);
            res.status(200).json(income);

        }catch(err){
            res.status(500).json(err);
        }
    }catch(err){
        res.status(500).json(err); 
    }
});

module.exports=router;
