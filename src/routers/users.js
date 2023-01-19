import express from "express"
import { createUserController, getAllUserController, getUserByIdController } from "../controllers/userControllers.js"

const app = express()

export const getAllUser = app.get('/users', getAllUserController)
export const getUserById = app.post('/users/id', getUserByIdController)
export const createUsers = app.post('/users', createUserController)
