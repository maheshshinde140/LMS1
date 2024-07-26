import { Router } from "express";
import { loginUser } from "../controller/version1/login.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const loginRouter = Router();

loginRouter.route('/login').post(

    upload.none(),
    loginUser
)


export default loginRouter;