const mongoose= require("mongoose")
// const schema=require("schema")

const userSchema=mongoose.Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
password:{
    type:String,
    require:true,
    // unique:true
}
})

const user=mongoose.model("detail",userSchema)
module.exports=user