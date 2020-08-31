const Pizza = require("../models/Pizza");

module.exports = {
  getStock: async ({ id }) => {
    console.log(id)
    if(id) {
      return [await Pizza.findById(id).populate("ingredients")]
    }
    return await Pizza.find().populate("ingredients");
  },
};
