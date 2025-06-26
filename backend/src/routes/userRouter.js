import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js";
import verifyJWT from "../middleware/auth.middleware.js"
// import userRouter
const router = Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT,logoutUser)

export default router