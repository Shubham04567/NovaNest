import dotenv from "dotenv"
import connectdb from "./db/index.js"

dotenv.config({
    path:"/.env"
})

connectdb()
.then((data)=>{
    console.log("now let get ready")
})
.catch((error)=>{
    console.log("ERROR => ",error)
})