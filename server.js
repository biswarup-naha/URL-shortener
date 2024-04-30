const express=require('express')
const connectDb= require('./connection')
const Url=require('./models/urls.model')
const path=require('path');

const staticRoutes=require('./routes/static.routes')
const urlRoutes=require('./routes/urls.routes')
const userRoutes=require('./routes/user.routes');
const cookieParser = require('cookie-parser');
const {restrictToLoggedInUserOnly, checkAuth}=require('./middleware/auth.middleware')

PORT=5000
const app=express()

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded( { extended : false } ))
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))



//MongoDB connection
connectDb('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log( "connected to MongoDB" ))
.catch((err)=> console.error("Error connecting to MongoDB", err));

//Routes
app.use("/url",restrictToLoggedInUserOnly,urlRoutes)
app.use("/",checkAuth,staticRoutes)
app.use("/user",userRoutes)

//Run server
app.listen(PORT,()=>{
    console.log(`server is live at http://localhost:${PORT}`)
})
