import express, {Request, Response} from "express"
import {PORT} from "../config/port"

const app = express()

app.get("/go", (req: Request, res: Response)=> {
    res.send("Hello")
})

app.listen(PORT,()=>{
    console.log(`Server Listening on PORT ${PORT}`)
})
