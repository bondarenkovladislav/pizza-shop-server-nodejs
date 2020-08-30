const {Schema, model} = require('mongoose')

const UserOrdersSchema = Schema({
    orderInfo: {
        type: {
            country: {
                type: String,
                required: true
            },
            paymentMethod: String,
            contactNumber: {
                type: String,
                required: true
            }
        },
        required: true
    }
})

module.exports = model('UserOrders', UserOrdersSchema, 'user-orders')
