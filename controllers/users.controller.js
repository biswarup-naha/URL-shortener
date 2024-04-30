const User=require('../models/users.model')
const { v4: uuidv4 } = require("uuid");
const {setUser,getUser}=require("../service/auth")

async function handleUserSignUp(req,res){
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password
    });

    return res.redirect("/")
}

async function handleUserSignIn(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({
        email,
        password
    });
    if(!user) return res.render("login",()=>"Invalid username or password")

    //if every details is right then we will generate a session id
    const sessionId=uuidv4()
    setUser(sessionId,user)//setting the user in the request 
    res.cookie('uid',sessionId)

    return res.redirect("/")
}

module.exports={
    handleUserSignUp,
    handleUserSignIn
}