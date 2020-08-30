const {body} = require('express-validator')
const User = require('../models/User')

exports.registerValidators = [
    body('email')
        .isEmail().withMessage('Please provide correct email')
        .custom(async (value, {req}) => {
            try {
                const user = await User.findOne({ email: value })
                if (user) {
                    return Promise.reject('Current email is already exist')
                }
            } catch (e) {
                console.log(e)
            }
        })
        .normalizeEmail(),
    body('password', 'Password should be at least 6 symbols')
        .isLength({min: 6, max: 56})
        .isAlphanumeric()
        .trim()
]
