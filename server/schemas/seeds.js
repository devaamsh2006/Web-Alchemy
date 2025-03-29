const mongoose = require("mongoose");

const seedsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    renatlid: {
        type: String,
        required: true
    }
});

const SeedModel = mongoose.model("seed", seedsSchema);
module.exports = SeedModel;
