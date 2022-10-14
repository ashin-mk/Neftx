const express=require("express")
const Recipe = require("./Models/ReciepieSchema")
const mongoose=require("mongoose")
const calculator=require("./calculations/Calculations")
const app=express()
const ingredients=require("./Models/Ingredients")
const coupons=require("./Models/Coupons")
const cors=require("cors")
app.use(cors())

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(3002,(err)=>{
   if(err){
    console.log("err")
    return}
console.log("Server Is Running Successfully")
return
})
mongoose.connect("mongodb://localhost/Neftx",()=>{
    console.log('connected to db')
})

app.get("/home",async(req,res)=>{
    try {
        const recipes= await Recipe.find()
        const ingred=await ingredients.find()
        const coupon=await coupons.find()
        const price= calculator(recipes,ingred,coupon)
        // console.log(price)
        res.status(200).send(price)
    } catch (error) {
        res.status(400).send("err")
    }
  
})

// inserted ingredients,coupons,recipes and commented them

// app.post("/insertingredients",async(req,res)=>{
// await ingredients.insertMany(req.body)
// res.send("done")
// })

// app.post("/insertcoupons",async(req,res)=>{
// await coupons.insertMany(req.body)
// res.send("done")
// })
// app.post("/insertrecipes",async(req,res)=>{
// await Recipe.insertMany(req.body)
// res.send("done")
// })

