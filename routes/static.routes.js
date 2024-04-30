const express=require('express');
const router=express.Router();
const Url = require("../models/urls.model");

router.get("/", async (req, res) => {
  if(!req.user) return res.redirect('/signin')
  const allUrls = await Url.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup",(req,res)=>{
  return res.render("signup")
})
router.get("/signin",(req,res)=>{
  return res.render("signin")
})

module.exports= router;
