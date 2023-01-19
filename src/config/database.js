import mysql from "mysql2"
import { hostDatabase, nameDatabase, passwordDatabase, userDatabase } from "./config.js"

export const pool = mysql.createPool({
    host: hostDatabase,
    user: userDatabase,
    password: passwordDatabase,
    database: nameDatabase,
}).promise()

