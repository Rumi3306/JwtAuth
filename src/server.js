import dotenv from "dotenv"
import express from "express"
import jwt from "jsonwebtoken"


const app = express()
dotenv.config()
const port = process.env.PORT || 7000

app.get("/",(request,response)=>{
  return response.status(200).json({
    message:"Welcome to Home Page!",
    data:{
      id:4882,
      name:"SHIVA.P",
      email:"shiva@gmail.com"
    }
  })
})


app.listen(port,()=>console.log(`Server listening on port: ${port}!`))
