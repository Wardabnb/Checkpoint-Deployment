import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import { dbConnect } from "./db.js"
import jobsRouter from "./routers/jobs.js"

dotenv.config()

const app = express()
app.use(express.json()) // parse json content 
app.use(cors())  // allow request between front and backend
dbConnect()

// routers 
app.use("/jobs", jobsRouter)


app.listen(4000, () => {
  console.log("Server is running on port 4000")
})