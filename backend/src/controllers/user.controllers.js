
import bcrypt from "bcrypt"
import {connectdb,pool} from "../db/index.js"
import { generate_accessToken } from "../utils/helper.js"

const registerUser = async (req, res, next) => {
    
    const {first_name, last_name, email, password, profile_pic="--"} = req.body

    //validation for required feild
    if(!first_name || !last_name || !email || !password){
        return res.status(401).json({
            status: 401,
            success: false,
            message: "required field cant be empty"
        })
    }

    //check of existence
    const response = await pool.query("SELECT FROM users WHERE email = $1",[email])

    if(response.rows.length > 0){
        return res.status(401).json({
            status: 401,
            success: false,
            message: "User already exist"
        })
    }

    //hash password to store
    const hashpass = await bcrypt.hash(password, 2)

    //insert in db
    await pool.query(
        "INSERT INTO users (first_name, last_name, email, password, profile_pic) VALUES($1, $2, $3, $4, $5)",
        [first_name, last_name, email, hashpass, profile_pic]
    );

    return res.status(200).json({
            status: 200,
            success: true,
            message: "User registered succesfully"
        })

}

const loginUser = async(req, res, next) =>{
    //perform login operation
    //check email and password exists or not
    //verify the password
    //return the response
    //genrate access and response tocken
    const {email, password} = req.body

    if(!email || !password){
        res.status(401).json({
            status:401,
            success:false,
            message:"required field is required"
        })
    }

    const user = await pool.query("SELECT * FROM users WHERE email=$1",[email]);

    if(user.rows.length ==0){
        res.status(404).json({
            status:404,
            success:false,
            message:"user not found"
        })
    }
    // console.log(user.rows[0].password);
    const check = await bcrypt.compare(password,user.rows[0].password)
    
    if(!check){
        return res.status(400).json({
            status:400,
            success: false,
            message:"invalid login credentials"
        })
    }
    // console.log(user)
    const token = await generate_accessToken(user.rows[0].user_id);

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .cookie("accessToken", token, options)
        .json({
        status:200,
        success:true,
        data:token,
        message: "user get logged in successfully"
    })
}

const logoutUser = async(req,res,next)=>{
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .json({
        status:200,
        success:true,
        message:"User logout successfully"
    })
}

export {
    registerUser,
    loginUser,
    logoutUser
}

    // Yes — if someone stores your access token and reuses it after logout, and your backend only checks if it's valid (not expired), it will work unless you:
    // because jwt are state less , it decode accesstoken and return protected data untill it expire

    // Use a blocklist store (all expired accesstoken and check on each request)
    // Tie JWT to a server-side session (use session to store and store in payload and check is session is valid or not)
    // Keep access tokens short-lived