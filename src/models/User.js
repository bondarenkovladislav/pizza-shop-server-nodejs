const { Schema, model } = require("mongoose");
const Cart = require('./Cart')

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarUrl: String,
  resetToken: String,
  resetTokenExp: Date,
  cartId: {
    type: Schema.Types.ObjectID,
    ref: "Cart",
    required: true,
  },
});

UserSchema.methods.initUserCart = async function() {
  const cart = new Cart()
  await cart.save()
  this.cartId = cart._id
}

module.exports = model("User", UserSchema, "users");
