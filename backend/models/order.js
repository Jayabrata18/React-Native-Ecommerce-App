const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

exports.Order = mongoose.model("Order", orderSchema);
