import express,{Application} from "express"
import { config } from "dotenv"
config()


const app:Application= express()
const port = process.env.PORT || 3000
// app.use(express.json())
import "./database/connection"




app.listen(port,()=>{
    console.log(`Running in port:${port}`)
})