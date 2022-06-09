const mongoose = require("./");

const productSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  city: { type: String },
  description: { type: String },
  category: { type: String },
  phone: { type: String },
  website: { type: String },
  logo: { type: String }, //TODO  image?
  photos: { type: String }, //TODO  array image?
});

const Product = mongoose.model("products", productSchema);

module.exports = { Product };
