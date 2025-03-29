const exp=require('express');
const FarmerApp=exp.Router();
const FarmerModel=require('../schemas/farmer');
const bcrypt=require('bcryptjs');

FarmerApp.post('/signup', async (req, res) => {
    try {
        const { farmerid, email, password, location } = req.body;
        const existingFarmer = await FarmerModel.findOne({ email });
        if (existingFarmer) {
            return res.status(400).json({ message: 'Email already registered' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newFarmer = new FarmerModel({
            farmerid,
            email,
            password: hashedPassword,
            location
        });
        await newFarmer.save();
        res.status(201).json({ message: 'Farmer registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
})

FarmerApp.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const farmer = await FarmerModel.findOne({ email });
        if (!farmer) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, farmer.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign(
            { farmerId: farmer._id, email: farmer.email }, 
            process.env.JWT_SECRET || 'your_jwt_secret',
            { expiresIn: '1h' }
        );
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
})

module.exports=FarmerApp