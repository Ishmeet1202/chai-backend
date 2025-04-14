import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN         // FRONTEND ME SE KIS KIS JAGAH SE REQUEST ACCEPT KR RAHA HU
}))

export { app }