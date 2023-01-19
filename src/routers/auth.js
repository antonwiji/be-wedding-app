import express from "express"
import { loginAccountController, registerAccountController } from "../controllers/authController.js"
import { userValidationRules } from "../validator/authValidator.js"
import { validate } from "../helpers/validator.js"

const app = express()

export const registerAccount = app.post('/register', registerAccountController)
export const loginAccount = app.post('/login', userValidationRules(), validate,  loginAccountController)

