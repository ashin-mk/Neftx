const  mongoose=require("mongoose")
const CouponsSchema=({
    Store:Number,
    discountIngredient:Array
})
const coupon=mongoose.model('coupons',CouponsSchema)
module.exports=coupon