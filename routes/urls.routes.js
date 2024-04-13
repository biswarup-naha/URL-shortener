const express=require('express')
const router=express.Router()
const {generateShortUrl, handleGetAllUrls, handleGetAnalytics}=require('../controllers/urls.controller')

router.get('/',handleGetAllUrls)
router.get('/analytics/:shortId',handleGetAnalytics)
router.post('/',generateShortUrl)

module.exports=router;