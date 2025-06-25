
import jwt, { decode } from "jsonwebtoken"

const generate_accessToken = async (id)=>{
    const token = await jwt.sign({
                    id: id
                },
                process.env.ACCESS_SECRET_KEY,
                { expiresIn: process.env.ACCESS_EXPIRY_TIME }
                )
    return token
}

const decode_accessToken = async (token) => {
    const decoded_token = await jwt.verify(token, process.env.ACCESS_SECRET_KEY)

    return decoded_token
}

export {generate_accessToken, decode_accessToken}