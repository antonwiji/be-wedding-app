import { createUserModels, getAllUserModels, getUserByIdModels } from "../models/userModels.js"

const getAllUserController = async(req, res) => {
    try {
        const [data] = await getAllUserModels()
        res.status(200).json({
            code: 200,
            data: data
        })
        
    } catch (error) {
        res.status(500).json({
            messageError: error
        })
    }
}

const getUserByIdController = async(req, res) => {
    try {
        const { id } = req.body
        const [data] = await getUserByIdModels(id)
        res.json({
            code: 200,
            data: data
        }) 
    } catch (error) {
        res.status(500).json({
            messageError: error
        })
    }  
}

const createUserController = async(req, res) => {
    try {
        await createUserModels(req.body)
        res.json({
            code: 200,
            data: req.body
        })
    } catch (error) {
        res.status(500).json({
            messageError: error
        })
    }
}

export {
    getAllUserController,
    getUserByIdController,
    createUserController
}