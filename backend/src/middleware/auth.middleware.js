import { pool } from "../db/index.js";
import { decode_accessToken } from "../utils/helper.js"


const verifyJWT = async(req,res,next) =>{
    try {
        console.log("middleware", req.cookies)
        const atoken = req.cookies?.accessToken || req.header
        ("Authorization")?.replace("Bearer ","")
    
        if(!atoken){
            throw new error
        }

        const decode = await decode_accessToken(atoken);
        console.log(decode)
        const response  = await pool.query("SELECT user_id from users where user_id=$1",[decode.id])
        console.log(response)
        if(response.rowCount==0){
            throw new error
        }

        req.id = decode.id

        console.log(req)
        // throw new error
        next();
        
    } catch (error) {
        return res.status(400).json({
            status: 400,
            succuss: false,
            message: "unauthorized access"
        })
    }
}

export default verifyJWT