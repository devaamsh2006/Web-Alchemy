const mongoose=require('mongoose')

const farmerSchema=new mongoose.Schema({
    farmerid:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
},{"strict":"throw"})

const FarmerModel=mongoose.model("farmer",farmerSchema)

module.exports=FarmerModel