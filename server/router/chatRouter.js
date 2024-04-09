import express from "express"
import chat from "../controller/chatController.js"

let router = express.Router()
router.post('/chat', chat)

export default router