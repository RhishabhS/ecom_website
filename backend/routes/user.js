const router=require("express").Router();
const {verifyToken, verifyTokauth, verifyAdmin}= require("./verifyToken");
const User=require('../models/User')

//update 
router.put("/:id",verifyTokauth, async (req,res)=>{
    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET
        ).toString();
    }
    try{
        const UpdatedUser=await User.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true});
        res.status(200).json(UpdatedUser);



    }catch(err){
        res.status(500).json(err);      
    }
});
// delete
router.delete("/:id", verifyTokauth, async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//get user
router.get("/find/:id",verifyAdmin,async (req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        const {password,...others}=user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all users
router.get("/",verifyAdmin, async(req,res)=>{
    try{
    const query=req.query.new;
    const users=  query? await User.find().sort({_id:-1}).limit(5):await User.find();
    res.status(200).json(users);
    }catch(err){
        res.status(500).json(err);
    }
})  

//get user stats
router.get("/stats",verifyAdmin, async(req,res)=>{
    const date= new Date();
    const lastYear= new Date(date.setFullYear(date.getFullYear-1));
    try{
        const data= await User.aggregate([
            {
                $match:{createdAt:{$gte: lastYear}}
            },
            {
                $project:{
                    month:{$month: "$createdAt"}}
            },
            {
                $group:{
                    _id: "$month",
                    total:{$sum:1},

                }
            }
        ])
        res.status(200).json(data);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;
