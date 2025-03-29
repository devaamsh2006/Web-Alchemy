const mongoose=require('mongoose')

const rentSchema=new mongoose.Schema({
    rentalid:{
        type:String, 
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{"strict":"throw"})

const RentModel=mongoose.model("rent",rentSchema)

module.exports=RentModel