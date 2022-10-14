const mongoose=require("mongoose")
const ingredientSchema=mongoose.Schema({
    index:Number,
    Price:Number
})
const ingredients=mongoose.model("ingredients",ingredientSchema)
module.exports=ingredients