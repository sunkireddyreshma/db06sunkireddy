const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
Name: {
    type: String,
    minLength : 2
},
Cost: String,
Weight: Number
})
module.exports = mongoose.model("horse",
horseSchema)