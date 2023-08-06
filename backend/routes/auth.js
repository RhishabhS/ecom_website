const router=require("express").Router();
const User=require("../models/User")
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")
//to register user
router.post("/register",async (req,res)=>{
    const newUser=new User({
        username: req.body.username,
        email:req.body.email,
        // password: req.body.password,
        password: CryptoJS.AES.encrypt(req.body.password,process.env.SECRET).toString(),    
    }
    );
    try{
        const saveUser=await newUser.save(); 
        res.status(201).json(saveUser);

    }catch(err){
        res.status(500).json(err);
    }


})
//for user login
router.post("/login",async(req,res)=>{
    const loginUser=await(User.findOne({username: req.body.username}));
    !loginUser&&res.status(401).json("uid not found");
    const lpass=loginUser.password;
    if(lpass===null) res.status(401).json("password empty");
    const pass=CryptoJS.AES.decrypt(lpass, process.env.SECRET).toString(CryptoJS.enc.Utf8);
    // const pass=lpass;
    if (pass!==req.body.password) res.status(401).json("password incorrect");
    else{
        const accessToken=jwt.sign({
            id: loginUser._id,
            isAdmin: loginUser.isAdmin,
        },process.env.JWT_SEC,{expiresIn:"3d"});
        const {password,...others}=loginUser._doc;
        res.status(200).json({...others, accessToken});     
    }
})

module.exports=router;
