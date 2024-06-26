import express from 'express'
import 'dotenv/config'
import dbConnect from './config/dbConnection.js'
import chatRouter from "./router/chatRouter.js"
import cors from 'cors'

const app = express()
app.use(
    cors({
      origin: [
        "http://localhost:3000",
      ],
      credentials: true,
    })
  );
dbConnect()
app.use(express.json());
app.use('/',chatRouter)

const port = 8888
app.listen(port, () => {
    console.log(`server running on ${port}`);
})