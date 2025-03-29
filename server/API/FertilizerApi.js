const exp=require('express');
const FertilizerApp=exp.Router();

FertilizerApp.post('/add', async (req, res) => {
    try {
        const { name, type, price, quantity, rentalid } = req.body;
        
        const newFertilizer = new Fertilizer({
            name,
            type,
            price,
            quantity,
            rentalid
        });

        await newFertilizer.save();
        res.status(201).json({ message: 'Fertilizer added successfully', fertilizer: newFertilizer });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});


module.exports=FertilizerApp