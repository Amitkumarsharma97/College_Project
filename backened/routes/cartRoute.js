import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartControllers.js"
import authMiddleware from "../middleware/auth.js";

const carRouter = express.Router();

carRouter.post("/add", authMiddleware,addToCart)
carRouter.post("/remove",authMiddleware,removeFromCart)
carRouter.post("/get",authMiddleware,getCart)


export default carRouter;