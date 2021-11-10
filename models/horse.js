const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
Name: String,
Cost: String,
Weight: Number
})
module.exports = mongoose.model("horse",
horseSchema)