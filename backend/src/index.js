import dotenv from "dotenv"
import {connectdb} from "./db/index.js"
import {app} from './app.js'

dotenv.config({
    path:"/.env"
})

connectdb()
.then((data)=>{
    app.listen( process.env.PORT || 8000, ()=>{
        console.log("Server is running as port: ",process.env.PORT)
    })

    app.get("/hello", (req,res)=>{
        res.send("Project started")
    })
})
.catch((error)=>{
    console.log("ERROR => ",error)
})