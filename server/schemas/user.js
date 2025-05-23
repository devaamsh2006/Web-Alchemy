const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
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

const UserModel=mongoose.model("User",userSchema)

module.exports=UserModel