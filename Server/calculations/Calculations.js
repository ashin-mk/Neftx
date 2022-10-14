
module.exports=function PriceCalculator(recipes,ingred,coupon){
   // console.log(recipes)
  // console.log(ingred)
let price=[
    {},
    {},
    {},
    {},
    {}
]

let k=0
while(k<5){
    let j=0
while(j<5){
let i=0
let Rprice=0
while(i<4){
    let rec=recipes[j]["items"][i]
    // console.log(rec)
Rprice+=ingred[rec]["Price"]-coupon[k]["discountIngredient"][rec]

i++
}

price[k]["Recipe"+(j+1)]=Rprice
// console.log(Rprice,j)
    j++
}
price[k].store="Store"+(k+1)
    k++
}
//console.log(price)
return price
}