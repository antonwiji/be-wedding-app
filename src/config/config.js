import * as dotenv from 'dotenv'
dotenv.config()

// setting config database mysql
export const hostDatabase = process.env.DATABASE_HOST
export const nameDatabase = process.env.DATABASE_NAME
export const userDatabase = process.env.DATABASE_USER
export const passwordDatabase = process.env.DATABASE_PASSWORD

// setting port running server
export const portServer = process.env.PORT_SERVER
