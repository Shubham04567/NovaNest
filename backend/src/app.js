import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//set some confirguration about request to backend (b/ data can be i any formate any size)

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

import user_router from "./routes/userRouter.js"
//routes
app.use("/api/v1/users", user_router)


export { app }
