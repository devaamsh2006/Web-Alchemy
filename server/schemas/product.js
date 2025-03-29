const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    farmerId: {
        type:String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { strict: 'throw' });

const VegetableModel = mongoose.model('Vegetable', productSchema);

module.exports = VegetableModel;
