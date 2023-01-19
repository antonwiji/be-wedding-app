import { pool } from "../config/database.js"
import bcrypt from "bcrypt"

const registerAccountModels = (req) => {
    const { name, email, password, no_hp } = req
    const query = "INSERT INTO auth (name, email, password, no_hp) VALUES (?, ?, ?, ?)"

    return pool.execute(query, [name, email, password, no_hp])
}

const loginAccountModels = async(req) => {
    const { email, password } = req
    const login = "SELECT DISTINCT name, email, password FROM auth WHERE email = ? LIMIT 1"
    const [data] = await pool.execute(login, [email])
    const fethPassword = data[0]?.password
    
    if(data.length > 0) {
        const match = await bcrypt.compare(password, fethPassword)
        return match
    }

    return false
}

export {
    registerAccountModels,
    loginAccountModels
}