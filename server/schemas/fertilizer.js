const mongoose = require("mongoose");

const fertilizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ["Organic", "Inorganic", "Biofertilizer", "Chemical", "Compost", "Other"],
        required: true
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

const Fertilizer = mongoose.model("fertilizer", fertilizerSchema);
module.exports = Fertilizer;
