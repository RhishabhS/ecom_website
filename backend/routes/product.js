const router=require("express").Router();
const Product=require("../models/Product");
const { verifyAdmin, verifyTokauth } = require("./verifyToken");
//create
router.post("/",verifyAdmin, async (req,res)=>{
    const newProduct=new Product(req.body);
    try{
        const savedProduct= await newProduct.save();
        res.status(200).json(savedProduct);

    }catch(err){
        res.status(500).json(err);
    }
});
//update 
router.put("/:id",verifyAdmin, async (req,res)=>{
    try{
        const UpdatedProduct=await Product.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true});
        res.status(200).json(UpdatedProduct);



    }catch(err){
        res.status(500).json(err);      
    }
});
// delete
router.delete("/:id", verifyAdmin, async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted");
    }catch(err){
        res.status(500).json(err);
    }
})

//get product
router.get("/find/:id",async (req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
})

//get all products
router.get("/",async(req,res)=>{
    try{
    const q1=req.query.new;
    const q2=req.query.cat;
    let products;
    if(q1){
        products=await Product.find().sort({CreatedAt:-1}).limit(5);
            
    }
    else if(q2){
        products= await Product.find({
            cat:{
                $in:[q2],
            },
        }

        );
    }else{
        products=await Product.find();
    }
    res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports=router;
