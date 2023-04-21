const mongoose=require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/carRental',{useNewUrlParser:true})



const User=mongoose.model('User',{
    username:String, 
    email:String,
    password:String,    
    rentedList:[]
})

const Car=mongoose.model('Car',{
    id:Number,
    categoryId:String,
    carName:String,
    payment:String,
    carCapacity:String,
    fuel:String,
    mileage:String,
    transmission:String,
    img1:String,
    img2:String,
    img3:String,
    rentingCompany:String,
    rating:String,
    review:String,
    available:String,
    contact:String
})


module.exports={
    User,Car
}