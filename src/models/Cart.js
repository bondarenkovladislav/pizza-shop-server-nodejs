const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  items: {
    type: [
      {
        count: {
          type: Number,
          required: true,
          default: 1,
        },
        productId: {
          type: Schema.Types.ObjectID,
          ref: "Pizza",
          required: true,
        },
        ingredients: [
          {
            id: {
              type: Schema.Types.ObjectID,
              ref: "Ingredient",
              required: true,
            },
          },
        ],
      },
    ],
    required: true,
  },
});

module.exports = model("Cart", CartSchema, "user-cart");
