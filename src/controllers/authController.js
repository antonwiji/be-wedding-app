import { loginAccountModels, registerAccountModels } from "../models/accountModels.js"
import bcrypt from "bcrypt"

const registerAccountController = async(req, res) => {
    try {
        const password = await bcrypt.hash(req.body.password, 10)
        Object.assign(req.body, {password: password})
        await registerAccountModels(req.body)
        
        res.status(201).json({
            code: 201,
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            messageError: error
        })
    }
}

const loginAccountController = async(req, res) => {
    try {
    const currectLogin = await loginAccountModels(req.body)
       if(currectLogin) {
            res.status(200).json({
                code: 'success',
                messageInfo: 'login success'
            })
       }else {
            res.status(200).json({
            code: 'failed',
            messageInfo: 'email and password not matching'
        })
       }
    } catch (error) {
        res.json({
            messageError: error
        })
    }
}

export {
    registerAccountController,
    loginAccountController
}