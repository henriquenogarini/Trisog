import express from "express"
import router from "./routes/routes"
import cors from "cors"

const app = express()

const corsOpt = {
    origin: "http//localhost:5173",
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "Content-Type,Authorization"
}

app.use(cors(corsOpt))
app.use(express.json())
app.use("/api", router)

app.listen(4003, () => console.log("Server is running on PORT 4003"))