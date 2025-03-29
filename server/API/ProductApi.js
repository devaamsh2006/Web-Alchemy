const exp=require('express');
const ProductApp=exp.Router();
const productSchema=require('../schemas/product');

ProductApp.post('/add', async (req, res) => {
    try {
        const { farmerId, name, price, quantity } = req.body;
        
        const newProduct = new ProductModel({
            farmerId,
            name,
            price,
            quantity
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports=ProductApp