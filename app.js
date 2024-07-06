const express=require("express")
const db=require('./db.js')
const schema=require('./schema.js')
const app=express()

// let PORT=5500
app.use(express.urlencoded({extended:true}))
app.use(express.json())





// new user create the data
app.post('/storedata',async(req,res)=>{
    
    const{name,email,password}=req.body
    const createdata= await schema.create({
        name,
        email,
        password
    })
    console.log(createdata)
})

// delete the user data

app.delete('/delete/:id',async(req,res)=>{
    const{id}=req.params
    let user = await schema.findByIdAndDelete(id)  
    res.status(200).send({
        data : user,
        massage : "Data Deleted Successfully"
    })

})

// update user deatils
app.post('/update/:id',async(req,res)=>{
    const{id}=req.params
    const{name,email,password}=req.body
    let user=await schema.findByIdAndUpdate(id,{name:name,email:email,password:password})
    res.status(200).send({
        data : user,
        massage : "upData Successfully"
    })

})




// app.get('/',(req,res)=>{
//     res.send("run server port on 5500")
// })
app.listen(5500)

console.log("server run port on 5500")