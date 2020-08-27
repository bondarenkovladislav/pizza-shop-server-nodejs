const {Schema, model} = require('mongoose')

const ingredientsSchema = Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = model('Ingredient', ingredientsSchema, 'ingredients')
