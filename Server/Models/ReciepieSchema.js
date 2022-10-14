const mongoose=require("mongoose")
const RecipeSchema=mongoose.Schema({
    Recipe:Number,
    items:Array
})
const Recipe=mongoose.model("recipes",RecipeSchema)
module.exports=Recipe

