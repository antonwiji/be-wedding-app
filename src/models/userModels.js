import { pool } from "../config/database.js"

const getAllUserModels = () => {
    const query = "SELECT * FROM users"

    return pool.execute(query)
}

const getUserByIdModels = (req) => {
    const query = "SELECT * FROM users WHERE id = ?"

    return pool.execute(query, [req])
}

const createUserModels = (req) => {
    const { name, alamat, no_hp } = req
    const query = "INSERT INTO users (name, alamat, no_hp) VALUES (?, ?, ?)"

    return pool.execute(query, [name, alamat, no_hp])
}

export {
    getAllUserModels,
    getUserByIdModels,
    createUserModels
}