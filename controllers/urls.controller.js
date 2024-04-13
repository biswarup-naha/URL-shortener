const shortid = require('shortid');
const Url=require('../models/urls.model')

async function handleGetAllUrls(req,res){
    return res.json(await Url.find())
}

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await Url.findOne({shortId})
    return res.json({
        totalClicks: result.visitHistory.length, 
        analytics: result.visitHistory
    })
}

async function generateShortUrl(req,res){
    const body=req.body;
    if(!body.url) return res.sendStatus(400).json({error: "URL is required"});
    
    const sid=shortid.generate()
    await Url.create({
       shortId: sid,
       redirectUrl: body.url,
       visitHistory: [],
    })

    return res.json({id: sid})
}

module.exports={
    handleGetAllUrls,
    generateShortUrl,
    handleGetAnalytics
}