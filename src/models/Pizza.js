const {Schema, model} = require('mongoose')

const pizzaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: String,
    type: {
        type: String,
        required: true
    },
    ingredients: [{
        type: Schema.Types.ObjectId,
        ref: 'Ingredient'
    }]
})

module.exports = model('Pizza', pizzaSchema, 'pizza-stock')
