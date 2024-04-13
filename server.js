const express=require('express')
const urlRoutes=require('./routes/urls.routes')
const connectDb= require('./connection')
const Url=require('./models/urls.model')

PORT=5000
const app=express()

app.use(express.json())
app.use(express.urlencoded( { extended : false } ))



//MongoDB connection
connectDb('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log( "connected to MongoDB" ))
.catch((err)=> console.error("Error connecting to MongoDB", err));

//Routes
app.use("/url",urlRoutes)
app.get('/:shortId', async (req,res)=>{
    const shortId=req.params.shortId;
    const entry=await Url.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory: {
            timestamp: Date.now()
        }
    }})
    // console.log(entry.redirectUrl)
    res.redirect(entry.redirectUrl);
})


//Run server
app.listen(PORT,()=>{
    console.log(`server is live at ${PORT}`)
})
