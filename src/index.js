import express, { json } from "express"
import { getAllUser } from "./routers/users.js"
import { registerAccount } from "./routers/auth.js"
import { portServer } from "./config/config.js"

const app = express()

app.use(json())
app.use('/', getAllUser)
app.use('/', registerAccount)

app.listen(4000, () => {
    console.log(`server running port : ${portServer}`)
})