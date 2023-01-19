import { body } from "express-validator"

export const userValidationRules = () => {
    return [
      // username must be an email
      body('email').notEmpty().withMessage('is required').isEmail().withMessage('is field not email'),
      // password must be at least 5 chars long
      body('password').isLength({ min: 5 }).withMessage('min length 5'),
    ]
  }